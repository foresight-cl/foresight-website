"use client";

import { createContext, useContext, ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";

type Lang = "es" | "en";

/** Maps a pathname to its counterpart in the target language. */
export function localizedPath(pathname: string, target: Lang): string {
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  if (target === "en") {
    if (isEn) return pathname;
    return pathname === "/" ? "/en" : `/en${pathname}`;
  }
  if (!isEn) return pathname;
  const rest = pathname.slice(3);
  return rest === "" ? "/" : rest;
}

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const I18nContext = createContext<I18nContextType>({
  lang: "es",
  setLang: () => {},
});

/**
 * The URL is the source of truth for the language: each root layout
 * mounts this provider with a fixed initialLang. Switching languages
 * navigates to the counterpart route (a full reload, since it crosses
 * root layouts). localStorage only records the preference; there is no
 * automatic redirect (crawlers must never be redirected).
 */
export function I18nProvider({
  initialLang,
  children,
}: {
  initialLang: Lang;
  children: ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const setLang = (target: Lang) => {
    if (target === initialLang) return;
    try {
      localStorage.setItem("lang", target);
    } catch {
      // private mode etc.
    }
    router.push(localizedPath(pathname, target));
  };

  return (
    <I18nContext.Provider value={{ lang: initialLang, setLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useLang() {
  return useContext(I18nContext);
}

/** Returns a function that maps an ES href to the current language's route. */
export function useLocalizedHref() {
  const { lang } = useLang();
  return (href: string) => (lang === "en" ? localizedPath(href, "en") : href);
}
