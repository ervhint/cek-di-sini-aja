import { getSupabaseClient } from "@/lib/supabase";
import type { SiteLink, SiteLinkType } from "@/lib/data/types";

const siteLinkColumns =
  "id,link_type,label,url,sort_order,is_active,created_at,updated_at";

export async function getActiveSiteLinks(
  linkType?: SiteLinkType
): Promise<SiteLink[]> {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return [];
  }

  let query = supabase
    .from("site_links")
    .select(siteLinkColumns)
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  if (linkType) {
    query = query.eq("link_type", linkType);
  }

  const { data, error } = await query;

  if (error) {
    throw error;
  }

  return data ?? [];
}
