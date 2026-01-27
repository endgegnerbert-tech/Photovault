"use server";

import { supabase } from "@/lib/supabase";

/**
 * Server Action to verify an access code.
 */
export async function verifyAccessCode(code: string) {
    if (!code || code.trim().length === 0) {
        return { success: false, message: "Code is required" };
    }

    try {
        const { data, error } = await supabase
            .from("access_codes")
            .select("id, is_used")
            .eq("code", code.trim())
            .single();

        if (error || !data) {
            return { success: false, message: "Invalid access code" };
        }

        if (data.is_used) {
            return { success: false, message: "This code has already been used" };
        }

        return { success: true };
    } catch (error) {
        console.error("Verification error:", error);
        return { success: false, message: "Failed to verify code" };
    }
}

/**
 * Server Action to consume an access code.
 * Call this AFTER successful user registration.
 */
export async function consumeAccessCode(code: string) {
    if (!code) return { success: false };

    try {
        const { error } = await supabase
            .from("access_codes")
            .update({ is_used: true })
            .eq("code", code.trim());

        if (error) {
            console.error("Failed to consume code:", error);
            return { success: false, error: error.message };
        }

        return { success: true };
    } catch (error) {
        console.error("Consume error:", error);
        return { success: false, error: "Internal error" };
    }
}
