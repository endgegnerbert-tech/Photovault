/**
 * PhotoGrid - Gallery Grid mit Virtualization
 */

'use client';

import { type PhotoMetadata } from '@/lib/storage/local-db';
import { PhotoCard } from './PhotoCard';

interface PhotoGridProps {
  photos: PhotoMetadata[];
  decryptPhoto: (photo: PhotoMetadata) => Promise<string | null>;
  onDeletePhoto?: (id: number) => void;
}

export function PhotoGrid({ photos, decryptPhoto, onDeletePhoto }: PhotoGridProps) {
  if (photos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
        <div className="p-6 rounded-full bg-white/5 border border-white/10 mb-4">
          <svg
            className="w-12 h-12 text-white/40"
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
        <h3 className="text-xl font-medium text-white mb-2">No photos yet</h3>
        <p className="text-white/60">Upload your first encrypted photo to get started</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          decryptPhoto={decryptPhoto}
          onDelete={onDeletePhoto}
        />
      ))}
    </div>
  );
}
