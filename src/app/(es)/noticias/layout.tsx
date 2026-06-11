import { buildPageMetadata } from "@/lib/metadata";
import { pageMeta } from "@/lib/page-meta";

export const metadata = buildPageMetadata({
  lang: "es",
  esPath: "/noticias",
  title: pageMeta["/noticias"].title.es,
  description: pageMeta["/noticias"].description.es,
  withLanguageAlternates: true,
});

export default function NoticiasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
