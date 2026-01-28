"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Loader2, Key } from "lucide-react";
import { CustomIcon } from "@/components/ui/custom-icon";
import { signIn, signUp } from "@/lib/auth-client";
import { verifyAccessCode, consumeAccessCode } from "@/app/actions/access-code";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AuthScreenProps {
  onSuccess: (user: {
    id: string;
    email: string;
    vaultKeyHash: string | null;
  }) => void;
}

type AuthMode = "welcome" | "login" | "register";

export function AuthScreen({ onSuccess }: AuthScreenProps) {
  const [mode, setMode] = useState<AuthMode>("welcome");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessCode, setAccessCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please enter email and password");
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
        setError(result.error.message || "Login failed");
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
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async () => {
    if (!email || !password || !accessCode) {
      setError("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // 1. Verify Access Code
      const verifyRes = await verifyAccessCode(accessCode);
      if (!verifyRes.success) {
        setError(verifyRes.message || "Invalid access code");
        setIsLoading(false);
        return;
      }

      // 2. Register
      const result = await signUp.email({
        email,
        password,
        name: email.split("@")[0], // Default name
      });

      if (result.error) {
        setError(result.error.message || "Registration failed");
        setIsLoading(false);
        return;
      }

      // 3. Consume Code
      await consumeAccessCode(accessCode);

      // 4. Success
      if (result.data?.user) {
        onSuccess({
          id: result.data.user.id,
          email: result.data.user.email,
          vaultKeyHash: null,
        });
      }
    } catch (err) {
      console.error("Registration error:", err);
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Welcome Screen
  if (mode === "welcome") {
    return (
      <div className="min-h-screen flex flex-col px-6 pt-16 pb-8 safe-area-inset bg-[#FAFBFC]">
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          {/* Logo */}
          <div className="relative w-28 h-28 mb-8 flex items-center justify-center bg-blue-50 dark:bg-blue-900/10 rounded-3xl shadow-lg shadow-blue-500/10 p-6">
            <img src="/logo.svg" alt="SaecretHeaven Logo" className="w-full h-full object-contain" />
          </div>

          <h1 className="text-4xl font-bold mb-3 tracking-tight text-gray-900 dark:text-white">SaecretHeaven</h1>
          <p className="text-blue-600 dark:text-blue-400 max-w-[280px] mb-12 text-lg">
            Secure your photos with Zero-Knowledge Encryption
          </p>

          {/* Features */}
          <div className="w-full max-w-[320px] space-y-4 mb-12">
            <FeatureItem icon="lock" text="End-to-End Encrypted" />
            <FeatureItem icon="smartphone" text="Multi-Device Sync" />
            <FeatureItem icon="cloud" text="Decentralized IPFS Backup" />
          </div>
        </div>

        <div className="space-y-4">
          <Button
            onClick={() => setMode("login")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-14 text-lg font-semibold shadow-lg shadow-blue-500/20"
            size="lg"
          >
            Log in
          </Button>
          
          <Button
             onClick={() => setMode("register")}
             variant="outline"
             className="w-full border-2 border-blue-100 dark:border-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl h-14 text-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/10"
             size="lg"
          >
            Create Account
          </Button>
        </div>
      </div>
    );
  }

  // Login/Register Form
  const isRegister = mode === "register";

  return (
    <div className="min-h-screen flex flex-col px-6 pt-12 pb-8 safe-area-inset bg-[#FAFBFC]">
      {/* Header */}
      <button
        onClick={() => setMode("welcome")}
        className="self-start text-blue-600 mb-8 ios-tap-target flex items-center gap-2 font-medium hover:underline"
      >
        ← Back
      </button>

      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-2 tracking-tight text-gray-900 dark:text-white">
          {isRegister ? "Create Account" : "Welcome back"}
        </h1>
        <p className="text-blue-600 dark:text-blue-400 mb-8 font-medium">
          {isRegister ? "Access invite-only" : "Log in to access your vault"}
        </p>

        {/* Form */}
        <div className="space-y-6">
          
          {isRegister && (
             <div className="space-y-2">
               <Label htmlFor="code" className="sr-only">Access Code</Label>
               <div className="relative">
                 <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center">
                    <Key className="w-5 h-5 text-gray-400" />
                 </div>
                 <Input
                   id="code"
                   type="text"
                   autoCapitalize="characters"
                   value={accessCode}
                   onChange={(e) => setAccessCode(e.target.value.toUpperCase())}
                   placeholder="Access Code"
                   className="pl-12 h-14 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-xl text-lg shadow-sm font-mono tracking-wider"
                 />
               </div>
             </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email" className="sr-only">Email</Label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="pl-12 h-14 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-xl text-lg shadow-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="sr-only">Password</Label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="pl-12 pr-12 h-14 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-xl text-lg shadow-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {error && (
            <div className="relative py-4 px-4 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 rounded-xl">
              <p className="text-red-600 dark:text-red-400 text-center text-sm font-medium">
                {error}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="space-y-4">
        <Button
          onClick={isRegister ? handleRegister : handleLogin}
          disabled={isLoading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-14 text-lg font-semibold shadow-lg shadow-blue-500/20"
          size="lg"
        >
          {isLoading ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            isRegister ? "Sign up for free" : "Log in"
          )}
        </Button>
      </div>

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
    <div className="relative group bg-white dark:bg-white/5 rounded-2xl p-1 shadow-sm border border-blue-100 dark:border-white/10">
      <div className="relative z-10 flex items-center gap-4 p-3">
        <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-500/20 flex items-center justify-center">
          <CustomIcon name={icon} size={20} className="text-blue-600 dark:text-blue-400" />
        </div>
        <span className="text-base font-medium text-blue-900 dark:text-blue-100">{text}</span>
      </div>
    </div>
  );
}
