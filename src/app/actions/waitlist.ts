"use server";

import { supabase } from "@/lib/supabase";

/**
 * Server Action to join the waitlist.
 */
export async function joinWaitlist(email: string) {
    if (!email || email.trim().length === 0) {
        return { success: false, message: "Email is required" };
    }

    try {
        const { error } = await supabase
            .from("waitlist")
            .insert({ email: email.trim() });

        if (error) {
            // Check for unique constraint violation (code 23505)
            if (error.code === '23505') {
                return { success: true, message: "You are already on the list!" }; // Return success to not leak info/confuse user, or explicit message
            }
            console.error("Supabase error:", error);
            throw error;
        }

        return { success: true };
    } catch (error) {
        console.error("Waitlist error:", error);
        return { success: false, message: "Something went wrong. Please try again." };
    }
}

/**
 * Server Action to get the current waitlist count.
 */
export async function getWaitlistCount(): Promise<number> {
    try {
        const { count, error } = await supabase
            .from("waitlist")
            .select("*", { count: "exact", head: true });

        if (error) {
            console.error("Waitlist count error:", error);
            return 0;
        }

        return count || 0;
    } catch (error) {
        console.error("Waitlist count error:", error);
        return 0;
    }
}
