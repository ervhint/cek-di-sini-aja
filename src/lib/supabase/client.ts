import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { getSupabaseConfig } from "@/lib/supabase/config";

let cachedClient: SupabaseClient | null = null;

export function isSupabaseConfigured() {
  return getSupabaseConfig().isConfigured;
}

export function createSupabaseClient() {
  const config = getSupabaseConfig();

  if (!config.isConfigured) {
    return null;
  }

  return createClient(config.url, config.anonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false
    }
  });
}

export function getSupabaseClient() {
  if (!cachedClient) {
    cachedClient = createSupabaseClient();
  }

  return cachedClient;
}
