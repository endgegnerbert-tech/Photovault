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
User Photo → Encrypt (tweetnacl) → Store Local (IndexedDB) → Upload to IPFS → Sync CID to Supabase
```

1. **Authentication** (`src/lib/auth.ts`, `src/lib/auth-client.ts`): Better Auth handles email/password authentication. User accounts are linked to vaults via `vault_key_hash`.

2. **Encryption Layer** (`src/lib/crypto.ts`): Uses tweetnacl for symmetric encryption. Keys stored in localStorage, recoverable via 12-word phrase. Key is anchored to user account via `vault_key_hash`.

3. **Local Storage** (`src/lib/storage/local-db.ts`): Dexie.js wrapper for IndexedDB. Stores encrypted photo blobs + metadata offline-first.

4. **Remote Storage** (`src/lib/ipfs.ts`, `src/lib/storage/remote-storage.ts`): Encrypted blobs are uploaded to **IPFS via Pinata**. Downloads race multiple gateways (Pinata, Cloudflare, dweb.link) for speed.

5. **Metadata Sync** (`src/lib/supabase.ts`): Only CID metadata syncs to Supabase (NOT the actual photos). Enables multi-device photo list sync.

6. **Realtime** (`src/hooks/useRealtimeSync.ts`): Supabase Realtime subscription for live updates when photos are added from other devices.

### App Flow (Phases)

The app has distinct phases managed in `PhotoVaultApp.tsx`:

1. **auth**: No session → Show login/signup (AuthScreen)
2. **unlock**: Session exists, no local key → Enter recovery phrase (UnlockVaultScreen)
3. **setup**: Session exists, no vault_key_hash → Create new vault (VaultSetupScreen)
4. **main**: Fully authenticated with local key → Main app with gallery/dashboard/settings

### Key Hooks

- `useEncryption`: Key generation, storage, recovery phrase management
- `useGalleryData`: Photo CRUD with encryption + automatic cloud sync
- `useRealtimeSync`: Cross-device realtime photo sync
- `useSession`: Better Auth session hook from `src/lib/auth-client.ts`

### Main UI Components (src/components/photovault/)

- `PhotoVaultApp.tsx`: Root component, manages app phases and navigation
- `AuthScreen.tsx`: Login/signup with Better Auth
- `UnlockVaultScreen.tsx`: Enter recovery phrase to unlock vault
- `VaultSetupScreen.tsx`: Create new vault with key generation
- `PhotoGallery.tsx`: Photo grid with upload, decrypt-on-demand
- `Dashboard.tsx`: Backup status and metrics
- `SettingsPanel.tsx`: Device management, security, plan settings

### State Management

Global app state is lifted to `PhotoVaultApp.tsx` and passed down. TanStack Query handles async data (photos). Zustand persists settings. Better Auth handles session state.

## Database Schema

Supabase stores **metadata only** - actual encrypted photos are on IPFS.

### Supabase Tables (RLS enabled)

```sql
-- Photo metadata (actual content is on IPFS)
photos_metadata (
  id UUID PRIMARY KEY,
  cid TEXT UNIQUE,        -- IPFS Content Identifier
  device_id TEXT,         -- Which device uploaded
  file_size_bytes BIGINT,
  nonce TEXT,             -- Encryption nonce (Base64)
  mime_type TEXT,         -- Original MIME type
  user_key_hash TEXT,     -- Hash of user's encryption key
  uploaded_at TIMESTAMPTZ
)

-- Connected devices
devices (
  id UUID PRIMARY KEY,
  device_name TEXT,
  device_type TEXT,
  user_key_hash TEXT,     -- Links device to encryption key
  user_id TEXT,           -- Better Auth user ID
  created_at TIMESTAMPTZ
)
```

### Better Auth Tables

Better Auth auto-creates: `user`, `session`, `account`, `verification` tables. The `user` table has an additional `vault_key_hash` field for key anchoring.

## Environment Variables

Required in `.env.local`:
```
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...

# Better Auth
DATABASE_URL=postgresql://...  # Supabase Postgres connection string
BETTER_AUTH_URL=http://localhost:3000  # Or production URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# IPFS/Pinata (optional - falls back to mock CIDs if not set)
NEXT_PUBLIC_PINATA_JWT=eyJ...
NEXT_PUBLIC_PINATA_GATEWAY=your-gateway.mypinata.cloud
NEXT_PUBLIC_PINATA_GATEWAY_TOKEN=...
```

## Tech Stack

- Next.js 16 (App Router) + PWA (service worker in `public/sw.js`)
- React 19
- TypeScript
- Tailwind CSS (iOS-style design system)
- Better Auth (email/password authentication)
- Supabase (Postgres + Realtime for metadata only)
- IPFS/Pinata (encrypted blob storage)
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

### Authentication with Better Auth
```tsx
import { useSession, signIn, signUp, signOut } from "@/lib/auth-client";

const { data: session, isPending } = useSession();
if (session?.user) {
  // User is authenticated
}
```

### Key Anchoring (vault_key_hash)
Each user account is linked to exactly one vault via `vault_key_hash`. This prevents using one account for multiple vaults.

```tsx
// When setting up vault or unlocking
const keyHash = await getUserKeyHash(secretKey);
await updateUserVaultKeyHash(userId, keyHash);  // Anchor to account
await registerDevice(deviceId, deviceName, deviceType, keyHash, userId);
```

### Encryption-First Uploads to IPFS
When uploading photos, encrypt locally then upload to IPFS:

```tsx
const { encrypted, nonce } = await encryptFile(file, secretKey);
const cid = await remoteStorage.upload(encrypted);  // → IPFS via Pinata
await uploadCIDMetadata(cid, file.size, deviceId, nonce, mimeType, userKeyHash);  // → Supabase
```

### Device Identity
Each browser/device gets a unique ID via `getDeviceId()` from `src/lib/deviceId.ts`. Devices are registered to Supabase with both `user_key_hash` and `user_id`.

### Multi-Device Sync
Photos and devices are grouped by `user_key_hash`. Devices with the same recovery phrase (and thus same key) see each other's photos.

### State Management: Zustand for Settings
```tsx
import { useSettingsStore } from '@/lib/storage/settings-store';
const { backupActive, setBackupActive } = useSettingsStore();
```

## UI Style

iOS-inspired design with:
- SF Pro Display font family
- iOS color palette (#007AFF blue, #30D158 green, #FF3B30 red)
- 1200px max-width container
- Bottom navigation with 3 tabs (Gallery, Backup, Settings)
