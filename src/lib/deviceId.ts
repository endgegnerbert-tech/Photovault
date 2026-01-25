import { isTauri, getDeviceIdNative } from './storage/native-keychain'

const DEVICE_ID_KEY = 'photovault_device_id'
const DEVICE_NAME_KEY = 'photovault_device_name'
const IDB_STORE_NAME = 'photovault_device_store'

/**
 * iOS PWA Persistence Helper
 * iOS Safari in standalone mode (Add to Home Screen) can sometimes clear localStorage.
 * This uses IndexedDB as a backup, which is more persistent on iOS.
 */
async function getFromIndexedDB(key: string): Promise<string | null> {
  return new Promise((resolve) => {
    try {
      const request = indexedDB.open(IDB_STORE_NAME, 1)

      request.onupgradeneeded = () => {
        const db = request.result
        if (!db.objectStoreNames.contains('keyval')) {
          db.createObjectStore('keyval')
        }
      }

      request.onsuccess = () => {
        try {
          const db = request.result
          const tx = db.transaction('keyval', 'readonly')
          const store = tx.objectStore('keyval')
          const getReq = store.get(key)

          getReq.onsuccess = () => resolve(getReq.result || null)
          getReq.onerror = () => resolve(null)
        } catch {
          resolve(null)
        }
      }

      request.onerror = () => resolve(null)
    } catch {
      resolve(null)
    }
  })
}

async function saveToIndexedDB(key: string, value: string): Promise<void> {
  return new Promise((resolve) => {
    try {
      const request = indexedDB.open(IDB_STORE_NAME, 1)

      request.onupgradeneeded = () => {
        const db = request.result
        if (!db.objectStoreNames.contains('keyval')) {
          db.createObjectStore('keyval')
        }
      }

      request.onsuccess = () => {
        try {
          const db = request.result
          const tx = db.transaction('keyval', 'readwrite')
          const store = tx.objectStore('keyval')
          store.put(value, key)
          tx.oncomplete = () => resolve()
          tx.onerror = () => resolve()
        } catch {
          resolve()
        }
      }

      request.onerror = () => resolve()
    } catch {
      resolve()
    }
  })
}

// Get or create a unique device ID (with iOS PWA persistence)
export function getDeviceId(): string {
  if (typeof window === 'undefined') {
    return 'server'
  }

  // Try localStorage first (fast path)
  let deviceId = localStorage.getItem(DEVICE_ID_KEY)

  if (!deviceId) {
    // Check sessionStorage as fallback (survives page reloads)
    deviceId = sessionStorage.getItem(DEVICE_ID_KEY)
  }

  if (!deviceId) {
    // Generate new ID
    deviceId = crypto.randomUUID()
    console.log('[DeviceID] Generated new device ID:', deviceId)
  }

  // Always save to all storage layers for redundancy
  try {
    localStorage.setItem(DEVICE_ID_KEY, deviceId)
    sessionStorage.setItem(DEVICE_ID_KEY, deviceId)
  } catch (e) {
    console.warn('[DeviceID] Storage save failed:', e)
  }

  // Async save to IndexedDB for iOS PWA persistence
  saveToIndexedDB(DEVICE_ID_KEY, deviceId).catch(() => {})

  return deviceId
}

/**
 * Async version that also checks IndexedDB (for iOS PWA recovery)
 * and uses native storage on Tauri desktop
 *
 * Call this on app startup to restore device ID if localStorage was cleared
 */
export async function ensureDeviceIdPersistence(): Promise<string> {
  if (typeof window === 'undefined') {
    return 'server'
  }

  // For Tauri desktop: use native persistent storage
  if (isTauri()) {
    try {
      const deviceId = await getDeviceIdNative()
      console.log('[DeviceID] Using native device ID:', deviceId)

      // Also save to localStorage for consistency
      try {
        localStorage.setItem(DEVICE_ID_KEY, deviceId)
        sessionStorage.setItem(DEVICE_ID_KEY, deviceId)
      } catch (e) {
        console.warn('[DeviceID] Failed to sync to localStorage:', e)
      }

      return deviceId
    } catch (error) {
      console.error('[DeviceID] Native device ID failed, falling back to localStorage:', error)
      // Fall through to localStorage logic
    }
  }

  // PWA/Browser logic (original implementation)
  let deviceId = localStorage.getItem(DEVICE_ID_KEY)

  // If localStorage is empty, try to recover from IndexedDB
  if (!deviceId) {
    deviceId = await getFromIndexedDB(DEVICE_ID_KEY)

    if (deviceId) {
      console.log('[DeviceID] Recovered from IndexedDB:', deviceId)
      // Restore to localStorage and sessionStorage
      try {
        localStorage.setItem(DEVICE_ID_KEY, deviceId)
        sessionStorage.setItem(DEVICE_ID_KEY, deviceId)
      } catch (e) {
        console.warn('[DeviceID] Failed to restore to localStorage:', e)
      }
    }
  }

  // If still no ID, generate new one
  if (!deviceId) {
    deviceId = crypto.randomUUID()
    console.log('[DeviceID] Generated new device ID:', deviceId)

    try {
      localStorage.setItem(DEVICE_ID_KEY, deviceId)
      sessionStorage.setItem(DEVICE_ID_KEY, deviceId)
    } catch (e) {
      console.warn('[DeviceID] Storage save failed:', e)
    }

    await saveToIndexedDB(DEVICE_ID_KEY, deviceId)
  }

  return deviceId
}

// Get device type based on UserAgent
export function getDeviceType(): 'iphone' | 'ipad' | 'mac' | 'windows' | 'android' | 'linux' | 'unknown' {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return 'unknown'
  }

  const ua = navigator.userAgent.toLowerCase()

  if (ua.includes('iphone')) return 'iphone'
  if (ua.includes('ipad')) return 'ipad'
  if (ua.includes('macintosh') || ua.includes('mac os')) return 'mac'
  if (ua.includes('windows')) return 'windows'
  if (ua.includes('android')) return 'android'
  if (ua.includes('linux')) return 'linux'

  return 'unknown'
}

// Get a friendly device name
export function getDeviceName(): string {
  if (typeof window === 'undefined') {
    return 'Server'
  }

  // Check if user has set a custom name
  const customName = localStorage.getItem(DEVICE_NAME_KEY)
  if (customName) return customName

  // Generate default name based on device type
  const deviceType = getDeviceType()
  const typeNames: Record<string, string> = {
    'iphone': 'iPhone',
    'ipad': 'iPad',
    'mac': 'Mac',
    'windows': 'Windows PC',
    'android': 'Android',
    'linux': 'Linux PC',
    'unknown': 'Browser'
  }

  return typeNames[deviceType] || 'Unknown Device'
}

// Set a custom device name
export function setDeviceName(name: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(DEVICE_NAME_KEY, name)
  }
}

// Get device info summary
export function getDeviceInfo() {
  return {
    id: getDeviceId(),
    name: getDeviceName(),
    type: getDeviceType()
  }
}
