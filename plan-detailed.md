# Gesamtplan: PhotoVault (2026 Edition)

Dieser Plan erweitert das bestehende Projekt um die gewünschten Features, basierend auf `Plan.md` und der aktuellen Codebasis. Phase 3 (AI/Face Detection) wurde zugunsten der Core-Features und Stabilität nach hinten priorisiert.

---

## Bestehende Struktur (Status Quo)

Das Projekt ist ein initialisiertes **Next.js** Projekt mit **TailwindCSS** und **shadcn/ui**.

### Core Dependencies (aus `package.json`)
- **Framework**: `next` (v14.2.23) -> **Upgrade auf Next.js 15 erforderlich**
- **Styling**: `tailwindcss` (v3), `class-variance-authority`, `lucide-react`
- **UI**: Umfangreiche shadcn/ui Komponenten bereits installiert (`@radix-ui/*`, `cmdk`, `embla-carousel-react`, etc.)
- **Backend/Data**: `@supabase/supabase-js`, `stripe` (bereits in dependencies!)
- **Forms**: `react-hook-form`, `zod` (indirekt via shadcn templates oft dabei, muss explizit geprüft werden)

### Verzeichnisstruktur
- `/src/app`: Minimales Setup (`page.tsx`, `layout.tsx`).
- `/src/components/ui`: Viele shadcn Komponenten bereits vorhanden (Button, Dialog, ScrollArea, etc.).
- `/src/lib/utils.ts`: Standard `cn` utility.

**Erkenntnis**: Das Fundament für UI ist da. Die Geschäftslogik (Encryption, IPFS, DB) fehlt komplett.

---

## Neue Features & Implementierungsphasen

### Phase 1: Core Foundation & Security (Woche 1-2)
*Ziel: Sichere lokale PWA ohne Server-Abhängigkeit.*
1.  **Upgrade**: Migration auf Next.js 15 (App Router Stability).
2.  **Encryption Layer**: Integration von `tweetnacl.js` für Client-Side Encryption.
3.  **Local Storage Logic**:
    -   Key-Management System (Generierung & encrypted Speicherung im LocalStorage).
    -   Lokale Datenbank (Dexie.js oder erweitertes LocalStorage Handling für CIDs).
4.  **UI Implementation**:
    -   `UploadZone` (Drag & Drop mit Encryption-Worker).
    -   `PhotoGrid` (Entschlüsselung on-the-fly).

### Phase 2: Cloud Sync & Device Management (Woche 3)
*Ziel: Multi-Device Sync.*
1.  **Supabase Auth**: Anonyme Logins (für Geräte) + Email/Passwort (für Backup+).
2.  **Database**: Deployment des Schemas mit strikten RLS Policies.
3.  **Sync Engine**:
    -   Hooks (`useSync`), die lokale CIDs mit Supabase abgleichen.
    -   Realtime Subscriptions für sofortige Updates auf anderen Geräten.
4.  **Remote Pinning**: Integration von Web3.storage (oder Supabase Storage als Fallback/Hot-Storage).

### Phase 3: Desktop Experience (Woche 4-5)
*Ziel: Native Performance & OS Integration.*
1.  **Tauri Integration**: `npm run tauri init`.
2.  **File System Bridge**: Rust-Commands zum direkten Lesen/Schreiben von Dateien (umgeht Browser-Sandboxing für Performance).
3.  **System Tray**: Status-Anzeige (Syncing...).

### Phase 4: Monetization (Woche 6)
*Ziel: Business Logic.*
1.  **Stripe Checkout**: Integration in UI.
2.  **Supabase Edge Functions**: Webhooks zur Verarbeitung von Zahlungen und setzen der `subscription_tier`.

### Phase 5: AI Extensions (Nach Launch / Hinten angestellt)
*Ziel: Intelligente Suche (Client-Side).*
-   Nach erfolgreichem Launch von Core & Sync.
-   Integration von `tensorflow.js` und Vector-Search.

---

## Dateistruktur (Final)

Wir behalten die flache Struktur bei und erweitern logisch.

```
/src
├── app
│   ├── (auth)
│   │   ├── login/page.tsx
│   │   └── signup/page.tsx
│   ├── (dashboard)
│   │   ├── layout.tsx       # Auth Guard & Shell
│   │   ├── page.tsx         # Main Gallery
│   │   └── settings/page.tsx
│   ├── api                  # Next.js API Routes (nur für Edge Cases)
│   ├── layout.tsx           # Global Providers (Theme, QueryClient)
│   └── globals.css
├── components
│   ├── ui/                  # Bestehende shadcn Komponenten (Button, etc.)
│   ├── features
│   │   ├── upload/
│   │   │   ├── UploadZone.tsx
│   │   │   └── EncryptionWorker.ts
│   │   ├── gallery/
│   │   │   ├── PhotoGrid.tsx
│   │   │   └── PhotoCard.tsx
│   │   └── sync/
│   │       └── SyncStatusIndicator.tsx
│   └── layout/
│       ├── Header.tsx
│       └── Sidebar.tsx
├── lib
│   ├── utils.ts             # Bestehend
│   ├── crypto.ts            # tweetnacl Wrapper (encrypt/decrypt/keys)
│   ├── ipfs.ts              # IPFS/Web3.storage Logik
│   ├── supabase/
│   │   ├── client.ts        # Browser Client
│   │   ├── server.ts        # Server Component Client
│   │   └── types.ts         # DB Typen
│   ├── storage/
│   │   └── local-db.ts      # Browser-Storage Abstraktion
│   └── constants.ts
└── hooks
    ├── use-encryption.ts
    ├── use-gallery-data.ts
    └── use-sync-status.ts
```

---

## DB Schema + RLS Policies

Das Schema wird in Supabase angelegt. **Wichtig:** RLS ist NICHT optional.

### Tables

1.  **`profiles`** (extends `auth.users`)
    -   `id` (uuid, PK)
    -   `tier` (text: 'free' | 'backup_plus')
    -   *RLS: Users can view/edit own profile.*

2.  **`devices`**
    -   `id` (uuid, PK)
    -   `user_id` (fk -> profiles.id)
    -   `name` (text)
    -   `public_key` (text, device specific encryption key)
    -   *RLS: Users can all CRUD own devices.*

3.  **`photos`**
    -   `id` (uuid, PK)
    -   `user_id` (fk -> profiles.id)
    -   `cid` (text, IPFS Content ID)
    -   `iv` (text, Encryption IV)
    -   `meta` (jsonb, width, height, size - encrypted?)
    -   *RLS: Users can all CRUD own photos.*

### RLS Policies (Beispiel für `photos`)

```sql
ALTER TABLE photos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own photos" 
ON photos FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own photos" 
ON photos FOR INSERT 
WITH CHECK (auth.uid() = user_id);
```

---

## Security Checklist (Project Rules)

1.  **Input Validation**: Jede Server Action und API Route MUSS Inputs mit **Zod** validieren.
2.  **CSP Headers**: In `next.config.js` strikte Content Security Policy setzen (Kein `unsafe-inline` für Scripts).
3.  **Dependencies**: Keine unnötigen npm packages. Audit vor Install.
4.  **Supabase**:
    -   Service Role Key NIEMALS im Client nutzen.
    -   RLS auf ALLEN Tabellen aktivieren.
5.  **Client Encryption**:
    -   Private Keys verlassen NIEMALS den LocalStorage/Browser Memory.
    -   Daten werden VOR dem Upload zu IPFS/Supabase verschlüsselt.

---

## Test Cases (Acceptance Criteria)

### E2E Tests (Playwright)
1.  **First Run / Onboarding**
    -   User öffnet App -> Generiert Key -> Landet im leeren Dashboard.
2.  **Local Backup Flow**
    -   Upload Bild -> Bild erscheint in Grid -> Bild ist nach Reload noch da.
3.  **Upgrade Flow** (Mocked Payment)
    -   User klickt Upgrade -> Bezahl-Flow durch -> UI zeigt "Backup+".

### Unit Tests (Jest/Vitest)
1.  **Crypto/Security**
    -   `encrypt(data, key)` output ist nicht gleich input.
    -   `decrypt(encrypt(data))` == `data`.
2.  **Components**
    -   `UploadZone` akzeptiert nur korrekte MIME-Types.
