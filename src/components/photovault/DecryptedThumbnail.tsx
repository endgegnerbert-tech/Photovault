"use client";

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { CustomIcon } from "@/components/ui/custom-icon";
import { decryptFile } from "@/lib/crypto";
import type { PhotoMetadata } from "@/lib/storage/local-db";

interface DecryptedThumbnailProps {
  photo: PhotoMetadata;
  secretKey: Uint8Array | null;
}

export function DecryptedThumbnail({ photo, secretKey }: DecryptedThumbnailProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [isDecrypting, setIsDecrypting] = useState(false);

  useEffect(() => {
    if (!secretKey || !photo.encryptedBlob || imageUrl) return;

    const decrypt = async () => {
      setIsDecrypting(true);
      try {
        const decrypted = await decryptFile(
          photo.encryptedBlob,
          photo.nonce,
          secretKey,
          photo.mimeType
        );

        if (decrypted) {
          const url = URL.createObjectURL(decrypted);
          setImageUrl(url);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Failed to decrypt photo:", photo.cid, err);
        setError(true);
      } finally {
        setIsDecrypting(false);
      }
    };

    decrypt();

    return () => {
      if (imageUrl) URL.revokeObjectURL(imageUrl);
    };
  }, [photo, secretKey, imageUrl]);

  if (error) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-red-50 text-red-500 p-2 text-center">
        <CustomIcon name="lock" size={24} className="mb-1 opacity-50" />
        <span className="text-[10px]">Fehler</span>
      </div>
    );
  }

  if (isDecrypting || !imageUrl) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
      </div>
    );
  }

  return (
    <img
      src={imageUrl}
      alt=""
      className="w-full h-full object-cover animate-in fade-in duration-500"
      loading="lazy"
    />
  );
}
