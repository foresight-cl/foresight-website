"use client";

import { motion } from "framer-motion";
import { SectionHeading, ClientLogo } from "@/components/ui";
import { clients } from "@/data/content";
import { useLang } from "@/lib/i18n";

export function ClientsSection() {
  const { lang } = useLang();
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={lang === "es" ? "Nuestros Clientes" : "Our Clients"}
          subtitle={
            lang === "es"
              ? "Organizaciones líderes que confían en nosotros"
              : "Leading organizations that trust us"
          }
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {/* 2 / 3 / 6 columns; flex-wrap centers an incomplete last row */}
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(16.666%-1.25rem)]"
            >
              <ClientLogo
                name={client.name}
                logo={client.logo}
                url={client.url}
                delay={index * 0.05}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
