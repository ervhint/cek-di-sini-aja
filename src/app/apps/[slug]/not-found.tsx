import Link from "next/link";
import { PublicLayout } from "@/components/layout/public-layout";
import { buttonStyles } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function AppDetailNotFound() {
  return (
    <PublicLayout>
      <Card className="mx-auto max-w-2xl bg-[#f7f4ff] text-center">
        <h1 className="text-2xl font-semibold text-[#302d3d]">
          Aplikasi tidak tersedia.
        </h1>
        <p className="mt-3 text-sm leading-6 text-[#716d80]">
          Aplikasi ini mungkin belum dipublikasikan atau link-nya tidak valid.
        </p>
        <Link className={buttonStyles({ className: "mt-5", variant: "secondary" })} href="/">
          Kembali ke Katalog
        </Link>
      </Card>
    </PublicLayout>
  );
}
