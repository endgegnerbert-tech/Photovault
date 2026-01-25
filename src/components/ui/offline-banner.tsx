/**
 * OfflineBanner Component
 *
 * Displays a notification banner when the user loses internet connection.
 * Automatically hides when connection is restored.
 *
 * Features:
 * - Glassmorphism design with backdrop blur
 * - Smooth slide-down animation using Framer Motion
 * - Auto-hide when connection is restored
 * - Responsive layout that works on mobile and desktop
 * - Shows helpful message about syncing when back online
 */

"use client";

import { useState, useEffect } from "react";
import { WifiOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function OfflineBanner() {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Check initial state
    setIsOffline(!navigator.onLine);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -60, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed top-0 left-0 right-0 z-50 p-4"
      >
        {/* Sketch UI Banner */}
        <div className="bg-[#FAFBFC] rounded-xl shadow-lg overflow-hidden border-2 border-[#2563EB]">
          <div className="flex items-center justify-center gap-3 p-3 relative">
            {/* Handgezeichneter Rahmen */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              preserveAspectRatio="none"
            >
              <path
                d="M 2% 2% Q 25% -0.5%, 50% 2% Q 75% -0.5%, 98% 2% Q 100.5% 25%, 98% 50% Q 100.5% 75%, 98% 98% Q 75% 100.5%, 50% 98% Q 25% 100.5%, 2% 98% Q -0.5% 75%, 2% 50% Q -0.5% 25%, 2% 2% Z"
                fill="transparent"
                stroke="#2563EB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Sketch UI Wifi Icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="text-[#2563EB]"
            >
              <path
                d="M 12 3 Q 15 6, 18 9 Q 21 12, 18 15 Q 15 18, 12 21 Q 9 18, 6 15 Q 3 12, 6 9 Q 9 6, 12 3 Z"
                fill="none"
                stroke="#2563EB"
                strokeWidth="2"
              />
              <path d="M 12 9 L 12 15" stroke="#2563EB" strokeWidth="2" />
              <path d="M 9 12 L 15 12" stroke="#2563EB" strokeWidth="2" />
            </svg>

            <span className="text-[#1E40AF] font-medium text-sm font-['Architects_Daughter',_cursive]">
              You're offline
            </span>
            <span className="text-[#3B82F6] text-sm hidden sm:inline font-['Architects_Daughter',_cursive]">
              Changes will sync when you're back online
            </span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
