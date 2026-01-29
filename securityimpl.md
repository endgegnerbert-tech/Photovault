Security Upgrade Roadmap (Post-MVP)
This document outlines the implementation plan for upgrading PrivacyHeaven/PhotoVault from MVP security to Enterprise-Grade security. It addresses current documented limitations.

1. 🟢 BIP39 Recovery Phrase Implementation
Current Status: Uses simplified Base64 chunking (e.g., A1B2-C3D4...). Goal: Standard 12/24-word mnemonic phrase (e.g., witch collapse practice feed...).

Implementation Steps (for Claude):
Dependencies: Install bip39 or a lightweight alternative compatible with tweetnacl.
Generation:
Replace 
keyToRecoveryPhrase
 in 
crypto.ts
.
Logic: Entropy (from Secret Key) -> Mnemonic.
Restoration:
Replace 
recoveryPhraseToKey
.
Logic: Mnemonic -> Entropy -> Secret Key.
Important: Ensure backward compatibility! If the user enters a legacy Base64 code, the system must still accept it.
UI Update: Update 
VaultSetupScreen.tsx
 to display words in a grid instead of a text string.
2. 🟡 Password-Based Key Derivation (PBKDF2)
Current Status: Secret Key is stored raw (base64) in localStorage. Goal: Encrypt the Secret Key with a user-provided PIN/Password before storing.

Implementation Steps (for Claude):
Crypto Update:
Add encryptKeyWithPin(key, pin) and decryptKeyWithPin(encryptedKey, pin) to 
crypto.ts
.
Use PBKDF2 (via crypto.subtle) with high iteration count (e.g., 100,000+) to derive a wrapping key from the PIN.
Use AES-GCM to encrypt the actual Secret Key with the wrapping key.
Storage: Store only the salt + IV + EncryptedKey. Never the raw key.
Auth Flow:
On App Start: Check if key is encrypted.
If yes -> Show "Unlock Vault" screen (Prompt for PIN).
If no (Legacy) -> Auto-unlock (and prompt to set up PIN).
3. 🔴 Key Rotation Mechanism
Current Status: One key forever. Changing keys means losing data (or manual re-encryption). Goal: Allow users to rotate keys without re-uploading everything.

Implementation Steps (for Claude):
Architecture Change (Key Wrapping):
Introduce "Master Key" (Rotatable) vs "Data Key" (Static per file).
Too complex for V1. Better approach for V2: Re-encryption.
Re-encryption Worker:
Create a Web Worker that runs in the background.
It downloads Encrypted Blob (Key A) and decrypts it.
It re-encrypts with Key B and uploads new blob.
Updates metadata.
UI: "Security Scope" dashboard showing rotation progress.
4. 🟣 Hardware Security Module (HSM) / Secure Enclave
Current Status: Software-based keys. Goal: Use iPhone/Mac Secure Enclave (TouchID/FaceID) to protect keys.

Implementation Steps (for Claude):
Platform Integration:
Use WebAuthn (Passkeys) for authentication anchoring.
For Tauri: Use Rust bindings to macOS Keychain kSecAttrTokenIDSecureEnclave.
Hybrid Approach:
Use HSM to legitimate access to the Software Key.
The actual Secret Key must remain exportable (for Recovery Phrase), so it cannot purely live in HSM (which are often non-exportable).
Strategy: Encrypt the Secret Key with a key that IS locked in the HSM.
✅ Launch Readiness Assessment (Current State)
Feature	Status	Notes
Email Auth	🟢 Ready	Verification strictness implemented. Resend configured.
Encryption	🟢 Ready	xsalsa20-poly1305 is secure. storage is functional.
Backup	🟡 Acceptable	Base64 recovery code works, but UX is rougher than BIP39.
Key Safety	🟡 Acceptable	localStorage needs protection from XSS (Good CSP required). Native Keychain used on Desktop.
Verdict: LAUNCH READY (MVP). The current security limitations are standard for an MVP. They affect "Defense in Depth" and "UX", but the core encryption is mathematically sound. You can launch now and implement the roadmap items in updates.


Comment
⌥⌘M