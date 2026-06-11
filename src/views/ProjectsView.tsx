"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui";
import { projects, clientLogos } from "@/data/content";
import { useLang } from "@/lib/i18n";

export default function ProjectsView() {
  const { lang } = useLang();
  const [filters, setFilters] = useState({
    type: "all",
    client: "all",
    region: "all",
    year: "all",
    status: "all",
  });

  const projectTypes = ["all", ...new Set(projects.map((p) => p.type))];
  const clientNames = ["all", ...new Set(projects.map((p) => p.client))];
  const regions = ["all", ...new Set(projects.map((p) => p.region))];
  const years = [
    "all",
    ...new Set(projects.map((p) => String(p.year))),
  ].sort((a, b) => {
    if (a === "all") return -1;
    if (b === "all") return 1;
    return Number(b) - Number(a);
  });
  const statuses = ["all", "in_progress", "completed"];

  const filteredProjects = projects
    .filter((project) => {
      if (filters.type !== "all" && project.type !== filters.type) return false;
      if (filters.client !== "all" && project.client !== filters.client) return false;
      if (filters.region !== "all" && project.region !== filters.region)
        return false;
      if (filters.year !== "all" && String(project.year) !== filters.year)
        return false;
      if (
        filters.status !== "all" &&
        project.status !== filters.status
      )
        return false;
      return true;
    })
    .sort((a, b) => {
      if (a.status === "in_progress" && b.status !== "in_progress") return -1;
      if (a.status !== "in_progress" && b.status === "in_progress") return 1;
      return b.year - a.year;
    });

  const typeLabels: Record<string, Record<string, string>> = {
    all: { es: "Todos", en: "All" },
    research: { es: "Investigación", en: "Research" },
    assessment: { es: "Evaluación", en: "Assessment" },
    policy: { es: "Políticas", en: "Policy" },
    consulting: { es: "Consultoría", en: "Consulting" },
  };

  const statusLabels: Record<string, Record<string, string>> = {
    all: { es: "Todos", en: "All" },
    in_progress: { es: "En desarrollo", en: "In progress" },
    completed: { es: "Completados", en: "Completed" },
  };

  const totalProjects = projects.length;
  const activeProjects = projects.filter((p) => p.status === "in_progress").length;
  const uniqueCountries = new Set(projects.map((p) => p.region)).size;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-subtle hero-pattern py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
              {lang === "es" ? "Nuestros Proyectos" : "Our Projects"}
            </h1>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto mb-8">
              {lang === "es"
                ? "Más de 20 proyectos ejecutados en múltiples países de América Latina, el Caribe y Asia-Pacífico"
                : "Over 20 projects executed across Latin America, the Caribbean and Asia-Pacific"}
            </p>
            <div className="flex justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-navy">{totalProjects}</div>
                <div className="text-sm text-slate-500">
                  {lang === "es" ? "Proyectos" : "Projects"}
                </div>
              </div>
              <div className="w-px bg-slate-200" />
              <div>
                <div className="text-3xl font-bold text-cyan">{activeProjects}</div>
                <div className="text-sm text-slate-500">
                  {lang === "es" ? "En desarrollo" : "In progress"}
                </div>
              </div>
              <div className="w-px bg-slate-200" />
              <div>
                <div className="text-3xl font-bold text-navy">{uniqueCountries}</div>
                <div className="text-sm text-slate-500">
                  {lang === "es" ? "Países" : "Countries"}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b border-slate-200 sticky top-20 bg-white/95 backdrop-blur-sm z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {/* Type Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-500 font-medium">
                {lang === "es" ? "Tipo:" : "Type:"}
              </span>
              <select
                value={filters.type}
                onChange={(e) =>
                  setFilters({ ...filters, type: e.target.value })
                }
                className="px-4 py-2 rounded-full border border-slate-200 text-sm focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none"
              >
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {typeLabels[type]?.[lang] || type}
                  </option>
                ))}
              </select>
            </div>

            {/* Client Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-500 font-medium">
                {lang === "es" ? "Cliente:" : "Client:"}
              </span>
              <select
                value={filters.client}
                onChange={(e) =>
                  setFilters({ ...filters, client: e.target.value })
                }
                className="px-4 py-2 rounded-full border border-slate-200 text-sm focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none"
              >
                {clientNames.map((c) => (
                  <option key={c} value={c}>
                    {c === "all"
                      ? lang === "es"
                        ? "Todos"
                        : "All"
                      : c}
                  </option>
                ))}
              </select>
            </div>

            {/* Region Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-500 font-medium">
                {lang === "es" ? "País:" : "Country:"}
              </span>
              <select
                value={filters.region}
                onChange={(e) =>
                  setFilters({ ...filters, region: e.target.value })
                }
                className="px-4 py-2 rounded-full border border-slate-200 text-sm focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none"
              >
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region === "all"
                      ? lang === "es"
                        ? "Todos"
                        : "All"
                      : region}
                  </option>
                ))}
              </select>
            </div>

            {/* Year Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-500 font-medium">
                {lang === "es" ? "Año:" : "Year:"}
              </span>
              <select
                value={filters.year}
                onChange={(e) =>
                  setFilters({ ...filters, year: e.target.value })
                }
                className="px-4 py-2 rounded-full border border-slate-200 text-sm focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year === "all"
                      ? lang === "es"
                        ? "Todos"
                        : "All"
                      : year}
                  </option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-500 font-medium">
                {lang === "es" ? "Estado:" : "Status:"}
              </span>
              <select
                value={filters.status}
                onChange={(e) =>
                  setFilters({ ...filters, status: e.target.value })
                }
                className="px-4 py-2 rounded-full border border-slate-200 text-sm focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none"
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {statusLabels[status]?.[lang] || status}
                  </option>
                ))}
              </select>
            </div>

            {/* Clear filters */}
            {(filters.type !== "all" ||
              filters.client !== "all" ||
              filters.region !== "all" ||
              filters.year !== "all" ||
              filters.status !== "all") && (
              <button
                onClick={() =>
                  setFilters({
                    type: "all",
                    client: "all",
                    region: "all",
                    year: "all",
                    status: "all",
                  })
                }
                className="px-4 py-2 rounded-full text-sm text-slate-500 hover:text-navy hover:bg-slate-100 transition-colors"
              >
                {lang === "es" ? "Limpiar filtros" : "Clear filters"}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Results count */}
      <section className="pt-8 pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-400">
            {lang === "es"
              ? `Mostrando ${filteredProjects.length} de ${totalProjects} proyectos`
              : `Showing ${filteredProjects.length} of ${totalProjects} projects`}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
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
                  delay={index * 0.05}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-slate-500 mb-4">
                {lang === "es"
                  ? "No se encontraron proyectos con los filtros seleccionados"
                  : "No projects found with selected filters"}
              </p>
              <button
                onClick={() =>
                  setFilters({
                    type: "all",
                    client: "all",
                    region: "all",
                    year: "all",
                    status: "all",
                  })
                }
                className="text-cyan hover:underline"
              >
                {lang === "es" ? "Ver todos los proyectos" : "View all projects"}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
