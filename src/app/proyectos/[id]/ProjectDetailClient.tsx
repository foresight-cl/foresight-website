"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  FileText,
  MapPin,
  Calendar,
  Building2,
  ArrowRight,
  Download,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  GradientButton,
  StatCard,
  PillarCard,
  BarChart,
  RangeBarChart,
  SectionHeading,
} from "@/components/ui";
import { RegionFlag } from "@/components/ui/RegionFlag";
import { projects, clients } from "@/data/content";
import * as LucideIcons from "lucide-react";
import { useLang } from "@/lib/i18n";
import { asset } from "@/lib/utils";

function SectionDivider() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center py-2">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="mx-4 w-1.5 h-1.5 rounded-full bg-cyan/40" />
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
    </div>
  );
}


export default function ProjectDetailClient({ id }: { id: string }) {
  const { lang } = useLang();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy mb-4">
            {lang === "es" ? "Proyecto no encontrado" : "Project not found"}
          </h1>
          <Link
            href="/proyectos"
            className="text-cyan hover:underline inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === "es" ? "Volver a proyectos" : "Back to projects"}
          </Link>
        </div>
      </div>
    );
  }

  const yearDisplay = project.yearEnd
    ? `${project.year}–${project.yearEnd}`
    : String(project.year);

  const statusLabel =
    project.status === "in_progress"
      ? lang === "es"
        ? "En desarrollo"
        : "In progress"
      : lang === "es"
        ? "Completado"
        : "Completed";

  const statusColor =
    project.status === "in_progress"
      ? "bg-amber-400/20 text-amber-100 border-amber-400/30"
      : "bg-emerald-400/20 text-emerald-100 border-emerald-400/30";

  const typeLabels: Record<string, Record<string, string>> = {
    research: { es: "Investigación", en: "Research" },
    assessment: { es: "Evaluación", en: "Assessment" },
    policy: { es: "Políticas Públicas", en: "Public Policy" },
    consulting: { es: "Consultoría", en: "Consulting" },
  };

  // Find client logo
  const clientLogo = clients.find((c) => c.name === project.client)?.logo;

  // Related projects: same parentProject, or same client/type
  const relatedProjects = projects
    .filter(
      (p) =>
        p.id !== project.id &&
        (
          (project.parentProject && p.id === project.parentProject) ||
          (project.parentProject && p.parentProject === project.parentProject) ||
          (!project.parentProject && p.parentProject === project.id) ||
          p.client === project.client ||
          p.type === project.type
        )
    )
    .slice(0, 3);

  // Child projects (projects that reference this one as parentProject)
  const childProjects = projects
    .filter((p) => p.parentProject === project.id)
    .sort((a, b) => {
      if (a.status === "in_progress" && b.status !== "in_progress") return -1;
      if (a.status !== "in_progress" && b.status === "in_progress") return 1;
      return b.year - a.year;
    });

  // Rich content
  const { executiveSummary, downloadUrl, downloadUrlEn, externalUrl } = project;
  const keyStats = project.keyStats ?? [];
  const pillars = project.pillars ?? [];
  const images = project.images ?? [];
  const hasKeyStats = keyStats.length > 0;
  const hasChildProjects = childProjects.length > 0;
  const hasSectors = !!project.sectors?.length || !!project.sectorsRangeData?.length;
  const hasPillars = pillars.length > 0;
  const hasImages = images.length > 0;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-brand" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === "es" ? "Todos los proyectos" : "All projects"}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
          >
            {/* Title & Description */}
            <div className="lg:col-span-2">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium">
                  {project.client}
                </span>
                <span className="inline-block px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-sm">
                  {typeLabels[project.type]?.[lang] || project.type}
                </span>
                <span
                  className={`inline-block px-3 py-1.5 rounded-full text-sm font-medium border ${statusColor}`}
                >
                  {statusLabel}
                </span>
                {project.parentProject && (
                  <Link
                    href={`/proyectos/${project.parentProject}`}
                    className="inline-block px-3 py-1.5 rounded-full bg-cyan/20 text-cyan-100 text-sm hover:bg-cyan/30 transition-colors"
                  >
                    {projects.find((p) => p.id === project.parentProject)?.title[lang] || project.parentProject}
                  </Link>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {project.title[lang]}
              </h1>

              {project.subtitle ? (
                <p className="text-xl text-white/80 leading-relaxed">
                  {project.subtitle[lang]}
                </p>
              ) : (
                <p className="text-xl text-white/80 leading-relaxed">
                  {project.description[lang]}
                </p>
              )}
            </div>

            {/* Sidebar Info Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-5">
              {clientLogo && (
                <div className="flex justify-center pb-5 border-b border-white/20">
                  <div className="bg-white rounded-xl p-3">
                    <Image
                      src={asset(clientLogo)}
                      alt={project.client}
                      width={120}
                      height={48}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                </div>
              )}

              {project.featuredStat && (
                <div className="text-center pb-5 border-b border-white/20">
                  <div className="text-5xl font-bold text-white mb-1">
                    {project.featuredStat.value}
                  </div>
                  <div className="text-white/70 text-sm">
                    {project.featuredStat.label[lang]}
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3 text-white/80">
                <Building2 className="w-5 h-5 text-cyan shrink-0" />
                <div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">
                    {lang === "es" ? "Cliente" : "Client"}
                  </div>
                  <div className="text-white font-medium">
                    {project.client}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-white/80">
                <Calendar className="w-5 h-5 text-cyan shrink-0" />
                <div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">
                    {lang === "es" ? "Periodo" : "Period"}
                  </div>
                  <div className="text-white font-medium">{yearDisplay}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="w-5 h-5 text-cyan shrink-0" />
                <div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">
                    {lang === "es" ? "Región" : "Region"}
                  </div>
                  <div className="text-white font-medium">
                    <span className="mr-1.5"><RegionFlag region={project.region} /></span>
                    {project.region}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Executive Summary */}
      {executiveSummary && (
        <section className="section-padding">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-navy mb-6">
                {lang === "es" ? "Resumen Ejecutivo" : "Executive Summary"}
              </h2>
              {project.summaryHighlight && (
                <div className="bg-cyan/5 border-l-4 border-cyan rounded-r-xl p-6 mb-8">
                  <p className="text-xl font-semibold text-navy">
                    {project.summaryHighlight[lang]}
                  </p>
                </div>
              )}
              <p className="text-lg text-slate-600 leading-relaxed">
                {executiveSummary[lang]}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Key Stats */}
      {hasKeyStats && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title={lang === "es" ? "Cifras Clave" : "Key Figures"}
            />
            <div className={`grid grid-cols-2 ${keyStats.length <= 3 ? "md:grid-cols-3" : "md:grid-cols-4"} gap-6`}>
              {keyStats.map((stat, index) => (
                <StatCard
                  key={stat.label[lang]}
                  value={stat.value}
                  label={stat.label[lang]}
                  variant="large"
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Divider */}
      {hasKeyStats && hasSectors && <SectionDivider />}

      {/* Sector Breakdown */}
      {hasSectors && (
        <section className="section-padding">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title={
                project.sectorsTitle?.[lang] ??
                (lang === "es" ? "Impacto por Sector" : "Impact by Sector")
              }
              subtitle={
                project.sectorsSubtitle?.[lang] ??
                (lang === "es"
                  ? "Distribución del potencial de impacto de IA por sector económico"
                  : "Distribution of AI impact potential by economic sector")
              }
            />
            {project.sectorsRangeData?.length ? (
              <RangeBarChart
                data={project.sectorsRangeData.map((s) => ({
                  name: s.name[lang],
                  low: s.low,
                  high: s.high,
                }))}
                suffix="%"
                lowLabel={lang === "es" ? "Escenario bajo" : "Low scenario"}
                highLabel={lang === "es" ? "Escenario alto" : "High scenario"}
              />
            ) : project.sectors ? (
              <BarChart
                data={project.sectors.map((s) => ({
                  name: s.name[lang],
                  percentage: s.percentage,
                }))}
                suffix={project.sectorsSuffix}
                valuePrefix={project.sectorsValuePrefix}
              />
            ) : null}
          </div>
        </section>
      )}

      {/* Pillars */}
      {hasPillars && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title={
                project.pillarsTitle?.[lang] ??
                (lang === "es" ? "Pilares Estratégicos" : "Strategic Pillars")
              }
              subtitle={
                project.pillarsSubtitle?.[lang] ??
                (lang === "es"
                  ? "Áreas de acción clave para maximizar el impacto de la IA"
                  : "Key action areas to maximize AI impact")
              }
            />
            <div className="space-y-4">
              {pillars.map((pillar, index) => (
                <PillarCard
                  key={pillar.title[lang]}
                  title={pillar.title[lang]}
                  content={pillar.content[lang]}
                  icon={pillar.icon as keyof typeof LucideIcons}
                  delay={index * 0.1}
                  defaultOpen={index === 0}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Divider */}
      {hasImages && <SectionDivider />}

      {/* Project Gallery */}
      {hasImages && (
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title={lang === "es" ? "Galería del Proyecto" : "Project Gallery"}
            />
            {images.length === 3 ? (
              <>
                <div className="grid grid-cols-2 gap-4">
                  {images.slice(0, 2).map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                        <Image
                          src={asset(img.src)}
                          alt={img.caption?.[lang] || `${project.title[lang]} - ${index + 1}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      {img.caption && (
                        <p className="mt-2 text-sm text-slate-500 text-center">
                          {img.caption[lang]}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-4 group"
                >
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                    <Image
                      src={asset(images[2].src)}
                      alt={images[2].caption?.[lang] || `${project.title[lang]} - 3`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {images[2].caption && (
                    <p className="mt-2 text-sm text-slate-500 text-center">
                      {images[2].caption[lang]}
                    </p>
                  )}
                </motion.div>
              </>
            ) : (
              <div className={`grid gap-4 ${images.length === 1 ? "grid-cols-1 max-w-2xl mx-auto" : "grid-cols-1 md:grid-cols-2"}`}>
                {images.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                      <Image
                        src={asset(img.src)}
                        alt={img.caption?.[lang] || `${project.title[lang]} - ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {img.caption && (
                      <p className="mt-2 text-sm text-slate-500 text-center">
                        {img.caption[lang]}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Resources: External URL and/or Download */}
      {(externalUrl || downloadUrl) && (
        <section className={`py-16 ${hasPillars ? "" : "bg-slate-50"}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {downloadUrl ? (
                <div className="bg-navy rounded-2xl p-8 md:p-12 text-center">
                  <FileText className="w-16 h-16 text-cyan mx-auto mb-6" />
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {lang === "es"
                      ? "Descarga el reporte completo"
                      : "Download the full report"}
                  </h3>
                  <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                    {lang === "es"
                      ? "Accede a todos los datos, metodología y recomendaciones detalladas"
                      : "Access all data, methodology and detailed recommendations"}
                  </p>
                  {downloadUrlEn ? (
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <GradientButton href={downloadUrl}>
                        <Download className="w-5 h-5 mr-2" />
                        {lang === "es" ? "Descargar en español" : "Download in Spanish"}
                      </GradientButton>
                      <GradientButton href={downloadUrlEn}>
                        <Download className="w-5 h-5 mr-2" />
                        {lang === "es" ? "Descargar en inglés" : "Download in English"}
                      </GradientButton>
                    </div>
                  ) : (
                    <GradientButton href={downloadUrl}>
                      <Download className="w-5 h-5 mr-2" />
                      {lang === "es" ? "Descargar el reporte completo" : "Download the full report"}
                    </GradientButton>
                  )}
                  {externalUrl && (
                    <a
                      href={externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-6 text-slate-300 hover:text-cyan transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {lang === "es"
                        ? "Conoce más sobre la iniciativa AI Sprinters de Google"
                        : "Learn more about Google's AI Sprinters initiative"}
                    </a>
                  )}
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-navy mb-6">
                    {lang === "es"
                      ? "Recursos y documentos"
                      : "Resources & Documents"}
                  </h2>
                  <div className="space-y-4">
                    <a
                      href={externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-5 bg-white rounded-xl border border-slate-200 hover:border-cyan hover:shadow-lg transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center">
                          <ExternalLink className="w-6 h-6 text-cyan" />
                        </div>
                        <div>
                          <div className="font-semibold text-navy group-hover:text-cyan transition-colors">
                            {lang === "es"
                              ? "Recurso externo"
                              : "External resource"}
                          </div>
                          <div className="text-sm text-slate-500 truncate max-w-md">
                            {externalUrl?.replace(/^https?:\/\//, "")}
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-cyan transition-colors" />
                    </a>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* Child Projects (e.g., individual country reports) */}
      {hasChildProjects && (
        <section className="section-padding">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title={
                project.childProjectsTitle?.[lang] ??
                (lang === "es" ? "Países Evaluados" : "Countries Assessed")
              }
              subtitle={
                project.childProjectsSubtitle?.[lang] ??
                (lang === "es"
                  ? "Implementaciones por país en orden cronológico"
                  : "Country implementations in chronological order")
              }
            />
            <div className="space-y-4">
              {childProjects.map((cp, index) => {
                const cpYear = cp.yearEnd ? `${cp.year}–${cp.yearEnd}` : String(cp.year);
                const isCompleted = cp.status === "completed";
                const hasReport = !!cp.downloadUrl || !!cp.externalUrl;
                return (
                  <motion.div
                    key={cp.id}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Link
                      href={`/proyectos/${cp.id}`}
                      className="group flex items-center gap-4 p-5 bg-white rounded-xl border border-slate-200 hover:border-cyan hover:shadow-lg transition-all"
                    >
                      <div className="shrink-0">
                        <RegionFlag region={cp.region} size={36} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-navy group-hover:text-cyan transition-colors truncate">
                          {cp.title[lang]}
                        </h4>
                        <p className="text-sm text-slate-500 line-clamp-1">
                          {cp.subtitle?.[lang] || cp.description[lang]}
                        </p>
                      </div>
                      <div className="shrink-0 flex items-center gap-3">
                        <span className="text-sm text-slate-400 hidden sm:inline">{cpYear}</span>
                        {isCompleted ? (
                          hasReport ? (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-medium">
                              <FileText className="w-3.5 h-3.5" />
                              {lang === "es" ? "Ver reporte" : "View report"}
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-medium">
                              {lang === "es" ? "Completado" : "Completed"}
                            </span>
                          )
                        ) : (
                          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-xs font-medium">
                            {lang === "es" ? "En desarrollo" : "In progress"}
                          </span>
                        )}
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan group-hover:translate-x-1 transition-all" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-navy mb-8">
                {lang === "es"
                  ? "Proyectos relacionados"
                  : "Related Projects"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProjects.map((rp) => (
                  <Link
                    key={rp.id}
                    href={`/proyectos/${rp.id}`}
                    className="group bg-white rounded-xl p-5 border border-slate-200 hover:border-cyan hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-cyan bg-cyan/10 px-2.5 py-1 rounded-full">
                        {rp.client}
                      </span>
                      <span className="text-xs text-slate-400">
                        {rp.yearEnd
                          ? `${rp.year}–${rp.yearEnd}`
                          : String(rp.year)}
                      </span>
                    </div>
                    <h3 className="font-semibold text-navy group-hover:text-cyan transition-colors line-clamp-2">
                      {rp.title[lang]}
                    </h3>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Back to Projects CTA */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GradientButton href="/proyectos" variant="secondary">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {lang === "es"
              ? "Ver todos los proyectos"
              : "View all projects"}
          </GradientButton>
        </div>
      </section>
    </div>
  );
}
