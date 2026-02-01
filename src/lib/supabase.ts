/**
 * Supabase Layer - Metadata-Only Storage
 * Supabase stores ONLY photo metadata and device info, NOT the actual content
 * Content is stored on IPFS (see ipfs.ts and remote-storage.ts)
 */

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Type definitions for our tables
export interface PhotoMetadata {
  id?: string
  cid: string              // IPFS Content Identifier (the actual photo is on IPFS)
  device_id: string        // Which device uploaded this
  file_size_bytes?: number // Original file size
  nonce?: string           // Encryption nonce (Base64)
  mime_type?: string       // Original MIME type
  user_key_hash?: string   // Hash of user's encryption key (for multi-device sync)
  uploaded_at?: string     // When it was uploaded
}

export interface Device {
  id?: string
  device_name: string
  device_type?: string
  user_key_hash?: string   // Links device to user's encryption key
  created_at?: string
}

/**
 * Upload photo metadata to Supabase (metadata only, NOT the actual photo)
 * The actual encrypted photo is stored on IPFS
 * Uses API proxy to avoid CORS issues on Safari/iOS
 */
export async function uploadCIDMetadata(
  cid: string,
  fileSize: number,
  deviceId: string,
  nonce?: string,
  mimeType?: string,
  userKeyHash?: string
) {
  console.log('[Supabase] Uploading metadata:', {
    cid,
    deviceId,
    mimeType,
    fileSize,
    hasUserKeyHash: !!userKeyHash,
  });

  // Try API proxy first (avoids CORS issues)
  try {
    const response = await fetch('/api/supabase/proxy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'uploadMetadata',
        cid,
        fileSize,
        deviceId,
        nonce,
        mimeType,
        userKeyHash,
      }),
    });

    const result = await response.json();
    if (result.success) {
      console.log('[Supabase] Metadata uploaded via proxy:', result.data?.[0]?.id);
      return result.data;
    }

    console.warn('[Supabase] Proxy failed, trying direct client:', result.error);
  } catch (err) {
    console.warn('[Supabase] Proxy error, trying direct client:', err);
  }

  // Fallback to direct client
  const { data, error } = await supabase
    .from('photos_metadata')
    .insert([{
      cid,
      file_size_bytes: fileSize,
      device_id: deviceId,
      nonce,
      mime_type: mimeType,
      user_key_hash: userKeyHash
    }])
    .select()

  if (error) {
    console.error('[Supabase] Metadata Upload Error:', {
      code: error.code,
      message: error.message,
      details: error.details,
      hint: error.hint,
    });
    throw error
  }

  console.log('[Supabase] Metadata uploaded successfully:', data?.[0]?.id);
  return data
}

/**
 * Load all photo CIDs from Supabase for a user
 * Photos are identified by CID and can be fetched from IPFS
 * Uses API proxy to avoid CORS issues on Safari/iOS
 */
export async function loadCIDsFromSupabase(_currentDeviceId: string, userKeyHash: string) {
  if (!userKeyHash) {
    console.error('loadCIDsFromSupabase: userKeyHash is required');
    return [];
  }

  // Try API proxy first (avoids CORS issues)
  try {
    const response = await fetch('/api/supabase/proxy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'loadCIDs',
        userKeyHash,
      }),
    });

    const result = await response.json();
    if (result.success) {
      console.log('[Supabase] CIDs loaded via proxy:', result.data?.length);
      return result.data || [];
    }

    console.warn('[Supabase] Proxy failed, trying direct client:', result.error);
  } catch (err) {
    console.warn('[Supabase] Proxy error, trying direct client:', err);
  }

  // Fallback to direct client
  const { data, error } = await supabase
    .from('photos_metadata')
    .select('cid, device_id, uploaded_at, file_size_bytes, nonce, mime_type')
    .eq('user_key_hash', userKeyHash)
    .order('uploaded_at', { ascending: false })

  if (error) {
    console.error('Supabase Load Error:', error)
    throw error
  }
  return data || []
}

/**
 * Check if CID already exists in Supabase for THIS user
 */
export async function cidExistsInSupabase(cid: string, userKeyHash: string): Promise<boolean> {
  if (!userKeyHash) return false;

  const { data, error } = await supabase
    .from('photos_metadata')
    .select('id')
    .eq('cid', cid)
    .eq('user_key_hash', userKeyHash)
    .single()

  if (error && error.code !== 'PGRST116') {
    // PGRST116 = no rows returned, which is expected
    console.error('Supabase Check Error:', error)
  }
  return !!data
}

/**
 * Delete photo metadata from Supabase
 * Uses API proxy to avoid CORS issues on Safari/iOS
 */
export async function deletePhotoMetadata(cid: string): Promise<void> {
  // Try API proxy first (avoids CORS issues)
  try {
    const response = await fetch('/api/supabase/proxy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'deleteMetadata',
        cid,
      }),
    });

    const result = await response.json();
    if (result.success) {
      console.log('[Supabase] Metadata deleted via proxy');
      return;
    }

    console.warn('[Supabase] Proxy failed, trying direct client:', result.error);
  } catch (err) {
    console.warn('[Supabase] Proxy error, trying direct client:', err);
  }

  // Fallback to direct client
  const { error } = await supabase
    .from('photos_metadata')
    .delete()
    .eq('cid', cid)

  if (error) {
    console.error('Supabase Delete Error:', error)
    throw error
  }
}

/**
 * Register or update a device
 * IMPORTANT: userKeyHash and userId are required for RLS/BetterAuth compliance
 * Uses API proxy to avoid CORS issues on Safari/iOS
 */
export async function registerDevice(
  id: string,
  deviceName: string,
  deviceType?: string,
  userKeyHash?: string,
  userId?: string
) {
  // Validate userKeyHash - required for RLS
  if (!userKeyHash || userKeyHash.length === 0) {
    console.error('registerDevice: userKeyHash is required');
    throw new Error('userKeyHash is required for device registration');
  }

  // Try API proxy first (avoids CORS issues)
  try {
    const response = await fetch('/api/supabase/proxy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'registerDevice',
        id,
        deviceName,
        deviceType,
        userKeyHash,
        userId,
      }),
    });

    const result = await response.json();
    if (result.success) {
      console.log('[Supabase] Device registered via proxy:', result.updated ? 'updated' : 'inserted');
      return true;
    }

    console.warn('[Supabase] Proxy failed, trying direct client:', result.error);
  } catch (err) {
    console.warn('[Supabase] Proxy error, trying direct client:', err);
  }

  // Fallback to direct client
  const devicePayload = {
    device_name: deviceName,
    device_type: deviceType,
    user_key_hash: userKeyHash,
    user_id: userId
  };

  const { data: existingDevice } = await supabase
    .from('devices')
    .select('id')
    .eq('user_id', userId)
    .eq('device_name', deviceName)
    .eq('device_type', deviceType || '')
    .single();

  if (existingDevice) {
    const { error: updateError } = await supabase
      .from('devices')
      .update({
        device_name: deviceName,
        device_type: deviceType,
        user_key_hash: userKeyHash,
      })
      .eq('id', existingDevice.id);

    if (updateError) {
      console.error('[Supabase] Device Update Error:', updateError);
      throw updateError;
    }
    console.log('[Supabase] Device updated:', existingDevice.id);
    return true;
  }

  const { error } = await supabase
    .from('devices')
    .insert({
      id,
      ...devicePayload
    });

  if (error) {
    if (error.message?.includes('Device limit exceeded')) {
      throw new Error('DEVICE_LIMIT_EXCEEDED');
    }
    console.error('[Supabase] Device Insert Error:', error);
    throw error;
  }
  console.log('[Supabase] Device inserted:', id);
  return true;
}

/**
 * Get all devices for a user (by user_key_hash)
 */
export async function getDevicesForUser(userKeyHash: string): Promise<Device[]> {
  const { data, error } = await supabase
    .from('devices')
    .select('*')
    .eq('user_key_hash', userKeyHash)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Supabase Get Devices Error:', error)
    throw error
  }
  return data || []
}

/**
 * Get photo metadata by CID
 */
export async function getPhotoMetadataByCID(cid: string): Promise<PhotoMetadata | null> {
  const { data, error } = await supabase
    .from('photos_metadata')
    .select('*')
    .eq('cid', cid)
    .single()

  if (error && error.code !== 'PGRST116') {
    console.error('Supabase Get Photo Error:', error)
    throw error
  }

  return data
}

/**
 * Get total storage usage for a user in bytes
 */
export async function getStorageUsage(userKeyHash: string): Promise<number> {
  if (!userKeyHash) return 0;

  // Try API proxy first
  try {
    const response = await fetch('/api/supabase/proxy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'getStorageUsage',
        userKeyHash,
      }),
    });

    const result = await response.json();
    if (result.success) {
      return result.data || 0;
    }
  } catch (err) {
    console.warn('[Supabase] Proxy error for storage usage, trying direct client:', err);
  }

  // Fallback to direct client
  const { data, error } = await supabase
    .from('photos_metadata')
    .select('file_size_bytes')
    .eq('user_key_hash', userKeyHash);

  if (error) {
    console.error('Supabase Storage Usage Error:', error);
    return 0;
  }

  return data?.reduce((acc, p) => acc + (p.file_size_bytes || 0), 0) || 0;
}

// ============================================================
// BURNER LINKS OPERATIONS
// For Stealth Drop anonymous uploads
// ============================================================

export interface BurnerLink {
  id: string;
  slug: string;
  public_key: string;
  theme: string;
  content_slug: string;
  creator_user_id: string;
  creator_vault_key_hash: string;
  created_at: string;
  expires_at: string | null;
  max_uploads: number | null;
  upload_count: number;
  is_active: boolean;
}

export interface StealthUpload {
  id: string;
  burner_link_id: string;
  cid: string;
  ephemeral_public_key: string;
  iv: string;
  file_size_bytes: number | null;
  mime_type: string | null;
  uploaded_at: string;
}

/**
 * Get all burner links for a user
 */
export async function getBurnerLinks(userId: string): Promise<BurnerLink[]> {
  const { data, error } = await supabase
    .from('burner_links')
    .select('*')
    .eq('creator_user_id', userId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('[Supabase] Get Burner Links Error:', error);
    throw error;
  }

  return data || [];
}

/**
 * Get stealth uploads for a burner link
 */
export async function getStealthUploads(burnerLinkId: string): Promise<StealthUpload[]> {
  const { data, error } = await supabase
    .from('stealth_uploads')
    .select('*')
    .eq('burner_link_id', burnerLinkId)
    .order('uploaded_at', { ascending: false });

  if (error) {
    console.error('[Supabase] Get Stealth Uploads Error:', error);
    throw error;
  }

  return data || [];
}

/**
 * Get all stealth uploads for a user's vault (by vault_key_hash)
 */
export async function getAllStealthUploadsForVault(vaultKeyHash: string): Promise<(StealthUpload & { burner_link: BurnerLink })[]> {
  const { data, error } = await supabase
    .from('stealth_uploads')
    .select(`
      *,
      burner_link:burner_links!inner(*)
    `)
    .eq('burner_links.creator_vault_key_hash', vaultKeyHash)
    .order('uploaded_at', { ascending: false });

  if (error) {
    console.error('[Supabase] Get All Stealth Uploads Error:', error);
    throw error;
  }

  return data || [];
}

/**
 * Deactivate a burner link
 */
export async function deactivateBurnerLink(slug: string, userId: string): Promise<void> {
  const { error } = await supabase
    .from('burner_links')
    .update({ is_active: false })
    .eq('slug', slug)
    .eq('creator_user_id', userId);

  if (error) {
    console.error('[Supabase] Deactivate Burner Link Error:', error);
    throw error;
  }
}

/**
 * Delete a stealth upload
 */
export async function deleteStealthUpload(uploadId: string): Promise<void> {
  const { error } = await supabase
    .from('stealth_uploads')
    .delete()
    .eq('id', uploadId);

  if (error) {
    console.error('[Supabase] Delete Stealth Upload Error:', error);
    throw error;
  }
}

/**
 * Get total count of stealth uploads for a user
 */
export async function getStealthUploadCount(vaultKeyHash: string): Promise<number> {
  const { count, error } = await supabase
    .from('stealth_uploads')
    .select('id', { count: 'exact', head: true })
    .eq('burner_links.creator_vault_key_hash', vaultKeyHash);

  if (error) {
    console.error('[Supabase] Get Stealth Upload Count Error:', error);
    return 0;
  }

  return count || 0;
}
