import type { Metadata } from "next";
import { projects } from "@/data/content";
import { buildPageMetadata } from "@/lib/metadata";
import ProjectDetailView from "@/views/ProjectDetailView";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  return buildPageMetadata({
    lang: "es",
    esPath: `/proyectos/${id}`,
    title: `${project.title.es} | Foresight`,
    description: project.description.es,
    withLanguageAlternates: true,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ProjectDetailView id={id} />;
}
