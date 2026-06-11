import { buildPageMetadata } from "@/lib/metadata";
import { pageMeta } from "@/lib/page-meta";

export const metadata = buildPageMetadata({
  lang: "en",
  esPath: "/contacto",
  title: pageMeta["/contacto"].title.en,
  description: pageMeta["/contacto"].description.en,
  withLanguageAlternates: true,
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
