import { buildPageMetadata } from "@/lib/metadata";
import { pageMeta } from "@/lib/page-meta";

export const metadata = buildPageMetadata({
  lang: "en",
  esPath: "/equipo",
  title: pageMeta["/equipo"].title.en,
  description: pageMeta["/equipo"].description.en,
  withLanguageAlternates: true,
});

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
