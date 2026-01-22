STRICT CONTEXT:
	•	Verwende NUR plan-detailed.md als Blueprint
	•	Implementiere Schritt für Schritt nach Abschnitten
	•	**KRITISCH: ANALYSIERE ZUERST DAS BESTEHENDE PROJEKT**
	•	Wenn Konflikt: Frage nach

## WORKFLOW VOR JEDER IMPLEMENTATION:

### 1. PROJEKT-ANALYSE (PFLICHT!)
```bash
# Schritt 1: Verstehe die bestehende Struktur
- Liste alle Dateien in /src/components
- Öffne die Haupt-App-Komponente (z.B. PhotoVaultApp.tsx)
- Prüfe welche Features BEREITS existieren
- Notiere bestehende UI-Komponenten

# Schritt 2: Identifiziere was FEHLT
- Vergleiche bestehende Features mit plan-detailed.md
- Markiere was NEU hinzugefügt werden muss
- Markiere was ERWEITERT werden muss
```

### 2. INTEGRATION STATT ERSETZUNG
**NIEMALS:**
- ❌ Bestehende Komponenten komplett überschreiben
- ❌ Neue page.tsx ohne Prüfung der alten erstellen
- ❌ UI-Struktur ändern ohne Analyse

**IMMER:**
- ✅ Bestehende Komponenten ERWEITERN
- ✅ Neue Features IN bestehende Struktur integrieren
- ✅ Hooks/Utils als separate Layer hinzufügen

### 3. BEISPIEL: Encryption hinzufügen
```typescript
// FALSCH: Neue Komponente die alles ersetzt
export default function HomePage() {
  return <NeueGallery />; // ❌ Alte UI weg!
}

// RICHTIG: Bestehende Komponente erweitern
export default function HomePage() {
  return <PhotoVaultApp />; // ✅ Alte UI bleibt
}

// In PhotoVaultApp.tsx:
import { useEncryption } from '@/hooks/use-encryption'; // ✅ Feature hinzufügen
```

## PHASE 1 CHECKLIST (AKTUALISIERT):

### Vor Implementation:
- [ ] Liste /src/components Struktur
- [ ] Öffne PhotoVaultApp.tsx und verstehe Flow
- [ ] Identifiziere wo Encryption-Hooks integriert werden
- [ ] Plane Integration OHNE UI zu brechen

### Implementation:
- [ ] Crypto Layer (crypto.ts) - NEUE Datei ✅
- [ ] Local Storage (local-db.ts) - NEUE Datei ✅
- [ ] Hooks (use-encryption.ts) - NEUE Datei ✅
- [ ] **PhotoGallery.tsx ERWEITERN** - nicht ersetzen!
- [ ] **Dashboard.tsx ERWEITERN** - Metriken verbinden
- [ ] **OnboardingFlow.tsx ERWEITERN** - Key-Generation integrieren

### Verification:
- [ ] Alle bestehenden Screens funktionieren (Galerie, Backup, Settings)
- [ ] Neue Features sind nahtlos integriert
- [ ] Keine UI-Komponenten wurden gelöscht