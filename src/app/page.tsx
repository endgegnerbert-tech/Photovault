/**
 * Main Page - PhotoVault Gallery
 */

'use client';

import { useEffect } from 'react';
import { useEncryption } from '@/hooks/use-encryption';
import { useGalleryData } from '@/hooks/use-gallery-data';
import { UploadZone } from '@/components/features/upload/UploadZone';
import { PhotoGrid } from '@/components/features/gallery/PhotoGrid';
import { Lock, Key, Shield } from 'lucide-react';

export default function HomePage() {
  const { secretKey, hasKey, generateNewKey, recoveryPhrase, isInitialized } =
    useEncryption();
  const { photos, photoCount, uploadPhoto, deletePhoto, decryptPhoto, isUploading } =
    useGalleryData(secretKey);

  // Auto-generate key on first visit
  useEffect(() => {
    if (isInitialized && !hasKey) {
      generateNewKey();
    }
  }, [isInitialized, hasKey, generateNewKey]);

  const handleUpload = (files: File[]) => {
    files.forEach((file) => uploadPhoto(file));
  };

  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <Lock className="w-12 h-12 text-primary" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm bg-black/50 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/30">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">PhotoVault</h1>
                <p className="text-sm text-white/60">End-to-end encrypted</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-white/60">Photos</p>
                <p className="text-lg font-semibold text-primary">{photoCount}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Recovery Phrase Alert */}
        {recoveryPhrase && (
          <div className="mb-8 p-4 rounded-lg glass border border-primary/30">
            <div className="flex items-start gap-3">
              <Key className="w-5 h-5 text-primary mt-0.5" />
              <div className="flex-1">
                <h3 className="text-sm font-medium text-white mb-1">
                  Save your recovery phrase
                </h3>
                <p className="text-xs text-white/60 mb-2">
                  This is the only way to access your photos. Keep it safe!
                </p>
                <code className="block p-2 rounded bg-black/50 text-xs text-primary font-mono break-all">
                  {recoveryPhrase}
                </code>
              </div>
            </div>
          </div>
        )}

        {/* Upload Zone */}
        <div className="mb-8">
          <UploadZone onUpload={handleUpload} isUploading={isUploading} />
        </div>

        {/* Photo Grid */}
        <PhotoGrid
          photos={photos}
          decryptPhoto={decryptPhoto}
          onDeletePhoto={deletePhoto}
        />
      </main>
    </div>
  );
}
