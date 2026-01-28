/**
 * Self-Hosted IPFS Layer - Contabo VPS
 * Primary storage for encrypted photo blobs
 */

// Self-hosted IPFS Configuration
const IPFS_API_URL = process.env.NEXT_PUBLIC_IPFS_API_URL || 'https://ipfs.saecretheaven.com/api/v0';
const IPFS_GATEWAY_URL = process.env.NEXT_PUBLIC_IPFS_GATEWAY_URL || 'https://ipfs.saecretheaven.com';
const IPFS_API_USERNAME = process.env.IPFS_API_USERNAME || 'admin';
const IPFS_API_PASSWORD = process.env.IPFS_API_PASSWORD || '';

/**
 * Get Basic Auth header for API access
 */
function getAuthHeader(): string {
    const credentials = btoa(`${IPFS_API_USERNAME}:${IPFS_API_PASSWORD}`);
    return `Basic ${credentials}`;
}

/**
 * Check if self-hosted IPFS is configured
 */
export function isSelfHostedConfigured(): boolean {
    // Client-side can only check for the public gateway URL.
    // Use the Proxy if the gateway is configured.
    return !!IPFS_GATEWAY_URL && IPFS_GATEWAY_URL.length > 0;
}

/**
 * Upload blob to self-hosted IPFS node
 * Returns the CID (Content Identifier)
 */
export async function uploadToSelfHosted(
    blob: Blob,
    fileName?: string,
    onProgress?: (progress: number) => void
): Promise<string> {
    // Note: client-side always checks env vars, but IPFS_API_PASSWORD is only on server.
    // So we assume if the Public Gateway is set, we might have the proxy available.
    // Ideally we'd have a public flag, but for now we try the proxy if configured.

    console.log('[IPFS-SelfHosted] Starting upload via Proxy...', { blobSize: blob.size, fileName });

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/api/ipfs/upload');

        // No Auth header needed here - cookie/session auth handled by browser, 
        // internal auth handled by the API route.

        xhr.timeout = 120000; // 2 minutes

        xhr.upload.onprogress = (event) => {
            if (event.lengthComputable && onProgress) {
                const percentComplete = Math.round((event.loaded / event.total) * 100);
                console.log(`[IPFS-SelfHosted] Proxy Upload progress: ${percentComplete}%`);
                onProgress(percentComplete);
            }
        };

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                try {
                    const result = JSON.parse(xhr.responseText);
                    if (result.Hash) {
                        console.log('[IPFS-SelfHosted] Proxy Upload success, CID:', result.Hash);
                        resolve(result.Hash);
                    } else {
                        reject(new Error('No Hash in Proxy response'));
                    }
                } catch (e) {
                    reject(new Error('Failed to parse Proxy response'));
                }
            } else {
                console.error('[IPFS-SelfHosted] Proxy Upload failed:', { status: xhr.status, response: xhr.responseText });
                reject(new Error(`Proxy upload failed: ${xhr.status}`));
            }
        };

        xhr.onerror = () => reject(new Error('Network error during Proxy upload'));
        xhr.ontimeout = () => reject(new Error('Proxy upload timeout'));

        const formData = new FormData();
        formData.append('file', blob, fileName || 'encrypted-photo.bin');

        xhr.send(formData);
    });
}

/**
 * Download content from self-hosted IPFS gateway
 */
export async function downloadFromSelfHosted(cid: string): Promise<Blob> {
    console.log(`[IPFS-SelfHosted] Downloading CID: ${cid}`);

    const url = `${IPFS_GATEWAY_URL}/ipfs/${cid}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': '*/*',
        },
    });

    if (!response.ok) {
        throw new Error(`Self-hosted gateway failed: ${response.status}`);
    }

    const blob = await response.blob();
    console.log(`[IPFS-SelfHosted] Download success, size: ${blob.size} bytes`);
    return blob;
}

/**
 * Check if content exists on self-hosted gateway
 */
export async function existsOnSelfHosted(cid: string): Promise<boolean> {
    try {
        const url = `${IPFS_GATEWAY_URL}/ipfs/${cid}`;
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok;
    } catch {
        return false;
    }
}

/**
 * Get the gateway URL for a CID
 */
export function getSelfHostedGatewayUrl(cid: string): string {
    return `${IPFS_GATEWAY_URL}/ipfs/${cid}`;
}
