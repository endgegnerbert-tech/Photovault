/**
 * useEncryption Hook - Key Management
 */

'use client';

import { useState, useEffect, useCallback } from 'react';
import {
    generateKeyPair,
    saveKeyToStorage,
    loadKeyFromStorage,
    clearKeyFromStorage,
    keyToRecoveryPhrase,
    recoveryPhraseToKey,
} from '@/lib/crypto';

export function useEncryption() {
    const [secretKey, setSecretKey] = useState<Uint8Array | null>(null);
    const [isInitialized, setIsInitialized] = useState(false);
    const [recoveryPhrase, setRecoveryPhrase] = useState<string | null>(null);

    // Load key on mount
    useEffect(() => {
        const key = loadKeyFromStorage();
        if (key) {
            setSecretKey(key);
            setRecoveryPhrase(keyToRecoveryPhrase(key));
        }
        setIsInitialized(true);
    }, []);

    // Generate new key
    const generateNewKey = useCallback(() => {
        const keyPair = generateKeyPair();
        const key = keyPair.secretKey;

        setSecretKey(key);
        saveKeyToStorage(key);

        const phrase = keyToRecoveryPhrase(key);
        setRecoveryPhrase(phrase);

        return phrase;
    }, []);

    // Restore from recovery phrase
    const restoreFromPhrase = useCallback((phrase: string) => {
        try {
            const key = recoveryPhraseToKey(phrase);
            setSecretKey(key);
            saveKeyToStorage(key);
            setRecoveryPhrase(phrase);
            return true;
        } catch {
            return false;
        }
    }, []);

    // Logout / Clear key
    const clearKey = useCallback(() => {
        setSecretKey(null);
        setRecoveryPhrase(null);
        clearKeyFromStorage();
    }, []);

    return {
        secretKey,
        isInitialized,
        hasKey: !!secretKey,
        recoveryPhrase,
        generateNewKey,
        restoreFromPhrase,
        clearKey,
    };
}
