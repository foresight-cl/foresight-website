"use client";

import { useLang } from "@/lib/i18n";

export function SkipLink() {
  const { lang } = useLang();
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-navy focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
    >
      {lang === "es" ? "Saltar al contenido" : "Skip to content"}
    </a>
  );
}
