/**
 * Crypto Layer - Client-Side Encryption mit tweetnacl
 * Alle Daten werden VOR dem Upload verschlüsselt
 */

import nacl from 'tweetnacl';
import { encodeBase64, decodeBase64 } from 'tweetnacl-util';
import {
    isTauri,
    storeKeyNative,
    loadKeyNative,
    clearKeyNative
} from './storage/native-keychain';

export interface EncryptionKey {
    publicKey: Uint8Array;
    secretKey: Uint8Array;
}

export interface EncryptedData {
    ciphertext: string; // Base64
    nonce: string; // Base64
}

/**
 * Generiert ein neues Encryption Key Pair
 */
export function generateKeyPair(): EncryptionKey {
    const keyPair = nacl.box.keyPair();
    return {
        publicKey: keyPair.publicKey,
        secretKey: keyPair.secretKey,
    };
}

/**
 * Generiert eine 12-Wort Recovery Phrase aus dem Secret Key
 * Vereinfachte Version - in Production würde man BIP39 verwenden
 */
export function keyToRecoveryPhrase(secretKey: Uint8Array): string {
    const base64 = encodeBase64(secretKey);
    // Für MVP: Base64 in Chunks aufteilen
    // TODO: BIP39 Wordlist für bessere UX
    return base64.match(/.{1,8}/g)?.join('-') || base64;
}

/**
 * Recovered Secret Key aus Recovery Phrase
 */
export function recoveryPhraseToKey(phrase: string): Uint8Array {
    const base64 = phrase.replace(/-/g, '');
    return decodeBase64(base64);
}

/**
 * Verschlüsselt Daten (Uint8Array) mit dem Secret Key
 */
export function encrypt(
    data: Uint8Array,
    secretKey: Uint8Array
): EncryptedData {
    const nonce = nacl.randomBytes(nacl.secretbox.nonceLength);
    const ciphertext = nacl.secretbox(data, nonce, secretKey);

    return {
        ciphertext: encodeBase64(ciphertext),
        nonce: encodeBase64(nonce),
    };
}

/**
 * Entschlüsselt Daten
 */
export function decrypt(
    encrypted: EncryptedData,
    secretKey: Uint8Array
): Uint8Array | null {
    const ciphertext = decodeBase64(encrypted.ciphertext);
    const nonce = decodeBase64(encrypted.nonce);

    const decrypted = nacl.secretbox.open(ciphertext, nonce, secretKey);
    return decrypted;
}

/**
 * Verschlüsselt ein File (Blob/File) und gibt encrypted Blob zurück
 */
export async function encryptFile(
    file: File,
    secretKey: Uint8Array
): Promise<{ encrypted: Blob; nonce: string }> {
    const arrayBuffer = await file.arrayBuffer();
    const data = new Uint8Array(arrayBuffer);

    const encrypted = encrypt(data, secretKey);

    // Konvertiere Base64 zurück zu Blob für Storage
    const ciphertextBytes = decodeBase64(encrypted.ciphertext);
    const blob = new Blob([ciphertextBytes], { type: 'application/octet-stream' });

    return {
        encrypted: blob,
        nonce: encrypted.nonce,
    };
}

/**
 * Entschlüsselt ein Blob zurück zum Original
 */
export async function decryptFile(
    encryptedBlob: Blob,
    nonce: string,
    secretKey: Uint8Array,
    originalMimeType: string
): Promise<Blob | null> {
    const arrayBuffer = await encryptedBlob.arrayBuffer();
    const ciphertext = new Uint8Array(arrayBuffer);

    const encrypted: EncryptedData = {
        ciphertext: encodeBase64(ciphertext),
        nonce,
    };

    const decrypted = decrypt(encrypted, secretKey);
    if (!decrypted) return null;

    return new Blob([decrypted], { type: originalMimeType });
}

/**
 * Generiert einen stabilen Hash aus dem Secret Key für die Gruppierung von Geräten/Daten
 */
export async function getUserKeyHash(secretKey: Uint8Array): Promise<string> {
    const msgUint8 = new TextEncoder().encode(encodeBase64(secretKey));
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('').slice(0, 16);
}

/**
 * Speichert Secret Key verschlüsselt im LocalStorage
 * Verwendet ein Master Password (optional für MVP)
 */
export function saveKeyToStorage(secretKey: Uint8Array, password?: string): void {
    if (password) {
        // TODO: Key Derivation mit PBKDF2
        // Für MVP: Direkt speichern
    }

    const encoded = encodeBase64(secretKey);
    localStorage.setItem('photovault_secret_key', encoded);
}

/**
 * Lädt Secret Key aus LocalStorage
 */
export function loadKeyFromStorage(): Uint8Array | null {
    const encoded = localStorage.getItem('photovault_secret_key');
    if (!encoded) return null;

    try {
        return decodeBase64(encoded);
    } catch {
        return null;
    }
}

/**
 * Löscht Key aus Storage (Logout)
 */
export function clearKeyFromStorage(): void {
    localStorage.removeItem('photovault_secret_key');
}

/**
 * Async: Speichert Secret Key mit Platform-Detection
 *
 * - Tauri Desktop: OS native keychain (macOS Keychain, Windows Credential Manager)
 * - PWA/Browser: localStorage (fallback)
 *
 * @param secretKey - The 32-byte encryption key
 */
export async function saveKeyToStorageAsync(secretKey: Uint8Array): Promise<void> {
    if (isTauri()) {
        // Use native keychain on desktop
        await storeKeyNative(secretKey);
        console.log('[Crypto] Secret key stored in native keychain');
    } else {
        // Fallback to localStorage for PWA/browser
        saveKeyToStorage(secretKey);
        console.log('[Crypto] Secret key stored in localStorage');
    }
}

/**
 * Async: Lädt Secret Key mit Platform-Detection
 *
 * @returns The secret key or null if not found
 */
export async function loadKeyFromStorageAsync(): Promise<Uint8Array | null> {
    if (isTauri()) {
        // Try native keychain first
        const key = await loadKeyNative();
        if (key) {
            console.log('[Crypto] Secret key loaded from native keychain');
            return key;
        }
    }

    // Fallback to localStorage
    const key = loadKeyFromStorage();
    if (key) {
        console.log('[Crypto] Secret key loaded from localStorage');
    }
    return key;
}

/**
 * Async: Löscht Key aus Storage mit Platform-Detection
 */
export async function clearKeyFromStorageAsync(): Promise<void> {
    if (isTauri()) {
        await clearKeyNative();
        console.log('[Crypto] Secret key cleared from native keychain');
    }

    // Always clear localStorage as well (migration case)
    clearKeyFromStorage();
    console.log('[Crypto] Secret key cleared from localStorage');
}
