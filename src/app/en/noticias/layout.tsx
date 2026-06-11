import { buildPageMetadata } from "@/lib/metadata";
import { pageMeta } from "@/lib/page-meta";

export const metadata = buildPageMetadata({
  lang: "en",
  esPath: "/noticias",
  title: pageMeta["/noticias"].title.en,
  description: pageMeta["/noticias"].description.en,
  withLanguageAlternates: true,
});

export default function NoticiasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
