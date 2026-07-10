"use client";

import { buttonStyles } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="min-h-screen bg-[#fcfaff] px-4 py-10 text-[#302d3d]">
      <Card className="mx-auto max-w-2xl bg-white text-center">
        <h1 className="text-2xl font-semibold text-[#302d3d]">
          Data belum bisa dimuat.
        </h1>
        <p className="mt-3 text-sm leading-6 text-[#716d80]">
          Terjadi kendala saat mengambil data katalog. Coba muat ulang halaman ini.
        </p>
        <button className={buttonStyles({ className: "mt-5" })} onClick={reset} type="button">
          Coba Lagi
        </button>
      </Card>
    </main>
  );
}
