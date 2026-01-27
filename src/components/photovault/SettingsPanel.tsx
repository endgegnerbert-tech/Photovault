"use client";

import { useState, useEffect } from "react";
import { Plus, Loader2, Check, Cloud } from "lucide-react";
import { CustomIcon } from "@/components/ui/custom-icon";
import type { AppState } from "./PhotoVaultApp";
import { useEncryption } from "@/hooks/use-encryption";
import {
  getDevicesForUser,
  uploadCIDMetadata,
  cidExistsInSupabase,
} from "@/lib/supabase";
import { getDeviceId } from "@/lib/deviceId";
import { remoteStorage } from "@/lib/storage/remote-storage";
import { getAllPhotos, getPhotoCount } from "@/lib/storage/local-db";
import { getUserKeyHash } from "@/lib/crypto";
import { useQuery } from "@tanstack/react-query";
import { signOut } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { 
  Folder, 
  Image as ImageIcon, 
  AlertTriangle, 
  Trash2, 
  Download, 
  Key, 
  Smartphone, 
  ChevronRight,
  RotateCcw
} from "lucide-react";

// Helper to format date
function formatDate(dateStr?: string): string {
  if (!dateStr) return "Unbekannt";
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return "Gerade eben";
  if (diffMins < 60) return `vor ${diffMins} Min.`;
  if (diffHours < 24) return `vor ${diffHours} Std.`;
  if (diffDays < 7) return `vor ${diffDays} Tagen`;
  return date.toLocaleDateString("de-DE");
}

interface SettingsPanelProps {
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
  onRestartOnboarding: () => void;
  authUser: { id: string; email: string } | null;
}

interface Device {
  id: string;
  device_name: string;
  device_type?: string;
  created_at?: string;
}

import { useSettingsStore } from "@/lib/storage/settings-store";

export function SettingsPanel({
  state,
  setState,
  onRestartOnboarding,
  authUser,
}: SettingsPanelProps) {
  const [showDevices, setShowDevices] = useState(false);
  const [showPhraseWarning, setShowPhraseWarning] = useState(false);
  const [showNewKeyWarning, setShowNewKeyWarning] = useState(false);
  const [showBackupPhrase, setShowBackupPhrase] = useState(false);
  const [showSourceSelector, setShowSourceSelector] = useState(false);
  const [showPlanSelector, setShowPlanSelector] = useState(false);
  const [realDevices, setRealDevices] = useState<Device[]>([]);

  // Manual Backup State
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({
    current: 0,
    total: 0,
  });

  // Persistent Settings
  const autoBackupEnabled = useSettingsStore(
    (state) => state.autoBackupEnabled,
  );
  const setAutoBackupEnabled = useSettingsStore(
    (state) => state.setAutoBackupEnabled,
  );
  const backgroundBackupEnabled = useSettingsStore(
    (state) => state.backgroundBackupEnabled,
  );
  const setBackgroundBackupEnabled = useSettingsStore(
    (state) => state.setBackgroundBackupEnabled,
  );
  const selectedPlan = useSettingsStore((state) => state.selectedPlan);
  const setSelectedPlan = useSettingsStore((state) => state.setSelectedPlan);
  const setLastBackup = useSettingsStore((state) => state.setLastBackup);

  const { secretKey, recoveryPhrase, generateNewKey, clearKey } =
    useEncryption();
  const currentDeviceId = typeof window !== "undefined" ? getDeviceId() : "";
  const [userKeyHash, setUserKeyHash] = useState<string | null>(null);

  // Get userKeyHash
  useEffect(() => {
    if (secretKey) {
      import("@/lib/crypto")
        .then((m) => m.getUserKeyHash(secretKey))
        .then(setUserKeyHash);
    }
  }, [secretKey]);

  // Fetch real devices from Supabase using hash (aggregates all devices with same key)
  useEffect(() => {
    if (!userKeyHash) return;

    const fetchDevices = async () => {
      try {
        const devices = await getDevicesForUser(userKeyHash);
        setRealDevices(devices as Device[]);
      } catch (err) {
        console.error("Failed to fetch devices:", err);
      }
    };

    fetchDevices();
  }, [userKeyHash]);

  // Real Photo Count Query
  const { data: realPhotoCount = 0 } = useQuery({
    queryKey: ['photoCount'],
    queryFn: getPhotoCount,
  });

  // Get the real backup phrase words
  const realBackupPhraseWords = recoveryPhrase?.split("-").slice(0, 12) || [];

  const toggleAutoBackup = () => {
    setAutoBackupEnabled(!autoBackupEnabled);
  };

  const toggleBackgroundBackup = () => {
    setBackgroundBackupEnabled(!backgroundBackupEnabled);
  };

  // Manual backup: Upload local photos to IPFS that aren't already there
  const triggerManualBackup = async () => {
    if (isUploading || !secretKey) return;

    setIsUploading(true);
    console.log("[Backup] Starting manual backup to IPFS...");

    try {
      const photos = await getAllPhotos();
      const photosWithBlobs = photos.filter((p) => p.encryptedBlob);

      setUploadProgress({ current: 0, total: photosWithBlobs.length });

      let uploaded = 0;
      const deviceId = getDeviceId();
      const keyHash = userKeyHash || (await getUserKeyHash(secretKey));

      for (const photo of photosWithBlobs) {
        if (!photo.encryptedBlob) continue;

        try {
          // Check if already in Supabase metadata for this user
          const existsInSupabase = await cidExistsInSupabase(
            photo.cid,
            keyHash,
          );

          if (!existsInSupabase) {
            // Upload encrypted blob to IPFS
            const newCid = await remoteStorage.upload(
              photo.encryptedBlob,
              photo.fileName,
            );
            console.log(`[Backup] Uploaded to IPFS: ${newCid}`);

            // Sync metadata to Supabase
            await uploadCIDMetadata(
              newCid,
              photo.fileSize,
              deviceId,
              photo.nonce,
              photo.mimeType,
              keyHash,
            );
          }

          uploaded++;
          setUploadProgress({
            current: uploaded,
            total: photosWithBlobs.length,
          });
        } catch (err) {
          console.error(`[Backup] Failed to upload ${photo.cid}:`, err);
        }
      }

      setLastBackup("Gerade eben");
      console.log(`[Backup] Complete: ${uploaded} photos processed`);
    } catch (err) {
      console.error("[Backup] Failed:", err);
    } finally {
      setIsUploading(false);
      setUploadProgress({ current: 0, total: 0 });
    }
  };

  const viewBackupPhrase = () => {
    setShowPhraseWarning(false);
    setShowBackupPhrase(true);
  };

  const handleGenerateNewKey = async () => {
    clearKey();
    const newPhrase = await generateNewKey();

    if (newPhrase) {
      setState((prev) => ({
        ...prev,
        photosCount: 0,
      }));
    }

    setShowNewKeyWarning(false);
  };

  const addDevice = () => {
    // Show the pairing modal
    setShowDevices(false);
    // Since DevicePairing is normally inside Dashboard,
    // we should probably have it available here too or trigger a global state.
    // In this component, we can just add the DevicePairing modal here as well.
    setShowPairingFromSettings(true);
  };

  const [showPairingFromSettings, setShowPairingFromSettings] = useState(false);
  const [showClearCacheWarning, setShowClearCacheWarning] = useState(false);

  const handleClearCache = async () => {
    try {
      // Clear IndexedDB (Dexie)
      const { db } = await import("@/lib/storage/local-db");
      await db.delete();

      // Clear local storage
      localStorage.clear();

      // Force reload to clean state
      window.location.reload();
    } catch (err) {
      console.error("Failed to clear cache:", err);
    }
  };

  const changeSource = (source: "photos-app" | "files-app") => {
    console.log("Update backup source preference:", source);
    setState((prev) => ({ ...prev, photoSource: source }));
    setShowSourceSelector(false);
  };

  const changePlan = (plan: "free" | "backup-plus") => {
    console.log("Update plan:", plan);
    setSelectedPlan(plan);
    setShowPlanSelector(false);
  };

  if (showDevices) {
    // Transform real devices into the format expected by DevicesView
    const displayDevices = realDevices.map((device) => ({
      id: device.id,
      name: device.device_name || "Unbekanntes Gerät",
      lastActive:
        device.id === currentDeviceId ? "Aktiv" : formatDate(device.created_at),
      syncing: false,
    }));

    // If no devices in DB, show current device
    if (displayDevices.length === 0) {
      displayDevices.push({
        id: currentDeviceId,
        name: "Dieses Gerät",
        lastActive: "Aktiv",
        syncing: false,
      });
    }

    return (
      <DevicesView
        devices={displayDevices}
        onBack={() => setShowDevices(false)}
        onAddDevice={addDevice}
      />
    );
  }

  return (
    <div className="h-full flex flex-col pb-4 overflow-y-auto">
      {/* Header with Sketch UI */}
      <header className="px-5 pt-8 pb-4">
        <h1 className="text-3xl font-bold tracking-tight">Einstellungen</h1>
      </header>

      <div className="flex-1 px-5">
        {/* Backup Settings Section with Sketch UI */}
        <div className="mb-8">
          <h2 className="sketch-subheading text-[15px] uppercase tracking-wide px-4 mb-3">
            Backup
          </h2>
          <div className="bg-white dark:bg-black/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/10">
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="text-[17px] font-medium">
                  Automatisches Backup
                </p>
                <p className="text-[13px] text-gray-500">
                  Neue Fotos automatisch sichern
                </p>
              </div>
              <Switch
                checked={autoBackupEnabled}
                onCheckedChange={toggleAutoBackup}
              />
            </div>

            <div className="h-[1px] bg-gray-200 dark:bg-white/10 mx-4" />

            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="text-[17px] font-medium">
                  Hintergrund-Backup
                </p>
                <p className="text-[13px] text-gray-500">
                  Weiter sichern wenn App geschlossen
                </p>
              </div>
              <Switch
                checked={backgroundBackupEnabled}
                onCheckedChange={toggleBackgroundBackup}
              />
            </div>

            <div className="h-[1px] bg-gray-200 dark:bg-white/10 mx-4" />

            <button
              onClick={() => {}} 
              className="w-full flex items-center justify-between p-4 cursor-not-allowed opacity-60"
            >
              <div className="flex items-center gap-4">
                <Folder className="w-6 h-6 text-blue-500" />
                <div className="text-left">
                  <span className="text-[17px] font-medium block">
                    Backup-Quelle
                  </span>
                  <span className="text-[14px] text-gray-500 italic">
                    Coming Soon
                  </span>
                </div>
              </div>
            </button>
          </div>

          <div className="px-4 mt-4">
            <Button
              onClick={triggerManualBackup}
              disabled={isUploading || !secretKey}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-12 text-[16px]"
              size="lg"
            >
              {isUploading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  {uploadProgress.total > 0
                    ? `${uploadProgress.current}/${uploadProgress.total}`
                    : "Wait..."}
                </>
              ) : (
                "Jetzt sichern"
              )}
            </Button>
          </div>
          <p className="text-[13px] text-gray-500 px-4 mt-3 text-center">
            Alle lokalen Fotos in die Cloud hochladen
          </p>
        </div>

        {/* Storage Section */}
        <div className="mb-8">
          <h2 className="text-[15px] font-semibold uppercase tracking-wide px-4 mb-3">
            Speicher
          </h2>
          <div className="bg-white dark:bg-black/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/10">
            <div className="p-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[17px] font-medium">
                  Aktueller Plan
                </span>
                <span className="text-[16px] font-medium text-blue-600">
                  {selectedPlan === "free" ? "Free" : "Backup+"}
                </span>
              </div>
              <p className="text-[14px] text-gray-500">
                {selectedPlan === "free"
                  ? "Fotos nur auf deinen Geräten"
                  : "200 GB Cloud-Backup aktiv"}
              </p>
            </div>
            <div className="h-[1px] bg-gray-200 dark:bg-white/10 mx-4" />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <span className="text-[15px] text-gray-500">
                  Verwendet
                </span>
                <span className="text-[15px] font-medium">
                  {realPhotoCount.toLocaleString()} Fotos (lokal)
                </span>
              </div>
            </div>
            <div className="h-[1px] bg-gray-200 dark:bg-white/10 mx-4" />
            <button
              onClick={() => setShowPlanSelector(true)}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
            >
              <span className="text-[17px] font-medium text-blue-600">
                {selectedPlan === "free"
                  ? "Upgrade zu Backup+"
                  : "Plan verwalten"}
              </span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Devices Section */}
        <div className="mb-8">
          <h2 className="text-[15px] font-semibold uppercase tracking-wide px-4 mb-3">
            Geräte
          </h2>
          <div className="bg-white dark:bg-black/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/10">
            <button
              onClick={() => setShowDevices(true)}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-4">
                <Smartphone className="w-7 h-7 text-gray-900 dark:text-gray-100" />
                <span className="text-[17px] font-medium">
                  Verbundene Geräte
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[15px] text-gray-500">
                  {realDevices.length || 1}
                </span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </button>
          </div>
        </div>

        {/* Security Section */}
        <div className="mb-8">
          <h2 className="text-[15px] font-semibold uppercase tracking-wide px-4 mb-3">
            Sicherheit
          </h2>
          <div className="bg-white dark:bg-black/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/10">
            <button
              onClick={() => setShowPhraseWarning(true)}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
            >
              <span className="text-[17px] font-medium">
                Backup-Phrase anzeigen
              </span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
            <div className="h-[1px] bg-gray-200 dark:bg-white/10 mx-4" />
            <button
              onClick={() => setShowNewKeyWarning(true)}
              className="w-full flex items-center justify-between p-4 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
            >
              <span className="text-[17px] font-medium text-red-500">
                Neuen Schlüssel erstellen
              </span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </div>
          <p className="text-[13px] text-gray-500 px-4 mt-3">
            Teile diese Wörter niemals mit anderen.
          </p>
        </div>

        {/* Maintenance Section */}
        <div className="mb-8">
          <h2 className="text-[15px] font-semibold uppercase tracking-wide px-4 mb-3">
            Wartung
          </h2>
          <div className="bg-white dark:bg-black/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/10">
            <button
              onClick={() => setShowClearCacheWarning(true)}
              className="w-full flex items-center justify-between p-4 hover:bg-orange-50 dark:hover:bg-orange-900/10 transition-colors"
            >
              <div className="flex items-center gap-4">
                <AlertTriangle className="w-7 h-7 text-orange-500" />
                <span className="text-[17px] font-medium text-orange-500">
                  Lokalen Cache leeren
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </div>
          <p className="text-[13px] text-gray-500 px-4 mt-3">
            Löscht lokale Vorschaubilder. Deine Cloud-Fotos bleiben sicher.
          </p>
        </div>

        {/* Danger Zone */}
        <div className="mb-8">
          <h2 className="text-[15px] font-semibold uppercase tracking-wide px-4 mb-3 text-red-500">
            Danger Zone
          </h2>
          <div className="bg-white dark:bg-black/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-sm border border-red-200 dark:border-red-900/30">
            <button
              onClick={async () => {
                if (confirm("WARNUNG: Möchtest du deinen Account wirklich löschen?\n\nDies wird alle lokalen Daten und deine Verknüpfung löschen. Cloud-Daten sind ohne den Schlüssel unbrauchbar. Diese Aktion ist nicht widerrufbar.")) {
                    try {
                        const { db } = await import("@/lib/storage/local-db");
                        await db.delete();
                        localStorage.clear();
                        await signOut();
                        window.location.reload();
                    } catch(e) {
                         alert("Fehler beim Löschen.");
                    }
                }
              }}
              className="w-full flex items-center justify-between p-4 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors group"
            >
              <div className="flex items-center gap-4">
                 <div className="p-1 rounded-full bg-red-100 dark:bg-red-900/20">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                 </div>
                <div className="text-left">
                  <span className="text-[17px] font-medium text-red-500 block">
                    Account löschen
                  </span>
                  <span className="text-[13px] text-red-400">
                    Daten unwiderruflich löschen
                  </span>
                </div>
              </div>
            </button>
            <div className="h-[1px] bg-red-100 dark:bg-red-900/20 mx-4" />
            <button
               onClick={() => alert("Daten-Export wird vorbereitet... (Mock)")}
               className="w-full flex items-center justify-between p-4 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
            >
               <span className="text-[15px] font-medium text-gray-900 dark:text-gray-100 pl-2">
                 Meine Daten anfordern
               </span>
               <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* View Backup Phrase Warning Modal */}
      {showPhraseWarning && (
        <Modal
          title="Sicherheitshinweis"
          message="Deine Backup-Phrase gibt vollen Zugriff auf deine verschlüsselten Fotos. Nur an einem privaten Ort anzeigen."
          confirmLabel="Phrase anzeigen"
          confirmDestructive={false}
          onConfirm={viewBackupPhrase}
          onCancel={() => setShowPhraseWarning(false)}
        />
      )}

      {/* Show Backup Phrase Modal */}
      {showBackupPhrase && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-6 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-900 w-full max-w-[400px] p-6 shadow-2xl rounded-3xl border border-white/20">
            <h3 className="text-2xl font-bold text-center mb-2">
              Back-up Phrase
            </h3>
            <p className="text-[14px] text-gray-500 text-center mb-6">
              Notiere diese Wörter sicher.
            </p>

            {realBackupPhraseWords.length > 0 ? (
              <div className="grid grid-cols-2 gap-3 mb-6">
                {realBackupPhraseWords.map((word, index) => (
                  <div
                    key={index}
                    className="p-2 text-center bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800"
                  >
                    <span className="text-[10px] text-gray-400 block uppercase tracking-wider">
                      {index + 1}
                    </span>
                    <span className="text-[14px] font-medium font-mono">
                      {word}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mb-6">
                <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 p-4 rounded-xl">
                  <p className="text-[13px] text-orange-600 text-center font-medium">
                    Kein Schlüssel gefunden.
                  </p>
                </div>
              </div>
            )}

            <Button
              onClick={() => setShowBackupPhrase(false)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-12 text-[16px]"
            >
              Fertig
            </Button>
          </div>
        </div>
      )}

      {/* Generate New Key Warning Modal */}
      {showNewKeyWarning && (
        <Modal
          title="Datenverlust-Warnung"
          message="Das Erstellen eines neuen Schlüssels löscht alle vorhandenen Backup-Daten permanent. Diese Aktion kann nicht rückgängig gemacht werden."
          confirmLabel="Neuen Schlüssel erstellen"
          confirmDestructive={true}
          onConfirm={handleGenerateNewKey}
          onCancel={() => setShowNewKeyWarning(false)}
        />
      )}

      {/* Source Selector Modal */}
      {showSourceSelector && (
        <SourceSelectorModal
          currentSource={state.photoSource}
          onSelect={changeSource}
          onClose={() => setShowSourceSelector(false)}
        />
      )}

      {/* Plan Selector Modal */}
      {showPlanSelector && (
        <PlanSelectorModal
          currentPlan={selectedPlan}
          onSelect={changePlan}
          onClose={() => setShowPlanSelector(false)}
        />
      )}

      {/* Clear Cache Warning Modal */}
      {showClearCacheWarning && (
        <Modal
          title="Cache leeren?"
          message="Dies wird lokale Vorschaubilder und Gerätedaten löschen. Deine verschlüsselten Fotos in der Cloud bleiben sicher. Die App wird neu geladen."
          confirmLabel="Cache leeren"
          confirmDestructive={true}
          onConfirm={handleClearCache}
          onCancel={() => setShowClearCacheWarning(false)}
        />
      )}

      {/* Device Pairing Modal */}
      <DevicePairing
        isOpen={showPairingFromSettings}
        onClose={() => setShowPairingFromSettings(false)}
      />
    </div>
  );
}

import { DevicePairing } from "@/components/features/settings/DevicePairing";

function SettingsToggleRow({
  label,
  description,
  enabled,
  onToggle,
}: {
  label: string;
  description: string;
  enabled: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between p-4 ios-tap-target"
    >
      <div className="text-left">
        <p className="text-[17px] text-[#1D1D1F]">{label}</p>
        <p className="text-[13px] text-[#6E6E73] mt-0.5">{description}</p>
      </div>
      <div
        className={`w-[51px] h-[31px] rounded-full p-[2px] shrink-0 ${
          enabled ? "bg-[#30D158]" : "bg-[#E5E5EA]"
        }`}
      >
        <div
          className={`w-[27px] h-[27px] rounded-full bg-white shadow-sm ${
            enabled ? "ml-auto" : ""
          }`}
        />
      </div>
    </button>
  );
}

function DevicesView({
  devices,
  onBack,
  onAddDevice,
}: {
  devices: {
    id: string;
    name: string;
    lastActive: string;
    syncing?: boolean;
  }[];
  onBack: () => void;
  onAddDevice: () => void;
}) {
  return (
    <div className="h-full flex flex-col pb-4 overflow-y-auto bg-[#FAFBFC]">
      {/* Header with Sketch UI */}
      <header className="px-5 pt-6 pb-4">
        <button
          onClick={onBack}
          className="text-blue-600 mb-2 flex items-center gap-2 hover:underline"
        >
          ← Zurück
        </button>
        <h1 className="text-3xl font-bold tracking-tight">Geräte</h1>
      </header>

      <div className="flex-1 px-5">
        <div className="bg-white dark:bg-black/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/10">
          {devices.map((device, index) => (
            <div key={device.id}>
              {index > 0 && <div className="h-[1px] bg-gray-200 dark:bg-white/10 mx-4" />}
              <div className="flex items-center gap-4 p-4">
                <Smartphone className="w-8 h-8 text-gray-400" />
                <div className="flex-1">
                  <p className="text-[17px] font-medium text-gray-900 dark:text-gray-100">
                    {device.name}
                  </p>
                  <p className="text-[13px] text-gray-500">
                    {device.lastActive}
                  </p>
                </div>
                {device.syncing ? (
                  <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />
                ) : device.lastActive === "Aktiv" ? (
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-[13px] font-medium text-green-500">
                      Aktiv
                    </span>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <Button onClick={onAddDevice} className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-12" size="lg">
          Neu verbinden
        </Button>

        <p className="text-[13px] text-gray-500 text-center mt-4 px-4">
          Schlüssel scannen oder Recovery-Phrase eingeben
        </p>
      </div>
    </div>
  );
}

function SourceSelectorModal({
  currentSource,
  onSelect,
  onClose,
}: {
  currentSource: "photos-app" | "files-app";
  onSelect: (source: "photos-app" | "files-app") => void;
  onClose: () => void;
}) {
  const sources = [
    {
      id: "photos-app" as const,
      label: "Fotos-App",
      description: "Alle Fotos aus der iOS Foto-Bibliothek",
    },
    {
      id: "files-app" as const,
      label: "Dateien-App",
      description: "Fotos aus einem bestimmten Ordner",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/40 flex items-end justify-center z-50">
      <div className="bg-white dark:bg-gray-900 w-full max-w-[428px] rounded-t-2xl p-6 pb-10 border-t border-gray-200 dark:border-gray-800">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">
          Backup-Quelle
        </h3>
        <p className="text-[15px] text-gray-500 text-center mb-6">
          Wo sind deine Fotos gespeichert?
        </p>

        <div className="space-y-3 mb-6">
          {sources.map((source) => (
            <button
              key={source.id}
              onClick={() => onSelect(source.id)}
              className={`w-full p-4 rounded-xl bg-gray-50 dark:bg-white/5 text-left ios-tap-target transition-all ${
                currentSource === source.id ? "ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/20" : "hover:bg-gray-100 dark:hover:bg-white/10"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[17px] font-medium text-gray-900 dark:text-white">
                    {source.label}
                  </p>
                  <p className="text-[13px] text-gray-500 mt-0.5">
                    {source.description}
                  </p>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    currentSource === source.id
                      ? "border-blue-500 bg-blue-500"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                >
                  {currentSource === source.id && (
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full h-[44px] text-[#007AFF] text-[17px] ios-tap-target"
        >
          Abbrechen
        </button>
      </div>
    </div>
  );
}

function PlanSelectorModal({
  currentPlan,
  onSelect,
  onClose,
}: {
  currentPlan: "free" | "backup-plus";
  onSelect: (plan: "free" | "backup-plus") => void;
  onClose: () => void;
}) {
  const plans = [
    {
      id: "free" as const,
      label: "FREE",
      subtitle: "Auf deinen Geräten",
      price: "0€/Monat",
      features: [
        "Unbegrenzte Fotos",
        "Zero-Knowledge Verschlüsselung",
        "Multi-Device Sync",
      ],
    },
    {
      id: "backup-plus" as const,
      label: "BACKUP+ (Coming Soon)",
      subtitle: "Dauerhaft im Netz",
      price: "2,99€/Monat",
      features: [
        "Alles von Free",
        "200 GB Cloud-Backup",
        "Schnellere Synchronisierung",
      ],
      disabled: true,
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/40 flex items-end justify-center z-50">
      <div className="bg-white dark:bg-gray-900 w-full max-w-[428px] rounded-t-2xl p-6 pb-10 max-h-[80vh] overflow-y-auto border-t border-gray-200 dark:border-gray-800">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">
          Speicherplan
        </h3>
        <p className="text-[15px] text-gray-500 text-center mb-6">
          Du kannst jederzeit wechseln
        </p>

        <div className="space-y-3 mb-6">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => !plan.disabled && onSelect(plan.id)}
              disabled={plan.disabled}
              className={`w-full p-4 rounded-xl text-left ios-tap-target transition-all ${
                plan.disabled
                  ? "bg-gray-50 dark:bg-white/5 cursor-not-allowed opacity-60"
                  : currentPlan === plan.id
                    ? "bg-blue-50 dark:bg-blue-900/20 ring-2 ring-blue-500"
                    : "bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-[13px] font-bold text-blue-600 dark:text-blue-400 tracking-wide">
                    {plan.label}
                  </p>
                  <p className="text-[17px] font-semibold text-gray-900 dark:text-white mt-0.5">
                    {plan.subtitle}
                  </p>
                  <ul className="mt-2 space-y-1">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-[13px] text-gray-500 flex items-center gap-2"
                      >
                        <span className="text-green-500">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[15px] font-semibold text-gray-900 dark:text-white mt-3">
                    {plan.price}
                  </p>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    currentPlan === plan.id
                      ? "border-blue-500 bg-blue-500"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                >
                  {currentPlan === plan.id && (
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full h-[44px] text-[#007AFF] text-[17px] ios-tap-target"
        >
          Abbrechen
        </button>
      </div>
    </div>
  );
}

function Modal({
  title,
  message,
  confirmLabel,
  confirmDestructive,
  onConfirm,
  onCancel,
}: {
  title: string;
  message: string;
  confirmLabel: string;
  confirmDestructive: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-8">
      <div className="bg-white dark:bg-gray-800 w-full max-w-[270px] rounded-2xl overflow-hidden shadow-2xl">
        <div className="p-4 text-center">
          <h3 className="text-[17px] font-semibold text-gray-900 dark:text-white mb-1">
            {title}
          </h3>
          <p className="text-[13px] text-gray-500 leading-relaxed">
            {message}
          </p>
        </div>
        <div className="border-t border-[#E5E5EA]">
          <button
            onClick={onCancel}
            className="w-full py-3 text-[17px] text-[#007AFF] border-b border-[#E5E5EA] ios-tap-target"
          >
            Abbrechen
          </button>
          <button
            onClick={onConfirm}
            className={`w-full py-3 text-[17px] font-semibold ios-tap-target ${
              confirmDestructive ? "text-[#FF3B30]" : "text-[#007AFF]"
            }`}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
