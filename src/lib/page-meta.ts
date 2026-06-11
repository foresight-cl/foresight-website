import type { LocalizedText } from "@/data/types";

/**
 * Single source for static page titles/descriptions in both languages,
 * consumed by the ES and EN route trees.
 */
export const pageMeta: Record<string, { title: LocalizedText; description: LocalizedText }> = {
  "/": {
    title: {
      es: "Foresight | Consultoría en Inteligencia Artificial",
      en: "Foresight | Artificial Intelligence Consulting",
    },
    description: {
      es: "Acompañamos a organizaciones públicas y privadas en su adopción estratégica de inteligencia artificial — desde la estrategia hasta la implementación en América Latina.",
      en: "We guide public and private organizations through strategic AI adoption — from strategy to implementation across Latin America.",
    },
  },
  "/proyectos": {
    title: {
      es: "Proyectos | Foresight",
      en: "Projects | Foresight",
    },
    description: {
      es: "Más de 20 proyectos ejecutados en múltiples países de América Latina, el Caribe y Asia-Pacífico en inteligencia artificial.",
      en: "Over 20 artificial intelligence projects delivered across Latin America, the Caribbean and Asia-Pacific.",
    },
  },
  "/equipo": {
    title: {
      es: "Equipo | Foresight",
      en: "Team | Foresight",
    },
    description: {
      es: "Expertos en políticas públicas, tecnología y gobernanza de inteligencia artificial en América Latina.",
      en: "Experts in public policy, technology and artificial intelligence governance in Latin America.",
    },
  },
  "/noticias": {
    title: {
      es: "Noticias y Logros | Foresight",
      en: "News & Milestones | Foresight",
    },
    description: {
      es: "Últimas noticias, logros y novedades sobre el trabajo de Foresight en inteligencia artificial en América Latina.",
      en: "Latest news, milestones and updates on Foresight's artificial intelligence work in Latin America.",
    },
  },
  "/contacto": {
    title: {
      es: "Contacto | Foresight",
      en: "Contact | Foresight",
    },
    description: {
      es: "Contáctanos para integrar inteligencia artificial en tu organización. Consultoría estratégica en IA para América Latina.",
      en: "Get in touch to integrate artificial intelligence into your organization. Strategic AI consulting for Latin America.",
    },
  },
  "/reportes": {
    title: {
      es: "Reportes e Investigación | Foresight",
      en: "Reports & Research | Foresight",
    },
    description: {
      es: "Análisis y estudios sobre el impacto de la inteligencia artificial en América Latina.",
      en: "Analysis and studies on the impact of artificial intelligence in Latin America.",
    },
  },
};
