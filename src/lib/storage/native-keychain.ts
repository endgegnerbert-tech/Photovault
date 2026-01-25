/**
 * Native Keychain Integration for Tauri
 *
 * Provides TypeScript bindings for OS-native keychain storage.
 * Falls back to localStorage when not running in Tauri.
 */

import { invoke } from '@tauri-apps/api/core';

/**
 * Detect if we're running in a Tauri environment
 */
export function isTauri(): boolean {
  // @ts-ignore - __TAURI__ is injected by Tauri at runtime
  return typeof window !== 'undefined' && window.__TAURI__ !== undefined;
}

/**
 * Store encryption key in OS native keychain
 *
 * Security: Uses OS-level encryption (Keychain on macOS, Credential Manager on Windows)
 *
 * @param key - The encryption key as Uint8Array (32 bytes)
 * @throws Error if not running in Tauri or if keychain access fails
 */
export async function storeKeyNative(key: Uint8Array): Promise<void> {
  if (!isTauri()) {
    throw new Error('Native keychain is only available in Tauri desktop app');
  }

  // Encode key as base64 for storage
  const encoded = btoa(String.fromCharCode.apply(null, Array.from(key)));

  try {
    await invoke<void>('store_secret_key', { key: encoded });
  } catch (error) {
    console.error('[Keychain] Failed to store key:', error);
    throw new Error(`Failed to store key in native keychain: ${error}`);
  }
}

/**
 * Load encryption key from OS native keychain
 *
 * @returns The encryption key as Uint8Array, or null if no key exists
 * @throws Error if keychain access fails (but not if key doesn't exist)
 */
export async function loadKeyNative(): Promise<Uint8Array | null> {
  if (!isTauri()) {
    return null;
  }

  try {
    const encoded = await invoke<string | null>('load_secret_key');

    if (!encoded) {
      return null;
    }

    // Decode from base64
    const decoded = atob(encoded);
    return Uint8Array.from(decoded, c => c.charCodeAt(0));
  } catch (error) {
    console.error('[Keychain] Failed to load key:', error);
    throw new Error(`Failed to load key from native keychain: ${error}`);
  }
}

/**
 * Remove encryption key from OS native keychain
 *
 * Safe to call even if no key exists
 *
 * @throws Error if keychain access fails
 */
export async function clearKeyNative(): Promise<void> {
  if (!isTauri()) {
    return;
  }

  try {
    await invoke<void>('clear_secret_key');
  } catch (error) {
    console.error('[Keychain] Failed to clear key:', error);
    throw new Error(`Failed to clear key from native keychain: ${error}`);
  }
}

/**
 * Get persistent device ID from native storage
 *
 * Device ID is stored in app data directory and survives localStorage clears
 *
 * @returns UUID string
 */
export async function getDeviceIdNative(): Promise<string> {
  if (!isTauri()) {
    throw new Error('Native device ID is only available in Tauri desktop app');
  }

  try {
    return await invoke<string>('get_device_id');
  } catch (error) {
    console.error('[Device] Failed to get device ID:', error);
    throw new Error(`Failed to get native device ID: ${error}`);
  }
}

/**
 * Clear device ID (for testing/reset purposes)
 */
export async function clearDeviceIdNative(): Promise<void> {
  if (!isTauri()) {
    return;
  }

  try {
    await invoke<void>('clear_device_id');
  } catch (error) {
    console.error('[Device] Failed to clear device ID:', error);
    throw new Error(`Failed to clear native device ID: ${error}`);
  }
}
