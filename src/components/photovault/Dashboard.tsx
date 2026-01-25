"use client";

import { useState } from "react";
import { HelpCircle, Link2, Loader2 } from "lucide-react";
import { CustomIcon } from "@/components/ui/custom-icon";
import type { AppState } from "./PhotoVaultApp";
import { useEncryption } from "@/hooks/use-encryption";
import { useGalleryData } from "@/hooks/use-gallery-data";
import { DevicePairing } from "@/components/features/settings/DevicePairing";
import { uploadCIDMetadata, cidExistsInSupabase } from "@/lib/supabase";
import { remoteStorage } from "@/lib/storage/remote-storage";
import { getAllPhotos } from "@/lib/storage/local-db";
import { getDeviceId } from "@/lib/deviceId";
import { getUserKeyHash } from "@/lib/crypto";
import {
  SketchButton,
  SketchCard,
  SketchToggle,
  SketchIcon,
  SketchCircularProgress
} from "@/sketch-ui";

interface DashboardProps {
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
  authUser: { id: string; email: string } | null;
}

import { useSettingsStore } from "@/lib/storage/settings-store";

export function Dashboard({ state, setState, authUser }: DashboardProps) {
  const [showTooltip, setShowTooltip] = useState<string | null>(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showPairing, setShowPairing] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({ current: 0, total: 0 });

  // Persistent Settings - Using individual selectors for stability
  const backupActive = useSettingsStore((state) => state.backupActive);
  const setBackupActive = useSettingsStore((state) => state.setBackupActive);
  const lastBackup = useSettingsStore((state) => state.lastBackup);
  const setLastBackup = useSettingsStore((state) => state.setLastBackup);
  const permanence = useSettingsStore((state) => state.permanence);

  // Get real photo count from encryption layer
  // Note: hasKey is checked to avoid calling useGalleryData without a key
  const { secretKey, hasKey } = useEncryption();
  const { photoCount, userKeyHash } = useGalleryData(hasKey ? secretKey : null);

  // Use real photo count if available
  const displayPhotoCount = photoCount > 0 ? photoCount : state.photosCount;

  const toggleBackup = () => {
    setShowConfirmDialog(true);
  };

  const confirmToggle = () => {
    const newState = !backupActive;
    setBackupActive(newState);
    setShowConfirmDialog(false);
  };

  // Manual backup: Upload local photos to IPFS that aren't already there
  const triggerManualBackup = async () => {
    if (isUploading || !secretKey) return;

    setIsUploading(true);
    console.log("Starting backup to IPFS...");

    try {
      const photos = await getAllPhotos();
      const photosWithBlobs = photos.filter((p) => p.encryptedBlob);

      setUploadProgress({ current: 0, total: photosWithBlobs.length });

      let uploaded = 0;
      const deviceId = getDeviceId();
      const keyHash = userKeyHash || await getUserKeyHash(secretKey);

      for (const photo of photosWithBlobs) {
        if (!photo.encryptedBlob) continue;

        try {
          // Check if already in Supabase metadata for this user
          const existsInSupabase = await cidExistsInSupabase(photo.cid, keyHash);

          if (!existsInSupabase) {
            // Upload encrypted blob to IPFS
            const newCid = await remoteStorage.upload(photo.encryptedBlob, photo.fileName);
            console.log(`Uploaded to IPFS: ${newCid}`);

            // Sync metadata to Supabase
            await uploadCIDMetadata(
              newCid,
              photo.fileSize,
              deviceId,
              photo.nonce,
              photo.mimeType,
              keyHash
            );
          }

          uploaded++;
          setUploadProgress({ current: uploaded, total: photosWithBlobs.length });
        } catch (err) {
          console.error(`Failed to upload ${photo.cid}:`, err);
        }
      }

      setLastBackup("Gerade eben");
      console.log(`Backup complete: ${uploaded} photos processed`);
    } catch (err) {
      console.error("Backup failed:", err);
    } finally {
      setIsUploading(false);
      setUploadProgress({ current: 0, total: 0 });
    }
  };

  const tooltips = {
    photos: "Lokal auf deinen Geräten gespeichert",
    lastBackup: "Automatisches Backup alle 6 Stunden",
    permanence: "Fotos sind auf mehreren Geräten gesichert",
  };

  return (
    <div className="h-full flex flex-col px-5 pt-6 pb-4 overflow-y-auto">
      {/* Header */}
      <header className="mb-6">
        <h1 className="sketch-heading text-[28px]">Backup</h1>
        <p className="sketch-body text-[15px] text-[#6E6E73] mt-1">
          Verschlüsseltes Photo-Backup
        </p>
      </header>

      {/* Status Toggle with Sketch UI */}
      <SketchCard className="p-0 overflow-hidden mb-6">
        <div className="p-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center ${
                backupActive ? "bg-[#30D158]/10" : "bg-[#2563EB]/10"
              }`}
            >
              <SketchIcon 
                icon="shield" 
                size={34} 
                color={backupActive ? "#30D158" : "#2563EB"} 
              />
            </div>
            <div className="text-left">
              <p className="sketch-subheading text-[18px]">
                Backup {backupActive ? "Aktiv" : "Aus"}
              </p>
              <p className="sketch-body text-[14px] text-[#6E6E73]">
                {backupActive
                   ? "Deine Fotos werden geschützt"
                   : "Tippe zum Aktivieren"}
              </p>
            </div>
          </div>
          <SketchToggle 
            checked={backupActive} 
            onChange={confirmToggle} 
          />
        </div>
      </SketchCard>

      {/* Help text below toggle */}
      <p className="text-[13px] text-[#6E6E73] px-2 mb-6">
        Automatisch neue Fotos sichern
      </p>

      {/* Metrics Grid with Sketch UI */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <MetricCard
          icon="photo"
          value={displayPhotoCount.toLocaleString()}
          label="Fotos"
          tooltip={tooltips.photos}
          showTooltip={showTooltip === "photos"}
          onTap={() =>
            setShowTooltip(showTooltip === "photos" ? null : "photos")
          }
        />
        <MetricCard
          icon="clock"
          value={lastBackup}
          label="Letztes"
          tooltip={tooltips.lastBackup}
          showTooltip={showTooltip === "lastBackup"}
          onTap={() =>
            setShowTooltip(showTooltip === "lastBackup" ? null : "lastBackup")
          }
        />
        <MetricCard
          icon="shield"
          value={`${permanence}%`}
          label="Dauerhaft"
          tooltip={tooltips.permanence}
          showTooltip={showTooltip === "permanence"}
          onTap={() =>
            setShowTooltip(showTooltip === "permanence" ? null : "permanence")
          }
        />
      </div>

      {/* Primary Action Button with Sketch UI */}
      <div className="px-1">
        <SketchButton
            onClick={triggerManualBackup}
            disabled={isUploading}
            className="w-full"
            size="lg"
        >
            {isUploading ? (
            <span className="flex items-center justify-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                {uploadProgress.total > 0
                ? `${uploadProgress.current}/${uploadProgress.total}`
                : "..."}
            </span>
            ) : "Jetzt sichern"}
        </SketchButton>
      </div>

      {/* Trust Footer */}
      <div className="mt-auto pt-6 pb-2">
         {authUser?.id === "guest" && (
            <div className="bg-[#2563EB]/5 border border-[#2563EB]/20 rounded-xl p-4 mb-6">
                <p className="sketch-body text-sm text-[#1E40AF] text-center">
                    Du nutzt PhotoVault gerade lokal. 
                    Erstelle ein Konto, um deine Fotos sicher in der Cloud zu backuppen.
                </p>
                <button 
                  onClick={() => setState(prev => ({ ...prev, isOnboarded: false }))}
                  className="w-full mt-3 py-2 sketch-subheading text-[#2563EB] text-sm hover:underline"
                >
                  Konto jetzt erstellen
                </button>
            </div>
         )}
        <p className="sketch-body text-[15px] text-[#8E8E93] text-center leading-relaxed">
          Deine Fotos sind verschlüsselt.
          <br />
          Niemand außer dir kann sie sehen.
        </p>
      </div>

      {/* Confirmation Dialog */}
      {showConfirmDialog && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-8">
          <div className="bg-white w-full max-w-[270px] rounded-2xl overflow-hidden">
            <div className="p-4 text-center">
              <h3 className="sketch-subheading text-[17px] text-[#1D1D1F] mb-1">
                {backupActive
                  ? "Backup deaktivieren?"
                  : "Backup aktivieren?"}
              </h3>
              <p className="text-[13px] text-[#6E6E73] leading-relaxed">
                {backupActive
                  ? "Neue Fotos werden nicht mehr automatisch gesichert."
                  : "Neue Fotos werden automatisch verschlüsselt und gesichert."}
              </p>
            </div>
            <div className="border-t border-[#E5E5EA]">
              <button
                onClick={() => setShowConfirmDialog(false)}
                className="w-full py-3 text-[17px] text-[#007AFF] border-b border-[#E5E5EA] ios-tap-target"
              >
                Abbrechen
              </button>
              <button
                onClick={confirmToggle}
                className={`w-full py-3 text-[17px] font-semibold ios-tap-target ${
                  backupActive ? "text-[#FF3B30]" : "text-[#30D158]"
                }`}
              >
                {backupActive ? "Deaktivieren" : "Aktivieren"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Device Pairing Modal */}
      <DevicePairing isOpen={showPairing} onClose={() => setShowPairing(false)} />
    </div>
  );
}

function MetricCard({
  icon,
  value,
  label,
  tooltip,
  showTooltip,
  onTap,
}: {
  icon: "photo" | "shield" | "clock";
  value: string;
  label: string;
  tooltip: string;
  showTooltip: boolean;
  onTap: () => void;
}) {
  return (
    <div className="relative">
      <SketchCard onClick={onTap} className="p-3 text-center cursor-pointer hover:bg-[#2563EB]/5 transition-colors">
        <div className="flex justify-center mb-2 relative">
          <SketchIcon icon={icon} size={28} />
          <HelpCircle className="w-3 h-3 text-[#C7C7CC] absolute -right-0.5 -top-0.5" />
        </div>
        <p className="sketch-subheading text-[16px] truncate">
          {value}
        </p>
        <p className="sketch-body text-[10px] text-[#6E6E73]">{label}</p>
      </SketchCard>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-[160px] z-20">
            <SketchCard className="bg-[#1D1D1F] p-2">
                <p className="sketch-body text-white text-[12px] text-center leading-tight">
                    {tooltip}
                </p>
            </SketchCard>
            <div className="absolute left-1/2 -translate-x-1/2 top-[100%] w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-[#1D1D1F]" />
        </div>
      )}
    </div>
  );
}
