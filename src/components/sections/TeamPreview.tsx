"use client";

import { SectionHeading, TeamCard } from "@/components/ui";
import { team } from "@/data/content";
import { useLang } from "@/lib/i18n";

export function TeamPreview() {
  const { lang } = useLang();
  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={lang === "es" ? "Nuestro Equipo" : "Our Team"}
          subtitle={
            lang === "es"
              ? "Expertos en políticas públicas, tecnología y gobernanza"
              : "Experts in public policy, technology and governance"
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamCard
              key={member.id}
              name={member.name}
              role={member.role[lang]}
              bio={member.bio[lang]}
              image={member.image}
              linkedin={member.linkedin}
              googleScholar={member.googleScholar}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
