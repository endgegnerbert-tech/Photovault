"use client";

import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { CustomIcon } from "@/components/ui/custom-icon";
import type { AppState } from "./PhotoVaultApp";
import {
  generateKeyPair,
  keyToRecoveryPhrase,
  saveKeyToStorage,
  recoveryPhraseToKey,
} from "@/lib/crypto";
import ProgressIndicator from "@/components/ui/progress-indicator";
import ShieldLoader from "@/components/ui/shield-loader";
import { useEncryption } from "@/hooks/use-encryption";
import {
  SketchButton,
  SketchCard,
  SketchIcon,
  SketchToggle,
  SketchTextarea
} from "@/sketch-ui";
import { Loader2 } from "lucide-react";

import { useSettingsStore } from "@/lib/storage/settings-store";

interface OnboardingFlowProps {
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  onComplete: () => void;
}

export function OnboardingFlow({
  state,
  setState,
  step,
  setStep,
  onComplete,
}: OnboardingFlowProps) {
  const [showPhraseStep, setShowPhraseStep] = useState(false);
  const [phraseConfirmed, setPhraseConfirmed] = useState(false);
  const [showImportDialog, setShowImportDialog] = useState(false);
  
  // Persistent Stores
  const { isGeneratingKey, generateNewKey, recoveryPhrase } = useEncryption();
  const setSelectedPlan = useSettingsStore(state => state.setSelectedPlan);
  const setAutoBackupEnabled = useSettingsStore(state => state.setAutoBackupEnabled);

  const generateEncryptionKey = async () => {
    const phrase = await generateNewKey();
    // Key is saved automatically by useEncryption hook
    
    // We update local AppState just for immediate UI feedback if needed, 
    // but ideally we rely on hooks. 
    // For now, keeping AppState update for compatibility with parent component logic
    // but the real source of truth is the hook/storage.
    
    setShowPhraseStep(true);
  };

  const importExistingKey = () => {
    console.log("Show import dialog");
    setShowImportDialog(true);
  };

  const confirmPhraseAndContinue = () => {
    console.log("TODO: Verify checkbox, proceed to step 2");
    setShowPhraseStep(false);
    setPhraseConfirmed(false);
    setStep(2);
  };

  const selectSource = (source: "photos-app" | "files-app") => {
    console.log("Selected photo source:", source);
    // Source selection might be ephemeral or persistent. 
    // Let's keep it in AppState for now or assume default.
    setState((prev) => ({ ...prev, photoSource: source }));
    setStep(3);
  };

  const selectPlan = (plan: "free" | "backup-plus") => {
    console.log(plan === "free" ? "Set Free Plan" : "Set Backup+ Plan");
    setSelectedPlan(plan);
    // Also enable autobackup by default if they select a plan?
    if (plan === "backup-plus") setAutoBackupEnabled(true);
    
    // Update legacy state for compatibility
    setState((prev) => ({ ...prev, selectedPlan: plan }));
    onComplete();
  };

  // Calculate visual step for progress indicator (1, 1b, 2, 3 → shows as 1, 1, 2, 3)
  const visualStep = showPhraseStep ? 1 : step;
  
  // Get phrase for display
  const displayPhrase = recoveryPhrase?.split("-").slice(0, 12) || [];

  // Show loader during key generation
  if (isGeneratingKey) {
    return <ShieldLoader />;
  }

  return (
    <div className="min-h-screen flex flex-col px-6 pt-12 pb-8 safe-area-inset bg-[#FAFBFC]">
      {/* Progress Indicator with Sketch styling can be added via globals or by updating the component */}
      <ProgressIndicator currentStep={visualStep} />

      {step === 1 && !showPhraseStep && (
        <KeyCreationStep
          onContinue={generateEncryptionKey}
          onImport={importExistingKey}
        />
      )}

      {step === 1 && showPhraseStep && (
        <BackupPhraseStep
          phrase={displayPhrase}
          confirmed={phraseConfirmed}
          onConfirmChange={setPhraseConfirmed}
          onContinue={confirmPhraseAndContinue}
        />
      )}

      {step === 2 && (
        <SourceSelectionStep
          selectedSource={state.photoSource}
          onSelect={selectSource}
        />
      )}

      {step === 3 && (
        <PlanSelectionStep
          selectedPlan={state.selectedPlan}
          onSelect={selectPlan}
        />
      )}

      {/* Import Dialog */}
      {showImportDialog && (
        <ImportKeyDialog
          onClose={() => setShowImportDialog(false)}
          onSuccess={(phrase, phraseWords) => {
            setShowImportDialog(false);
            onComplete();
          }}
        />
      )}
    </div>
  );
}

function KeyCreationStep({
  onContinue,
  onImport,
}: {
  onContinue: () => void;
  onImport: () => void;
}) {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="mb-6">
          <SketchIcon icon="key" size={80} />
        </div>
        <h1 className="sketch-heading text-[32px] leading-tight text-[#1D1D1F] mb-3">
          Erstelle deinen Schlüssel
        </h1>
        <p className="sketch-body text-[17px] leading-relaxed text-[#3B82F6] max-w-[300px] mb-8">
          Dieser Schlüssel verschlüsselt alle Fotos. Bewahre ihn gut auf!
        </p>

        <SketchCard className="p-4 w-full max-w-[320px]">
          <div className="flex items-center gap-3 mb-2">
            <SketchIcon icon="shield" size={24} color="#2563EB" />
            <span className="sketch-subheading text-[16px]">
              12-Wort Backup-Phrase
            </span>
          </div>
          <p className="sketch-body text-[13px] text-[#6E6E73]">
            Wird im nächsten Schritt erstellt und sicher angezeigt
          </p>
        </SketchCard>
      </div>

      <div className="space-y-4">
        <SketchButton
          onClick={onContinue}
          className="w-full"
          size="lg"
        >
          Schlüssel erstellen
        </SketchButton>
        <button
          onClick={onImport}
          className="w-full py-2 sketch-body text-[#2563EB] text-[17px] hover:underline"
        >
          Ich habe bereits einen Schlüssel
        </button>
      </div>
    </div>
  );
}

function BackupPhraseStep({
  phrase,
  confirmed,
  onConfirmChange,
  onContinue,
}: {
  phrase: string[];
  confirmed: boolean;
  onConfirmChange: (value: boolean) => void;
  onContinue: () => void;
}) {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1">
        <div className="text-center mb-8">
          <h1 className="sketch-heading text-[32px] leading-tight text-[#1D1D1F] mb-2">
            Backup-Wörter
          </h1>
          <p className="sketch-body text-[15px] text-[#6E6E73]">
            Notiere diese Wörter sicher. Du brauchst sie zur Wiederherstellung.
          </p>
        </div>

        {/* 12 words Grid with Sketch Cards */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {phrase.map((word, index) => (
            <SketchCard
              key={index}
              className="p-3 text-center"
            >
              <span className="sketch-body text-[11px] text-[#6E6E73] block mb-0.5">
                {index + 1}
              </span>
              <span className="sketch-subheading text-[16px] break-all">
                {word}
              </span>
            </SketchCard>
          ))}
        </div>

        {/* Warning Card */}
        <div className="mb-6">
          <SketchCard className="bg-[#FF3B30]/5 border-[#FF3B30]">
            <p className="sketch-body text-[13px] text-[#FF3B30] text-center">
              Teile diese Wörter niemals. Wer sie hat, kann auf deine Fotos zugreifen.
            </p>
          </SketchCard>
        </div>

        {/* Confirmation Toggle */}
        <div className="mb-8">
            <SketchCard className="p-4 flex items-center justify-between">
                 <span className="sketch-subheading text-[17px] text-[#1D1D1F]">
                    Sicher notiert?
                </span>
                <SketchToggle
                    checked={confirmed}
                    onChange={onConfirmChange}
                />
            </SketchCard>
        </div>
      </div>

      <SketchButton
        onClick={onContinue}
        disabled={!confirmed}
        className="w-full"
        size="lg"
      >
        Weiter
      </SketchButton>
    </div>
  );
}

function SourceSelectionStep({
  selectedSource,
  onSelect,
}: {
  selectedSource: string;
  onSelect: (source: "photos-app" | "files-app") => void;
}) {
  const sources = [
    {
      id: "photos-app" as const,
      label: "Fotos-App",
      description: "Alle Fotos aus der Bibliothek",
      details: "Empfohlen",
    },
    {
      id: "files-app" as const,
      label: "Dateien-App",
      description: "Bestimmter Ordner",
      details: "Erweitert",
    },
  ];

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="mb-6">
            <SketchIcon icon="folder" size={80} />
          </div>
          <h1 className="sketch-heading text-[32px] mb-2 text-[#1D1D1F]">
            Wähle Quelle
          </h1>
          <p className="sketch-body text-[17px] text-[#3B82F6] max-w-[300px]">
            Wo liegen deine Fotos?
          </p>
        </div>

        <div className="space-y-4">
          {sources.map((source) => (
            <SketchCard
              key={source.id}
              onClick={() => onSelect(source.id)}
              className={`p-4 cursor-pointer transition-all ${
                selectedSource === source.id ? "bg-[#2563EB]/5 border-[#2563EB]" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="sketch-subheading text-[18px] text-[#1D1D1F]">
                    {source.label}
                  </p>
                  <p className="sketch-body text-[15px] text-[#6E6E73] mt-0.5">
                    {source.description}
                  </p>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedSource === source.id
                      ? "bg-[#2563EB] border-[#2563EB]"
                      : "border-[#C7C7CC]"
                  }`}
                >
                  {selectedSource === source.id && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                </div>
              </div>
            </SketchCard>
          ))}
        </div>
      </div>
    </div>
  );
}

function PlanSelectionStep({
  selectedPlan,
  onSelect,
}: {
  selectedPlan: string;
  onSelect: (plan: "free" | "backup-plus") => void;
}) {
  const [tempSelected, setTempSelected] = useState<"free" | "backup-plus">(
    selectedPlan as "free" | "backup-plus",
  );

  const plans = [
    {
      id: "free" as const,
      label: "FREE",
      subtitle: "Lokales Backup",
      price: "Kostenlos",
      features: ["Verschlüsselung", "Sync inkl.", "Lokal only"],
    },
    {
      id: "backup-plus" as const,
      label: "BACKUP+",
      subtitle: "IPFS Cloud",
      price: "2,99€",
      features: ["Alles aus Free", "IPFS Node", "Ewig sicher"],
      recommended: true,
    },
  ];

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="mb-6">
            <SketchIcon icon="cloud" size={80} />
          </div>
          <h1 className="sketch-heading text-[32px] mb-2 text-[#1D1D1F]">
            Speicherplan
          </h1>
          <p className="sketch-body text-[17px] text-[#3B82F6] max-w-[300px]">
            Ewig sicher in der Cloud?
          </p>
        </div>

        <div className="space-y-4">
          {plans.map((plan) => (
            <SketchCard
              key={plan.id}
              onClick={() => setTempSelected(plan.id)}
              className={`p-5 cursor-pointer relative transition-all ${
                tempSelected === plan.id ? "bg-[#2563EB]/5 border-[#2563EB]" : ""
              }`}
            >
              {plan.recommended && (
                <span className="absolute -top-3 left-4 px-3 py-1 bg-[#30D158] text-white sketch-subheading text-[12px] rounded-full">
                  TOP
                </span>
              )}
              <div className="flex items-start justify-between">
                <div>
                  <p className="sketch-subheading text-[20px] text-[#2563EB]">{plan.label}</p>
                  <p className="sketch-body text-[15px] text-[#1D1D1F] mt-1">{plan.subtitle}</p>
                  <ul className="mt-3 space-y-1">
                    {plan.features.map((f) => (
                      <li key={f} className="sketch-body text-[13px] text-[#6E6E73] flex items-center gap-2">
                         <span className="text-[#30D158]">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <p className="sketch-subheading text-[18px] mt-4">{plan.price}</p>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 ${
                    tempSelected === plan.id
                      ? "bg-[#2563EB] border-[#2563EB]"
                      : "border-[#C7C7CC]"
                  }`}
                >
                  {tempSelected === plan.id && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                </div>
              </div>
            </SketchCard>
          ))}
        </div>
      </div>

      <SketchButton
        onClick={() => onSelect(tempSelected)}
        className="w-full mt-4"
        size="lg"
      >
        Loslegen
      </SketchButton>
    </div>
  );
}

function ImportKeyDialog({
  onClose,
  onSuccess,
}: {
  onClose: () => void;
  onSuccess: (phrase: string, phraseWords: string[]) => void;
}) {
  const [importedPhrase, setImportedPhrase] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isImporting, setIsImporting] = useState(false);

  const handleImport = () => {
    setError(null);
    setIsImporting(true);

    try {
      const normalizedPhrase = importedPhrase
        .trim()
        .replace(/[\s\n]+/g, "-")
        .replace(/-+/g, "-");

      if (!normalizedPhrase) {
        setError("Bitte gib deinen Schlüssel ein");
        setIsImporting(false);
        return;
      }

      const secretKey = recoveryPhraseToKey(normalizedPhrase);

      if (!secretKey || secretKey.length !== 32) {
        setError("Ungültiger Schlüssel");
        setIsImporting(false);
        return;
      }

      saveKeyToStorage(secretKey);
      const phraseWords = normalizedPhrase.split("-").slice(0, 12);
      onSuccess(normalizedPhrase, phraseWords);
    } catch (err) {
      setError("Fehler beim Import");
      setIsImporting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-6 backdrop-blur-sm">
      <SketchCard className="bg-white w-full max-w-[360px] p-6 shadow-2xl">
        <h3 className="sketch-heading text-[24px] text-[#1D1D1F] text-center mb-2">
          Importieren
        </h3>
        <p className="sketch-body text-[14px] text-[#6E6E73] text-center mb-6">
          Gib deine Backup-Phrase ein
        </p>

        <SketchTextarea
          value={importedPhrase}
          onChange={(val) => {
            setImportedPhrase(val);
            setError(null);
          }}
          placeholder="abc123XY-def456AB..."
          rows={3}
          className="mb-4"
        />

        {error && (
          <p className="sketch-body text-[13px] text-[#FF3B30] text-center mb-4">{error}</p>
        )}

        <div className="space-y-4">
          <SketchButton
            onClick={handleImport}
            disabled={isImporting || !importedPhrase.trim()}
            className="w-full"
            size="md"
          >
            {isImporting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Importieren"}
          </SketchButton>
          <button
            onClick={onClose}
            className="w-full py-2 sketch-body text-[#8E8E93] hover:text-[#1D1D1F]"
          >
            Abbrechen
          </button>
        </div>
      </SketchCard>
    </div>
  );
}
