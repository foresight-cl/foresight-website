"use client";

import { motion } from "framer-motion";
import { TeamCard } from "@/components/ui";
import { team, aboutContent } from "@/data/content";
import { useLang } from "@/lib/i18n";

export default function TeamView() {
  const { lang } = useLang();
  const about = aboutContent[lang];

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
              {about.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* About Text */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg text-slate-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-navy mb-4">
                {about.mission.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {about.mission.text}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-navy mb-4">
                {about.vision.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {about.vision.text}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-navy text-center mb-12"
          >
            {about.teamTitle}
          </motion.h2>
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

      {/* Join Us CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              {lang === "es"
                ? "¿Quieres ser parte del equipo?"
                : "Want to join the team?"}
            </h2>
            <p className="text-lg text-slate-500 mb-8">
              {lang === "es"
                ? "Siempre estamos buscando talento apasionado por la tecnología y las políticas públicas"
                : "We're always looking for talent passionate about technology and public policy"}
            </p>
            <a
              href="mailto:consultoria@foresight.cl"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-brand text-white font-medium hover:shadow-lg hover:shadow-cyan/25 transition-all"
            >
              {lang === "es" ? "Contáctanos" : "Contact us"}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
