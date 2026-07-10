import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BackToCatalogButton } from "@/components/catalog/back-to-catalog-button";
import { PublicLayout } from "@/components/layout/public-layout";
import { Badge } from "@/components/ui/badge";
import { buttonStyles } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getActiveAppAffiliateLinks, getPublishedAppBySlug } from "@/lib/data";
import type { AccessType } from "@/lib/data";

export const dynamic = "force-dynamic";

type AppDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

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

export async function generateMetadata({ params }: AppDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = await getPublishedAppBySlug(slug);

  if (!app) {
    return {
      title: "Aplikasi tidak tersedia | Cek Di Sini Aja",
      description: "Aplikasi ini mungkin belum dipublikasikan atau link-nya tidak valid."
    };
  }

  return {
    title: `${app.title} | Cek Di Sini Aja`,
    description: app.short_description,
    openGraph: {
      title: `${app.title} | Cek Di Sini Aja`,
      description: app.short_description,
      images: [
        {
          alt: `Thumbnail aplikasi ${app.title}`,
          url: app.thumbnail_url
        }
      ],
      type: "article"
    }
  };
}

export default async function AppDetailPage({ params }: AppDetailPageProps) {
  const { slug } = await params;
  const app = await getPublishedAppBySlug(slug);

  if (!app) {
    notFound();
  }

  const affiliateLinks = await getActiveAppAffiliateLinks(app.id);

  return (
    <PublicLayout>
      <article className="space-y-6">
        <BackToCatalogButton />

        <section className="grid items-stretch gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="flex h-full items-center p-4">
            <div className="relative aspect-[1728/918] w-full overflow-hidden rounded-md border border-[#e6e0f5] bg-[#f7f4ff]">
              <Image
                alt={`Thumbnail aplikasi ${app.title}`}
                className="object-contain"
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                src={app.thumbnail_url}
                unoptimized
              />
            </div>
          </Card>

          <div className="space-y-5">
            <div className="space-y-3">
              <Badge tone={accessBadgeTones[app.access_type]}>
                {accessLabels[app.access_type]}
              </Badge>
              <h1 className="text-3xl font-semibold leading-tight text-[#302d3d] sm:text-4xl">
                {app.title}
              </h1>
              <p className="text-base leading-7 text-[#716d80]">
                {app.short_description}
              </p>
            </div>

            <Card className="space-y-3 bg-[#f7f4ff] shadow-none">
              <h2 className="text-lg font-semibold text-[#302d3d]">
                Buka dan Dukung Aplikasi
              </h2>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <a
                  aria-label={`Buka aplikasi ${app.title} di tab baru`}
                  className={buttonStyles()}
                  href={app.app_url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Buka Aplikasi
                </a>
                <a
                  aria-label={`Dukung aplikasi ${app.title} di tab baru`}
                  className={buttonStyles({ variant: "secondary" })}
                  href={app.donation_url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Dukung Aplikasi Ini
                </a>
              </div>
            </Card>
          </div>
        </section>

        <Card>
          <h2 className="text-xl font-semibold text-[#302d3d]">Tentang Aplikasi</h2>
          <p className="mt-3 whitespace-pre-line text-sm leading-7 text-[#716d80] sm:text-base">
            {app.description}
          </p>
        </Card>

        {affiliateLinks.length > 0 ? (
          <Card>
            <h2 className="text-xl font-semibold text-[#302d3d]">Link Affiliate</h2>
            <p className="mt-2 text-sm leading-6 text-[#716d80]">
              Link affiliate untuk tetap dukung aplikasi ervhint ka.
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
      </article>
    </PublicLayout>
  );
}


