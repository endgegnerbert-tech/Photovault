"use client";

import { useState, useEffect } from "react";
import { Plus, Loader2, Check, Cloud } from "lucide-react";
import { CustomIcon } from "@/components/ui/custom-icon";
import type { AppState } from "./PhotoVaultApp";
import { useEncryption } from "@/hooks/use-encryption";
import { getDevicesForUser, uploadCIDMetadata, cidExistsInSupabase } from "@/lib/supabase";
import { getDeviceId } from "@/lib/deviceId";
import { remoteStorage } from "@/lib/storage/remote-storage";
import { getAllPhotos } from "@/lib/storage/local-db";
import { getUserKeyHash } from "@/lib/crypto";
import {
  SketchButton,
  SketchCard,
  SketchToggle,
  SketchIcon,
  SketchCircularProgress
} from "@/sketch-ui";

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
  const [uploadProgress, setUploadProgress] = useState({ current: 0, total: 0 });

  // Persistent Settings
  const autoBackupEnabled = useSettingsStore(state => state.autoBackupEnabled);
  const setAutoBackupEnabled = useSettingsStore(state => state.setAutoBackupEnabled);
  const backgroundBackupEnabled = useSettingsStore(state => state.backgroundBackupEnabled);
  const setBackgroundBackupEnabled = useSettingsStore(state => state.setBackgroundBackupEnabled);
  const selectedPlan = useSettingsStore(state => state.selectedPlan);
  const setSelectedPlan = useSettingsStore(state => state.setSelectedPlan);
  const setLastBackup = useSettingsStore(state => state.setLastBackup);

  const { secretKey, recoveryPhrase, generateNewKey, clearKey } = useEncryption();
  const currentDeviceId = typeof window !== "undefined" ? getDeviceId() : "";
  const [userKeyHash, setUserKeyHash] = useState<string | null>(null);

  // Get userKeyHash
  useEffect(() => {
    if (secretKey) {
      import("@/lib/crypto").then(m => m.getUserKeyHash(secretKey)).then(setUserKeyHash);
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
      const keyHash = userKeyHash || await getUserKeyHash(secretKey);

      for (const photo of photosWithBlobs) {
        if (!photo.encryptedBlob) continue;

        try {
          // Check if already in Supabase metadata for this user
          const existsInSupabase = await cidExistsInSupabase(photo.cid, keyHash);

          if (!existsInSupabase) {
            // Upload encrypted blob to IPFS
            const newCid = await remoteStorage.upload(photo.encryptedBlob, photo.fileName);
            console.log(`[Backup] Uploaded to IPFS: ${newCid}`);

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
      lastActive: device.id === currentDeviceId ? "Aktiv" : formatDate(device.created_at),
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
      <header className="px-5 pt-6 pb-4 bg-[#FAFBFC]">
        <h1 className="sketch-heading text-[32px]">
          Einstellungen
        </h1>
      </header>

      <div className="flex-1 px-5">
        {/* Backup Settings Section with Sketch UI */}
        <div className="mb-8">
          <h2 className="sketch-subheading text-[15px] uppercase tracking-wide px-4 mb-3">
            Backup
          </h2>
          <SketchCard className="overflow-hidden p-0">
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="sketch-subheading text-[17px]">Automatisches Backup</p>
                <p className="sketch-body text-[13px] text-[#6E6E73]">Neue Fotos automatisch sichern</p>
              </div>
              <SketchToggle 
                checked={autoBackupEnabled} 
                onChange={toggleAutoBackup} 
              />
            </div>
            
            <div className="h-[2px] bg-[#2563EB]/10 mx-4" />
            
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="sketch-subheading text-[17px]">Hintergrund-Backup</p>
                <p className="sketch-body text-[13px] text-[#6E6E73]">Weiter sichern wenn App geschlossen</p>
              </div>
              <SketchToggle 
                checked={backgroundBackupEnabled} 
                onChange={toggleBackgroundBackup} 
              />
            </div>

            <div className="h-[2px] bg-[#2563EB]/10 mx-4" />

            <button
              onClick={() => setShowSourceSelector(true)}
              className="w-full flex items-center justify-between p-4 hover:bg-[#2563EB]/5 transition-colors"
            >
              <div className="flex items-center gap-4">
                <SketchIcon icon="folder" size={28} />
                <div className="text-left">
                  <span className="sketch-subheading text-[17px] block">
                    Backup-Quelle
                  </span>
                  <span className="sketch-body text-[14px] text-[#6E6E73]">
                    {state.photoSource === "photos-app"
                      ? "Fotos-App"
                      : "Dateien-App"}
                  </span>
                </div>
              </div>
              <CustomIcon name="chevronRight" size={16} className="opacity-40" />
            </button>
          </SketchCard>

          <div className="px-4 mt-4">
            <SketchButton
              onClick={triggerManualBackup}
              disabled={isUploading || !secretKey}
              className="w-full"
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
            </SketchButton>
          </div>
          <p className="sketch-body text-[13px] text-[#6E6E73] px-4 mt-3 text-center">
            Alle lokalen Fotos in die Cloud hochladen
          </p>
        </div>

        {/* Storage Section with Sketch UI */}
        <div className="mb-8">
          <h2 className="sketch-subheading text-[15px] uppercase tracking-wide px-4 mb-3">
            Speicher
          </h2>
          <SketchCard className="overflow-hidden p-0">
            <div className="p-4">
              <div className="flex items-center justify-between mb-1">
                <span className="sketch-subheading text-[17px]">
                  Aktueller Plan
                </span>
                <span className="sketch-subheading text-[16px] text-[#2563EB]">
                  {selectedPlan === "free" ? "Free" : "Backup+"}
                </span>
              </div>
              <p className="sketch-body text-[14px] text-[#6E6E73]">
                {selectedPlan === "free"
                  ? "Fotos nur auf deinen Geräten"
                  : "200 GB Cloud-Backup aktiv"}
              </p>
            </div>
            <div className="h-[2px] bg-[#2563EB]/10 mx-4" />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <span className="sketch-body text-[15px] text-[#6E6E73]">Verwendet</span>
                <span className="sketch-subheading text-[15px]">
                  {state.photosCount.toLocaleString()} Fotos (lokal)
                </span>
              </div>
            </div>
            <div className="h-[2px] bg-[#2563EB]/10 mx-4" />
            <button
              onClick={() => setShowPlanSelector(true)}
              className="w-full flex items-center justify-between p-4 hover:bg-[#2563EB]/5 transition-colors"
            >
              <span className="sketch-subheading text-[17px] text-[#2563EB]">
                {selectedPlan === "free"
                  ? "Upgrade zu Backup+"
                  : "Plan verwalten"}
              </span>
              <CustomIcon name="chevronRight" size={16} className="opacity-40" />
            </button>
          </SketchCard>
        </div>

        {/* Devices Section with Sketch UI */}
        <div className="mb-8">
          <h2 className="sketch-subheading text-[15px] uppercase tracking-wide px-4 mb-3">
            Geräte
          </h2>
          <SketchCard className="overflow-hidden p-0">
            <button
              onClick={() => setShowDevices(true)}
              className="w-full flex items-center justify-between p-4 hover:bg-[#2563EB]/5 transition-colors"
            >
              <div className="flex items-center gap-4">
                <SketchIcon icon="photo" size={28} />
                <span className="sketch-subheading text-[17px]">
                  Verbundene Geräte
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="sketch-body text-[15px] text-[#6E6E73]">
                  {realDevices.length || 1}
                </span>
                <CustomIcon name="chevronRight" size={16} className="opacity-40" />
              </div>
            </button>
          </SketchCard>
        </div>

        {/* Security Section with Sketch UI */}
        <div className="mb-8">
          <h2 className="sketch-subheading text-[15px] uppercase tracking-wide px-4 mb-3">
            Sicherheit
          </h2>
          <SketchCard className="overflow-hidden p-0">
            <button
              onClick={() => setShowPhraseWarning(true)}
              className="w-full flex items-center justify-between p-4 hover:bg-[#2563EB]/5 transition-colors"
            >
              <span className="sketch-subheading text-[17px]">
                Backup-Phrase anzeigen
              </span>
              <CustomIcon name="chevronRight" size={16} className="opacity-40" />
            </button>
            <div className="h-[2px] bg-[#2563EB]/10 mx-4" />
            <button
              onClick={() => setShowNewKeyWarning(true)}
              className="w-full flex items-center justify-between p-4 hover:bg-[#FF3B30]/5 transition-colors"
            >
              <span className="sketch-subheading text-[17px] text-[#FF3B30]">
                Neuen Schlüssel erstellen
              </span>
              <CustomIcon name="chevronRight" size={16} className="opacity-40" />
            </button>
          </SketchCard>
          <p className="sketch-body text-[13px] text-[#6E6E73] px-4 mt-3">
            Teile diese Wörter niemals mit anderen.
          </p>
        </div>

        {/* Maintenance Section with Sketch UI */}
        <div className="mb-8">
          <h2 className="sketch-subheading text-[15px] uppercase tracking-wide px-4 mb-3">
            Wartung
          </h2>
          <SketchCard className="overflow-hidden p-0">
            <button
              onClick={() => setShowClearCacheWarning(true)}
              className="w-full flex items-center justify-between p-4 hover:bg-[#FF9500]/5 transition-colors"
            >
              <div className="flex items-center gap-4">
                <SketchIcon icon="warning" size={28} color="#FF9500" />
                <span className="sketch-subheading text-[17px] text-[#FF9500]">
                  Lokalen Cache leeren
                </span>
              </div>
              <CustomIcon name="chevronRight" size={16} className="opacity-40" />
            </button>
          </SketchCard>
          <p className="sketch-body text-[13px] text-[#6E6E73] px-4 mt-3">
            Löscht lokale Vorschaubilder. Deine Cloud-Fotos bleiben sicher.
          </p>
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

      {/* Show Backup Phrase Modal with Sketch UI */}
      {showBackupPhrase && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-6 backdrop-blur-sm">
          <SketchCard className="bg-white w-full max-w-[400px] p-6 shadow-2xl">
            <h3 className="sketch-heading text-[24px] text-center mb-2">
              Back-up Phrase
            </h3>
            <p className="sketch-body text-[14px] text-[#6E6E73] text-center mb-6">
              Notiere diese Wörter sicher.
            </p>

            {realBackupPhraseWords.length > 0 ? (
              <div className="grid grid-cols-2 gap-3 mb-6">
                {realBackupPhraseWords.map((word, index) => (
                  <SketchCard key={index} className="p-2 text-center bg-[#2563EB]/5">
                    <span className="sketch-body text-[10px] text-[#6E6E73] block">{index + 1}</span>
                    <span className="sketch-subheading text-[14px]">{word}</span>
                  </SketchCard>
                ))}
              </div>
            ) : (
              <div className="mb-6">
                <SketchCard className="bg-[#FF9500]/5 border-[#FF9500] p-4">
                  <p className="sketch-body text-[13px] text-[#FF9500] text-center">Kein Schlüssel gefunden.</p>
                </SketchCard>
              </div>
            )}

            <SketchButton
              onClick={() => setShowBackupPhrase(false)}
              className="w-full"
            >
              Fertig
            </SketchButton>
          </SketchCard>
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
      <header className="px-5 pt-6 pb-4 bg-[#FAFBFC]">
        <button
          onClick={onBack}
          className="sketch-body text-[#2563EB] mb-2 flex items-center gap-2 hover:underline"
        >
          ← Zurück
        </button>
        <h1 className="sketch-heading text-[32px]">Geräte</h1>
      </header>

      <div className="flex-1 px-5">
        <SketchCard className="overflow-hidden p-0">
          {devices.map((device, index) => (
            <div key={device.id}>
              {index > 0 && <div className="h-[2px] bg-[#2563EB]/10 mx-4" />}
              <div className="flex items-center gap-4 p-4">
                <SketchIcon icon="photo" size={32} />
                <div className="flex-1">
                  <p className="sketch-subheading text-[17px] text-[#1D1D1F]">{device.name}</p>
                  <p className="sketch-body text-[13px] text-[#6E6E73]">
                    {device.lastActive}
                  </p>
                </div>
                {device.syncing ? (
                  <Loader2 className="w-5 h-5 text-[#2563EB] animate-spin" />
                ) : device.lastActive === "Aktiv" ? (
                  <div className="flex items-center gap-1">
                    <Check className="w-4 h-4 text-[#30D158]" />
                    <span className="sketch-subheading text-[13px] text-[#30D158]">
                      Aktiv
                    </span>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </SketchCard>

        <SketchButton
          onClick={onAddDevice}
          className="w-full mt-8"
          size="lg"
        >
          Neu verbinden
        </SketchButton>

        <p className="sketch-body text-[13px] text-[#6E6E73] text-center mt-4 px-4">
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
      <div className="bg-white w-full max-w-[428px] rounded-t-2xl p-6 pb-10">
        <h3 className="sketch-heading text-[24px] text-[#1D1D1F] text-center mb-2">
          Backup-Quelle
        </h3>
        <p className="text-[15px] text-[#6E6E73] text-center mb-6">
          Wo sind deine Fotos gespeichert?
        </p>

        <div className="space-y-3 mb-6">
          {sources.map((source) => (
            <button
              key={source.id}
              onClick={() => onSelect(source.id)}
              className={`w-full p-4 rounded-xl bg-[#F2F2F7] text-left ios-tap-target ${
                currentSource === source.id ? "ring-2 ring-[#007AFF]" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[17px] font-medium text-[#1D1D1F]">
                    {source.label}
                  </p>
                  <p className="text-[13px] text-[#6E6E73] mt-0.5">
                    {source.description}
                  </p>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    currentSource === source.id
                      ? "border-[#007AFF] bg-[#007AFF]"
                      : "border-[#C7C7CC]"
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
      label: "BACKUP+",
      subtitle: "Dauerhaft im Netz",
      price: "2,99€/Monat",
      features: [
        "Alles von Free",
        "200 GB Cloud-Backup",
        "Schnellere Synchronisierung",
      ],
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/40 flex items-end justify-center z-50">
      <div className="bg-white w-full max-w-[428px] rounded-t-2xl p-6 pb-10 max-h-[80vh] overflow-y-auto">
        <h3 className="sketch-heading text-[24px] text-[#1D1D1F] text-center mb-2">
          Speicherplan
        </h3>
        <p className="text-[15px] text-[#6E6E73] text-center mb-6">
          Du kannst jederzeit wechseln
        </p>

        <div className="space-y-3 mb-6">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => onSelect(plan.id)}
              className={`w-full p-4 rounded-xl bg-[#F2F2F7] text-left ios-tap-target ${
                currentPlan === plan.id ? "ring-2 ring-[#007AFF]" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-[13px] font-bold text-[#007AFF] tracking-wide">
                    {plan.label}
                  </p>
                  <p className="text-[17px] font-semibold text-[#1D1D1F] mt-0.5">
                    {plan.subtitle}
                  </p>
                  <ul className="mt-2 space-y-1">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-[13px] text-[#6E6E73] flex items-center gap-2"
                      >
                        <span className="text-[#30D158]">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[15px] font-semibold text-[#1D1D1F] mt-3">
                    {plan.price}
                  </p>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    currentPlan === plan.id
                      ? "border-[#007AFF] bg-[#007AFF]"
                      : "border-[#C7C7CC]"
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
      <div className="bg-white w-full max-w-[270px] rounded-2xl overflow-hidden">
        <div className="p-4 text-center">
          <h3 className="sketch-subheading text-[17px] text-[#1D1D1F] mb-1">
            {title}
          </h3>
          <p className="text-[13px] text-[#6E6E73] leading-relaxed">
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
