module.exports = [
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/punycode [external] (punycode, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/src/lib/supabase.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cidExistsInSupabase",
    ()=>cidExistsInSupabase,
    "deletePhotoMetadata",
    ()=>deletePhotoMetadata,
    "getDevicesForUser",
    ()=>getDevicesForUser,
    "getPhotoMetadataByCID",
    ()=>getPhotoMetadataByCID,
    "getStorageUsage",
    ()=>getStorageUsage,
    "loadCIDsFromSupabase",
    ()=>loadCIDsFromSupabase,
    "registerDevice",
    ()=>registerDevice,
    "supabase",
    ()=>supabase,
    "uploadCIDMetadata",
    ()=>uploadCIDMetadata
]);
/**
 * Supabase Layer - Metadata-Only Storage
 * Supabase stores ONLY photo metadata and device info, NOT the actual content
 * Content is stored on IPFS (see ipfs.ts and remote-storage.ts)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-rsc] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://jextayidnmtsoofugnig.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpleHRheWlkbm10c29vZnVnbmlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwODM1MDAsImV4cCI6MjA4NDY1OTUwMH0.vxRq32MPWyO_znst5nFCiQ7AWJtlJeOFWMY-RlZmjrs");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
async function uploadCIDMetadata(cid, fileSize, deviceId, nonce, mimeType, userKeyHash) {
    console.log('[Supabase] Uploading metadata:', {
        cid,
        deviceId,
        mimeType,
        fileSize,
        hasUserKeyHash: !!userKeyHash
    });
    // Try API proxy first (avoids CORS issues)
    try {
        const response = await fetch('/api/supabase/proxy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action: 'uploadMetadata',
                cid,
                fileSize,
                deviceId,
                nonce,
                mimeType,
                userKeyHash
            })
        });
        const result = await response.json();
        if (result.success) {
            console.log('[Supabase] Metadata uploaded via proxy:', result.data?.[0]?.id);
            return result.data;
        }
        console.warn('[Supabase] Proxy failed, trying direct client:', result.error);
    } catch (err) {
        console.warn('[Supabase] Proxy error, trying direct client:', err);
    }
    // Fallback to direct client
    const { data, error } = await supabase.from('photos_metadata').insert([
        {
            cid,
            file_size_bytes: fileSize,
            device_id: deviceId,
            nonce,
            mime_type: mimeType,
            user_key_hash: userKeyHash
        }
    ]).select();
    if (error) {
        console.error('[Supabase] Metadata Upload Error:', {
            code: error.code,
            message: error.message,
            details: error.details,
            hint: error.hint
        });
        throw error;
    }
    console.log('[Supabase] Metadata uploaded successfully:', data?.[0]?.id);
    return data;
}
async function loadCIDsFromSupabase(_currentDeviceId, userKeyHash) {
    if (!userKeyHash) {
        console.error('loadCIDsFromSupabase: userKeyHash is required');
        return [];
    }
    // Try API proxy first (avoids CORS issues)
    try {
        const response = await fetch('/api/supabase/proxy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action: 'loadCIDs',
                userKeyHash
            })
        });
        const result = await response.json();
        if (result.success) {
            console.log('[Supabase] CIDs loaded via proxy:', result.data?.length);
            return result.data || [];
        }
        console.warn('[Supabase] Proxy failed, trying direct client:', result.error);
    } catch (err) {
        console.warn('[Supabase] Proxy error, trying direct client:', err);
    }
    // Fallback to direct client
    const { data, error } = await supabase.from('photos_metadata').select('cid, device_id, uploaded_at, file_size_bytes, nonce, mime_type').eq('user_key_hash', userKeyHash).order('uploaded_at', {
        ascending: false
    });
    if (error) {
        console.error('Supabase Load Error:', error);
        throw error;
    }
    return data || [];
}
async function cidExistsInSupabase(cid, userKeyHash) {
    if (!userKeyHash) return false;
    const { data, error } = await supabase.from('photos_metadata').select('id').eq('cid', cid).eq('user_key_hash', userKeyHash).single();
    if (error && error.code !== 'PGRST116') {
        // PGRST116 = no rows returned, which is expected
        console.error('Supabase Check Error:', error);
    }
    return !!data;
}
async function deletePhotoMetadata(cid) {
    // Try API proxy first (avoids CORS issues)
    try {
        const response = await fetch('/api/supabase/proxy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action: 'deleteMetadata',
                cid
            })
        });
        const result = await response.json();
        if (result.success) {
            console.log('[Supabase] Metadata deleted via proxy');
            return;
        }
        console.warn('[Supabase] Proxy failed, trying direct client:', result.error);
    } catch (err) {
        console.warn('[Supabase] Proxy error, trying direct client:', err);
    }
    // Fallback to direct client
    const { error } = await supabase.from('photos_metadata').delete().eq('cid', cid);
    if (error) {
        console.error('Supabase Delete Error:', error);
        throw error;
    }
}
async function registerDevice(id, deviceName, deviceType, userKeyHash, userId) {
    // Validate userKeyHash - required for RLS
    if (!userKeyHash || userKeyHash.length === 0) {
        console.error('registerDevice: userKeyHash is required');
        throw new Error('userKeyHash is required for device registration');
    }
    // Try API proxy first (avoids CORS issues)
    try {
        const response = await fetch('/api/supabase/proxy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action: 'registerDevice',
                id,
                deviceName,
                deviceType,
                userKeyHash,
                userId
            })
        });
        const result = await response.json();
        if (result.success) {
            console.log('[Supabase] Device registered via proxy:', result.updated ? 'updated' : 'inserted');
            return true;
        }
        console.warn('[Supabase] Proxy failed, trying direct client:', result.error);
    } catch (err) {
        console.warn('[Supabase] Proxy error, trying direct client:', err);
    }
    // Fallback to direct client
    const devicePayload = {
        device_name: deviceName,
        device_type: deviceType,
        user_key_hash: userKeyHash,
        user_id: userId
    };
    const { data: existingDevice } = await supabase.from('devices').select('id').eq('user_id', userId).eq('device_name', deviceName).eq('device_type', deviceType || '').single();
    if (existingDevice) {
        const { error: updateError } = await supabase.from('devices').update({
            device_name: deviceName,
            device_type: deviceType,
            user_key_hash: userKeyHash
        }).eq('id', existingDevice.id);
        if (updateError) {
            console.error('[Supabase] Device Update Error:', updateError);
            throw updateError;
        }
        console.log('[Supabase] Device updated:', existingDevice.id);
        return true;
    }
    const { error } = await supabase.from('devices').insert({
        id,
        ...devicePayload
    });
    if (error) {
        if (error.message?.includes('Device limit exceeded')) {
            throw new Error('DEVICE_LIMIT_EXCEEDED');
        }
        console.error('[Supabase] Device Insert Error:', error);
        throw error;
    }
    console.log('[Supabase] Device inserted:', id);
    return true;
}
async function getDevicesForUser(userKeyHash) {
    const { data, error } = await supabase.from('devices').select('*').eq('user_key_hash', userKeyHash).order('created_at', {
        ascending: false
    });
    if (error) {
        console.error('Supabase Get Devices Error:', error);
        throw error;
    }
    return data || [];
}
async function getPhotoMetadataByCID(cid) {
    const { data, error } = await supabase.from('photos_metadata').select('*').eq('cid', cid).single();
    if (error && error.code !== 'PGRST116') {
        console.error('Supabase Get Photo Error:', error);
        throw error;
    }
    return data;
}
async function getStorageUsage(userKeyHash) {
    if (!userKeyHash) return 0;
    // Try API proxy first
    try {
        const response = await fetch('/api/supabase/proxy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action: 'getStorageUsage',
                userKeyHash
            })
        });
        const result = await response.json();
        if (result.success) {
            return result.data || 0;
        }
    } catch (err) {
        console.warn('[Supabase] Proxy error for storage usage, trying direct client:', err);
    }
    // Fallback to direct client
    const { data, error } = await supabase.from('photos_metadata').select('file_size_bytes').eq('user_key_hash', userKeyHash);
    if (error) {
        console.error('Supabase Storage Usage Error:', error);
        return 0;
    }
    return data?.reduce((acc, p)=>acc + (p.file_size_bytes || 0), 0) || 0;
}
}),
"[project]/src/app/actions/access-code.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40003a25422ed5c5aa4fec199d85b49fc094cff873":"verifyAccessCode","403971959a83329f22f495c112a2ae684f1d3f48f5":"consumeAccessCode"},"",""] */ __turbopack_context__.s([
    "consumeAccessCode",
    ()=>consumeAccessCode,
    "verifyAccessCode",
    ()=>verifyAccessCode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function verifyAccessCode(code) {
    if (!code || code.trim().length === 0) {
        return {
            success: false,
            message: "Code is required"
        };
    }
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].from("access_codes").select("id, is_used").eq("code", code.trim()).single();
        if (error || !data) {
            return {
                success: false,
                message: "Invalid access code"
            };
        }
        if (data.is_used) {
            return {
                success: false,
                message: "This code has already been used"
            };
        }
        return {
            success: true
        };
    } catch (error) {
        console.error("Verification error:", error);
        return {
            success: false,
            message: "Failed to verify code"
        };
    }
}
async function consumeAccessCode(code) {
    if (!code) return {
        success: false
    };
    try {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].from("access_codes").update({
            is_used: true
        }).eq("code", code.trim());
        if (error) {
            console.error("Failed to consume code:", error);
            return {
                success: false,
                error: error.message
            };
        }
        return {
            success: true
        };
    } catch (error) {
        console.error("Consume error:", error);
        return {
            success: false,
            error: "Internal error"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    verifyAccessCode,
    consumeAccessCode
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(verifyAccessCode, "40003a25422ed5c5aa4fec199d85b49fc094cff873", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(consumeAccessCode, "403971959a83329f22f495c112a2ae684f1d3f48f5", null);
}),
"[project]/.next-internal/server/app/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions/access-code.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$access$2d$code$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/access-code.ts [app-rsc] (ecmascript)");
;
;
}),
"[project]/.next-internal/server/app/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions/access-code.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40003a25422ed5c5aa4fec199d85b49fc094cff873",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$access$2d$code$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyAccessCode"],
    "403971959a83329f22f495c112a2ae684f1d3f48f5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$access$2d$code$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["consumeAccessCode"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$access$2d$code$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions/access-code.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$access$2d$code$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/access-code.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4cf5452f._.js.map