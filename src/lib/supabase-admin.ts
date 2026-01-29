import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!

// Lazy-initialized admin client to avoid errors during client-side module loading
let _supabaseAdmin: SupabaseClient | null = null

/**
 * Get the Supabase Admin client (with Service Role - BYPASSES RLS)
 * Only available server-side with SUPABASE_SERVICE_ROLE_KEY configured
 */
export function getSupabaseAdmin(): SupabaseClient {
    if (_supabaseAdmin) return _supabaseAdmin

    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseServiceRoleKey) {
        throw new Error('SUPABASE_SERVICE_ROLE_KEY is required for admin client')
    }

    _supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    })

    return _supabaseAdmin
}

// Backwards compatibility - use getter function to avoid module-load errors
export const supabaseAdmin = new Proxy({} as SupabaseClient, {
    get(_, prop) {
        return getSupabaseAdmin()[prop as keyof SupabaseClient]
    }
})
