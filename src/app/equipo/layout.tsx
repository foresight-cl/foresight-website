import { buildPageMetadata } from "@/lib/metadata";
import { pageMeta } from "@/lib/page-meta";

export const metadata = buildPageMetadata({
  lang: "es",
  esPath: "/equipo",
  title: pageMeta["/equipo"].title.es,
  description: pageMeta["/equipo"].description.es,
});

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
