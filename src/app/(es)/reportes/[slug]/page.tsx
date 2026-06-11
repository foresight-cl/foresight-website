import type { Metadata } from "next";
import { reports } from "@/data/content";
import { buildPageMetadata } from "@/lib/metadata";
import LocalizedRedirect from "@/views/LocalizedRedirect";

export function generateStaticParams() {
  return reports.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const report = reports.find((r) => r.slug === slug);
  if (!report) return {};
  return buildPageMetadata({
    lang: "es",
    esPath: `/reportes/${slug}`,
    title: `${report.title.es} | Foresight`,
    description: report.executiveSummary?.es || report.subtitle.es,
    // These pages are client-side redirects to the project detail page,
    // so the canonical points at the destination (closest to a 301 in
    // a static export).
    canonicalOverride: `/proyectos/${slug}`,
  });
}

export default async function ReportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <LocalizedRedirect to={`/proyectos/${slug}`} />;
}
