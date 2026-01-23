/**
 * Better Auth API Route Handler
 *
 * Handles all authentication endpoints at /api/auth/*
 */

import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

const handler = toNextJsHandler(auth);

export const GET = handler;
export const POST = async (req: Request) => {
    try {
        const res = await handler.POST(req);
        if (res.status >= 400) {
            console.error(`Better Auth Error [${res.status}]:`, await res.clone().json());
        }
        return res;
    } catch (error) {
        console.error("Better Auth Route Error:", error);
        throw error;
    }
};
