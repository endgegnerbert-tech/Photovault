/**
 * Constants & Configuration
 */

// Neon Theme Colors (2026)
export const THEME = {
    bg: '#0a0a0a',
    surface: '#121212',
    primary: '#00ff88',
    primaryGlow: '0 0 15px rgba(0, 255, 136, 0.5)',
    secondary: '#bd00ff',
    textPrimary: '#ffffff',
    textMuted: '#a1a1aa',
} as const;

// File Upload Limits
export const LIMITS = {
    FREE_TIER: {
        maxPhotos: 50,
        maxFileSize: 50 * 1024 * 1024, // 50MB
    },
    BACKUP_PLUS: {
        maxPhotos: Infinity,
        maxFileSize: 200 * 1024 * 1024, // 200MB
    },
} as const;

// Supported MIME Types
export const SUPPORTED_MIME_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
    'image/heic',
    'image/heif',
] as const;

// LocalStorage Keys
export const STORAGE_KEYS = {
    SECRET_KEY: 'photovault_secret_key',
    RECOVERY_PHRASE: 'photovault_recovery_phrase',
    USER_TIER: 'photovault_user_tier',
} as const;
