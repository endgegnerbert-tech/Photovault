/**
 * IPFS Layer - Content-Addressed Storage with Pinata Remote Pinning
 * All encrypted blobs are stored on IPFS with CIDs
 */

// Pinata Configuration
const PINATA_JWT = process.env.NEXT_PUBLIC_PINATA_JWT || '';
const PINATA_GATEWAY = process.env.NEXT_PUBLIC_PINATA_GATEWAY || 'https://gateway.pinata.cloud';
const PINATA_GATEWAY_TOKEN = process.env.NEXT_PUBLIC_PINATA_GATEWAY_TOKEN || '';

// API Endpoints
const PINATA_PIN_URL = 'https://api.pinata.cloud/pinning/pinFileToIPFS';
const PINATA_UNPIN_URL = 'https://api.pinata.cloud/pinning/unpin';

/**
 * Helper: Get the full gateway base URL
 */
function getGatewayBase(): string {
    if (PINATA_GATEWAY.startsWith('http')) return PINATA_GATEWAY;

    // If it's just a subdomain or already includes mypinata.cloud but lacks protocol
    if (PINATA_GATEWAY.includes('.')) {
        return `https://${PINATA_GATEWAY}`;
    }

    // Default to mypinata.cloud for simple subdomain strings
    return `https://${PINATA_GATEWAY}.mypinata.cloud`;
}

/**
 * Generate a real IPFS CID by uploading to Pinata
 * Returns the CID (Content Identifier) that uniquely identifies this blob
 */
export async function uploadToIPFS(
    blob: Blob,
    fileName?: string,
    onProgress?: (progress: number) => void
): Promise<string> {
    if (!PINATA_JWT) {
        console.warn('PINATA_JWT not configured - using local mock CID');
        const mockCid = `Qm${generateMockHash()}`;
        return mockCid;
    }

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', PINATA_PIN_URL);
        xhr.setRequestHeader('Authorization', `Bearer ${PINATA_JWT}`);

        xhr.upload.onprogress = (event) => {
            if (event.lengthComputable && onProgress) {
                const percentComplete = Math.round((event.loaded / event.total) * 100);
                onProgress(percentComplete);
            }
        };

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                try {
                    const result = JSON.parse(xhr.responseText);
                    resolve(result.IpfsHash);
                } catch (e) {
                    reject(new Error('Failed to parse Pinata response'));
                }
            } else {
                reject(new Error(`IPFS upload failed: ${xhr.status}`));
            }
        };

        xhr.onerror = () => reject(new Error('Network error during IPFS upload'));

        const formData = new FormData();
        formData.append('file', blob, fileName || 'encrypted-photo.bin');

        const metadata = JSON.stringify({
            name: fileName || 'photovault-encrypted',
            keyvalues: { app: 'photovault', type: 'encrypted-photo' }
        });
        formData.append('pinataMetadata', metadata);

        const options = JSON.stringify({ cidVersion: 1 });
        formData.append('pinataOptions', options);

        xhr.send(formData);
    });
}

/**
 * Download content from IPFS via Multiple Gateways in parallel
 * Races gateways for the fastest response
 */
export async function downloadFromIPFS(cid: string): Promise<Blob> {
    const gatewayBase = getGatewayBase();

    const gatewayGetters = [
        // Primary: Dedicated Pinata gateway
        () => {
            const url = new URL(`${gatewayBase}/ipfs/${cid}`);
            if (PINATA_GATEWAY_TOKEN) url.searchParams.set('pinataGatewayToken', PINATA_GATEWAY_TOKEN);
            return url.toString();
        },
        // Fast Fallbacks
        () => `https://cloudflare-ipfs.com/ipfs/${cid}`,
        () => `https://dweb.link/ipfs/${cid}`,
        () => `https://gateway.ipfs.io/ipfs/${cid}`
    ];

    // Create a controller to abort all other requests once one succeeds
    const controller = new AbortController();

    try {
        const fetchPromises = gatewayGetters.map(async (getUrl) => {
            const url = getUrl();
            const response = await fetch(url, {
                signal: controller.signal,
                mode: 'cors',
                credentials: 'omit'
            });

            if (!response.ok) throw new Error(`Gateway ${url} failed`);
            return response.blob();
        });

        // Race the fetches - the first successful one wins
        const winingBlob = await Promise.any(fetchPromises);

        // Abort all other pending requests
        controller.abort();

        return winingBlob;
    } catch (error) {
        controller.abort();
        console.error('All IPFS gateways failed during download:', error);
        throw new Error(`IPFS download failed for CID: ${cid}`);
    }
}

/**
 * Unpin content from Pinata (optional cleanup)
 */
export async function unpinFromIPFS(cid: string): Promise<void> {
    if (!PINATA_JWT) {
        console.warn('PINATA_JWT not configured - skipping unpin');
        return;
    }

    const response = await fetch(`${PINATA_UNPIN_URL}/${cid}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${PINATA_JWT}`,
        },
    });

    if (!response.ok) {
        console.error('Pinata unpin failed:', await response.text());
        // Don't throw - unpin failure is not critical
    }
}

/**
 * Check if a CID exists on IPFS (via gateway)
 */
export async function cidExistsOnIPFS(cid: string): Promise<boolean> {
    try {
        const gatewayBase = getGatewayBase();
        const url = new URL(`${gatewayBase}/ipfs/${cid}`);
        if (PINATA_GATEWAY_TOKEN) {
            url.searchParams.set('pinataGatewayToken', PINATA_GATEWAY_TOKEN);
        }

        const response = await fetch(url.toString(), {
            method: 'HEAD',
            headers: PINATA_GATEWAY_TOKEN ? {
                'x-pinata-gateway-token': PINATA_GATEWAY_TOKEN,
            } : {},
        });
        return response.ok;
    } catch {
        return false;
    }
}

/**
 * Get the gateway URL for a CID (for direct browser access)
 */
export function getIPFSGatewayUrl(cid: string): string {
    const gatewayBase = getGatewayBase();
    const url = new URL(`${gatewayBase}/ipfs/${cid}`);
    if (PINATA_GATEWAY_TOKEN) {
        url.searchParams.set('pinataGatewayToken', PINATA_GATEWAY_TOKEN);
    }
    return url.toString();
}

/**
 * Validate if a string looks like a valid IPFS CID
 */
export function isValidCID(cid: string): boolean {
    // CIDv0 starts with Qm and is 46 chars
    // CIDv1 starts with bafy and varies in length
    return (
        (cid.startsWith('Qm') && cid.length === 46) ||
        cid.startsWith('bafy') ||
        cid.startsWith('bafk')
    );
}

/**
 * Generate a mock hash for development without Pinata
 */
function generateMockHash(): string {
    const chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
    let hash = '';
    for (let i = 0; i < 44; i++) {
        hash += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return hash;
}

/**
 * Check if IPFS/Pinata is configured
 */
export function isIPFSConfigured(): boolean {
    return !!PINATA_JWT && PINATA_JWT.length > 0;
}
