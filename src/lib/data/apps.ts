import { getSupabaseClient } from "@/lib/supabase";
import type { App } from "@/lib/data/types";

const appColumns =
  "id,title,slug,short_description,description,thumbnail_url,access_type,app_url,donation_url,sort_order,is_published,created_at,updated_at";

export async function getPublishedApps(): Promise<App[]> {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from("apps")
    .select(appColumns)
    .eq("is_published", true)
    .order("sort_order", { ascending: true })
    .order("title", { ascending: true });

  if (error) {
    throw error;
  }

  return data ?? [];
}

export async function getPublishedAppBySlug(slug: string): Promise<App | null> {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return null;
  }

  const { data, error } = await supabase
    .from("apps")
    .select(appColumns)
    .eq("slug", slug)
    .eq("is_published", true)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
}
