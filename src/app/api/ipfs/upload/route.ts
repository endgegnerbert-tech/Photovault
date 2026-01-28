/**
 * API Route: IPFS Upload Proxy
 * 
 * Proxies uploads to self-hosted IPFS node with authentication.
 * 
 * SECURITY: All operations require authenticated session.
 */

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const IPFS_API_URL = process.env.NEXT_PUBLIC_IPFS_API_URL || 'https://ipfs.saecretheaven.com/api/v0';
const IPFS_API_USERNAME = process.env.IPFS_API_USERNAME || 'admin';
const IPFS_API_PASSWORD = process.env.IPFS_API_PASSWORD || '';

export async function POST(request: NextRequest) {
    // SECURITY: Verify user is authenticated
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user) {
        return NextResponse.json(
            { error: "Unauthorized - authentication required" },
            { status: 401 }
        );
    }

    if (!IPFS_API_PASSWORD) {
        return NextResponse.json(
            { error: "Server misconfiguration: IPFS credentials missing" },
            { status: 500 }
        );
    }

    try {
        const formData = await request.formData();
        const file = formData.get("file");

        if (!file) {
            return NextResponse.json(
                { error: "No file provided" },
                { status: 400 }
            );
        }

        // Construct Basic Auth header
        const credentials = btoa(`${IPFS_API_USERNAME}:${IPFS_API_PASSWORD}`);
        const authHeader = `Basic ${credentials}`;

        // Prepare request to IPFS node
        const ipfsFormData = new FormData();
        ipfsFormData.append("file", file);

        console.log(`[IPFS Upload Proxy] Uploading to ${IPFS_API_URL}...`);

        const response = await fetch(`${IPFS_API_URL}/add?cid-version=1`, {
            method: "POST",
            headers: {
                "Authorization": authHeader,
            },
            body: ipfsFormData,
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`[IPFS Upload Proxy] Upstream error: ${response.status} - ${errorText}`);
            return NextResponse.json(
                { error: `Upstream error: ${response.status}`, details: errorText },
                { status: 502 }
            );
        }

        // IPFS API returns newline-delimited JSON. We want the last one (usually only one for single file)
        const text = await response.text();
        const lines = text.trim().split('\n');
        const lastLine = lines[lines.length - 1];

        try {
            const result = JSON.parse(lastLine);
            console.log(`[IPFS Upload Proxy] Success, CID: ${result.Hash}`);
            return NextResponse.json(result);
        } catch (e) {
            console.error(`[IPFS Upload Proxy] JSON parse error: ${text}`);
            return NextResponse.json(
                { error: "Invalid response from IPFS node" },
                { status: 502 }
            );
        }

    } catch (error) {
        console.error("[IPFS Upload Proxy] Internal error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
