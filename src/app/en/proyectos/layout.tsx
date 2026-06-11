import { buildPageMetadata } from "@/lib/metadata";
import { pageMeta } from "@/lib/page-meta";

export const metadata = buildPageMetadata({
  lang: "en",
  esPath: "/proyectos",
  title: pageMeta["/proyectos"].title.en,
  description: pageMeta["/proyectos"].description.en,
  withLanguageAlternates: true,
});

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
