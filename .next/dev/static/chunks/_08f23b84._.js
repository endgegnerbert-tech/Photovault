(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/shield-loader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
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
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "loader-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "peeking-photo-icon",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shield-container",
                children: [
                    Array.from({
                        length: particleCount
                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shield-structure",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "structure-line line-1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/shield-loader.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "structure-line line-2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/shield-loader.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "structure-line line-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/shield-loader.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c = ShieldLoader;
const __TURBOPACK__default__export__ = ShieldLoader;
var _c;
__turbopack_context__.k.register(_c, "ShieldLoader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/custom-icon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomIcon",
    ()=>CustomIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative inline-block shrink-0", className),
        style: {
            width: size,
            height: size
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_c = CustomIcon;
var _c;
__turbopack_context__.k.register(_c, "CustomIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/auth-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Better Auth Client Configuration
 *
 * React hooks for authentication in client components.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/better-auth/dist/client/react/index.mjs [app-client] (ecmascript) <locals>");
;
const authClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAuthClient"])({
    baseURL: ("TURBOPACK compile-time value", "https://photovault-mu.vercel.app") || "http://localhost:3000"
});
const { signIn, signUp, signOut, useSession, getSession } = authClient;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sketch-ui/SketchStyles.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SketchFilter",
    ()=>SketchFilter,
    "sketchClasses",
    ()=>sketchClasses,
    "sketchPaths",
    ()=>sketchPaths
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const SketchFilter = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "0",
        height: "0",
        style: {
            position: "absolute"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                    id: "sketch-filter",
                    x: "-10%",
                    y: "-10%",
                    width: "120%",
                    height: "120%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
                            type: "fractalNoise",
                            baseFrequency: "0.02",
                            numOctaves: "3",
                            result: "noise"
                        }, void 0, false, {
                            fileName: "[project]/sketch-ui/SketchStyles.tsx",
                            lineNumber: 28,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDisplacementMap", {
                            in: "SourceGraphic",
                            in2: "noise",
                            scale: "2",
                            xChannelSelector: "R",
                            yChannelSelector: "G"
                        }, void 0, false, {
                            fileName: "[project]/sketch-ui/SketchStyles.tsx",
                            lineNumber: 34,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/sketch-ui/SketchStyles.tsx",
                    lineNumber: 27,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                    id: "rough-edge",
                    x: "-5%",
                    y: "-5%",
                    width: "110%",
                    height: "110%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
                            type: "turbulence",
                            baseFrequency: "0.05",
                            numOctaves: "2",
                            result: "noise"
                        }, void 0, false, {
                            fileName: "[project]/sketch-ui/SketchStyles.tsx",
                            lineNumber: 43,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDisplacementMap", {
                            in: "SourceGraphic",
                            in2: "noise",
                            scale: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/sketch-ui/SketchStyles.tsx",
                            lineNumber: 49,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/sketch-ui/SketchStyles.tsx",
                    lineNumber: 42,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/sketch-ui/SketchStyles.tsx",
            lineNumber: 26,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/sketch-ui/SketchStyles.tsx",
        lineNumber: 25,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = SketchFilter;
const sketchClasses = {
    // Container mit handgezeichnetem Rand
    container: "relative bg-[#FAFBFC]",
    // Text-Stile
    heading: "font-['Architects Daughter',_cursive] text-[#1E40AF] text-3xl font-bold",
    subheading: "font-['Architects Daughter',_cursive] text-[#3B82F6] text-xl",
    body: "font-['Architects Daughter',_cursive] text-[#1E40AF] text-lg",
    // Interaktive Elemente
    button: "relative cursor-pointer transition-transform hover:scale-105 active:scale-95",
    // Linien
    line: "stroke-[#2563EB] stroke-[3] fill-none"
};
const sketchPaths = {
    // Rechteck mit unregelmäßigen Linien
    rectangle: (width, height, jitter = 3)=>{
        const j = ()=>(Math.random() - 0.5) * jitter;
        return `
      M ${j()} ${j()}
      L ${width + j()} ${j()}
      L ${width + j()} ${height + j()}
      L ${j()} ${height + j()}
      Z
    `;
    },
    // Kreis mit leichter Unregelmäßigkeit
    circle: (cx, cy, r, segments = 24)=>{
        let path = "";
        for(let i = 0; i <= segments; i++){
            const angle = i / segments * Math.PI * 2;
            const jitter = r * 0.03 * (Math.random() - 0.5);
            const x = cx + (r + jitter) * Math.cos(angle);
            const y = cy + (r + jitter) * Math.sin(angle);
            path += (i === 0 ? "M " : "L ") + `${x} ${y} `;
        }
        return path + "Z";
    }
};
var _c;
__turbopack_context__.k.register(_c, "SketchFilter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sketch-ui/SketchButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SketchButton",
    ()=>SketchButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function SketchButton({ children, onClick, variant = "primary", size = "md", disabled = false, className = "" }) {
    _s();
    // Generiere einmalig die "Jitter"-Werte für den handgezeichneten Effekt
    const jitterValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SketchButton.useMemo[jitterValues]": ()=>{
            return Array.from({
                length: 8
            }, {
                "SketchButton.useMemo[jitterValues]": ()=>(Math.random() - 0.5) * 4
            }["SketchButton.useMemo[jitterValues]"]);
        }
    }["SketchButton.useMemo[jitterValues]"], []);
    const sizes = {
        sm: {
            width: 120,
            height: 40,
            fontSize: "18px",
            padding: "8px 16px"
        },
        md: {
            width: 180,
            height: 50,
            fontSize: "22px",
            padding: "10px 24px"
        },
        lg: {
            width: 240,
            height: 60,
            fontSize: "26px",
            padding: "14px 32px"
        }
    };
    const colors = {
        primary: {
            stroke: "#2563EB",
            fill: "#2563EB",
            text: "#FFFFFF",
            hoverStroke: "#1D4ED8"
        },
        secondary: {
            stroke: "#3B82F6",
            fill: "#EFF6FF",
            text: "#2563EB",
            hoverStroke: "#2563EB"
        },
        outline: {
            stroke: "#2563EB",
            fill: "transparent",
            text: "#2563EB",
            hoverStroke: "#1D4ED8"
        }
    };
    const { width, height, fontSize, padding } = sizes[size];
    const { stroke, fill, text } = colors[variant];
    // Handgezeichneter Rechteck-Pfad
    const sketchPath = `
    M ${2 + jitterValues[0]} ${2 + jitterValues[1]}
    Q ${width / 4 + jitterValues[2]} ${-1 + jitterValues[3]}, ${width / 2} ${2 + jitterValues[4]}
    Q ${3 * width / 4 + jitterValues[5]} ${-1}, ${width - 2 + jitterValues[6]} ${2}
    Q ${width + 1} ${height / 4}, ${width - 2} ${height / 2}
    Q ${width + 1} ${3 * height / 4}, ${width - 2 + jitterValues[7]} ${height - 2}
    Q ${3 * width / 4} ${height + 1}, ${width / 2} ${height - 2}
    Q ${width / 4} ${height + 1}, ${2 + jitterValues[0]} ${height - 2}
    Q ${-1} ${3 * height / 4}, ${2} ${height / 2}
    Q ${-1} ${height / 4}, ${2 + jitterValues[1]} ${2}
    Z
  `;
    // Zweiter Durchgang für den "mehrfach gezeichnet" Effekt
    const sketchPath2 = `
    M ${3 + jitterValues[1]} ${3 + jitterValues[0]}
    Q ${width / 4 + jitterValues[3]} ${0 + jitterValues[2]}, ${width / 2} ${3}
    Q ${3 * width / 4} ${0}, ${width - 3 + jitterValues[4]} ${3}
    Q ${width} ${height / 4}, ${width - 3} ${height / 2}
    Q ${width} ${3 * height / 4}, ${width - 3 + jitterValues[5]} ${height - 3}
    Q ${3 * width / 4} ${height}, ${width / 2} ${height - 3}
    Q ${width / 4} ${height}, ${3 + jitterValues[6]} ${height - 3}
    Q ${0} ${3 * height / 4}, ${3} ${height / 2}
    Q ${0} ${height / 4}, ${3 + jitterValues[7]} ${3}
    Z
  `;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        disabled: disabled,
        className: `
        relative inline-block
        transition-transform duration-150
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:scale-[1.02] active:scale-[0.98]"}
        ${className}
      `,
        style: {
            width,
            height
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: width,
                height: height,
                viewBox: `0 0 ${width} ${height}`,
                className: "absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: sketchPath,
                        fill: fill,
                        stroke: "none"
                    }, void 0, false, {
                        fileName: "[project]/sketch-ui/SketchButton.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: sketchPath,
                        fill: "none",
                        stroke: stroke,
                        strokeWidth: "3",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        style: {
                            filter: "url(#rough-edge)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/sketch-ui/SketchButton.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: sketchPath2,
                        fill: "none",
                        stroke: stroke,
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        opacity: "0.6"
                    }, void 0, false, {
                        fileName: "[project]/sketch-ui/SketchButton.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sketch-ui/SketchButton.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "relative z-10 font-['Architects Daughter',_cursive] font-bold",
                style: {
                    fontSize,
                    color: text,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    padding
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/sketch-ui/SketchButton.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sketch-ui/SketchButton.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_s(SketchButton, "KbyE2bTo8JPTFdR2r3JHx3Pwneo=");
_c = SketchButton;
var _c;
__turbopack_context__.k.register(_c, "SketchButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sketch-ui/SketchCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SketchCard",
    ()=>SketchCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function SketchCard({ children, className = "", onClick, variant = "default" }) {
    _s();
    // Generiere Jitter für handgezeichnete Ecken
    const jitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SketchCard.useMemo[jitter]": ()=>{
            return Array.from({
                length: 12
            }, {
                "SketchCard.useMemo[jitter]": ()=>(Math.random() - 0.5) * 6
            }["SketchCard.useMemo[jitter]"]);
        }
    }["SketchCard.useMemo[jitter]"], []);
    const variantStyles = {
        default: {
            fill: "#FFFFFF",
            stroke: "#2563EB",
            strokeWidth: 3
        },
        elevated: {
            fill: "#FFFFFF",
            stroke: "#2563EB",
            strokeWidth: 4
        },
        outline: {
            fill: "transparent",
            stroke: "#3B82F6",
            strokeWidth: 2
        }
    };
    const style = variantStyles[variant];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        className: `
        relative
        ${onClick ? "cursor-pointer hover:scale-[1.01] active:scale-[0.99]" : ""}
        transition-transform duration-150
        ${className}
      `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "absolute inset-0 w-full h-full pointer-events-none",
                preserveAspectRatio: "none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                            id: "card-rough",
                            x: "-5%",
                            y: "-5%",
                            width: "110%",
                            height: "110%",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
                                    type: "turbulence",
                                    baseFrequency: "0.04",
                                    numOctaves: "2",
                                    result: "noise"
                                }, void 0, false, {
                                    fileName: "[project]/sketch-ui/SketchCard.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDisplacementMap", {
                                    in: "SourceGraphic",
                                    in2: "noise",
                                    scale: "1"
                                }, void 0, false, {
                                    fileName: "[project]/sketch-ui/SketchCard.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sketch-ui/SketchCard.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/sketch-ui/SketchCard.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: `
            M ${5 + jitter[0]}% ${3 + jitter[1]}%
            Q ${25}% ${-0.5 + jitter[2]}%, ${50}% ${2 + jitter[3]}%
            Q ${75}% ${-0.5}%, ${95 + jitter[4]}% ${3}%
            Q ${100.5}% ${25}%, ${97}% ${50}%
            Q ${100.5}% ${75}%, ${95 + jitter[5]}% ${97}%
            Q ${75}% ${100.5}%, ${50}% ${97 + jitter[6]}%
            Q ${25}% ${100.5}%, ${5 + jitter[7]}% ${97}%
            Q ${-0.5}% ${75}%, ${3}% ${50}%
            Q ${-0.5}% ${25}%, ${5 + jitter[8]}% ${3}%
            Z
          `,
                        fill: style.fill,
                        stroke: style.stroke,
                        strokeWidth: style.strokeWidth,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        style: {
                            filter: "url(#card-rough)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/sketch-ui/SketchCard.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: `
            M ${6 + jitter[9]}% ${4 + jitter[10]}%
            Q ${25}% ${0.5}%, ${50}% ${3}%
            Q ${75}% ${0.5}%, ${94 + jitter[11]}% ${4}%
            Q ${99.5}% ${25}%, ${96}% ${50}%
            Q ${99.5}% ${75}%, ${94}% ${96}%
            Q ${75}% ${99.5}%, ${50}% ${96}%
            Q ${25}% ${99.5}%, ${6}% ${96}%
            Q ${0.5}% ${75}%, ${4}% ${50}%
            Q ${0.5}% ${25}%, ${6}% ${4}%
            Z
          `,
                        fill: "none",
                        stroke: style.stroke,
                        strokeWidth: "1",
                        strokeLinecap: "round",
                        opacity: "0.4"
                    }, void 0, false, {
                        fileName: "[project]/sketch-ui/SketchCard.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    variant === "elevated" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: `
              M ${7}% ${6}%
              Q ${25}% ${2}%, ${50}% ${5}%
              Q ${75}% ${2}%, ${93}% ${6}%
              Q ${98}% ${25}%, ${95}% ${50}%
              Q ${98}% ${75}%, ${93}% ${95}%
              Q ${75}% ${98}%, ${50}% ${95}%
              Q ${25}% ${98}%, ${7}% ${95}%
              Q ${2}% ${75}%, ${5}% ${50}%
              Q ${2}% ${25}%, ${7}% ${6}%
              Z
            `,
                        fill: "none",
                        stroke: "#1E40AF",
                        strokeWidth: "2",
                        opacity: "0.2",
                        transform: "translate(3, 3)"
                    }, void 0, false, {
                        fileName: "[project]/sketch-ui/SketchCard.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sketch-ui/SketchCard.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 p-6",
                children: children
            }, void 0, false, {
                fileName: "[project]/sketch-ui/SketchCard.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sketch-ui/SketchCard.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(SketchCard, "YyDGj2eAvgh18b5eZxZ/PT72l+4=");
_c = SketchCard;
var _c;
__turbopack_context__.k.register(_c, "SketchCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sketch-ui/SketchToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SketchToggle",
    ()=>SketchToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function SketchToggle({ checked, onChange, label, disabled = false }) {
    _s();
    // Jitter für handgezeichneten Effekt
    const jitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SketchToggle.useMemo[jitter]": ()=>{
            return Array.from({
                length: 8
            }, {
                "SketchToggle.useMemo[jitter]": ()=>(Math.random() - 0.5) * 3
            }["SketchToggle.useMemo[jitter]"]);
        }
    }["SketchToggle.useMemo[jitter]"], []);
    const width = 60;
    const height = 32;
    const knobSize = 24;
    // Handgezeichneter Pfad für den äußeren Rahmen
    const trackPath = `
    M ${16 + jitter[0]} ${2 + jitter[1]}
    Q ${30} ${0}, ${44 + jitter[2]} ${2}
    Q ${58} ${6}, ${58 + jitter[3]} ${16}
    Q ${58} ${26}, ${44} ${30 + jitter[4]}
    Q ${30} ${32}, ${16 + jitter[5]} ${30}
    Q ${2} ${26}, ${2 + jitter[6]} ${16}
    Q ${2} ${6}, ${16 + jitter[7]} ${2}
    Z
  `;
    // Handgezeichneter Kreis für den Knob
    const knobPath = (cx)=>{
        const segments = 16;
        let path = "";
        for(let i = 0; i <= segments; i++){
            const angle = i / segments * Math.PI * 2;
            const r = knobSize / 2;
            const wobble = r * 0.08 * Math.sin(i * 3);
            const x = cx + (r + wobble) * Math.cos(angle);
            const y = height / 2 + (r + wobble) * Math.sin(angle);
            path += (i === 0 ? "M " : "L ") + `${x} ${y} `;
        }
        return path + "Z";
    };
    const knobX = checked ? width - knobSize / 2 - 4 : knobSize / 2 + 4;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: `
        inline-flex items-center gap-3
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>!disabled && onChange(!checked),
                disabled: disabled,
                className: "relative focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-full",
                style: {
                    width,
                    height
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: width,
                    height: height,
                    viewBox: `0 0 ${width} ${height}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                id: "toggle-rough",
                                x: "-5%",
                                y: "-5%",
                                width: "110%",
                                height: "110%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
                                        type: "turbulence",
                                        baseFrequency: "0.05",
                                        numOctaves: "2",
                                        result: "noise"
                                    }, void 0, false, {
                                        fileName: "[project]/sketch-ui/SketchToggle.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDisplacementMap", {
                                        in: "SourceGraphic",
                                        in2: "noise",
                                        scale: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/sketch-ui/SketchToggle.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sketch-ui/SketchToggle.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/sketch-ui/SketchToggle.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: trackPath,
                            fill: checked ? "#2563EB" : "#E5E7EB",
                            stroke: checked ? "#1D4ED8" : "#9CA3AF",
                            strokeWidth: "2.5",
                            strokeLinecap: "round",
                            style: {
                                filter: "url(#toggle-rough)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/sketch-ui/SketchToggle.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: trackPath,
                            fill: "none",
                            stroke: checked ? "#1E40AF" : "#6B7280",
                            strokeWidth: "1",
                            opacity: "0.3",
                            transform: "translate(1, 1)"
                        }, void 0, false, {
                            fileName: "[project]/sketch-ui/SketchToggle.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            style: {
                                transition: "transform 0.2s ease-out"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: knobPath(knobX),
                                    fill: "#1E40AF",
                                    opacity: "0.15",
                                    transform: "translate(2, 2)"
                                }, void 0, false, {
                                    fileName: "[project]/sketch-ui/SketchToggle.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: knobPath(knobX),
                                    fill: "#FFFFFF",
                                    stroke: "#2563EB",
                                    strokeWidth: "2.5",
                                    strokeLinecap: "round"
                                }, void 0, false, {
                                    fileName: "[project]/sketch-ui/SketchToggle.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: knobPath(knobX),
                                    fill: "none",
                                    stroke: "#3B82F6",
                                    strokeWidth: "1",
                                    opacity: "0.4",
                                    transform: "scale(0.85)",
                                    style: {
                                        transformOrigin: `${knobX}px ${height / 2}px`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/sketch-ui/SketchToggle.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sketch-ui/SketchToggle.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sketch-ui/SketchToggle.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/sketch-ui/SketchToggle.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-['Architects Daughter',_cursive] text-xl text-[#1E40AF]",
                children: label
            }, void 0, false, {
                fileName: "[project]/sketch-ui/SketchToggle.tsx",
                lineNumber: 145,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sketch-ui/SketchToggle.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(SketchToggle, "YyDGj2eAvgh18b5eZxZ/PT72l+4=");
_c = SketchToggle;
var _c;
__turbopack_context__.k.register(_c, "SketchToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sketch-ui/SketchIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SketchIcon",
    ()=>SketchIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function SketchIcon({ icon, size = 48, color = "#2563EB", className = "" }) {
    _s();
    // Generiere Jitter-Werte
    const jitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SketchIcon.useMemo[jitter]": ()=>{
            return Array.from({
                length: 20
            }, {
                "SketchIcon.useMemo[jitter]": ()=>(Math.random() - 0.5) * 2
            }["SketchIcon.useMemo[jitter]"]);
        }
    }["SketchIcon.useMemo[jitter]"], []);
    const strokeWidth = size > 40 ? 3 : 2;
    const renderIcon = ()=>{
        switch(icon){
            case "shield":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: `
                M ${size / 2 + jitter[0]} ${4 + jitter[1]}
                Q ${size - 6 + jitter[2]} ${6}, ${size - 6} ${size / 3}
                Q ${size - 6} ${size * 0.6}, ${size / 2} ${size - 4 + jitter[3]}
                Q ${6} ${size * 0.6}, ${6 + jitter[4]} ${size / 3}
                Q ${6} ${6}, ${size / 2 + jitter[5]} ${4}
                Z
              `,
                            fill: "none",
                            stroke: color,
                            strokeWidth: strokeWidth,
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/sketch-ui/SketchIcon.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: `
                M ${size * 0.3 + jitter[6]} ${size * 0.5}
                L ${size * 0.45} ${size * 0.65 + jitter[7]}
                L ${size * 0.7 + jitter[8]} ${size * 0.35}
              `,
                            fill: "none",
                            stroke: color,
                            strokeWidth: strokeWidth,
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/sketch-ui/SketchIcon.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true);
            case "photo":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: `
                M ${6 + jitter[0]} ${8 + jitter[1]}
                L ${size - 6 + jitter[2]} ${8}
                L ${size - 6} ${size - 8 + jitter[3]}
                L ${6 + jitter[4]} ${size - 8}
                Z
              `,
                            fill: "none",
                            stroke: color,
                            strokeWidth: strokeWidth,
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/sketch-ui/SketchIcon.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: `
                M ${10 + jitter[5]} ${size - 14}
                L ${size * 0.35} ${size * 0.45 + jitter[6]}
                L ${size * 0.5} ${size * 0.55}
                L ${size * 0.65 + jitter[7]} ${size * 0.4}
                L ${size - 10} ${size - 14 + jitter[8]}
              `,
                            fill: "none",
                            stroke: color,
                            strokeWidth: strokeWidth - 0.5,
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/sketch-ui/SketchIcon.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: size * 0.7,
                            cy: size * 0.3,
                            r: size * 0.08,
                            fill: "none",
                            stroke: color,
                            strokeWidth: strokeWidth - 0.5
                        }, void 0, false, {
                            fileName: "[project]/sketch-ui/SketchIcon.tsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true);
            case "clock":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: (()=>{
                                let path = "";
                                const segments = 24;
                                const cx = size / 2;
                                const cy = size / 2;
                                const r = size / 2 - 6;
                                for(let i = 0; i <= segments; i++){
                                    const angle = i / segments * Math.PI * 2 - Math.PI / 2;
                                    const wobble = r * 0.04 * (jitter[i % 10] || 0);
                                    const x = cx + (r + wobble) * Math.cos(angle);
                                    const y = cy + (r + wobble) * Math.sin(angle);
                                    path += (i === 0 ? "M " : "L ") + `${x} ${y} `;
                                }
                                return path + "Z";
                            })(),
                            fill: "none",
                            stroke: color,
                            strokeWidth: strokeWidth,
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/sketch-ui/SketchIcon.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: `
                M ${size / 2 + jitter[0]} ${size / 2}
                L ${size / 2 - size * 0.15 + jitter[1]} ${size / 2 - size * 0.15}
              `,
                            fill: "none",
                            stroke: color,
                            strokeWidth: strokeWidth,
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/sketch-ui/SketchIcon.tsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: `
                M ${size / 2} ${size / 2 + jitter[2]}
                L ${size / 2 + size * 0.2} ${size / 2 - size * 0.25 + jitter[3]}
              `,
                            fill: "none",
                            stroke: color,
                            strokeWidth: strokeWidth,
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/sketch-ui/SketchIcon.tsx",
                            lineNumber: 144,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: size / 2,
                            cy: size / 2,
                            r: 3,
                            fill: color
                        }, void 0, false, {
                            fileName: "[project]/sketch-ui/SketchIcon.tsx",
                            lineNumber: 155,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true);
            case "key":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: (()=>{
                                let path = "";
                                const segments = 16;
                                const cx = size * 0.3;
                                const cy = size * 0.35;
                                const r = size * 0.2;
                                for(let i = 0; i <= segments; i++){
                                    const angle = i / segments * Math.PI * 2;
                                    const wobble = r * 0.06 * (jitter[i % 10] || 0);
                                    const x = cx + (r + wobble) * Math.cos(angle);
                                    const y = cy + (r + wobble) * Math.sin(angle);
                                    path += (i === 0 ? "M " : "L ") + `${x} ${y} `;
                                }
                                return path + "Z";
                            })(),
                            fill: "none",
                            stroke: color,
                            strokeWidth: strokeWidth
                        }, void 0, false, {
                            fileName: "[project]/sketch-ui/SketchIcon.tsx",
                            lineNumber: 168,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: size * 0.3,
                            cy: size * 0.35,
                            r: size * 0.08,
                            fill: "none",
                            stroke: color,
                            strokeWidth: strokeWidth - 0.5
                        }, void 0, false, {
                            fileName: "[project]/sketch-ui/SketchIcon.tsx",
                            lineNumber: 189,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: `
                M ${size * 0.45 + jitter[0]} ${size * 0.45}
                L ${size - 8 + jitter[1]} ${size - 10}
              `,
                            fill: "none",
                            stroke: color,
                            strokeWidth: strokeWidth,
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/sketch-ui/SketchIcon.tsx",
                            lineNumber: 198,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: `
                M ${size * 0.65 + jitter[2]} ${size * 0.6}
                L ${size * 0.72} ${size * 0.68 + jitter[3]}
                M ${size * 0.75} ${size * 0.7 + jitter[4]}
                L ${size * 0.82 + jitter[5]} ${size * 0.78}
              `,
                            fill: "none",
                            stroke: color,
                            strokeWidth: strokeWidth,
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/sketch-ui/SketchIcon.tsx",
                            lineNumber: 209,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true);
            case "cloud":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: `
              M ${size * 0.25 + jitter[0]} ${size * 0.65}
              Q ${size * 0.1} ${size * 0.65}, ${size * 0.1 + jitter[1]} ${size * 0.5}
              Q ${size * 0.1} ${size * 0.35}, ${size * 0.25} ${size * 0.35 + jitter[2]}
              Q ${size * 0.3} ${size * 0.2}, ${size * 0.45 + jitter[3]} ${size * 0.2}
              Q ${size * 0.55} ${size * 0.15 + jitter[4]}, ${size * 0.65} ${size * 0.25}
              Q ${size * 0.8} ${size * 0.2}, ${size * 0.85 + jitter[5]} ${size * 0.35}
              Q ${size * 0.95} ${size * 0.4 + jitter[6]}, ${size * 0.9} ${size * 0.55}
              Q ${size * 0.95} ${size * 0.65}, ${size * 0.8 + jitter[7]} ${size * 0.65}
              Z
            `,
                    fill: "none",
                    stroke: color,
                    strokeWidth: strokeWidth,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/sketch-ui/SketchIcon.tsx",
                    lineNumber: 226,
                    columnNumber: 11
                }, this);
            case "folder":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: `
                M ${8 + jitter[0]} ${size * 0.35}
                L ${8} ${size * 0.25 + jitter[1]}
                L ${size * 0.35 + jitter[2]} ${size * 0.25}
                L ${size * 0.4} ${size * 0.35 + jitter[3]}
              `,
                            fill: "none",
                            stroke: color,
                            strokeWidth: strokeWidth,
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/sketch-ui/SketchIcon.tsx",
                            lineNumber: 250,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: `
                M ${8 + jitter[4]} ${size * 0.35}
                L ${size - 8 + jitter[5]} ${size * 0.35}
                L ${size - 8} ${size - 10 + jitter[6]}
                L ${8 + jitter[7]} ${size - 10}
                Z
              `,
                            fill: "none",
                            stroke: color,
                            strokeWidth: strokeWidth,
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/sketch-ui/SketchIcon.tsx",
                            lineNumber: 264,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true);
            case "check":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: `
              M ${size * 0.2 + jitter[0]} ${size * 0.5}
              L ${size * 0.4 + jitter[1]} ${size * 0.7 + jitter[2]}
              L ${size * 0.8 + jitter[3]} ${size * 0.3}
            `,
                    fill: "none",
                    stroke: color,
                    strokeWidth: strokeWidth + 1,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/sketch-ui/SketchIcon.tsx",
                    lineNumber: 283,
                    columnNumber: 11
                }, this);
            case "warning":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: `
                M ${size / 2 + jitter[0]} ${8}
                L ${size - 8 + jitter[1]} ${size - 10}
                L ${8 + jitter[2]} ${size - 10}
                Z
              `,
                            fill: "none",
                            stroke: color,
                            strokeWidth: strokeWidth,
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/sketch-ui/SketchIcon.tsx",
                            lineNumber: 301,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: `
                M ${size / 2 + jitter[3]} ${size * 0.35}
                L ${size / 2} ${size * 0.55 + jitter[4]}
              `,
                            fill: "none",
                            stroke: color,
                            strokeWidth: strokeWidth,
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/sketch-ui/SketchIcon.tsx",
                            lineNumber: 315,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: size / 2,
                            cy: size * 0.7,
                            r: 2.5,
                            fill: color
                        }, void 0, false, {
                            fileName: "[project]/sketch-ui/SketchIcon.tsx",
                            lineNumber: 325,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true);
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: `0 0 ${size} ${size}`,
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                    id: `icon-rough-${icon}`,
                    x: "-5%",
                    y: "-5%",
                    width: "110%",
                    height: "110%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
                            type: "turbulence",
                            baseFrequency: "0.03",
                            numOctaves: "2",
                            result: "noise"
                        }, void 0, false, {
                            fileName: "[project]/sketch-ui/SketchIcon.tsx",
                            lineNumber: 348,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDisplacementMap", {
                            in: "SourceGraphic",
                            in2: "noise",
                            scale: "0.5"
                        }, void 0, false, {
                            fileName: "[project]/sketch-ui/SketchIcon.tsx",
                            lineNumber: 354,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sketch-ui/SketchIcon.tsx",
                    lineNumber: 347,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/sketch-ui/SketchIcon.tsx",
                lineNumber: 346,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                style: {
                    filter: `url(#icon-rough-${icon})`
                },
                children: renderIcon()
            }, void 0, false, {
                fileName: "[project]/sketch-ui/SketchIcon.tsx",
                lineNumber: 361,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sketch-ui/SketchIcon.tsx",
        lineNumber: 340,
        columnNumber: 5
    }, this);
}
_s(SketchIcon, "YyDGj2eAvgh18b5eZxZ/PT72l+4=");
_c = SketchIcon;
var _c;
__turbopack_context__.k.register(_c, "SketchIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sketch-ui/SketchProgress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SketchCircularProgress",
    ()=>SketchCircularProgress,
    "SketchProgress",
    ()=>SketchProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
function SketchProgress({ value, size = "md", showLabel = true, color = "#2563EB", className = "" }) {
    _s();
    // Jitter für handgezeichneten Effekt
    const jitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SketchProgress.useMemo[jitter]": ()=>{
            return Array.from({
                length: 10
            }, {
                "SketchProgress.useMemo[jitter]": ()=>(Math.random() - 0.5) * 4
            }["SketchProgress.useMemo[jitter]"]);
        }
    }["SketchProgress.useMemo[jitter]"], []);
    const sizes = {
        sm: {
            height: 12,
            strokeWidth: 2
        },
        md: {
            height: 20,
            strokeWidth: 3
        },
        lg: {
            height: 28,
            strokeWidth: 4
        }
    };
    const { height, strokeWidth } = sizes[size];
    const clampedValue = Math.max(0, Math.min(100, value));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "100%",
                height: height + 8,
                viewBox: `0 0 200 ${height + 8}`,
                preserveAspectRatio: "none",
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                            id: "progress-rough",
                            x: "-5%",
                            y: "-10%",
                            width: "110%",
                            height: "120%",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
                                    type: "turbulence",
                                    baseFrequency: "0.04",
                                    numOctaves: "2",
                                    result: "noise"
                                }, void 0, false, {
                                    fileName: "[project]/sketch-ui/SketchProgress.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDisplacementMap", {
                                    in: "SourceGraphic",
                                    in2: "noise",
                                    scale: "1"
                                }, void 0, false, {
                                    fileName: "[project]/sketch-ui/SketchProgress.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sketch-ui/SketchProgress.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/sketch-ui/SketchProgress.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: `
            M ${height / 2 + jitter[0]} ${4 + jitter[1]}
            Q ${50} ${2}, ${100} ${4 + jitter[2]}
            Q ${150} ${2}, ${200 - height / 2 + jitter[3]} ${4}
            Q ${200} ${height / 2 + 4}, ${200 - height / 2} ${height + 4 + jitter[4]}
            Q ${150} ${height + 6}, ${100} ${height + 4 + jitter[5]}
            Q ${50} ${height + 6}, ${height / 2 + jitter[6]} ${height + 4}
            Q ${0} ${height / 2 + 4}, ${height / 2 + jitter[7]} ${4}
            Z
          `,
                        fill: "#E5E7EB",
                        stroke: "#9CA3AF",
                        strokeWidth: strokeWidth - 1,
                        strokeLinecap: "round",
                        style: {
                            filter: "url(#progress-rough)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/sketch-ui/SketchProgress.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    clampedValue > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: `
              M ${height / 2 + jitter[0]} ${4 + jitter[1]}
              Q ${clampedValue / 100 * 50} ${2}, ${clampedValue / 100 * 100} ${4 + jitter[2]}
              Q ${clampedValue / 100 * 150} ${2}, ${Math.min(clampedValue / 100 * 200, 200 - height / 2) + jitter[3]} ${4}
              Q ${clampedValue / 100 * 200} ${height / 2 + 4}, ${Math.min(clampedValue / 100 * 200, 200 - height / 2)} ${height + 4 + jitter[4]}
              Q ${clampedValue / 100 * 150} ${height + 6}, ${clampedValue / 100 * 100} ${height + 4 + jitter[5]}
              Q ${clampedValue / 100 * 50} ${height + 6}, ${height / 2 + jitter[6]} ${height + 4}
              Q ${0} ${height / 2 + 4}, ${height / 2 + jitter[7]} ${4}
              Z
            `,
                        fill: color,
                        stroke: color,
                        strokeWidth: strokeWidth - 1,
                        strokeLinecap: "round",
                        style: {
                            filter: "url(#progress-rough)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/sketch-ui/SketchProgress.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: `
            M ${height / 2 + 2 + jitter[8]} ${6}
            Q ${50} ${4}, ${100} ${6}
            Q ${150} ${4}, ${clampedValue / 100 * 180 + jitter[9]} ${6}
          `,
                        fill: "none",
                        stroke: "white",
                        strokeWidth: "1",
                        opacity: "0.4",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/sketch-ui/SketchProgress.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sketch-ui/SketchProgress.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            showLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-0 top-1/2 -translate-y-1/2 font-['Architects Daughter',_cursive] text-lg font-bold",
                style: {
                    color
                },
                children: [
                    Math.round(clampedValue),
                    "%"
                ]
            }, void 0, true, {
                fileName: "[project]/sketch-ui/SketchProgress.tsx",
                lineNumber: 116,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sketch-ui/SketchProgress.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(SketchProgress, "YyDGj2eAvgh18b5eZxZ/PT72l+4=");
_c = SketchProgress;
function SketchCircularProgress({ value, size = 80, strokeWidth = 6, color = "#2563EB", showLabel = true }) {
    _s1();
    const jitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SketchCircularProgress.useMemo[jitter]": ()=>{
            return Array.from({
                length: 30
            }, {
                "SketchCircularProgress.useMemo[jitter]": ()=>(Math.random() - 0.5) * 2
            }["SketchCircularProgress.useMemo[jitter]"]);
        }
    }["SketchCircularProgress.useMemo[jitter]"], []);
    const clampedValue = Math.max(0, Math.min(100, value));
    const radius = (size - strokeWidth) / 2;
    const cx = size / 2;
    const cy = size / 2;
    // Generiere handgezeichneten Kreis-Pfad
    const generateCirclePath = (progress)=>{
        const segments = 32;
        const endAngle = progress / 100 * Math.PI * 2;
        let path = "";
        for(let i = 0; i <= segments * (progress / 100); i++){
            const angle = i / segments * Math.PI * 2 - Math.PI / 2;
            if (angle > endAngle - Math.PI / 2) break;
            const wobble = radius * 0.02 * (jitter[i % jitter.length] || 0);
            const x = cx + (radius + wobble) * Math.cos(angle);
            const y = cy + (radius + wobble) * Math.sin(angle);
            path += (i === 0 ? "M " : "L ") + `${x} ${y} `;
        }
        return path;
    };
    // Hintergrund-Kreis
    const backgroundPath = (()=>{
        let path = "";
        const segments = 32;
        for(let i = 0; i <= segments; i++){
            const angle = i / segments * Math.PI * 2 - Math.PI / 2;
            const wobble = radius * 0.02 * (jitter[i % jitter.length] || 0);
            const x = cx + (radius + wobble) * Math.cos(angle);
            const y = cy + (radius + wobble) * Math.sin(angle);
            path += (i === 0 ? "M " : "L ") + `${x} ${y} `;
        }
        return path + "Z";
    })();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative inline-block",
        style: {
            width: size,
            height: size
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: size,
                height: size,
                viewBox: `0 0 ${size} ${size}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                            id: "circular-rough",
                            x: "-5%",
                            y: "-5%",
                            width: "110%",
                            height: "110%",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
                                    type: "turbulence",
                                    baseFrequency: "0.03",
                                    numOctaves: "2",
                                    result: "noise"
                                }, void 0, false, {
                                    fileName: "[project]/sketch-ui/SketchProgress.tsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDisplacementMap", {
                                    in: "SourceGraphic",
                                    in2: "noise",
                                    scale: "0.5"
                                }, void 0, false, {
                                    fileName: "[project]/sketch-ui/SketchProgress.tsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sketch-ui/SketchProgress.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/sketch-ui/SketchProgress.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: backgroundPath,
                        fill: "none",
                        stroke: "#E5E7EB",
                        strokeWidth: strokeWidth,
                        strokeLinecap: "round",
                        style: {
                            filter: "url(#circular-rough)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/sketch-ui/SketchProgress.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    clampedValue > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: generateCirclePath(clampedValue),
                        fill: "none",
                        stroke: color,
                        strokeWidth: strokeWidth,
                        strokeLinecap: "round",
                        style: {
                            filter: "url(#circular-rough)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/sketch-ui/SketchProgress.tsx",
                        lineNumber: 216,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sketch-ui/SketchProgress.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this),
            showLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center font-['Architects Daughter',_cursive] font-bold",
                style: {
                    color,
                    fontSize: size * 0.25
                },
                children: [
                    Math.round(clampedValue),
                    "%"
                ]
            }, void 0, true, {
                fileName: "[project]/sketch-ui/SketchProgress.tsx",
                lineNumber: 229,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sketch-ui/SketchProgress.tsx",
        lineNumber: 186,
        columnNumber: 5
    }, this);
}
_s1(SketchCircularProgress, "YyDGj2eAvgh18b5eZxZ/PT72l+4=");
_c1 = SketchCircularProgress;
var _c, _c1;
__turbopack_context__.k.register(_c, "SketchProgress");
__turbopack_context__.k.register(_c1, "SketchCircularProgress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sketch-ui/SketchInput.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SketchInput",
    ()=>SketchInput,
    "SketchTextarea",
    ()=>SketchTextarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
function SketchInput({ value, onChange, placeholder = "", type = "text", label, icon, disabled = false, className = "" }) {
    _s();
    // Jitter für handgezeichneten Effekt
    const jitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SketchInput.useMemo[jitter]": ()=>{
            return Array.from({
                length: 8
            }, {
                "SketchInput.useMemo[jitter]": ()=>(Math.random() - 0.5) * 4
            }["SketchInput.useMemo[jitter]"]);
        }
    }["SketchInput.useMemo[jitter]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative ${className}`,
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block font-['Architects Daughter',_cursive] text-xl text-[#1E40AF] mb-2",
                children: label
            }, void 0, false, {
                fileName: "[project]/sketch-ui/SketchInput.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "absolute inset-0 w-full h-full pointer-events-none",
                        preserveAspectRatio: "none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                    id: "input-rough",
                                    x: "-5%",
                                    y: "-5%",
                                    width: "110%",
                                    height: "110%",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
                                            type: "turbulence",
                                            baseFrequency: "0.04",
                                            numOctaves: "2",
                                            result: "noise"
                                        }, void 0, false, {
                                            fileName: "[project]/sketch-ui/SketchInput.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDisplacementMap", {
                                            in: "SourceGraphic",
                                            in2: "noise",
                                            scale: "1"
                                        }, void 0, false, {
                                            fileName: "[project]/sketch-ui/SketchInput.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sketch-ui/SketchInput.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/sketch-ui/SketchInput.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: `
              M ${3 + jitter[0]}% ${10 + jitter[1]}%
              Q ${25}% ${-2}%, ${50}% ${8 + jitter[2]}%
              Q ${75}% ${-2}%, ${97 + jitter[3]}% ${10}%
              Q ${102}% ${30}%, ${98}% ${50}%
              Q ${102}% ${70}%, ${97 + jitter[4]}% ${90}%
              Q ${75}% ${102}%, ${50}% ${92 + jitter[5]}%
              Q ${25}% ${102}%, ${3 + jitter[6]}% ${90}%
              Q ${-2}% ${70}%, ${2}% ${50}%
              Q ${-2}% ${30}%, ${3 + jitter[7]}% ${10}%
              Z
            `,
                                fill: "#FFFFFF",
                                stroke: "#2563EB",
                                strokeWidth: "2.5",
                                strokeLinecap: "round",
                                style: {
                                    filter: "url(#input-rough)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/sketch-ui/SketchInput.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: `
              M ${5}% ${15}%
              Q ${25}% ${5}%, ${50}% ${12}%
              Q ${75}% ${5}%, ${95}% ${15}%
            `,
                                fill: "none",
                                stroke: "#3B82F6",
                                strokeWidth: "1",
                                opacity: "0.3",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/sketch-ui/SketchInput.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sketch-ui/SketchInput.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: type,
                        value: value,
                        onChange: (e)=>onChange(e.target.value),
                        placeholder: placeholder,
                        disabled: disabled,
                        className: `
            relative z-10
            w-full
            ${icon ? "pl-12" : "px-5"} py-4
            bg-transparent
            font-['Architects Daughter',_cursive] text-xl text-[#1E40AF]
            placeholder:text-[#9CA3AF]
            focus:outline-none
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          `
                    }, void 0, false, {
                        fileName: "[project]/sketch-ui/SketchInput.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-4 top-1/2 -translate-y-1/2 z-20 text-[#2563EB]/40",
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/sketch-ui/SketchInput.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sketch-ui/SketchInput.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sketch-ui/SketchInput.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(SketchInput, "YyDGj2eAvgh18b5eZxZ/PT72l+4=");
_c = SketchInput;
function SketchTextarea({ value, onChange, placeholder = "", label, rows = 4, disabled = false, className = "" }) {
    _s1();
    const jitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SketchTextarea.useMemo[jitter]": ()=>{
            return Array.from({
                length: 8
            }, {
                "SketchTextarea.useMemo[jitter]": ()=>(Math.random() - 0.5) * 4
            }["SketchTextarea.useMemo[jitter]"]);
        }
    }["SketchTextarea.useMemo[jitter]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative ${className}`,
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block font-['Architects Daughter',_cursive] text-xl text-[#1E40AF] mb-2",
                children: label
            }, void 0, false, {
                fileName: "[project]/sketch-ui/SketchInput.tsx",
                lineNumber: 150,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "absolute inset-0 w-full h-full pointer-events-none",
                        preserveAspectRatio: "none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                    id: "textarea-rough",
                                    x: "-5%",
                                    y: "-5%",
                                    width: "110%",
                                    height: "110%",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
                                            type: "turbulence",
                                            baseFrequency: "0.03",
                                            numOctaves: "2",
                                            result: "noise"
                                        }, void 0, false, {
                                            fileName: "[project]/sketch-ui/SketchInput.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDisplacementMap", {
                                            in: "SourceGraphic",
                                            in2: "noise",
                                            scale: "1"
                                        }, void 0, false, {
                                            fileName: "[project]/sketch-ui/SketchInput.tsx",
                                            lineNumber: 168,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sketch-ui/SketchInput.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/sketch-ui/SketchInput.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: `
              M ${3 + jitter[0]}% ${3 + jitter[1]}%
              Q ${25}% ${-1}%, ${50}% ${2 + jitter[2]}%
              Q ${75}% ${-1}%, ${97 + jitter[3]}% ${3}%
              Q ${101}% ${25}%, ${98}% ${50}%
              Q ${101}% ${75}%, ${97 + jitter[4]}% ${97}%
              Q ${75}% ${101}%, ${50}% ${98 + jitter[5]}%
              Q ${25}% ${101}%, ${3 + jitter[6]}% ${97}%
              Q ${-1}% ${75}%, ${2}% ${50}%
              Q ${-1}% ${25}%, ${3 + jitter[7]}% ${3}%
              Z
            `,
                                fill: "#FFFFFF",
                                stroke: "#2563EB",
                                strokeWidth: "2.5",
                                strokeLinecap: "round",
                                style: {
                                    filter: "url(#textarea-rough)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/sketch-ui/SketchInput.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            Array.from({
                                length: rows
                            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: `
                M ${8}% ${20 + i * 70 / rows}%
                Q ${50}% ${18 + i * 70 / rows + (Math.random() - 0.5) * 2}%, ${92}% ${20 + i * 70 / rows}%
              `,
                                    fill: "none",
                                    stroke: "#E5E7EB",
                                    strokeWidth: "1",
                                    strokeLinecap: "round"
                                }, i, false, {
                                    fileName: "[project]/sketch-ui/SketchInput.tsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sketch-ui/SketchInput.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: value,
                        onChange: (e)=>onChange(e.target.value),
                        placeholder: placeholder,
                        rows: rows,
                        disabled: disabled,
                        className: `
            relative z-10
            w-full
            px-5 py-4
            bg-transparent
            font-['Architects Daughter',_cursive] text-xl text-[#1E40AF]
            placeholder:text-[#9CA3AF]
            focus:outline-none
            resize-none
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          `
                    }, void 0, false, {
                        fileName: "[project]/sketch-ui/SketchInput.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sketch-ui/SketchInput.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sketch-ui/SketchInput.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
}
_s1(SketchTextarea, "YyDGj2eAvgh18b5eZxZ/PT72l+4=");
_c1 = SketchTextarea;
var _c, _c1;
__turbopack_context__.k.register(_c, "SketchInput");
__turbopack_context__.k.register(_c1, "SketchTextarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sketch-ui/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
/**
 * Sketch UI Component Library
 * ===========================
 * 
 * Handgezeichnete UI-Komponenten im blauen Sketch-Stil
 * 
 * STYLE-EIGENSCHAFTEN:
 * - Blaue raue Linien (#2563EB, #3B82F6)
 * - Variable Strichstärke (2-4px)
 * - Jitter/Wobble-Effekte durch SVG
 * - Organische, handgezeichnete Formen
 * 
 * FONT:
 * - Architects Daughter (Google Fonts) für handgeschriebenen Text-Look
 * 
 * VERWENDUNG:
 * import { SketchButton, SketchCard, SketchToggle } from '@/components/sketch-ui';
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchStyles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sketch-ui/SketchStyles.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sketch-ui/SketchButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sketch-ui/SketchCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sketch-ui/SketchToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sketch-ui/SketchIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchProgress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sketch-ui/SketchProgress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sketch-ui/SketchInput.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/photovault/AuthScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthScreen",
    ()=>AuthScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/custom-icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/sketch-ui/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sketch-ui/SketchButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sketch-ui/SketchInput.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function AuthScreen({ onSuccess }) {
    _s();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("welcome");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleLogin = async ()=>{
        if (!email || !password) {
            setError("Bitte E-Mail und Passwort eingeben");
            return;
        }
        setIsLoading(true);
        setError(null);
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signIn"].email({
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
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signUp"].email({
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col px-6 pt-16 pb-8 safe-area-inset bg-[#FAFBFC]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col items-center justify-center text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-28 h-28 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "absolute inset-0 w-full h-full",
                                    viewBox: "0 0 100 100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M 10 10 Q 30 5, 50 10 Q 70 5, 90 10 Q 95 30, 90 50 Q 95 70, 90 90 Q 70 95, 50 90 Q 30 95, 10 90 Q 5 70, 10 50 Q 5 30, 10 10 Z",
                                        fill: "white",
                                        stroke: "#2563EB",
                                        strokeWidth: "3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                        lineNumber: 108,
                                        columnNumber: 30
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                    lineNumber: 107,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 w-full h-full flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomIcon"], {
                                        name: "shield",
                                        size: 56,
                                        className: "text-[#2563EB]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                        lineNumber: 116,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                    lineNumber: 115,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                            lineNumber: 106,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "sketch-heading text-[42px] mb-3",
                            children: "PhotoVault"
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                            lineNumber: 120,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "sketch-body text-[#3B82F6] max-w-[280px] mb-12",
                            children: "Sichere deine Fotos mit Zero-Knowledge Verschluesselung"
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                            lineNumber: 123,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-[320px] space-y-4 mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureItem, {
                                    icon: "lock",
                                    text: "Ende-zu-Ende verschluesselt"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                    lineNumber: 129,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureItem, {
                                    icon: "smartphone",
                                    text: "Multi-Device Sync"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                    lineNumber: 130,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureItem, {
                                    icon: "cloud",
                                    text: "Dezentrales IPFS Backup"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                    lineNumber: 131,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                            lineNumber: 128,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                    lineNumber: 104,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchButton"], {
                            onClick: ()=>setMode("signup"),
                            className: "w-full",
                            size: "lg",
                            children: "Konto erstellen"
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                            lineNumber: 137,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMode("login"),
                            className: "w-full py-2 sketch-body text-[#2563EB] hover:text-[#1E40AF] transition-colors",
                            children: "Ich habe bereits ein Konto"
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                            lineNumber: 145,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                    lineNumber: 136,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/photovault/AuthScreen.tsx",
            lineNumber: 103,
            columnNumber: 13
        }, this);
    }
    // Login / Signup Form
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-3d182ede277f5a6d" + " " + "min-h-screen flex flex-col px-6 pt-12 pb-8 safe-area-inset bg-[#FAFBFC]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setMode("welcome"),
                className: "jsx-3d182ede277f5a6d" + " " + "self-start sketch-body text-[#2563EB] mb-8 ios-tap-target flex items-center gap-2",
                children: "← Zurueck"
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                lineNumber: 160,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3d182ede277f5a6d" + " " + "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "jsx-3d182ede277f5a6d" + " " + "sketch-heading text-[32px] mb-2",
                        children: mode === "login" ? "Willkommen zurueck" : "Konto erstellen"
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                        lineNumber: 168,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jsx-3d182ede277f5a6d" + " " + "sketch-body text-[#3B82F6] mb-8",
                        children: mode === "login" ? "Melde dich an, um auf deinen Vault zuzugreifen" : "Erstelle ein Konto, um deinen Vault zu sichern"
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                        lineNumber: 171,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3d182ede277f5a6d" + " " + "space-y-6",
                        children: [
                            mode === "signup" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3d182ede277f5a6d" + " " + "relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchInput"], {
                                    type: "text",
                                    value: name,
                                    onChange: (val)=>setName(val),
                                    placeholder: "Name",
                                    label: "Name",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                        lineNumber: 187,
                                        columnNumber: 39
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                    lineNumber: 181,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                lineNumber: 180,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3d182ede277f5a6d" + " " + "relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchInput"], {
                                    type: "email",
                                    value: email,
                                    onChange: (val)=>setEmail(val),
                                    placeholder: "E-Mail",
                                    label: "E-Mail",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                        lineNumber: 199,
                                        columnNumber: 35
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                    lineNumber: 193,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                lineNumber: 192,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3d182ede277f5a6d" + " " + "relative flex flex-col gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchInput"], {
                                        type: showPassword ? "text" : "password",
                                        value: password,
                                        onChange: (val)=>setPassword(val),
                                        placeholder: "Passwort",
                                        label: "Passwort",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                            lineNumber: 210,
                                            columnNumber: 35
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                        lineNumber: 204,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setShowPassword(!showPassword),
                                        className: "jsx-3d182ede277f5a6d" + " " + "absolute right-4 top-[38px] text-[#2563EB]/40 z-20",
                                        children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                            lineNumber: 218,
                                            columnNumber: 33
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                            lineNumber: 220,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                        lineNumber: 212,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                lineNumber: 203,
                                columnNumber: 21
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3d182ede277f5a6d" + " " + "relative py-3 px-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        preserveAspectRatio: "none",
                                        className: "jsx-3d182ede277f5a6d" + " " + "absolute inset-0 w-full h-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M 2 5 Q 25 2, 50 5 Q 75 2, 98 5 Q 99 30, 98 60 Q 75 63, 50 60 Q 25 63, 2 60 Q 1 30, 2 5 Z",
                                            fill: "#FF3B3010",
                                            stroke: "#FF3B30",
                                            strokeWidth: "1",
                                            className: "jsx-3d182ede277f5a6d"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                            lineNumber: 228,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                        lineNumber: 227,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-3d182ede277f5a6d" + " " + "relative z-10 sketch-body text-[#FF3B30] text-center text-sm",
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                        lineNumber: 235,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                                lineNumber: 226,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                        lineNumber: 178,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                lineNumber: 167,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3d182ede277f5a6d" + " " + "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchButton"], {
                        onClick: mode === "login" ? handleLogin : handleSignup,
                        disabled: isLoading,
                        className: "w-full",
                        size: "lg",
                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "w-6 h-6 animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                            lineNumber: 250,
                            columnNumber: 25
                        }, this) : mode === "login" ? "Anmelden" : "Registrieren"
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                        lineNumber: 243,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMode(mode === "login" ? "signup" : "login"),
                        className: "jsx-3d182ede277f5a6d" + " " + "w-full py-2 sketch-body text-[#2563EB] hover:text-[#1E40AF] transition-colors",
                        children: mode === "login" ? "Noch kein Konto? Registrieren" : "Bereits ein Konto? Anmelden"
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                        lineNumber: 258,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                lineNumber: 242,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "3d182ede277f5a6d",
                children: ".sketch-input-field.jsx-3d182ede277f5a6d{color:#1d1d1f;background-color:#0000;border:2px solid #2563eb;border-radius:12px;width:100%;height:54px;padding-left:3rem;padding-right:1rem;font-family:Architects Daughter,cursive;font-size:17px;transition:border-color .2s}.sketch-input-field.jsx-3d182ede277f5a6d:focus{border-color:#1e40af;outline:none}.sketch-input-field.jsx-3d182ede277f5a6d::placeholder{color:#8e8e93}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
        lineNumber: 158,
        columnNumber: 9
    }, this);
}
_s(AuthScreen, "U06nPcdSOCXHdOe/hxtdNUAVPws=");
_c = AuthScreen;
function FeatureItem({ icon, text }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "absolute inset-0 w-full h-full",
                preserveAspectRatio: "none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 2 2 Q 25 -1, 50 2 Q 75 -1, 98 2 Q 100 25, 98 50 Q 75 53, 50 50 Q 25 53, 2 50 Q 0 25, 2 2 Z",
                    fill: "white",
                    stroke: "#2563EB40",
                    strokeWidth: "1.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                    lineNumber: 299,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                lineNumber: 298,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex items-center gap-4 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 rounded-full flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomIcon"], {
                            name: icon,
                            size: 24,
                            className: "text-[#2563EB]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                            lineNumber: 308,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                        lineNumber: 307,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sketch-body text-base text-[#1E40AF]",
                        children: text
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                        lineNumber: 310,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/photovault/AuthScreen.tsx",
                lineNumber: 306,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/photovault/AuthScreen.tsx",
        lineNumber: 296,
        columnNumber: 9
    }, this);
}
_c1 = FeatureItem;
var _c, _c1;
__turbopack_context__.k.register(_c, "AuthScreen");
__turbopack_context__.k.register(_c1, "FeatureItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/crypto.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2f$nacl$2d$fast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tweetnacl/nacl-fast.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2d$util$2f$nacl$2d$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tweetnacl-util/nacl-util.js [app-client] (ecmascript)");
;
;
function generateKeyPair() {
    const keyPair = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2f$nacl$2d$fast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].box.keyPair();
    return {
        publicKey: keyPair.publicKey,
        secretKey: keyPair.secretKey
    };
}
function keyToRecoveryPhrase(secretKey) {
    const base64 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2d$util$2f$nacl$2d$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeBase64"])(secretKey);
    // Für MVP: Base64 in Chunks aufteilen
    // TODO: BIP39 Wordlist für bessere UX
    return base64.match(/.{1,8}/g)?.join('-') || base64;
}
function recoveryPhraseToKey(phrase) {
    const base64 = phrase.replace(/-/g, '');
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2d$util$2f$nacl$2d$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeBase64"])(base64);
}
function encrypt(data, secretKey) {
    const nonce = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2f$nacl$2d$fast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].randomBytes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2f$nacl$2d$fast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].secretbox.nonceLength);
    const ciphertext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2f$nacl$2d$fast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].secretbox(data, nonce, secretKey);
    return {
        ciphertext: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2d$util$2f$nacl$2d$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeBase64"])(ciphertext),
        nonce: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2d$util$2f$nacl$2d$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeBase64"])(nonce)
    };
}
function decrypt(encrypted, secretKey) {
    const ciphertext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2d$util$2f$nacl$2d$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeBase64"])(encrypted.ciphertext);
    const nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2d$util$2f$nacl$2d$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeBase64"])(encrypted.nonce);
    const decrypted = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2f$nacl$2d$fast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].secretbox.open(ciphertext, nonce, secretKey);
    return decrypted;
}
async function encryptFile(file, secretKey) {
    const arrayBuffer = await file.arrayBuffer();
    const data = new Uint8Array(arrayBuffer);
    const encrypted = encrypt(data, secretKey);
    // Konvertiere Base64 zurück zu Blob für Storage
    const ciphertextBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2d$util$2f$nacl$2d$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeBase64"])(encrypted.ciphertext);
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
        ciphertext: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2d$util$2f$nacl$2d$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeBase64"])(ciphertext),
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
    const msgUint8 = new TextEncoder().encode((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2d$util$2f$nacl$2d$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeBase64"])(secretKey));
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b)=>b.toString(16).padStart(2, '0')).join('').slice(0, 16);
}
function saveKeyToStorage(secretKey, password) {
    if (password) {
    // TODO: Key Derivation mit PBKDF2
    // Für MVP: Direkt speichern
    }
    const encoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2d$util$2f$nacl$2d$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeBase64"])(secretKey);
    localStorage.setItem('photovault_secret_key', encoded);
}
function loadKeyFromStorage() {
    const encoded = localStorage.getItem('photovault_secret_key');
    if (!encoded) return null;
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweetnacl$2d$util$2f$nacl$2d$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeBase64"])(encoded);
    } catch  {
        return null;
    }
}
function clearKeyFromStorage() {
    localStorage.removeItem('photovault_secret_key');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/photovault/UnlockVaultScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UnlockVaultScreen",
    ()=>UnlockVaultScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/crypto.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/sketch-ui/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sketch-ui/SketchButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sketch-ui/SketchCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sketch-ui/SketchIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sketch-ui/SketchInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function UnlockVaultScreen({ userEmail, expectedKeyHash, onUnlock, onCreateNewVault, onLogout }) {
    _s();
    const [phrase, setPhrase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isUnlocking, setIsUnlocking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
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
            const secretKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recoveryPhraseToKey"])(normalizedPhrase);
            if (!secretKey || secretKey.length !== 32) {
                setError("Ungueltige Recovery-Phrase");
                setIsUnlocking(false);
                return;
            }
            // Calculate key hash
            const keyHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserKeyHash"])(secretKey);
            // If user already has a vault, verify the key hash matches
            if (expectedKeyHash && keyHash !== expectedKeyHash) {
                setError("Diese Recovery-Phrase gehoert nicht zu diesem Konto. Bitte ueberpruefe deine Eingabe.");
                setIsUnlocking(false);
                return;
            }
            // Save key to local storage
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveKeyToStorage"])(secretKey);
            // Success
            onUnlock(secretKey, keyHash);
        } catch (err) {
            console.error("Unlock error:", err);
            setError("Ungueltige Recovery-Phrase. Bitte ueberpruefe deine Eingabe.");
        } finally{
            setIsUnlocking(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col px-6 pt-12 pb-8 safe-area-inset bg-[#FAFBFC]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sketch-body text-[14px] text-[#6E6E73]",
                        children: [
                            "Angemeldet als",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                                lineNumber: 94,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#2563EB] font-bold",
                                children: userEmail
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                                lineNumber: 95,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                        lineNumber: 92,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onLogout,
                        className: "sketch-body text-[#FF3B30] text-[15px] hover:text-[#D73A49]",
                        children: "Abmelden"
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                        lineNumber: 97,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                lineNumber: 91,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center text-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchIcon"], {
                                    icon: "shield",
                                    size: 80
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                                    lineNumber: 109,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                                lineNumber: 108,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "sketch-heading text-[32px] mb-2 text-[#1D1D1F]",
                                children: "Vault entsperren"
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                                lineNumber: 111,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "sketch-body text-[15px] text-[#6E6E73] max-w-[300px]",
                                children: expectedKeyHash ? "Gib deine Recovery-Phrase ein, um auf deine verschluesselten Fotos zuzugreifen" : "Du hast noch keinen Vault. Erstelle einen neuen oder stelle einen bestehenden wieder her."
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                                lineNumber: 114,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                        lineNumber: 107,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchTextarea"], {
                                value: phrase,
                                onChange: (val)=>{
                                    setPhrase(val);
                                    setError(null);
                                },
                                label: "Recovery-Phrase (12 Woerter)",
                                placeholder: "abc123XY-def456AB-...",
                                rows: 4
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                                lineNumber: 123,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "sketch-body text-[12px] text-[#8E8E93] mt-2 px-1",
                                children: "Mit Bindestrichen oder Leerzeichen getrennt"
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                                lineNumber: 133,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                        lineNumber: 122,
                        columnNumber: 17
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative py-3 px-4 mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchCard"], {
                            className: "bg-[#FF3B30]/5 border-[#FF3B30]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "sketch-body text-[14px] text-[#FF3B30] text-center",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                                lineNumber: 141,
                                columnNumber: 30
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                            lineNumber: 140,
                            columnNumber: 26
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                        lineNumber: 139,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchCard"], {
                            className: "bg-[#2563EB]/5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                        className: "w-5 h-5 text-[#2563EB] mt-0.5 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                                        lineNumber: 150,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "sketch-subheading text-[15px] mb-1",
                                                children: "Warum brauche ich die Phrase?"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                                                lineNumber: 152,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "sketch-body text-[13px] text-[#6E6E73]",
                                                children: "Deine Fotos sind lokal verschluesselt. Nur mit der Recovery-Phrase kannst du sie entschluesseln. Wir speichern sie niemals."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                                                lineNumber: 155,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                                        lineNumber: 151,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                                lineNumber: 149,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                            lineNumber: 148,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                        lineNumber: 147,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                lineNumber: 105,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchButton"], {
                        onClick: handleUnlock,
                        disabled: isUnlocking || !phrase.trim(),
                        className: "w-full",
                        size: "lg",
                        children: isUnlocking ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "w-6 h-6 animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                            lineNumber: 174,
                            columnNumber: 25
                        }, this) : "Vault entsperren"
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                        lineNumber: 167,
                        columnNumber: 17
                    }, this),
                    !expectedKeyHash && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onCreateNewVault,
                        className: "w-full py-2 sketch-body text-[#2563EB] text-[17px] hover:underline",
                        children: "Neuen Vault erstellen"
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                        lineNumber: 181,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
                lineNumber: 166,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/photovault/UnlockVaultScreen.tsx",
        lineNumber: 89,
        columnNumber: 9
    }, this);
}
_s(UnlockVaultScreen, "p2gHQtofVNbTdBlsl21001lHzNk=");
_c = UnlockVaultScreen;
var _c;
__turbopack_context__.k.register(_c, "UnlockVaultScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-encryption.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEncryption",
    ()=>useEncryption
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/crypto.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
/**
 * useEncryption Hook - Key Management
 */ "use client";
;
;
function useEncryption() {
    _s();
    const [secretKey, setSecretKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isInitialized, setIsInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [recoveryPhrase, setRecoveryPhrase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isGeneratingKey, setIsGeneratingKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userKeyHash, setUserKeyHash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Load key on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEncryption.useEffect": ()=>{
            const loadKey = {
                "useEncryption.useEffect.loadKey": async ()=>{
                    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadKeyFromStorage"])();
                    if (key) {
                        setSecretKey(key);
                        setRecoveryPhrase((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyToRecoveryPhrase"])(key));
                        const hash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserKeyHash"])(key);
                        setUserKeyHash(hash);
                    }
                    setIsInitialized(true);
                }
            }["useEncryption.useEffect.loadKey"];
            loadKey();
        }
    }["useEncryption.useEffect"], []);
    // Generate new key
    const generateNewKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useEncryption.useCallback[generateNewKey]": ()=>{
            return new Promise({
                "useEncryption.useCallback[generateNewKey]": (resolve)=>{
                    setIsGeneratingKey(true);
                    // Simulate key generation time
                    setTimeout({
                        "useEncryption.useCallback[generateNewKey]": async ()=>{
                            const keyPair = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateKeyPair"])();
                            const key = keyPair.secretKey;
                            setSecretKey(key);
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveKeyToStorage"])(key);
                            const phrase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyToRecoveryPhrase"])(key);
                            setRecoveryPhrase(phrase);
                            const hash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserKeyHash"])(key);
                            setUserKeyHash(hash);
                            setIsGeneratingKey(false);
                            resolve(phrase);
                        }
                    }["useEncryption.useCallback[generateNewKey]"], 1500);
                }
            }["useEncryption.useCallback[generateNewKey]"]);
        }
    }["useEncryption.useCallback[generateNewKey]"], []);
    // Restore from recovery phrase
    const restoreFromPhrase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useEncryption.useCallback[restoreFromPhrase]": (phrase)=>{
            try {
                const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recoveryPhraseToKey"])(phrase);
                setSecretKey(key);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveKeyToStorage"])(key);
                setRecoveryPhrase(phrase);
                return true;
            } catch  {
                return false;
            }
        }
    }["useEncryption.useCallback[restoreFromPhrase]"], []);
    // Logout / Clear key
    const clearKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useEncryption.useCallback[clearKey]": ()=>{
            setSecretKey(null);
            setRecoveryPhrase(null);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearKeyFromStorage"])();
        }
    }["useEncryption.useCallback[clearKey]"], []);
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
_s(useEncryption, "ABhQPGTem7MNqFUr7TfzBSzP/UU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/photovault/VaultSetupScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VaultSetupScreen",
    ()=>VaultSetupScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$shield$2d$loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/shield-loader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$encryption$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-encryption.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/sketch-ui/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sketch-ui/SketchButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sketch-ui/SketchCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sketch-ui/SketchIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sketch-ui/SketchToggle.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function VaultSetupScreen({ userId, onComplete, onBack }) {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("intro");
    const [phraseConfirmed, setPhraseConfirmed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { isGeneratingKey, generateNewKey, recoveryPhrase, userKeyHash } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$encryption$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEncryption"])();
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$shield$2d$loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
            lineNumber: 55,
            columnNumber: 16
        }, this);
    }
    // Intro step
    if (step === "intro") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col px-6 pt-12 pb-8 safe-area-inset bg-[#FAFBFC]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onBack,
                    className: "self-start sketch-body text-[#2563EB] text-[17px] mb-8 hover:text-[#1E40AF]",
                    children: "← Zurueck"
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                    lineNumber: 62,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col items-center justify-center text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchIcon"], {
                                icon: "key",
                                size: 80
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                lineNumber: 71,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                            lineNumber: 70,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "sketch-heading text-[32px] mb-3 text-[#1D1D1F]",
                            children: "Erstelle deinen Vault"
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                            lineNumber: 74,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "sketch-body text-[17px] text-[#3B82F6] max-w-[300px] mb-8",
                            children: "Dein persoenlicher Verschluesselungsschluessel schuetzt alle deine Fotos"
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                            lineNumber: 77,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-[320px] space-y-4 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchCard"], {
                                    className: "p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchIcon"], {
                                                icon: "shield",
                                                size: 32,
                                                color: "#30D158"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                                lineNumber: 85,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "sketch-subheading text-[16px]",
                                                        children: "Zero-Knowledge"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "sketch-body text-[13px] text-[#6E6E73]",
                                                        children: "Nur du kannst deine Fotos entschluesseln"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                                lineNumber: 86,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                        lineNumber: 84,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                    lineNumber: 83,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchCard"], {
                                    className: "p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchIcon"], {
                                                icon: "clock",
                                                size: 32,
                                                color: "#2563EB"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                                lineNumber: 97,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "sketch-subheading text-[16px]",
                                                        children: "Recovery-Phrase"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "sketch-body text-[13px] text-[#6E6E73]",
                                                        children: "12 Woerter zum Wiederherstellen"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                                lineNumber: 98,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                        lineNumber: 96,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                    lineNumber: 95,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchCard"], {
                                    className: "p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchIcon"], {
                                                icon: "photo",
                                                size: 32,
                                                color: "#FF9500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                                lineNumber: 109,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "sketch-subheading text-[16px]",
                                                        children: "Multi-Device"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "sketch-body text-[13px] text-[#6E6E73]",
                                                        children: "Synchronisiere all deine Geraete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                                lineNumber: 110,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                        lineNumber: 108,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                    lineNumber: 107,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                            lineNumber: 82,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                    lineNumber: 69,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchButton"], {
                    onClick: handleCreateVault,
                    className: "w-full",
                    size: "lg",
                    children: "Vault erstellen"
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                    lineNumber: 121,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
            lineNumber: 61,
            columnNumber: 13
        }, this);
    }
    // Show recovery phrase
    if (step === "phrase") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col px-6 pt-12 pb-8 safe-area-inset bg-[#FAFBFC]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "sketch-heading text-[32px] mb-2 text-[#1D1D1F]",
                                    children: "Deine Phrase"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                    lineNumber: 138,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "sketch-body text-[15px] text-[#6E6E73]",
                                    children: "Notiere diese Woerter sicher. Du brauchst sie zur Wiederherstellung."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                    lineNumber: 141,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                            lineNumber: 137,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3 mb-6",
                            children: phraseWords.map((word, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchCard"], {
                                    className: "p-3 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sketch-body text-[11px] text-[#6E6E73] block mb-0.5",
                                            children: index + 1
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                            lineNumber: 153,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sketch-subheading text-[16px] break-all",
                                            children: word
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                            lineNumber: 156,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                    lineNumber: 149,
                                    columnNumber: 25
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                            lineNumber: 147,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleCopyPhrase,
                            className: "w-full py-3 sketch-body text-[#2563EB] text-[16px] hover:underline mb-4",
                            children: copied ? "✓ Kopiert!" : "Phrase kopieren"
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                            lineNumber: 164,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchCard"], {
                                className: "bg-[#FF3B30]/5 border-[#FF3B30]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "sketch-body text-[13px] text-[#FF3B30] text-center",
                                    children: "Teile diese Woerter niemals mit anderen. Wer sie hat, kann auf deine Fotos zugreifen."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                    lineNumber: 174,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                lineNumber: 173,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                            lineNumber: 172,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchCard"], {
                                className: "p-4 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sketch-subheading text-[17px] text-[#1D1D1F]",
                                        children: "Sicher gespeichert?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                        lineNumber: 184,
                                        columnNumber: 26
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchToggle"], {
                                        checked: phraseConfirmed,
                                        onChange: setPhraseConfirmed
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                        lineNumber: 187,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                                lineNumber: 183,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                            lineNumber: 182,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                    lineNumber: 136,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchButton"], {
                    onClick: handleConfirmPhrase,
                    disabled: !phraseConfirmed,
                    className: "w-full",
                    size: "lg",
                    children: "Weiter"
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
                    lineNumber: 195,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/photovault/VaultSetupScreen.tsx",
            lineNumber: 135,
            columnNumber: 9
        }, this);
    }
    return null;
}
_s(VaultSetupScreen, "tiDxP/JlZi+3zItGlepxEdMDa9s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$encryption$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEncryption"]
    ];
});
_c = VaultSetupScreen;
var _c;
__turbopack_context__.k.register(_c, "VaultSetupScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Supabase Layer - Metadata-Only Storage
 * Supabase stores ONLY photo metadata and device info, NOT the actual content
 * Content is stored on IPFS (see ipfs.ts and remote-storage.ts)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://jextayidnmtsoofugnig.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpleHRheWlkbm10c29vZnVnbmlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwODM1MDAsImV4cCI6MjA4NDY1OTUwMH0.vxRq32MPWyO_znst5nFCiQ7AWJtlJeOFWMY-RlZmjrs");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/ipfs.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/storage/remote-storage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ipfs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ipfs.ts [app-client] (ecmascript)");
;
const remoteStorage = {
    upload: async (blob, fileName, onProgress)=>{
        try {
            console.log('Uploading to IPFS...', {
                size: blob.size,
                fileName
            });
            const cid = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ipfs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadToIPFS"])(blob, fileName, onProgress);
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
            const blob = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ipfs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadFromIPFS"])(cid);
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ipfs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIPFSConfigured"])();
    }
};
function isRealIPFSCID(cid) {
    // Real IPFS CIDs start with Qm (v0) or bafy/bafk (v1)
    return cid.startsWith('Qm') || cid.startsWith('bafy') || cid.startsWith('bafk');
}
function isLegacyLocalCID(cid) {
    return cid.startsWith('cid_');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/storage/local-db.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dexie$2f$import$2d$wrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dexie/import-wrapper.mjs [app-client] (ecmascript)");
;
class PhotoVaultDB extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dexie$2f$import$2d$wrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/storage/settings-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSettingsStore",
    ()=>useSettingsStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
const dummyStorage = {
    getItem: ()=>null,
    setItem: ()=>{},
    removeItem: ()=>{}
};
const useSettingsStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set)=>({
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
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>("TURBOPACK compile-time truthy", 1) ? localStorage : "TURBOPACK unreachable")
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/settings/DevicePairing.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DevicePairing",
    ()=>DevicePairing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2e$react$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/qrcode.react/lib/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$qr$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__QrCode$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/qr-code.js [app-client] (ecmascript) <export default as QrCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$encryption$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-encryption.ts [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/sketch-ui'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function DevicePairing({ isOpen, onClose }) {
    _s();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("show");
    const [inputKey, setInputKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { recoveryPhrase, restoreFromPhrase } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$encryption$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEncryption"])();
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-6 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SketchCard, {
            className: "bg-white w-full max-w-[380px] p-0 shadow-2xl overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-4 border-b-2 border-[#2563EB]/10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "sketch-heading text-[20px] text-[#1D1D1F]",
                            children: "Gerät verbinden"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5 text-[#6E6E73]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex border-b-2 border-[#2563EB]/10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMode("show"),
                            className: `flex-1 py-4 sketch-subheading text-[15px] flex items-center justify-center gap-2 transition-colors ${mode === "show" ? "text-[#2563EB] bg-[#2563EB]/5" : "text-[#6E6E73]"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$qr$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__QrCode$3e$__["QrCode"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                "Zeigen"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMode("input"),
                            className: `flex-1 py-4 sketch-subheading text-[15px] flex items-center justify-center gap-2 transition-colors ${mode === "input" ? "text-[#2563EB] bg-[#2563EB]/5" : "text-[#6E6E73]"}`,
                            children: "Eingeben"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-5",
                    children: mode === "show" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "sketch-body text-[14px] text-[#6E6E73] text-center mb-6",
                                children: "Scanne den QR-Code oder kopiere den Schlüssel."
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                lineNumber: 107,
                                columnNumber: 15
                            }, this),
                            recoveryPhrase && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SketchCard, {
                                    className: "p-4 bg-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2e$react$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QRCodeSVG"], {
                                        value: recoveryPhrase,
                                        size: 180,
                                        level: "M",
                                        includeMargin: false
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                        lineNumber: 115,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                    lineNumber: 114,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                lineNumber: 113,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SketchCard, {
                                    className: "bg-[#2563EB]/5 p-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "sketch-body text-[11px] text-[#6E6E73] mb-1",
                                            children: "Backup-Phrase:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                            lineNumber: 128,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "sketch-subheading text-[13px] break-all leading-relaxed",
                                            children: recoveryPhrase || "Kein Schlüssel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                            lineNumber: 129,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                    lineNumber: 127,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                lineNumber: 126,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SketchButton, {
                                onClick: handleCopyKey,
                                disabled: !recoveryPhrase,
                                className: "w-full",
                                size: "md",
                                children: copied ? "✓ Kopiert!" : "Phrase kopieren"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                lineNumber: 136,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                        lineNumber: 106,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "sketch-body text-[14px] text-[#6E6E73] text-center mb-6",
                                children: "Gib den Schlüssel deines anderen Geräts ein."
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                lineNumber: 147,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SketchTextarea, {
                                value: inputKey,
                                onChange: (val)=>{
                                    setInputKey(val);
                                    setError(null);
                                },
                                placeholder: "Schlüssel hier einfügen...",
                                rows: 3,
                                className: "mb-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                lineNumber: 152,
                                columnNumber: 15
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "sketch-body text-[14px] text-[#FF3B30] text-center mb-4 italic",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                lineNumber: 165,
                                columnNumber: 17
                            }, this),
                            success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "sketch-body text-[14px] text-[#30D158] text-center mb-4 font-bold",
                                children: "✓ Erfolg!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                lineNumber: 171,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SketchButton, {
                                onClick: handleImportKey,
                                disabled: !inputKey.trim() || success,
                                className: "w-full",
                                size: "md",
                                children: success ? "Verbunden" : "Verbinden"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                lineNumber: 177,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "sketch-body text-[11px] text-[#FF9500] text-center mt-6",
                                children: "Achtung: Dies ersetzt deinen aktuellen Schlüssel!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                                lineNumber: 187,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                        lineNumber: 146,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/features/settings/DevicePairing.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(DevicePairing, "eDekeB9nXV3fW/LxGwoP5SPMzLs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$encryption$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEncryption"]
    ];
});
_c = DevicePairing;
var _c;
__turbopack_context__.k.register(_c, "DevicePairing");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/photovault/SettingsPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingsPanel",
    ()=>SettingsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/custom-icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$encryption$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-encryption.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deviceId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/deviceId.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$remote$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage/remote-storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$local$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage/local-db.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/crypto.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/sketch-ui/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sketch-ui/SketchButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sketch-ui/SketchCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sketch-ui/SketchToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sketch-ui/SketchIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$settings$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage/settings-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$settings$2f$DevicePairing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/settings/DevicePairing.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
    _s();
    const [showDevices, setShowDevices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPhraseWarning, setShowPhraseWarning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showNewKeyWarning, setShowNewKeyWarning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showBackupPhrase, setShowBackupPhrase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSourceSelector, setShowSourceSelector] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPlanSelector, setShowPlanSelector] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [realDevices, setRealDevices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Manual Backup State
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadProgress, setUploadProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        current: 0,
        total: 0
    });
    // Persistent Settings
    const autoBackupEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$settings$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"])({
        "SettingsPanel.useSettingsStore[autoBackupEnabled]": (state)=>state.autoBackupEnabled
    }["SettingsPanel.useSettingsStore[autoBackupEnabled]"]);
    const setAutoBackupEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$settings$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"])({
        "SettingsPanel.useSettingsStore[setAutoBackupEnabled]": (state)=>state.setAutoBackupEnabled
    }["SettingsPanel.useSettingsStore[setAutoBackupEnabled]"]);
    const backgroundBackupEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$settings$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"])({
        "SettingsPanel.useSettingsStore[backgroundBackupEnabled]": (state)=>state.backgroundBackupEnabled
    }["SettingsPanel.useSettingsStore[backgroundBackupEnabled]"]);
    const setBackgroundBackupEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$settings$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"])({
        "SettingsPanel.useSettingsStore[setBackgroundBackupEnabled]": (state)=>state.setBackgroundBackupEnabled
    }["SettingsPanel.useSettingsStore[setBackgroundBackupEnabled]"]);
    const selectedPlan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$settings$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"])({
        "SettingsPanel.useSettingsStore[selectedPlan]": (state)=>state.selectedPlan
    }["SettingsPanel.useSettingsStore[selectedPlan]"]);
    const setSelectedPlan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$settings$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"])({
        "SettingsPanel.useSettingsStore[setSelectedPlan]": (state)=>state.setSelectedPlan
    }["SettingsPanel.useSettingsStore[setSelectedPlan]"]);
    const setLastBackup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$settings$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"])({
        "SettingsPanel.useSettingsStore[setLastBackup]": (state)=>state.setLastBackup
    }["SettingsPanel.useSettingsStore[setLastBackup]"]);
    const { secretKey, recoveryPhrase, generateNewKey, clearKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$encryption$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEncryption"])();
    const currentDeviceId = ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deviceId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDeviceId"])() : "TURBOPACK unreachable";
    const [userKeyHash, setUserKeyHash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Get userKeyHash
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsPanel.useEffect": ()=>{
            if (secretKey) {
                __turbopack_context__.A("[project]/src/lib/crypto.ts [app-client] (ecmascript, async loader)").then({
                    "SettingsPanel.useEffect": (m)=>m.getUserKeyHash(secretKey)
                }["SettingsPanel.useEffect"]).then(setUserKeyHash);
            }
        }
    }["SettingsPanel.useEffect"], [
        secretKey
    ]);
    // Fetch real devices from Supabase using hash (aggregates all devices with same key)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsPanel.useEffect": ()=>{
            if (!userKeyHash) return;
            const fetchDevices = {
                "SettingsPanel.useEffect.fetchDevices": async ()=>{
                    try {
                        const devices = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDevicesForUser"])(userKeyHash);
                        setRealDevices(devices);
                    } catch (err) {
                        console.error("Failed to fetch devices:", err);
                    }
                }
            }["SettingsPanel.useEffect.fetchDevices"];
            fetchDevices();
        }
    }["SettingsPanel.useEffect"], [
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
            const photos = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$local$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllPhotos"])();
            const photosWithBlobs = photos.filter((p)=>p.encryptedBlob);
            setUploadProgress({
                current: 0,
                total: photosWithBlobs.length
            });
            let uploaded = 0;
            const deviceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deviceId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDeviceId"])();
            const keyHash = userKeyHash || await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserKeyHash"])(secretKey);
            for (const photo of photosWithBlobs){
                if (!photo.encryptedBlob) continue;
                try {
                    // Check if already in Supabase metadata for this user
                    const existsInSupabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cidExistsInSupabase"])(photo.cid, keyHash);
                    if (!existsInSupabase) {
                        // Upload encrypted blob to IPFS
                        const newCid = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$remote$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remoteStorage"].upload(photo.encryptedBlob, photo.fileName);
                        console.log(`[Backup] Uploaded to IPFS: ${newCid}`);
                        // Sync metadata to Supabase
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadCIDMetadata"])(newCid, photo.fileSize, deviceId, photo.nonce, photo.mimeType, keyHash);
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
    const [showPairingFromSettings, setShowPairingFromSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showClearCacheWarning, setShowClearCacheWarning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleClearCache = async ()=>{
        try {
            // Clear IndexedDB (Dexie)
            const { db } = await __turbopack_context__.A("[project]/src/lib/storage/local-db.ts [app-client] (ecmascript, async loader)");
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DevicesView, {
            devices: displayDevices,
            onBack: ()=>setShowDevices(false),
            onAddDevice: addDevice
        }, void 0, false, {
            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
            lineNumber: 255,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col pb-4 overflow-y-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "px-5 pt-6 pb-4 bg-[#FAFBFC]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "sketch-heading text-[32px]",
                    children: "Einstellungen"
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                    lineNumber: 267,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 px-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "sketch-subheading text-[15px] uppercase tracking-wide px-4 mb-3",
                                children: "Backup"
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchCard"], {
                                className: "overflow-hidden p-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "sketch-subheading text-[17px]",
                                                        children: "Automatisches Backup"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "sketch-body text-[13px] text-[#6E6E73]",
                                                        children: "Neue Fotos automatisch sichern"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                        lineNumber: 282,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 280,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchToggle"], {
                                                checked: autoBackupEnabled,
                                                onChange: toggleAutoBackup
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 284,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 279,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-[2px] bg-[#2563EB]/10 mx-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 290,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "sketch-subheading text-[17px]",
                                                        children: "Hintergrund-Backup"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                        lineNumber: 294,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "sketch-body text-[13px] text-[#6E6E73]",
                                                        children: "Weiter sichern wenn App geschlossen"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                        lineNumber: 295,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 293,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchToggle"], {
                                                checked: backgroundBackupEnabled,
                                                onChange: toggleBackgroundBackup
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 297,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 292,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-[2px] bg-[#2563EB]/10 mx-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 303,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowSourceSelector(true),
                                        className: "w-full flex items-center justify-between p-4 hover:bg-[#2563EB]/5 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchIcon"], {
                                                        icon: "folder",
                                                        size: 28
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-left",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "sketch-subheading text-[17px] block",
                                                                children: "Backup-Quelle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                                lineNumber: 312,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "sketch-body text-[14px] text-[#6E6E73]",
                                                                children: state.photoSource === "photos-app" ? "Fotos-App" : "Dateien-App"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                                lineNumber: 315,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                        lineNumber: 311,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 309,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomIcon"], {
                                                name: "chevronRight",
                                                size: 16,
                                                className: "opacity-40"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 322,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 305,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 mt-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchButton"], {
                                    onClick: triggerManualBackup,
                                    disabled: isUploading || !secretKey,
                                    className: "w-full",
                                    size: "lg",
                                    children: isUploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "w-5 h-5 animate-spin mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 335,
                                                columnNumber: 19
                                            }, this),
                                            uploadProgress.total > 0 ? `${uploadProgress.current}/${uploadProgress.total}` : "Wait..."
                                        ]
                                    }, void 0, true) : "Jetzt sichern"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                    lineNumber: 327,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 326,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "sketch-body text-[13px] text-[#6E6E73] px-4 mt-3 text-center",
                                children: "Alle lokalen Fotos in die Cloud hochladen"
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 345,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "sketch-subheading text-[15px] uppercase tracking-wide px-4 mb-3",
                                children: "Speicher"
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 352,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchCard"], {
                                className: "overflow-hidden p-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "sketch-subheading text-[17px]",
                                                        children: "Aktueller Plan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                        lineNumber: 358,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "sketch-subheading text-[16px] text-[#2563EB]",
                                                        children: selectedPlan === "free" ? "Free" : "Backup+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                        lineNumber: 361,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 357,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "sketch-body text-[14px] text-[#6E6E73]",
                                                children: selectedPlan === "free" ? "Fotos nur auf deinen Geräten" : "200 GB Cloud-Backup aktiv"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 365,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 356,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-[2px] bg-[#2563EB]/10 mx-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 371,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sketch-body text-[15px] text-[#6E6E73]",
                                                    children: "Verwendet"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                    lineNumber: 374,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sketch-subheading text-[15px]",
                                                    children: [
                                                        state.photosCount.toLocaleString(),
                                                        " Fotos (lokal)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                            lineNumber: 373,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 372,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-[2px] bg-[#2563EB]/10 mx-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 380,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowPlanSelector(true),
                                        className: "w-full flex items-center justify-between p-4 hover:bg-[#2563EB]/5 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sketch-subheading text-[17px] text-[#2563EB]",
                                                children: selectedPlan === "free" ? "Upgrade zu Backup+" : "Plan verwalten"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 385,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomIcon"], {
                                                name: "chevronRight",
                                                size: 16,
                                                className: "opacity-40"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 390,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 381,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 355,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                        lineNumber: 351,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "sketch-subheading text-[15px] uppercase tracking-wide px-4 mb-3",
                                children: "Geräte"
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 397,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchCard"], {
                                className: "overflow-hidden p-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowDevices(true),
                                    className: "w-full flex items-center justify-between p-4 hover:bg-[#2563EB]/5 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchIcon"], {
                                                    icon: "photo",
                                                    size: 28
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                    lineNumber: 406,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sketch-subheading text-[17px]",
                                                    children: "Verbundene Geräte"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                    lineNumber: 407,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                            lineNumber: 405,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sketch-body text-[15px] text-[#6E6E73]",
                                                    children: realDevices.length || 1
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                    lineNumber: 412,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomIcon"], {
                                                    name: "chevronRight",
                                                    size: 16,
                                                    className: "opacity-40"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                    lineNumber: 415,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                            lineNumber: 411,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                    lineNumber: 401,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 400,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                        lineNumber: 396,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "sketch-subheading text-[15px] uppercase tracking-wide px-4 mb-3",
                                children: "Sicherheit"
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 423,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchCard"], {
                                className: "overflow-hidden p-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowPhraseWarning(true),
                                        className: "w-full flex items-center justify-between p-4 hover:bg-[#2563EB]/5 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sketch-subheading text-[17px]",
                                                children: "Backup-Phrase anzeigen"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 431,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomIcon"], {
                                                name: "chevronRight",
                                                size: 16,
                                                className: "opacity-40"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 434,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 427,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-[2px] bg-[#2563EB]/10 mx-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 436,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowNewKeyWarning(true),
                                        className: "w-full flex items-center justify-between p-4 hover:bg-[#FF3B30]/5 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sketch-subheading text-[17px] text-[#FF3B30]",
                                                children: "Neuen Schlüssel erstellen"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 441,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomIcon"], {
                                                name: "chevronRight",
                                                size: 16,
                                                className: "opacity-40"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 444,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 437,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 426,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "sketch-body text-[13px] text-[#6E6E73] px-4 mt-3",
                                children: "Teile diese Wörter niemals mit anderen."
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 447,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                        lineNumber: 422,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "sketch-subheading text-[15px] uppercase tracking-wide px-4 mb-3",
                                children: "Wartung"
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 454,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchCard"], {
                                className: "overflow-hidden p-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowClearCacheWarning(true),
                                    className: "w-full flex items-center justify-between p-4 hover:bg-[#FF9500]/5 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchIcon"], {
                                                    icon: "warning",
                                                    size: 28,
                                                    color: "#FF9500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                    lineNumber: 463,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sketch-subheading text-[17px] text-[#FF9500]",
                                                    children: "Lokalen Cache leeren"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                    lineNumber: 464,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                            lineNumber: 462,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomIcon"], {
                                            name: "chevronRight",
                                            size: 16,
                                            className: "opacity-40"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                            lineNumber: 468,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                    lineNumber: 458,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 457,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "sketch-body text-[13px] text-[#6E6E73] px-4 mt-3",
                                children: "Löscht lokale Vorschaubilder. Deine Cloud-Fotos bleiben sicher."
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 471,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                        lineNumber: 453,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, this),
            showPhraseWarning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                title: "Sicherheitshinweis",
                message: "Deine Backup-Phrase gibt vollen Zugriff auf deine verschlüsselten Fotos. Nur an einem privaten Ort anzeigen.",
                confirmLabel: "Phrase anzeigen",
                confirmDestructive: false,
                onConfirm: viewBackupPhrase,
                onCancel: ()=>setShowPhraseWarning(false)
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                lineNumber: 479,
                columnNumber: 9
            }, this),
            showBackupPhrase && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-6 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchCard"], {
                    className: "bg-white w-full max-w-[400px] p-6 shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "sketch-heading text-[24px] text-center mb-2",
                            children: "Back-up Phrase"
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                            lineNumber: 493,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "sketch-body text-[14px] text-[#6E6E73] text-center mb-6",
                            children: "Notiere diese Wörter sicher."
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                            lineNumber: 496,
                            columnNumber: 13
                        }, this),
                        realBackupPhraseWords.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3 mb-6",
                            children: realBackupPhraseWords.map((word, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchCard"], {
                                    className: "p-2 text-center bg-[#2563EB]/5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sketch-body text-[10px] text-[#6E6E73] block",
                                            children: index + 1
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                            lineNumber: 504,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sketch-subheading text-[14px]",
                                            children: word
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                            lineNumber: 505,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                    lineNumber: 503,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                            lineNumber: 501,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchCard"], {
                                className: "bg-[#FF9500]/5 border-[#FF9500] p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "sketch-body text-[13px] text-[#FF9500] text-center",
                                    children: "Kein Schlüssel gefunden."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                    lineNumber: 512,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 511,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                            lineNumber: 510,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchButton"], {
                            onClick: ()=>setShowBackupPhrase(false),
                            className: "w-full",
                            children: "Fertig"
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                            lineNumber: 517,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                    lineNumber: 492,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                lineNumber: 491,
                columnNumber: 9
            }, this),
            showNewKeyWarning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                title: "Datenverlust-Warnung",
                message: "Das Erstellen eines neuen Schlüssels löscht alle vorhandenen Backup-Daten permanent. Diese Aktion kann nicht rückgängig gemacht werden.",
                confirmLabel: "Neuen Schlüssel erstellen",
                confirmDestructive: true,
                onConfirm: handleGenerateNewKey,
                onCancel: ()=>setShowNewKeyWarning(false)
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                lineNumber: 529,
                columnNumber: 9
            }, this),
            showSourceSelector && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SourceSelectorModal, {
                currentSource: state.photoSource,
                onSelect: changeSource,
                onClose: ()=>setShowSourceSelector(false)
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                lineNumber: 541,
                columnNumber: 9
            }, this),
            showPlanSelector && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlanSelectorModal, {
                currentPlan: selectedPlan,
                onSelect: changePlan,
                onClose: ()=>setShowPlanSelector(false)
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                lineNumber: 550,
                columnNumber: 9
            }, this),
            showClearCacheWarning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                title: "Cache leeren?",
                message: "Dies wird lokale Vorschaubilder und Gerätedaten löschen. Deine verschlüsselten Fotos in der Cloud bleiben sicher. Die App wird neu geladen.",
                confirmLabel: "Cache leeren",
                confirmDestructive: true,
                onConfirm: handleClearCache,
                onCancel: ()=>setShowClearCacheWarning(false)
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                lineNumber: 559,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$settings$2f$DevicePairing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DevicePairing"], {
                isOpen: showPairingFromSettings,
                onClose: ()=>setShowPairingFromSettings(false)
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                lineNumber: 570,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
        lineNumber: 264,
        columnNumber: 5
    }, this);
}
_s(SettingsPanel, "78+3ElOUEH94ZcIwgKT5dZ5rdeY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$settings$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$settings$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$settings$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$settings$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$settings$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$settings$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$settings$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$encryption$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEncryption"]
    ];
});
_c = SettingsPanel;
;
function SettingsToggleRow({ label, description, enabled, onToggle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onToggle,
        className: "w-full flex items-center justify-between p-4 ios-tap-target",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[17px] text-[#1D1D1F]",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                        lineNumber: 597,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[13px] text-[#6E6E73] mt-0.5",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                        lineNumber: 598,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                lineNumber: 596,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-[51px] h-[31px] rounded-full p-[2px] shrink-0 ${enabled ? "bg-[#30D158]" : "bg-[#E5E5EA]"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `w-[27px] h-[27px] rounded-full bg-white shadow-sm ${enabled ? "ml-auto" : ""}`
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                    lineNumber: 605,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                lineNumber: 600,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
        lineNumber: 592,
        columnNumber: 5
    }, this);
}
_c1 = SettingsToggleRow;
function DevicesView({ devices, onBack, onAddDevice }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col pb-4 overflow-y-auto bg-[#FAFBFC]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "px-5 pt-6 pb-4 bg-[#FAFBFC]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "sketch-body text-[#2563EB] mb-2 flex items-center gap-2 hover:underline",
                        children: "← Zurück"
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                        lineNumber: 633,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "sketch-heading text-[32px]",
                        children: "Geräte"
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                        lineNumber: 639,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                lineNumber: 632,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 px-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchCard"], {
                        className: "overflow-hidden p-0",
                        children: devices.map((device, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    index > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-[2px] bg-[#2563EB]/10 mx-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 646,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchIcon"], {
                                                icon: "photo",
                                                size: 32
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 648,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "sketch-subheading text-[17px] text-[#1D1D1F]",
                                                        children: device.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                        lineNumber: 650,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "sketch-body text-[13px] text-[#6E6E73]",
                                                        children: device.lastActive
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                        lineNumber: 651,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 649,
                                                columnNumber: 17
                                            }, this),
                                            device.syncing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "w-5 h-5 text-[#2563EB] animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 656,
                                                columnNumber: 19
                                            }, this) : device.lastActive === "Aktiv" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "w-4 h-4 text-[#30D158]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                        lineNumber: 659,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "sketch-subheading text-[13px] text-[#30D158]",
                                                        children: "Aktiv"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                        lineNumber: 660,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 658,
                                                columnNumber: 19
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 647,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, device.id, true, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 645,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                        lineNumber: 643,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchButton"], {
                        onClick: onAddDevice,
                        className: "w-full mt-8",
                        size: "lg",
                        children: "Neu verbinden"
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                        lineNumber: 670,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "sketch-body text-[13px] text-[#6E6E73] text-center mt-4 px-4",
                        children: "Schlüssel scannen oder Recovery-Phrase eingeben"
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                        lineNumber: 678,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                lineNumber: 642,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
        lineNumber: 630,
        columnNumber: 5
    }, this);
}
_c2 = DevicesView;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/40 flex items-end justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white w-full max-w-[428px] rounded-t-2xl p-6 pb-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "sf-pro-display text-[20px] text-[#1D1D1F] text-center mb-2",
                    children: "Backup-Quelle"
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                    lineNumber: 711,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[15px] text-[#6E6E73] text-center mb-6",
                    children: "Wo sind deine Fotos gespeichert?"
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                    lineNumber: 714,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3 mb-6",
                    children: sources.map((source)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onSelect(source.id),
                            className: `w-full p-4 rounded-xl bg-[#F2F2F7] text-left ios-tap-target ${currentSource === source.id ? "ring-2 ring-[#007AFF]" : ""}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[17px] font-medium text-[#1D1D1F]",
                                                children: source.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 729,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[13px] text-[#6E6E73] mt-0.5",
                                                children: source.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 732,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 728,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-6 h-6 rounded-full border-2 flex items-center justify-center ${currentSource === source.id ? "border-[#007AFF] bg-[#007AFF]" : "border-[#C7C7CC]"}`,
                                        children: currentSource === source.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2.5 h-2.5 rounded-full bg-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                            lineNumber: 744,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 736,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 727,
                                columnNumber: 15
                            }, this)
                        }, source.id, false, {
                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                            lineNumber: 720,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                    lineNumber: 718,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "w-full h-[44px] text-[#007AFF] text-[17px] ios-tap-target",
                    children: "Abbrechen"
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                    lineNumber: 752,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
            lineNumber: 710,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
        lineNumber: 709,
        columnNumber: 5
    }, this);
}
_c3 = SourceSelectorModal;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/40 flex items-end justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white w-full max-w-[428px] rounded-t-2xl p-6 pb-10 max-h-[80vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "sf-pro-display text-[20px] text-[#1D1D1F] text-center mb-2",
                    children: "Speicherplan"
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                    lineNumber: 800,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[15px] text-[#6E6E73] text-center mb-6",
                    children: "Du kannst jederzeit wechseln"
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                    lineNumber: 803,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3 mb-6",
                    children: plans.map((plan)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onSelect(plan.id),
                            className: `w-full p-4 rounded-xl bg-[#F2F2F7] text-left ios-tap-target ${currentPlan === plan.id ? "ring-2 ring-[#007AFF]" : ""}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[13px] font-bold text-[#007AFF] tracking-wide",
                                                children: plan.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 818,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[17px] font-semibold text-[#1D1D1F] mt-0.5",
                                                children: plan.subtitle
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 821,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "mt-2 space-y-1",
                                                children: plan.features.map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-[13px] text-[#6E6E73] flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[#30D158]",
                                                                children: "✓"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                                lineNumber: 830,
                                                                columnNumber: 25
                                                            }, this),
                                                            " ",
                                                            feature
                                                        ]
                                                    }, feature, true, {
                                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                        lineNumber: 826,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 824,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[15px] font-semibold text-[#1D1D1F] mt-3",
                                                children: plan.price
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                                lineNumber: 834,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 817,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-6 h-6 rounded-full border-2 flex items-center justify-center ${currentPlan === plan.id ? "border-[#007AFF] bg-[#007AFF]" : "border-[#C7C7CC]"}`,
                                        children: currentPlan === plan.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2.5 h-2.5 rounded-full bg-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                            lineNumber: 846,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                        lineNumber: 838,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                                lineNumber: 816,
                                columnNumber: 15
                            }, this)
                        }, plan.id, false, {
                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                            lineNumber: 809,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                    lineNumber: 807,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "w-full h-[44px] text-[#007AFF] text-[17px] ios-tap-target",
                    children: "Abbrechen"
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                    lineNumber: 854,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
            lineNumber: 799,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
        lineNumber: 798,
        columnNumber: 5
    }, this);
}
_c4 = PlanSelectorModal;
function Modal({ title, message, confirmLabel, confirmDestructive, onConfirm, onCancel }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white w-full max-w-[270px] rounded-2xl overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "sf-pro-display text-[17px] text-[#1D1D1F] mb-1",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                            lineNumber: 884,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[13px] text-[#6E6E73] leading-relaxed",
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                            lineNumber: 887,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                    lineNumber: 883,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-[#E5E5EA]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onCancel,
                            className: "w-full py-3 text-[17px] text-[#007AFF] border-b border-[#E5E5EA] ios-tap-target",
                            children: "Abbrechen"
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                            lineNumber: 892,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onConfirm,
                            className: `w-full py-3 text-[17px] font-semibold ios-tap-target ${confirmDestructive ? "text-[#FF3B30]" : "text-[#007AFF]"}`,
                            children: confirmLabel
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                            lineNumber: 898,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
                    lineNumber: 891,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
            lineNumber: 882,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/photovault/SettingsPanel.tsx",
        lineNumber: 881,
        columnNumber: 5
    }, this);
}
_c5 = Modal;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "SettingsPanel");
__turbopack_context__.k.register(_c1, "SettingsToggleRow");
__turbopack_context__.k.register(_c2, "DevicesView");
__turbopack_context__.k.register(_c3, "SourceSelectorModal");
__turbopack_context__.k.register(_c4, "PlanSelectorModal");
__turbopack_context__.k.register(_c5, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/heic-converter.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (!worker) {
        try {
            worker = new Worker('/workers/heic-worker.js');
            worker.onmessage = handleWorkerMessage;
            worker.onerror = handleWorkerError;
            console.log('[HEIC] Worker initialized');
        } catch (error) {
            console.warn('[HEIC] Worker creation failed, will use main thread:', error);
            return null;
        }
    }
    return worker;
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
        const heic2any = (await __turbopack_context__.A("[project]/node_modules/heic2any/dist/heic2any.js [app-client] (ecmascript, async loader)")).default;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-gallery-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGalleryData",
    ()=>useGalleryData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$local$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage/local-db.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/crypto.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$remote$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage/remote-storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deviceId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/deviceId.ts [app-client] (ecmascript)");
// HEIC conversion moved to Web Worker for non-blocking performance
// See src/lib/heic-converter.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$heic$2d$converter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/heic-converter.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
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
    _s();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const [userKeyHash, setUserKeyHash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Generate Key Hash when secretKey changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGalleryData.useEffect": ()=>{
            if (secretKey) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserKeyHash"])(secretKey).then(setUserKeyHash);
            } else {
                setUserKeyHash(null);
            }
        }
    }["useGalleryData.useEffect"], [
        secretKey
    ]);
    // Query: Load all photos from local IndexedDB
    // WICHTIG: Query ist IMMER enabled - IndexedDB braucht kein secretKey
    // Decryption passiert separat wenn secretKey vorhanden ist
    const { data: photos = [], isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'photos'
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$local$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllPhotos"],
        enabled: true
    });
    // Query: Photo count
    const { data: photoCount = 0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'photoCount'
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$local$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPhotoCount"]
    });
    const [uploadProgress, setUploadProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Mutation: Upload photo (convert HEIC -> encrypt -> IPFS -> Supabase metadata)
    const uploadMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useGalleryData.useMutation[uploadMutation]": async (file)=>{
                if (!secretKey) throw new Error('No encryption key');
                if (!userKeyHash) throw new Error('userKeyHash not ready - bitte kurz warten');
                console.log('[Upload] Starting upload:', file.name);
                setUploadProgress(0);
                // Step 0: Convert HEIC to JPEG if needed (iOS compatibility)
                // Uses Web Worker for non-blocking conversion on iPad/iPhone
                const conversionResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$heic$2d$converter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertHeicToJpeg"])(file);
                const processedFile = conversionResult.file;
                if (conversionResult.converted) {
                    console.log('[Upload] HEIC converted:', {
                        originalSize: conversionResult.originalSize,
                        convertedSize: conversionResult.convertedSize
                    });
                }
                // Step 1: Encrypt file client-side
                const { encrypted, nonce } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encryptFile"])(processedFile, secretKey);
                console.log('[Upload] Encrypted:', {
                    size: encrypted.size
                });
                // Step 2: Upload encrypted blob to IPFS -> returns real CID
                let cid;
                try {
                    cid = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$remote$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remoteStorage"].upload(encrypted, processedFile.name, {
                        "useGalleryData.useMutation[uploadMutation]": (progress)=>{
                            setUploadProgress(progress);
                        }
                    }["useGalleryData.useMutation[uploadMutation]"]);
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
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$local$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["savePhoto"])(metadata);
                    console.log('[Upload] Saved to IndexedDB:', cid);
                } catch (dbError) {
                    console.error('[Upload] IndexedDB save FAILED:', dbError);
                    throw dbError; // Fail the mutation - this is critical
                }
                // Step 4: Sync metadata to Supabase (CID only, no blob)
                const deviceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deviceId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDeviceId"])();
                try {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadCIDMetadata"])(cid, processedFile.size, deviceId, nonce, processedFile.type, userKeyHash // Jetzt garantiert nicht undefined
                    );
                    console.log('[Upload] Supabase synced:', cid);
                } catch (error) {
                    console.error('[Upload] Supabase sync failed (local + IPFS OK):', error);
                // Don't throw - local + IPFS save succeeded
                }
                return metadata;
            }
        }["useGalleryData.useMutation[uploadMutation]"],
        onSuccess: {
            "useGalleryData.useMutation[uploadMutation]": ()=>{
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
            }
        }["useGalleryData.useMutation[uploadMutation]"],
        onError: {
            "useGalleryData.useMutation[uploadMutation]": (error)=>{
                console.error('[Upload] Mutation failed:', error);
            }
        }["useGalleryData.useMutation[uploadMutation]"]
    });
    // Mutation: Delete photo
    const deleteMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useGalleryData.useMutation[deleteMutation]": async (id)=>{
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$local$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deletePhoto"])(id);
            // Note: IPFS content is immutable - we just remove our reference
            // In production, you might want to unpin from Pinata
            }
        }["useGalleryData.useMutation[deleteMutation]"],
        onSuccess: {
            "useGalleryData.useMutation[deleteMutation]": ()=>{
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
        }["useGalleryData.useMutation[deleteMutation]"]
    });
    // Decrypt photo for display
    const decryptPhoto = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGalleryData.useCallback[decryptPhoto]": async (photo)=>{
            if (!secretKey || !photo.encryptedBlob) return null;
            const decrypted = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decryptFile"])(photo.encryptedBlob, photo.nonce, secretKey, photo.mimeType);
            if (!decrypted) return null;
            return URL.createObjectURL(decrypted);
        }
    }["useGalleryData.useCallback[decryptPhoto]"], [
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
_s(useGalleryData, "7Q4L9dVYeGYF/zHxpTgoXxAfWDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useRealtimeSync.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRealtimeSync",
    ()=>useRealtimeSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deviceId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/deviceId.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/crypto.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
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
    _s();
    const { onNewPhoto, onPhotoDeleted, enabled = true, secretKey } = options;
    const [remoteCIDs, setRemoteCIDs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastSyncError, setLastSyncError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userKeyHash, setUserKeyHash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Refs to avoid stale closures in callbacks
    const userKeyHashRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const deviceIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])('server');
    const onNewPhotoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onNewPhoto);
    const onPhotoDeletedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onPhotoDeleted);
    const channelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isSubscribedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Update refs when values change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRealtimeSync.useEffect": ()=>{
            onNewPhotoRef.current = onNewPhoto;
            onPhotoDeletedRef.current = onPhotoDeleted;
        }
    }["useRealtimeSync.useEffect"], [
        onNewPhoto,
        onPhotoDeleted
    ]);
    // Initialize device ID (only on client)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRealtimeSync.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                deviceIdRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deviceId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDeviceId"])();
            }
        }
    }["useRealtimeSync.useEffect"], []);
    // Generate Key Hash when secretKey changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRealtimeSync.useEffect": ()=>{
            let isMounted = true;
            if (secretKey) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserKeyHash"])(secretKey).then({
                    "useRealtimeSync.useEffect": (hash)=>{
                        if (isMounted) {
                            setUserKeyHash(hash);
                            userKeyHashRef.current = hash;
                        }
                    }
                }["useRealtimeSync.useEffect"]);
            } else {
                setUserKeyHash(null);
                userKeyHashRef.current = null;
            }
            return ({
                "useRealtimeSync.useEffect": ()=>{
                    isMounted = false;
                }
            })["useRealtimeSync.useEffect"];
        }
    }["useRealtimeSync.useEffect"], [
        secretKey
    ]);
    // Load initial CIDs from Supabase (metadata only)
    // Using ref for userKeyHash to avoid recreating callback
    const loadRemoteCIDs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRealtimeSync.useCallback[loadRemoteCIDs]": async ()=>{
            const currentKeyHash = userKeyHashRef.current;
            const currentDeviceId = deviceIdRef.current;
            if (!currentKeyHash) return [];
            try {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadCIDsFromSupabase"])(currentDeviceId, currentKeyHash);
                const photos = data.map({
                    "useRealtimeSync.useCallback[loadRemoteCIDs].photos": (row)=>({
                            cid: row.cid,
                            device_id: row.device_id,
                            uploaded_at: row.uploaded_at,
                            file_size_bytes: row.file_size_bytes,
                            nonce: row.nonce || null,
                            mime_type: row.mime_type || null,
                            isFromOtherDevice: row.device_id !== currentDeviceId
                        })
                }["useRealtimeSync.useCallback[loadRemoteCIDs].photos"]);
                setRemoteCIDs(photos);
                setLastSyncError(null);
                return photos;
            } catch (error) {
                console.error('Failed to load remote CIDs:', error);
                setLastSyncError(error);
                return [];
            }
        }
    }["useRealtimeSync.useCallback[loadRemoteCIDs]"], []); // Empty deps - uses refs
    // Load data when userKeyHash becomes available
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRealtimeSync.useEffect": ()=>{
            if (userKeyHash && enabled) {
                loadRemoteCIDs();
            }
        }
    }["useRealtimeSync.useEffect"], [
        userKeyHash,
        enabled,
        loadRemoteCIDs
    ]);
    // Subscribe to realtime changes - SEPARATE from data loading
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRealtimeSync.useEffect": ()=>{
            if (!enabled || ("TURBOPACK compile-time value", "object") === 'undefined') return;
            // Don't subscribe if already subscribed
            if (isSubscribedRef.current) return;
            // Wait for userKeyHash to be ready before subscribing
            if (!userKeyHash) return;
            console.log('[Realtime] Setting up subscription...');
            isSubscribedRef.current = true;
            // Debounce helper for rapid events
            let eventQueue = [];
            let debounceTimer = null;
            const processEventQueue = {
                "useRealtimeSync.useEffect.processEventQueue": ()=>{
                    if (eventQueue.length === 0) return;
                    setRemoteCIDs({
                        "useRealtimeSync.useEffect.processEventQueue": (prev)=>{
                            const newPhotos = eventQueue.filter({
                                "useRealtimeSync.useEffect.processEventQueue.newPhotos": (photo)=>!prev.some({
                                        "useRealtimeSync.useEffect.processEventQueue.newPhotos": (p)=>p.cid === photo.cid
                                    }["useRealtimeSync.useEffect.processEventQueue.newPhotos"])
                            }["useRealtimeSync.useEffect.processEventQueue.newPhotos"]);
                            if (newPhotos.length === 0) return prev;
                            return [
                                ...newPhotos,
                                ...prev
                            ];
                        }
                    }["useRealtimeSync.useEffect.processEventQueue"]);
                    // Notify callbacks for photos from other devices
                    eventQueue.filter({
                        "useRealtimeSync.useEffect.processEventQueue": (p)=>p.isFromOtherDevice
                    }["useRealtimeSync.useEffect.processEventQueue"]).forEach({
                        "useRealtimeSync.useEffect.processEventQueue": (photo)=>{
                            console.log('[Realtime] New photo from another device:', photo.cid);
                            onNewPhotoRef.current?.(photo);
                        }
                    }["useRealtimeSync.useEffect.processEventQueue"]);
                    eventQueue = [];
                }
            }["useRealtimeSync.useEffect.processEventQueue"];
            const channel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel(`photos_metadata_${userKeyHash.slice(0, 8)}`).on('postgres_changes', {
                event: 'INSERT',
                schema: 'public',
                table: 'photos_metadata'
            }, {
                "useRealtimeSync.useEffect.channel": (payload)=>{
                    const newPhoto = payload.new;
                    // Only process if it belongs to this user
                    const currentKeyHash = userKeyHashRef.current;
                    if (currentKeyHash && newPhoto.user_key_hash !== currentKeyHash) {
                        return;
                    }
                    const syncedPhoto = {
                        cid: newPhoto.cid,
                        device_id: newPhoto.device_id,
                        uploaded_at: newPhoto.uploaded_at,
                        file_size_bytes: newPhoto.file_size_bytes,
                        nonce: newPhoto.nonce,
                        mime_type: newPhoto.mime_type,
                        isFromOtherDevice: newPhoto.device_id !== deviceIdRef.current
                    };
                    // Add to queue for debounced processing
                    eventQueue.push(syncedPhoto);
                    // Debounce: process after 100ms of no new events
                    if (debounceTimer) clearTimeout(debounceTimer);
                    debounceTimer = setTimeout(processEventQueue, 100);
                }
            }["useRealtimeSync.useEffect.channel"]).on('postgres_changes', {
                event: 'DELETE',
                schema: 'public',
                table: 'photos_metadata'
            }, {
                "useRealtimeSync.useEffect.channel": (payload)=>{
                    const deleted = payload.old;
                    onPhotoDeletedRef.current?.(deleted.cid);
                    setRemoteCIDs({
                        "useRealtimeSync.useEffect.channel": (prev)=>prev.filter({
                                "useRealtimeSync.useEffect.channel": (p)=>p.cid !== deleted.cid
                            }["useRealtimeSync.useEffect.channel"])
                    }["useRealtimeSync.useEffect.channel"]);
                }
            }["useRealtimeSync.useEffect.channel"]).subscribe({
                "useRealtimeSync.useEffect.channel": (status)=>{
                    console.log('[Realtime] Status:', status);
                    setIsConnected(status === 'SUBSCRIBED');
                    // Auto-reconnect on channel error with exponential backoff
                    if (status === 'CHANNEL_ERROR') {
                        console.log('[Realtime] Channel error, retrying in 5s...');
                        setTimeout({
                            "useRealtimeSync.useEffect.channel": ()=>{
                                if (channelRef.current && isSubscribedRef.current) {
                                    channelRef.current.subscribe();
                                }
                            }
                        }["useRealtimeSync.useEffect.channel"], 5000);
                    }
                }
            }["useRealtimeSync.useEffect.channel"]);
            channelRef.current = channel;
            return ({
                "useRealtimeSync.useEffect": ()=>{
                    console.log('[Realtime] Cleaning up subscription...');
                    isSubscribedRef.current = false;
                    if (debounceTimer) clearTimeout(debounceTimer);
                    if (channelRef.current) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].removeChannel(channelRef.current);
                        channelRef.current = null;
                    }
                }
            })["useRealtimeSync.useEffect"];
        }
    }["useRealtimeSync.useEffect"], [
        enabled,
        userKeyHash
    ]); // Only depend on enabled and userKeyHash
    // Force refresh
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRealtimeSync.useCallback[refresh]": async ()=>{
            return loadRemoteCIDs();
        }
    }["useRealtimeSync.useCallback[refresh]"], [
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
_s(useRealtimeSync, "MxPoNCldXwcQ28/17eF5cWLGNU0=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/photovault/DecryptedThumbnail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DecryptedThumbnail",
    ()=>DecryptedThumbnail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud.js [app-client] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/custom-icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/crypto.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$remote$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage/remote-storage.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function DecryptedThumbnail({ photo, secretKey, showCloudBadge = true }) {
    _s();
    const [imageUrl, setImageUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDecrypting, setIsDecrypting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFetchingFromCloud, setIsFetchingFromCloud] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCloudPhoto, setIsCloudPhoto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Track the current image URL for cleanup
    const currentUrlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DecryptedThumbnail.useEffect": ()=>{
            // Skip if no key or already have URL
            if (!secretKey || imageUrl) return;
            const loadAndDecrypt = {
                "DecryptedThumbnail.useEffect.loadAndDecrypt": async ()=>{
                    setIsDecrypting(true);
                    try {
                        let blobToDecrypt = photo.encryptedBlob;
                        // If no local blob, try to fetch from IPFS (cloud)
                        if (!blobToDecrypt && photo.cid && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$remote$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRealIPFSCID"])(photo.cid)) {
                            setIsFetchingFromCloud(true);
                            setIsCloudPhoto(true);
                            console.log('Fetching from IPFS for thumbnail:', photo.cid);
                            try {
                                blobToDecrypt = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$remote$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remoteStorage"].download(photo.cid);
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
                        const decrypted = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decryptFile"])(blobToDecrypt, photo.nonce, secretKey, photo.mimeType);
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
                }
            }["DecryptedThumbnail.useEffect.loadAndDecrypt"];
            loadAndDecrypt();
            // Cleanup: Revoke object URL when component unmounts or photo changes
            return ({
                "DecryptedThumbnail.useEffect": ()=>{
                    if (currentUrlRef.current) {
                        // Delay revocation slightly to avoid WebKitBlobResource-Fehler on some browsers
                        // while the image might still be painting or being accessed
                        const urlToRevoke = currentUrlRef.current;
                        setTimeout({
                            "DecryptedThumbnail.useEffect": ()=>{
                                try {
                                    URL.revokeObjectURL(urlToRevoke);
                                } catch (e) {
                                // Ignore errors during revocation
                                }
                            }
                        }["DecryptedThumbnail.useEffect"], 1000);
                        currentUrlRef.current = null;
                    }
                }
            })["DecryptedThumbnail.useEffect"];
        }
    }["DecryptedThumbnail.useEffect"], [
        photo,
        secretKey,
        imageUrl
    ]);
    // Error state
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full flex flex-col items-center justify-center bg-red-50 text-red-500 p-2 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomIcon"], {
                    name: "lock",
                    size: 24,
                    className: "mb-1 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/DecryptedThumbnail.tsx",
                    lineNumber: 115,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full flex flex-col items-center justify-center bg-blue-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"], {
                    className: "w-5 h-5 text-blue-400 mb-1 animate-pulse"
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/DecryptedThumbnail.tsx",
                    lineNumber: 125,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "w-4 h-4 animate-spin text-blue-400"
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/DecryptedThumbnail.tsx",
                    lineNumber: 126,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full flex flex-col items-center justify-center bg-gray-100 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"], {
                        className: "w-6 h-6 text-gray-400"
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/DecryptedThumbnail.tsx",
                        lineNumber: 138,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full flex items-center justify-center bg-gray-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: imageUrl,
                alt: "",
                className: "w-full h-full object-cover animate-in fade-in duration-500",
                loading: "lazy"
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/DecryptedThumbnail.tsx",
                lineNumber: 154,
                columnNumber: 13
            }, this),
            showCloudBadge && isCloudPhoto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-1 right-1 bg-black/50 rounded-full p-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"], {
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
_s(DecryptedThumbnail, "lcKRZE5ypK3SWuFihELy17pkPFQ=");
_c = DecryptedThumbnail;
var _c;
__turbopack_context__.k.register(_c, "DecryptedThumbnail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/photovault/PhotoGallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhotoGallery",
    ()=>PhotoGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$encryption$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-encryption.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$gallery$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-gallery-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRealtimeSync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useRealtimeSync.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$photovault$2f$DecryptedThumbnail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/photovault/DecryptedThumbnail.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/sketch-ui/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sketch-ui/SketchButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sketch-ui/SketchCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sketch-ui/SketchIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sketch-ui/SketchInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchProgress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sketch-ui/SketchProgress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$remote$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage/remote-storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/crypto.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showSearch, setShowSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showFilter, setShowFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedFilter, setSelectedFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectMode, setSelectMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedPhotos, setSelectedPhotos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [fullscreenPhoto, setFullscreenPhoto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [syncNotification, setSyncNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Fullscreen photo state
    const [fullscreenImageUrl, setFullscreenImageUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoadingFullscreen, setIsLoadingFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDownloading, setIsDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const longPressTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Encryption & Real Photo Storage
    const { secretKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$encryption$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEncryption"])();
    const { photos: realPhotos, uploadPhoto, isUploading, uploadProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$gallery$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGalleryData"])(secretKey);
    // Realtime Sync - receive photos from other devices
    const handleNewPhoto = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PhotoGallery.useCallback[handleNewPhoto]": (photo)=>{
            console.log('New photo from device:', photo.device_id);
            setSyncNotification(`Neues Foto von anderem Gerät empfangen`);
            setTimeout({
                "PhotoGallery.useCallback[handleNewPhoto]": ()=>setSyncNotification(null)
            }["PhotoGallery.useCallback[handleNewPhoto]"], 3000);
        }
    }["PhotoGallery.useCallback[handleNewPhoto]"], []);
    const { remoteCIDs, remoteCIDsFromOtherDevices, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRealtimeSync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRealtimeSync"])({
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
                isCloud: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$remote$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRealIPFSCID"])(p.cid)
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
    const photos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PhotoGallery.useMemo[photos]": ()=>allPhotos.length > 0 ? allPhotos : generatePhotos(Math.min(photosCount, 50))
    }["PhotoGallery.useMemo[photos]"], [
        allPhotos,
        photosCount
    ]);
    const filteredPhotos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PhotoGallery.useMemo[filteredPhotos]": ()=>photos.filter({
                "PhotoGallery.useMemo[filteredPhotos]": (photo)=>{
                    if (selectedFilter && photo.category !== selectedFilter) return false;
                    if (searchQuery && !photo.category.includes(searchQuery.toLowerCase())) return false;
                    return true;
                }
            }["PhotoGallery.useMemo[filteredPhotos]"])
    }["PhotoGallery.useMemo[filteredPhotos]"], [
        photos,
        selectedFilter,
        searchQuery
    ]);
    const filteredGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PhotoGallery.useMemo[filteredGroups]": ()=>groupPhotosByDate(filteredPhotos)
    }["PhotoGallery.useMemo[filteredGroups]"], [
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
            if (!blobToDecrypt && photo.cid && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$remote$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRealIPFSCID"])(photo.cid)) {
                console.log('Loading full-res from IPFS:', photo.cid);
                blobToDecrypt = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$remote$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remoteStorage"].download(photo.cid);
            }
            if (!blobToDecrypt) {
                console.error('No blob available for fullscreen');
                return;
            }
            // Decrypt
            const decrypted = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decryptFile"])(blobToDecrypt, photo.metadata.nonce, secretKey, photo.metadata.mimeType);
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
            if (!blobToDecrypt && photo.cid && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$remote$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRealIPFSCID"])(photo.cid)) {
                blobToDecrypt = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$remote$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remoteStorage"].download(photo.cid);
            }
            if (!blobToDecrypt) return;
            // Decrypt
            const decrypted = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decryptFile"])(blobToDecrypt, photo.metadata.nonce, secretKey, photo.metadata.mimeType);
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
    const handleUploadClick = ()=>{
        fileInputRef.current?.click();
    };
    const allPhotosCount = photos.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full bg-[#FAFBFC]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "px-5 pt-10 pb-4 bg-[#FAFBFC] sticky top-0 z-30 border-b-2 border-[#2563EB]/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "sketch-heading text-[32px]",
                                children: "Galerie"
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                lineNumber: 346,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowSearch(!showSearch),
                                        className: `p-2 rounded-full transition-colors ${showSearch ? "bg-[#2563EB]/10 text-[#2563EB]" : "text-[#6E6E73]"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                            lineNumber: 352,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                        lineNumber: 348,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchButton"], {
                                        onClick: handleUploadClick,
                                        size: "sm",
                                        className: "scale-90",
                                        children: "Hinzufügen"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                        lineNumber: 354,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                lineNumber: 347,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                        lineNumber: 345,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-1 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "sketch-body text-[15px] text-[#3B82F6]",
                                children: [
                                    allPhotosCount,
                                    " Fotos gesichert"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                lineNumber: 366,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchIcon"], {
                                    icon: "cloud",
                                    size: 20,
                                    color: "#30D158"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                    lineNumber: 371,
                                    columnNumber: 29
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchIcon"], {
                                    icon: "warning",
                                    size: 20,
                                    color: "#8E8E93"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                    lineNumber: 373,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                lineNumber: 369,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                        lineNumber: 365,
                        columnNumber: 17
                    }, this),
                    showSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchInput"], {
                            value: searchQuery,
                            onChange: (val)=>setSearchQuery(val),
                            placeholder: "Suchen...",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                lineNumber: 385,
                                columnNumber: 35
                            }, void 0),
                            className: "w-full"
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                            lineNumber: 381,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                        lineNumber: 380,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 overflow-x-auto pb-2 -mx-1 px-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedFilter(null),
                                className: `sketch-subheading text-[15px] px-4 py-1.5 rounded-full transition-colors ${selectedFilter === null ? "bg-[#2563EB] text-white" : "bg-[#2563EB]/5 text-[#2563EB]"}`,
                                children: "Alle"
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                lineNumber: 393,
                                columnNumber: 21
                            }, this),
                            categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedFilter(cat.id),
                                    className: `sketch-subheading text-[15px] px-4 py-1.5 rounded-full transition-colors whitespace-nowrap ${selectedFilter === cat.id ? "bg-[#2563EB] text-white" : "bg-[#2563EB]/5 text-[#2563EB]"}`,
                                    children: cat.label
                                }, cat.id, false, {
                                    fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                    lineNumber: 404,
                                    columnNumber: 25
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                        lineNumber: 392,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                lineNumber: 344,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 overflow-y-auto px-1 pb-[100px]",
                children: filteredGroups.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-20 text-center px-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchIcon"], {
                            icon: "photo",
                            size: 64,
                            className: "mx-auto mb-4 opacity-20"
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                            lineNumber: 423,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "sketch-subheading text-lg text-[#6E6E73]",
                            children: "Keine Fotos gefunden"
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                            lineNumber: 424,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "sketch-body text-sm text-[#8E8E93] mt-2",
                            children: "Versuche es mit einem anderen Suchbegriff oder Filter"
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                            lineNumber: 425,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                    lineNumber: 422,
                    columnNumber: 21
                }, this) : filteredGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "sketch-subheading text-[19px] px-4 mb-3 sticky top-[160px] bg-[#FAFBFC]/80 backdrop-blur-sm z-10 py-1",
                                children: group.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                lineNumber: 430,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 gap-1",
                                children: group.photos.map((photo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `relative aspect-square overflow-hidden cursor-pointer active:opacity-70 transition-opacity ${selectedPhotos.has(photo.id) ? "ring-4 ring-[#2563EB] ring-inset" : ""}`,
                                        onClick: ()=>handlePhotoTap(photo.id, photo),
                                        onTouchStart: ()=>handleTouchStart(photo.id),
                                        onTouchEnd: handleTouchEnd,
                                        onContextMenu: (e)=>{
                                            e.preventDefault();
                                            setSelectMode(true);
                                            setSelectedPhotos(new Set([
                                                photo.id
                                            ]));
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$photovault$2f$DecryptedThumbnail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecryptedThumbnail"], {
                                                photo: photo.metadata,
                                                secretKey: secretKey,
                                                showCloudBadge: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                                lineNumber: 449,
                                                columnNumber: 41
                                            }, this),
                                            selectMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-2 right-2 z-10 w-6 h-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchCard"], {
                                                    className: `w-6 h-6 rounded-full p-0 flex items-center justify-center ${selectedPhotos.has(photo.id) ? "bg-[#2563EB] border-[#2563EB]" : "bg-white/80 border-[#2563EB]"}`,
                                                    children: selectedPhotos.has(photo.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "w-4 h-4 text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                                        lineNumber: 459,
                                                        columnNumber: 86
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                                    lineNumber: 458,
                                                    columnNumber: 49
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                                lineNumber: 457,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, photo.id, true, {
                                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                        lineNumber: 435,
                                        columnNumber: 37
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                lineNumber: 433,
                                columnNumber: 29
                            }, this)
                        ]
                    }, group.date, true, {
                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                        lineNumber: 429,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                lineNumber: 420,
                columnNumber: 13
            }, this),
            syncNotification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-[100px] left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[400px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchCard"], {
                    className: "bg-[#2563EB] border-[#1E40AF] py-3 px-5 shadow-xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "sketch-body text-white text-center flex items-center justify-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "w-4 h-4 animate-spin text-white/80"
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                lineNumber: 476,
                                columnNumber: 29
                            }, this),
                            syncNotification
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                        lineNumber: 475,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                    lineNumber: 474,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                lineNumber: 473,
                columnNumber: 17
            }, this),
            fullscreenPhoto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black z-[100] flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: closeFullscreen,
                                className: "p-2 text-white/80 hover:text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                    lineNumber: 492,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                lineNumber: 488,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "p-2 text-white/80 hover:text-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                            lineNumber: 496,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                        lineNumber: 495,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "p-2 text-white/80 hover:text-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                            lineNumber: 499,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                        lineNumber: 498,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                lineNumber: 494,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                        lineNumber: 487,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 relative flex items-center justify-center overflow-hidden",
                        children: isLoadingFullscreen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchProgress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchCircularProgress"], {
                                    size: 60,
                                    value: 0,
                                    isIndeterminate: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                    lineNumber: 508,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "sketch-body text-white/60",
                                    children: "Entschlüsseln..."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                    lineNumber: 509,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                            lineNumber: 507,
                            columnNumber: 29
                        }, this) : fullscreenImageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: fullscreenImageUrl,
                            alt: "Vollbild",
                            className: "max-w-full max-h-full object-contain"
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                            lineNumber: 512,
                            columnNumber: 29
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center p-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchIcon"], {
                                    icon: "warning",
                                    size: 48,
                                    color: "#FF3B30",
                                    className: "mx-auto mb-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                    lineNumber: 519,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "sketch-body text-white",
                                    children: "Laden fehlgeschlagen"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                    lineNumber: 520,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                            lineNumber: 518,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                        lineNumber: 505,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 flex items-center justify-around bg-black/40 backdrop-blur-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex flex-col items-center gap-1 text-white/70",
                                onClick: ()=>{
                                    const photo = photos.find((p)=>p.id === fullscreenPhoto);
                                    if (photo) downloadPhoto(photo);
                                },
                                disabled: isDownloading,
                                children: [
                                    isDownloading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "w-6 h-6 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                        lineNumber: 535,
                                        columnNumber: 46
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                        lineNumber: 535,
                                        columnNumber: 93
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sketch-body text-[10px]",
                                        children: "Speichern"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                        lineNumber: 536,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                lineNumber: 527,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex flex-col items-center gap-1 text-white/70",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                        lineNumber: 539,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sketch-body text-[10px]",
                                        children: "Exportieren"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                        lineNumber: 540,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                lineNumber: 538,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex flex-col items-center gap-1 text-[#FF3B30]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                        lineNumber: 543,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sketch-body text-[10px]",
                                        children: "Löschen"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                        lineNumber: 544,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                lineNumber: 542,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                        lineNumber: 526,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                lineNumber: 485,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: fileInputRef,
                type: "file",
                multiple: true,
                accept: "image/*",
                onChange: handleFileUpload,
                className: "hidden"
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                lineNumber: 551,
                columnNumber: 13
            }, this),
            isUploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] flex items-center justify-center p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchCard"], {
                    className: "bg-white w-full max-w-[280px] p-6 flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 rounded-full bg-[#2563EB]/10 flex items-center justify-center mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "w-8 h-8 text-[#2563EB] animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                lineNumber: 565,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                            lineNumber: 564,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "sketch-subheading text-lg text-center mb-2",
                            children: "Sicherung läuft..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                            lineNumber: 567,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "sketch-body text-sm text-[#6E6E73] text-center mb-4",
                            children: uploadProgress.total > 0 ? `${uploadProgress.current} von ${uploadProgress.total} Fotos` : 'Vorbereiten...'
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                            lineNumber: 570,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full bg-[#E5E7EB] h-2 rounded-full overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#2563EB] h-full transition-all duration-300",
                                style: {
                                    width: `${uploadProgress.current / (uploadProgress.total || 1) * 100}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                                lineNumber: 574,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                            lineNumber: 573,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                    lineNumber: 563,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
                lineNumber: 562,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/photovault/PhotoGallery.tsx",
        lineNumber: 342,
        columnNumber: 9
    }, this);
}
_s(PhotoGallery, "7U8bttB/2gZGz5PEtxqaAKl6wGg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$encryption$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEncryption"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$gallery$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGalleryData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRealtimeSync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRealtimeSync"]
    ];
});
_c = PhotoGallery;
var _c;
__turbopack_context__.k.register(_c, "PhotoGallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/photovault/PhotoVaultApp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhotoVaultApp",
    ()=>PhotoVaultApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$shield$2d$loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/shield-loader.tsx [app-client] (ecmascript)");
// Screens
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$photovault$2f$AuthScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/photovault/AuthScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$photovault$2f$UnlockVaultScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/photovault/UnlockVaultScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$photovault$2f$VaultSetupScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/photovault/VaultSetupScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$photovault$2f$SettingsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/photovault/SettingsPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$photovault$2f$PhotoGallery$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/photovault/PhotoGallery.tsx [app-client] (ecmascript)");
// Auth
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/sketch-ui/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sketch-ui/SketchIcon.tsx [app-client] (ecmascript)");
// Crypto
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/crypto.ts [app-client] (ecmascript)");
// Device & Supabase
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deviceId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/deviceId.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultState);
    const [currentScreen, setCurrentScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("gallery");
    const [appPhase, setAppPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("loading");
    const [authUser, setAuthUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Better Auth session hook
    const { data: session, isPending: isSessionLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    // Ref-Guard: Verhindert mehrfache Device-Registrierung pro Session
    const hasRegisteredDevice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Register device for authenticated user (nur einmal pro Session)
    const registerDeviceForUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PhotoVaultApp.useCallback[registerDeviceForUser]": async (keyHash, userId)=>{
            // Guard: Nur einmal registrieren
            if (hasRegisteredDevice.current) {
                console.log("[Device] Already registered this session, skipping");
                return;
            }
            try {
                const deviceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deviceId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDeviceId"])();
                const deviceName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deviceId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDeviceName"])();
                const deviceType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deviceId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDeviceType"])();
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerDevice"])(deviceId, deviceName, deviceType, keyHash, userId);
                hasRegisteredDevice.current = true; // Markiere als registriert
                console.log("[Device] Registered successfully:", deviceId);
            } catch (err) {
                console.error("[Device] Registration failed:", err);
            }
        }
    }["PhotoVaultApp.useCallback[registerDeviceForUser]"], []);
    // Initialize app - check auth state and local key
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhotoVaultApp.useEffect": ()=>{
            const initializeApp = {
                "PhotoVaultApp.useEffect.initializeApp": async ()=>{
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
                    const localKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadKeyFromStorage"])();
                    if (localKey) {
                        // Verify local key matches account's vault_key_hash (if set)
                        const localKeyHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserKeyHash"])(localKey);
                        if (vaultKeyHash && localKeyHash !== vaultKeyHash) {
                            // Key mismatch - user needs to enter correct recovery phrase
                            console.warn("Local key doesn't match account's vault_key_hash");
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearKeyFromStorage"])();
                            setAppPhase("unlock");
                            return;
                        }
                        // Register device
                        await registerDeviceForUser(localKeyHash, user.id);
                        // Ready to go
                        setState({
                            "PhotoVaultApp.useEffect.initializeApp": (prev)=>({
                                    ...prev,
                                    isOnboarded: true
                                })
                        }["PhotoVaultApp.useEffect.initializeApp"]);
                        setAppPhase("main");
                    } else if (vaultKeyHash) {
                        // User has a vault but no local key - need to unlock
                        setAppPhase("unlock");
                    } else {
                        // New user without vault - need to create one
                        setAppPhase("setup");
                    }
                }
            }["PhotoVaultApp.useEffect.initializeApp"];
            initializeApp();
        }
    }["PhotoVaultApp.useEffect"], [
        session,
        isSessionLoading,
        registerDeviceForUser
    ]);
    // Handle successful auth (login/signup)
    const handleAuthSuccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PhotoVaultApp.useCallback[handleAuthSuccess]": async (user)=>{
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
            const localKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadKeyFromStorage"])();
            if (localKey) {
                // User has local key - verify and proceed
                const keyHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserKeyHash"])(localKey);
                if (vaultKeyHash && keyHash !== vaultKeyHash) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearKeyFromStorage"])();
                    setAppPhase("unlock");
                } else {
                    await registerDeviceForUser(keyHash, user.id);
                    setState({
                        "PhotoVaultApp.useCallback[handleAuthSuccess]": (prev)=>({
                                ...prev,
                                isOnboarded: true
                            })
                    }["PhotoVaultApp.useCallback[handleAuthSuccess]"]);
                    setAppPhase("main");
                }
            } else if (vaultKeyHash) {
                // User has vault but no local key
                setAppPhase("unlock");
            } else {
                // New user - create vault
                setAppPhase("setup");
            }
        }
    }["PhotoVaultApp.useCallback[handleAuthSuccess]"], [
        registerDeviceForUser
    ]);
    // Handle vault unlock (user entered recovery phrase)
    const handleVaultUnlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PhotoVaultApp.useCallback[handleVaultUnlock]": async (secretKey, keyHash)=>{
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
            setState({
                "PhotoVaultApp.useCallback[handleVaultUnlock]": (prev)=>({
                        ...prev,
                        isOnboarded: true
                    })
            }["PhotoVaultApp.useCallback[handleVaultUnlock]"]);
            setAppPhase("main");
        }
    }["PhotoVaultApp.useCallback[handleVaultUnlock]"], [
        authUser,
        registerDeviceForUser
    ]);
    // Handle new vault creation
    const handleVaultCreated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PhotoVaultApp.useCallback[handleVaultCreated]": async (keyHash)=>{
            if (!authUser) return;
            // Update user's vault_key_hash (anchor key to account)
            await updateUserVaultKeyHash(authUser.id, keyHash);
            setAuthUser({
                ...authUser,
                vaultKeyHash: keyHash
            });
            // Register device
            await registerDeviceForUser(keyHash, authUser.id);
            setState({
                "PhotoVaultApp.useCallback[handleVaultCreated]": (prev)=>({
                        ...prev,
                        isOnboarded: true
                    })
            }["PhotoVaultApp.useCallback[handleVaultCreated]"]);
            setAppPhase("main");
        }
    }["PhotoVaultApp.useCallback[handleVaultCreated]"], [
        authUser,
        registerDeviceForUser
    ]);
    // Handle logout
    const handleLogout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PhotoVaultApp.useCallback[handleLogout]": async ()=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearKeyFromStorage"])();
            setAuthUser(null);
            setState(defaultState);
            setAppPhase("auth");
        }
    }["PhotoVaultApp.useCallback[handleLogout]"], []);
    const navigateTo = (screen)=>{
        setCurrentScreen(screen);
    };
    // Loading state
    if (appPhase === "loading" || isSessionLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$shield$2d$loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
            lineNumber: 261,
            columnNumber: 16
        }, this);
    }
    // Auth screen (login/signup)
    if (appPhase === "auth") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen ios-bg-gray",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1200px] mx-auto min-h-screen bg-[#F2F2F7]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$photovault$2f$AuthScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthScreen"], {
                    onSuccess: handleAuthSuccess
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
                    lineNumber: 269,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
                lineNumber: 268,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
            lineNumber: 267,
            columnNumber: 13
        }, this);
    }
    // Unlock vault screen (enter recovery phrase)
    if (appPhase === "unlock" && authUser) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen ios-bg-gray",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1200px] mx-auto min-h-screen bg-[#F2F2F7]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$photovault$2f$UnlockVaultScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnlockVaultScreen"], {
                    userEmail: authUser.email,
                    expectedKeyHash: authUser.vaultKeyHash,
                    onUnlock: handleVaultUnlock,
                    onCreateNewVault: ()=>setAppPhase("setup"),
                    onLogout: handleLogout
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
                    lineNumber: 280,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
                lineNumber: 279,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
            lineNumber: 278,
            columnNumber: 13
        }, this);
    }
    // Vault setup screen (create new vault)
    if (appPhase === "setup" && authUser) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen ios-bg-gray",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1200px] mx-auto min-h-screen bg-[#F2F2F7]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$photovault$2f$VaultSetupScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VaultSetupScreen"], {
                    userId: authUser.id,
                    onComplete: handleVaultCreated,
                    onBack: ()=>setAppPhase("unlock")
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
                    lineNumber: 297,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
                lineNumber: 296,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
            lineNumber: 295,
            columnNumber: 13
        }, this);
    }
    // Main app
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen ios-bg-gray",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1200px] mx-auto min-h-screen bg-[#F2F2F7] flex flex-col relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-hidden pb-[80px]",
                    children: [
                        currentScreen === "gallery" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$photovault$2f$PhotoGallery$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhotoGallery"], {
                            photosCount: state.photosCount,
                            authUser: authUser
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
                            lineNumber: 314,
                            columnNumber: 25
                        }, this),
                        currentScreen === "settings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$photovault$2f$SettingsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SettingsPanel"], {
                            state: state,
                            setState: setState,
                            onRestartOnboarding: handleLogout,
                            authUser: authUser
                        }, void 0, false, {
                            fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
                            lineNumber: 320,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
                    lineNumber: 312,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BottomNavigation, {
                    currentScreen: currentScreen,
                    onNavigate: navigateTo
                }, void 0, false, {
                    fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
                    lineNumber: 330,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
            lineNumber: 310,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
        lineNumber: 309,
        columnNumber: 9
    }, this);
}
_s(PhotoVaultApp, "/LAgU2NOF4lpBgDf/nPS9dcb1Yc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = PhotoVaultApp;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed bottom-0 left-0 right-0 h-[85px] bg-[#FAFBFC]/90 backdrop-blur-xl border-t-2 border-[#2563EB]/10 flex items-start justify-around pt-3 pb-7 max-w-[1200px] mx-auto z-40",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onNavigate("gallery"),
                className: "flex flex-col items-center gap-1 px-8 transition-transform active:scale-95",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchIcon"], {
                        icon: "photo",
                        size: 28,
                        color: currentScreen === "gallery" ? "#2563EB" : "#9CA3AF"
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
                        lineNumber: 371,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `sketch-subheading text-[12px] ${currentScreen === "gallery" ? "text-[#2563EB]" : "text-[#9CA3AF]"}`,
                        children: "Galerie"
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
                        lineNumber: 376,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
                lineNumber: 367,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onNavigate("settings"),
                className: "flex flex-col items-center gap-1 px-8 transition-transform active:scale-95",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sketch$2d$ui$2f$SketchIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchIcon"], {
                        icon: "folder",
                        size: 28,
                        color: currentScreen === "settings" ? "#2563EB" : "#9CA3AF"
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
                        lineNumber: 388,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `sketch-subheading text-[12px] ${currentScreen === "settings" ? "text-[#2563EB]" : "text-[#9CA3AF]"}`,
                        children: "Optionen"
                    }, void 0, false, {
                        fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
                        lineNumber: 393,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
                lineNumber: 384,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/photovault/PhotoVaultApp.tsx",
        lineNumber: 365,
        columnNumber: 9
    }, this);
}
_c1 = BottomNavigation;
var _c, _c1;
__turbopack_context__.k.register(_c, "PhotoVaultApp");
__turbopack_context__.k.register(_c1, "BottomNavigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_08f23b84._.js.map