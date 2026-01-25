module.exports = [
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/src/components/ui/custom-icon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomIcon",
    ()=>CustomIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const ICONS = {
    key: "/key.svg",
    lock: "/lock.svg",
    shield: "/shield.svg",
    upload: "/upload.svg",
    smartphone: "/smartphone.svg",
    cloud: "/cloud.svg",
    clock: "/clock.svg",
    search: "/search.svg",
    image: "/image.svg",
    folder: "/Openfolder.svg",
    refresh: "/RefreshCw.svg",
    chevronRight: "/ChevronRight.svg"
};
function CustomIcon({ name, className, size = 24 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative inline-block shrink-0", className),
        style: {
            width: size,
            height: size
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            src: ICONS[name],
            alt: name,
            fill: true,
            className: "object-contain",
            unoptimized: true
        }, void 0, false, {
            fileName: "[project]/src/components/ui/custom-icon.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/custom-icon.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/shield-loader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-ssr] (ecmascript) <export default as Image>");
;
;
;
/**
 * Ein Ladebildschirm, der ein Schild aus vielen einzelnen Partikeln aufbaut.
 * Jedes Partikel erscheint mit einer leichten Verzögerung und einem "Rauch"-Effekt,
 * um einen dynamischen und modernen Ladeeffekt zu erzeugen.
 */ const ShieldLoader = ()=>{
    // Anzahl der Partikel, aus denen das Schild aufgebaut wird.
    const particleCount = 150;
    return(// Der Hauptcontainer, der den gesamten Bildschirm einnimmt
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "loader-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "peeking-photo-icon",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                    strokeWidth: 1.5
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/shield-loader.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/shield-loader.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shield-container",
                children: [
                    Array.from({
                        length: particleCount
                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "particle",
                            // Deterministische Verzögerung (SPEED UP: Faktor 0.25 -> 0.1, 0.05 -> 0.02)
                            style: {
                                animationDelay: `${i % 10 * 0.1 + Math.floor(i / 10) * 0.02}s`
                            }
                        }, i, false, {
                            fileName: "[project]/src/components/ui/shield-loader.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shield-structure",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "structure-line line-1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/shield-loader.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "structure-line line-2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/shield-loader.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "structure-line line-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/shield-loader.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "structure-line line-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/shield-loader.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/shield-loader.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/shield-loader.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "loading-text",
                children: "LÄDT..."
            }, void 0, false, {
                fileName: "[project]/src/components/ui/shield-loader.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/shield-loader.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
};
const __TURBOPACK__default__export__ = ShieldLoader;
}),
"[project]/src/lib/auth-client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authClient",
    ()=>authClient,
    "getSession",
    ()=>getSession,
    "signIn",
    ()=>signIn,
    "signOut",
    ()=>signOut,
    "signUp",
    ()=>signUp,
    "useSession",
    ()=>useSession
]);
/**
 * Better Auth Client Configuration
 *
 * React hooks for authentication in client components.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$react$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/better-auth/dist/client/react/index.mjs [app-ssr] (ecmascript) <locals>");
;
const authClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$react$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAuthClient"])({
    baseURL: ("TURBOPACK compile-time value", "https://photovault-mu.vercel.app") || "http://localhost:3000"
});
const { signIn, signUp, signOut, useSession, getSession } = authClient;
}),
"[project]/src/components/photovault/AuthScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthScreen",
    ()=>AuthScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-ssr] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/custom-icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth-client.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function AuthScreen({ onSuccess }) {
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("welcome");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleLogin = async ()=>{
        if (!email || !password) {
            setError("Bitte E-Mail und Passwort eingeben");
            return;
        }
        setIsLoading(true);
        setError(null);
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signIn"].email({
                email,
                password
            });
            if (result.error) {
                setError(result.error.message || "Anmeldung fehlgeschlagen");
                return;
            }
            if (result.data?.user) {
                onSuccess({
                    id: result.data.user.id,
                    email: result.data.user.email,
                    vaultKeyHash: result.data.user.vault_key_hash || null
                });
            }
        } catch (err) {
            console.error("Login error:", err);
            setError("Ein Fehler ist aufgetreten. Bitte versuche es erneut.");
        } finally{
            setIsLoading(false);
        }
    };
    const handleSignup = async ()=>{
        if (!email || !password || !name) {
            setError("Bitte alle Felder ausfuellen");
            return;
        }
        if (password.length < 8) {
            setError("Passwort muss mindestens 8 Zeichen haben");
            return;
        }
        setIsLoading(true);
        setError(null);
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signUp"].email({
                email,
                password,
                name
            });
            if (result.error) {
                setError(result.error.message || "Registrierung fehlgeschlagen");
                return;
            }
            if (result.data?.user) {
                onSuccess({
                    id: result.data.user.id,
                    email: result.data.user.email,
                    vaultKeyHash: null
                });
            }
        } catch (err) {
            console.error("Signup error:", err);
            setError("Ein Fehler ist aufgetreten. Bitte versuche es erneut.");
        } finally{
            setIsLoading(false);
        }
    };
    // Welcome Screen
    if (mode === "welcome") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col px-6 pt-16 pb-8 safe-area-inset bg-[#FAFBFC]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col items-center justify-center text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-28 h-28 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "absolute inset-0 w-full h-full",
                                    viewBox: "0 0 100 100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M 10 10 Q 30 5, 50 10 Q 70 5, 90 10 Q 95 30, 90 50 Q 95 70, 90 90 Q 70 95, 50 90 Q 30 95, 10 90 Q 5 70, 10 50 Q 5 30, 10 10 Z",
                                        fill: "white",
                                        stroke: "#2563EB",
                                        strokeWidth: "3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                        lineNumber: 107,
                                        columnNumber: 30
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                    lineNumber: 106,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 w-full h-full flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomIcon"], {
                                        name: "shield",
                                        size: 56,
                                        className: "text-[#2563EB]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                        lineNumber: 115,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                    lineNumber: 114,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                            lineNumber: 105,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "sketch-heading text-[42px] mb-3",
                            children: "PhotoVault"
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                            lineNumber: 119,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "sketch-body text-[#3B82F6] max-w-[280px] mb-12",
                            children: "Sichere deine Fotos mit Zero-Knowledge Verschluesselung"
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                            lineNumber: 122,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-[320px] space-y-4 mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureItem, {
                                    icon: "lock",
                                    text: "Ende-zu-Ende verschluesselt"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                    lineNumber: 128,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureItem, {
                                    icon: "smartphone",
                                    text: "Multi-Device Sync"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                    lineNumber: 129,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureItem, {
                                    icon: "cloud",
                                    text: "Dezentrales IPFS Backup"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                    lineNumber: 130,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                            lineNumber: 127,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                    lineNumber: 103,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMode("signup"),
                            className: "relative w-full h-[60px] group transition-transform active:scale-95",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "absolute inset-0 w-full h-full",
                                    preserveAspectRatio: "none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M 2 5 Q 25 2, 50 5 Q 75 2, 98 5 Q 99 30, 98 60 Q 75 63, 50 60 Q 25 63, 2 60 Q 1 30, 2 5 Z",
                                        fill: "#2563EB",
                                        stroke: "#1E40AF",
                                        strokeWidth: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                        lineNumber: 141,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                    lineNumber: 140,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative z-10 text-white sketch-subheading text-lg",
                                    children: "Konto erstellen"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                    lineNumber: 148,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                            lineNumber: 136,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMode("login"),
                            className: "w-full py-2 sketch-body text-[#2563EB] hover:text-[#1E40AF] transition-colors",
                            children: "Ich habe bereits ein Konto"
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                            lineNumber: 153,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                    lineNumber: 135,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/photovault/AuthScreen.tsx",
            lineNumber: 102,
            columnNumber: 13
        }, this);
    }
    // Login / Signup Form
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-3d182ede277f5a6d" + " " + "min-h-screen flex flex-col px-6 pt-12 pb-8 safe-area-inset bg-[#FAFBFC]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setMode("welcome"),
                className: "jsx-3d182ede277f5a6d" + " " + "self-start sketch-body text-[#2563EB] mb-8 ios-tap-target flex items-center gap-2",
                children: "← Zurueck"
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                lineNumber: 168,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3d182ede277f5a6d" + " " + "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "jsx-3d182ede277f5a6d" + " " + "sketch-heading text-[32px] mb-2",
                        children: mode === "login" ? "Willkommen zurueck" : "Konto erstellen"
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                        lineNumber: 176,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jsx-3d182ede277f5a6d" + " " + "sketch-body text-[#3B82F6] mb-8",
                        children: mode === "login" ? "Melde dich an, um auf deinen Vault zuzugreifen" : "Erstelle ein Konto, um deinen Vault zu sichern"
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                        lineNumber: 179,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3d182ede277f5a6d" + " " + "space-y-6",
                        children: [
                            mode === "signup" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3d182ede277f5a6d" + " " + "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: name,
                                        onChange: (e)=>setName(e.target.value),
                                        placeholder: "Name",
                                        className: "jsx-3d182ede277f5a6d" + " " + "sketch-input-field"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                        lineNumber: 189,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                        className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2563EB]/40"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                        lineNumber: 196,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                lineNumber: 188,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3d182ede277f5a6d" + " " + "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        value: email,
                                        onChange: (e)=>setEmail(e.target.value),
                                        placeholder: "E-Mail",
                                        autoComplete: "email",
                                        className: "jsx-3d182ede277f5a6d" + " " + "sketch-input-field"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                        lineNumber: 201,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                        className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2563EB]/40"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                        lineNumber: 209,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                lineNumber: 200,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3d182ede277f5a6d" + " " + "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: showPassword ? "text" : "password",
                                        value: password,
                                        onChange: (e)=>setPassword(e.target.value),
                                        placeholder: "Passwort",
                                        autoComplete: mode === "login" ? "current-password" : "new-password",
                                        className: "jsx-3d182ede277f5a6d" + " " + "sketch-input-field"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                        lineNumber: 213,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                        className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2563EB]/40"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                        lineNumber: 221,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setShowPassword(!showPassword),
                                        className: "jsx-3d182ede277f5a6d" + " " + "absolute right-4 top-1/2 -translate-y-1/2 text-[#2563EB]/40",
                                        children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                            lineNumber: 228,
                                            columnNumber: 33
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                            lineNumber: 230,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                        lineNumber: 222,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                lineNumber: 212,
                                columnNumber: 21
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3d182ede277f5a6d" + " " + "relative py-3 px-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        preserveAspectRatio: "none",
                                        className: "jsx-3d182ede277f5a6d" + " " + "absolute inset-0 w-full h-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M 2 5 Q 25 2, 50 5 Q 75 2, 98 5 Q 99 30, 98 60 Q 75 63, 50 60 Q 25 63, 2 60 Q 1 30, 2 5 Z",
                                            fill: "#FF3B3010",
                                            stroke: "#FF3B30",
                                            strokeWidth: "1",
                                            className: "jsx-3d182ede277f5a6d"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                            lineNumber: 238,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                        lineNumber: 237,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-3d182ede277f5a6d" + " " + "relative z-10 sketch-body text-[#FF3B30] text-center text-sm",
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                        lineNumber: 245,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                lineNumber: 236,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                        lineNumber: 186,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                lineNumber: 175,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3d182ede277f5a6d" + " " + "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: mode === "login" ? handleLogin : handleSignup,
                        disabled: isLoading,
                        className: "jsx-3d182ede277f5a6d" + " " + "relative w-full h-[60px] group transition-transform active:scale-95 disabled:opacity-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                preserveAspectRatio: "none",
                                className: "jsx-3d182ede277f5a6d" + " " + "absolute inset-0 w-full h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M 2 5 Q 25 2, 50 5 Q 75 2, 98 5 Q 99 30, 98 60 Q 75 63, 50 60 Q 25 63, 2 60 Q 1 30, 2 5 Z",
                                    fill: "#2563EB",
                                    stroke: "#1E40AF",
                                    strokeWidth: "2",
                                    className: "jsx-3d182ede277f5a6d"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                    lineNumber: 259,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                lineNumber: 258,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-3d182ede277f5a6d" + " " + "relative z-10 text-white sketch-subheading text-lg flex items-center justify-center gap-2",
                                children: [
                                    isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Loader2, {
                                        className: "w-5 h-5 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                        lineNumber: 267,
                                        columnNumber: 39
                                    }, this),
                                    mode === "login" ? "Anmelden" : "Registrieren"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                lineNumber: 266,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                        lineNumber: 253,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMode(mode === "login" ? "signup" : "login"),
                        className: "jsx-3d182ede277f5a6d" + " " + "w-full py-2 sketch-body text-[#2563EB] hover:text-[#1E40AF] transition-colors",
                        children: mode === "login" ? "Noch kein Konto? Registrieren" : "Bereits ein Konto? Anmelden"
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                        lineNumber: 272,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                lineNumber: 252,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "3d182ede277f5a6d",
                children: ".sketch-input-field.jsx-3d182ede277f5a6d{color:#1d1d1f;background-color:#0000;border:2px solid #2563eb;border-radius:12px;width:100%;height:54px;padding-left:3rem;padding-right:1rem;font-family:Architects Daughter,cursive;font-size:17px;transition:border-color .2s}.sketch-input-field.jsx-3d182ede277f5a6d:focus{border-color:#1e40af;outline:none}.sketch-input-field.jsx-3d182ede277f5a6d::placeholder{color:#8e8e93}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
        lineNumber: 166,
        columnNumber: 9
    }, this);
}
function FeatureItem({ icon, text }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "absolute inset-0 w-full h-full",
                preserveAspectRatio: "none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 2 2 Q 25 -1, 50 2 Q 75 -1, 98 2 Q 100 25, 98 50 Q 75 53, 50 50 Q 25 53, 2 50 Q 0 25, 2 2 Z",
                    fill: "white",
                    stroke: "#2563EB40",
                    strokeWidth: "1.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                    lineNumber: 313,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                lineNumber: 312,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex items-center gap-4 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 rounded-full flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomIcon"], {
                            name: icon,
                            size: 24,
                            className: "text-[#2563EB]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                            lineNumber: 322,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                        lineNumber: 321,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sketch-body text-base text-[#1E40AF]",
                        children: text
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                        lineNumber: 324,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                lineNumber: 320,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
        lineNumber: 310,
        columnNumber: 9
    }, this);
}
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/src/lib/crypto.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearKeyFromStorage",
    ()=>clearKeyFromStorage,
    "decrypt",
    ()=>decrypt,
    "decryptFile",
    ()=>decryptFile,
    "encrypt",
    ()=>encrypt,
    "encryptFile",
    ()=>encryptFile,
    "generateKeyPair",
    ()=>generateKeyPair,
    "getUserKeyHash",
    ()=>getUserKeyHash,
    "keyToRecoveryPhrase",
    ()=>keyToRecoveryPhrase,
    "loadKeyFromStorage",
    ()=>loadKeyFromStorage,
    "recoveryPhraseToKey",
    ()=>recoveryPhraseToKey,
    "saveKeyToStorage",
    ()=>saveKeyToStorage
]);
/**
 * Crypto Layer - Client-Side Encryption mit tweetnacl
 * Alle Daten werden VOR dem Upload verschlüsselt
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2f$nacl$2d$fast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tweetnacl/nacl-fast.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2d$util$2f$nacl$2d$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tweetnacl-util/nacl-util.js [app-ssr] (ecmascript)");
;
;
function generateKeyPair() {
    const keyPair = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2f$nacl$2d$fast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].box.keyPair();
    return {
        publicKey: keyPair.publicKey,
        secretKey: keyPair.secretKey
    };
}
function keyToRecoveryPhrase(secretKey) {
    const base64 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2d$util$2f$nacl$2d$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeBase64"])(secretKey);
    // Für MVP: Base64 in Chunks aufteilen
    // TODO: BIP39 Wordlist für bessere UX
    return base64.match(/.{1,8}/g)?.join('-') || base64;
}
function recoveryPhraseToKey(phrase) {
    const base64 = phrase.replace(/-/g, '');
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2d$util$2f$nacl$2d$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeBase64"])(base64);
}
function encrypt(data, secretKey) {
    const nonce = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2f$nacl$2d$fast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].randomBytes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2f$nacl$2d$fast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].secretbox.nonceLength);
    const ciphertext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2f$nacl$2d$fast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].secretbox(data, nonce, secretKey);
    return {
        ciphertext: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2d$util$2f$nacl$2d$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeBase64"])(ciphertext),
        nonce: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2d$util$2f$nacl$2d$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeBase64"])(nonce)
    };
}
function decrypt(encrypted, secretKey) {
    const ciphertext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2d$util$2f$nacl$2d$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeBase64"])(encrypted.ciphertext);
    const nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2d$util$2f$nacl$2d$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeBase64"])(encrypted.nonce);
    const decrypted = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2f$nacl$2d$fast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].secretbox.open(ciphertext, nonce, secretKey);
    return decrypted;
}
async function encryptFile(file, secretKey) {
    const arrayBuffer = await file.arrayBuffer();
    const data = new Uint8Array(arrayBuffer);
    const encrypted = encrypt(data, secretKey);
    // Konvertiere Base64 zurück zu Blob für Storage
    const ciphertextBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2d$util$2f$nacl$2d$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeBase64"])(encrypted.ciphertext);
    const blob = new Blob([
        ciphertextBytes
    ], {
        type: 'application/octet-stream'
    });
    return {
        encrypted: blob,
        nonce: encrypted.nonce
    };
}
async function decryptFile(encryptedBlob, nonce, secretKey, originalMimeType) {
    const arrayBuffer = await encryptedBlob.arrayBuffer();
    const ciphertext = new Uint8Array(arrayBuffer);
    const encrypted = {
        ciphertext: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2d$util$2f$nacl$2d$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeBase64"])(ciphertext),
        nonce
    };
    const decrypted = decrypt(encrypted, secretKey);
    if (!decrypted) return null;
    return new Blob([
        decrypted
    ], {
        type: originalMimeType
    });
}
async function getUserKeyHash(secretKey) {
    const msgUint8 = new TextEncoder().encode((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2d$util$2f$nacl$2d$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeBase64"])(secretKey));
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b)=>b.toString(16).padStart(2, '0')).join('').slice(0, 16);
}
function saveKeyToStorage(secretKey, password) {
    if (password) {
    // TODO: Key Derivation mit PBKDF2
    // Für MVP: Direkt speichern
    }
    const encoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2d$util$2f$nacl$2d$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeBase64"])(secretKey);
    localStorage.setItem('photovault_secret_key', encoded);
}
function loadKeyFromStorage() {
    const encoded = localStorage.getItem('photovault_secret_key');
    if (!encoded) return null;
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2d$util$2f$nacl$2d$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeBase64"])(encoded);
    } catch  {
        return null;
    }
}
function clearKeyFromStorage() {
    localStorage.removeItem('photovault_secret_key');
}
}),
"[project]/src/components/photovault/UnlockVaultScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UnlockVaultScreen",
    ()=>UnlockVaultScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/custom-icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/crypto.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function UnlockVaultScreen({ userEmail, expectedKeyHash, onUnlock, onCreateNewVault, onLogout }) {
    const [phrase, setPhrase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isUnlocking, setIsUnlocking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleUnlock = async ()=>{
        if (!phrase.trim()) {
            setError("Bitte gib deine Recovery-Phrase ein");
            return;
        }
        setIsUnlocking(true);
        setError(null);
        try {
            // Normalize input
            const normalizedPhrase = phrase.trim().replace(/[\s\n]+/g, "-").replace(/-+/g, "-");
            // Try to decode the key
            const secretKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recoveryPhraseToKey"])(normalizedPhrase);
            if (!secretKey || secretKey.length !== 32) {
                setError("Ungueltige Recovery-Phrase");
                setIsUnlocking(false);
                return;
            }
            // Calculate key hash
            const keyHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserKeyHash"])(secretKey);
            // If user already has a vault, verify the key hash matches
            if (expectedKeyHash && keyHash !== expectedKeyHash) {
                setError("Diese Recovery-Phrase gehoert nicht zu diesem Konto. Bitte ueberpruefe deine Eingabe.");
                setIsUnlocking(false);
                return;
            }
            // Save key to local storage
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveKeyToStorage"])(secretKey);
            // Success
            onUnlock(secretKey, keyHash);
        } catch (err) {
            console.error("Unlock error:", err);
            setError("Ungueltige Recovery-Phrase. Bitte ueberpruefe deine Eingabe.");
        } finally{
            setIsUnlocking(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col px-6 pt-12 pb-8 safe-area-inset bg-[#F2F2F7]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[13px] text-[#6E6E73]",
                        children: [
                            "Angemeldet als",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                                lineNumber: 87,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#1D1D1F] font-medium",
                                children: userEmail
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                                lineNumber: 88,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                        lineNumber: 85,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onLogout,
                        className: "text-[#FF3B30] text-[15px] ios-tap-target",
                        children: "Abmelden"
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                        lineNumber: 90,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                lineNumber: 84,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center text-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-20 rounded-full bg-[#007AFF]/10 flex items-center justify-center mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomIcon"], {
                                    name: "lock",
                                    size: 40
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                                    lineNumber: 102,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                                lineNumber: 101,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "sf-pro-display text-[28px] font-bold text-[#1D1D1F] mb-2",
                                children: "Vault entsperren"
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                                lineNumber: 104,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[15px] text-[#6E6E73] max-w-[300px]",
                                children: expectedKeyHash ? "Gib deine Recovery-Phrase ein, um auf deine verschluesselten Fotos zuzugreifen" : "Du hast noch keinen Vault. Erstelle einen neuen oder stelle einen bestehenden wieder her."
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                                lineNumber: 107,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                        lineNumber: 100,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-[13px] text-[#6E6E73] mb-2 block",
                                children: "Recovery-Phrase (12 Woerter)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                                lineNumber: 116,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: phrase,
                                onChange: (e)=>{
                                    setPhrase(e.target.value);
                                    setError(null);
                                },
                                placeholder: "abc123XY-def456AB-ghi789CD-...",
                                className: "w-full h-[120px] bg-white rounded-xl p-4 text-[15px] text-[#1D1D1F] font-mono resize-none border border-[#E5E5EA] focus:border-[#007AFF] focus:outline-none transition-colors"
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                                lineNumber: 119,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[12px] text-[#8E8E93] mt-2",
                                children: "Mit Bindestrichen oder Leerzeichen getrennt"
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                                lineNumber: 128,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                        lineNumber: 115,
                        columnNumber: 17
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#FF3B30]/10 rounded-xl p-3 mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[14px] text-[#FF3B30] text-center",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                            lineNumber: 135,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                        lineNumber: 134,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#007AFF]/5 rounded-xl p-4 mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                    className: "w-5 h-5 text-[#007AFF] mt-0.5 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                                    lineNumber: 142,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[13px] text-[#1D1D1F] font-medium mb-1",
                                            children: "Warum brauche ich die Phrase?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                                            lineNumber: 144,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[12px] text-[#6E6E73]",
                                            children: "Deine Fotos sind lokal verschluesselt. Nur mit der Recovery-Phrase kannst du sie entschluesseln. Wir speichern sie niemals."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                                            lineNumber: 147,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                                    lineNumber: 143,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                            lineNumber: 141,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                        lineNumber: 140,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                lineNumber: 98,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleUnlock,
                        disabled: isUnlocking || !phrase.trim(),
                        className: "w-full h-[54px] bg-[#007AFF] text-white text-[17px] font-semibold rounded-2xl ios-tap-target disabled:opacity-50 flex items-center justify-center",
                        children: isUnlocking ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                            lineNumber: 164,
                            columnNumber: 25
                        }, this) : "Vault entsperren"
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                        lineNumber: 158,
                        columnNumber: 17
                    }, this),
                    !expectedKeyHash && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onCreateNewVault,
                        className: "w-full h-[50px] text-[#007AFF] text-[17px] ios-tap-target",
                        children: "Neuen Vault erstellen"
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                        lineNumber: 171,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                lineNumber: 157,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
        lineNumber: 82,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/hooks/use-encryption.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEncryption",
    ()=>useEncryption
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/crypto.ts [app-ssr] (ecmascript)");
/**
 * useEncryption Hook - Key Management
 */ "use client";
;
;
function useEncryption() {
    const [secretKey, setSecretKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isInitialized, setIsInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [recoveryPhrase, setRecoveryPhrase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isGeneratingKey, setIsGeneratingKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userKeyHash, setUserKeyHash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Load key on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadKey = async ()=>{
            const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadKeyFromStorage"])();
            if (key) {
                setSecretKey(key);
                setRecoveryPhrase((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyToRecoveryPhrase"])(key));
                const hash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserKeyHash"])(key);
                setUserKeyHash(hash);
            }
            setIsInitialized(true);
        };
        loadKey();
    }, []);
    // Generate new key
    const generateNewKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        return new Promise((resolve)=>{
            setIsGeneratingKey(true);
            // Simulate key generation time
            setTimeout(async ()=>{
                const keyPair = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateKeyPair"])();
                const key = keyPair.secretKey;
                setSecretKey(key);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveKeyToStorage"])(key);
                const phrase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyToRecoveryPhrase"])(key);
                setRecoveryPhrase(phrase);
                const hash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserKeyHash"])(key);
                setUserKeyHash(hash);
                setIsGeneratingKey(false);
                resolve(phrase);
            }, 1500);
        });
    }, []);
    // Restore from recovery phrase
    const restoreFromPhrase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((phrase)=>{
        try {
            const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recoveryPhraseToKey"])(phrase);
            setSecretKey(key);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveKeyToStorage"])(key);
            setRecoveryPhrase(phrase);
            return true;
        } catch  {
            return false;
        }
    }, []);
    // Logout / Clear key
    const clearKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setSecretKey(null);
        setRecoveryPhrase(null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearKeyFromStorage"])();
    }, []);
    return {
        secretKey,
        isInitialized,
        hasKey: !!secretKey,
        recoveryPhrase,
        userKeyHash,
        isGeneratingKey,
        generateNewKey,
        restoreFromPhrase,
        clearKey
    };
}
}),
"[project]/src/components/photovault/VaultSetupScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VaultSetupScreen",
    ()=>VaultSetupScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/custom-icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$shield$2d$loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/shield-loader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$encryption$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-encryption.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function VaultSetupScreen({ userId, onComplete, onBack }) {
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("intro");
    const [phraseConfirmed, setPhraseConfirmed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { isGeneratingKey, generateNewKey, recoveryPhrase, userKeyHash } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$encryption$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEncryption"])();
    const handleCreateVault = async ()=>{
        setStep("generating");
        try {
            await generateNewKey();
            setStep("phrase");
        } catch (err) {
            console.error("Failed to generate key:", err);
            setStep("intro");
        }
    };
    const handleCopyPhrase = async ()=>{
        if (recoveryPhrase) {
            await navigator.clipboard.writeText(recoveryPhrase);
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        }
    };
    const handleConfirmPhrase = ()=>{
        if (userKeyHash) {
            onComplete(userKeyHash);
        }
    };
    // Parse phrase into words for display
    const phraseWords = recoveryPhrase?.split("-").slice(0, 12) || [];
    // Show loader during key generation
    if (step === "generating" || isGeneratingKey) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$shield$2d$loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
            lineNumber: 54,
            columnNumber: 16
        }, this);
    }
    // Intro step
    if (step === "intro") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col px-6 pt-12 pb-8 safe-area-inset bg-[#F2F2F7]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onBack,
                    className: "self-start text-[#007AFF] text-[17px] mb-8 ios-tap-target",
                    children: "Zurueck"
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                    lineNumber: 61,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col items-center justify-center text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-20 h-20 rounded-full bg-[#007AFF]/10 flex items-center justify-center mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomIcon"], {
                                name: "key",
                                size: 40
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                lineNumber: 70,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                            lineNumber: 69,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "sf-pro-display text-[28px] font-bold text-[#1D1D1F] mb-3",
                            children: "Erstelle deinen Vault"
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                            lineNumber: 73,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[17px] text-[#6E6E73] max-w-[300px] mb-8",
                            children: "Dein persoenlicher Verschluesselungsschluessel schuetzt alle deine Fotos"
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                            lineNumber: 76,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-[320px] space-y-3 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-xl p-4 flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-full bg-[#30D158]/10 flex items-center justify-center flex-shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                className: "w-5 h-5 text-[#30D158]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                                lineNumber: 84,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                            lineNumber: 83,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[15px] text-[#1D1D1F] font-medium",
                                                    children: "Zero-Knowledge"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[13px] text-[#6E6E73]",
                                                    children: "Nur du kannst deine Fotos entschluesseln"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                            lineNumber: 86,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                    lineNumber: 82,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-xl p-4 flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-full bg-[#30D158]/10 flex items-center justify-center flex-shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                className: "w-5 h-5 text-[#30D158]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                                lineNumber: 96,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                            lineNumber: 95,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[15px] text-[#1D1D1F] font-medium",
                                                    children: "Recovery-Phrase"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[13px] text-[#6E6E73]",
                                                    children: "12 Woerter zum Wiederherstellen auf neuen Geraeten"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                            lineNumber: 98,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                    lineNumber: 94,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-xl p-4 flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-full bg-[#30D158]/10 flex items-center justify-center flex-shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                className: "w-5 h-5 text-[#30D158]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                                lineNumber: 108,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                            lineNumber: 107,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[15px] text-[#1D1D1F] font-medium",
                                                    children: "Multi-Device"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[13px] text-[#6E6E73]",
                                                    children: "Synchronisiere bis zu 3 Geraete"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                            lineNumber: 110,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                    lineNumber: 106,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                            lineNumber: 81,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                    lineNumber: 68,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleCreateVault,
                    className: "w-full h-[54px] bg-[#007AFF] text-white text-[17px] font-semibold rounded-2xl ios-tap-target shadow-lg shadow-[#007AFF]/25",
                    children: "Vault erstellen"
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                    lineNumber: 120,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
            lineNumber: 60,
            columnNumber: 13
        }, this);
    }
    // Show recovery phrase
    if (step === "phrase") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col px-6 pt-12 pb-8 safe-area-inset bg-[#F2F2F7]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "sf-pro-display text-[28px] font-bold text-[#1D1D1F] mb-2",
                                    children: "Deine Recovery-Phrase"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                    lineNumber: 136,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[15px] text-[#6E6E73]",
                                    children: "Notiere diese Woerter sicher. Du brauchst sie zur Wiederherstellung."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                    lineNumber: 139,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                            lineNumber: 135,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 gap-2 mb-4",
                            children: phraseWords.map((word, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg p-3 text-center border border-[#E5E5EA]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] text-[#8E8E93] block mb-0.5",
                                            children: index + 1
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                            lineNumber: 151,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[14px] text-[#1D1D1F] font-mono break-all",
                                            children: word
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                            lineNumber: 154,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                    lineNumber: 147,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                            lineNumber: 145,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleCopyPhrase,
                            className: "w-full flex items-center justify-center gap-2 py-3 text-[#007AFF] text-[15px] ios-tap-target mb-4",
                            children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                        lineNumber: 168,
                                        columnNumber: 33
                                    }, this),
                                    "Kopiert!"
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                        lineNumber: 173,
                                        columnNumber: 33
                                    }, this),
                                    "Phrase kopieren"
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                            lineNumber: 162,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#FF3B30]/10 rounded-xl p-4 mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[13px] text-[#FF3B30] text-center",
                                children: "Teile diese Woerter niemals mit anderen. Wer sie hat, kann auf deine Fotos zugreifen."
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                lineNumber: 181,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                            lineNumber: 180,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setPhraseConfirmed(!phraseConfirmed),
                            className: "w-full flex items-center gap-3 p-4 bg-white rounded-xl ios-tap-target",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${phraseConfirmed ? "bg-[#007AFF] border-[#007AFF]" : "border-[#C7C7CC]"}`,
                                    children: phraseConfirmed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "w-4 h-4 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                        lineNumber: 197,
                                        columnNumber: 49
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                    lineNumber: 192,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[17px] text-[#1D1D1F]",
                                    children: "Ich habe die Woerter sicher gespeichert"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                    lineNumber: 199,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                            lineNumber: 188,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                    lineNumber: 134,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleConfirmPhrase,
                    disabled: !phraseConfirmed,
                    className: `w-full h-[54px] text-[17px] font-semibold rounded-2xl ios-tap-target transition-colors ${phraseConfirmed ? "bg-[#007AFF] text-white shadow-lg shadow-[#007AFF]/25" : "bg-[#E5E5EA] text-[#8E8E93]"}`,
                    children: "Weiter"
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                    lineNumber: 205,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
            lineNumber: 133,
            columnNumber: 13
        }, this);
    }
    return null;
}
}),
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
"[project]/src/lib/supabase.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-ssr] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://jextayidnmtsoofugnig.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpleHRheWlkbm10c29vZnVnbmlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwODM1MDAsImV4cCI6MjA4NDY1OTUwMH0.vxRq32MPWyO_znst5nFCiQ7AWJtlJeOFWMY-RlZmjrs");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
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
}),
"[project]/src/lib/ipfs.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cidExistsOnIPFS",
    ()=>cidExistsOnIPFS,
    "downloadFromIPFS",
    ()=>downloadFromIPFS,
    "getIPFSGatewayUrl",
    ()=>getIPFSGatewayUrl,
    "isIPFSConfigured",
    ()=>isIPFSConfigured,
    "isValidCID",
    ()=>isValidCID,
    "unpinFromIPFS",
    ()=>unpinFromIPFS,
    "uploadToIPFS",
    ()=>uploadToIPFS
]);
/**
 * IPFS Layer - Content-Addressed Storage with Pinata Remote Pinning
 * All encrypted blobs are stored on IPFS with CIDs
 */ // Pinata Configuration
const PINATA_JWT = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJlYTcxMDdjNi0yMGE0LTQ5Y2ItODAyYy1kMmRhOWM2Nzk4NjUiLCJlbWFpbCI6ImVpbmFyQGJsYWNrLWtuaWdodC5kZXYiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNjkyYjcyYTBlOTk2NDhmNjQ4NjgiLCJzY29wZWRLZXlTZWNyZXQiOiJmMmM3ZDUwMWE3NjhiMWI3NTI3ODExODAyZTg1YzJlNmUyZDc5ZjA0YTM1ZTA4ZjNmYWJiYmRiMmFlMGMzMmUwIiwiZXhwIjoxODAwNjgxOTMzfQ.g47clgfFIHt9Bw-pjvytmuMPO8FSXgAsSfhcXaP-YII") || '';
const PINATA_GATEWAY = ("TURBOPACK compile-time value", "red-able-bug-554.mypinata.cloud") || 'https://gateway.pinata.cloud';
const PINATA_GATEWAY_TOKEN = ("TURBOPACK compile-time value", "q1z_4lRpNW9NNmISiMudoy79QVUJ_7-V6s5CDJvEM-CadXIF_WIWW5Xizui72HvA") || '';
// API Endpoints
const PINATA_PIN_URL = 'https://api.pinata.cloud/pinning/pinFileToIPFS';
const PINATA_UNPIN_URL = 'https://api.pinata.cloud/pinning/unpin';
/**
 * Helper: Get the full gateway base URL
 */ function getGatewayBase() {
    if (PINATA_GATEWAY.startsWith('http')) return PINATA_GATEWAY;
    // If it's just a subdomain or already includes mypinata.cloud but lacks protocol
    if (PINATA_GATEWAY.includes('.')) {
        return `https://${PINATA_GATEWAY}`;
    }
    // Default to mypinata.cloud for simple subdomain strings
    return `https://${PINATA_GATEWAY}.mypinata.cloud`;
}
async function uploadToIPFS(blob, fileName, onProgress) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    console.log('[IPFS] Starting upload to Pinata...', {
        blobSize: blob.size,
        fileName
    });
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open('POST', PINATA_PIN_URL);
        xhr.setRequestHeader('Authorization', `Bearer ${PINATA_JWT}`);
        // Timeout: 2 minutes for large files on mobile
        xhr.timeout = 120000;
        xhr.upload.onprogress = (event)=>{
            if (event.lengthComputable && onProgress) {
                const percentComplete = Math.round(event.loaded / event.total * 100);
                console.log(`[IPFS] Upload progress: ${percentComplete}%`);
                onProgress(percentComplete);
            }
        };
        xhr.onload = ()=>{
            console.log('[IPFS] XHR onload, status:', xhr.status);
            if (xhr.status >= 200 && xhr.status < 300) {
                try {
                    const result = JSON.parse(xhr.responseText);
                    console.log('[IPFS] Upload success, CID:', result.IpfsHash);
                    resolve(result.IpfsHash);
                } catch (e) {
                    console.error('[IPFS] Failed to parse response:', xhr.responseText);
                    reject(new Error('Failed to parse Pinata response'));
                }
            } else {
                console.error('[IPFS] Upload failed:', {
                    status: xhr.status,
                    response: xhr.responseText
                });
                reject(new Error(`IPFS upload failed: ${xhr.status} - ${xhr.responseText}`));
            }
        };
        xhr.onerror = (event)=>{
            console.error('[IPFS] XHR network error:', event);
            reject(new Error('Network error during IPFS upload - check connection'));
        };
        xhr.ontimeout = ()=>{
            console.error('[IPFS] Upload timeout (2 min)');
            reject(new Error('IPFS upload timeout - file too large or slow connection'));
        };
        const formData = new FormData();
        formData.append('file', blob, fileName || 'encrypted-photo.bin');
        const metadata = JSON.stringify({
            name: fileName || 'photovault-encrypted',
            keyvalues: {
                app: 'photovault',
                type: 'encrypted-photo'
            }
        });
        formData.append('pinataMetadata', metadata);
        const options = JSON.stringify({
            cidVersion: 1
        });
        formData.append('pinataOptions', options);
        console.log('[IPFS] Sending XHR...');
        xhr.send(formData);
    });
}
async function downloadFromIPFS(cid) {
    console.log(`[IPFS] Downloading CID: ${cid}`);
    // Primary: Use API proxy (avoids all CORS issues)
    try {
        console.log(`[IPFS] Trying API proxy...`);
        const response = await fetch(`/api/ipfs/download?cid=${encodeURIComponent(cid)}`);
        if (response.ok) {
            const blob = await response.blob();
            console.log(`[IPFS] API proxy succeeded, size: ${blob.size} bytes`);
            return blob;
        }
        console.warn(`[IPFS] API proxy failed: ${response.status}`);
    } catch (err) {
        console.warn(`[IPFS] API proxy error:`, err);
    }
    // Fallback: Direct gateway access (works in development, may fail on production due to CORS)
    const gatewayBase = getGatewayBase();
    const gateways = [
        ()=>{
            const url = new URL(`${gatewayBase}/ipfs/${cid}`);
            if ("TURBOPACK compile-time truthy", 1) url.searchParams.set('pinataGatewayToken', PINATA_GATEWAY_TOKEN);
            return url.toString();
        },
        ()=>`https://cloudflare-ipfs.com/ipfs/${cid}`
    ];
    const controller = new AbortController();
    try {
        const fetchPromises = gateways.map(async (getUrl, index)=>{
            const url = getUrl();
            console.log(`[IPFS] Trying gateway ${index + 1}: ${url.substring(0, 60)}...`);
            const response = await fetch(url, {
                signal: controller.signal,
                mode: 'cors',
                credentials: 'omit'
            });
            if (!response.ok) {
                throw new Error(`Gateway failed: ${response.status}`);
            }
            console.log(`[IPFS] Gateway ${index + 1} succeeded`);
            return response.blob();
        });
        const winningBlob = await Promise.any(fetchPromises);
        controller.abort();
        console.log(`[IPFS] Download complete, size: ${winningBlob.size} bytes`);
        return winningBlob;
    } catch (error) {
        controller.abort();
        console.error('[IPFS] All methods failed:', error);
        throw new Error(`IPFS download failed for CID: ${cid}. Check network/CORS.`);
    }
}
async function unpinFromIPFS(cid) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const response = await fetch(`${PINATA_UNPIN_URL}/${cid}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${PINATA_JWT}`
        }
    });
    if (!response.ok) {
        console.error('Pinata unpin failed:', await response.text());
    // Don't throw - unpin failure is not critical
    }
}
async function cidExistsOnIPFS(cid) {
    try {
        const gatewayBase = getGatewayBase();
        const url = new URL(`${gatewayBase}/ipfs/${cid}`);
        if ("TURBOPACK compile-time truthy", 1) {
            url.searchParams.set('pinataGatewayToken', PINATA_GATEWAY_TOKEN);
        }
        const response = await fetch(url.toString(), {
            method: 'HEAD',
            headers: ("TURBOPACK compile-time truthy", 1) ? {
                'x-pinata-gateway-token': PINATA_GATEWAY_TOKEN
            } : "TURBOPACK unreachable"
        });
        return response.ok;
    } catch  {
        return false;
    }
}
function getIPFSGatewayUrl(cid) {
    const gatewayBase = getGatewayBase();
    const url = new URL(`${gatewayBase}/ipfs/${cid}`);
    if ("TURBOPACK compile-time truthy", 1) {
        url.searchParams.set('pinataGatewayToken', PINATA_GATEWAY_TOKEN);
    }
    return url.toString();
}
function isValidCID(cid) {
    // CIDv0 starts with Qm and is 46 chars
    // CIDv1 starts with bafy and varies in length
    return cid.startsWith('Qm') && cid.length === 46 || cid.startsWith('bafy') || cid.startsWith('bafk');
}
/**
 * Generate a mock hash for development without Pinata
 */ function generateMockHash() {
    const chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
    let hash = '';
    for(let i = 0; i < 44; i++){
        hash += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return hash;
}
function isIPFSConfigured() {
    return !!PINATA_JWT && PINATA_JWT.length > 0;
}
}),
"[project]/src/lib/storage/remote-storage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isLegacyLocalCID",
    ()=>isLegacyLocalCID,
    "isRealIPFSCID",
    ()=>isRealIPFSCID,
    "remoteStorage",
    ()=>remoteStorage
]);
/**
 * Remote Storage Layer - IPFS with Pinata Remote Pinning
 * Encrypted blobs are stored on IPFS, identified by CID
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ipfs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ipfs.ts [app-ssr] (ecmascript)");
;
const remoteStorage = {
    upload: async (blob, fileName, onProgress)=>{
        try {
            console.log('Uploading to IPFS...', {
                size: blob.size,
                fileName
            });
            const cid = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ipfs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uploadToIPFS"])(blob, fileName, onProgress);
            console.log('IPFS upload successful:', cid);
            return cid;
        } catch (error) {
            console.error('Remote Storage Upload failed:', error);
            throw error;
        }
    },
    download: async (cid)=>{
        try {
            console.log('Downloading from IPFS:', cid);
            const blob = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ipfs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["downloadFromIPFS"])(cid);
            console.log('IPFS download successful:', {
                cid,
                size: blob.size
            });
            return blob;
        } catch (error) {
            console.error('Remote Storage Download failed:', error);
            throw error;
        }
    },
    isConfigured: ()=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ipfs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isIPFSConfigured"])();
    }
};
function isRealIPFSCID(cid) {
    // Real IPFS CIDs start with Qm (v0) or bafy/bafk (v1)
    return cid.startsWith('Qm') || cid.startsWith('bafy') || cid.startsWith('bafk');
}
function isLegacyLocalCID(cid) {
    return cid.startsWith('cid_');
}
}),
"[project]/src/lib/storage/local-db.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhotoVaultDB",
    ()=>PhotoVaultDB,
    "clearAllPhotos",
    ()=>clearAllPhotos,
    "db",
    ()=>db,
    "deletePhoto",
    ()=>deletePhoto,
    "getAllPhotos",
    ()=>getAllPhotos,
    "getPhotoBlob",
    ()=>getPhotoBlob,
    "getPhotoByCID",
    ()=>getPhotoByCID,
    "getPhotoCount",
    ()=>getPhotoCount,
    "getPhotosAfterCursor",
    ()=>getPhotosAfterCursor,
    "getPhotosMetadataOnly",
    ()=>getPhotosMetadataOnly,
    "getPhotosPaginated",
    ()=>getPhotosPaginated,
    "savePhoto",
    ()=>savePhoto
]);
/**
 * Local Database - Dexie.js Wrapper für Photo Metadata
 * Speichert CIDs und Metadaten lokal (offline-first)
 *
 * WICHTIG: iOS Safari hat Probleme mit Blob-Storage in IndexedDB.
 * Wir speichern Blobs als ArrayBuffer und konvertieren beim Lesen zurück.
 *
 * PERFORMANCE OPTIMIZATIONS (Phase 2):
 * - Compound index on [uploadedAt+id] for efficient pagination
 * - Pagination support for 1000+ photos
 * - Lazy loading of encrypted blobs
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dexie$2f$import$2d$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dexie/import-wrapper.mjs [app-ssr] (ecmascript)");
;
class PhotoVaultDB extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dexie$2f$import$2d$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    photos;
    constructor(){
        super('PhotoVaultDB');
        // Version 2: Added compound index for efficient pagination
        this.version(2).stores({
            photos: '++id, cid, uploadedAt, [uploadedAt+id]'
        }).upgrade(()=>{
            // Migration is automatic - Dexie handles index creation
            console.log('[LocalDB] Upgraded to v2 with compound index');
        });
        // Keep v1 for backward compatibility
        this.version(1).stores({
            photos: '++id, cid, uploadedAt'
        });
    }
}
const db = new PhotoVaultDB();
/**
 * Convert Blob to ArrayBuffer (for iOS Safari IndexedDB compatibility)
 */ async function blobToArrayBuffer(blob) {
    return await blob.arrayBuffer();
}
/**
 * Convert ArrayBuffer back to Blob
 */ function arrayBufferToBlob(buffer, mimeType) {
    return new Blob([
        buffer
    ], {
        type: mimeType
    });
}
/**
 * Convert storage record to public PhotoMetadata
 */ function recordToMetadata(record) {
    const { encryptedData, ...rest } = record;
    return {
        ...rest,
        encryptedBlob: encryptedData ? arrayBufferToBlob(encryptedData, record.mimeType) : undefined
    };
}
async function savePhoto(photo) {
    const { encryptedBlob, ...rest } = photo;
    // Convert Blob to ArrayBuffer for storage
    const storageRecord = {
        ...rest,
        encryptedData: encryptedBlob ? await blobToArrayBuffer(encryptedBlob) : undefined
    };
    console.log('[LocalDB] Saving photo as ArrayBuffer:', {
        cid: photo.cid,
        hasBlob: !!encryptedBlob,
        arrayBufferSize: storageRecord.encryptedData?.byteLength
    });
    return await db.photos.add(storageRecord);
}
async function getAllPhotos() {
    const records = await db.photos.orderBy('uploadedAt').reverse().toArray();
    return records.map(recordToMetadata);
}
async function getPhotoByCID(cid) {
    const record = await db.photos.where('cid').equals(cid).first();
    return record ? recordToMetadata(record) : undefined;
}
async function deletePhoto(id) {
    await db.photos.delete(id);
}
async function clearAllPhotos() {
    await db.photos.clear();
}
async function getPhotoCount() {
    return await db.photos.count();
}
async function getPhotosPaginated(options = {}) {
    const { page = 0, pageSize = 50 } = options;
    const offset = page * pageSize;
    // Get total count (cached by Dexie for performance)
    const total = await db.photos.count();
    // Use offset-based pagination with index
    const records = await db.photos.orderBy('uploadedAt').reverse().offset(offset).limit(pageSize).toArray();
    return {
        items: records.map(recordToMetadata),
        total,
        page,
        pageSize,
        hasMore: offset + records.length < total
    };
}
async function getPhotosAfterCursor(cursor, limit = 50) {
    let query = db.photos.orderBy('uploadedAt').reverse();
    if (cursor) {
        // Use compound key for efficient cursor-based pagination
        query = query.filter((record)=>{
            if (!record.id) return false;
            // Photos older than cursor, or same date but lower ID
            if (record.uploadedAt < cursor.uploadedAt) return true;
            if (record.uploadedAt.getTime() === cursor.uploadedAt.getTime() && record.id < cursor.id) return true;
            return false;
        });
    }
    const records = await query.limit(limit + 1).toArray();
    const hasMore = records.length > limit;
    const items = hasMore ? records.slice(0, limit) : records;
    const lastItem = items[items.length - 1];
    const nextCursor = hasMore && lastItem?.id && lastItem?.uploadedAt ? {
        uploadedAt: lastItem.uploadedAt,
        id: lastItem.id
    } : undefined;
    return {
        items: items.map(recordToMetadata),
        nextCursor
    };
}
async function getPhotosMetadataOnly(options = {}) {
    const { page = 0, pageSize = 50 } = options;
    const offset = page * pageSize;
    const total = await db.photos.count();
    // Only select non-blob fields for faster loading
    const records = await db.photos.orderBy('uploadedAt').reverse().offset(offset).limit(pageSize).toArray();
    // Return metadata without converting blobs
    const items = records.map((record)=>({
            id: record.id,
            cid: record.cid,
            nonce: record.nonce,
            fileName: record.fileName,
            mimeType: record.mimeType,
            fileSize: record.fileSize,
            width: record.width,
            height: record.height,
            uploadedAt: record.uploadedAt
        }));
    return {
        items,
        total,
        page,
        pageSize,
        hasMore: offset + records.length < total
    };
}
async function getPhotoBlob(id) {
    const record = await db.photos.get(id);
    if (!record?.encryptedData) return undefined;
    return arrayBufferToBlob(record.encryptedData, record.mimeType);
}
}),
"[project]/src/lib/storage/settings-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSettingsStore",
    ()=>useSettingsStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
;
;
const dummyStorage = {
    getItem: ()=>null,
    setItem: ()=>{},
    removeItem: ()=>{}
};
const useSettingsStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        backupActive: false,
        autoBackupEnabled: true,
        backgroundBackupEnabled: false,
        selectedPlan: 'free',
        lastBackup: 'Noch nie',
        permanence: 0,
        setBackupActive: (active)=>set({
                backupActive: active
            }),
        setAutoBackupEnabled: (enabled)=>set({
                autoBackupEnabled: enabled
            }),
        setBackgroundBackupEnabled: (enabled)=>set({
                backgroundBackupEnabled: enabled
            }),
        setSelectedPlan: (plan)=>set({
                selectedPlan: plan
            }),
        setLastBackup: (date)=>set({
                lastBackup: date
            }),
        setPermanence: (value)=>set({
                permanence: value
            })
    }), {
    name: 'photovault-settings',
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : dummyStorage)
}));
}),
"[project]/src/components/features/settings/DevicePairing.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DevicePairing",
    ()=>DevicePairing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2e$react$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/qrcode.react/lib/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-ssr] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$qr$2d$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__QrCode$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/qr-code.js [app-ssr] (ecmascript) <export default as QrCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$encryption$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-encryption.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function DevicePairing({ isOpen, onClose }) {
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("show");
    const [inputKey, setInputKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { recoveryPhrase, restoreFromPhrase } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$encryption$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEncryption"])();
    const handleCopyKey = async ()=>{
        if (!recoveryPhrase) return;
        try {
            await navigator.clipboard.writeText(recoveryPhrase);
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        } catch  {
            console.error("Failed to copy to clipboard");
        }
    };
    const handleImportKey = ()=>{
        setError(null);
        if (!inputKey.trim()) {
            setError("Bitte gib einen Schlüssel ein");
            return;
        }
        const success = restoreFromPhrase(inputKey.trim());
        if (success) {
            setSuccess(true);
            setInputKey("");
            setTimeout(()=>{
                setSuccess(false);
                onClose();
            }, 1500);
        } else {
            setError("Ungültiger Schlüssel. Bitte überprüfe die Eingabe.");
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white w-full max-w-[380px] rounded-2xl overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-4 border-b border-[#E5E5EA]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "sf-pro-display text-[17px] font-semibold text-[#1D1D1F]",
                            children: "Gerät verbinden"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "w-8 h-8 flex items-center justify-center rounded-full bg-[#F2F2F7]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-4 h-4 text-[#6E6E73]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex border-b border-[#E5E5EA]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMode("show"),
                            className: `flex-1 py-3 text-[15px] font-medium flex items-center justify-center gap-2 ${mode === "show" ? "text-[#007AFF] border-b-2 border-[#007AFF]" : "text-[#6E6E73]"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$qr$2d$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__QrCode$3e$__["QrCode"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                "Schlüssel zeigen"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMode("input"),
                            className: `flex-1 py-3 text-[15px] font-medium flex items-center justify-center gap-2 ${mode === "input" ? "text-[#007AFF] border-b-2 border-[#007AFF]" : "text-[#6E6E73]"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                "Schlüssel eingeben"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-5",
                    children: mode === "show" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[13px] text-[#6E6E73] text-center mb-4",
                                children: "Scanne diesen QR-Code mit deinem anderen Gerät oder kopiere den Schlüssel."
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                lineNumber: 106,
                                columnNumber: 15
                            }, this),
                            recoveryPhrase && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-4 rounded-xl border border-[#E5E5EA] mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2e$react$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QRCodeSVG"], {
                                    value: recoveryPhrase,
                                    size: 180,
                                    level: "M",
                                    includeMargin: false
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                    lineNumber: 113,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                lineNumber: 112,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full bg-[#F2F2F7] rounded-xl p-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-[#6E6E73] mb-1",
                                        children: "Dein Schlüssel:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                        lineNumber: 124,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[13px] font-mono text-[#1D1D1F] break-all leading-relaxed",
                                        children: recoveryPhrase || "Kein Schlüssel verfügbar"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                        lineNumber: 125,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                lineNumber: 123,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleCopyKey,
                                disabled: !recoveryPhrase,
                                className: "w-full h-[44px] bg-[#007AFF] text-white text-[15px] font-semibold rounded-xl flex items-center justify-center gap-2 disabled:opacity-50",
                                children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                            lineNumber: 138,
                                            columnNumber: 21
                                        }, this),
                                        "Kopiert!"
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                            lineNumber: 143,
                                            columnNumber: 21
                                        }, this),
                                        "Schlüssel kopieren"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                lineNumber: 131,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                        lineNumber: 105,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[13px] text-[#6E6E73] text-center mb-4",
                                children: "Gib den Schlüssel von deinem anderen Gerät ein, um deine Fotos zu synchronisieren."
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                lineNumber: 151,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: inputKey,
                                onChange: (e)=>{
                                    setInputKey(e.target.value);
                                    setError(null);
                                },
                                placeholder: "Schlüssel hier eingeben...",
                                className: "w-full h-[100px] bg-[#F2F2F7] rounded-xl p-3 text-[14px] font-mono text-[#1D1D1F] resize-none mb-3 placeholder:text-[#C7C7CC]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                lineNumber: 156,
                                columnNumber: 15
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[13px] text-[#FF3B30] text-center mb-3",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                lineNumber: 168,
                                columnNumber: 17
                            }, this),
                            success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[13px] text-[#30D158] text-center mb-3",
                                children: "Schlüssel erfolgreich importiert!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                lineNumber: 175,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleImportKey,
                                disabled: !inputKey.trim() || success,
                                className: "w-full h-[44px] bg-[#30D158] text-white text-[15px] font-semibold rounded-xl flex items-center justify-center gap-2 disabled:opacity-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                        lineNumber: 186,
                                        columnNumber: 17
                                    }, this),
                                    "Gerät verbinden"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                lineNumber: 181,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-[#FF9500] text-center mt-4",
                                children: "Achtung: Dies überschreibt deinen aktuellen Schlüssel. Stelle sicher, dass du ihn gesichert hast."
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                lineNumber: 191,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                        lineNumber: 150,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/photovault/SettingsPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingsPanel",
    ()=>SettingsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud.js [app-ssr] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/custom-icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$encryption$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-encryption.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deviceId$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/deviceId.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$remote$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage/remote-storage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$local$2d$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage/local-db.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/crypto.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$settings$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage/settings-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$settings$2f$DevicePairing$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/settings/DevicePairing.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
// Helper to format date
function formatDate(dateStr) {
    if (!dateStr) return "Unbekannt";
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    if (diffMins < 1) return "Gerade eben";
    if (diffMins < 60) return `vor ${diffMins} Min.`;
    if (diffHours < 24) return `vor ${diffHours} Std.`;
    if (diffDays < 7) return `vor ${diffDays} Tagen`;
    return date.toLocaleDateString("de-DE");
}
;
function SettingsPanel({ state, setState, onRestartOnboarding, authUser }) {
    const [showDevices, setShowDevices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPhraseWarning, setShowPhraseWarning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showNewKeyWarning, setShowNewKeyWarning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showBackupPhrase, setShowBackupPhrase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSourceSelector, setShowSourceSelector] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPlanSelector, setShowPlanSelector] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [realDevices, setRealDevices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Manual Backup State
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadProgress, setUploadProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        current: 0,
        total: 0
    });
    // Persistent Settings
    const autoBackupEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$settings$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.autoBackupEnabled);
    const setAutoBackupEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$settings$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.setAutoBackupEnabled);
    const backgroundBackupEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$settings$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.backgroundBackupEnabled);
    const setBackgroundBackupEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$settings$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.setBackgroundBackupEnabled);
    const selectedPlan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$settings$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.selectedPlan);
    const setSelectedPlan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$settings$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.setSelectedPlan);
    const setLastBackup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$settings$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.setLastBackup);
    const { secretKey, recoveryPhrase, generateNewKey, clearKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$encryption$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEncryption"])();
    const currentDeviceId = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "";
    const [userKeyHash, setUserKeyHash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Get userKeyHash
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (secretKey) {
            __turbopack_context__.A("[project]/src/lib/crypto.ts [app-ssr] (ecmascript, async loader)").then((m)=>m.getUserKeyHash(secretKey)).then(setUserKeyHash);
        }
    }, [
        secretKey
    ]);
    // Fetch real devices from Supabase using hash (aggregates all devices with same key)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!userKeyHash) return;
        const fetchDevices = async ()=>{
            try {
                const devices = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDevicesForUser"])(userKeyHash);
                setRealDevices(devices);
            } catch (err) {
                console.error("Failed to fetch devices:", err);
            }
        };
        fetchDevices();
    }, [
        userKeyHash
    ]);
    // Get the real backup phrase words
    const realBackupPhraseWords = recoveryPhrase?.split("-").slice(0, 12) || [];
    const toggleAutoBackup = ()=>{
        setAutoBackupEnabled(!autoBackupEnabled);
    };
    const toggleBackgroundBackup = ()=>{
        setBackgroundBackupEnabled(!backgroundBackupEnabled);
    };
    // Manual backup: Upload local photos to IPFS that aren't already there
    const triggerManualBackup = async ()=>{
        if (isUploading || !secretKey) return;
        setIsUploading(true);
        console.log("[Backup] Starting manual backup to IPFS...");
        try {
            const photos = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$local$2d$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllPhotos"])();
            const photosWithBlobs = photos.filter((p)=>p.encryptedBlob);
            setUploadProgress({
                current: 0,
                total: photosWithBlobs.length
            });
            let uploaded = 0;
            const deviceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deviceId$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDeviceId"])();
            const keyHash = userKeyHash || await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserKeyHash"])(secretKey);
            for (const photo of photosWithBlobs){
                if (!photo.encryptedBlob) continue;
                try {
                    // Check if already in Supabase metadata for this user
                    const existsInSupabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cidExistsInSupabase"])(photo.cid, keyHash);
                    if (!existsInSupabase) {
                        // Upload encrypted blob to IPFS
                        const newCid = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$remote$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["remoteStorage"].upload(photo.encryptedBlob, photo.fileName);
                        console.log(`[Backup] Uploaded to IPFS: ${newCid}`);
                        // Sync metadata to Supabase
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uploadCIDMetadata"])(newCid, photo.fileSize, deviceId, photo.nonce, photo.mimeType, keyHash);
                    }
                    uploaded++;
                    setUploadProgress({
                        current: uploaded,
                        total: photosWithBlobs.length
                    });
                } catch (err) {
                    console.error(`[Backup] Failed to upload ${photo.cid}:`, err);
                }
            }
            setLastBackup("Gerade eben");
            console.log(`[Backup] Complete: ${uploaded} photos processed`);
        } catch (err) {
            console.error("[Backup] Failed:", err);
        } finally{
            setIsUploading(false);
            setUploadProgress({
                current: 0,
                total: 0
            });
        }
    };
    const viewBackupPhrase = ()=>{
        setShowPhraseWarning(false);
        setShowBackupPhrase(true);
    };
    const handleGenerateNewKey = async ()=>{
        clearKey();
        const newPhrase = await generateNewKey();
        if (newPhrase) {
            setState((prev)=>({
                    ...prev,
                    photosCount: 0
                }));
        }
        setShowNewKeyWarning(false);
    };
    const addDevice = ()=>{
        // Show the pairing modal
        setShowDevices(false);
        // Since DevicePairing is normally inside Dashboard, 
        // we should probably have it available here too or trigger a global state.
        // In this component, we can just add the DevicePairing modal here as well.
        setShowPairingFromSettings(true);
    };
    const [showPairingFromSettings, setShowPairingFromSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showClearCacheWarning, setShowClearCacheWarning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleClearCache = async ()=>{
        try {
            // Clear IndexedDB (Dexie)
            const { db } = await __turbopack_context__.A("[project]/src/lib/storage/local-db.ts [app-ssr] (ecmascript, async loader)");
            await db.delete();
            // Clear local storage
            localStorage.clear();
            // Force reload to clean state
            window.location.reload();
        } catch (err) {
            console.error("Failed to clear cache:", err);
        }
    };
    const changeSource = (source)=>{
        console.log("Update backup source preference:", source);
        setState((prev)=>({
                ...prev,
                photoSource: source
            }));
        setShowSourceSelector(false);
    };
    const changePlan = (plan)=>{
        console.log("Update plan:", plan);
        setSelectedPlan(plan);
        setShowPlanSelector(false);
    };
    if (showDevices) {
        // Transform real devices into the format expected by DevicesView
        const displayDevices = realDevices.map((device)=>({
                id: device.id,
                name: device.device_name || "Unbekanntes Gerät",
                lastActive: device.id === currentDeviceId ? "Aktiv" : formatDate(device.created_at),
                syncing: false
            }));
        // If no devices in DB, show current device
        if (displayDevices.length === 0) {
            displayDevices.push({
                id: currentDeviceId,
                name: "Dieses Gerät",
                lastActive: "Aktiv",
                syncing: false
            });
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DevicesView, {
            devices: displayDevices,
            onBack: ()=>setShowDevices(false),
            onAddDevice: addDevice
        }, void 0, false, {
            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
            lineNumber: 248,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col pb-4 overflow-y-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "px-5 pt-6 pb-4 bg-[#FAFBFC]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "sketch-heading text-[32px]",
                    children: "Einstellungen"
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                    lineNumber: 260,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                lineNumber: 259,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 px-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[13px] font-semibold text-[#6E6E73] uppercase tracking-wide px-4 mb-2",
                                children: "Backup"
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsToggleRow, {
                                        label: "Automatisches Backup",
                                        description: "Neue Fotos automatisch sichern",
                                        enabled: autoBackupEnabled,
                                        onToggle: toggleAutoBackup
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 272,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-[0.5px] bg-[#E5E5EA] ml-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 278,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsToggleRow, {
                                        label: "Hintergrund-Backup",
                                        description: "Weiter sichern wenn App geschlossen",
                                        enabled: backgroundBackupEnabled,
                                        onToggle: toggleBackgroundBackup
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 279,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-[0.5px] bg-[#E5E5EA] ml-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 285,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowSourceSelector(true),
                                        className: "w-full flex items-center justify-between p-4 ios-tap-target",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomIcon"], {
                                                        name: "folder",
                                                        size: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                        lineNumber: 291,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-left",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[17px] text-[#1D1D1F] block",
                                                                children: "Backup-Quelle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                                lineNumber: 293,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[13px] text-[#6E6E73]",
                                                                children: state.photoSource === "photos-app" ? "Fotos-App" : "Dateien-App"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                                lineNumber: 296,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 290,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomIcon"], {
                                                name: "chevronRight",
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 303,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 286,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: triggerManualBackup,
                                disabled: isUploading || !secretKey,
                                className: "w-full h-[50px] bg-[#007AFF] text-white text-[17px] font-semibold rounded-xl mt-3 ios-tap-target disabled:opacity-70 flex items-center justify-center gap-2",
                                children: isUploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-5 h-5 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                            lineNumber: 315,
                                            columnNumber: 17
                                        }, this),
                                        uploadProgress.total > 0 ? `${uploadProgress.current}/${uploadProgress.total} hochladen...` : "Vorbereiten..."
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                            lineNumber: 322,
                                            columnNumber: 17
                                        }, this),
                                        "Jetzt sichern"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[13px] text-[#6E6E73] px-4 mt-2 text-center",
                                children: "Alle lokalen Fotos in die Cloud hochladen"
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 327,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[13px] font-semibold text-[#6E6E73] uppercase tracking-wide px-4 mb-2",
                                children: "Speicher"
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 334,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[17px] text-[#1D1D1F]",
                                                        children: "Aktueller Plan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                        lineNumber: 340,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[15px] font-semibold text-[#007AFF]",
                                                        children: selectedPlan === "free" ? "Free" : "Backup+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                        lineNumber: 343,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 339,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[13px] text-[#6E6E73]",
                                                children: selectedPlan === "free" ? "Fotos auf deinen Geräten" : "200 GB Cloud-Backup"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 347,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 338,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-[0.5px] bg-[#E5E5EA] ml-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 353,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[15px] text-[#6E6E73]",
                                                    children: "Verwendet"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                    lineNumber: 356,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[15px] text-[#1D1D1F]",
                                                    children: [
                                                        state.photosCount.toLocaleString(),
                                                        " Fotos (nur lokal)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                    lineNumber: 357,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                            lineNumber: 355,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 354,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-[0.5px] bg-[#E5E5EA] ml-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 362,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowPlanSelector(true),
                                        className: "w-full flex items-center justify-between p-4 ios-tap-target",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[17px] text-[#007AFF]",
                                                children: selectedPlan === "free" ? "Upgrade zu Backup+" : "Plan verwalten"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 367,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomIcon"], {
                                                name: "chevronRight",
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 372,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 363,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 337,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                        lineNumber: 333,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[13px] font-semibold text-[#6E6E73] uppercase tracking-wide px-4 mb-2",
                                children: "Geräte"
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 379,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        console.log("Fetch Device List");
                                        setShowDevices(true);
                                    },
                                    className: "w-full flex items-center justify-between p-4 ios-tap-target",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomIcon"], {
                                                    name: "smartphone",
                                                    size: 24
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[17px] text-[#1D1D1F]",
                                                    children: "Verbundene Geräte"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                            lineNumber: 390,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[15px] text-[#6E6E73]",
                                                    children: realDevices.length || 1
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                    lineNumber: 397,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomIcon"], {
                                                    name: "chevronRight",
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                    lineNumber: 400,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                            lineNumber: 396,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                    lineNumber: 383,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 382,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                        lineNumber: 378,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[13px] font-semibold text-[#6E6E73] uppercase tracking-wide px-4 mb-2",
                                children: "Sicherheit"
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 408,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowPhraseWarning(true),
                                        className: "w-full flex items-center justify-between p-4 ios-tap-target",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[17px] text-[#1D1D1F]",
                                                children: "Backup-Phrase anzeigen"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 416,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomIcon"], {
                                                name: "chevronRight",
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 419,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 412,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-[0.5px] bg-[#E5E5EA] ml-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 421,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowNewKeyWarning(true),
                                        className: "w-full flex items-center justify-between p-4 ios-tap-target",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[17px] text-[#FF3B30]",
                                                children: "Neuen Schlüssel erstellen"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 426,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomIcon"], {
                                                name: "chevronRight",
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 429,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 422,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 411,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[13px] text-[#6E6E73] px-4 mt-2",
                                children: "Teile diese Wörter niemals mit anderen."
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 432,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                        lineNumber: 407,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[13px] font-semibold text-[#6E6E73] uppercase tracking-wide px-4 mb-2",
                                children: "Wartung"
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 439,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowClearCacheWarning(true),
                                    className: "w-full flex items-center justify-between p-4 ios-tap-target",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-6 h-6 flex items-center justify-center text-[#FF9500]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomIcon"], {
                                                        name: "refresh",
                                                        size: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                        lineNumber: 449,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                    lineNumber: 448,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[17px] text-[#FF9500]",
                                                    children: "Lokalen Cache leeren"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                    lineNumber: 451,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                            lineNumber: 447,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomIcon"], {
                                            name: "chevronRight",
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                            lineNumber: 455,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                    lineNumber: 443,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 442,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[13px] text-[#6E6E73] px-4 mt-2",
                                children: "Löscht lokale Vorschaubilder und Gerätedaten. Deine Fotos in der Cloud bleiben sicher."
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 458,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                        lineNumber: 438,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            showPhraseWarning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                title: "Sicherheitshinweis",
                message: "Deine Backup-Phrase gibt vollen Zugriff auf deine verschlüsselten Fotos. Nur an einem privaten Ort anzeigen.",
                confirmLabel: "Phrase anzeigen",
                confirmDestructive: false,
                onConfirm: viewBackupPhrase,
                onCancel: ()=>setShowPhraseWarning(false)
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                lineNumber: 466,
                columnNumber: 9
            }, this),
            showBackupPhrase && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/40 flex items-end justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white w-full max-w-[428px] rounded-t-2xl p-6 pb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "sketch-subheading text-[22px] text-center mb-2",
                            children: "Deine Backup-Phrase"
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                            lineNumber: 480,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[15px] text-[#6E6E73] text-center mb-4",
                            children: "Notiere diese Wörter und bewahre sie sicher auf."
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                            lineNumber: 483,
                            columnNumber: 13
                        }, this),
                        realBackupPhraseWords.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-2 mb-4",
                                    children: realBackupPhraseWords.map((word, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-[#F2F2F7] rounded-lg p-2 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] text-[#8E8E93] block",
                                                    children: index + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                    lineNumber: 496,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[14px] text-[#1D1D1F] font-mono",
                                                    children: word
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                    lineNumber: 499,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                            lineNumber: 492,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                    lineNumber: 490,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#F2F2F7] rounded-xl p-3 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-[#6E6E73] mb-1",
                                            children: "Vollständiger Schlüssel:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                            lineNumber: 508,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[12px] font-mono text-[#1D1D1F] break-all",
                                            children: recoveryPhrase
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                            lineNumber: 509,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                    lineNumber: 507,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#FF9500]/10 rounded-xl p-4 mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[13px] text-[#FF9500] text-center",
                                children: "Kein Schlüssel gefunden. Bitte erstelle einen neuen Schlüssel."
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 516,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                            lineNumber: 515,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#FF3B30]/10 rounded-xl p-3 mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[13px] text-[#FF3B30] text-center",
                                children: "⚠️ Teile diese Wörter niemals mit anderen"
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 524,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                            lineNumber: 523,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowBackupPhrase(false),
                            className: "w-full h-[50px] bg-[#007AFF] text-white text-[17px] font-semibold rounded-xl ios-tap-target",
                            children: "Fertig"
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                            lineNumber: 529,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                    lineNumber: 479,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                lineNumber: 478,
                columnNumber: 9
            }, this),
            showNewKeyWarning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                title: "Datenverlust-Warnung",
                message: "Das Erstellen eines neuen Schlüssels löscht alle vorhandenen Backup-Daten permanent. Diese Aktion kann nicht rückgängig gemacht werden.",
                confirmLabel: "Neuen Schlüssel erstellen",
                confirmDestructive: true,
                onConfirm: handleGenerateNewKey,
                onCancel: ()=>setShowNewKeyWarning(false)
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                lineNumber: 541,
                columnNumber: 9
            }, this),
            showSourceSelector && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SourceSelectorModal, {
                currentSource: state.photoSource,
                onSelect: changeSource,
                onClose: ()=>setShowSourceSelector(false)
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                lineNumber: 553,
                columnNumber: 9
            }, this),
            showPlanSelector && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PlanSelectorModal, {
                currentPlan: selectedPlan,
                onSelect: changePlan,
                onClose: ()=>setShowPlanSelector(false)
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                lineNumber: 562,
                columnNumber: 9
            }, this),
            showClearCacheWarning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                title: "Cache leeren?",
                message: "Dies wird lokale Vorschaubilder und Gerätedaten löschen. Deine verschlüsselten Fotos in der Cloud bleiben sicher. Die App wird neu geladen.",
                confirmLabel: "Cache leeren",
                confirmDestructive: true,
                onConfirm: handleClearCache,
                onCancel: ()=>setShowClearCacheWarning(false)
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                lineNumber: 571,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$settings$2f$DevicePairing$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DevicePairing"], {
                isOpen: showPairingFromSettings,
                onClose: ()=>setShowPairingFromSettings(false)
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                lineNumber: 582,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
        lineNumber: 257,
        columnNumber: 5
    }, this);
}
;
function SettingsToggleRow({ label, description, enabled, onToggle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onToggle,
        className: "w-full flex items-center justify-between p-4 ios-tap-target",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[17px] text-[#1D1D1F]",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                        lineNumber: 609,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[13px] text-[#6E6E73] mt-0.5",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                        lineNumber: 610,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                lineNumber: 608,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-[51px] h-[31px] rounded-full p-[2px] shrink-0 ${enabled ? "bg-[#30D158]" : "bg-[#E5E5EA]"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `w-[27px] h-[27px] rounded-full bg-white shadow-sm ${enabled ? "ml-auto" : ""}`
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                    lineNumber: 617,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                lineNumber: 612,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
        lineNumber: 604,
        columnNumber: 5
    }, this);
}
function DevicesView({ devices, onBack, onAddDevice }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col pb-4 overflow-y-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "px-5 pt-6 pb-4 bg-[#F2F2F7]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "sketch-body text-[#2563EB] mb-2 flex items-center gap-2",
                        children: "← Zurück"
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                        lineNumber: 645,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "sketch-heading text-[32px]",
                        children: "Geräte"
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                        lineNumber: 651,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                lineNumber: 644,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 px-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl overflow-hidden",
                        children: devices.map((device, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    index > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-[0.5px] bg-[#E5E5EA] ml-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 658,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomIcon"], {
                                                name: "smartphone",
                                                size: 32
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 660,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[17px] text-[#1D1D1F]",
                                                        children: device.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                        lineNumber: 662,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[13px] text-[#6E6E73]",
                                                        children: device.lastActive
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                        lineNumber: 663,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 661,
                                                columnNumber: 17
                                            }, this),
                                            device.syncing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "w-5 h-5 text-[#007AFF] animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 668,
                                                columnNumber: 19
                                            }, this) : device.lastActive === "Aktiv" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "w-4 h-4 text-[#30D158]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                        lineNumber: 671,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[13px] text-[#30D158] font-medium",
                                                        children: "Dieses Gerät"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                        lineNumber: 672,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 670,
                                                columnNumber: 19
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 659,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, device.id, true, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 657,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                        lineNumber: 655,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onAddDevice,
                        className: "w-full flex items-center justify-center gap-2 mt-6 p-4 bg-white rounded-xl ios-tap-target",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "w-5 h-5 text-[#007AFF]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 686,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[17px] text-[#007AFF]",
                                children: "Neues Gerät verbinden"
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 687,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                        lineNumber: 682,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[13px] text-[#6E6E73] text-center mt-3",
                        children: "Scanne den QR-Code oder gib deine Backup-Phrase ein"
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                        lineNumber: 692,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                lineNumber: 654,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
        lineNumber: 642,
        columnNumber: 5
    }, this);
}
function SourceSelectorModal({ currentSource, onSelect, onClose }) {
    const sources = [
        {
            id: "photos-app",
            label: "Fotos-App",
            description: "Alle Fotos aus der iOS Foto-Bibliothek"
        },
        {
            id: "files-app",
            label: "Dateien-App",
            description: "Fotos aus einem bestimmten Ordner"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/40 flex items-end justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white w-full max-w-[428px] rounded-t-2xl p-6 pb-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "sf-pro-display text-[20px] text-[#1D1D1F] text-center mb-2",
                    children: "Backup-Quelle"
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                    lineNumber: 725,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[15px] text-[#6E6E73] text-center mb-6",
                    children: "Wo sind deine Fotos gespeichert?"
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                    lineNumber: 728,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3 mb-6",
                    children: sources.map((source)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onSelect(source.id),
                            className: `w-full p-4 rounded-xl bg-[#F2F2F7] text-left ios-tap-target ${currentSource === source.id ? "ring-2 ring-[#007AFF]" : ""}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[17px] font-medium text-[#1D1D1F]",
                                                children: source.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 743,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[13px] text-[#6E6E73] mt-0.5",
                                                children: source.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 746,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 742,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-6 h-6 rounded-full border-2 flex items-center justify-center ${currentSource === source.id ? "border-[#007AFF] bg-[#007AFF]" : "border-[#C7C7CC]"}`,
                                        children: currentSource === source.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2.5 h-2.5 rounded-full bg-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                            lineNumber: 758,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 750,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 741,
                                columnNumber: 15
                            }, this)
                        }, source.id, false, {
                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                            lineNumber: 734,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                    lineNumber: 732,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "w-full h-[44px] text-[#007AFF] text-[17px] ios-tap-target",
                    children: "Abbrechen"
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                    lineNumber: 766,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
            lineNumber: 724,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
        lineNumber: 723,
        columnNumber: 5
    }, this);
}
function PlanSelectorModal({ currentPlan, onSelect, onClose }) {
    const plans = [
        {
            id: "free",
            label: "FREE",
            subtitle: "Auf deinen Geräten",
            price: "0€/Monat",
            features: [
                "Unbegrenzte Fotos",
                "Zero-Knowledge Verschlüsselung",
                "Multi-Device Sync"
            ]
        },
        {
            id: "backup-plus",
            label: "BACKUP+",
            subtitle: "Dauerhaft im Netz",
            price: "2,99€/Monat",
            features: [
                "Alles von Free",
                "200 GB Cloud-Backup",
                "Schnellere Synchronisierung"
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/40 flex items-end justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white w-full max-w-[428px] rounded-t-2xl p-6 pb-10 max-h-[80vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "sf-pro-display text-[20px] text-[#1D1D1F] text-center mb-2",
                    children: "Speicherplan"
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                    lineNumber: 814,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[15px] text-[#6E6E73] text-center mb-6",
                    children: "Du kannst jederzeit wechseln"
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                    lineNumber: 817,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3 mb-6",
                    children: plans.map((plan)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onSelect(plan.id),
                            className: `w-full p-4 rounded-xl bg-[#F2F2F7] text-left ios-tap-target ${currentPlan === plan.id ? "ring-2 ring-[#007AFF]" : ""}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[13px] font-bold text-[#007AFF] tracking-wide",
                                                children: plan.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 832,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[17px] font-semibold text-[#1D1D1F] mt-0.5",
                                                children: plan.subtitle
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 835,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "mt-2 space-y-1",
                                                children: plan.features.map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-[13px] text-[#6E6E73] flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[#30D158]",
                                                                children: "✓"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                                lineNumber: 844,
                                                                columnNumber: 25
                                                            }, this),
                                                            " ",
                                                            feature
                                                        ]
                                                    }, feature, true, {
                                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                        lineNumber: 840,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 838,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[15px] font-semibold text-[#1D1D1F] mt-3",
                                                children: plan.price
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 848,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 831,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-6 h-6 rounded-full border-2 flex items-center justify-center ${currentPlan === plan.id ? "border-[#007AFF] bg-[#007AFF]" : "border-[#C7C7CC]"}`,
                                        children: currentPlan === plan.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2.5 h-2.5 rounded-full bg-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                            lineNumber: 860,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 852,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 830,
                                columnNumber: 15
                            }, this)
                        }, plan.id, false, {
                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                            lineNumber: 823,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                    lineNumber: 821,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "w-full h-[44px] text-[#007AFF] text-[17px] ios-tap-target",
                    children: "Abbrechen"
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                    lineNumber: 868,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
            lineNumber: 813,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
        lineNumber: 812,
        columnNumber: 5
    }, this);
}
function Modal({ title, message, confirmLabel, confirmDestructive, onConfirm, onCancel }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white w-full max-w-[270px] rounded-2xl overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "sf-pro-display text-[17px] text-[#1D1D1F] mb-1",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                            lineNumber: 898,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[13px] text-[#6E6E73] leading-relaxed",
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                            lineNumber: 901,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                    lineNumber: 897,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-[#E5E5EA]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onCancel,
                            className: "w-full py-3 text-[17px] text-[#007AFF] border-b border-[#E5E5EA] ios-tap-target",
                            children: "Abbrechen"
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                            lineNumber: 906,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onConfirm,
                            className: `w-full py-3 text-[17px] font-semibold ios-tap-target ${confirmDestructive ? "text-[#FF3B30]" : "text-[#007AFF]"}`,
                            children: confirmLabel
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                            lineNumber: 912,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                    lineNumber: 905,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
            lineNumber: 896,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
        lineNumber: 895,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/heic-converter.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * HEIC Converter - Non-blocking HEIC to JPEG conversion
 * Uses Web Worker for iPad/iPhone performance optimization
 *
 * Phase 2: Performance Optimization
 */ __turbopack_context__.s([
    "convertHeicToJpeg",
    ()=>convertHeicToJpeg,
    "isHeicFile",
    ()=>isHeicFile,
    "terminateHeicWorker",
    ()=>terminateHeicWorker
]);
// Singleton worker instance
let worker = null;
let messageId = 0;
const pendingConversions = new Map();
/**
 * Initialize the HEIC worker (lazy initialization)
 */ function getWorker() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
/**
 * Handle messages from the worker
 */ function handleWorkerMessage(e) {
    const { id, success, file, blob, fileName, mimeType, converted, error, originalSize, convertedSize } = e.data;
    const pending = pendingConversions.get(id);
    if (!pending) return;
    pendingConversions.delete(id);
    if (!success) {
        pending.reject(new Error(error || 'Conversion failed'));
        return;
    }
    // If we got a blob back, create a File from it
    if (blob && converted) {
        const convertedFile = new File([
            blob
        ], fileName, {
            type: mimeType,
            lastModified: Date.now()
        });
        pending.resolve({
            file: convertedFile,
            converted: true,
            originalSize,
            convertedSize
        });
    } else {
        // Original file returned (not HEIC or conversion skipped)
        pending.resolve({
            file: file,
            converted: false
        });
    }
}
/**
 * Handle worker errors
 */ function handleWorkerError(error) {
    console.error('[HEIC] Worker error:', error);
    // Reject all pending conversions
    pendingConversions.forEach(({ reject })=>{
        reject(new Error('Worker error: ' + error.message));
    });
    pendingConversions.clear();
    // Reset worker for retry
    worker = null;
}
async function convertHeicToJpeg(file, quality = 0.92) {
    // Check if conversion is needed first
    const heicTypes = [
        'image/heic',
        'image/heif',
        'image/heic-sequence',
        'image/heif-sequence'
    ];
    const isHeic = heicTypes.includes(file.type?.toLowerCase()) || file.name?.toLowerCase().endsWith('.heic') || file.name?.toLowerCase().endsWith('.heif');
    if (!isHeic) {
        return {
            file,
            converted: false
        };
    }
    // Try to use Web Worker for non-blocking conversion
    const workerInstance = getWorker();
    if (workerInstance) {
        return new Promise((resolve, reject)=>{
            const id = ++messageId;
            pendingConversions.set(id, {
                resolve,
                reject
            });
            // Set timeout for conversion (2 minutes max)
            setTimeout(()=>{
                if (pendingConversions.has(id)) {
                    pendingConversions.delete(id);
                    console.warn('[HEIC] Worker timeout, falling back to main thread');
                    convertOnMainThread(file, quality).then(resolve).catch(reject);
                }
            }, 120000);
            workerInstance.postMessage({
                id,
                file,
                quality
            });
        });
    }
    // Fallback to main thread
    console.log('[HEIC] Using main thread conversion');
    return convertOnMainThread(file, quality);
}
/**
 * Fallback: Convert on main thread (blocks UI but works everywhere)
 */ async function convertOnMainThread(file, quality) {
    try {
        // Dynamic import heic2any
        const heic2any = (await __turbopack_context__.A("[project]/node_modules/heic2any/dist/heic2any.js [app-ssr] (ecmascript, async loader)")).default;
        const convertedBlob = await heic2any({
            blob: file,
            toType: 'image/jpeg',
            quality
        });
        const resultBlob = Array.isArray(convertedBlob) ? convertedBlob[0] : convertedBlob;
        const newFileName = file.name.replace(/\.(heic|heif)$/i, '.jpg');
        const convertedFile = new File([
            resultBlob
        ], newFileName, {
            type: 'image/jpeg',
            lastModified: file.lastModified
        });
        return {
            file: convertedFile,
            converted: true,
            originalSize: file.size,
            convertedSize: convertedFile.size
        };
    } catch (error) {
        console.error('[HEIC] Main thread conversion failed:', error);
        // Return original on error
        return {
            file,
            converted: false
        };
    }
}
function isHeicFile(file) {
    const heicTypes = [
        'image/heic',
        'image/heif',
        'image/heic-sequence',
        'image/heif-sequence'
    ];
    return heicTypes.includes(file.type?.toLowerCase()) || file.name?.toLowerCase().endsWith('.heic') || file.name?.toLowerCase().endsWith('.heif');
}
function terminateHeicWorker() {
    if (worker) {
        worker.terminate();
        worker = null;
        pendingConversions.clear();
        console.log('[HEIC] Worker terminated');
    }
}
}),
"[project]/src/hooks/use-gallery-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGalleryData",
    ()=>useGalleryData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$local$2d$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage/local-db.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/crypto.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$remote$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage/remote-storage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deviceId$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/deviceId.ts [app-ssr] (ecmascript)");
// HEIC conversion moved to Web Worker for non-blocking performance
// See src/lib/heic-converter.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$heic$2d$converter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/heic-converter.ts [app-ssr] (ecmascript)");
/**
 * useGalleryData Hook - Local Photo Gallery Management with IPFS Cloud Sync
 * Photos are encrypted client-side and stored on IPFS
 * Only metadata (CID, nonce, etc.) is stored in Supabase
 */ 'use client';
;
;
;
;
;
;
;
;
function useGalleryData(secretKey) {
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const [userKeyHash, setUserKeyHash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Generate Key Hash when secretKey changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (secretKey) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserKeyHash"])(secretKey).then(setUserKeyHash);
        } else {
            setUserKeyHash(null);
        }
    }, [
        secretKey
    ]);
    // Query: Load all photos from local IndexedDB
    // WICHTIG: Query ist IMMER enabled - IndexedDB braucht kein secretKey
    // Decryption passiert separat wenn secretKey vorhanden ist
    const { data: photos = [], isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'photos'
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$local$2d$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllPhotos"],
        enabled: true
    });
    // Query: Photo count
    const { data: photoCount = 0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'photoCount'
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$local$2d$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPhotoCount"]
    });
    const [uploadProgress, setUploadProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Mutation: Upload photo (convert HEIC -> encrypt -> IPFS -> Supabase metadata)
    const uploadMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: async (file)=>{
            if (!secretKey) throw new Error('No encryption key');
            if (!userKeyHash) throw new Error('userKeyHash not ready - bitte kurz warten');
            console.log('[Upload] Starting upload:', file.name);
            setUploadProgress(0);
            // Step 0: Convert HEIC to JPEG if needed (iOS compatibility)
            // Uses Web Worker for non-blocking conversion on iPad/iPhone
            const conversionResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$heic$2d$converter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertHeicToJpeg"])(file);
            const processedFile = conversionResult.file;
            if (conversionResult.converted) {
                console.log('[Upload] HEIC converted:', {
                    originalSize: conversionResult.originalSize,
                    convertedSize: conversionResult.convertedSize
                });
            }
            // Step 1: Encrypt file client-side
            const { encrypted, nonce } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encryptFile"])(processedFile, secretKey);
            console.log('[Upload] Encrypted:', {
                size: encrypted.size
            });
            // Step 2: Upload encrypted blob to IPFS -> returns real CID
            let cid;
            try {
                cid = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$remote$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["remoteStorage"].upload(encrypted, processedFile.name, (progress)=>{
                    setUploadProgress(progress);
                });
                console.log('[Upload] IPFS CID:', cid);
            } catch (error) {
                console.error('[Upload] IPFS failed:', error);
                // Generate fallback local CID for offline-first
                cid = `cid_${Date.now()}_${Math.random().toString(36).slice(2)}`;
                console.log('[Upload] Using fallback CID:', cid);
            }
            // Step 3: Save to local IndexedDB (for immediate access)
            const metadata = {
                cid,
                nonce,
                fileName: processedFile.name,
                mimeType: processedFile.type,
                fileSize: processedFile.size,
                uploadedAt: new Date(),
                encryptedBlob: encrypted
            };
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$local$2d$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["savePhoto"])(metadata);
                console.log('[Upload] Saved to IndexedDB:', cid);
            } catch (dbError) {
                console.error('[Upload] IndexedDB save FAILED:', dbError);
                throw dbError; // Fail the mutation - this is critical
            }
            // Step 4: Sync metadata to Supabase (CID only, no blob)
            const deviceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deviceId$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDeviceId"])();
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uploadCIDMetadata"])(cid, processedFile.size, deviceId, nonce, processedFile.type, userKeyHash // Jetzt garantiert nicht undefined
                );
                console.log('[Upload] Supabase synced:', cid);
            } catch (error) {
                console.error('[Upload] Supabase sync failed (local + IPFS OK):', error);
            // Don't throw - local + IPFS save succeeded
            }
            return metadata;
        },
        onSuccess: ()=>{
            // Sofort Queries invalidieren für UI-Update
            queryClient.invalidateQueries({
                queryKey: [
                    'photos'
                ]
            });
            queryClient.invalidateQueries({
                queryKey: [
                    'photoCount'
                ]
            });
            console.log('[Upload] Complete - queries invalidated');
        },
        onError: (error)=>{
            console.error('[Upload] Mutation failed:', error);
        }
    });
    // Mutation: Delete photo
    const deleteMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: async (id)=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$local$2d$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deletePhoto"])(id);
        // Note: IPFS content is immutable - we just remove our reference
        // In production, you might want to unpin from Pinata
        },
        onSuccess: ()=>{
            queryClient.invalidateQueries({
                queryKey: [
                    'photos'
                ]
            });
            queryClient.invalidateQueries({
                queryKey: [
                    'photoCount'
                ]
            });
        }
    });
    // Decrypt photo for display
    const decryptPhoto = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (photo)=>{
        if (!secretKey || !photo.encryptedBlob) return null;
        const decrypted = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decryptFile"])(photo.encryptedBlob, photo.nonce, secretKey, photo.mimeType);
        if (!decrypted) return null;
        return URL.createObjectURL(decrypted);
    }, [
        secretKey
    ]);
    return {
        photos,
        photoCount,
        isLoading,
        error,
        uploadPhoto: uploadMutation.mutate,
        deletePhoto: deleteMutation.mutate,
        decryptPhoto,
        isUploading: uploadMutation.isPending,
        uploadProgress,
        userKeyHash
    };
}
}),
"[project]/src/hooks/useRealtimeSync.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRealtimeSync",
    ()=>useRealtimeSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deviceId$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/deviceId.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/crypto.ts [app-ssr] (ecmascript)");
/**
 * useRealtimeSync Hook - Real-time METADATA sync across devices via Supabase
 *
 * This is a "thin" sync layer - it ONLY syncs metadata (CIDs, nonce, etc.)
 * The actual photo content stays on IPFS and is fetched on-demand by the UI
 *
 * PHASE 3 FIXES:
 * - Fixed race conditions with proper ref usage
 * - Added debouncing for rapid events
 * - Separated subscription setup from data loading
 * - Proper cleanup on unmount
 */ 'use client';
;
;
;
;
function useRealtimeSync(options = {}) {
    const { onNewPhoto, onPhotoDeleted, enabled = true, secretKey } = options;
    const [remoteCIDs, setRemoteCIDs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastSyncError, setLastSyncError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userKeyHash, setUserKeyHash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Refs to avoid stale closures in callbacks
    const userKeyHashRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const deviceIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])('server');
    const onNewPhotoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onNewPhoto);
    const onPhotoDeletedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onPhotoDeleted);
    const channelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isSubscribedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Update refs when values change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        onNewPhotoRef.current = onNewPhoto;
        onPhotoDeletedRef.current = onPhotoDeleted;
    }, [
        onNewPhoto,
        onPhotoDeleted
    ]);
    // Initialize device ID (only on client)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    // Generate Key Hash when secretKey changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let isMounted = true;
        if (secretKey) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserKeyHash"])(secretKey).then((hash)=>{
                if (isMounted) {
                    setUserKeyHash(hash);
                    userKeyHashRef.current = hash;
                }
            });
        } else {
            setUserKeyHash(null);
            userKeyHashRef.current = null;
        }
        return ()=>{
            isMounted = false;
        };
    }, [
        secretKey
    ]);
    // Load initial CIDs from Supabase (metadata only)
    // Using ref for userKeyHash to avoid recreating callback
    const loadRemoteCIDs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        const currentKeyHash = userKeyHashRef.current;
        const currentDeviceId = deviceIdRef.current;
        if (!currentKeyHash) return [];
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadCIDsFromSupabase"])(currentDeviceId, currentKeyHash);
            const photos = data.map((row)=>({
                    cid: row.cid,
                    device_id: row.device_id,
                    uploaded_at: row.uploaded_at,
                    file_size_bytes: row.file_size_bytes,
                    nonce: row.nonce || null,
                    mime_type: row.mime_type || null,
                    isFromOtherDevice: row.device_id !== currentDeviceId
                }));
            setRemoteCIDs(photos);
            setLastSyncError(null);
            return photos;
        } catch (error) {
            console.error('Failed to load remote CIDs:', error);
            setLastSyncError(error);
            return [];
        }
    }, []); // Empty deps - uses refs
    // Load data when userKeyHash becomes available
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (userKeyHash && enabled) {
            loadRemoteCIDs();
        }
    }, [
        userKeyHash,
        enabled,
        loadRemoteCIDs
    ]);
    // Subscribe to realtime changes - SEPARATE from data loading
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        // Debounce helper for rapid events
        let eventQueue;
        let debounceTimer;
        const processEventQueue = undefined;
        const channel = undefined;
    }, [
        enabled,
        userKeyHash
    ]); // Only depend on enabled and userKeyHash
    // Force refresh
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        return loadRemoteCIDs();
    }, [
        loadRemoteCIDs
    ]);
    // Get CIDs from other devices only
    const remoteCIDsFromOtherDevices = remoteCIDs.filter((p)=>p.isFromOtherDevice);
    return {
        remoteCIDs,
        remoteCIDsFromOtherDevices,
        isConnected,
        lastSyncError,
        refresh,
        deviceId: deviceIdRef.current,
        userKeyHash
    };
}
}),
"[project]/src/components/photovault/DecryptedThumbnail.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DecryptedThumbnail",
    ()=>DecryptedThumbnail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud.js [app-ssr] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/custom-icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/crypto.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$remote$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage/remote-storage.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function DecryptedThumbnail({ photo, secretKey, showCloudBadge = true }) {
    const [imageUrl, setImageUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDecrypting, setIsDecrypting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFetchingFromCloud, setIsFetchingFromCloud] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCloudPhoto, setIsCloudPhoto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Track the current image URL for cleanup
    const currentUrlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Skip if no key or already have URL
        if (!secretKey || imageUrl) return;
        const loadAndDecrypt = async ()=>{
            setIsDecrypting(true);
            try {
                let blobToDecrypt = photo.encryptedBlob;
                // If no local blob, try to fetch from IPFS (cloud)
                if (!blobToDecrypt && photo.cid && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$remote$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isRealIPFSCID"])(photo.cid)) {
                    setIsFetchingFromCloud(true);
                    setIsCloudPhoto(true);
                    console.log('Fetching from IPFS for thumbnail:', photo.cid);
                    try {
                        blobToDecrypt = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$remote$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["remoteStorage"].download(photo.cid);
                        console.log('Fetched from IPFS:', {
                            cid: photo.cid,
                            size: blobToDecrypt.size
                        });
                    } catch (fetchError) {
                        console.error(`Failed to fetch from IPFS (CID: ${photo.cid}):`, fetchError);
                        setError(true);
                        return;
                    } finally{
                        setIsFetchingFromCloud(false);
                    }
                }
                // If still no blob, show error
                if (!blobToDecrypt) {
                    console.log('No blob available for:', photo.cid);
                    // Don't set error - this might be a cloud-only photo not yet fetched
                    setIsCloudPhoto(true);
                    return;
                }
                // Decrypt the blob
                const decrypted = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decryptFile"])(blobToDecrypt, photo.nonce, secretKey, photo.mimeType);
                if (decrypted) {
                    const url = URL.createObjectURL(decrypted);
                    currentUrlRef.current = url;
                    setImageUrl(url);
                } else {
                    setError(true);
                }
            } catch (err) {
                console.error("Failed to decrypt photo:", photo.cid, err);
                setError(true);
            } finally{
                setIsDecrypting(false);
            }
        };
        loadAndDecrypt();
        // Cleanup: Revoke object URL when component unmounts or photo changes
        return ()=>{
            if (currentUrlRef.current) {
                // Delay revocation slightly to avoid WebKitBlobResource-Fehler on some browsers
                // while the image might still be painting or being accessed
                const urlToRevoke = currentUrlRef.current;
                setTimeout(()=>{
                    try {
                        URL.revokeObjectURL(urlToRevoke);
                    } catch (e) {
                    // Ignore errors during revocation
                    }
                }, 1000);
                currentUrlRef.current = null;
            }
        };
    }, [
        photo,
        secretKey,
        imageUrl
    ]);
    // Error state
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full flex flex-col items-center justify-center bg-red-50 text-red-500 p-2 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomIcon"], {
                    name: "lock",
                    size: 24,
                    className: "mb-1 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/DecryptedThumbnail.tsx",
                    lineNumber: 115,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[10px]",
                    children: "Fehler"
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/DecryptedThumbnail.tsx",
                    lineNumber: 116,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/photovault/DecryptedThumbnail.tsx",
            lineNumber: 114,
            columnNumber: 13
        }, this);
    }
    // Loading state (fetching from cloud)
    if (isFetchingFromCloud) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full flex flex-col items-center justify-center bg-blue-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"], {
                    className: "w-5 h-5 text-blue-400 mb-1 animate-pulse"
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/DecryptedThumbnail.tsx",
                    lineNumber: 125,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "w-4 h-4 animate-spin text-blue-400"
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/DecryptedThumbnail.tsx",
                    lineNumber: 126,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[9px] text-blue-500 mt-1",
                    children: "Laden..."
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/DecryptedThumbnail.tsx",
                    lineNumber: 127,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/photovault/DecryptedThumbnail.tsx",
            lineNumber: 124,
            columnNumber: 13
        }, this);
    }
    // Loading state (decrypting)
    if (isDecrypting || !imageUrl) {
        // Cloud-only photo placeholder
        if (isCloudPhoto && !imageUrl && !isDecrypting) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full flex flex-col items-center justify-center bg-gray-100 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"], {
                        className: "w-6 h-6 text-gray-400"
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/DecryptedThumbnail.tsx",
                        lineNumber: 138,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[9px] text-gray-500 mt-1",
                        children: "In der Cloud"
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/DecryptedThumbnail.tsx",
                        lineNumber: 139,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/photovault/DecryptedThumbnail.tsx",
                lineNumber: 137,
                columnNumber: 17
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full flex items-center justify-center bg-gray-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "w-6 h-6 animate-spin text-gray-400"
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/DecryptedThumbnail.tsx",
                lineNumber: 146,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/photovault/DecryptedThumbnail.tsx",
            lineNumber: 145,
            columnNumber: 13
        }, this);
    }
    // Image loaded - show with optional cloud badge
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: imageUrl,
                alt: "",
                className: "w-full h-full object-cover animate-in fade-in duration-500",
                loading: "lazy"
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/DecryptedThumbnail.tsx",
                lineNumber: 154,
                columnNumber: 13
            }, this),
            showCloudBadge && isCloudPhoto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-1 right-1 bg-black/50 rounded-full p-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"], {
                    className: "w-3 h-3 text-white"
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/DecryptedThumbnail.tsx",
                    lineNumber: 163,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/DecryptedThumbnail.tsx",
                lineNumber: 162,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/photovault/DecryptedThumbnail.tsx",
        lineNumber: 153,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/photovault/PhotoGallery.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhotoGallery",
    ()=>PhotoGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js [app-ssr] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud-off.js [app-ssr] (ecmascript) <export default as CloudOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud.js [app-ssr] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/custom-icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$encryption$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-encryption.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$gallery$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-gallery-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRealtimeSync$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useRealtimeSync.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$photovault$2f$DecryptedThumbnail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/photovault/DecryptedThumbnail.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$remote$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage/remote-storage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/crypto.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
// Generate placeholder photo URLs with dates
const generatePhotos = (count)=>{
    const categories = [
        "nature",
        "architecture",
        "travel",
        "food",
        "animals",
        "city",
        "landscape",
        "portrait",
        "ocean",
        "forest"
    ];
    // Create photos with dates going backwards from today
    const today = new Date();
    return Array.from({
        length: count
    }, (_, i)=>{
        const date = new Date(today);
        date.setDate(date.getDate() - Math.floor(i / 3)); // 3 photos per day
        return {
            id: `photo-${i}`,
            cid: `Qm${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`,
            placeholderUrl: `https://picsum.photos/seed/${i + 100}/400/400`,
            category: categories[i % categories.length],
            date: date.toISOString().split("T")[0],
            metadata: undefined
        };
    });
};
// Group photos by date
const groupPhotosByDate = (photos)=>{
    const groups = {};
    photos.forEach((photo)=>{
        if (!groups[photo.date]) {
            groups[photo.date] = [];
        }
        groups[photo.date].push(photo);
    });
    return Object.entries(groups).map(([date, photos])=>({
            date,
            photos,
            label: formatDateLabel(date)
        }));
};
const formatDateLabel = (dateStr)=>{
    const date = new Date(dateStr);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    if (dateStr === today.toISOString().split("T")[0]) {
        return "Heute";
    } else if (dateStr === yesterday.toISOString().split("T")[0]) {
        return "Gestern";
    } else {
        return date.toLocaleDateString("de-DE", {
            weekday: "long",
            day: "numeric",
            month: "long"
        });
    }
};
function PhotoGallery({ photosCount = 0, authUser }) {
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [showSearch, setShowSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showFilter, setShowFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedFilter, setSelectedFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectMode, setSelectMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedPhotos, setSelectedPhotos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [fullscreenPhoto, setFullscreenPhoto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [syncNotification, setSyncNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Fullscreen photo state
    const [fullscreenImageUrl, setFullscreenImageUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoadingFullscreen, setIsLoadingFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDownloading, setIsDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const longPressTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Encryption & Real Photo Storage
    const { secretKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$encryption$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEncryption"])();
    const { photos: realPhotos, uploadPhoto, isUploading, uploadProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$gallery$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGalleryData"])(secretKey);
    // Realtime Sync - receive photos from other devices
    const handleNewPhoto = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((photo)=>{
        console.log('New photo from device:', photo.device_id);
        setSyncNotification(`Neues Foto von anderem Gerät empfangen`);
        setTimeout(()=>setSyncNotification(null), 3000);
    }, []);
    const { remoteCIDs, remoteCIDsFromOtherDevices, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRealtimeSync$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRealtimeSync"])({
        onNewPhoto: handleNewPhoto,
        enabled: true,
        secretKey
    });
    // Combine local photos with remote-only photos
    const allPhotos = (()=>{
        // Start with local photos
        const localPhotos = realPhotos.map((p)=>({
                id: p.id?.toString() || p.cid,
                cid: p.cid,
                placeholderUrl: "",
                category: "photo",
                date: p.uploadedAt.toISOString().split("T")[0],
                metadata: p,
                isLocal: true,
                isCloud: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$remote$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isRealIPFSCID"])(p.cid)
            }));
        // Add remote-only photos (from other devices, not in local DB)
        const localCids = new Set(realPhotos.map((p)=>p.cid));
        const remoteOnlyPhotos = remoteCIDs.filter((r)=>!localCids.has(r.cid)).map((r)=>({
                id: r.cid,
                cid: r.cid,
                placeholderUrl: "",
                category: "cloud",
                date: r.uploaded_at ? new Date(r.uploaded_at).toISOString().split("T")[0] : new Date().toISOString().split("T")[0],
                metadata: {
                    cid: r.cid,
                    nonce: r.nonce || '',
                    fileName: `cloud_${r.cid}`,
                    mimeType: r.mime_type || 'image/jpeg',
                    fileSize: r.file_size_bytes || 0,
                    uploadedAt: r.uploaded_at ? new Date(r.uploaded_at) : new Date()
                },
                isLocal: false,
                isCloud: true
            }));
        return [
            ...localPhotos,
            ...remoteOnlyPhotos
        ];
    })();
    // Use real photos if available, otherwise use placeholders
    const photos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>allPhotos.length > 0 ? allPhotos : generatePhotos(Math.min(photosCount, 50)), [
        allPhotos,
        photosCount
    ]);
    const filteredPhotos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>photos.filter((photo)=>{
            if (selectedFilter && photo.category !== selectedFilter) return false;
            if (searchQuery && !photo.category.includes(searchQuery.toLowerCase())) return false;
            return true;
        }), [
        photos,
        selectedFilter,
        searchQuery
    ]);
    const filteredGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>groupPhotosByDate(filteredPhotos), [
        filteredPhotos
    ]);
    // Load fullscreen photo (on-demand from IPFS if needed)
    const loadFullscreenPhoto = async (photo)=>{
        if (!secretKey || !photo.metadata) return;
        setIsLoadingFullscreen(true);
        setFullscreenImageUrl(null);
        try {
            let blobToDecrypt = photo.metadata.encryptedBlob;
            // Fetch from IPFS if not local
            if (!blobToDecrypt && photo.cid && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$remote$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isRealIPFSCID"])(photo.cid)) {
                console.log('Loading full-res from IPFS:', photo.cid);
                blobToDecrypt = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$remote$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["remoteStorage"].download(photo.cid);
            }
            if (!blobToDecrypt) {
                console.error('No blob available for fullscreen');
                return;
            }
            // Decrypt
            const decrypted = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decryptFile"])(blobToDecrypt, photo.metadata.nonce, secretKey, photo.metadata.mimeType);
            if (decrypted) {
                const url = URL.createObjectURL(decrypted);
                setFullscreenImageUrl(url);
            }
        } catch (error) {
            console.error('Failed to load fullscreen photo:', error);
        } finally{
            setIsLoadingFullscreen(false);
        }
    };
    // Download photo to device
    const downloadPhoto = async (photo)=>{
        if (!secretKey || !photo.metadata) return;
        setIsDownloading(true);
        try {
            let blobToDecrypt = photo.metadata.encryptedBlob;
            // Fetch from IPFS if not local
            if (!blobToDecrypt && photo.cid && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$remote$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isRealIPFSCID"])(photo.cid)) {
                blobToDecrypt = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$remote$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["remoteStorage"].download(photo.cid);
            }
            if (!blobToDecrypt) return;
            // Decrypt
            const decrypted = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decryptFile"])(blobToDecrypt, photo.metadata.nonce, secretKey, photo.metadata.mimeType);
            if (decrypted) {
                // Create download link
                const url = URL.createObjectURL(decrypted);
                const a = document.createElement('a');
                a.href = url;
                a.download = photo.metadata.fileName || `photo_${photo.cid.slice(0, 8)}.jpg`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
                setSyncNotification('Foto heruntergeladen!');
                setTimeout(()=>setSyncNotification(null), 2000);
            }
        } catch (error) {
            console.error('Failed to download photo:', error);
        } finally{
            setIsDownloading(false);
        }
    };
    const handlePhotoTap = (photoId, photo)=>{
        if (selectMode) {
            setSelectedPhotos((prev)=>{
                const newSet = new Set(prev);
                if (newSet.has(photoId)) {
                    newSet.delete(photoId);
                } else {
                    newSet.add(photoId);
                }
                return newSet;
            });
        } else {
            setFullscreenPhoto(photoId);
            if (photo.metadata) {
                loadFullscreenPhoto(photo);
            }
        }
    };
    const closeFullscreen = ()=>{
        setFullscreenPhoto(null);
        if (fullscreenImageUrl) {
            URL.revokeObjectURL(fullscreenImageUrl);
            setFullscreenImageUrl(null);
        }
    };
    const handleTouchStart = (photoId)=>{
        longPressTimer.current = setTimeout(()=>{
            setSelectMode(true);
            setSelectedPhotos(new Set([
                photoId
            ]));
        }, 500);
    };
    const handleTouchEnd = ()=>{
        if (longPressTimer.current) {
            clearTimeout(longPressTimer.current);
            longPressTimer.current = null;
        }
    };
    const categories = [
        {
            id: "nature",
            label: "Natur"
        },
        {
            id: "architecture",
            label: "Architektur"
        },
        {
            id: "travel",
            label: "Reisen"
        },
        {
            id: "food",
            label: "Essen"
        },
        {
            id: "animals",
            label: "Tiere"
        },
        {
            id: "city",
            label: "Stadt"
        },
        {
            id: "landscape",
            label: "Landschaft"
        }
    ];
    // Handle file upload
    const handleFileUpload = (e)=>{
        const files = Array.from(e.target.files || []);
        files.forEach((file)=>uploadPhoto(file));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full bg-[#F2F2F7]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "h-[60px] bg-white border-b border-[#E5E5EA] px-4 flex items-center justify-between shrink-0",
                children: showSearch ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 bg-[#E5E5EA] rounded-lg px-3 py-2 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomIcon"], {
                                    name: "search",
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                    lineNumber: 335,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Suchen...",
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value),
                                    className: "flex-1 bg-transparent text-[15px] text-[#1D1D1F] outline-none",
                                    autoFocus: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                    lineNumber: 336,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                            lineNumber: 334,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setShowSearch(false);
                                setSearchQuery("");
                            },
                            className: "text-[17px] text-[#007AFF] ios-tap-target",
                            children: "Abbrechen"
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                            lineNumber: 345,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                    lineNumber: 333,
                    columnNumber: 21
                }, this) : selectMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setSelectMode(false);
                                setSelectedPhotos(new Set());
                            },
                            className: "text-[17px] text-[#007AFF] ios-tap-target",
                            children: "Abbrechen"
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                            lineNumber: 357,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sketch-body text-[17px] text-[#1D1D1F]",
                            children: [
                                selectedPhotos.size,
                                " ausgewählt"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                            lineNumber: 366,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                console.log("TODO: Delete selected photos", Array.from(selectedPhotos));
                            },
                            className: "text-[17px] text-[#FF3B30] ios-tap-target",
                            children: "Löschen"
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                            lineNumber: 369,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomIcon"], {
                                    name: "lock",
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                    lineNumber: 384,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "sketch-subheading text-[20px] text-[#1D1D1F]",
                                    children: "Galerie"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                    lineNumber: 385,
                                    columnNumber: 29
                                }, this),
                                isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"], {
                                    className: "w-4 h-4 text-[#007AFF]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                    lineNumber: 390,
                                    columnNumber: 33
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudOff$3e$__["CloudOff"], {
                                    className: "w-4 h-4 text-[#8E8E93]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                    lineNumber: 392,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                            lineNumber: 383,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "ios-tap-target cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: isUploading ? "animate-pulse opacity-50" : "",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomIcon"], {
                                                name: "upload",
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                                lineNumber: 399,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                            lineNumber: 398,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            multiple: true,
                                            accept: "image/*",
                                            onChange: handleFileUpload,
                                            className: "hidden",
                                            disabled: isUploading
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                            lineNumber: 401,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                    lineNumber: 397,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowSearch(true),
                                    className: "ios-tap-target",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomIcon"], {
                                        name: "search",
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                        lineNumber: 414,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                    lineNumber: 410,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowFilter(!showFilter),
                                    className: "ios-tap-target",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
                                        className: `w-6 h-6 ${selectedFilter ? "text-[#30D158]" : "text-[#007AFF]"}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                        lineNumber: 420,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                    lineNumber: 416,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                            lineNumber: 395,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                lineNumber: 331,
                columnNumber: 13
            }, this),
            showFilter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border-b border-[#E5E5EA] px-4 py-3 shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 overflow-x-auto pb-1 -mx-1 px-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSelectedFilter(null),
                            className: `px-4 py-1.5 rounded-full text-[15px] whitespace-nowrap shrink-0 ${selectedFilter === null ? "bg-[#007AFF] text-white" : "bg-[#E5E5EA] text-[#1D1D1F]"}`,
                            children: "Alle"
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                            lineNumber: 433,
                            columnNumber: 25
                        }, this),
                        categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedFilter(cat.id),
                                className: `px-4 py-1.5 rounded-full text-[15px] whitespace-nowrap shrink-0 ${selectedFilter === cat.id ? "bg-[#007AFF] text-white" : "bg-[#E5E5EA] text-[#1D1D1F]"}`,
                                children: cat.label
                            }, cat.id, false, {
                                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                lineNumber: 444,
                                columnNumber: 29
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                    lineNumber: 432,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                lineNumber: 431,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto",
                children: [
                    filteredGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sticky top-0 bg-[#F2F2F7]/95 backdrop-blur-sm px-3 py-2 z-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[13px] font-semibold text-[#6E6E73]",
                                        children: group.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                        lineNumber: 466,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                    lineNumber: 465,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-[2px] md:gap-1 px-[2px] md:px-1",
                                    children: group.photos.map((photo)=>{
                                        const isRealPhoto = photo.metadata !== undefined;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handlePhotoTap(photo.id, photo),
                                            onTouchStart: ()=>handleTouchStart(photo.id),
                                            onTouchEnd: handleTouchEnd,
                                            onTouchCancel: handleTouchEnd,
                                            onContextMenu: (e)=>{
                                                e.preventDefault();
                                                setSelectMode(true);
                                                setSelectedPhotos(new Set([
                                                    photo.id
                                                ]));
                                            },
                                            className: "relative aspect-square overflow-hidden bg-[#E5E5EA]",
                                            children: [
                                                isRealPhoto ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$photovault$2f$DecryptedThumbnail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DecryptedThumbnail"], {
                                                    photo: photo.metadata,
                                                    secretKey: secretKey,
                                                    showCloudBadge: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                                    lineNumber: 491,
                                                    columnNumber: 45
                                                }, this) : photo.placeholderUrl ? // Placeholder photo (demo data)
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: photo.placeholderUrl,
                                                    alt: "",
                                                    className: "w-full h-full object-cover",
                                                    loading: "lazy"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                                    lineNumber: 498,
                                                    columnNumber: 45
                                                }, this) : null,
                                                selectMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-black/20",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `absolute top-2 right-2 w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedPhotos.has(photo.id) ? "bg-[#007AFF] border-[#007AFF]" : "border-white bg-black/30"}`,
                                                        children: selectedPhotos.has(photo.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "w-4 h-4 text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                                            lineNumber: 516,
                                                            columnNumber: 57
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                                        lineNumber: 508,
                                                        columnNumber: 49
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                                    lineNumber: 507,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, photo.id, true, {
                                            fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                            lineNumber: 477,
                                            columnNumber: 37
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                    lineNumber: 472,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, group.date, true, {
                            fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                            lineNumber: 463,
                            columnNumber: 21
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-6 px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[13px] text-[#8E8E93]",
                                children: "Lange drücken zum Auswählen • Tippen zum Öffnen"
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                lineNumber: 530,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-[#C7C7CC] mt-1",
                                children: [
                                    realPhotos.length,
                                    " Fotos lokal • ",
                                    remoteCIDs.length,
                                    " in der Cloud"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                lineNumber: 533,
                                columnNumber: 21
                            }, this),
                            remoteCIDsFromOtherDevices.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[11px] text-[#007AFF] mt-1 flex items-center justify-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomIcon"], {
                                        name: "smartphone",
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                        lineNumber: 538,
                                        columnNumber: 29
                                    }, this),
                                    remoteCIDsFromOtherDevices.length,
                                    " von anderen Geräten"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                lineNumber: 537,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                        lineNumber: 529,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                lineNumber: 461,
                columnNumber: 13
            }, this),
            syncNotification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-[70px] left-1/2 -translate-x-1/2 bg-[#1D1D1F] text-white px-4 py-2 rounded-full text-[13px] flex items-center gap-2 z-50 animate-pulse",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                        lineNumber: 548,
                        columnNumber: 21
                    }, this),
                    syncNotification
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                lineNumber: 547,
                columnNumber: 17
            }, this),
            fullscreenPhoto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black z-50 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "h-[60px] flex items-center justify-between px-4 bg-black/80",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: closeFullscreen,
                                className: "ios-tap-target",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-6 h-6 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                    lineNumber: 561,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                lineNumber: 557,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[17px] text-white",
                                children: [
                                    "Foto ",
                                    photos.findIndex((p)=>p.id === fullscreenPhoto) + 1,
                                    " von",
                                    " ",
                                    photos.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                lineNumber: 563,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                lineNumber: 567,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                        lineNumber: 556,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex items-center justify-center p-4",
                        children: isLoadingFullscreen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "w-12 h-12 animate-spin text-white/60"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                    lineNumber: 572,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/60 text-center",
                                    children: "Lade von IPFS..."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                    lineNumber: 573,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                            lineNumber: 571,
                            columnNumber: 29
                        }, this) : fullscreenImageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: fullscreenImageUrl,
                            alt: "",
                            className: "max-w-full max-h-full object-contain rounded-lg"
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                            lineNumber: 578,
                            columnNumber: 29
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomIcon"], {
                                    name: "lock",
                                    size: 64
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                    lineNumber: 585,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/80 text-center",
                                    children: "Verschlüsseltes Foto"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                    lineNumber: 586,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                            lineNumber: 584,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                        lineNumber: 569,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "h-[80px] flex items-center justify-center gap-6 bg-black/80 px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    const photo = photos.find((p)=>p.id === fullscreenPhoto);
                                    if (photo) downloadPhoto(photo);
                                },
                                disabled: isDownloading,
                                className: "flex flex-col items-center gap-1 ios-tap-target",
                                children: [
                                    isDownloading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "w-6 h-6 animate-spin text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                        lineNumber: 603,
                                        columnNumber: 33
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "w-6 h-6 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                        lineNumber: 605,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] text-white/80",
                                        children: "Herunterladen"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                        lineNumber: 607,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                lineNumber: 594,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomIcon"], {
                                        name: "lock",
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                        lineNumber: 612,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] text-white/60",
                                        children: "Verschlüsselt"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                        lineNumber: 613,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                lineNumber: 611,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                        lineNumber: 592,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                lineNumber: 555,
                columnNumber: 17
            }, this),
            isUploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] flex items-center justify-center p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white w-full max-w-[280px] rounded-2xl p-6 shadow-2xl flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 rounded-full bg-[#007AFF]/10 flex items-center justify-center mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "w-8 h-8 text-[#007AFF] animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                lineNumber: 623,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                            lineNumber: 622,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "sketch-subheading text-[17px] font-semibold text-[#1D1D1F] mb-1",
                            children: [
                                "Foto wird gesichert (",
                                uploadProgress,
                                "%)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                            lineNumber: 625,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "sketch-subheading text-[20px] mb-2 text-center",
                            children: "Verschlüsselung & IPFS-Upload wird durchgeführt..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                            lineNumber: 628,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full bg-[#E5E5EA] h-1.5 rounded-full mt-4 overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#007AFF] h-full transition-all duration-300",
                                style: {
                                    width: `${uploadProgress}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                lineNumber: 632,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                            lineNumber: 631,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                    lineNumber: 621,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                lineNumber: 620,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
        lineNumber: 329,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/photovault/PhotoVaultApp.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhotoVaultApp",
    ()=>PhotoVaultApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/custom-icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$shield$2d$loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/shield-loader.tsx [app-ssr] (ecmascript)");
// Screens
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$photovault$2f$AuthScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/photovault/AuthScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$photovault$2f$UnlockVaultScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/photovault/UnlockVaultScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$photovault$2f$VaultSetupScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/photovault/VaultSetupScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$photovault$2f$SettingsPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/photovault/SettingsPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$photovault$2f$PhotoGallery$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/photovault/PhotoGallery.tsx [app-ssr] (ecmascript)");
// Auth
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth-client.ts [app-ssr] (ecmascript)");
// Crypto
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/crypto.ts [app-ssr] (ecmascript)");
// Device & Supabase
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deviceId$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/deviceId.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const defaultState = {
    isOnboarded: false,
    backupActive: false,
    selectedPlan: "free",
    autoBackupEnabled: true,
    backgroundBackupEnabled: false,
    photosCount: 0,
    lastBackup: "Noch nie",
    permanence: 0,
    encryptionKey: "",
    backupPhrase: [],
    devices: [],
    photoSource: "photos-app"
};
function PhotoVaultApp() {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultState);
    const [currentScreen, setCurrentScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("gallery");
    const [appPhase, setAppPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("loading");
    const [authUser, setAuthUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Better Auth session hook
    const { data: session, isPending: isSessionLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    // Ref-Guard: Verhindert mehrfache Device-Registrierung pro Session
    const hasRegisteredDevice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Register device for authenticated user (nur einmal pro Session)
    const registerDeviceForUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (keyHash, userId)=>{
        // Guard: Nur einmal registrieren
        if (hasRegisteredDevice.current) {
            console.log("[Device] Already registered this session, skipping");
            return;
        }
        try {
            const deviceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deviceId$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDeviceId"])();
            const deviceName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deviceId$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDeviceName"])();
            const deviceType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deviceId$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDeviceType"])();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerDevice"])(deviceId, deviceName, deviceType, keyHash, userId);
            hasRegisteredDevice.current = true; // Markiere als registriert
            console.log("[Device] Registered successfully:", deviceId);
        } catch (err) {
            console.error("[Device] Registration failed:", err);
        }
    }, []);
    // Initialize app - check auth state and local key
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const initializeApp = async ()=>{
            // Wait for session check to complete
            if (isSessionLoading) return;
            // No session - need to authenticate
            if (!session?.user) {
                setAppPhase("auth");
                return;
            }
            // Have session - fetch vault_key_hash from API (not session)
            const user = session.user;
            // Fetch the actual vault_key_hash from the database
            let vaultKeyHash = null;
            try {
                const response = await fetch("/api/auth/get-vault-key-hash");
                if (response.ok) {
                    const data = await response.json();
                    vaultKeyHash = data.vaultKeyHash;
                }
            } catch (err) {
                console.error("Failed to fetch vault_key_hash:", err);
            }
            setAuthUser({
                id: user.id,
                email: user.email,
                vaultKeyHash
            });
            const localKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadKeyFromStorage"])();
            if (localKey) {
                // Verify local key matches account's vault_key_hash (if set)
                const localKeyHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserKeyHash"])(localKey);
                if (vaultKeyHash && localKeyHash !== vaultKeyHash) {
                    // Key mismatch - user needs to enter correct recovery phrase
                    console.warn("Local key doesn't match account's vault_key_hash");
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearKeyFromStorage"])();
                    setAppPhase("unlock");
                    return;
                }
                // Register device
                await registerDeviceForUser(localKeyHash, user.id);
                // Ready to go
                setState((prev)=>({
                        ...prev,
                        isOnboarded: true
                    }));
                setAppPhase("main");
            } else if (vaultKeyHash) {
                // User has a vault but no local key - need to unlock
                setAppPhase("unlock");
            } else {
                // New user without vault - need to create one
                setAppPhase("setup");
            }
        };
        initializeApp();
    }, [
        session,
        isSessionLoading,
        registerDeviceForUser
    ]);
    // Handle successful auth (login/signup)
    const handleAuthSuccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (user)=>{
        // Fetch the actual vault_key_hash from the database
        let vaultKeyHash = user.vaultKeyHash;
        try {
            const response = await fetch("/api/auth/get-vault-key-hash");
            if (response.ok) {
                const data = await response.json();
                vaultKeyHash = data.vaultKeyHash;
            }
        } catch (err) {
            console.error("Failed to fetch vault_key_hash:", err);
        }
        const updatedUser = {
            ...user,
            vaultKeyHash
        };
        setAuthUser(updatedUser);
        // Check for local key
        const localKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadKeyFromStorage"])();
        if (localKey) {
            // User has local key - verify and proceed
            const keyHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserKeyHash"])(localKey);
            if (vaultKeyHash && keyHash !== vaultKeyHash) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearKeyFromStorage"])();
                setAppPhase("unlock");
            } else {
                await registerDeviceForUser(keyHash, user.id);
                setState((prev)=>({
                        ...prev,
                        isOnboarded: true
                    }));
                setAppPhase("main");
            }
        } else if (vaultKeyHash) {
            // User has vault but no local key
            setAppPhase("unlock");
        } else {
            // New user - create vault
            setAppPhase("setup");
        }
    }, [
        registerDeviceForUser
    ]);
    // Handle vault unlock (user entered recovery phrase)
    const handleVaultUnlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (secretKey, keyHash)=>{
        if (!authUser) return;
        // If user doesn't have vault_key_hash set, update it
        if (!authUser.vaultKeyHash) {
            await updateUserVaultKeyHash(authUser.id, keyHash);
            setAuthUser({
                ...authUser,
                vaultKeyHash: keyHash
            });
        }
        // Register device
        await registerDeviceForUser(keyHash, authUser.id);
        setState((prev)=>({
                ...prev,
                isOnboarded: true
            }));
        setAppPhase("main");
    }, [
        authUser,
        registerDeviceForUser
    ]);
    // Handle new vault creation
    const handleVaultCreated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (keyHash)=>{
        if (!authUser) return;
        // Update user's vault_key_hash (anchor key to account)
        await updateUserVaultKeyHash(authUser.id, keyHash);
        setAuthUser({
            ...authUser,
            vaultKeyHash: keyHash
        });
        // Register device
        await registerDeviceForUser(keyHash, authUser.id);
        setState((prev)=>({
                ...prev,
                isOnboarded: true
            }));
        setAppPhase("main");
    }, [
        authUser,
        registerDeviceForUser
    ]);
    // Handle logout
    const handleLogout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOut"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearKeyFromStorage"])();
        setAuthUser(null);
        setState(defaultState);
        setAppPhase("auth");
    }, []);
    const navigateTo = (screen)=>{
        setCurrentScreen(screen);
    };
    // Loading state
    if (appPhase === "loading" || isSessionLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$shield$2d$loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
            lineNumber: 260,
            columnNumber: 16
        }, this);
    }
    // Auth screen (login/signup)
    if (appPhase === "auth") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen ios-bg-gray",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1200px] mx-auto min-h-screen bg-[#F2F2F7]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$photovault$2f$AuthScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthScreen"], {
                    onSuccess: handleAuthSuccess
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
                    lineNumber: 268,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
                lineNumber: 267,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
            lineNumber: 266,
            columnNumber: 13
        }, this);
    }
    // Unlock vault screen (enter recovery phrase)
    if (appPhase === "unlock" && authUser) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen ios-bg-gray",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1200px] mx-auto min-h-screen bg-[#F2F2F7]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$photovault$2f$UnlockVaultScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnlockVaultScreen"], {
                    userEmail: authUser.email,
                    expectedKeyHash: authUser.vaultKeyHash,
                    onUnlock: handleVaultUnlock,
                    onCreateNewVault: ()=>setAppPhase("setup"),
                    onLogout: handleLogout
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
                    lineNumber: 279,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
                lineNumber: 278,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
            lineNumber: 277,
            columnNumber: 13
        }, this);
    }
    // Vault setup screen (create new vault)
    if (appPhase === "setup" && authUser) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen ios-bg-gray",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1200px] mx-auto min-h-screen bg-[#F2F2F7]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$photovault$2f$VaultSetupScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VaultSetupScreen"], {
                    userId: authUser.id,
                    onComplete: handleVaultCreated,
                    onBack: ()=>setAppPhase("unlock")
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
                    lineNumber: 296,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
                lineNumber: 295,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
            lineNumber: 294,
            columnNumber: 13
        }, this);
    }
    // Main app
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen ios-bg-gray",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1200px] mx-auto min-h-screen bg-[#F2F2F7] flex flex-col relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-hidden pb-[80px]",
                    children: [
                        currentScreen === "gallery" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$photovault$2f$PhotoGallery$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhotoGallery"], {
                            photosCount: state.photosCount,
                            authUser: authUser
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
                            lineNumber: 313,
                            columnNumber: 25
                        }, this),
                        currentScreen === "settings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$photovault$2f$SettingsPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SettingsPanel"], {
                            state: state,
                            setState: setState,
                            onRestartOnboarding: handleLogout,
                            authUser: authUser
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
                            lineNumber: 319,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
                    lineNumber: 311,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BottomNavigation, {
                    currentScreen: currentScreen,
                    onNavigate: navigateTo
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
                    lineNumber: 329,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
            lineNumber: 309,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
        lineNumber: 308,
        columnNumber: 9
    }, this);
}
// Helper function to update user's vault_key_hash via API
async function updateUserVaultKeyHash(userId, keyHash) {
    try {
        const response = await fetch("/api/auth/update-vault-key", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId,
                keyHash
            })
        });
        if (!response.ok) {
            throw new Error("Failed to update vault key hash");
        }
    } catch (err) {
        console.error("Failed to update vault_key_hash:", err);
        throw err;
    }
}
function BottomNavigation({ currentScreen, onNavigate }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed bottom-0 left-0 right-0 h-[80px] bg-white/80 backdrop-blur-xl border-t border-[#E5E5EA]/50 flex items-start justify-around pt-2 pb-6 max-w-[1200px] mx-auto safe-area-bottom z-40",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onNavigate("gallery"),
                className: "flex flex-col items-center gap-1 ios-tap-target px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomIcon"], {
                        name: "image",
                        size: 24,
                        className: currentScreen === "gallery" ? "text-[#007AFF]" : "text-[#6E6E73]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
                        lineNumber: 370,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-[10px] ${currentScreen === "gallery" ? "text-[#007AFF]" : "text-[#6E6E73]"}`,
                        children: "Galerie"
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
                        lineNumber: 375,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
                lineNumber: 366,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onNavigate("settings"),
                className: "flex flex-col items-center gap-1 ios-tap-target px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                        className: `w-6 h-6 ${currentScreen === "settings" ? "text-[#007AFF]" : "text-[#6E6E73]"}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
                        lineNumber: 387,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-[10px] ${currentScreen === "settings" ? "text-[#007AFF]" : "text-[#6E6E73]"}`,
                        children: "Einstellungen"
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
                        lineNumber: 390,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
                lineNumber: 383,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
        lineNumber: 364,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ac23737c._.js.map