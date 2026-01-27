/**
 * A2HSPrompt Component
 *
 * Add to Home Screen prompt for Progressive Web App installation.
 * Detects when the app can be installed and shows a user-friendly prompt.
 *
 * Features:
 * - Detects PWA installation capability using beforeinstallprompt event
 * - Shows prompt after a delay to not be intrusive
 * - Glassmorphism design with backdrop blur
 * - Smooth animations using Framer Motion
 * - Remembers user choice in localStorage to avoid repeated prompts
 * - Responsive layout that works on mobile and desktop
 */

"use client";

import { useState, useEffect } from "react";
import { Smartphone, X, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function A2HSPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if already dismissed
    const dismissedBefore = localStorage.getItem("a2hs-dismissed");
    if (dismissedBefore) return;

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);

      // Show prompt after a delay to not be intrusive
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 5000);

      return () => clearTimeout(timer);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    (deferredPrompt as any).prompt();

    // Wait for user choice
    const { outcome } = await (deferredPrompt as any).userChoice;

    if (outcome === "accepted") {
      console.log("User accepted PWA installation");
    } else {
      console.log("User dismissed PWA installation");
    }

    setShowPrompt(false);
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    setDismissed(true);
    localStorage.setItem("a2hs-dismissed", "true");
  };

  if (!showPrompt || dismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-4 left-4 right-4 z-40 max-w-md mx-auto"
      >
        {/* Sketch UI Prompt */}
        <div className="bg-[#FAFBFC] rounded-xl shadow-lg overflow-hidden border-2 border-[#2563EB] relative">
          {/* Handgezeichneter Rahmen */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            preserveAspectRatio="none"
          >
            <path
              d="M 2% 2% Q 25% -0.5%, 50% 2% Q 75% -0.5%, 98% 2% Q 100.5% 25%, 98% 50% Q 100.5% 75%, 98% 98% Q 75% 100.5%, 50% 98% Q 25% 100.5%, 2% 98% Q -0.5% 75%, 2% 50% Q -0.5% 25%, 2% 2% Z"
              fill="transparent"
              stroke="#2563EB"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="p-4 relative z-10">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 pt-1">
                {/* Sketch UI Smartphone Icon */}
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <rect
                    x="6"
                    y="2"
                    width="12"
                    height="20"
                    rx="2"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="2"
                  />
                  <path d="M 8 20 L 16 20" stroke="#2563EB" strokeWidth="1" />
                  <circle cx="12" cy="22" r="1" fill="#2563EB" />
                </svg>
              </div>

              <div className="flex-1">
                <h4 className="font-semibold text-[#1E40AF] mb-1 font-['Caveat',_cursive]">
                  Install SaecretHeaven
                </h4>
                <p className="text-sm text-[#3B82F6] font-['Architects_Daughter',_cursive]">
                  Get the full app experience with offline access and faster
                  performance.
                </p>
              </div>

              <button
                onClick={handleDismiss}
                className="flex-shrink-0 p-1 rounded-full hover:bg-[#EFF6FF] transition-colors"
              >
                {/* Sketch UI Close Icon */}
                <svg width="16" height="16" viewBox="0 0 16 16">
                  <path
                    d="M 2 2 L 14 14 M 14 2 L 2 14"
                    stroke="#2563EB"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>

            <div className="flex gap-2 mt-3">
              <button
                onClick={handleInstall}
                className="flex-1 bg-[#2563EB] text-white flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-sm font-medium font-['Architects_Daughter',_cursive] hover:bg-[#1E40AF] transition-colors"
              >
                {/* Sketch UI Plus Icon */}
                <svg width="16" height="16" viewBox="0 0 16 16">
                  <path
                    d="M 8 2 L 8 14 M 2 8 L 14 8"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
                Add to Home Screen
              </button>

              <button
                onClick={handleDismiss}
                className="flex-shrink-0 bg-[#EFF6FF] text-[#2563EB] py-2 px-4 rounded-lg text-sm font-medium font-['Caveat',_cursive] hover:bg-[#DFEFFF] transition-colors"
              >
                Not Now
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
