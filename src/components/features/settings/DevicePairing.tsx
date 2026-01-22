"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { X, Copy, Check, Smartphone, QrCode } from "lucide-react";
import { useEncryption } from "@/hooks/use-encryption";

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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white w-full max-w-[380px] rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#E5E5EA]">
          <h2 className="sf-pro-display text-[17px] font-semibold text-[#1D1D1F]">
            Gerät verbinden
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F2F2F7]"
          >
            <X className="w-4 h-4 text-[#6E6E73]" />
          </button>
        </div>

        {/* Mode Tabs */}
        <div className="flex border-b border-[#E5E5EA]">
          <button
            onClick={() => setMode("show")}
            className={`flex-1 py-3 text-[15px] font-medium flex items-center justify-center gap-2 ${
              mode === "show"
                ? "text-[#007AFF] border-b-2 border-[#007AFF]"
                : "text-[#6E6E73]"
            }`}
          >
            <QrCode className="w-4 h-4" />
            Schlüssel zeigen
          </button>
          <button
            onClick={() => setMode("input")}
            className={`flex-1 py-3 text-[15px] font-medium flex items-center justify-center gap-2 ${
              mode === "input"
                ? "text-[#007AFF] border-b-2 border-[#007AFF]"
                : "text-[#6E6E73]"
            }`}
          >
            <Smartphone className="w-4 h-4" />
            Schlüssel eingeben
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          {mode === "show" ? (
            <div className="flex flex-col items-center">
              <p className="text-[13px] text-[#6E6E73] text-center mb-4">
                Scanne diesen QR-Code mit deinem anderen Gerät oder kopiere den Schlüssel.
              </p>

              {/* QR Code */}
              {recoveryPhrase && (
                <div className="bg-white p-4 rounded-xl border border-[#E5E5EA] mb-4">
                  <QRCodeSVG
                    value={recoveryPhrase}
                    size={180}
                    level="M"
                    includeMargin={false}
                  />
                </div>
              )}

              {/* Key Display */}
              <div className="w-full bg-[#F2F2F7] rounded-xl p-3 mb-4">
                <p className="text-[11px] text-[#6E6E73] mb-1">Dein Schlüssel:</p>
                <p className="text-[13px] font-mono text-[#1D1D1F] break-all leading-relaxed">
                  {recoveryPhrase || "Kein Schlüssel verfügbar"}
                </p>
              </div>

              {/* Copy Button */}
              <button
                onClick={handleCopyKey}
                disabled={!recoveryPhrase}
                className="w-full h-[44px] bg-[#007AFF] text-white text-[15px] font-semibold rounded-xl flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Kopiert!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Schlüssel kopieren
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="flex flex-col">
              <p className="text-[13px] text-[#6E6E73] text-center mb-4">
                Gib den Schlüssel von deinem anderen Gerät ein, um deine Fotos zu synchronisieren.
              </p>

              {/* Key Input */}
              <textarea
                value={inputKey}
                onChange={(e) => {
                  setInputKey(e.target.value);
                  setError(null);
                }}
                placeholder="Schlüssel hier eingeben..."
                className="w-full h-[100px] bg-[#F2F2F7] rounded-xl p-3 text-[14px] font-mono text-[#1D1D1F] resize-none mb-3 placeholder:text-[#C7C7CC]"
              />

              {/* Error Message */}
              {error && (
                <p className="text-[13px] text-[#FF3B30] text-center mb-3">
                  {error}
                </p>
              )}

              {/* Success Message */}
              {success && (
                <p className="text-[13px] text-[#30D158] text-center mb-3">
                  Schlüssel erfolgreich importiert!
                </p>
              )}

              {/* Import Button */}
              <button
                onClick={handleImportKey}
                disabled={!inputKey.trim() || success}
                className="w-full h-[44px] bg-[#30D158] text-white text-[15px] font-semibold rounded-xl flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Smartphone className="w-4 h-4" />
                Gerät verbinden
              </button>

              {/* Warning */}
              <p className="text-[11px] text-[#FF9500] text-center mt-4">
                Achtung: Dies überschreibt deinen aktuellen Schlüssel. Stelle sicher, dass du ihn gesichert hast.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
