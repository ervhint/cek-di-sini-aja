import { PublicLayout } from "@/components/layout/public-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <PublicLayout>
      <section className="flex max-w-3xl flex-col gap-5 rounded-lg bg-[#fffdf8] p-6 shadow-[0_16px_40px_rgba(79,117,101,0.10)] sm:p-8">
        <Badge tone="success">Fondasi desain</Badge>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold leading-tight text-[#342f2a] sm:text-5xl">
            Cek Di Sini Aja
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-[#756d64]">
            Katalog aplikasi sedang disiapkan dengan warna pastel yang tenang,
            ramah, dan mudah dibaca di perangkat seluler.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button type="button">Siap Ditinjau</Button>
          <Button type="button" variant="secondary">
            Lanjut Nanti
          </Button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
        <Card className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-[#342f2a]">Pratinjau komponen</h2>
            <p className="text-sm leading-6 text-[#756d64]">
              Komponen dasar sudah tersedia untuk halaman publik berikutnya.
            </p>
          </div>
          <Input disabled placeholder="Cari aplikasi..." aria-label="Cari aplikasi" />
          <div className="flex flex-wrap gap-2">
            <Badge tone="success">Gratis</Badge>
            <Badge tone="info">Freemium</Badge>
            <Badge tone="warning">Berbayar</Badge>
          </div>
        </Card>

        <Card className="flex flex-col justify-between gap-5 bg-[#efe4d3]">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-[#342f2a]">Arah visual</h2>
            <p className="text-sm leading-6 text-[#756d64]">
              Warna dasar, jarak, fokus keyboard, dan wadah halaman mengikuti
              arahan desain MVP.
            </p>
          </div>
          <Button type="button" variant="ghost" className="w-fit">
            Siap untuk PF-03
          </Button>
        </Card>
      </section>
    </PublicLayout>
  );
}
