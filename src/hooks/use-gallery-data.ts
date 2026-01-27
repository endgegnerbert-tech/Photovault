/**
 * useGalleryData Hook - Local Photo Gallery Management with IPFS Cloud Sync
 * Photos are encrypted client-side and stored on IPFS
 * Only metadata (CID, nonce, etc.) is stored in Supabase
 */

'use client';

import { useState, useEffect, useCallback } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
    getAllPhotos,
    savePhoto,
    deletePhoto,
    getPhotoCount,
    type PhotoMetadata,
} from '@/lib/storage/local-db';
import { encryptFile, decryptFile, getUserKeyHash } from '@/lib/crypto';
import { uploadCIDMetadata, getStorageUsage } from '@/lib/supabase';
import { remoteStorage } from '@/lib/storage/remote-storage';
import { getDeviceId } from '@/lib/deviceId';
import { deletePhotoGlobally, type DeleteResult } from '@/lib/storage/photo-manager';

// HEIC conversion moved to Web Worker for non-blocking performance
// See src/lib/heic-converter.ts
import { convertHeicToJpeg } from '@/lib/heic-converter';

export function useGalleryData(secretKey: Uint8Array | null) {
    const queryClient = useQueryClient();
    const [userKeyHash, setUserKeyHash] = useState<string | null>(null);

    // Generate Key Hash when secretKey changes
    useEffect(() => {
        if (secretKey) {
            getUserKeyHash(secretKey).then(setUserKeyHash);
        } else {
            setUserKeyHash(null);
        }
    }, [secretKey]);

    // Query: Load all photos from local IndexedDB
    // WICHTIG: Query ist IMMER enabled - IndexedDB braucht kein secretKey
    // Decryption passiert separat wenn secretKey vorhanden ist
    const {
        data: photos = [],
        isLoading,
        error,
    } = useQuery({
        queryKey: ['photos'],
        queryFn: getAllPhotos,
        enabled: true, // Immer laden, unabhängig von secretKey
    });

    // Query: Photo count
    const { data: photoCount = 0 } = useQuery({
        queryKey: ['photoCount'],
        queryFn: getPhotoCount,
    });

    const [uploadProgress, setUploadProgress] = useState<number>(0);
    const [uploadingPhotos, setUploadingPhotos] = useState<Map<string, { file: File; objectUrl: string; progress: number }>>(new Map());

    // Mutation: Upload photo (convert HEIC -> encrypt -> IPFS -> Supabase metadata)
    // With OPTIMISTIC UPDATES: Photo appears immediately while uploading
    const uploadMutation = useMutation({
        mutationFn: async (file: File) => {
            if (!secretKey) throw new Error('No encryption key');
            if (!userKeyHash) throw new Error('userKeyHash not ready - bitte kurz warten');

            // Check Storage Limit (2GB)
            const LIMIT_2GB = 2 * 1024 * 1024 * 1024;
            const currentUsage = await getStorageUsage(userKeyHash);

            if (currentUsage + file.size > LIMIT_2GB) {
                alert("Speicherlimit von 2GB erreicht! Upgrade deinen Plan."); // Simple alert for MVP
                throw new Error("STORAGE_LIMIT_EXCEEDED");
            }

            // Generate temporary ID for optimistic update tracking
            const tempId = `temp_${Date.now()}_${Math.random().toString(36).slice(2)}`;

            console.log('[Upload] Starting upload:', file.name, 'tempId:', tempId);
            setUploadProgress(0);

            // OPTIMISTIC: Add photo to uploading state immediately (shows in UI)
            const objectUrl = URL.createObjectURL(file);
            setUploadingPhotos(prev => new Map(prev).set(tempId, {
                file,
                objectUrl,
                progress: 0
            }));

            try {
                // Step 0: Convert HEIC to JPEG if needed (iOS compatibility)
                // Uses Web Worker for non-blocking conversion on iPad/iPhone
                const conversionResult = await convertHeicToJpeg(file);
                const processedFile = conversionResult.file;

                if (conversionResult.converted) {
                    console.log('[Upload] HEIC converted:', {
                        originalSize: conversionResult.originalSize,
                        convertedSize: conversionResult.convertedSize
                    });
                }

                // Step 1: Encrypt file client-side
                const { encrypted, nonce } = await encryptFile(processedFile, secretKey);
                console.log('[Upload] Encrypted:', { size: encrypted.size });

                // Update progress for optimistic photo
                setUploadingPhotos(prev => {
                    const updated = new Map(prev);
                    const entry = updated.get(tempId);
                    if (entry) updated.set(tempId, { ...entry, progress: 20 });
                    return updated;
                });

                // Step 2: Upload encrypted blob to IPFS -> returns real CID
                let cid: string;
                try {
                    cid = await remoteStorage.upload(encrypted, processedFile.name, (progress) => {
                        const totalProgress = 20 + (progress * 0.6); // 20-80%
                        setUploadProgress(totalProgress);
                        setUploadingPhotos(prev => {
                            const updated = new Map(prev);
                            const entry = updated.get(tempId);
                            if (entry) updated.set(tempId, { ...entry, progress: totalProgress });
                            return updated;
                        });
                    });
                    console.log('[Upload] IPFS CID:', cid);
                } catch (error) {
                    console.error('[Upload] IPFS failed:', error);
                    // Generate fallback local CID for offline-first
                    cid = `cid_${Date.now()}_${Math.random().toString(36).slice(2)}`;
                    console.log('[Upload] Using fallback CID:', cid);
                }

                // Update progress
                setUploadingPhotos(prev => {
                    const updated = new Map(prev);
                    const entry = updated.get(tempId);
                    if (entry) updated.set(tempId, { ...entry, progress: 85 });
                    return updated;
                });

                // Step 3: Save to local IndexedDB (for immediate access)
                const metadata: Omit<PhotoMetadata, 'id'> = {
                    cid,
                    nonce,
                    fileName: processedFile.name,
                    mimeType: processedFile.type,
                    fileSize: processedFile.size,
                    uploadedAt: new Date(),
                    encryptedBlob: encrypted, // Keep locally for fast access
                };

                try {
                    await savePhoto(metadata);
                    console.log('[Upload] Saved to IndexedDB:', cid);
                } catch (dbError) {
                    console.error('[Upload] IndexedDB save FAILED:', dbError);
                    throw dbError; // Fail the mutation - this is critical
                }

                // Step 4: Sync metadata to Supabase (CID only, no blob)
                const deviceId = getDeviceId();
                try {
                    await uploadCIDMetadata(
                        cid,
                        processedFile.size,
                        deviceId,
                        nonce,
                        processedFile.type,
                        userKeyHash // Jetzt garantiert nicht undefined
                    );
                    console.log('[Upload] Supabase synced:', cid);
                } catch (error) {
                    console.error('[Upload] Supabase sync failed (local + IPFS OK):', error);
                    // Don't throw - local + IPFS save succeeded
                }

                // OPTIMISTIC: Remove from uploading state (real photo now in IndexedDB)
                setUploadingPhotos(prev => {
                    const updated = new Map(prev);
                    const entry = updated.get(tempId);
                    if (entry) URL.revokeObjectURL(entry.objectUrl);
                    updated.delete(tempId);
                    return updated;
                });

                return metadata;
            } catch (error) {
                // OPTIMISTIC: Remove from uploading state on error
                setUploadingPhotos(prev => {
                    const updated = new Map(prev);
                    const entry = updated.get(tempId);
                    if (entry) URL.revokeObjectURL(entry.objectUrl);
                    updated.delete(tempId);
                    return updated;
                });
                throw error;
            }
        },
        onSuccess: () => {
            // Sofort Queries invalidieren für UI-Update
            queryClient.invalidateQueries({ queryKey: ['photos'] });
            queryClient.invalidateQueries({ queryKey: ['photoCount'] });
            console.log('[Upload] Complete - queries invalidated');
        },
        onError: (error) => {
            console.error('[Upload] Mutation failed:', error);
        },
    });

    // Mutation: Delete photo (globally across all storage layers)
    const deleteMutation = useMutation({
        mutationFn: async (photo: { id?: number; cid: string }): Promise<DeleteResult> => {
            console.log('[Delete] Starting global delete:', photo.cid);

            // Use global delete to remove from IndexedDB, Supabase, and IPFS
            const result = await deletePhotoGlobally(photo.cid, photo.id);

            if (result.errors.length > 0) {
                console.warn('[Delete] Some operations failed:', result.errors);
            }

            return result;
        },
        onSuccess: (result) => {
            queryClient.invalidateQueries({ queryKey: ['photos'] });
            queryClient.invalidateQueries({ queryKey: ['photoCount'] });
            console.log('[Delete] Complete:', {
                local: result.local,
                supabase: result.supabase,
                ipfs: result.ipfs
            });
        },
        onError: (error) => {
            console.error('[Delete] Mutation failed:', error);
        },
    });

    // Decrypt photo for display
    const decryptPhoto = useCallback(
        async (photo: PhotoMetadata): Promise<string | null> => {
            if (!secretKey || !photo.encryptedBlob) return null;

            const decrypted = await decryptFile(
                photo.encryptedBlob,
                photo.nonce,
                secretKey,
                photo.mimeType
            );

            if (!decrypted) return null;

            return URL.createObjectURL(decrypted);
        },
        [secretKey]
    );

    // Combine real photos with uploading (optimistic) photos for the UI
    const uploadingPhotosList = Array.from(uploadingPhotos.entries()).map(([tempId, data]) => ({
        id: -1, // Temporary ID
        cid: tempId,
        nonce: '',
        fileName: data.file.name,
        mimeType: data.file.type,
        fileSize: data.file.size,
        uploadedAt: new Date(),
        encryptedBlob: undefined,
        // Special fields for optimistic display
        isUploading: true,
        uploadProgress: data.progress,
        previewUrl: data.objectUrl,
    }));

    return {
        photos,
        photoCount,
        isLoading,
        error,
        uploadPhoto: uploadMutation.mutate,
        // Delete takes { id?: number, cid: string } - deletes from all storage layers
        deletePhoto: deleteMutation.mutate,
        isDeleting: deleteMutation.isPending,
        decryptPhoto,
        isUploading: uploadMutation.isPending,
        uploadProgress,
        userKeyHash,
        // Optimistic updates: photos currently uploading (show at top of gallery)
        uploadingPhotos: uploadingPhotosList,
    };
}
