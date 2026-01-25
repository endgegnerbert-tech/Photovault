"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { X, Copy, Check, Smartphone, QrCode } from "lucide-react";
import { useEncryption } from "@/hooks/use-encryption";
import { SketchButton, SketchCard, SketchIcon, SketchTextarea } from "@/sketch-ui";
import { Loader2 } from "lucide-react";

interface DevicePairingProps {
  isOpen: boolean;
  onClose: () => void;
}

type PairingMode = "show" | "input";

export function DevicePairing({ isOpen, onClose }: DevicePairingProps) {
  const [mode, setMode] = useState<PairingMode>("show");
  const [inputKey, setInputKey] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const { recoveryPhrase, restoreFromPhrase } = useEncryption();

  const handleCopyKey = async () => {
    if (!recoveryPhrase) return;

    try {
      await navigator.clipboard.writeText(recoveryPhrase);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error("Failed to copy to clipboard");
    }
  };

  const handleImportKey = () => {
    setError(null);

    if (!inputKey.trim()) {
      setError("Bitte gib einen Schlüssel ein");
      return;
    }

    const success = restoreFromPhrase(inputKey.trim());

    if (success) {
      setSuccess(true);
      setInputKey("");
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 1500);
    } else {
      setError("Ungültiger Schlüssel. Bitte überprüfe die Eingabe.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-6 backdrop-blur-sm">
      <SketchCard className="bg-white w-full max-w-[380px] p-0 shadow-2xl overflow-hidden">
        {/* Header with Sketch UI */}
        <div className="flex items-center justify-between p-4 border-b-2 border-[#2563EB]/10">
          <h2 className="sketch-heading text-[20px] text-[#1D1D1F]">
            Gerät verbinden
          </h2>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5"
          >
            <X className="w-5 h-5 text-[#6E6E73]" />
          </button>
        </div>

        {/* Mode Tabs with Sketch UI */}
        <div className="flex border-b-2 border-[#2563EB]/10">
          <button
            onClick={() => setMode("show")}
            className={`flex-1 py-4 sketch-subheading text-[15px] flex items-center justify-center gap-2 transition-colors ${
              mode === "show"
                ? "text-[#2563EB] bg-[#2563EB]/5"
                : "text-[#6E6E73]"
            }`}
          >
            <QrCode className="w-4 h-4" />
            Zeigen
          </button>
          <button
            onClick={() => setMode("input")}
            className={`flex-1 py-4 sketch-subheading text-[15px] flex items-center justify-center gap-2 transition-colors ${
              mode === "input"
                ? "text-[#2563EB] bg-[#2563EB]/5"
                : "text-[#6E6E73]"
            }`}
          >
            Eingeben
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          {mode === "show" ? (
            <div className="flex flex-col items-center">
              <p className="sketch-body text-[14px] text-[#6E6E73] text-center mb-6">
                Scanne den QR-Code oder kopiere den Schlüssel.
              </p>
 
              {/* QR Code with Sketch Card */}
              {recoveryPhrase && (
                <div className="mb-6">
                  <SketchCard className="p-4 bg-white">
                    <QRCodeSVG
                      value={recoveryPhrase}
                      size={180}
                      level="M"
                      includeMargin={false}
                    />
                  </SketchCard>
                </div>
              )}
 
              {/* Key Display with Sketch Card */}
              <div className="w-full mb-6">
                <SketchCard className="bg-[#2563EB]/5 p-3">
                  <p className="sketch-body text-[11px] text-[#6E6E73] mb-1">Backup-Phrase:</p>
                  <p className="sketch-subheading text-[13px] break-all leading-relaxed">
                    {recoveryPhrase || "Kein Schlüssel"}
                  </p>
                </SketchCard>
              </div>
 
              {/* Copy Button */}
              <SketchButton
                onClick={handleCopyKey}
                disabled={!recoveryPhrase}
                className="w-full"
                size="md"
              >
                {copied ? "✓ Kopiert!" : "Phrase kopieren"}
              </SketchButton>
            </div>
          ) : (
            <div className="flex flex-col">
              <p className="sketch-body text-[14px] text-[#6E6E73] text-center mb-6">
                Gib den Schlüssel deines anderen Geräts ein.
              </p>
 
              {/* Key Input with Sketch UI */}
              <SketchTextarea
                value={inputKey}
                onChange={(val) => {
                  setInputKey(val);
                  setError(null);
                }}
                placeholder="Schlüssel hier einfügen..."
                rows={3}
                className="mb-4"
              />
 
              {/* Messages */}
              {error && (
                <p className="sketch-body text-[14px] text-[#FF3B30] text-center mb-4 italic">
                  {error}
                </p>
              )}
 
              {success && (
                <p className="sketch-body text-[14px] text-[#30D158] text-center mb-4 font-bold">
                  ✓ Erfolg!
                </p>
              )}
 
              {/* Import Button */}
              <SketchButton
                onClick={handleImportKey}
                disabled={!inputKey.trim() || success}
                className="w-full"
                size="md"
              >
                {success ? "Verbunden" : "Verbinden"}
              </SketchButton>
 
              {/* Warning */}
              <p className="sketch-body text-[11px] text-[#FF9500] text-center mt-6">
                Achtung: Dies ersetzt deinen aktuellen Schlüssel!
              </p>
            </div>
          )}
        </div>
      </SketchCard>
    </div>
  );
}
