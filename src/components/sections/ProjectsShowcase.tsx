"use client";

import { SectionHeading, ProjectCard, GradientButton } from "@/components/ui";
import { projects, clientLogos } from "@/data/content";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { asset } from "@/lib/utils";
import { RegionFlag } from "@/components/ui/RegionFlag";

function FeaturedProjectCard({
  id,
  title,
  subtitle,
  client,
  clientLogo,
  region,
  featuredStat,
  delay = 0,
}: {
  id: string;
  title: string;
  subtitle?: string;
  client: string;
  clientLogo?: string;
  region?: string;
  featuredStat?: { value: string; label: string };
  delay?: number;
}) {
  const { lang } = useLang();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Link
        href={`/proyectos/${id}`}
        className="group block bg-white rounded-2xl overflow-hidden border border-slate-200 card-hover"
      >
        <div className="bg-gradient-brand p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div>
                {clientLogo ? (
                  <div className="bg-white rounded-lg px-3 py-1.5 shadow-sm">
                    <Image
                      src={asset(clientLogo)}
                      alt={client}
                      width={80}
                      height={28}
                      className="h-6 w-auto object-contain"
                    />
                  </div>
                ) : (
                  <span className="text-sm font-medium text-white/90 bg-white/20 rounded-lg px-3 py-1.5">
                    {client}
                  </span>
                )}
              </div>
              {region && <RegionFlag region={region} size={32} />}
            </div>
            {featuredStat && (
              <div>
                <div className="text-4xl font-bold text-white">
                  {featuredStat.value}
                </div>
                <div className="text-white/80 text-sm">{featuredStat.label}</div>
              </div>
            )}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-cyan transition-colors">
            {title}
          </h3>
          {subtitle && (
            <p className="text-slate-500 text-sm mb-4 line-clamp-2">{subtitle}</p>
          )}
          <div className="flex items-center text-cyan font-medium mt-4">
            <span>{lang === "es" ? "Ver proyecto" : "View project"}</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function ProjectsShowcase() {
  const { lang } = useLang();

  const featured = projects
    .filter((p) => p.featured)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));
  const recent = projects
    .filter((p) => !p.featured)
    .sort((a, b) => {
      if (a.status === "in_progress" && b.status !== "in_progress") return -1;
      if (a.status !== "in_progress" && b.status === "in_progress") return 1;
      return b.year - a.year;
    })
    .slice(0, 6);

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={lang === "es" ? "Proyectos Destacados" : "Featured Projects"}
          subtitle={
            lang === "es"
              ? "Investigaciones y análisis sobre el impacto de la IA en la región"
              : "Research and analysis on AI impact in the region"
          }
        />

        {/* Featured projects - report-card style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project, index) => (
            <FeaturedProjectCard
              key={project.id}
              id={project.id}
              title={project.title[lang]}
              subtitle={project.subtitle?.[lang]}
              client={project.client}
              clientLogo={clientLogos[project.client]}
              region={project.region}
              featuredStat={
                project.featuredStat
                  ? {
                      value: project.featuredStat.value,
                      label: project.featuredStat.label[lang],
                    }
                  : undefined
              }
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Recent projects */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-navy mb-8">
            {lang === "es" ? "Más Recientes" : "Most Recent"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recent.map((project, index) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title[lang]}
                description={project.description[lang]}
                client={project.client}
                clientLogo={clientLogos[project.client]}
                region={project.region}
                year={project.year}
                yearEnd={project.yearEnd}
                status={project.status}
                featuredStat={
                  project.featuredStat
                    ? {
                        value: project.featuredStat.value,
                        label: project.featuredStat.label[lang],
                      }
                    : undefined
                }
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <GradientButton href="/proyectos" variant="outline">
            {lang === "es" ? "Ver todos los proyectos" : "View all projects"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </GradientButton>
        </div>
      </div>
    </section>
  );
}
