import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { buildPageMetadata } from "@/lib/metadata";
import { pageMeta } from "@/lib/page-meta";

export const metadata: Metadata = {
  metadataBase: new URL("https://foresight.cl"),
  ...buildPageMetadata({
    lang: "en",
    esPath: "/",
    title: pageMeta["/"].title.en,
    description: pageMeta["/"].description.en,
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
  ],
  authors: [{ name: "Foresight" }],
  robots: {
    index: true,
    follow: true,
  },
};

export default function EnRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteShell lang="en">{children}</SiteShell>;
}
