"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import { CustomIcon } from "@/components/ui/custom-icon";
import { signIn } from "@/lib/auth-client";
import { SketchButton, SketchInput } from "@/sketch-ui";

interface AuthScreenProps {
  onSuccess: (user: {
    id: string;
    email: string;
    vaultKeyHash: string | null;
  }) => void;
}

type AuthMode = "welcome" | "login";

export function AuthScreen({ onSuccess }: AuthScreenProps) {
  const [mode, setMode] = useState<AuthMode>("welcome");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Bitte E-Mail und Passwort eingeben");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await signIn.email({
        email,
        password,
      });

      if (result.error) {
        setError(result.error.message || "Anmeldung fehlgeschlagen");
        return;
      }

      if (result.data?.user) {
        onSuccess({
          id: result.data.user.id,
          email: result.data.user.email,
          vaultKeyHash:
            (result.data.user as { vault_key_hash?: string }).vault_key_hash ||
            null,
        });
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Ein Fehler ist aufgetreten. Bitte versuche es erneut.");
    } finally {
      setIsLoading(false);
    }
  };

  // Welcome Screen
  if (mode === "welcome") {
    return (
      <div className="min-h-screen flex flex-col px-6 pt-16 pb-8 safe-area-inset bg-[#FAFBFC]">
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          {/* Logo with Sketch UI */}
          <div className="relative w-28 h-28 mb-8">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
            >
              <path
                d="M 10 10 Q 30 5, 50 10 Q 70 5, 90 10 Q 95 30, 90 50 Q 95 70, 90 90 Q 70 95, 50 90 Q 30 95, 10 90 Q 5 70, 10 50 Q 5 30, 10 10 Z"
                fill="white"
                stroke="#2563EB"
                strokeWidth="3"
              />
            </svg>
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <CustomIcon name="shield" size={56} className="text-[#2563EB]" />
            </div>
          </div>

          <h1 className="sketch-heading text-[42px] mb-3">PhotoVault</h1>
          <p className="sketch-body text-[#3B82F6] max-w-[280px] mb-12">
            Sichere deine Fotos mit Zero-Knowledge Verschluesselung
          </p>

          {/* Features with Sketch UI */}
          <div className="w-full max-w-[320px] space-y-4 mb-12">
            <FeatureItem icon="lock" text="Ende-zu-Ende verschluesselt" />
            <FeatureItem icon="smartphone" text="Multi-Device Sync" />
            <FeatureItem icon="cloud" text="Dezentrales IPFS Backup" />
          </div>
        </div>

        {/* Buttons with Sketch UI */}
        <div className="space-y-4">
          <SketchButton
            onClick={() => setMode("login")}
            className="w-full"
            size="lg"
          >
            Anmelden
          </SketchButton>
          
          <p className="text-center sketch-body text-gray-400 text-sm">
            Registrierung ist derzeit deaktiviert
          </p>
        </div>
      </div>
    );
  }

  // Login Form
  return (
    <div className="min-h-screen flex flex-col px-6 pt-12 pb-8 safe-area-inset bg-[#FAFBFC]">
      {/* Header */}
      <button
        onClick={() => setMode("welcome")}
        className="self-start sketch-body text-[#2563EB] mb-8 ios-tap-target flex items-center gap-2"
      >
        ← Zurueck
      </button>

      <div className="flex-1">
        <h1 className="sketch-heading text-[32px] mb-2">
          Willkommen zurueck
        </h1>
        <p className="sketch-body text-[#3B82F6] mb-8">
          Melde dich an, um auf deinen Vault zuzugreifen
        </p>

        {/* Form with Sketch UI */}
        <div className="space-y-6">
          <div className="relative">
            <SketchInput
              type="email"
              value={email}
              onChange={(val) => setEmail(val)}
              placeholder="E-Mail"
              label="E-Mail"
              icon={<Mail className="w-5 h-5" />}
            />
          </div>

          <div className="relative flex flex-col gap-1">
            <SketchInput
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(val) => setPassword(val)}
              placeholder="Passwort"
              label="Passwort"
              icon={<Lock className="w-5 h-5" />}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[38px] text-[#2563EB]/40 z-20"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>

          {error && (
            <div className="relative py-3 px-4">
              <svg
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M 2 5 Q 25 2, 50 5 Q 75 2, 98 5 Q 99 30, 98 60 Q 75 63, 50 60 Q 25 63, 2 60 Q 1 30, 2 5 Z"
                  fill="#FF3B3010"
                  stroke="#FF3B30"
                  strokeWidth="1"
                />
              </svg>
              <p className="relative z-10 sketch-body text-[#FF3B30] text-center text-sm">
                {error}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Submit Button with Sketch UI */}
      <div className="space-y-4">
        <SketchButton
          onClick={handleLogin}
          disabled={isLoading}
          className="w-full"
          size="lg"
        >
          {isLoading ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            "Anmelden"
          )}
        </SketchButton>
      </div>

      <style jsx>{`
        .sketch-input-field {
          width: 100%;
          height: 54px;
          background-color: transparent;
          border: 2px solid #2563eb;
          border-radius: 12px;
          padding-left: 3rem;
          padding-right: 1rem;
          font-family: "Google Sans", sans-serif;
          font-size: 17px;
          color: #1d1d1f;
          transition: border-color 0.2s;
        }
        .sketch-input-field:focus {
          outline: none;
          border-color: #1e40af;
        }
        .sketch-input-field::placeholder {
          color: #8e8e93;
        }
      `}</style>
    </div>
  );
}

function FeatureItem({
  icon,
  text,
}: {
  icon: "lock" | "smartphone" | "cloud";
  text: string;
}) {
  return (
    <div className="relative group">
      {/* Hand-drawn border for feature item */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          d="M 2 2 Q 25 -1, 50 2 Q 75 -1, 98 2 Q 100 25, 98 50 Q 75 53, 50 50 Q 25 53, 2 50 Q 0 25, 2 2 Z"
          fill="white"
          stroke="#2563EB40"
          strokeWidth="1.5"
        />
      </svg>
      <div className="relative z-10 flex items-center gap-4 p-4">
        <div className="w-10 h-10 rounded-full flex items-center justify-center">
          <CustomIcon name={icon} size={24} className="text-[#2563EB]" />
        </div>
        <span className="sketch-body text-base text-[#1E40AF]">{text}</span>
      </div>
    </div>
  );
}
