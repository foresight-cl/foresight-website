import { buildPageMetadata } from "@/lib/metadata";
import { pageMeta } from "@/lib/page-meta";

export const metadata = buildPageMetadata({
  lang: "en",
  esPath: "/reportes",
  title: pageMeta["/reportes"].title.en,
  description: pageMeta["/reportes"].description.en,
  // /en/reportes is a client-side redirect to /en/proyectos
  canonicalOverride: "/en/proyectos",
  withLanguageAlternates: true,
});

export default function ReportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
