/**
 * PhotoGrid - Responsive Gallery Grid with Glassmorphism Effects
 *
 * Features:
 * - Responsive layout (2-8 columns based on screen size)
 * - Glassmorphism container with backdrop blur
 * - Smooth fade-in animations for photos
 * - Optimized gap spacing for different screen sizes
 * - Empty state with iOS-style design
 */

"use client";

import { type PhotoMetadata } from "@/lib/storage/local-db";
import { PhotoCard } from "./PhotoCard";
import { motion } from "framer-motion";

interface PhotoGridProps {
  photos: PhotoMetadata[];
  decryptPhoto: (photo: PhotoMetadata) => Promise<string | null>;
  onDeletePhoto?: (id: number) => void;
}

export function PhotoGrid({
  photos,
  decryptPhoto,
  onDeletePhoto,
}: PhotoGridProps) {
  if (photos.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center justify-center min-h-[400px] text-center px-4"
      >
        <div className="relative p-8 mb-4">
          {/* Sketch UI Icon Container */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
          >
            <path
              d="M 10 10 Q 30 5, 50 10 Q 70 5, 90 10 Q 95 30, 90 50 Q 95 70, 90 90 Q 70 95, 50 90 Q 30 95, 10 90 Q 5 70, 10 50 Q 5 30, 10 10 Z"
              fill="#FAFBFC"
              stroke="#2563EB"
              strokeWidth="2"
            />
          </svg>
          <svg
            className="w-12 h-12 text-[#2563EB]/60 relative z-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h3 className="sketch-heading mb-2">
          No photos yet
        </h3>
        <p className="sketch-body text-[#3B82F6]/60 max-w-xs">
          Upload your first encrypted photo to get started
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="photo-grid-container"
    >
      {/* Sketch UI Grid Rahmen */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none -z-[1]"
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

      <div className="photo-grid">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
              ease: "easeOut",
            }}
            className="photo-grid-item"
          >
            <PhotoCard
              photo={photo}
              decryptPhoto={decryptPhoto}
              onDelete={onDeletePhoto}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
