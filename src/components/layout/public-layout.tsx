import Link from "next/link";
import type { ReactNode } from "react";
import { SocialFooter } from "@/components/layout/social-footer";
import { PageContainer } from "@/components/ui/page-container";

export function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-[#fcfaff] text-[#302d3d]">
      <PageContainer className="flex min-h-screen flex-col gap-8">
        <header className="flex items-center justify-between border-b border-[#e6e0f5] py-4">
          <Link
            className="rounded-md text-base font-semibold text-[#6658b7] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#8b7edb]"
            href="/"
          >
            Cek Di Sini Aja
          </Link>
        </header>
        <div className="flex flex-1 flex-col gap-10">{children}</div>
        <SocialFooter />
      </PageContainer>
    </main>
  );
}
