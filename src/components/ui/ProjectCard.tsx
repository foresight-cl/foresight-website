"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn, asset } from "@/lib/utils";
import { useLang, useLocalizedHref } from "@/lib/i18n";
import { RegionFlag } from "./RegionFlag";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  client: string;
  year: number;
  yearEnd?: number;
  status?: "completed" | "in_progress";
  featuredStat?: {
    value: string;
    label: string;
  };
  region?: string;
  clientLogo?: string;
  className?: string;
  delay?: number;
}

export function ProjectCard({
  id,
  title,
  description,
  client,
  year,
  yearEnd,
  status,
  featuredStat,
  region,
  clientLogo,
  className,
  delay = 0,
}: ProjectCardProps) {
  const { lang } = useLang();
  const localized = useLocalizedHref();
  const yearDisplay = yearEnd ? `${year}–${yearEnd}` : String(year);
  const href = localized(`/proyectos/${id}`);

  const statusLabel =
    status === "in_progress"
      ? lang === "es"
        ? "En desarrollo"
        : "In progress"
      : lang === "es"
        ? "Completado"
        : "Completed";

  const statusColor =
    status === "in_progress"
      ? "bg-amber-50 text-amber-700 border-amber-200"
      : "bg-emerald-50 text-emerald-700 border-emerald-200";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Link
        href={href}
        className={cn(
          "group block bg-white rounded-2xl p-6 border border-slate-200 card-hover h-full",
          className
        )}
      >
        <div className="flex items-center justify-between mb-4">
          {clientLogo ? (
            <Image
              src={asset(clientLogo)}
              alt={client}
              width={80}
              height={28}
              className="h-7 w-auto object-contain"
            />
          ) : (
            <span className="text-sm font-medium text-cyan bg-cyan/10 px-3 py-1 rounded-full">
              {client}
            </span>
          )}
          <span className="text-sm text-slate-400 flex items-center gap-2">
            {region && <RegionFlag region={region} size={20} />}
            {yearDisplay}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-cyan transition-colors">
          {title}
        </h3>

        <p className="text-slate-500 mb-4 line-clamp-3">{description}</p>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
          {featuredStat ? (
            <div>
              <div className="text-2xl font-bold text-navy">
                {featuredStat.value}
              </div>
              <div className="text-sm text-slate-400">
                {featuredStat.label}
              </div>
            </div>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-3">
            {status && (
              <span
                className={cn(
                  "text-xs font-medium px-2.5 py-1 rounded-full border",
                  statusColor
                )}
              >
                {statusLabel}
              </span>
            )}
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
