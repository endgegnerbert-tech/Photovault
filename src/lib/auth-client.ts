/**
 * Better Auth Client Configuration
 *
 * React hooks for authentication in client components.
 * Works seamlessly in:
 * - Web browser (PWA on Vercel)
 * - Tauri dev mode (localhost:3000)
 * - Tauri production (loads from saecretheaven.com)
 */

import { createAuthClient } from "better-auth/react";

/**
 * Get the base URL for auth requests
 * Simply uses the current origin - works everywhere because:
 * - Browser: window.location.origin = saecretheaven.com
 * - Tauri dev: window.location.origin = localhost:3000
 * - Tauri prod: window.location.origin = saecretheaven.com (from frontendDist)
 */
function getAuthBaseURL(): string {
  // Server-side rendering
  if (typeof window === "undefined") {
    return process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  }

  // Client-side: always use current origin
  // This works for all environments: PWA, Tauri dev, Tauri prod
  return window.location.origin;
}

export const authClient = createAuthClient({
  baseURL: getAuthBaseURL(),
  fetchOptions: {
    credentials: "include",
  },
});

// Export commonly used hooks and methods
export const {
  signIn,
  signUp,
  signOut,
  useSession,
  getSession,
} = authClient;

// Type exports for convenience
export type Session = typeof authClient.$Infer.Session;
export type User = typeof authClient.$Infer.Session.user;
