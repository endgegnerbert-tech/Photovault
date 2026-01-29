"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

/**
 * Detects Tauri environment and redirects from landing page to app
 */
export function useTauriRedirect() {
  const router = useRouter();
  const pathname = usePathname();
  const [isTauri, setIsTauri] = useState(false);

  useEffect(() => {
    // Check if running in Tauri
    // @ts-ignore - __TAURI__ is injected by Tauri at runtime
    const tauriDetected = typeof window !== "undefined" && window.__TAURI__ !== undefined;
    setIsTauri(tauriDetected);

    // If in Tauri and on landing page, redirect to app
    if (tauriDetected && pathname === "/") {
      console.log("[Tauri] Detected Tauri environment, redirecting to /app");
      router.replace("/app");
    }
  }, [pathname, router]);

  return { isTauri };
}

/**
 * Component wrapper that handles Tauri redirect
 * Use this in the root layout to auto-redirect Tauri users
 */
export function TauriRedirectHandler({ children }: { children: React.ReactNode }) {
  useTauriRedirect();
  return <>{children}</>;
}
