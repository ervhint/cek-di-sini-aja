import { getSupabaseClient } from "@/lib/supabase";
import type { AppAffiliateLink } from "@/lib/data/types";

const affiliateLinkColumns =
  "id,app_id,label,url,sort_order,is_active,created_at,updated_at";

export async function getActiveAppAffiliateLinks(
  appId: string
): Promise<AppAffiliateLink[]> {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from("app_affiliate_links")
    .select(affiliateLinkColumns)
    .eq("app_id", appId)
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  if (error) {
    throw error;
  }

  return data ?? [];
}
