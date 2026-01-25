/**
 * Photo Manager - Unified Photo Operations Across All Storage Layers
 *
 * Coordinates operations between:
 * - Local IndexedDB (encrypted blob cache)
 * - Supabase (metadata sync)
 * - IPFS/Pinata (encrypted content storage)
 *
 * This module provides high-level functions that ensure consistency
 * across all storage layers.
 */

import { deletePhoto, type PhotoMetadata } from './local-db';
import { deletePhotoMetadata } from '@/lib/supabase';
import { unpinFromIPFS, isValidCID } from '@/lib/ipfs';

export interface DeleteResult {
    local: boolean;
    supabase: boolean;
    ipfs: boolean;
    errors: string[];
}

/**
 * Delete a photo from ALL storage layers
 *
 * Order of operations:
 * 1. Delete from local IndexedDB (immediate UI impact)
 * 2. Delete metadata from Supabase (cross-device sync)
 * 3. Unpin from IPFS/Pinata (optional cleanup - doesn't delete content)
 *
 * Note: IPFS content is immutable. Unpinning only removes it from our pin,
 * but it may still be accessible if pinned elsewhere.
 *
 * @param localId - The IndexedDB ID of the photo (optional)
 * @param cid - The IPFS Content Identifier
 * @returns Object with success status for each layer
 */
export async function deletePhotoGlobally(
    cid: string,
    localId?: number
): Promise<DeleteResult> {
    const result: DeleteResult = {
        local: false,
        supabase: false,
        ipfs: false,
        errors: []
    };

    console.log('[PhotoManager] Starting global delete for CID:', cid);

    // Step 1: Delete from local IndexedDB
    if (localId !== undefined && localId > 0) {
        try {
            await deletePhoto(localId);
            result.local = true;
            console.log('[PhotoManager] Deleted from IndexedDB:', localId);
        } catch (error) {
            const message = `IndexedDB delete failed: ${error}`;
            result.errors.push(message);
            console.error('[PhotoManager]', message);
        }
    } else {
        console.log('[PhotoManager] No local ID provided, skipping IndexedDB delete');
        result.local = true; // Consider success if no local ID
    }

    // Step 2: Delete metadata from Supabase
    try {
        await deletePhotoMetadata(cid);
        result.supabase = true;
        console.log('[PhotoManager] Deleted from Supabase:', cid);
    } catch (error) {
        const message = `Supabase delete failed: ${error}`;
        result.errors.push(message);
        console.error('[PhotoManager]', message);
    }

    // Step 3: Unpin from IPFS/Pinata (optional, non-critical)
    // Skip for temporary/mock CIDs
    if (isValidCID(cid)) {
        try {
            await unpinFromIPFS(cid);
            result.ipfs = true;
            console.log('[PhotoManager] Unpinned from IPFS:', cid);
        } catch (error) {
            // Don't add to errors - unpin failure is non-critical
            console.warn('[PhotoManager] IPFS unpin failed (non-critical):', error);
            result.ipfs = false;
        }
    } else {
        console.log('[PhotoManager] Skipping IPFS unpin for mock/temp CID:', cid);
        result.ipfs = true; // Consider success for non-IPFS CIDs
    }

    console.log('[PhotoManager] Global delete complete:', result);
    return result;
}

/**
 * Delete multiple photos in batch
 *
 * More efficient than calling deletePhotoGlobally for each photo
 * because it can batch Supabase operations.
 *
 * @param photos - Array of { cid, localId } objects
 * @returns Array of results for each photo
 */
export async function deletePhotosGlobally(
    photos: Array<{ cid: string; localId?: number }>
): Promise<DeleteResult[]> {
    console.log('[PhotoManager] Starting batch delete for', photos.length, 'photos');

    // Process in parallel with concurrency limit
    const concurrencyLimit = 5;
    const results: DeleteResult[] = [];

    for (let i = 0; i < photos.length; i += concurrencyLimit) {
        const batch = photos.slice(i, i + concurrencyLimit);
        const batchResults = await Promise.all(
            batch.map(p => deletePhotoGlobally(p.cid, p.localId))
        );
        results.push(...batchResults);
    }

    const successCount = results.filter(r => r.local && r.supabase).length;
    console.log('[PhotoManager] Batch delete complete:', successCount, '/', photos.length, 'fully successful');

    return results;
}

/**
 * Purge ALL photos for the current user
 *
 * WARNING: This is destructive and cannot be undone!
 * Use with extreme caution.
 *
 * @param photos - All photos to delete
 * @returns Summary of deletion results
 */
export async function purgeAllPhotos(
    photos: PhotoMetadata[]
): Promise<{
    total: number;
    successful: number;
    failed: number;
    errors: string[];
}> {
    console.warn('[PhotoManager] PURGING ALL PHOTOS:', photos.length);

    const toDelete = photos.map(p => ({
        cid: p.cid,
        localId: p.id
    }));

    const results = await deletePhotosGlobally(toDelete);

    const successful = results.filter(r => r.local && r.supabase).length;
    const failed = results.length - successful;
    const allErrors = results.flatMap(r => r.errors);

    return {
        total: photos.length,
        successful,
        failed,
        errors: allErrors
    };
}

/**
 * Sync check: Find orphaned entries
 *
 * Identifies photos that exist in one storage layer but not others.
 * Useful for debugging sync issues.
 */
export interface OrphanReport {
    localOnly: PhotoMetadata[];      // In IndexedDB but not Supabase
    supabaseOnly: string[];          // CIDs in Supabase but not local
    unpinnedCIDs: string[];          // Valid CIDs that aren't pinned
}

/**
 * Check for storage inconsistencies
 * (placeholder for future implementation)
 */
export async function findOrphanedPhotos(
    _localPhotos: PhotoMetadata[],
    _supabaseCIDs: string[]
): Promise<OrphanReport> {
    // TODO: Implement orphan detection
    return {
        localOnly: [],
        supabaseOnly: [],
        unpinnedCIDs: []
    };
}
