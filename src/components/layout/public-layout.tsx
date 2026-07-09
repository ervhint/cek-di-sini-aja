import Link from "next/link";
import type { ReactNode } from "react";
import { PageContainer } from "@/components/ui/page-container";

export function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-[#fff7ed] text-[#342f2a]">
      <PageContainer className="flex min-h-screen flex-col gap-8">
        <header className="flex items-center justify-between border-b border-[#eadfce] py-4">
          <Link className="text-base font-semibold text-[#4f7565]" href="/">
            Cek Di Sini Aja
          </Link>
        </header>
        <div className="flex flex-1 flex-col gap-10 pb-10">{children}</div>
      </PageContainer>
    </main>
  );
}
