"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import { CustomIcon } from "@/components/ui/custom-icon";
import {
    recoveryPhraseToKey,
    saveKeyToStorage,
    getUserKeyHash,
} from "@/lib/crypto";
import {
  SketchButton,
  SketchCard,
  SketchIcon,
  SketchTextarea,
} from "@/sketch-ui";
import { Loader2 } from "lucide-react";

interface UnlockVaultScreenProps {
    userEmail: string;
    expectedKeyHash: string | null;
    onUnlock: (secretKey: Uint8Array, keyHash: string) => void;
    onCreateNewVault: () => void;
    onLogout: () => void;
}

export function UnlockVaultScreen({
    userEmail,
    expectedKeyHash,
    onUnlock,
    onCreateNewVault,
    onLogout,
}: UnlockVaultScreenProps) {
    const [phrase, setPhrase] = useState("");
    const [isUnlocking, setIsUnlocking] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleUnlock = async () => {
        if (!phrase.trim()) {
            setError("Bitte gib deine Recovery-Phrase ein");
            return;
        }

        setIsUnlocking(true);
        setError(null);

        try {
            // Normalize input
            const normalizedPhrase = phrase
                .trim()
                .replace(/[\s\n]+/g, "-")
                .replace(/-+/g, "-");

            // Try to decode the key
            const secretKey = recoveryPhraseToKey(normalizedPhrase);

            if (!secretKey || secretKey.length !== 32) {
                setError("Ungueltige Recovery-Phrase");
                setIsUnlocking(false);
                return;
            }

            // Calculate key hash
            const keyHash = await getUserKeyHash(secretKey);

            // If user already has a vault, verify the key hash matches
            if (expectedKeyHash && keyHash !== expectedKeyHash) {
                setError(
                    "Diese Recovery-Phrase gehoert nicht zu diesem Konto. Bitte ueberpruefe deine Eingabe."
                );
                setIsUnlocking(false);
                return;
            }

            // Save key to local storage
            saveKeyToStorage(secretKey);

            // Success
            onUnlock(secretKey, keyHash);
        } catch (err) {
            console.error("Unlock error:", err);
            setError("Ungueltige Recovery-Phrase. Bitte ueberpruefe deine Eingabe.");
        } finally {
            setIsUnlocking(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col px-6 pt-12 pb-8 safe-area-inset bg-[#FAFBFC]">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="sketch-body text-[14px] text-[#6E6E73]">
                    Angemeldet als
                    <br />
                    <span className="text-[#2563EB] font-bold">{userEmail}</span>
                </div>
                <button
                    onClick={onLogout}
                    className="sketch-body text-[#FF3B30] text-[15px] hover:text-[#D73A49]"
                >
                    Abmelden
                </button>
            </div>

            <div className="flex-1 flex flex-col">
                {/* Icon & Title with Sketch UI */}
                <div className="flex flex-col items-center text-center mb-8">
                    <div className="mb-6">
                        <SketchIcon icon="shield" size={80} />
                    </div>
                    <h1 className="sketch-heading text-[32px] mb-2 text-[#1D1D1F]">
                        Vault entsperren
                    </h1>
                    <p className="sketch-body text-[15px] text-[#6E6E73] max-w-[300px]">
                        {expectedKeyHash
                            ? "Gib deine Recovery-Phrase ein, um auf deine verschluesselten Fotos zuzugreifen"
                            : "Du hast noch keinen Vault. Erstelle einen neuen oder stelle einen bestehenden wieder her."}
                    </p>
                </div>

                {/* Recovery Phrase Input with Sketch UI */}
                <div className="mb-6">
                    <SketchTextarea
                        value={phrase}
                        onChange={(val) => {
                            setPhrase(val);
                            setError(null);
                        }}
                        label="Recovery-Phrase (12 Woerter)"
                        placeholder="abc123XY-def456AB-..."
                        rows={4}
                    />
                    <p className="sketch-body text-[12px] text-[#8E8E93] mt-2 px-1">
                        Mit Bindestrichen oder Leerzeichen getrennt
                    </p>
                </div>

                {error && (
                    <div className="relative py-3 px-4 mb-6">
                         <SketchCard className="bg-[#FF3B30]/5 border-[#FF3B30]">
                             <p className="sketch-body text-[14px] text-[#FF3B30] text-center">{error}</p>
                         </SketchCard>
                    </div>
                )}

                {/* Info Box with Sketch UI */}
                <div className="mb-6">
                    <SketchCard className="bg-[#2563EB]/5">
                        <div className="flex items-start gap-3">
                            <Info className="w-5 h-5 text-[#2563EB] mt-0.5 flex-shrink-0" />
                            <div>
                                <p className="sketch-subheading text-[15px] mb-1">
                                    Warum brauche ich die Phrase?
                                </p>
                                <p className="sketch-body text-[13px] text-[#6E6E73]">
                                    Deine Fotos sind lokal verschluesselt. Nur mit der Recovery-Phrase
                                    kannst du sie entschluesseln. Wir speichern sie niemals.
                                </p>
                            </div>
                        </div>
                    </SketchCard>
                </div>
            </div>

            {/* Buttons with Sketch UI */}
            <div className="space-y-4">
                <SketchButton
                    onClick={handleUnlock}
                    disabled={isUnlocking || !phrase.trim()}
                    className="w-full"
                    size="lg"
                >
                    {isUnlocking ? (
                        <Loader2 className="w-6 h-6 animate-spin" />
                    ) : (
                        "Vault entsperren"
                    )}
                </SketchButton>

                {!expectedKeyHash && (
                    <button
                        onClick={onCreateNewVault}
                        className="w-full py-2 sketch-body text-[#2563EB] text-[17px] hover:underline"
                    >
                        Neuen Vault erstellen
                    </button>
                )}
            </div>
        </div>
    );
}
