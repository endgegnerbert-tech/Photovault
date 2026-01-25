"use client";

import { useState } from "react";
import { Check, Copy, CheckCircle } from "lucide-react";
import { CustomIcon } from "@/components/ui/custom-icon";
import ShieldLoader from "@/components/ui/shield-loader";
import { useEncryption } from "@/hooks/use-encryption";
import { SketchButton, SketchCard, SketchIcon, SketchToggle } from "@/sketch-ui";

interface VaultSetupScreenProps {
    userId: string;
    onComplete: (keyHash: string) => void;
    onBack: () => void;
}

type SetupStep = "intro" | "generating" | "phrase" | "confirm";

export function VaultSetupScreen({ userId, onComplete, onBack }: VaultSetupScreenProps) {
    const [step, setStep] = useState<SetupStep>("intro");
    const [phraseConfirmed, setPhraseConfirmed] = useState(false);
    const [copied, setCopied] = useState(false);

    const { isGeneratingKey, generateNewKey, recoveryPhrase, userKeyHash } = useEncryption();

    const handleCreateVault = async () => {
        setStep("generating");
        try {
            await generateNewKey();
            setStep("phrase");
        } catch (err) {
            console.error("Failed to generate key:", err);
            setStep("intro");
        }
    };

    const handleCopyPhrase = async () => {
        if (recoveryPhrase) {
            await navigator.clipboard.writeText(recoveryPhrase);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handleConfirmPhrase = () => {
        if (userKeyHash) {
            onComplete(userKeyHash);
        }
    };

    // Parse phrase into words for display
    const phraseWords = recoveryPhrase?.split("-").slice(0, 12) || [];

    // Show loader during key generation
    if (step === "generating" || isGeneratingKey) {
        return <ShieldLoader />;
    }

    // Intro step
    if (step === "intro") {
        return (
            <div className="min-h-screen flex flex-col px-6 pt-12 pb-8 safe-area-inset bg-[#FAFBFC]">
            <button
                onClick={onBack}
                className="self-start sketch-body text-[#2563EB] text-[17px] mb-8 hover:text-[#1E40AF]"
            >
                ← Zurueck
            </button>

                <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <div className="mb-6">
                        <SketchIcon icon="key" size={80} />
                    </div>

                    <h1 className="sketch-heading text-[32px] mb-3 text-[#1D1D1F]">
                        Erstelle deinen Vault
                    </h1>
                    <p className="sketch-body text-[17px] text-[#3B82F6] max-w-[300px] mb-8">
                        Dein persoenlicher Verschluesselungsschluessel schuetzt alle deine Fotos
                    </p>

                    {/* Features with Sketch Cards */}
                    <div className="w-full max-w-[320px] space-y-4 mb-8">
                        <SketchCard className="p-4">
                            <div className="flex items-start gap-4">
                                <SketchIcon icon="shield" size={32} color="#30D158" />
                                <div className="text-left">
                                    <p className="sketch-subheading text-[16px]">Zero-Knowledge</p>
                                    <p className="sketch-body text-[13px] text-[#6E6E73]">
                                        Nur du kannst deine Fotos entschluesseln
                                    </p>
                                </div>
                            </div>
                        </SketchCard>

                        <SketchCard className="p-4">
                            <div className="flex items-start gap-4">
                                <SketchIcon icon="clock" size={32} color="#2563EB" />
                                <div className="text-left">
                                    <p className="sketch-subheading text-[16px]">Recovery-Phrase</p>
                                    <p className="sketch-body text-[13px] text-[#6E6E73]">
                                        12 Woerter zum Wiederherstellen
                                    </p>
                                </div>
                            </div>
                        </SketchCard>

                        <SketchCard className="p-4">
                            <div className="flex items-start gap-4">
                                <SketchIcon icon="photo" size={32} color="#FF9500" />
                                <div className="text-left">
                                    <p className="sketch-subheading text-[16px]">Multi-Device</p>
                                    <p className="sketch-body text-[13px] text-[#6E6E73]">
                                        Synchronisiere all deine Geraete
                                    </p>
                                </div>
                            </div>
                        </SketchCard>
                    </div>
                </div>

                <SketchButton
                    onClick={handleCreateVault}
                    className="w-full"
                    size="lg"
                >
                    Vault erstellen
                </SketchButton>
            </div>
        );
    }

    // Show recovery phrase
    if (step === "phrase") {
        return (
        <div className="min-h-screen flex flex-col px-6 pt-12 pb-8 safe-area-inset bg-[#FAFBFC]">
            <div className="flex-1">
                <div className="text-center mb-6">
                    <h1 className="sketch-heading text-[32px] mb-2 text-[#1D1D1F]">
                        Deine Phrase
                    </h1>
                    <p className="sketch-body text-[15px] text-[#6E6E73]">
                        Notiere diese Woerter sicher. Du brauchst sie zur Wiederherstellung.
                    </p>
                </div>

                {/* 12 words in Grid with Sketch Cards */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                    {phraseWords.map((word, index) => (
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

                {/* Copy button */}
                <button
                    onClick={handleCopyPhrase}
                    className="w-full py-3 sketch-body text-[#2563EB] text-[16px] hover:underline mb-4"
                >
                    {copied ? "✓ Kopiert!" : "Phrase kopieren"}
                </button>

                {/* Warning Card */}
                <div className="mb-6">
                    <SketchCard className="bg-[#FF3B30]/5 border-[#FF3B30]">
                        <p className="sketch-body text-[13px] text-[#FF3B30] text-center">
                            Teile diese Woerter niemals mit anderen. Wer sie hat, kann auf deine
                            Fotos zugreifen.
                        </p>
                    </SketchCard>
                </div>

                {/* Confirmation Toggle */}
                <div className="mb-8">
                    <SketchCard className="p-4 flex items-center justify-between">
                         <span className="sketch-subheading text-[17px] text-[#1D1D1F]">
                            Sicher gespeichert?
                        </span>
                        <SketchToggle
                            checked={phraseConfirmed}
                            onChange={setPhraseConfirmed}
                        />
                    </SketchCard>
                </div>
            </div>

            <SketchButton
                onClick={handleConfirmPhrase}
                disabled={!phraseConfirmed}
                className="w-full"
                size="lg"
            >
                Weiter
            </SketchButton>
        </div>
        );
    }

    return null;
}
