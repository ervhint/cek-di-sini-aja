export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type AccessType = "free" | "freemium" | "paid";

export type SiteLinkType = "donation" | "affiliate";

export type App = {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  description: string;
  thumbnail_url: string;
  access_type: AccessType;
  app_url: string;
  donation_url: string;
  sort_order: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
};

export type AppAffiliateLink = {
  id: string;
  app_id: string;
  label: string;
  url: string;
  sort_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

export type SiteLink = {
  id: string;
  link_type: SiteLinkType;
  label: string;
  url: string;
  sort_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

export type Database = {
  public: {
    Tables: {
      apps: {
        Row: App;
        Insert: never;
        Update: never;
        Relationships: [];
      };
      app_affiliate_links: {
        Row: AppAffiliateLink;
        Insert: never;
        Update: never;
        Relationships: [
          {
            foreignKeyName: "app_affiliate_links_app_id_fkey";
            columns: ["app_id"];
            referencedRelation: "apps";
            referencedColumns: ["id"];
          }
        ];
      };
      site_links: {
        Row: SiteLink;
        Insert: never;
        Update: never;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      access_type: AccessType;
      site_link_type: SiteLinkType;
    };
    CompositeTypes: Record<string, never>;
  };
};
