import { buildPageMetadata } from "@/lib/metadata";
import { pageMeta } from "@/lib/page-meta";

export const metadata = buildPageMetadata({
  lang: "es",
  esPath: "/proyectos",
  title: pageMeta["/proyectos"].title.es,
  description: pageMeta["/proyectos"].description.es,
});

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
