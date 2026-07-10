"use client";

import { useRouter } from "next/navigation";
import { buttonStyles } from "@/components/ui/button";

const catalogReturnKey = "cek-di-sini-aja:catalog-return-url";

export function BackToCatalogButton() {
  const router = useRouter();

  function handleBackToCatalog() {
    const catalogReturnUrl = sessionStorage.getItem(catalogReturnKey);
    sessionStorage.removeItem(catalogReturnKey);

    if (catalogReturnUrl && window.history.length > 1) {
      router.back();
      return;
    }

    router.push(catalogReturnUrl ?? "/");
  }

  return (
    <button
      className={buttonStyles({ className: "w-fit", variant: "secondary" })}
      onClick={handleBackToCatalog}
      type="button"
    >
      Kembali ke Katalog
    </button>
  );
}
