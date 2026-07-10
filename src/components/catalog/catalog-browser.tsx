"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Button, buttonStyles } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { AccessType, App } from "@/lib/data";

type AccessFilter = "all" | AccessType;

type FilterOption = {
  label: string;
  value: AccessFilter;
};

const catalogReturnKey = "cek-di-sini-aja:catalog-return-url";

const accessLabels: Record<AccessType, string> = {
  free: "Gratis",
  freemium: "Freemium",
  paid: "Berbayar"
};

const accessBadgeTones: Record<AccessType, "success" | "info" | "warning"> = {
  free: "success",
  freemium: "info",
  paid: "warning"
};

const filterOptions: FilterOption[] = [
  { label: "Semua", value: "all" },
  { label: "Gratis", value: "free" },
  { label: "Freemium", value: "freemium" },
  { label: "Berbayar", value: "paid" }
];

function normalizeAccessFilter(value: string | null): AccessFilter {
  if (value === "free" || value === "freemium" || value === "paid") {
    return value;
  }

  return "all";
}

export function CatalogBrowser({ apps }: { apps: App[] }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchParamString = searchParams.toString();
  const searchQuery = searchParams.get("q") ?? "";
  const selectedAccess = normalizeAccessFilter(searchParams.get("access"));

  function buildCatalogUrl(nextSearchQuery: string, nextAccess: AccessFilter) {
    const params = new URLSearchParams(searchParamString);
    const trimmedQuery = nextSearchQuery.trim();

    if (trimmedQuery) {
      params.set("q", trimmedQuery);
    } else {
      params.delete("q");
    }

    if (nextAccess === "all") {
      params.delete("access");
    } else {
      params.set("access", nextAccess);
    }

    const queryString = params.toString();
    return queryString ? `${pathname}?${queryString}` : pathname;
  }

  function updateCatalogUrl(nextSearchQuery: string, nextAccess: AccessFilter) {
    const nextUrl = buildCatalogUrl(nextSearchQuery, nextAccess);
    const currentUrl = searchParamString ? `${pathname}?${searchParamString}` : pathname;

    if (nextUrl === currentUrl) {
      return;
    }

    router.replace(nextUrl, {
      scroll: false
    });
  }

  function handleSearchSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    updateCatalogUrl(String(formData.get("q") ?? ""), selectedAccess);
  }

  function rememberCatalogReturn() {
    sessionStorage.setItem(catalogReturnKey, buildCatalogUrl(searchQuery, selectedAccess));
  }

  const filteredApps = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLocaleLowerCase("id-ID");

    return apps.filter((app) => {
      const searchableText = `${app.title} ${app.short_description}`.toLocaleLowerCase("id-ID");
      const matchesSearch = searchableText.includes(normalizedQuery);
      const matchesAccess =
        selectedAccess === "all" || app.access_type === selectedAccess;

      return matchesSearch && matchesAccess;
    });
  }, [apps, searchQuery, selectedAccess]);

  const hasActiveFilter = searchQuery.trim() !== "" || selectedAccess !== "all";

  return (
    <>
      <Card className="space-y-4">
        <form key={searchQuery} onSubmit={handleSearchSubmit}>
          <Input
            aria-label="Cari aplikasi berdasarkan judul atau deskripsi singkat"
            autoComplete="off"
            defaultValue={searchQuery}
            name="q"
            placeholder="Cari aplikasi..."
            type="search"
          />
        </form>
        <div className="flex flex-wrap gap-2" aria-label="Filter jenis akses" role="group">
          {filterOptions.map((option) => {
            const isSelected = selectedAccess === option.value;

            return (
              <Button
                aria-pressed={isSelected}
                key={option.value}
                onClick={() => updateCatalogUrl(searchQuery, option.value)}
                type="button"
                variant={isSelected ? "primary" : "secondary"}
              >
                {option.label}
              </Button>
            );
          })}
        </div>
      </Card>

      {filteredApps.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3" role="list">
          {filteredApps.map((app) => (
            <Card key={app.id} className="flex flex-col gap-4 p-4" role="listitem">
              <div className="relative aspect-[1728/918] overflow-hidden rounded-md border border-[#e6e0f5] bg-[#f7f4ff]">
                <Image
                  alt={`Thumbnail aplikasi ${app.title}`}
                  className="object-contain"
                  fill
                  loading="lazy"
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  src={app.thumbnail_url}
                  unoptimized
                />
              </div>

              <div className="flex flex-1 flex-col gap-3">
                <div className="space-y-2">
                  <Badge tone={accessBadgeTones[app.access_type]}>
                    {accessLabels[app.access_type]}
                  </Badge>
                  <h3 className="text-xl font-semibold text-[#302d3d]">{app.title}</h3>
                  <p className="text-sm leading-6 text-[#716d80]">
                    {app.short_description}
                  </p>
                </div>

                <div className="mt-auto grid gap-2 sm:grid-cols-2">
                  <a
                    aria-label={`Buka aplikasi ${app.title} di tab baru`}
                    className={buttonStyles()}
                    href={app.app_url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Buka Aplikasi
                  </a>
                  <Link
                    aria-label={`Lihat detail aplikasi ${app.title}`}
                    className={buttonStyles({ variant: "secondary" })}
                    href={`/apps/${app.slug}`}
                    onClick={rememberCatalogReturn}
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card aria-live="polite" className="bg-[#f7f4ff] text-center" role="status">
          <h3 className="text-lg font-semibold text-[#302d3d]">
            {hasActiveFilter
              ? "Aplikasi tidak ditemukan."
              : "Belum ada aplikasi yang dipublikasikan."}
          </h3>
          <p className="mt-2 text-sm leading-6 text-[#716d80]">
            {hasActiveFilter
              ? "Coba ubah kata kunci atau filter aksesnya."
              : "Katalog akan muncul di sini setelah aplikasi dipublikasikan."}
          </p>
        </Card>
      )}
    </>
  );
}