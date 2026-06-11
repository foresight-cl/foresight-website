import { buildPageMetadata } from "@/lib/metadata";
import { pageMeta } from "@/lib/page-meta";

export const metadata = buildPageMetadata({
  lang: "es",
  esPath: "/reportes",
  title: pageMeta["/reportes"].title.es,
  description: pageMeta["/reportes"].description.es,
  // /reportes is a client-side redirect to /proyectos
  canonicalOverride: "/proyectos",
  withLanguageAlternates: true,
});

export default function ReportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
