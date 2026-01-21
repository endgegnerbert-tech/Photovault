/**
 * PhotoCard - Single Photo Item mit Lazy Decryption
 */

'use client';

import { useState, useEffect } from 'react';
import { Loader2, Trash2 } from 'lucide-react';
import { type PhotoMetadata } from '@/lib/storage/local-db';
import { cn } from '@/lib/utils';

interface PhotoCardProps {
  photo: PhotoMetadata;
  decryptPhoto: (photo: PhotoMetadata) => Promise<string | null>;
  onDelete?: (id: number) => void;
}

export function PhotoCard({ photo, decryptPhoto, onDelete }: PhotoCardProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

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
    <div
      className={cn(
        'group relative aspect-square rounded-lg overflow-hidden',
        'bg-white/5 backdrop-blur-sm',
        'border border-white/10 hover:border-primary/50',
        'transition-all duration-200'
      )}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="w-6 h-6 text-primary animate-spin" />
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-sm text-red-400">Decryption failed</p>
        </div>
      )}

      {imageUrl && (
        <>
          <img
            src={imageUrl}
            alt={photo.fileName}
            className="w-full h-full object-cover"
          />

          {onDelete && (
            <button
              onClick={() => photo.id && onDelete(photo.id)}
              className={cn(
                'absolute top-2 right-2 p-2 rounded-lg',
                'bg-black/50 backdrop-blur-sm',
                'border border-white/10',
                'opacity-0 group-hover:opacity-100',
                'transition-opacity duration-200',
                'hover:bg-red-500/20 hover:border-red-500/50'
              )}
            >
              <Trash2 className="w-4 h-4 text-white" />
            </button>
          )}
        </>
      )}
    </div>
  );
}
