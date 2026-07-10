import type { Metadata } from "next";
import { CatalogBrowser } from "@/components/catalog/catalog-browser";
import { PublicLayout } from "@/components/layout/public-layout";
import { Badge } from "@/components/ui/badge";
import { buttonStyles } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getActiveSiteLinks, getPublishedApps } from "@/lib/data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Cek Di Sini Aja | Katalog Aplikasi",
  description:
    "Temukan aplikasi buatan sendiri, cari berdasarkan judul atau deskripsi singkat, lalu buka aplikasi yang kamu butuhkan.",
  openGraph: {
    title: "Cek Di Sini Aja | Katalog Aplikasi",
    description:
      "Katalog aplikasi buatan sendiri yang ringan, ramah, dan mudah dijelajahi.",
    type: "website"
  }
};

export default async function Home() {
  const [apps, donationLinks, affiliateLinks] = await Promise.all([
    getPublishedApps(),
    getActiveSiteLinks("donation"),
    getActiveSiteLinks("affiliate")
  ]);

  return (
    <PublicLayout>
      <section className="grid gap-5 rounded-lg bg-white p-6 shadow-[0_16px_40px_rgba(102,88,183,0.08)] sm:p-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
        <div className="space-y-5">
          <Badge tone="success">Katalog aplikasi</Badge>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight text-[#302d3d] sm:text-5xl">
              Cek Di Sini Aja
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[#716d80]">
              Temukan aplikasi buatan sendiri dalam satu tempat. Pilih aplikasi
              yang kamu butuhkan, buka langsung, atau lihat detailnya dulu.
            </p>
          </div>
        </div>
        <Card className="bg-[#f1eeff] shadow-none">
          <p className="text-sm font-semibold text-[#6658b7]">Status MVP</p>
          <p className="mt-2 text-sm leading-6 text-[#716d80]">
            Katalog sekarang membaca aplikasi yang sudah dipublikasikan dan
            tautan dukungan aktif dari Supabase.
          </p>
        </Card>
      </section>

      <section className="space-y-5" aria-labelledby="catalog-heading">
        <div className="space-y-2">
          <h2 id="catalog-heading" className="text-2xl font-semibold text-[#302d3d]">
            Jelajahi aplikasi
          </h2>
          <p className="text-sm leading-6 text-[#716d80]">
            Cari aplikasi berdasarkan judul atau pilih jenis akses yang sesuai.
          </p>
        </div>

        <CatalogBrowser apps={apps} />
      </section>

      <section className="grid gap-4 md:grid-cols-[1fr_1.2fr]" aria-labelledby="support-heading">
        <Card className="bg-[#f7f4ff]">
          <h2 id="support-heading" className="text-xl font-semibold text-[#302d3d]">
            Dukung Katalog Ini
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#716d80]">
            Dukung ervhint dengan traktir cendol ka.
          </p>
          {donationLinks.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {donationLinks.map((link) => (
                <a
                  aria-label={`Buka tautan donasi: ${link.label}`}
                  className={buttonStyles({ variant: "secondary" })}
                  href={link.url}
                  key={link.id}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : (
            <p className="mt-4 text-sm leading-6 text-[#716d80]">
              Tautan donasi belum tersedia.
            </p>
          )}
        </Card>

        {affiliateLinks.length > 0 ? (
          <Card>
            <h2 className="text-xl font-semibold text-[#302d3d]">
              Link Affiliate
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#716d80]">
              Tautan afiliasi pilihan yang bisa kamu cek.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {affiliateLinks.map((link) => (
                <a
                  aria-label={`Buka link affiliate: ${link.label}`}
                  className={buttonStyles({ variant: "secondary" })}
                  href={link.url}
                  key={link.id}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </Card>
        ) : null}
      </section>
    </PublicLayout>
  );
}
