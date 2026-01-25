/**
 * UploadProgress Component
 *
 * Displays upload progress for individual photos with animated progress bar.
 * Supports multiple states: uploading, encrypting, success, and error.
 *
 * Features:
 * - Glassmorphism design with backdrop blur
 * - Animated progress bar using Framer Motion
 * - File name and size display with automatic formatting
 * - Success/error states with appropriate icons and colors
 * - Smooth transitions for appearance and disappearance
 * - Auto-hide after successful completion
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.fileName - Name of the file being uploaded
 * @param {number} props.fileSize - Size of the file in bytes
 * @param {number} props.progress - Upload progress percentage (0-100)
 * @param {'uploading' | 'encrypting' | 'success' | 'error'} [props.status='uploading'] - Current upload status
 * @param {function} [props.onCancel] - Callback function when cancel button is clicked
 */

"use client";

import { useState, useEffect } from "react";
import { Check, X, Loader2, CloudUpload } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface UploadProgressProps {
  fileName: string;
  fileSize: number;
  progress: number; // 0-100
  status?: "uploading" | "encrypting" | "success" | "error";
  onCancel?: () => void;
}

export function UploadProgress({
  fileName,
  fileSize,
  progress,
  status = "uploading",
  onCancel,
}: UploadProgressProps) {
  const [isVisible, setIsVisible] = useState(true);

  // Auto-hide after success
  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  if (!isVisible) return null;

  // Format file size
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const getStatusIcon = () => {
    switch (status) {
      case "success":
        return <Check className="w-5 h-5 text-success" />;
      case "error":
        return <X className="w-5 h-5 text-destructive" />;
      case "encrypting":
        return <Loader2 className="w-5 h-5 text-primary animate-spin" />;
      default:
        return <CloudUpload className="w-5 h-5 text-primary" />;
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "success":
        return "Upload complete";
      case "error":
        return "Upload failed";
      case "encrypting":
        return "Encrypting...";
      default:
        return "Uploading...";
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="bg-[#FAFBFC] rounded-lg p-3 mb-2 shadow-sm border border-[#2563EB] relative"
      >
        {/* Sketch UI Rahmen */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none -z-1"
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

        <div className="flex items-center gap-3 relative z-10">
          <div className="flex-shrink-0">{getStatusIcon()}</div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-[#1E40AF] truncate max-w-[180px] sm:max-w-[250px] font-['Caveat',_cursive]">
                {fileName}
              </span>
              <span className="text-xs text-[#3B82F6] whitespace-nowrap font-['Caveat',_cursive]">
                {formatFileSize(fileSize)}
              </span>
            </div>

            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-[#3B82F6] font-['Caveat',_cursive]">
                {getStatusText()}
              </span>
              <span className="text-xs font-mono text-[#1E40AF] font-['Caveat',_cursive]">
                {progress}%
              </span>
            </div>

            {/* Sketch UI Progress Bar */}
            <div className="w-full h-2 bg-[#EFF6FF] rounded-full mt-2 overflow-hidden border border-[#2563EB]">
              <motion.div
                className={`h-full rounded-full ${
                  status === "success"
                    ? "bg-[#10B981]"
                    : status === "error"
                      ? "bg-[#EF4444]"
                      : "bg-[#2563EB]"
                }`}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              {/* Handgezeichneter Progress Bar Rahmen */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                preserveAspectRatio="none"
              >
                <path
                  d="M 0 0 L 100% 0 L 100% 100% L 0 100% Z"
                  fill="transparent"
                  stroke="#2563EB"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {onCancel && status !== "success" && (
            <button
              onClick={onCancel}
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
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
