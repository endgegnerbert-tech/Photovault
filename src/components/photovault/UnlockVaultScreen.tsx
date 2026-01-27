"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import { CustomIcon } from "@/components/ui/custom-icon";
import {
    recoveryPhraseToKey,
    saveKeyToStorage,
    getUserKeyHash,
} from "@/lib/crypto";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Shield, LogOut } from "lucide-react";

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
                <div className="text-sm text-gray-500">
                    Angemeldet als
                    <br />
                    <span className="text-blue-600 font-bold">{userEmail}</span>
                </div>
                <button
                    onClick={onLogout}
                    className="text-red-500 text-[15px] font-medium hover:text-red-600 flex items-center gap-1"
                >
                    <LogOut className="w-4 h-4" />
                    Abmelden
                </button>
            </div>

            <div className="flex-1 flex flex-col">
                {/* Icon & Title */}
                <div className="flex flex-col items-center text-center mb-8">
                    <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-full">
                        <img src="/logo.svg" alt="SaecretHeaven" className="w-16 h-16 object-contain" />
                    </div>
                    <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                        Vault entsperren
                    </h1>
                    <p className="text-[15px] text-gray-500 max-w-[300px]">
                        {expectedKeyHash
                            ? "Gib deine Recovery-Phrase ein, um auf deine verschluesselten Fotos zuzugreifen"
                            : "Du hast noch keinen Vault. Erstelle einen neuen oder stelle einen bestehenden wieder her."}
                    </p>
                </div>

                {/* Recovery Phrase Input */}
                <div className="mb-6 space-y-2">
                    <Textarea
                        value={phrase}
                        onChange={(e) => {
                            setPhrase(e.target.value);
                            setError(null);
                        }}
                        placeholder="abc123XY-def456AB-..."
                        className="min-h-[120px] bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-xl text-base p-4 resize-none"
                    />
                    <p className="text-[12px] text-gray-400 px-1 text-center">
                        Mit Bindestrichen oder Leerzeichen getrennt (12 Wörter)
                    </p>
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 rounded-xl">
                         <p className="text-[14px] text-red-600 dark:text-red-400 text-center font-medium">{error}</p>
                    </div>
                )}

                {/* Info Box */}
                <div className="mb-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-xl flex items-start gap-3">
                        <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <p className="text-[15px] font-medium text-blue-900 dark:text-blue-100 mb-1">
                                Warum brauche ich die Phrase?
                            </p>
                            <p className="text-[13px] text-blue-700 dark:text-blue-300">
                                Deine Fotos sind lokal verschluesselt. Nur mit der Recovery-Phrase
                                kannst du sie entschluesseln. Wir speichern sie niemals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="space-y-4">
                <Button
                    onClick={handleUnlock}
                    disabled={isUnlocking || !phrase.trim()}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-14 text-lg font-semibold shadow-lg shadow-blue-500/20"
                    size="lg"
                >
                    {isUnlocking ? (
                        <Loader2 className="w-6 h-6 animate-spin" />
                    ) : (
                        "Vault entsperren"
                    )}
                </Button>

                {!expectedKeyHash && (
                    <button
                        onClick={onCreateNewVault}
                        className="w-full py-2 text-blue-600 text-[17px] hover:underline font-medium"
                    >
                        Neuen Vault erstellen
                    </button>
                )}
            </div>
        </div>
    );
}
