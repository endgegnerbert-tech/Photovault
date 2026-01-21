/**
 * Local Database - Dexie.js Wrapper für Photo Metadata
 * Speichert CIDs und Metadaten lokal (offline-first)
 */

import Dexie, { Table } from 'dexie';

export interface PhotoMetadata {
    id?: number; // Auto-increment
    cid: string; // IPFS Content ID
    nonce: string; // Encryption Nonce (Base64)
    fileName: string;
    mimeType: string;
    fileSize: number;
    width?: number;
    height?: number;
    uploadedAt: Date;
    encryptedBlob?: Blob; // Optional: Lokaler Cache
}

export class PhotoVaultDB extends Dexie {
    photos!: Table<PhotoMetadata, number>;

    constructor() {
        super('PhotoVaultDB');

        this.version(1).stores({
            photos: '++id, cid, uploadedAt',
        });
    }
}

// Singleton Instance
export const db = new PhotoVaultDB();

/**
 * Speichert Photo Metadata
 */
export async function savePhoto(photo: Omit<PhotoMetadata, 'id'>): Promise<number> {
    return await db.photos.add(photo);
}

/**
 * Lädt alle Photos (sortiert nach Datum)
 */
export async function getAllPhotos(): Promise<PhotoMetadata[]> {
    return await db.photos.orderBy('uploadedAt').reverse().toArray();
}

/**
 * Lädt ein Photo by CID
 */
export async function getPhotoByCID(cid: string): Promise<PhotoMetadata | undefined> {
    return await db.photos.where('cid').equals(cid).first();
}

/**
 * Löscht ein Photo
 */
export async function deletePhoto(id: number): Promise<void> {
    await db.photos.delete(id);
}

/**
 * Löscht alle Photos (Reset)
 */
export async function clearAllPhotos(): Promise<void> {
    await db.photos.clear();
}

/**
 * Zählt Anzahl der Photos
 */
export async function getPhotoCount(): Promise<number> {
    return await db.photos.count();
}
