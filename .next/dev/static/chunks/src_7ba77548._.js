(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/storage/native-keychain.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearDeviceIdNative",
    ()=>clearDeviceIdNative,
    "clearKeyNative",
    ()=>clearKeyNative,
    "getDeviceIdNative",
    ()=>getDeviceIdNative,
    "isTauri",
    ()=>isTauri,
    "loadKeyNative",
    ()=>loadKeyNative,
    "storeKeyNative",
    ()=>storeKeyNative
]);
/**
 * Native Keychain Integration for Tauri
 *
 * Provides TypeScript bindings for OS-native keychain storage.
 * Falls back to localStorage when not running in Tauri.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tauri-apps/api/core.js [app-client] (ecmascript)");
;
function isTauri() {
    // @ts-ignore - __TAURI__ is injected by Tauri at runtime
    return ("TURBOPACK compile-time value", "object") !== 'undefined' && window.__TAURI__ !== undefined;
}
async function storeKeyNative(key) {
    if (!isTauri()) {
        throw new Error('Native keychain is only available in Tauri desktop app');
    }
    // Encode key as base64 for storage
    const encoded = btoa(String.fromCharCode.apply(null, Array.from(key)));
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invoke"])('store_secret_key', {
            key: encoded
        });
    } catch (error) {
        console.error('[Keychain] Failed to store key:', error);
        throw new Error(`Failed to store key in native keychain: ${error}`);
    }
}
async function loadKeyNative() {
    if (!isTauri()) {
        return null;
    }
    try {
        const encoded = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invoke"])('load_secret_key');
        if (!encoded) {
            return null;
        }
        // Decode from base64
        const decoded = atob(encoded);
        return Uint8Array.from(decoded, (c)=>c.charCodeAt(0));
    } catch (error) {
        console.error('[Keychain] Failed to load key:', error);
        throw new Error(`Failed to load key from native keychain: ${error}`);
    }
}
async function clearKeyNative() {
    if (!isTauri()) {
        return;
    }
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invoke"])('clear_secret_key');
    } catch (error) {
        console.error('[Keychain] Failed to clear key:', error);
        throw new Error(`Failed to clear key from native keychain: ${error}`);
    }
}
async function getDeviceIdNative() {
    if (!isTauri()) {
        throw new Error('Native device ID is only available in Tauri desktop app');
    }
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invoke"])('get_device_id');
    } catch (error) {
        console.error('[Device] Failed to get device ID:', error);
        throw new Error(`Failed to get native device ID: ${error}`);
    }
}
async function clearDeviceIdNative() {
    if (!isTauri()) {
        return;
    }
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invoke"])('clear_device_id');
    } catch (error) {
        console.error('[Device] Failed to clear device ID:', error);
        throw new Error(`Failed to clear native device ID: ${error}`);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/deviceId.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ensureDeviceIdPersistence",
    ()=>ensureDeviceIdPersistence,
    "getDeviceId",
    ()=>getDeviceId,
    "getDeviceInfo",
    ()=>getDeviceInfo,
    "getDeviceName",
    ()=>getDeviceName,
    "getDeviceType",
    ()=>getDeviceType,
    "setDeviceName",
    ()=>setDeviceName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$native$2d$keychain$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage/native-keychain.ts [app-client] (ecmascript)");
;
const DEVICE_ID_KEY = 'photovault_device_id';
const DEVICE_NAME_KEY = 'photovault_device_name';
const IDB_STORE_NAME = 'photovault_device_store';
/**
 * iOS PWA Persistence Helper
 * iOS Safari in standalone mode (Add to Home Screen) can sometimes clear localStorage.
 * This uses IndexedDB as a backup, which is more persistent on iOS.
 */ async function getFromIndexedDB(key) {
    return new Promise((resolve)=>{
        try {
            const request = indexedDB.open(IDB_STORE_NAME, 1);
            request.onupgradeneeded = ()=>{
                const db = request.result;
                if (!db.objectStoreNames.contains('keyval')) {
                    db.createObjectStore('keyval');
                }
            };
            request.onsuccess = ()=>{
                try {
                    const db = request.result;
                    const tx = db.transaction('keyval', 'readonly');
                    const store = tx.objectStore('keyval');
                    const getReq = store.get(key);
                    getReq.onsuccess = ()=>resolve(getReq.result || null);
                    getReq.onerror = ()=>resolve(null);
                } catch  {
                    resolve(null);
                }
            };
            request.onerror = ()=>resolve(null);
        } catch  {
            resolve(null);
        }
    });
}
async function saveToIndexedDB(key, value) {
    return new Promise((resolve)=>{
        try {
            const request = indexedDB.open(IDB_STORE_NAME, 1);
            request.onupgradeneeded = ()=>{
                const db = request.result;
                if (!db.objectStoreNames.contains('keyval')) {
                    db.createObjectStore('keyval');
                }
            };
            request.onsuccess = ()=>{
                try {
                    const db = request.result;
                    const tx = db.transaction('keyval', 'readwrite');
                    const store = tx.objectStore('keyval');
                    store.put(value, key);
                    tx.oncomplete = ()=>resolve();
                    tx.onerror = ()=>resolve();
                } catch  {
                    resolve();
                }
            };
            request.onerror = ()=>resolve();
        } catch  {
            resolve();
        }
    });
}
function getDeviceId() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Try localStorage first (fast path)
    let deviceId = localStorage.getItem(DEVICE_ID_KEY);
    if (!deviceId) {
        // Check sessionStorage as fallback (survives page reloads)
        deviceId = sessionStorage.getItem(DEVICE_ID_KEY);
    }
    if (!deviceId) {
        // Generate new ID
        deviceId = crypto.randomUUID();
        console.log('[DeviceID] Generated new device ID:', deviceId);
    }
    // Always save to all storage layers for redundancy
    try {
        localStorage.setItem(DEVICE_ID_KEY, deviceId);
        sessionStorage.setItem(DEVICE_ID_KEY, deviceId);
    } catch (e) {
        console.warn('[DeviceID] Storage save failed:', e);
    }
    // Async save to IndexedDB for iOS PWA persistence
    saveToIndexedDB(DEVICE_ID_KEY, deviceId).catch(()=>{});
    return deviceId;
}
async function ensureDeviceIdPersistence() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // For Tauri desktop: use native persistent storage
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$native$2d$keychain$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTauri"])()) {
        try {
            const deviceId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$native$2d$keychain$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDeviceIdNative"])();
            console.log('[DeviceID] Using native device ID:', deviceId);
            // Also save to localStorage for consistency
            try {
                localStorage.setItem(DEVICE_ID_KEY, deviceId);
                sessionStorage.setItem(DEVICE_ID_KEY, deviceId);
            } catch (e) {
                console.warn('[DeviceID] Failed to sync to localStorage:', e);
            }
            return deviceId;
        } catch (error) {
            console.error('[DeviceID] Native device ID failed, falling back to localStorage:', error);
        // Fall through to localStorage logic
        }
    }
    // PWA/Browser logic (original implementation)
    let deviceId = localStorage.getItem(DEVICE_ID_KEY);
    // If localStorage is empty, try to recover from IndexedDB
    if (!deviceId) {
        deviceId = await getFromIndexedDB(DEVICE_ID_KEY);
        if (deviceId) {
            console.log('[DeviceID] Recovered from IndexedDB:', deviceId);
            // Restore to localStorage and sessionStorage
            try {
                localStorage.setItem(DEVICE_ID_KEY, deviceId);
                sessionStorage.setItem(DEVICE_ID_KEY, deviceId);
            } catch (e) {
                console.warn('[DeviceID] Failed to restore to localStorage:', e);
            }
        }
    }
    // If still no ID, generate new one
    if (!deviceId) {
        deviceId = crypto.randomUUID();
        console.log('[DeviceID] Generated new device ID:', deviceId);
        try {
            localStorage.setItem(DEVICE_ID_KEY, deviceId);
            sessionStorage.setItem(DEVICE_ID_KEY, deviceId);
        } catch (e) {
            console.warn('[DeviceID] Storage save failed:', e);
        }
        await saveToIndexedDB(DEVICE_ID_KEY, deviceId);
    }
    return deviceId;
}
function getDeviceType() {
    if (("TURBOPACK compile-time value", "object") === 'undefined' || typeof navigator === 'undefined') {
        return 'unknown';
    }
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes('iphone')) return 'iphone';
    if (ua.includes('ipad')) return 'ipad';
    if (ua.includes('macintosh') || ua.includes('mac os')) return 'mac';
    if (ua.includes('windows')) return 'windows';
    if (ua.includes('android')) return 'android';
    if (ua.includes('linux')) return 'linux';
    return 'unknown';
}
function getDeviceName() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Check if user has set a custom name
    const customName = localStorage.getItem(DEVICE_NAME_KEY);
    if (customName) return customName;
    // Generate default name based on device type
    const deviceType = getDeviceType();
    const typeNames = {
        'iphone': 'iPhone',
        'ipad': 'iPad',
        'mac': 'Mac',
        'windows': 'Windows PC',
        'android': 'Android',
        'linux': 'Linux PC',
        'unknown': 'Browser'
    };
    return typeNames[deviceType] || 'Unknown Device';
}
function setDeviceName(name) {
    if ("TURBOPACK compile-time truthy", 1) {
        localStorage.setItem(DEVICE_NAME_KEY, name);
    }
}
function getDeviceInfo() {
    return {
        id: getDeviceId(),
        name: getDeviceName(),
        type: getDeviceType()
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deviceId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/deviceId.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
/**
 * Providers - React Query Provider + Service Worker Registration + iOS PWA Fixes
 */ 'use client';
;
;
;
function Providers({ children }) {
    _s();
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Providers.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
                defaultOptions: {
                    queries: {
                        staleTime: 60 * 1000,
                        refetchOnWindowFocus: false
                    }
                }
            })
    }["Providers.useState"]);
    // Ensure device ID persistence on startup (iOS PWA localStorage recovery)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Providers.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deviceId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureDeviceIdPersistence"])().then({
                "Providers.useEffect": (deviceId)=>{
                    console.log('[App] Device ID ensured:', deviceId);
                }
            }["Providers.useEffect"]);
        }
    }["Providers.useEffect"], []);
    // Register Service Worker for PWA
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Providers.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && 'serviceWorker' in navigator) {
                // Register on load
                window.addEventListener('load', {
                    "Providers.useEffect": ()=>{
                        navigator.serviceWorker.register('/sw.js').then({
                            "Providers.useEffect": (registration)=>{
                                console.log('[PWA] Service Worker registered:', registration.scope);
                                // Check for updates
                                registration.addEventListener('updatefound', {
                                    "Providers.useEffect": ()=>{
                                        const newWorker = registration.installing;
                                        if (newWorker) {
                                            newWorker.addEventListener('statechange', {
                                                "Providers.useEffect": ()=>{
                                                    if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                                        console.log('[PWA] New content available, refresh to update');
                                                    }
                                                }
                                            }["Providers.useEffect"]);
                                        }
                                    }
                                }["Providers.useEffect"]);
                            }
                        }["Providers.useEffect"]).catch({
                            "Providers.useEffect": (error)=>{
                                console.error('[PWA] Service Worker registration failed:', error);
                            }
                        }["Providers.useEffect"]);
                    }
                }["Providers.useEffect"]);
            }
        }
    }["Providers.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/providers.tsx",
        lineNumber: 61,
        columnNumber: 9
    }, this);
}
_s(Providers, "xt8W0NWDhhK136IAovjZyMe6eII=");
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_7ba77548._.js.map