import type { Metadata } from "next";
import type { Lang } from "@/data/types";

/**
 * LinkedIn/Facebook/WhatsApp do not render SVG og:images, and a page-level
 * `openGraph` replaces the root layout's object entirely (losing its image),
 * so every page metadata must be built through this helper to keep a valid
 * og:image and a per-page canonical.
 */
const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Foresight",
};

/** Maps an ES path to its EN counterpart: "/" -> "/en", "/x" -> "/en/x". */
export function enPath(esPath: string): string {
  return esPath === "/" ? "/en" : `/en${esPath}`;
}

export function buildPageMetadata(opts: {
  lang: Lang;
  /** Canonical ES route for the page, e.g. "/proyectos/ram-unesco". */
  esPath: string;
  title: string;
  description: string;
  /** Override the canonical URL (e.g. redirect stubs pointing elsewhere). */
  canonicalOverride?: string;
  /** Emit hreflang alternates; enabled once the /en tree exists. */
  withLanguageAlternates?: boolean;
}): Metadata {
  const { lang, esPath, title, description } = opts;
  const url = lang === "es" ? esPath : enPath(esPath);
  return {
    title,
    description,
    alternates: {
      canonical: opts.canonicalOverride ?? url,
      ...(opts.withLanguageAlternates && {
        languages: {
          es: esPath,
          en: enPath(esPath),
          "x-default": esPath,
        },
      }),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Foresight",
      type: "website",
      locale: lang === "es" ? "es_CL" : "en_US",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
