/**
 * UploadZone - Drag & Drop Photo Upload mit Client-Side Encryption
 */

'use client';

import { useCallback, useState } from 'react';
import { Upload, Lock } from 'lucide-react';
import { SUPPORTED_MIME_TYPES, LIMITS } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface UploadZoneProps {
  onUpload: (files: File[]) => void;
  isUploading?: boolean;
  maxFiles?: number;
}

export function UploadZone({ onUpload, isUploading, maxFiles = 10 }: UploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const files = Array.from(e.dataTransfer.files);
      const validFiles = files.filter((file) =>
        SUPPORTED_MIME_TYPES.includes(file.type as any)
      );

      if (validFiles.length > 0) {
        onUpload(validFiles.slice(0, maxFiles));
      }
    },
    [onUpload, maxFiles]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || []);
      const validFiles = files.filter((file) =>
        SUPPORTED_MIME_TYPES.includes(file.type as any)
      );

      if (validFiles.length > 0) {
        onUpload(validFiles.slice(0, maxFiles));
      }
    },
    [onUpload, maxFiles]
  );

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={cn(
        'relative flex flex-col items-center justify-center',
        'min-h-[300px] rounded-lg border-2 border-dashed',
        'transition-all duration-200',
        'backdrop-blur-sm bg-white/5',
        isDragging
          ? 'border-primary bg-primary/10 scale-[1.02]'
          : 'border-white/20 hover:border-primary/50',
        isUploading && 'opacity-50 pointer-events-none'
      )}
    >
      <input
        type="file"
        multiple
        accept={SUPPORTED_MIME_TYPES.join(',')}
        onChange={handleFileInput}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        disabled={isUploading}
      />

      <div className="flex flex-col items-center gap-4 pointer-events-none">
        <div
          className={cn(
            'p-4 rounded-full',
            'bg-primary/10 border border-primary/30',
            'transition-all duration-200',
            isDragging && 'scale-110 shadow-[0_0_20px_rgba(0,255,136,0.3)]'
          )}
        >
          {isUploading ? (
            <Lock className="w-8 h-8 text-primary animate-pulse" />
          ) : (
            <Upload className="w-8 h-8 text-primary" />
          )}
        </div>

        <div className="text-center">
          <p className="text-lg font-medium text-white">
            {isUploading ? 'Encrypting & Uploading...' : 'Drop photos here'}
          </p>
          <p className="text-sm text-white/60 mt-1">
            or click to browse • JPG, PNG, WEBP, HEIC
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-primary/80">
          <Lock className="w-3 h-3" />
          <span>End-to-end encrypted before upload</span>
        </div>
      </div>
    </div>
  );
}
