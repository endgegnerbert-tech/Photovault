
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const linkId = (await params).id;

        if (!linkId) {
            return NextResponse.json({ error: "Missing ID" }, { status: 400 });
        }

        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.SUPABASE_SERVICE_ROLE_KEY!
        );

        // 1. Check if link exists and is valid (without consuming yet)
        // We could do this in one go with the function, but maybe we want to verify existence first?
        // Actually, the `consume_shared_link` function checks validity.
        // BUT we need the payload.
        // If we return the payload, the client has it.
        // If we just return it, the user could refresh and get it again if we don't consume.
        // So we MUST consume on fetch.

        // 1. Consume view
        const { data: success, error: rpcError } = await supabase.rpc('consume_shared_link', { link_id: linkId });

        if (rpcError) throw rpcError;
        if (!success) {
            return NextResponse.json({ error: "Link expired or invalid" }, { status: 410 }); // 410 Gone
        }

        // 2. Fetch data (now that we've consumed a view)
        // We rely on the fact that we just consumed it.
        // Wait, if views_remaining was 1, it is now 0 and is_active is false.
        // So a normal SELECT WHERE is_active=true will FAIL if we just consumed the last view.
        // We need to select it regardless of status, but ensure it WAS valid a moment ago.
        // OR: We select FIRST, then consume?
        // If we select first, then fail to consume, we leaked data.
        // If we consume first, then select:
        // We can just select by ID. The RPC ensures we only return true if it WAS valid.

        const { data, error } = await supabase
            .from("shared_links")
            .select("encrypted_payload, password_salt, expires_at")
            .eq("id", linkId)
            .single();

        if (error || !data) {
            return NextResponse.json({ error: "Link not found" }, { status: 404 });
        }

        return NextResponse.json({
            encryptedPayload: data.encrypted_payload,
            passwordSalt: data.password_salt,
            expiresAt: data.expires_at
        });

    } catch (error) {
        console.error("Consume share error:", error);
        return NextResponse.json({ error: "Internal Error" }, { status: 500 });
    }
}
