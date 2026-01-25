/**
 * PhotoCard - Single Photo Item with Sketch UI Design
 *
 * Features:
 * - Hand-drawn sketch style with blue rough lines
 * - Smooth fade-in animation on image load
 * - Hover effects with scale and shadow
 * - Loading and error states with sketch-style animations
 * - Delete button with sketch-style design
 */

"use client";

import { useState, useEffect, useMemo } from "react";
import { Loader2, AlertTriangle } from "lucide-react";
import { type PhotoMetadata } from "@/lib/storage/local-db";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface PhotoCardProps {
  photo: PhotoMetadata;
  decryptPhoto: (photo: PhotoMetadata) => Promise<string | null>;
  onDelete?: (id: number) => void;
}

export function PhotoCard({ photo, decryptPhoto, onDelete }: PhotoCardProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Sketch UI Jitter Werte für handgezeichneten Effekt
  const jitter = useMemo(() => {
    return Array.from({ length: 12 }, () => (Math.random() - 0.5) * 4);
  }, []);

  useEffect(() => {
    let mounted = true;

    const decrypt = async () => {
      try {
        const url = await decryptPhoto(photo);
        if (mounted) {
          setImageUrl(url);
          setIsLoading(false);
        }
      } catch {
        if (mounted) {
          setError(true);
          setIsLoading(false);
        }
      }
    };

    decrypt();

    return () => {
      mounted = false;
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [photo, decryptPhoto]);

  return (
    <motion.div
      className={cn(
        "group relative aspect-square overflow-hidden",
        "bg-[#FAFBFC]", // Sketch UI Hintergrundfarbe
        "transition-all duration-300 ease-in-out",
        "transform hover:scale-[1.02]",
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {/* Sketch UI Rahmen - handgezeichnet */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        preserveAspectRatio="none"
      >
        <path
          d={`
            M ${5 + jitter[0]}% ${3 + jitter[1]}%
            Q ${25}% ${-0.5 + jitter[2]}%, ${50}% ${2 + jitter[3]}%
            Q ${75}% ${-0.5}%, ${95 + jitter[4]}% ${3}%
            Q ${100.5}% ${25}%, ${97}% ${50}%
            Q ${100.5}% ${75}%, ${95 + jitter[5]}% ${97}%
            Q ${75}% ${100.5}%, ${50}% ${97 + jitter[6]}%
            Q ${25}% ${100.5}%, ${5 + jitter[7]}% ${97}%
            Q ${-0.5}% ${75}%, ${3}% ${50}%
            Q ${-0.5}% ${25}%, ${5 + jitter[8]}% ${3}%
            Z
          `}
          fill="transparent"
          stroke="#2563EB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute inset-0 w-full h-full"
        />
      </svg>

      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-black/20"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "linear",
              }}
            >
              <Loader2 className="w-6 h-6 text-primary" />
            </motion.div>
          </motion.div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 p-4"
          >
            <AlertTriangle className="w-8 h-8 text-destructive mb-2" />
            <p className="text-sm text-white font-medium">Decryption failed</p>
            <p className="text-xs text-white/80 mt-1">
              This photo cannot be displayed
            </p>
          </motion.div>
        )}

        {imageUrl && (
          <>
            <motion.img
              src={imageUrl}
              alt={photo.fileName}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onLoad={() => setIsLoading(false)}
            />

            {onDelete && (
              <motion.button
                onClick={() => photo.id && onDelete(photo.id)}
                className={cn(
                  "absolute top-2 right-2 z-20",
                  "opacity-0 group-hover:opacity-100",
                  "transition-all duration-300",
                  "hover:scale-110",
                )}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {/* Sketch UI Delete Button */}
                <svg width="32" height="32" viewBox="0 0 32 32">
                  <path
                    d="M 4 6 L 28 6 Q 29 6, 29 7 L 29 25 Q 29 26, 28 26 L 4 26 Q 3 26, 3 25 L 3 7 Q 3 6, 4 6 Z"
                    fill="#FF3B30"
                    stroke="#B52D24"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M 10 10 L 22 10"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 14 14 L 18 14"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 10 18 L 22 18"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.button>
            )}

            {/* Storage Status Icons */}
            <div className="absolute bottom-2 left-2 flex gap-1 z-20">
              {photo.encryptedBlob && (
                <div className="bg-[#2563EB] rounded-full p-1 shadow-sm border border-white/20">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <rect x="5" y="2" width="14" height="20" rx="2" />
                    <line x1="12" y1="18" x2="12" y2="18" strokeLinecap="round" />
                  </svg>
                </div>
              )}
              {photo.cid && !photo.cid.startsWith('cid_') && (
                <div className="bg-[#30D158] rounded-full p-1 shadow-sm border border-white/20">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <path d="M17.5 19c.5 0 1-.2 1.4-.5.4-.3.6-.8.6-1.3 0-2.2-1.8-4-4-4-.3 0-.6 0-.8.1-.5-1.3-1.8-2.1-3.2-2.1-2 0-3.5 1.6-3.5 3.5 0 .2 0 .5.1.7-1.5.3-2.6 1.6-2.6 3.2 0 1.9 1.6 3.5 3.5 3.5h8.5z" />
                  </svg>
                </div>
              )}
            </div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
