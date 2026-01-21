# PhotoVault - Complete Development Roadmap

## Core Technology Stack

### Frontend Layer
**Next.js 15 App Router**
- Warum: Server Components reduzieren Client-Side Bundle, PWA-Support native, Vercel-Deployment in 2 Min
- Alternative wäre React + Vite, aber Next.js hat besseres Caching für Foto-Metadaten

**Tauri 2.0**
- Warum: Rust-Backend ist sicherer für Encryption-Keys, 600KB Bundle vs 150MB Electron, native File-System-Access auf iOS/Mac/Windows
- Alternative wäre Electron, aber zu groß für Photo-App

**TailwindCSS + Radix UI**
- Warum: Tailwind = schnellstes Styling, Radix = Accessibility fertig, Apple-Design einfach nachbaubar
- Alternative wäre styled-components, aber langsamer Build-Time

### Encryption & Storage Layer
**tweetnacl.js**
- Warum: 7KB Library, audited, Zero-Dependencies, funktioniert in Browser + Node
- Alternative wäre libsodium-wrappers, aber 1MB größer

**IPFS Kubo (js-ipfs deprecated)**
- Warum: Lokaler Node läuft direkt im Tauri-Backend, keine Server-Kosten
- Alternative wäre Helia (neuer IPFS-Client), aber noch Beta

**Web3.storage SDK**
- Warum: Kostenloses Remote-Pinning, Filecoin-backed, 100GB Free Tier
- Alternative wäre Pinata, aber teurer ($20/mo für 100GB)

### Backend Layer
**Supabase (PostgreSQL + Realtime)**
- Warum: Free Tier reicht für 50.000 User, PostgreSQL für CID-Queries schnell, Realtime für Multi-Device-Sync
- Alternative wäre Firebase, aber Vendor-Lock-In + teurer

**Supabase Edge Functions (Deno)**
- Warum: Für CID-Aggregation, Face-Count-Stats, Webhook-Handler ohne eigenen Server
- Alternative wäre Cloudflare Workers, aber Supabase-Integration einfacher

### AI & Processing Layer
**TensorFlow.js + face-api.js**
- Warum: Läuft on-device (Zero-Knowledge), 98% Accuracy, funktioniert offline
- Alternative wäre MediaPipe, aber größere Bundle-Size

**Sharp (Image Processing)**
- Warum: Schnellstes Thumbnail-Generation in Node.js, EXIF-Stripping für Privacy
- Alternative wäre jimp, aber 10x langsamer

### Development & Deployment Tools
**Vercel (PWA Hosting)**
- Warum: Next.js ist von Vercel, automatische PWA-Manifest-Generation, Edge-CDN weltweit
- Alternative wäre Netlify, aber langsamer Cold-Start

**GitHub Actions (CI/CD)**
- Warum: Free für Public Repos, automatische Tauri Builds für macOS/Windows/Linux
- Alternative wäre GitLab CI, aber GitHub hat bessere Tauri-Actions

**Biome (Linter/Formatter)**
- Warum: 25x schneller als ESLint + Prettier kombiniert, ein Tool statt zwei
- Alternative wäre ESLint + Prettier, aber langsamere Dev-Experience

***

## Phase 1: Foundation MVP (Woche 1-2)

### Ziel
Funktionierende PWA mit lokalem Backup und Encryption

### Funktionen
1. Photo Upload (Drag & Drop)
2. Client-Side Encryption (tweetnacl)
3. Local IPFS Node (Browser)
4. CID-Generierung
5. Key-Management (localStorage)
6. Basic Gallery (Grid View)

### Tools dieser Phase
```
Next.js: UI Components
TailwindCSS: Styling
tweetnacl: Encryption
js-ipfs (Browser): Local Storage
LocalStorage: Key Storage
```

### Deliverables
- PWA läuft auf localhost:3000
- User kann Fotos hochladen
- Fotos werden verschlüsselt
- CIDs werden generiert
- Gallery zeigt Fotos an (encrypted, nur mit Key sichtbar)

### Warum diese Reihenfolge
Lokales Backup first = kein Backend nötig = schneller MVP. User kann sofort testen ohne Server-Setup.

***

## Phase 2: Multi-Device Sync (Woche 3)

### Ziel
Fotos zwischen iPhone und MacBook synchronisieren

### Neue Funktionen
1. Supabase Integration (CID-Metadaten)
2. Device Registration
3. Real-Time Sync (Supabase Realtime)
4. Remote IPFS Pinning (Web3.storage)
5. Conflict Resolution

### Tools dieser Phase
```
Supabase: Database + Realtime
Supabase Auth: Device-IDs (anonymous)
Web3.storage: Remote Pinning
React Query: Data Fetching + Cache
```

### Schema (Supabase)
```sql
CREATE TABLE photos_metadata (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  cid TEXT NOT NULL UNIQUE,
  device_id TEXT NOT NULL,
  file_size_bytes BIGINT,
  faces_count INTEGER,
  pinned_locally BOOLEAN DEFAULT TRUE,
  pinned_remote BOOLEAN DEFAULT FALSE,
  uploaded_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE devices (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  device_name TEXT NOT NULL,
  device_type TEXT, -- 'iphone' | 'mac' | 'windows'
  last_sync_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_cid ON photos_metadata(cid);
CREATE INDEX idx_device ON photos_metadata(device_id);
```

### Workflow
```
iPhone uploads photo:
  1. Encrypt locally
  2. IPFS add → CID
  3. Pin locally
  4. Upload CID to Supabase
  5. Pin remote (Web3.storage)

MacBook receives:
  1. Supabase Realtime: "New CID!"
  2. Fetch CID from IPFS
  3. Decrypt with Key
  4. Show in Gallery
```

### Deliverables
- iPhone und Mac zeigen dieselben Fotos
- Echtzeit-Sync in unter 5 Sekunden
- Offline funktioniert weiter (Local Cache)

### Warum jetzt
Multi-Device ist Killer-Feature vs Google Photos. Ohne das ist es nur "lokales Backup-Tool".

***

## Phase 3: Face Detection & Search (Woche 4)

### Ziel
Fotos durchsuchbar machen ohne Server-Side AI

### Neue Funktionen
1. On-Device Face Detection (TensorFlow.js)
2. Face Embeddings (lokal gespeichert, encrypted)
3. Face Clustering (ähnliche Gesichter gruppieren)
4. Search by Face
5. Search by Date/Location (EXIF)

### Tools dieser Phase
```
TensorFlow.js: Face Detection Model
face-api.js: Face Landmarks + Embeddings
exif-js: EXIF-Daten extrahieren
Fuse.js: Fuzzy Search für Tags
```

### Workflow
```
Photo Upload:
  1. Face Detection (on-device)
  2. Generate 128-dim Face-Embedding
  3. Encrypt Embedding mit Key
  4. Speichere in Supabase (encrypted)
  5. Cluster ähnliche Embeddings lokal

Search:
  1. User: "Zeig mir Personen"
  2. Load Embeddings (decrypt)
  3. Cluster zeigen (Group 1: 120 Fotos, Group 2: 45 Fotos)
  4. Click Group → Show Photos
```

### Schema-Erweiterung
```sql
CREATE TABLE face_embeddings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  photo_cid TEXT REFERENCES photos_metadata(cid),
  embedding_encrypted TEXT NOT NULL, -- 128-dim vector, encrypted
  bounding_box JSONB, -- x,y,width,height
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_photo_cid ON face_embeddings(photo_cid);
```

### Deliverables
- Face Detection läuft im Browser (kein Server)
- Search findet Fotos in unter 1 Sekunde
- Face-Gruppen werden automatisch erkannt

### Warum jetzt
Google Photos = AI-Suche. Ohne das Feature ist PhotoVault "nur verschlüsseltes Backup". Mit AI-Search = echter Competitor.

***

## Phase 4: Desktop App (Tauri) (Woche 5)

### Ziel
Native App für MacBook/Windows mit Auto-Backup

### Neue Funktionen
1. Tauri Desktop App
2. Native File-System-Access
3. Background Auto-Backup
4. System Tray Icon
5. Notifications

### Tools dieser Phase
```
Tauri 2.0: Desktop-Framework
Rust: Backend-Logic
tauri-plugin-fs: File-Access
tauri-plugin-notification: Push-Notifications
tauri-plugin-autostart: Auto-Launch bei Boot
```

### Tauri-Architektur
```
Frontend (Next.js):
  - React Components (dieselben wie PWA)
  - API Calls zu Rust-Backend

Backend (Rust):
  - File-System-Access
  - IPFS Node (embedded)
  - Encryption (rust-crypto)
  - Background-Worker (tokio)
```

### Auto-Backup-Logic
```rust
// src-tauri/src/backup.rs
use tokio::time::{interval, Duration};

async fn auto_backup_loop(photos_dir: PathBuf) {
    let mut interval = interval(Duration::from_secs(300)); // 5 Min
    
    loop {
        interval.tick().await;
        
        let new_photos = scan_directory(&photos_dir).await;
        for photo in new_photos {
            let encrypted = encrypt_file(photo).await;
            let cid = upload_to_ipfs(encrypted).await;
            save_to_supabase(cid).await;
        }
    }
}
```

### Deliverables
- .dmg für macOS
- .exe für Windows
- .AppImage für Linux
- Auto-Backup läuft im Hintergrund
- System-Tray zeigt Status

### Warum jetzt
PWA hat Limits (File-Access, Background-Tasks). Desktop-App = keine Limits = bessere UX für Power-User.

***

## Phase 5: Freemium & Monetization (Woche 6)

### Ziel
Paid Plans implementieren

### Neue Funktionen
1. Free Tier (10GB, nur lokales Pinning)
2. Backup+ Tier (200GB, Remote Pinning)
3. Stripe-Integration
4. Usage-Tracking
5. Plan-Upgrade-Flow

### Tools dieser Phase
```
Stripe: Payment-Processing
Supabase Edge Functions: Webhook-Handler
React: Paywall-UI
Supabase RLS: Row-Level-Security für Paid-Features
```

### Schema-Erweiterung
```sql
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  device_id UUID REFERENCES devices(id),
  plan TEXT NOT NULL, -- 'free' | 'backup_plus'
  stripe_subscription_id TEXT,
  status TEXT, -- 'active' | 'cancelled' | 'past_due'
  current_period_end TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE usage_stats (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  device_id UUID REFERENCES devices(id),
  photos_count INTEGER DEFAULT 0,
  storage_bytes BIGINT DEFAULT 0,
  last_updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Stripe-Workflow
```
User clicks "Upgrade zu Backup+":
  1. Frontend: Stripe Checkout Session
  2. User zahlt
  3. Stripe Webhook → Supabase Edge Function
  4. Edge Function: Update subscriptions table
  5. Frontend: Show "Plan aktiv!"
  6. Backend: Enable Remote Pinning
```

### Deliverables
- Stripe-Integration funktioniert
- User kann Pläne wechseln
- Usage wird getrackt
- Free Tier hat Limits (10GB)
- Paid Tier hat Remote-Pinning

### Warum jetzt
Nach 5 Wochen hast du Traction (Beta-User testen). Jetzt monetarisieren = nachhaltiges Business.

***

## Phase 6: Polish & Launch (Woche 7-8)

### Ziel
Production-Ready + Marketing

### Features dieser Phase
1. Onboarding-Tutorial (interaktiv)
2. Error-Handling (Sentry)
3. Performance-Optimierung
4. Security-Audit
5. Marketing-Website
6. Product Hunt Launch

### Tools dieser Phase
```
Sentry: Error-Tracking
Lighthouse: Performance-Audit
Plausible: Privacy-Analytics
Framer: Marketing-Website
Product Hunt: Launch-Platform
```

### Pre-Launch Checklist
```
Technical:
- PWA installierbar (iOS + Android)
- Desktop-Apps signiert (Code-Signing)
- Supabase-Backup (pg_dump)
- Load-Testing (k6)
- Security-Audit (OWASP)

Marketing:
- Product Hunt Post geschrieben
- Reddit Posts vorbereitet (r/privacy, r/opensource)
- Twitter/X Thread (10 Tweets)
- Demo-Video (2 Min, Loom)
- Landing-Page (photovault.app)

Legal:
- Privacy Policy
- Terms of Service
- DSGVO-Konformität (EU)
```

### Launch-Day-Plan
```
Tag 0 (Sonntag Abend):
- Product Hunt Post einreichen (00:01 PST)
- Twitter Thread posten
- Reddit Posts (6 Subreddits)

Tag 1 (Montag):
- Product Hunt Kommentare beantworten
- HN Post (Show HN: PhotoVault)
- Email an TechCrunch/TheVerge

Tag 2-7:
- Community-Support (Discord)
- Bug-Fixes (schnelle Iteration)
- Feature-Requests sammeln
```

### Deliverables
- App ist live auf photovault.app
- Product Hunt Top 5
- 1000+ Signups erste Woche
- Blog Post: "How I built PhotoVault in 8 weeks"

### Warum jetzt
Nach 6 Wochen Development bist du bereit. Launch ist kritisch = ohne Marketing stirbt beste App.

***

## Phase 7: Growth & Scale (Monat 3-6)

### Ziel
10.000+ Users, nachhaltiges Business

### Features dieser Phase
1. Family Sharing (Key-Sharing für Familien-Album)
2. Album-Collections
3. Public-Sharing-Links (encrypted)
4. Mobile Apps (React Native + Tauri Mobile Beta)
5. API für Developer

### Tools dieser Phase
```
React Native: iOS/Android Native
Tauri Mobile (Beta): iOS/Android Hybrid
Stripe Billing Portal: Self-Service-Abo-Verwaltung
PostHog: Product-Analytics
Intercom: Customer-Support
```

### Family-Sharing-Logic
```
User erstellt "Familien-Album":
  1. Generate neuen Key B (nur für Album)
  2. Encrypt Fotos mit Key B
  3. Share Key B via QR-Code/Link
  4. Partner scannt QR → hat Key B
  5. Partner sieht nur Familien-Album (nicht private Fotos mit Key A)
```

### Mobile-App-Strategie
```
Option A: React Native
- Pro: Native Performance
- Con: Neue Codebase

Option B: Tauri Mobile (Beta)
- Pro: Shared Codebase mit Desktop
- Con: Noch Beta (bugs möglich)

Empfehlung: Tauri Mobile (2026 = stable genug)
```

### Deliverables
- iOS App im App Store
- Android App im Play Store
- 10.000+ User
- $5.000+ MRR (Monthly Recurring Revenue)
- Break-Even erreicht

### Warum jetzt
Nach Launch hast du Feedback. Jetzt Features bauen, die User wirklich wollen (nicht was du denkst).

***

## Cost Breakdown (per Phase)

### Phase 1-2 (MVP)
- Supabase: $0 (Free Tier)
- Web3.storage: $0 (Free Tier)
- Vercel: $0 (Hobby Plan)
- Domain: $12/Jahr
- Total: $12

### Phase 3-4 (Face Detection + Desktop)
- Supabase: $0 (noch Free)
- Code-Signing-Zertifikat: $99 (Apple Developer)
- Total: $99

### Phase 5-6 (Monetization + Launch)
- Stripe: 2.9% + $0.30 per Transaction
- Supabase Pro: $25/Monat (nach 10.000 User)
- Marketing: $200 (Ads optional)
- Total: $250

### Phase 7 (Scale)
- Supabase Pro: $25/Monat
- Web3.storage: $10/Monat (nach 100GB)
- Sentry: $26/Monat
- Intercom: $74/Monat
- Total: $135/Monat

**Gesamt (8 Wochen bis Launch): $361**
**Monatlich (nach Launch): $135**

Bei 200 Paid-Users ($4.99/Monat) = $998 MRR - $135 Kosten = $863 Profit

***

## Success Metrics (per Phase)

### Phase 1-2 (MVP)
- 10 Beta-User testen App
- 0 kritische Bugs
- Backup funktioniert in 95% der Fälle

### Phase 3-4 (Features)
- Face Detection: 90%+ Accuracy
- Multi-Device-Sync: unter 5 Sekunden

### Phase 5-6 (Launch)
- Product Hunt Top 10
- 1000+ Signups Woche 1
- 5% Conversion zu Paid

### Phase 7 (Scale)
- 10.000+ User
- $5.000+ MRR
- 4.5+ Stars auf Product Hunt

***

## Final Tech Stack Summary

```
Frontend:      Next.js 15 + TailwindCSS + Radix UI
Desktop:       Tauri 2.0 (Rust + Next.js)
Mobile:        Tauri Mobile (Beta) oder React Native
Backend:       Supabase (PostgreSQL + Realtime + Edge Functions)
Storage:       IPFS Kubo (local) + Web3.storage (remote)
Encryption:    tweetnacl.js (client-side)
AI:            TensorFlow.js + face-api.js (on-device)
Payment:       Stripe
Analytics:     Plausible (Privacy-First)
Monitoring:    Sentry
CI/CD:         GitHub Actions
Hosting:       Vercel (PWA) + GitHub Releases (Desktop)
```

Das ist der komplette 8-Wochen-Plan mit allen Tools, Begründungen und Meilensteinen. Bereit zu starten?
**Kurz:** Nein, **kein Login** für Free User. **Ja, minimaler Login nur für Paid/Backup+ User.**

Hier die smarte Strategie:

## 1. **Free Tier: Kein Login, Key-only** ✅

```
User Flow (90% User):
1. App öffnen
2. Key generieren (12-Wort Phrase)
3. Key lokal speichern (encrypted localStorage)
4. Backup aktivieren
5. Fotos hochladen → IPFS → CID lokal merken

Vorteile:
├─ 0 Friction (kein "Registrieren Sie sich")
├─ 100% Privacy (kein Account = keine Daten)
├─ Einfachste Onboarding (3 Taps)
└─ Viral (teilen per Screenshot)
```

```
Technik:
├─ Key → localStorage (encrypted)
├─ CIDs → localStorage Array
├─ Galerie → local CIDs + IPFS fetch
└─ Backup-Status → localStorage
```

**Problem:** Multi-Device Sync funktioniert nicht (kein Server)

***

## 2. **Backup+ (Paid): Minimaler Login** 💳

```
User Flow (10% User):
1. Free Tier nutzen
2. "Upgrade zu Backup+" klicken
3. "Account erstellen" (Email + Password)
4. Zahlung (Lemon Squeezy, 30 Sekunden)
5. Backup+ aktiv → Multi-Device Sync!

Vorteile:
├─ Nur Paying Users haben Account
├─ Multi-Device Magic (Supabase CIDs)
├─ Remote Pinning (Web3.storage)
└─ Family Sharing möglich
```

```
Technik:
├─ Supabase Auth (Email/Password)
├─ Stripe/Lemon Squeezy Webhook
├─ Subscription Status prüfen
├─ CIDs in Supabase speichern
└─ Alle Geräte syncen automatisch
```

***

## 3. **Warum diese Hybrid-Strategie gewinnt**

```
Free User (90%):
├─ Kein Login → 95% Retention
├─ Nur Key → maximale Privacy
├─ Lokal-only → keine Server-Kosten
└─ Upgrade-Prompt nach 50 Fotos

Paid User (10%):
├─ Login für Features (Multi-Device)
├─ $2.99/Mo → hohe LTV
├─ Server-Kosten nur für Paying User
└─ 10% Conversion = profitabel
```

```
Beispiel:
1000 Free User = 0€ Kosten
100 Paid User = 100 * 2.99 = 299€ Revenue
Supabase Pro = 25€/Mo
NET: 274€ Profit/Monat ✅
```

***

## 4. **Technische Implementierung**

### Free Tier (Key-only)

```typescript
// lib/localStorage.ts
export const getUserKey = (): Uint8Array | null => {
  const encrypted = localStorage.getItem('photovault_key_encrypted')
  if (!encrypted) return null
  
  // Decrypt mit master password (optional)
  const decrypted = decryptKey(encrypted)
  return new Uint8Array(decrypted)
}

export const savePhotoCID = (cid: string) => {
  const cids = JSON.parse(localStorage.getItem('photovault_cids') || '[]')
  cids.push(cid)
  localStorage.setItem('photovault_cids', JSON.stringify(cids))
}

export const loadGalleryCIDs = (): string[] => {
  return JSON.parse(localStorage.getItem('photovault_cids') || '[]')
}
```

### Paid Tier (Supabase Sync)

```typescript
// lib/supabaseSync.ts
export const syncCIDsToSupabase = async (cids: string[]) => {
  if (!user.subscription_status === 'backup_plus') return
  
  await supabase
    .from('photos_metadata')
    .insert(cids.map(cid => ({
      user_id: user.id,
      cid,
      pinned_locally: true
    })))
}

export const loadGalleryFromSupabase = async () => {
  const { data } = await supabase
    .from('photos_metadata')
    .select('cid')
    .eq('user_id', user.id)
    
  return data.map(row => row.cid)
}
```

### App Logic (Hybrid)

```typescript
// hooks/useGallery.ts
export function useGallery() {
  const userKey = getUserKey()
  const subscription = getSubscriptionStatus()
  
  const galleryCIDs = subscription === 'backup_plus' 
    ? loadGalleryFromSupabase()
    : loadGalleryCIDs()
    
  const photos = galleryCIDs.map(async (cid) => {
    const photoBlob = await fetchFromIPFS(cid)
    return decryptPhoto(photoBlob, userKey)
  })
  
  return { photos, subscription }
}
```

***

## 5. **Upgrade Flow (Conversion Killer)**

```
User hat 50 Free-Fotos:
└─ Dashboard zeigt: "Free: 50/50 Fotos"
  └─ "Upgrade zu Backup+ für mehr Speicher"

User klickt Upgrade:
├─ Lemon Squeezy Checkout (30 Sekunden)
├─ Email + Password (minimal)
├─ "Willkommen! Sync läuft..."
└─ Automatisch alle CIDs zu Supabase

Conversion-Rate erwartet: 10-20%
```

***

## 6. **Vorteile dieser Strategie**

```
✅ Free User: 0 Friction, maximale Privacy
✅ Paid User: Premium Features (Sync, Remote Pinning)
✅ Du: 0 Server-Kosten für Free User
✅ Viral: Free User teilen App leichter
✅ Monetarisiert: Nur Paying User kosten Geld
✅ Privacy: "Wir tracken keine Free User"
```

```
Vergleich zu anderen:
├─ Ente: Login sofort → hohe Abbruchquote
├─ Google Photos: Google Account → Tracking
└─ PhotoVault: Key-only → 95% Retention
```

***

## 7. **UI-Änderungen für Hybrid-Modell**

```
Dashboard (Free User):
├─ "Free Plan" Badge
├─ "Upgrade für Multi-Device"
└─ Lokal-only Metrics

Dashboard (Paid User):
├─ "Backup+" Badge
├─ "Sync: iPhone + Mac ✓"
├─ Cloud-Metrics (Supabase)
└─ "Remote Pinning aktiv"
```

***

**Fazit:** Kein Login für Free = viral. Minimaler Login nur für Paid = monetarisiert. Perfektes Hybrid-Modell. Das ist der Weg! 🚀


