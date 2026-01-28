"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { 
  Plus, 
  Loader2, 
  Check, 
  Cloud, 
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
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { signOut } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useSettingsStore } from "@/lib/storage/settings-store";
import { useGalleryData } from "@/hooks/use-gallery-data";
import { DevicePairing } from "@/components/features/settings/DevicePairing";

// Helper to format date
function formatDate(dateStr?: string): string {
  if (!dateStr) return "Unknown";
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins} mins ago`;
  if (diffHours < 24) return `${diffHours} hours ago`;
  if (diffDays < 7) return `${diffDays} days ago`;
  return date.toLocaleDateString("en-US");
}

interface SettingsPanelProps {
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
  onRestartOnboarding: () => void;
  authUser: { id: string; email: string; vaultKeyHash: string | null } | null;
}

export function SettingsPanel({ state: appState, setState: setAppState, onRestartOnboarding, authUser }: SettingsPanelProps) {
  const queryClient = useQueryClient();
  const { secretKey, recoveryPhrase, generateNewKey } = useEncryption();
  const { 
    autoBackupEnabled, 
    setAutoBackupEnabled, 
    backgroundBackupEnabled, 
    setBackgroundBackupEnabled,
    selectedPlan,
    setSelectedPlan,
    lastBackup,
    setLastBackup
  } = useSettingsStore();
  
  const { photoCount: realPhotoCount, isUploading, uploadProgress } = useGalleryData(secretKey);

  const [showDevices, setShowDevices] = useState(false);
  const [showPhraseWarning, setShowPhraseWarning] = useState(false);
  const [showBackupPhrase, setShowBackupPhrase] = useState(false);
  const [showNewKeyWarning, setShowNewKeyWarning] = useState(false);
  const [showSourceSelector, setShowSourceSelector] = useState(false);
  const [showPlanSelector, setShowPlanSelector] = useState(false);
  const [showClearCacheWarning, setShowClearCacheWarning] = useState(false);
  const [showPairingFromSettings, setShowPairingFromSettings] = useState(false);

  // Fetch devices
  const { data: realDevices = [] } = useQuery({
    queryKey: ["devices", authUser?.vaultKeyHash],
    queryFn: () => authUser?.vaultKeyHash ? getDevicesForUser(authUser.vaultKeyHash) : Promise.resolve([]),
    enabled: !!authUser?.vaultKeyHash,
  });

  const toggleAutoBackup = () => {
    setAutoBackupEnabled(!autoBackupEnabled);
  };

  const toggleBackgroundBackup = () => {
    setBackgroundBackupEnabled(!backgroundBackupEnabled);
  };

  const triggerManualBackup = async () => {
    // Manual backup logic would go here
    // For now, we use the one from useGalleryData via the button in the UI
    console.log("[Backup] Manual backup triggered");
    queryClient.invalidateQueries({ queryKey: ["photoCount"] });
    setLastBackup(new Date().toISOString());
  };

  const viewBackupPhrase = () => {
    setShowPhraseWarning(false);
    setShowBackupPhrase(true);
  };

  const handleGenerateNewKey = async () => {
    const newPhrase = await generateNewKey();
    setShowNewKeyWarning(false);
    alert("New key generated. Please save your new recovery phrase.");
    setShowBackupPhrase(true);
  };

  const handleClearCache = async () => {
    const { db } = await import("@/lib/storage/local-db");
    await db.delete();
    localStorage.clear();
    window.location.reload();
  };

  const changeSource = (source: "photos-app" | "files-app") => {
    // Update local state or store
    console.log("[Source] Changed to", source);
    setShowSourceSelector(false);
  };

  const changePlan = (plan: "free" | "backup-plus") => {
    setSelectedPlan(plan);
    setShowPlanSelector(false);
  };

  const realBackupPhraseWords = recoveryPhrase ? recoveryPhrase.split(" ") : [];

  const displayDevices = useMemo(() => {
    return realDevices.map(d => ({
      id: d.id || Math.random().toString(),
      name: d.device_name,
      lastActive: d.created_at ? formatDate(d.created_at) : "Unknown",
      syncing: false
    }));
  }, [realDevices]);

  if (showDevices) {
    return (
      <DevicesView
        devices={displayDevices}
        onBack={() => setShowDevices(false)}
        onAddDevice={() => setShowPairingFromSettings(true)}
      />
    );
  }

  return (
    <div className="h-full flex flex-col pb-4 overflow-y-auto">
      {/* Header with Sketch UI */}
      <header className="px-5 pt-8 pb-4">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
      </header>

      <div className="flex-1 px-5">
        {/* Backup Settings Section */}
        <div className="mb-8">
          <h2 className="text-[15px] font-semibold uppercase tracking-wide px-4 mb-3 text-gray-500">
            Backup
          </h2>
          <div className="bg-white dark:bg-black/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/10">
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="text-[17px] font-medium">Auto Backup</p>
                <p className="text-[13px] text-gray-500">Back up new photos automatically</p>
              </div>
              <Switch checked={autoBackupEnabled} onCheckedChange={toggleAutoBackup} />
            </div>

            <div className="h-[1px] bg-gray-200 dark:bg-white/10 mx-4" />

            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="text-[17px] font-medium">Background Backup</p>
                <p className="text-[13px] text-gray-500">Continue backing up when app is closed</p>
              </div>
              <Switch checked={backgroundBackupEnabled} onCheckedChange={toggleBackgroundBackup} />
            </div>

            <div className="h-[1px] bg-gray-200 dark:bg-white/10 mx-4" />

            <button
              onClick={() => setShowSourceSelector(true)}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-4">
                <Folder className="w-6 h-6 text-blue-500" />
                <div className="text-left">
                  <span className="text-[17px] font-medium block">Backup Source</span>
                  <span className="text-[14px] text-gray-500">Photos App</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
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
                  Processing...
                </>
              ) : (
                "Back up now"
              )}
            </Button>
          </div>
          <p className="text-[13px] text-gray-500 px-4 mt-3 text-center">
            Upload all local photos to cloud
          </p>
        </div>

        {/* Storage Section */}
        <div className="mb-8">
          <h2 className="text-[15px] font-semibold uppercase tracking-wide px-4 mb-3 text-gray-500">
            Storage
          </h2>
          <div className="bg-white dark:bg-black/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/10">
            <div className="p-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[17px] font-medium">Current Plan</span>
                <span className="text-[16px] font-medium text-blue-600">
                  {selectedPlan === "free" ? "Free" : "Backup+"}
                </span>
              </div>
              <p className="text-[14px] text-gray-500">
                {selectedPlan === "free"
                  ? "Photos only on your devices"
                  : "200 GB Cloud Backup active"}
              </p>
            </div>
            <div className="h-[1px] bg-gray-200 dark:bg-white/10 mx-4" />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <span className="text-[15px] text-gray-500">Used</span>
                <span className="text-[15px] font-medium">
                  {realPhotoCount.toLocaleString()} Photos (local)
                </span>
              </div>
            </div>
            <div className="h-[1px] bg-gray-200 dark:bg-white/10 mx-4" />
            <button
              onClick={() => setShowPlanSelector(true)}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
            >
              <span className="text-[17px] font-medium text-blue-600">
                {selectedPlan === "free" ? "Upgrade to Backup+" : "Manage Plan"}
              </span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Devices Section */}
        <div className="mb-8">
          <h2 className="text-[15px] font-semibold uppercase tracking-wide px-4 mb-3 text-gray-500">
            Devices
          </h2>
          <div className="bg-white dark:bg-black/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/10">
            <button
              onClick={() => setShowDevices(true)}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-4">
                <Smartphone className="w-7 h-7 text-gray-900 dark:text-gray-100" />
                <span className="text-[17px] font-medium">Connected Devices</span>
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
          <h2 className="text-[15px] font-semibold uppercase tracking-wide px-4 mb-3 text-gray-500">
            Security
          </h2>
          <div className="bg-white dark:bg-black/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/10">
            <button
              onClick={() => setShowPhraseWarning(true)}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
            >
              <span className="text-[17px] font-medium">Show Backup Phrase</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
            <div className="h-[1px] bg-gray-200 dark:bg-white/10 mx-4" />
            <button
              onClick={() => setShowNewKeyWarning(true)}
              className="w-full flex items-center justify-between p-4 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
            >
              <span className="text-[17px] font-medium text-red-500">Generate New Key</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </div>
          <p className="text-[13px] text-gray-500 px-4 mt-3">
            Never share these words with anyone.
          </p>
        </div>

        {/* Maintenance Section */}
        <div className="mb-8">
          <h2 className="text-[15px] font-semibold uppercase tracking-wide px-4 mb-3 text-gray-500">
            Maintenance
          </h2>
          <div className="bg-white dark:bg-black/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/10">
            <button
              onClick={() => setShowClearCacheWarning(true)}
              className="w-full flex items-center justify-between p-4 hover:bg-orange-50 dark:hover:bg-orange-900/10 transition-colors"
            >
              <div className="flex items-center gap-4">
                <AlertTriangle className="w-7 h-7 text-orange-500" />
                <span className="text-[17px] font-medium text-orange-500">Clear Local Cache</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
            <div className="h-[1px] bg-gray-200 dark:bg-white/10 mx-4" />
            <button
              onClick={onRestartOnboarding}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-4">
                <RotateCcw className="w-7 h-7 text-blue-500" />
                <span className="text-[17px] font-medium text-blue-500">Sign Out</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </div>
          <p className="text-[13px] text-gray-500 px-4 mt-3">
            Clear cache will reload the app. Sign out will clear local keys.
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
                if (confirm("WARNING: Do you really want to delete your account?\n\nThis will delete all local data and your account link. Cloud data is unusable without the key. This action cannot be undone.")) {
                    try {
                        const { db } = await import("@/lib/storage/local-db");
                        await db.delete();
                        localStorage.clear();
                        await signOut();
                        window.location.reload();
                    } catch(e) {
                         alert("Error deleting account.");
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
                  <span className="text-[17px] font-medium text-red-500 block">Delete Account</span>
                  <span className="text-[13px] text-red-400">Permanently delete data</span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* View Backup Phrase Warning Modal */}
      {showPhraseWarning && (
        <Modal
          title="Security Warning"
          message="Your backup phrase gives full access to your encrypted photos. Only view in a private place."
          confirmLabel="Show Phrase"
          confirmDestructive={false}
          onConfirm={viewBackupPhrase}
          onCancel={() => setShowPhraseWarning(false)}
        />
      )}

      {/* Show Backup Phrase Modal */}
      {showBackupPhrase && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-6 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-900 w-full max-w-[400px] p-6 shadow-2xl rounded-3xl border border-white/20">
            <h3 className="text-2xl font-bold text-center mb-2">Backup Phrase</h3>
            <p className="text-[14px] text-gray-500 text-center mb-6">
              Write these words down securely.
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
                    <span className="text-[14px] font-medium font-mono">{word}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mb-6">
                <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 p-4 rounded-xl">
                  <p className="text-[13px] text-orange-600 text-center font-medium">
                    No key found.
                  </p>
                </div>
              </div>
            )}

            <Button
              onClick={() => setShowBackupPhrase(false)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-12 text-[16px]"
            >
              Done
            </Button>
          </div>
        </div>
      )}

      {/* Generate New Key Warning Modal */}
      {showNewKeyWarning && (
        <Modal
          title="Data Loss Warning"
          message="Generating a new key will permanently delete all existing backup data. This action cannot be undone."
          confirmLabel="Generate New Key"
          confirmDestructive={true}
          onConfirm={handleGenerateNewKey}
          onCancel={() => setShowNewKeyWarning(false)}
        />
      )}

      {/* Source Selector Modal */}
      {showSourceSelector && (
        <SourceSelectorModal
          currentSource={appState.photoSource}
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
          title="Clear Cache?"
          message="This will clear local thumbnails and device data. Your encrypted cloud photos remain safe. App will reload."
          confirmLabel="Clear Cache"
          confirmDestructive={true}
          onConfirm={handleClearCache}
          onCancel={() => setShowClearCacheWarning(false)}
        />
      )}

      {/* Device Pairing Modal */}
      <DevicePairing
        isOpen={showPairingFromSettings || false}
        onClose={() => setShowPairingFromSettings(false)}
      />
    </div>
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
    <div className="h-full flex flex-col pb-4 overflow-y-auto">
      <header className="px-5 pt-6 pb-4">
        <button
          onClick={onBack}
          className="text-blue-600 mb-2 flex items-center gap-2 hover:underline"
        >
          ← Back
        </button>
        <h1 className="text-3xl font-bold tracking-tight">Devices</h1>
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
                  <p className="text-[13px] text-gray-500">{device.lastActive}</p>
                </div>
                {device.syncing ? (
                  <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />
                ) : device.lastActive === "Active" || device.lastActive === "Just now" ? (
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-[13px] font-medium text-green-500">Active</span>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <Button onClick={onAddDevice} className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-12" size="lg">
          Connect New Device
        </Button>

        <p className="text-[13px] text-gray-500 text-center mt-4 px-4">
          Scan key or enter recovery phrase from your main device.
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
      label: "Photos App",
      description: "All photos from your iOS photo library",
    },
    {
      id: "files-app" as const,
      label: "Files App",
      description: "Photos from a specific folder",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/40 flex items-end justify-center z-50">
      <div className="bg-white dark:bg-gray-900 w-full max-w-[428px] rounded-t-2xl p-6 pb-10 border-t border-gray-200 dark:border-gray-800">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">
          Backup Source
        </h3>
        <p className="text-[15px] text-gray-500 text-center mb-6">
          Where are your photos stored?
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
          Cancel
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
      subtitle: "On your devices",
      price: "$0/month",
      features: [
        "Unlimited photos",
        "Zero-Knowledge encryption",
        "Multi-device sync",
      ],
    },
    {
      id: "backup-plus" as const,
      label: "BACKUP+ (Coming Soon)",
      subtitle: "Always in the cloud",
      price: "$2.99/month",
      features: [
        "Everything in Free",
        "200 GB Cloud Backup",
        "Faster synchronization",
      ],
      disabled: true,
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/40 flex items-end justify-center z-50">
      <div className="bg-white dark:bg-gray-900 w-full max-w-[428px] rounded-t-2xl p-6 pb-10 max-h-[80vh] overflow-y-auto border-t border-gray-200 dark:border-gray-800">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">
          Storage Plan
        </h3>
        <p className="text-[15px] text-gray-500 text-center mb-6">
          You can change your plan any time
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
          Cancel
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
            Cancel
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
