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
    lang: "en",
    esPath: `/reportes/${slug}`,
    title: `${report.title.en} | Foresight`,
    description: report.executiveSummary?.en || report.subtitle.en,
    // Redirect stub: canonical points at the destination project page.
    canonicalOverride: `/en/proyectos/${slug}`,
    withLanguageAlternates: true,
  });
}

export default async function EnReportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <LocalizedRedirect to={`/proyectos/${slug}`} />;
}
