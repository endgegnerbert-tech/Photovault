"use client";

import { useState, useRef, useCallback, useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { CustomIcon } from "@/components/ui/custom-icon";
import { useEncryption } from "@/hooks/use-encryption";
import { useGalleryData } from "@/hooks/use-gallery-data";
import { useRealtimeSync, type SyncedPhoto } from "@/hooks/useRealtimeSync";
import { DecryptedThumbnail } from "./DecryptedThumbnail";
import {
  Plus,
  Search,
  Filter,
  Camera,
  Image as ImageIcon,
  LayoutGrid,
  Calendar,
  MoreVertical,
  X,
  Share2,
  Trash2,
  Heart,
  ExternalLink,
  RefreshCw,
  Loader2,
  SlidersHorizontal,
  Check,
  CloudOff,
  Download,
  Cloud,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertTriangle } from "lucide-react";
import { remoteStorage, isRealIPFSCID } from "@/lib/storage/remote-storage";
import { decryptFile } from "@/lib/crypto";
import type { PhotoMetadata } from "@/lib/storage/local-db";

interface PhotoGalleryProps {
  photosCount?: number;
  authUser: { id: string; email: string } | null;
}

// Generate placeholder photo URLs with dates
const generatePhotos = (count: number) => {
  const categories = [
    "nature",
    "architecture",
    "travel",
    "food",
    "animals",
    "city",
    "landscape",
    "portrait",
    "ocean",
    "forest",
  ];

  // Create photos with dates going backwards from today
  const today = new Date();
  return Array.from({ length: count }, (_, i) => {
    const date = new Date(today);
    date.setDate(date.getDate() - Math.floor(i / 3)); // 3 photos per day

    return {
      id: `photo-${i}`,
      cid: `Qm${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`,
      placeholderUrl: `https://picsum.photos/seed/${i + 100}/400/400`,
      category: categories[i % categories.length],
      date: date.toISOString().split("T")[0],
      metadata: undefined as PhotoMetadata | undefined,
    };
  });
};

// Group photos by date
const groupPhotosByDate = (photos: ReturnType<typeof generatePhotos>) => {
  const groups: { [key: string]: typeof photos } = {};
  photos.forEach((photo) => {
    if (!groups[photo.date]) {
      groups[photo.date] = [];
    }
    groups[photo.date].push(photo);
  });
  return Object.entries(groups).map(([date, photos]) => ({
    date,
    photos,
    label: formatDateLabel(date),
  }));
};

const formatDateLabel = (dateStr: string) => {
  const date = new Date(dateStr);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (dateStr === today.toISOString().split("T")[0]) {
    return "Today";
  } else if (dateStr === yesterday.toISOString().split("T")[0]) {
    return "Yesterday";
  } else {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  }
};

export function PhotoGallery({ photosCount = 0, authUser }: PhotoGalleryProps) {
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [selectMode, setSelectMode] = useState(false);
  const [selectedPhotos, setSelectedPhotos] = useState<Set<string>>(new Set());
  const [fullscreenPhoto, setFullscreenPhoto] = useState<string | null>(null);
  const [syncNotification, setSyncNotification] = useState<string | null>(null);

  // Fullscreen photo state
  const [fullscreenImageUrl, setFullscreenImageUrl] = useState<string | null>(
    null,
  );
  const [isLoadingFullscreen, setIsLoadingFullscreen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const longPressTimer = useRef<NodeJS.Timeout | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Encryption & Real Photo Storage
  const { secretKey } = useEncryption();
  const {
    photos: realPhotos,
    uploadPhoto,
    deletePhoto,
    isUploading,
    uploadProgress,
  } = useGalleryData(secretKey);

  // Realtime Sync - receive photos from other devices
  // When a new photo arrives, invalidate the gallery query to refresh
  const handleNewPhoto = useCallback(
    (photo: SyncedPhoto) => {
      console.log(
        "[Realtime] New photo from device:",
        photo.device_id,
        photo.cid,
      );
      setSyncNotification(`New photo received from another device`);
      setTimeout(() => setSyncNotification(null), 3000);

      // Invalidate gallery queries to refresh the photo list
      queryClient.invalidateQueries({ queryKey: ["photos"] });
      queryClient.invalidateQueries({ queryKey: ["photoCount"] });
    },
    [queryClient],
  );

  // Handle photo deletion from another device
  const handlePhotoDeleted = useCallback(
    (cid: string) => {
      console.log("[Realtime] Photo deleted from another device:", cid);
      setSyncNotification(`Photo deleted from another device`);
      setTimeout(() => setSyncNotification(null), 3000);

      // Invalidate gallery queries to refresh the photo list
      queryClient.invalidateQueries({ queryKey: ["photos"] });
      queryClient.invalidateQueries({ queryKey: ["photoCount"] });
    },
    [queryClient],
  );

  const { remoteCIDs, remoteCIDsFromOtherDevices, isConnected } =
    useRealtimeSync({
      onNewPhoto: handleNewPhoto,
      onPhotoDeleted: handlePhotoDeleted,
      enabled: true,
      secretKey,
    });

  // Combine local photos with remote-only photos
  const allPhotos = (() => {
    // Start with local photos
    const localPhotos = realPhotos.map((p) => ({
      id: p.id?.toString() || p.cid,
      cid: p.cid,
      placeholderUrl: "",
      category: "photo",
      date: p.uploadedAt.toISOString().split("T")[0],
      metadata: p,
      isLocal: true,
      isCloud: isRealIPFSCID(p.cid),
    }));

    // Add remote-only photos (from other devices, not in local DB)
    const localCids = new Set(realPhotos.map((p) => p.cid));
    const remoteOnlyPhotos = remoteCIDs
      .filter((r) => !localCids.has(r.cid))
      .map((r) => ({
        id: r.cid,
        cid: r.cid,
        placeholderUrl: "",
        category: "cloud",
        date: r.uploaded_at
          ? new Date(r.uploaded_at).toISOString().split("T")[0]
          : new Date().toISOString().split("T")[0],
        metadata: {
          cid: r.cid,
          nonce: r.nonce || "",
          fileName: `cloud_${r.cid}`,
          mimeType: r.mime_type || "image/jpeg",
          fileSize: r.file_size_bytes || 0,
          uploadedAt: r.uploaded_at ? new Date(r.uploaded_at) : new Date(),
        } as PhotoMetadata,
        isLocal: false,
        isCloud: true,
      }));

    return [...localPhotos, ...remoteOnlyPhotos];
  })();

  // Use real photos if available, otherwise use placeholders
  const photos = useMemo(
    () =>
      allPhotos.length > 0
        ? allPhotos
        : generatePhotos(Math.min(photosCount, 50)),
    [allPhotos, photosCount],
  );

  const filteredPhotos = useMemo(
    () =>
      photos.filter((photo) => {
        if (selectedFilter && photo.category !== selectedFilter) return false;
        if (searchQuery && !photo.category.includes(searchQuery.toLowerCase()))
          return false;
        return true;
      }),
    [photos, selectedFilter, searchQuery],
  );

  const filteredGroups = useMemo(
    () => groupPhotosByDate(filteredPhotos),
    [filteredPhotos],
  );

  // Load fullscreen photo (on-demand from IPFS if needed)
  const loadFullscreenPhoto = async (photo: (typeof photos)[0]) => {
    if (!secretKey || !photo.metadata) return;

    setIsLoadingFullscreen(true);
    setFullscreenImageUrl(null);

    try {
      let blobToDecrypt: Blob | undefined = photo.metadata.encryptedBlob;

      // Fetch from IPFS if not local
      if (!blobToDecrypt && photo.cid && isRealIPFSCID(photo.cid)) {
        console.log("Loading full-res from IPFS:", photo.cid);
        blobToDecrypt = await remoteStorage.download(photo.cid);
      }

      if (!blobToDecrypt) {
        console.error("No blob available for fullscreen");
        return;
      }

      // Decrypt
      const decrypted = await decryptFile(
        blobToDecrypt,
        photo.metadata.nonce,
        secretKey,
        photo.metadata.mimeType,
      );

      if (decrypted) {
        const url = URL.createObjectURL(decrypted);
        setFullscreenImageUrl(url);
      }
    } catch (error) {
      console.error("Failed to load fullscreen photo:", error);
    } finally {
      setIsLoadingFullscreen(false);
    }
  };

  // Download photo to device
  const downloadPhoto = async (photo: (typeof photos)[0]) => {
    if (!secretKey || !photo.metadata) return;

    setIsDownloading(true);

    try {
      let blobToDecrypt: Blob | undefined = photo.metadata.encryptedBlob;

      // Fetch from IPFS if not local
      if (!blobToDecrypt && photo.cid && isRealIPFSCID(photo.cid)) {
        blobToDecrypt = await remoteStorage.download(photo.cid);
      }

      if (!blobToDecrypt) return;

      // Decrypt
      const decrypted = await decryptFile(
        blobToDecrypt,
        photo.metadata.nonce,
        secretKey,
        photo.metadata.mimeType,
      );

      if (decrypted) {
        // Create download link
        const url = URL.createObjectURL(decrypted);
        const a = document.createElement("a");
        a.href = url;
        a.download =
          photo.metadata.fileName || `photo_${photo.cid.slice(0, 8)}.jpg`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        setSyncNotification("Photo downloaded!");
        setTimeout(() => setSyncNotification(null), 2000);
      }
    } catch (error) {
      console.error("Failed to download photo:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  const handlePhotoTap = (photoId: string, photo: (typeof photos)[0]) => {
    if (selectMode) {
      setSelectedPhotos((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(photoId)) {
          newSet.delete(photoId);
        } else {
          newSet.add(photoId);
        }
        return newSet;
      });
    } else {
      setFullscreenPhoto(photoId);
      if (photo.metadata) {
        loadFullscreenPhoto(photo);
      }
    }
  };

  const closeFullscreen = () => {
    setFullscreenPhoto(null);
    if (fullscreenImageUrl) {
      URL.revokeObjectURL(fullscreenImageUrl);
      setFullscreenImageUrl(null);
    }
  };

  const handleTouchStart = (photoId: string) => {
    longPressTimer.current = setTimeout(() => {
      setSelectMode(true);
      setSelectedPhotos(new Set([photoId]));
    }, 500);
  };

  const handleTouchEnd = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  };

  const categories = [
    { id: "nature", label: "Nature (Coming Soon)" },
    { id: "architecture", label: "Architecture (Coming Soon)" },
    { id: "travel", label: "Travel (Coming Soon)" },
    { id: "food", label: "Food (Coming Soon)" },
    { id: "animals", label: "Animals (Coming Soon)" },
    { id: "city", label: "City (Coming Soon)" },
    { id: "landscape", label: "Landscape (Coming Soon)" },
  ];

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    files.forEach((file) => uploadPhoto(file));
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const allPhotosCount = photos.length;

  return (
    <div className="flex flex-col h-full bg-[#FAFBFC]">
      {/* Header with Sketch UI */}
      <header className="px-5 pt-10 pb-4 bg-[#FAFBFC] sticky top-0 z-30 border-b-2 border-[#2563EB]/10">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold tracking-tight">Gallery</h1>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className={`p-2 rounded-full transition-colors ${showSearch ? "bg-[#2563EB]/10 text-[#2563EB]" : "text-[#6E6E73]"}`}
            >
              <Search className="w-6 h-6" />
            </button>
            <Button
              onClick={handleUploadClick}
              size="sm"
              className="scale-90 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
            >
              Hinzufügen
            </Button>
          </div>
        </div>

        {/* Subtitle / Status */}
        <div className="flex items-center justify-between px-1 mb-4">
          <p className="text-[15px] font-medium text-[#3B82F6]">
            {allPhotosCount} photos backed up
          </p>
          <div className="flex items-center gap-2">
            {isConnected ? (
              <Cloud className="w-5 h-5 text-[#30D158]" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-[#8E8E93]" />
            )}
          </div>
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div className="mb-4 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full pl-9 bg-gray-100 border-none rounded-xl h-10"
            />
          </div>
        )}

        {/* Filter Bar with Sketch UI */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
          <button
            onClick={() => setSelectedFilter(null)}
            className={`sketch-subheading text-[15px] px-4 py-1.5 rounded-full transition-colors ${
              selectedFilter === null
                ? "bg-[#2563EB] text-white"
                : "bg-[#2563EB]/5 text-[#2563EB]"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`text-sm font-medium px-4 py-1.5 rounded-full transition-colors whitespace-nowrap ${
                selectedFilter === cat.id
                  ? "bg-[#2563EB] text-white"
                  : "bg-[#2563EB]/5 text-[#2563EB]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </header>

      {/* Gallery Grid */}
      <main className="flex-1 overflow-y-auto px-1 pb-[100px]">
        {filteredGroups.length === 0 ? (
          <div className="pt-20 text-center px-10">
            <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-20" />
            <p className="text-lg font-medium text-[#6E6E73]">
              No photos found
            </p>
            <p className="text-sm text-[#8E8E93] mt-2">
              Try a different search term or filter
            </p>
          </div>
        ) : (
          filteredGroups.map((group) => (
            <div key={group.date} className="mb-8">
              <h2 className="text-lg font-semibold px-4 mb-3 sticky top-[160px] bg-[#FAFBFC]/90 backdrop-blur-md z-10 py-2">
                {group.label}
              </h2>
              <div className="grid grid-cols-3 gap-1">
                {group.photos.map((photo) => (
                  <div
                    key={photo.id}
                    className={`relative aspect-square overflow-hidden cursor-pointer active:opacity-70 transition-opacity ${
                      selectedPhotos.has(photo.id)
                        ? "ring-4 ring-[#2563EB] ring-inset"
                        : ""
                    }`}
                    onClick={() => handlePhotoTap(photo.id, photo)}
                    onTouchStart={() => handleTouchStart(photo.id)}
                    onTouchEnd={handleTouchEnd}
                    onContextMenu={(e) => {
                      e.preventDefault();
                      setSelectMode(true);
                      setSelectedPhotos(new Set([photo.id]));
                    }}
                  >
                    <DecryptedThumbnail
                      photo={photo.metadata!}
                      secretKey={secretKey}
                      showCloudBadge={true}
                    />

                    {/* Select Indicator */}
                    {selectMode && (
                      <div className="absolute top-2 right-2 z-10 w-6 h-6">
                        <div
                          className={`w-6 h-6 rounded-full p-0 flex items-center justify-center transition-all ${selectedPhotos.has(photo.id) ? "bg-[#2563EB] border border-[#2563EB]" : "bg-white/80 border border-[#2563EB] backdrop-blur-sm"}`}
                        >
                          {selectedPhotos.has(photo.id) && (
                            <Check className="w-3.5 h-3.5 text-white" />
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </main>

      {/* Sync Notifications */}
      {syncNotification && (
        <div className="fixed bottom-[100px] left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[400px]">
          <div className="bg-sky-500/90 dark:bg-sky-600/90 border border-sky-400/50 py-3 px-5 shadow-xl rounded-2xl backdrop-blur-md">
            <p className="text-white text-sm font-medium text-center flex items-center justify-center gap-3">
              <Loader2 className="w-4 h-4 animate-spin text-white/90" />
              {syncNotification}
            </p>
          </div>
        </div>
      )}

      {/* Fullscreen Viewer */}
      {fullscreenPhoto && (
        <div className="fixed inset-0 bg-black z-[100] flex flex-col">
          {/* Header */}
          <div className="p-4 flex items-center justify-between">
            <button
              onClick={closeFullscreen}
              className="p-2 text-white/80 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-4">
              <button className="p-2 text-white/80 hover:text-white">
                <Share2 className="w-6 h-6" />
              </button>
              <button className="p-2 text-white/80 hover:text-white">
                <Heart className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Image Container */}
          <div className="flex-1 relative flex items-center justify-center overflow-hidden">
            {isLoadingFullscreen ? (
              <div className="flex flex-col items-center gap-4">
                <Loader2 className="w-12 h-12 text-[#2563EB] animate-spin" />
                <p className="sketch-body text-white/60">Decrypting...</p>
              </div>
            ) : fullscreenImageUrl ? (
              <img
                src={fullscreenImageUrl}
                alt="Fullscreen"
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <div className="text-center p-10">
                <AlertTriangle className="w-12 h-12 text-[#FF3B30] mx-auto mb-4" />
                <p className="text-white font-medium">Loading failed</p>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="p-6 flex items-center justify-around bg-black/40 backdrop-blur-md">
            <button
              className="flex flex-col items-center gap-1 text-white/70"
              onClick={() => {
                const photo = photos.find((p) => p.id === fullscreenPhoto);
                if (photo) downloadPhoto(photo);
              }}
              disabled={isDownloading}
            >
              {isDownloading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <Download className="w-6 h-6" />
              )}
              <span className="sketch-body text-[10px]">Save</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-white/70">
              <ExternalLink className="w-6 h-6" />
              <span className="sketch-body text-[10px]">Export</span>
            </button>
            <button 
              className="flex flex-col items-center gap-1 text-[#FF3B30] hover:text-[#FF3B30]/80"
              onClick={async () => {
                const photo = photos.find((p) => p.id === fullscreenPhoto);
                if (!photo) return;
                
                if (confirm("Do you really want to permanently delete this photo?")) {
                  try {
                    // Falls ID ein String ist und mit 'photo-' anfängt (Placeholder), kann man es nicht löschen
                    const isPlaceholder = photo.id.startsWith('photo-');
                    if (isPlaceholder) {
                      alert("Placeholder photos cannot be deleted.");
                      return;
                    }

                    // Für echte Fotos: deletePhoto aufrufen
                    // photo.metadata hat die echten Daten
                    if (photo.metadata) {
                        await deletePhoto({ 
                            cid: photo.metadata.cid, 
                            id: photo.metadata.id 
                        });
                        closeFullscreen();
                    }
                  } catch (e) {
                    console.error("Delete failed", e);
                    alert("Error deleting photo.");
                  }
                }
              }}
            >
              <Trash2 className="w-6 h-6" />
              <span className="sketch-body text-[10px]">Delete</span>
            </button>
          </div>
        </div>
      )}

      {/* Hidden upload input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileUpload}
        className="hidden"
      />

      {/* Upload Progress Overlay */}
      {isUploading && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] flex items-center justify-center p-6">
          <div className="bg-white/95 dark:bg-black/90 w-full max-w-[280px] p-6 flex flex-col items-center rounded-3xl shadow-2xl border border-white/20">
            <div className="w-16 h-16 rounded-full bg-[#2563EB]/10 flex items-center justify-center mb-4">
              <Loader2 className="w-8 h-8 text-[#2563EB] animate-spin" />
            </div>
            <h3 className="text-lg font-bold text-center mb-2">
              Backup in progress...
            </h3>
            <p className="text-sm text-[#6E6E73] text-center mb-4">
              {uploadProgress > 0
                ? `${Math.round(uploadProgress)}% uploaded`
                : "Preparing..."}
            </p>
            <div className="w-full bg-[#E5E7EB] h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#2563EB] h-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
