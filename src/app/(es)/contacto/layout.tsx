import { buildPageMetadata } from "@/lib/metadata";
import { pageMeta } from "@/lib/page-meta";

export const metadata = buildPageMetadata({
  lang: "es",
  esPath: "/contacto",
  title: pageMeta["/contacto"].title.es,
  description: pageMeta["/contacto"].description.es,
  withLanguageAlternates: true,
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
