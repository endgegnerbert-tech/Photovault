
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function GET() {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session?.user?.email) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    try {
        // Get user ID
        const { data: userData, error: userError } = await supabase
            .from("users") // Assuming 'users' table or similar holds the mapping, or we just trust auth session ID if using RLS. But here we use Service Role so we need to be careful.
            // Actually, better to query by the user's ID from session if we have it?
            // session.user.id is usually available.
            .select("id")
            .eq("email", session.user.email)
            .single();

        // Fallback if we can't get ID easily, but usually session has it.
        // Let's assume session.user.id is correct or we use the email lookup.

        let userId = session.user.id;
        if (!userId && userData) {
            userId = userData.id;
        }

        if (!userId) {
            // Try to find user by email in auth.users? Service role can but 'users' table is standard in this codebase?
            // Let's rely on filter by email if we can join?
            // Wait, burner_links has user_id.
            return NextResponse.json({ error: "User ID not found" }, { status: 400 });
        }

        // Query stealth_uploads via burner_links
        // We want all uploads where the burner_link belongs to the user
        // Since Supabase join syntax with nested tables is:
        // select('*, burner_links!inner(*)')

        const { data, error } = await supabase
            .from("stealth_uploads")
            .select(`
        id,
        cid,
        mime_type,
        file_size_bytes,
        uploaded_at,
        nonce,
        burner_link_id,
        burner_links!inner (
          id,
          user_id,
          slug,
          theme,
          public_key
        )
      `)
            .eq("burner_links.user_id", userId)
            .order("uploaded_at", { ascending: false });

        if (error) throw error;

        return NextResponse.json({ uploads: data });
    } catch (error) {
        console.error("Error fetching uploads:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
