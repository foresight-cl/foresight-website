import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { buildPageMetadata } from "@/lib/metadata";
import { pageMeta } from "@/lib/page-meta";

export const metadata: Metadata = {
  metadataBase: new URL("https://foresight.cl"),
  ...buildPageMetadata({
    lang: "es",
    esPath: "/",
    title: pageMeta["/"].title.es,
    description: pageMeta["/"].description.es,
    withLanguageAlternates: true,
  }),
  keywords: [
    "AI consulting",
    "AI adoption",
    "AI strategy",
    "AI implementation",
    "artificial intelligence",
    "digital transformation",
    "Latin America",
    "AI governance",
    "organizational transformation",
    "UNESCO RAM",
    "consultoría IA",
    "adopción de IA",
    "transformación digital",
    "estrategia IA",
  ],
  authors: [{ name: "Foresight" }],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteShell lang="es">{children}</SiteShell>;
}
