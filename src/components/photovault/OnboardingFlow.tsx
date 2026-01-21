"use client";

import { useState, useEffect } from "react";
import { Key, FolderOpen, Cloud, Check } from "lucide-react";
import type { AppState } from "./PhotoVaultApp";
import { dummyBackupPhrase } from "./PhotoVaultApp";
import { generateKeyPair, keyToRecoveryPhrase, saveKeyToStorage } from "@/lib/crypto";

interface OnboardingFlowProps {
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  onComplete: () => void;
}

export function OnboardingFlow({ state, setState, step, setStep, onComplete }: OnboardingFlowProps) {
  const [showPhraseStep, setShowPhraseStep] = useState(false);
  const [phraseConfirmed, setPhraseConfirmed] = useState(false);
  const [showImportDialog, setShowImportDialog] = useState(false);

  const generateEncryptionKey = () => {
    // Generate REAL encryption key
    const keyPair = generateKeyPair();
    const recoveryPhrase = keyToRecoveryPhrase(keyPair.secretKey);
    const phraseWords = recoveryPhrase.split('-').slice(0, 12); // Take first 12 chunks
    
    // Save to localStorage
    saveKeyToStorage(keyPair.secretKey);
    
    setState(prev => ({ 
      ...prev, 
      encryptionKey: recoveryPhrase, 
      backupPhrase: phraseWords 
    }));
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
    setState(prev => ({ ...prev, photoSource: source }));
    setStep(3);
  };

  const selectPlan = (plan: "free" | "backup-plus") => {
    console.log(plan === "free" ? "Set Free Plan" : "Set Backup+ Plan");
    setState(prev => ({ ...prev, selectedPlan: plan }));
    onComplete();
  };

  // Calculate visual step for progress indicator (1, 1b, 2, 3 → shows as 1, 1, 2, 3)
  const visualStep = showPhraseStep ? 1 : step;

  return (
    <div className="min-h-screen flex flex-col px-6 pt-12 pb-8 safe-area-inset">
      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-1 mb-8">
        {[1, 2, 3].map((i, index) => (
          <div key={i} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-[14px] font-semibold ${
                i < visualStep
                  ? "bg-[#30D158] text-white"
                  : i === visualStep
                  ? "bg-[#007AFF] text-white"
                  : "bg-[#E5E5EA] text-[#8E8E93]"
              }`}
            >
              {i < visualStep ? <Check className="w-4 h-4" /> : i}
            </div>
            {index < 2 && (
              <div
                className={`w-12 h-1 mx-1 rounded-full ${
                  i < visualStep ? "bg-[#30D158]" : "bg-[#E5E5EA]"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Label */}
      <p className="text-[13px] text-[#6E6E73] text-center mb-6">
        Schritt {visualStep} von 3
      </p>

      {step === 1 && !showPhraseStep && (
        <KeyCreationStep
          onContinue={generateEncryptionKey}
          onImport={importExistingKey}
        />
      )}

      {step === 1 && showPhraseStep && (
        <BackupPhraseStep
          phrase={state.backupPhrase}
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
        <ImportKeyDialog onClose={() => setShowImportDialog(false)} />
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
        <div className="w-20 h-20 rounded-full bg-[#007AFF]/10 flex items-center justify-center mb-6">
          <Key className="w-10 h-10 text-[#007AFF]" />
        </div>
        <h1 className="sf-pro-display text-[28px] leading-tight text-[#1D1D1F] mb-3">
          Erstelle deinen Schlüssel
        </h1>
        <p className="text-[17px] leading-relaxed text-[#6E6E73] max-w-[300px] mb-6">
          Dieser Schlüssel verschlüsselt alle Fotos. Speichere ihn gut:
        </p>
        
        <div className="bg-[#F2F2F7] rounded-xl p-4 w-full max-w-[300px]">
          <div className="flex items-center gap-3 mb-2">
            <Key className="w-5 h-5 text-[#007AFF]" />
            <span className="text-[15px] text-[#1D1D1F] font-medium">12-Wort Backup-Phrase</span>
          </div>
          <p className="text-[13px] text-[#6E6E73]">
            Wird im nächsten Schritt erstellt und angezeigt
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <button
          onClick={onContinue}
          className="w-full h-[50px] bg-[#007AFF] text-white text-[17px] font-semibold rounded-xl ios-tap-target"
        >
          Schlüssel erstellen
        </button>
        <button
          onClick={onImport}
          className="w-full h-[44px] text-[#007AFF] text-[17px] ios-tap-target"
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
        <div className="text-center mb-6">
          <h1 className="sf-pro-display text-[28px] leading-tight text-[#1D1D1F] mb-2">
            Notiere diese Wörter
          </h1>
          <p className="text-[15px] text-[#6E6E73]">
            Speichere sie sicher ab. Du brauchst sie zur Wiederherstellung.
          </p>
        </div>

        {/* 12 words in 3x4 grid */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          {phrase.map((word, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-3 text-center border border-[#E5E5EA]"
            >
              <span className="text-[11px] text-[#8E8E93] block mb-0.5">
                {index + 1}
              </span>
              <span className="text-[15px] text-[#1D1D1F] font-mono">
                {word}
              </span>
            </div>
          ))}
        </div>

        {/* Warning */}
        <div className="bg-[#FF3B30]/10 rounded-xl p-4 mb-6">
          <p className="text-[13px] text-[#FF3B30] text-center">
            ⚠️ Teile diese Wörter niemals mit anderen. Wer sie hat, kann auf deine Fotos zugreifen.
          </p>
        </div>

        {/* Checkbox */}
        <button
          onClick={() => onConfirmChange(!confirmed)}
          className="w-full flex items-center gap-3 p-4 bg-white rounded-xl ios-tap-target"
        >
          <div
            className={`w-6 h-6 rounded-md border-2 flex items-center justify-center ${
              confirmed
                ? "bg-[#007AFF] border-[#007AFF]"
                : "border-[#C7C7CC]"
            }`}
          >
            {confirmed && <Check className="w-4 h-4 text-white" />}
          </div>
          <span className="text-[17px] text-[#1D1D1F]">
            Ich habe die Wörter notiert
          </span>
        </button>
      </div>

      <button
        onClick={onContinue}
        disabled={!confirmed}
        className={`w-full h-[50px] text-[17px] font-semibold rounded-xl ios-tap-target ${
          confirmed
            ? "bg-[#007AFF] text-white"
            : "bg-[#E5E5EA] text-[#8E8E93]"
        }`}
      >
        Weiter
      </button>
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
      description: "Alle Fotos aus der iOS Foto-Bibliothek",
    },
    {
      id: "files-app" as const,
      label: "Dateien-App",
      description: "Fotos aus einem bestimmten Ordner",
    },
  ];

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-20 h-20 rounded-full bg-[#007AFF]/10 flex items-center justify-center mb-6">
            <FolderOpen className="w-10 h-10 text-[#007AFF]" />
          </div>
          <h1 className="sf-pro-display text-[28px] leading-tight text-[#1D1D1F] mb-2">
            Wähle Backup-Quelle
          </h1>
          <p className="text-[17px] leading-relaxed text-[#6E6E73] max-w-[300px]">
            Wo sind deine Fotos gespeichert?
          </p>
        </div>

        <div className="space-y-3">
          {sources.map((source) => (
            <button
              key={source.id}
              onClick={() => onSelect(source.id)}
              className={`w-full p-4 rounded-xl bg-white text-left ios-tap-target ${
                selectedSource === source.id ? "ring-2 ring-[#007AFF]" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[17px] font-medium text-[#1D1D1F]">{source.label}</p>
                  <p className="text-[15px] text-[#6E6E73] mt-0.5">{source.description}</p>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedSource === source.id
                      ? "border-[#007AFF] bg-[#007AFF]"
                      : "border-[#C7C7CC]"
                  }`}
                >
                  {selectedSource === source.id && (
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                  )}
                </div>
              </div>
            </button>
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
    selectedPlan as "free" | "backup-plus"
  );

  const plans = [
    {
      id: "free" as const,
      label: "FREE",
      subtitle: "Auf deinen Geräten",
      price: "0€/Monat",
      features: ["Unbegrenzte Fotos", "Zero-Knowledge Verschlüsselung", "Multi-Device Sync"],
    },
    {
      id: "backup-plus" as const,
      label: "BACKUP+",
      subtitle: "Dauerhaft im Netz",
      price: "2,99€/Monat",
      features: ["Alles von Free", "200 GB Cloud-Backup", "Schnellere Synchronisierung"],
      recommended: true,
    },
  ];

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-20 h-20 rounded-full bg-[#007AFF]/10 flex items-center justify-center mb-6">
            <Cloud className="w-10 h-10 text-[#007AFF]" />
          </div>
          <h1 className="sf-pro-display text-[28px] leading-tight text-[#1D1D1F] mb-2">
            Wähle Speicherplan
          </h1>
          <p className="text-[17px] leading-relaxed text-[#6E6E73] max-w-[300px]">
            Du kannst das später jederzeit ändern
          </p>
        </div>

        <div className="space-y-3">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setTempSelected(plan.id)}
              className={`w-full p-4 rounded-xl bg-white text-left ios-tap-target relative ${
                tempSelected === plan.id ? "ring-2 ring-[#007AFF]" : ""
              }`}
            >
              {plan.recommended && (
                <span className="absolute -top-2 left-4 px-2 py-0.5 bg-[#30D158] text-white text-[11px] font-semibold rounded-full">
                  EMPFOHLEN
                </span>
              )}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-[15px] font-bold text-[#007AFF] tracking-wide">
                    {plan.label}
                  </p>
                  <p className="text-[17px] font-semibold text-[#1D1D1F] mt-0.5">
                    {plan.subtitle}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="text-[15px] text-[#6E6E73] flex items-center gap-2">
                        <span className="text-[#30D158]">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] font-semibold text-[#1D1D1F] mt-4">
                    {plan.price}
                  </p>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    tempSelected === plan.id
                      ? "border-[#007AFF] bg-[#007AFF]"
                      : "border-[#C7C7CC]"
                  }`}
                >
                  {tempSelected === plan.id && (
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={() => onSelect(tempSelected)}
        className="w-full h-[50px] bg-[#007AFF] text-white text-[17px] font-semibold rounded-xl ios-tap-target mt-4"
      >
        PhotoVault starten
      </button>
    </div>
  );
}

function ImportKeyDialog({ onClose }: { onClose: () => void }) {
  const [importedPhrase, setImportedPhrase] = useState("");

  return (
    <div className="fixed inset-0 bg-black/40 flex items-end justify-center z-50">
      <div className="bg-white w-full max-w-[428px] rounded-t-2xl p-6 pb-10">
        <h3 className="sf-pro-display text-[20px] text-[#1D1D1F] text-center mb-2">
          Schlüssel importieren
        </h3>
        <p className="text-[15px] text-[#6E6E73] text-center mb-6">
          Gib deine 12-Wort Backup-Phrase ein
        </p>
        <textarea
          value={importedPhrase}
          onChange={(e) => setImportedPhrase(e.target.value)}
          placeholder="beach ocean sunset cloud tree river..."
          className="w-full h-[100px] bg-[#F2F2F7] rounded-xl p-4 text-[15px] text-[#1D1D1F] resize-none mb-4"
        />
        <div className="space-y-3">
          <button
            onClick={() => {
              console.log("TODO: Import key:", importedPhrase);
              onClose();
            }}
            className="w-full h-[50px] bg-[#007AFF] text-white text-[17px] font-semibold rounded-xl ios-tap-target"
          >
            Importieren
          </button>
          <button
            onClick={onClose}
            className="w-full h-[44px] text-[#007AFF] text-[17px] ios-tap-target"
          >
            Abbrechen
          </button>
        </div>
      </div>
    </div>
  );
}
