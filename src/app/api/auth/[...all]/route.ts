/**
 * Better Auth API Route Handler
 *
 * Handles all authentication endpoints at /api/auth/*
 */

import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

const handler = toNextJsHandler(auth);

export const GET = (req: Request) => handler.GET(req);

export const POST = async (req: Request) => {
    try {
        const res = await handler.POST(req);
        if (res.status >= 400) {
            // Clone the response to avoid consuming the body stream
            const resClone = res.clone();
            try {
                const errorData = await resClone.json();
                console.error(`Better Auth Error [${res.status}]:`, JSON.stringify(errorData, null, 2));
            } catch {
                console.error(`Better Auth Error [${res.status}]: (could not parse body)`);
            }
        }
        return res;
    } catch (error) {
        console.error("Better Auth Route Error:", error);
        throw error;
    }
};
