# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
```

### Testing (Playwright)

```bash
npx playwright test              # Run all tests
npx playwright test --ui         # Interactive UI mode
npx playwright test user-flow    # Run specific test file
```

Tests expect the dev server at port 3001. Start with `npm run dev -- -p 3001` before running tests.

## Architecture Overview

PhotoVault is an **encrypted photo backup app** with a mobile-first iOS-style UI. The core principle is **client-side encryption first** - all photos are encrypted locally before any upload.

### Data Flow

```
User Photo → Encrypt (tweetnacl) → Store Local (IndexedDB) → Sync CID to Cloud (Supabase)
```

1. **Encryption Layer** (`src/lib/crypto.ts`): Uses tweetnacl for symmetric encryption. Keys stored in localStorage, recoverable via 12-word phrase.

2. **Local Storage** (`src/lib/storage/local-db.ts`): Dexie.js wrapper for IndexedDB. Stores encrypted photo blobs + metadata offline-first.

3. **Remote Storage** (`src/lib/storage/remote-storage.ts`): Abstraction layer for cloud blob storage. Currently uses Supabase Storage, designed to swap to IPFS/Web3.Storage.

4. **Cloud Sync** (`src/lib/supabase.ts`): CID metadata + encrypted blobs sync to Supabase. Enables multi-device photo list sync.

5. **Realtime** (`src/hooks/useRealtimeSync.ts`): Supabase Realtime subscription for live updates when photos are added from other devices.

### Key Hooks

- `useEncryption`: Key generation, storage, recovery phrase management
- `useGalleryData`: Photo CRUD with encryption + automatic Supabase sync
- `useRealtimeSync`: Cross-device realtime photo sync

### Main UI Components (src/components/photovault/)

- `PhotoVaultApp.tsx`: Root component, manages app state and navigation
- `OnboardingFlow.tsx`: 3-step setup (key creation, source, plan)
- `PhotoGallery.tsx`: Photo grid with upload, decrypt-on-demand
- `Dashboard.tsx`: Backup status and metrics
- `SettingsPanel.tsx`: Device management, security, plan settings

### State Management

Global app state is lifted to `PhotoVaultApp.tsx` and passed down. TanStack Query handles async data (photos). Supabase handles cloud state.

## Supabase Schema

Two tables + Storage bucket with RLS enabled:

```sql
-- Photo metadata (not the encrypted content)
photos_metadata (
  id UUID PRIMARY KEY,
  cid TEXT UNIQUE,        -- Content identifier
  device_id TEXT,         -- Which device uploaded
  file_size_bytes BIGINT,
  storage_path TEXT,      -- Path in Supabase Storage (e.g., "{device_id}/{cid}")
  nonce TEXT,             -- Encryption nonce (Base64)
  mime_type TEXT,         -- Original MIME type
  user_key_hash TEXT,     -- Hash of user's encryption key (for multi-device grouping)
  uploaded_at TIMESTAMPTZ
)

-- Connected devices
devices (
  id UUID PRIMARY KEY,
  device_name TEXT,
  device_type TEXT,
  user_key_hash TEXT,     -- Links device to user's encryption key
  created_at TIMESTAMPTZ
)
```

**Storage Bucket:** `vault` - Stores encrypted photo blobs at path `{device_id}/{cid}`

## Environment Variables

Required in `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
```

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS (iOS-style design system)
- Supabase (Postgres + Realtime + Storage)
- TanStack React Query (async data)
- Zustand (persisted settings state)
- Dexie.js (IndexedDB for local photos)
- tweetnacl (Encryption)
- Framer Motion (animations)
- Lucide React (Icons - do NOT use custom SVG imports)

## Important Patterns

### Icons
Always use `lucide-react` for icons. Never import SVG files directly as React components.

```tsx
// Correct
import { Shield, Lock, Cloud } from "lucide-react";

// Wrong - causes build issues
import ShieldIcon from "@/components/icons/shield.svg";
```

### Encryption-First Uploads
When uploading photos, always encrypt before storing:

```tsx
const { encrypted, nonce } = await encryptFile(file, secretKey);
await savePhoto({ cid, nonce, encryptedBlob: encrypted, ... });
await uploadCIDMetadata(cid, file.size, deviceId); // Cloud sync
```

### Device Identity
Each browser/device gets a unique ID via `getDeviceId()` from `src/lib/deviceId.ts`. This is used to distinguish which device uploaded which photo.

### Multi-Device Sync via user_key_hash
Photos and devices are grouped by `user_key_hash` - a SHA-256 hash of the user's secret key. This enables:
- Devices with the same recovery phrase see each other's photos
- RLS can filter by user_key_hash without exposing the actual key
- No account system required - the encryption key IS the identity

```tsx
// When uploading or syncing, always include user_key_hash
const hash = await getUserKeyHash(secretKey);
await uploadCIDMetadata(cid, fileSize, deviceId, nonce, mimeType, hash);
```

### State Management: Zustand for Settings
App settings persist via Zustand with localStorage:
```tsx
import { useSettingsStore } from '@/lib/storage/settings-store';
const { backupActive, setBackupActive } = useSettingsStore();
```

## UI Style

iOS-inspired design with:
- SF Pro Display font family
- iOS color palette (#007AFF blue, #30D158 green, #FF3B30 red)
- 428px max-width container (iPhone 14 Pro)
- Bottom navigation with 3 tabs
