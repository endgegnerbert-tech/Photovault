
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function POST(req: Request) {
    try {
        const session = await auth.api.getSession({
            headers: await headers()
        });

        if (!session?.user?.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { encryptedPayload, passwordSalt, expiresIn } = await req.json();

        if (!encryptedPayload) {
            return NextResponse.json({ error: "Missing payload" }, { status: 400 });
        }

        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.SUPABASE_SERVICE_ROLE_KEY!
        );

        // Calculate expiry date if provided
        let expiryDate = null;
        if (expiresIn) {
            expiryDate = new Date(Date.now() + expiresIn).toISOString();
        }

        const { data, error } = await supabase
            .from("shared_links")
            .insert({
                user_id: session.user.id,
                encrypted_payload: encryptedPayload,
                password_salt: passwordSalt,
                expires_at: expiryDate,
                views_remaining: 1, // Always 1 for now
                is_active: true
            })
            .select("id")
            .single();

        if (error) throw error;

        return NextResponse.json({ id: data.id });
    } catch (error) {
        console.error("Create share error:", error);
        return NextResponse.json({ error: "Internal Error" }, { status: 500 });
    }
}
