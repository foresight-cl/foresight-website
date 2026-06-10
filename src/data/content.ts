import type { NewsItem, Project, Report, TeamMember } from "./types";

export const siteConfig = {
  name: "Foresight",
  url: "https://foresight.cl",
  email: "consultoria@foresight.cl",
  description: "Consultoría estratégica en inteligencia artificial para organizaciones públicas y privadas en América Latina",
  linkedIn: "https://www.linkedin.com/company/foresight-cl",
  // Formspree form ID for contact form - create at https://formspree.io and replace
  formspreeId: "xvzvwzen",
};

export const navigation = {
  es: [
    { name: "Inicio", href: "/" },
    { name: "Proyectos", href: "/proyectos" },
    { name: "Quiénes somos", href: "/equipo" },
    { name: "Contacto", href: "/contacto" },
  ],
  en: [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/proyectos" },
    { name: "About us", href: "/equipo" },
    { name: "Contact", href: "/contacto" },
  ],
};

export const heroContent = {
  es: {
    headline: "Acompañamos la adopción y gobernanza de la IA",
    subtext:
      "Evaluaciones, estrategias, políticas públicas e implementación de inteligencia artificial para gobiernos y empresas",
    cta: "Conoce nuestros proyectos",
  },
  en: {
    headline: "We Guide AI Adoption and Governance",
    subtext:
      "Assessments, strategies, public policy, and AI implementation for governments and enterprises",
    cta: "Explore our projects",
  },
};

export const heroStats = [
  { value: "10+", label: { es: "Países asesorados", en: "Countries advised" } },
  { value: "20+", label: { es: "Proyectos entregados", en: "Projects delivered" } },
  { value: "5+", label: { es: "Años de experiencia", en: "Years of experience" } },
];

export const stats = [
  { value: "7+", label: { es: "Países", en: "Countries" } },
  { value: "20+", label: { es: "Proyectos", en: "Projects" } },
];

export const services = {
  es: [
    {
      title: "Estrategia e Implementación de IA",
      description:
        "Diseñamos hojas de ruta con casos de uso concretos, plazos y responsables. No entregamos documentos genéricos: trabajamos hasta que el plan se ejecute.",
      icon: "Rocket",
    },
    {
      title: "Evaluaciones y Diagnósticos",
      description:
        "Medimos dónde está tu país u organización en su preparación para la IA. Usamos la metodología RAM de UNESCO y el ILIA para identificar brechas y prioridades reales.",
      icon: "BarChart3",
    },
    {
      title: "Transformación Organizacional",
      description:
        "Capacitamos equipos y diseñamos gobernanza interna para que la adopción de IA sea sostenible, no solo un piloto que queda en el aire.",
      icon: "Building2",
    },
    {
      title: "Investigación y Reportes",
      description:
        "Producimos estudios de impacto económico, análisis sectoriales y reportes que sirven como base para tomar decisiones de política pública y estrategia empresarial.",
      icon: "FileSearch",
    },
  ],
  en: [
    {
      title: "AI Strategy & Implementation",
      description:
        "We design roadmaps with concrete use cases, timelines, and owners. We don't deliver generic documents: we work until the plan gets executed.",
      icon: "Rocket",
    },
    {
      title: "Assessments & Diagnostics",
      description:
        "We measure where your country or organization stands in AI readiness. We use UNESCO's RAM methodology and ILIA to identify real gaps and priorities.",
      icon: "BarChart3",
    },
    {
      title: "Organizational Transformation",
      description:
        "We train teams and design internal governance so AI adoption sticks — not just a pilot that goes nowhere.",
      icon: "Building2",
    },
    {
      title: "Research & Reports",
      description:
        "We produce economic impact studies, sector analyses, and reports that serve as the basis for public policy decisions and business strategy.",
      icon: "FileSearch",
    },
  ],
};

export const clients = [
  { name: "UNESCO", logo: "/images/clients/unesco.svg", url: "https://www.unesco.org/en" },
  { name: "Google", logo: "/images/clients/Google_2015_logo.svg.png", url: "https://about.google/company-info/" },
  { name: "BID", logo: "/images/clients/960px-Logo_BID_Español.png", url: "https://www.iadb.org/" },
  { name: "CENIA", logo: "/images/clients/CENIA.png", url: "https://cenia.cl/" },
  { name: "Ministerio de Ciencia", logo: "/images/clients/Logo_del_Ministerio_de_Ciencia,_Tecnología,_Conocimiento_y_Innovación_de_Chile.png", url: "https://www.minciencia.gob.cl/" },
  { name: "CAF", logo: "/images/clients/Logotipo_CAF_-_Banco_de_Desarrollo_de_América_Latina_y_el_Caribe.png", url: "https://www.caf.com/" },
  { name: "Ministerio de Economía", logo: "/images/clients/Ministerioeconomia.png", url: "https://www.economia.gob.cl/" },
  { name: "CChC", logo: "/images/clients/ccchc.png", url: "https://www.cchc.cl/" },
  { name: "UNAB", logo: "/images/clients/Logo-unab.svg.png", url: "https://www.unab.cl/" },
  { name: "Municipalidad de Las Condes", logo: "/images/clients/las-condes.jpg", url: "https://www.lascondes.cl/" },
  { name: "Conecta Logística", logo: "/images/clients/conecta.webp", url: "https://www.conectalogistica.cl/" },
  { name: "Centro de Innovación UC", logo: "/images/clients/centroinnovacion.png", url: "https://centrodeinnovacion.uc.cl/" },
];

export const clientLogos: Record<string, string> = Object.fromEntries(
  clients.map((c) => [c.name, c.logo])
);

export const projects: Project[] = [
  // ── 2025–2026 | En desarrollo ──────────────────────────────────
  // hidden until client authorization
  // {
  //   id: "ballerina-ia-generativa",
  //   title: {
  //     es: "Adopción de IA Generativa en Ballerina",
  //     en: "Generative AI Adoption at Ballerina",
  //   },
  //   subtitle: {
  //     es: "Estrategia e implementación de IA generativa para transformar procesos internos",
  //     en: "Generative AI strategy and implementation to transform internal processes",
  //   },
  //   description: {
  //     es: "Acompañamiento a Ballerina en la adopción de IA generativa para mejorar sus procesos internos. Diseñamos la estrategia, identificamos casos de uso y apoyamos la implementación.",
  //     en: "Supporting Ballerina in adopting generative AI to improve their internal processes. We design the strategy, identify use cases, and support implementation.",
  //   },
  //   client: "Ballerina",
  //   year: 2025,
  //   region: "Chile",
  //   type: "consulting",
  //   status: "in_progress",
  // },
  {
    id: "revision-legislativa-jamaica",
    title: {
      es: "Revisión Legislativa sobre Inteligencia Artificial en Jamaica",
      en: "Legislative Review on Artificial Intelligence in Jamaica",
    },
    subtitle: {
      es: "Análisis del marco legal jamaicano y recomendaciones para una gobernanza responsable de la IA",
      en: "Analysis of Jamaica's legal framework and recommendations for responsible AI governance",
    },
    description: {
      es: "Revisión integral del marco legal y regulatorio de Jamaica para evaluar su adecuación al desarrollo, despliegue y uso de la IA. El proyecto identifica brechas normativas y entrega recomendaciones específicas para nueva legislación o reformas, alineadas con la Recomendación de UNESCO sobre Ética de la IA, los Principios de la OCDE, la Ley de IA de la UE y la Convención Marco del Consejo de Europa. Incluye sesiones de validación con el National AI Task Force y actores del sector público.",
      en: "Comprehensive review of Jamaica's legal and regulatory framework to assess its adequacy for AI development, deployment, and use. The project identifies regulatory gaps and delivers specific recommendations for new legislation or amendments, aligned with UNESCO's Recommendation on the Ethics of AI, OECD AI Principles, the EU AI Act, and the Council of Europe Framework Convention. Includes validation sessions with the National AI Task Force and public sector stakeholders.",
    },
    client: "UNESCO",
    year: 2026,
    region: "Jamaica",
    type: "policy",
    status: "in_progress",
  },
  {
    id: "ilia-2026",
    title: {
      es: "Ampliación y Actualización ILIA 2026",
      en: "ILIA 2026 Expansion and Update",
    },
    subtitle: {
      es: "Ampliación del Índice Latinoamericano de IA con Trinidad y Tobago, cinco países de referencia globales y actualización del subindicador de participación ciudadana",
      en: "Expansion of the Latin American AI Index with Trinidad and Tobago, five global benchmark countries, and update of the citizen participation sub-indicator",
    },
    description: {
      es: "Tercera edición del Índice Latinoamericano de Inteligencia Artificial (ILIA) en la que ampliamos la cobertura del instrumento incorporando a Trinidad y Tobago y a cinco países no latinoamericanos como puntos de referencia internacional. Adicionalmente, actualizamos y refinamos el subindicador de IA para participación ciudadana, profundizando la medición del uso y desarrollo de IA en procesos democráticos en la región.",
      en: "Third edition of the Latin American Artificial Intelligence Index (ILIA), expanding the instrument's coverage by incorporating Trinidad and Tobago and five non-Latin American countries as international benchmarks. Additionally, we update and refine the AI for citizen participation sub-indicator, deepening the measurement of AI use and development in democratic processes across the region.",
    },
    client: "CENIA",
    year: 2026,
    region: "Latinoamérica",
    type: "research",
    status: "in_progress",
    externalUrl: "https://indicelatam.cl/",
  },
  {
    id: "meta-analisis-ram",
    title: {
      es: "Implementación del Meta-Análisis de las RAM",
      en: "RAM Meta-Analysis Implementation",
    },
    subtitle: {
      es: "Análisis comparativo de más de 30 informes RAM para identificar tendencias globales en preparación para la IA",
      en: "Comparative analysis of over 30 RAM reports to identify global trends in AI readiness",
    },
    description: {
      es: "Elaboración de un meta-análisis de los informes RAM sobre la implementación de la Recomendación de la UNESCO en Ética de la Inteligencia Artificial, con el objetivo de producir el primer informe consolidado para la 43ª Conferencia General. Diseño de la metodología de investigación e integración de los hallazgos en el Observatorio Global sobre Ética y Gobernanza de la IA. Además, se contribuyó a mejorar la metodología RAM con entrevistas a actores clave incluyendo expertos de UNESCO AI Experts without Borders y Women for Ethics of AI, buscando sinergias con iniciativas globales en ética y gobernanza de la IA.",
      en: "Development of a meta-analysis of RAM reports on the implementation of UNESCO's Recommendation on the Ethics of Artificial Intelligence, aimed at producing the first consolidated report for the 43rd General Conference. Design of the research methodology and integration of findings into the Global Observatory on Ethics and Governance of AI. Additionally, the project contributed to improving the RAM methodology through interviews with key stakeholders including UNESCO AI Experts without Borders and Women for Ethics of AI experts, seeking synergies with global initiatives on AI ethics and governance.",
    },
    client: "UNESCO",
    year: 2025,
    yearEnd: 2026,
    region: "Global",
    type: "research",
    status: "completed",
  },
  {
    id: "ram-unesco",
    title: {
      es: "Evaluaciones de Preparación en IA (RAM) con UNESCO",
      en: "AI Readiness Assessments (RAM) with UNESCO",
    },
    subtitle: {
      es: "Diagnósticos nacionales de preparación en inteligencia artificial en 8 países de América Latina, el Caribe y Asia-Pacífico",
      en: "National AI readiness assessments across 8 countries in Latin America, the Caribbean and Asia-Pacific",
    },
    description: {
      es: "Foresight ha liderado la implementación de la Metodología de Evaluación de Preparación en IA (RAM) de UNESCO en 8 países: Chile, Camboya, República Dominicana, Cuba, Panamá, El Salvador, Honduras y Guatemala. Este trabajo ha contribuido directamente al diseño de estrategias nacionales de IA en múltiples países.",
      en: "Foresight has led the implementation of UNESCO's AI Readiness Assessment Methodology (RAM) in 8 countries: Chile, Cambodia, Dominican Republic, Cuba, Panama, El Salvador, Honduras and Guatemala. This work has directly contributed to the design of national AI strategies in multiple countries.",
    },
    client: "UNESCO",
    year: 2021,
    yearEnd: 2026,
    region: "Global",
    type: "assessment",
    status: "completed",
    featured: true,
    featuredOrder: 1,
    featuredStat: { value: "8", label: { es: "Países evaluados", en: "Countries assessed" } },
    summaryHighlight: {
      es: "8 países evaluados",
      en: "8 countries assessed",
    },
    executiveSummary: {
      es: "La Metodología de Evaluación de Preparación en IA (RAM) de UNESCO es un marco integral que evalúa las condiciones de un país para adoptar y beneficiarse de la inteligencia artificial. La metodología analiza cinco dimensiones: legal y regulatoria, social y cultural, científica y educativa, económica, y técnica e infraestructura. Foresight ha liderado la implementación de la RAM en 8 países, convirtiéndose en la consultora con más implementaciones a nivel mundial. Nuestros diagnósticos han contribuido directamente al diseño de hojas de ruta nacionales en inteligencia artificial en múltiples países. El proceso incluye investigación documental, consultas con actores clave del ecosistema, mesas redondas multisectoriales y la formulación de recomendaciones accionables de política pública.",
      en: "UNESCO's AI Readiness Assessment Methodology (RAM) is a comprehensive framework that evaluates a country's conditions for adopting and benefiting from artificial intelligence. The methodology analyzes five dimensions: legal and regulatory, social and cultural, scientific and educational, economic, and technical and infrastructure. Foresight has led the implementation of the RAM in 8 countries, becoming the consultancy with the most implementations worldwide. Our assessments have directly contributed to the design of national AI roadmaps in multiple countries. The process includes desk research, consultations with key ecosystem stakeholders, multisectoral roundtables and the formulation of actionable public policy recommendations.",
    },
    pillarsTitle: { es: "Dimensiones de la RAM", en: "RAM Dimensions" },
    pillarsSubtitle: { es: "Las cinco dimensiones que evalúa la Metodología de Evaluación de Preparación en IA de UNESCO", en: "The five dimensions assessed by UNESCO's AI Readiness Assessment Methodology" },
    pillars: [
      {
        title: { es: "Legal y Regulatoria", en: "Legal and Regulatory" },
        icon: "Scale",
        content: {
          es: "Evalúa el marco legal y regulatorio existente en relación con la IA, incluyendo protección de datos, propiedad intelectual, transparencia algorítmica y gobernanza ética. Analiza la existencia de políticas y estrategias nacionales de IA, así como la adhesión a marcos internacionales como la Recomendación de UNESCO sobre Ética de la IA.",
          en: "Evaluates the existing legal and regulatory framework regarding AI, including data protection, intellectual property, algorithmic transparency and ethical governance. Analyzes the existence of national AI policies and strategies, as well as adherence to international frameworks such as UNESCO's Recommendation on the Ethics of AI.",
        },
      },
      {
        title: { es: "Social y Cultural", en: "Social and Cultural" },
        icon: "Users",
        content: {
          es: "Examina la inclusión digital, las brechas de género, la diversidad en STEM, la percepción pública de la IA y el impacto en la preservación del patrimonio cultural. Evalúa la existencia de mecanismos de participación ciudadana en la gobernanza de la IA y la sensibilización de la sociedad sobre sus beneficios y riesgos.",
          en: "Examines digital inclusion, gender gaps, STEM diversity, public perception of AI and impact on cultural heritage preservation. Evaluates the existence of citizen participation mechanisms in AI governance and societal awareness of its benefits and risks.",
        },
      },
      {
        title: { es: "Científica y Educativa", en: "Scientific and Educational" },
        icon: "GraduationCap",
        content: {
          es: "Analiza las capacidades de investigación, la oferta educativa en IA, la formación docente en tecnologías digitales y la inversión en I+D. Evalúa la existencia de centros de investigación, programas de postgrado y la integración de la IA en los currículos educativos en todos los niveles.",
          en: "Analyzes research capabilities, AI educational offerings, teacher training in digital technologies and R&D investment. Evaluates the existence of research centers, graduate programs and the integration of AI into educational curricula at all levels.",
        },
      },
      {
        title: { es: "Económica", en: "Economic" },
        icon: "TrendingUp",
        content: {
          es: "Evalúa el ecosistema de innovación, el mercado laboral de IA, la adopción empresarial de tecnologías avanzadas, la inversión en startups tecnológicas y el potencial de impacto económico de la IA. Analiza la disponibilidad de talento, la concentración de competencias digitales y los programas de reconversión profesional.",
          en: "Evaluates the innovation ecosystem, AI labor market, enterprise adoption of advanced technologies, investment in tech startups and AI's potential economic impact. Analyzes talent availability, digital skills concentration and professional reskilling programs.",
        },
      },
      {
        title: { es: "Técnica e Infraestructura", en: "Technical and Infrastructure" },
        icon: "Server",
        content: {
          es: "Mide la conectividad digital, el acceso a internet, la capacidad de centros de datos, la cobertura de redes móviles y la velocidad de banda ancha. Evalúa la disponibilidad de datos abiertos, la infraestructura de computación en la nube y la participación en organismos internacionales de estandarización.",
          en: "Measures digital connectivity, internet access, data center capacity, mobile network coverage and broadband speed. Evaluates open data availability, cloud computing infrastructure and participation in international standardization bodies.",
        },
      },
    ],
  },
  {
    id: "ram-el-salvador",
    title: {
      es: "Implementación RAM El Salvador",
      en: "RAM Implementation El Salvador",
    },
    subtitle: {
      es: "Evaluación de preparación en IA mediante la metodología RAM de UNESCO",
      en: "AI readiness assessment using UNESCO's RAM methodology",
    },
    description: {
      es: "Diagnóstico integral de las capacidades y desafíos de El Salvador para la adopción de IA, aplicando la metodología RAM de UNESCO. Los resultados orientan el diseño de las primeras políticas nacionales de inteligencia artificial del país.",
      en: "Comprehensive assessment of El Salvador's capabilities and challenges for AI adoption, applying UNESCO's RAM methodology. The results guide the design of the country's first national artificial intelligence policies.",
    },
    client: "UNESCO",
    year: 2025,
    yearEnd: 2026,
    region: "El Salvador",
    type: "assessment",
    status: "completed",
    parentProject: "ram-unesco",
  },
  {
    id: "ram-honduras",
    title: {
      es: "Implementación RAM Honduras",
      en: "RAM Implementation Honduras",
    },
    subtitle: {
      es: "Evaluación de preparación en IA mediante la metodología RAM de UNESCO",
      en: "AI readiness assessment using UNESCO's RAM methodology",
    },
    description: {
      es: "Evaluación del ecosistema de IA en Honduras mediante la metodología RAM de UNESCO, identificando brechas institucionales y oportunidades. Las recomendaciones alimentan el diseño de la hoja de ruta nacional en inteligencia artificial.",
      en: "Assessment of Honduras' AI ecosystem using UNESCO's RAM methodology, identifying institutional gaps and opportunities. The recommendations inform the design of the national artificial intelligence roadmap.",
    },
    client: "UNESCO",
    year: 2025,
    yearEnd: 2026,
    region: "Honduras",
    type: "assessment",
    status: "completed",
    parentProject: "ram-unesco",
  },
  {
    id: "ram-panama",
    title: {
      es: "Implementación RAM Panamá",
      en: "RAM Implementation Panama",
    },
    subtitle: {
      es: "Evaluación de preparación en IA mediante la metodología RAM de UNESCO",
      en: "AI readiness assessment using UNESCO's RAM methodology",
    },
    description: {
      es: "Evaluación de la preparación de Panamá para la adopción de IA mediante la metodología RAM de UNESCO. El diagnóstico identifica brechas y oportunidades para informar el diseño de la Estrategia Nacional de Inteligencia Artificial del país.",
      en: "Assessment of Panama's readiness for AI adoption using UNESCO's RAM methodology. The assessment identifies gaps and opportunities to inform the design of the country's National Artificial Intelligence Strategy.",
    },
    client: "UNESCO",
    year: 2025,
    yearEnd: 2026,
    region: "Panamá",
    type: "assessment",
    status: "completed",
    parentProject: "ram-unesco",
  },
  {
    id: "ram-guatemala",
    title: {
      es: "Implementación RAM Guatemala",
      en: "RAM Implementation Guatemala",
    },
    subtitle: {
      es: "Evaluación de preparación en IA mediante la metodología RAM de UNESCO",
      en: "AI readiness assessment using UNESCO's RAM methodology",
    },
    description: {
      es: "Aplicación de la metodología RAM de UNESCO en Guatemala para mapear capacidades tecnológicas, talento y gobernanza de IA. El diagnóstico sienta las bases para la formulación de políticas públicas de inteligencia artificial en el país.",
      en: "Application of UNESCO's RAM methodology in Guatemala to map technological capabilities, talent, and AI governance. The assessment lays the groundwork for formulating public artificial intelligence policies in the country.",
    },
    client: "UNESCO",
    year: 2025,
    region: "Guatemala",
    type: "assessment",
    status: "completed",
    parentProject: "ram-unesco",
  },
  {
    id: "ilia-participacion-ciudadana",
    title: {
      es: "Subindicador de IA para Participación Ciudadana en el ILIA",
      en: "AI for Citizen Participation Sub-indicator in ILIA",
    },
    subtitle: {
      es: "Desarrollo del primer subindicador que mide el uso y desarrollo de IA en procesos de participación ciudadana para el Índice Latinoamericano de Inteligencia Artificial",
      en: "Development of the first sub-indicator measuring AI use and development in citizen participation processes for the Latin American Artificial Intelligence Index",
    },
    description: {
      es: "Diseño e implementación del subindicador de IA para participación ciudadana, incorporado por primera vez en el ILIA 2025. El indicador mide el uso de IA en iniciativas participativas y la diversidad del ecosistema desarrollador en 19 países de América Latina y el Caribe, identificando 28 casos en 11 países. Colombia lidera con 69 puntos, seguido por México (58), Perú (56), Chile (55) y Brasil (53).",
      en: "Design and implementation of the AI for citizen participation sub-indicator, incorporated for the first time in ILIA 2025. The indicator measures AI use in participatory initiatives and the diversity of the developer ecosystem across 19 Latin American and Caribbean countries, identifying 28 cases in 11 countries. Colombia leads with 69 points, followed by Mexico (58), Peru (56), Chile (55) and Brazil (53).",
    },
    client: "CENIA",
    year: 2025,
    region: "Latinoamérica",
    type: "research",
    status: "completed",
    featured: true,
    featuredOrder: 3,
    featuredStat: { value: "28", label: { es: "Casos de uso de IA en participación ciudadana identificados en 11 países", en: "AI use cases in citizen participation identified across 11 countries" } },
    summaryHighlight: {
      es: "Primer subindicador que mide el uso y desarrollo de inteligencia artificial en procesos de participación ciudadana en América Latina y el Caribe, incorporado al ILIA 2025",
      en: "First sub-indicator measuring the use and development of artificial intelligence in citizen participation processes in Latin America and the Caribbean, incorporated into ILIA 2025",
    },
    executiveSummary: {
      es: "La inteligencia artificial presenta oportunidades significativas para enriquecer la participación ciudadana, facilitando procesos más inclusivos, eficientes y de mayor alcance. Para el ILIA 2025, Foresight desarrolló el primer subindicador que mide tanto el uso como el desarrollo de IA en procesos participativos en 19 países de América Latina y el Caribe. Se identificaron 28 casos en 11 países, revelando un campo aún incipiente pero con experiencias valiosas y diversas. Las aplicaciones se concentran principalmente en las etapas de análisis (55,6%) e implementación (36,1%), con poca presencia en planificación y traducción política. Predomina el procesamiento de lenguaje natural para análisis de tópicos y sentimientos, y recientemente se explora el uso de LLMs. El subindicador evalúa dos componentes: el uso de IA en iniciativas participativas y la robustez del ecosistema desarrollador, proporcionando por primera vez una medición comparable del estado de la IA para la democracia participativa en la región.",
      en: "Artificial intelligence presents significant opportunities to enrich citizen participation, enabling more inclusive, efficient and far-reaching processes. For ILIA 2025, Foresight developed the first sub-indicator measuring both the use and development of AI in participatory processes across 19 Latin American and Caribbean countries. 28 cases were identified in 11 countries, revealing a nascent but valuable and diverse field. Applications concentrate mainly in the analysis (55.6%) and implementation (36.1%) stages, with little presence in planning and political translation. Natural language processing predominates for topic and sentiment analysis, and the use of LLMs is recently being explored. The sub-indicator evaluates two components: AI use in participatory initiatives and the robustness of the developer ecosystem, providing for the first time a comparable measurement of the state of AI for participatory democracy in the region.",
    },
    keyStats: [
      { value: "28", label: { es: "Casos identificados", en: "Cases Identified" } },
      { value: "11", label: { es: "Países con casos activos", en: "Countries with Active Cases" } },
      { value: "19", label: { es: "Países evaluados", en: "Countries Evaluated" } },
      { value: "55,6%", label: { es: "Casos enfocados en análisis de datos", en: "Cases Focused on Data Analysis" } },
    ],
    sectors: [
      { name: { es: "Colombia", en: "Colombia" }, percentage: 69 },
      { name: { es: "México", en: "Mexico" }, percentage: 58 },
      { name: { es: "Perú", en: "Peru" }, percentage: 56 },
      { name: { es: "Chile", en: "Chile" }, percentage: 55 },
      { name: { es: "Brasil", en: "Brazil" }, percentage: 53 },
      { name: { es: "Costa Rica", en: "Costa Rica" }, percentage: 38 },
    ],
    pillarsTitle: { es: "Componentes del Subindicador", en: "Sub-indicator Components" },
    pillarsSubtitle: { es: "Dimensiones que componen la medición de IA para participación ciudadana", en: "Dimensions comprising the measurement of AI for citizen participation" },
    pillars: [
      {
        title: { es: "Uso de IA en Participación Ciudadana", en: "AI Use in Citizen Participation" },
        icon: "Users",
        content: {
          es: "Mide el puntaje asignado por el uso de IA en iniciativas participativas, evaluando los tipos de procesos (mini-públicos, presupuestos participativos, referendos, gobernanza colaborativa, participación digital), las etapas en que se aplica (planificación, implementación, análisis, traducción política), la continuidad y transversalidad del uso de IA en estas iniciativas. Asigna puntaje de acuerdo con la profundidad y diversidad de la aplicación de IA dentro de los procesos de interacción con la ciudadanía.",
          en: "Measures the score assigned for AI use in participatory initiatives, evaluating process types (mini-publics, participatory budgets, referendums, collaborative governance, digital participation), application stages (planning, implementation, analysis, political translation), continuity and cross-cutting nature of AI use. Assigns scores based on the depth and diversity of AI application within citizen interaction processes.",
        },
      },
      {
        title: { es: "Desarrollo de IA para Participación Ciudadana", en: "AI Development for Citizen Participation" },
        icon: "Code",
        content: {
          es: "Evalúa la robustez del ecosistema desarrollador y la variabilidad de los sistemas de IA empleados en procesos de participación ciudadana. Asigna mayor puntaje si existe una mayor diversidad de desarrolladores de estos sistemas (empresa, universidad, gobierno, organismo internacional o sociedad civil) y una mayor diversidad de sistemas aplicados a procesos de participación ciudadana (procesamiento de lenguaje natural, reconocimiento de voz, machine learning, modelos de lenguaje, entre otros).",
          en: "Evaluates the robustness of the developer ecosystem and the variability of AI systems used in citizen participation processes. Assigns higher scores when there is greater diversity of system developers (companies, universities, government, international organizations or civil society) and greater diversity of systems applied to citizen participation (natural language processing, speech recognition, machine learning, language models, among others).",
        },
      },
    ],
  },
  // ── 2024–2025 ──────────────────────────────────────────────────
  {
    id: "ai-sprinters",
    title: {
      es: "IA que funciona para Hispanoamérica",
      en: "AI Works for Spanish Speaking Latam",
    },
    subtitle: {
      es: "Un reporte de AI Sprinters — Estudio regional que cuantifica el impacto potencial de la IA en 10 economías hispanoamericanas",
      en: "An AI Sprinters Report — Regional study quantifying AI's potential impact across 10 Hispanic American economies",
    },
    description: {
      es: "Estudio regional encargado por Google que cuantifica el impacto potencial de la IA en 10 economías hispanoamericanas y entrega recomendaciones de política pública basadas en entrevistas con 55 expertos de la región.",
      en: "Regional study commissioned by Google quantifying AI's potential impact across 10 Hispanic American economies, delivering policy recommendations based on interviews with 55 regional experts.",
    },
    client: "Google",
    year: 2024,
    yearEnd: 2026,
    region: "Latinoamérica",
    type: "research",
    status: "completed",
    featured: true,
    featuredOrder: 2,
    featuredStat: { value: "$130–242B", label: { es: "USD impacto económico anual potencial", en: "USD potential annual economic impact" } },
    childProjectsTitle: {
      es: "Reportes por País",
      en: "Country Reports",
    },
    childProjectsSubtitle: {
      es: "Reportes individuales con análisis extendido por país. Los 10 países están cubiertos en el informe regional consolidado.",
      en: "Individual reports with extended country-level analysis. All 10 countries are covered in the consolidated regional report.",
    },
    summaryHighlight: {
      es: "Con un entorno habilitante adecuado, una adopción a gran escala de la IA podría generar entre USD 130.000 y USD 242.000 millones anuales en impacto económico, equivalente al 3,6%–6,7% del PIB de la región",
      en: "With the right enabling environment, scaled AI adoption could generate USD 130–242 billion in annual economic impact across the countries analyzed, equivalent to 3.6%–6.7% of the region's GDP",
    },
    executiveSummary: {
      es: "Una adopción oportuna de la inteligencia artificial podría representar entre el 3,6% y el 6,7% del PIB de Hispanoamérica, lo que equivale a un impacto económico anual de entre USD 130.000 y USD 242.000 millones en los 10 países analizados — Argentina, Chile, Colombia, Ecuador, El Salvador, México, Panamá, Paraguay, República Dominicana y Uruguay. Y eso ni siquiera incluye las futuras industrias nativas de IA. Para una región donde diversificar la economía e impulsar un crecimiento sostenible siguen siendo desafíos fundamentales, la IA representa una oportunidad transformadora. Este informe cuantifica ese potencial mediante modelos econométricos adaptados con datos macroeconómicos regionales. Basado en entrevistas con 55 expertos de 10 países, complementadas con análisis de datos y estudios de caso regionales, destaca buenas prácticas y propone una hoja de ruta de políticas públicas organizada en cuatro pilares: políticas habilitantes, infraestructura, innovación tecnológica y personas.",
      en: "Timely AI adoption could represent 3.6%–6.7% of Hispanic America's GDP, equivalent to USD 130–242 billion in annual economic impact across the 10 countries analyzed — Argentina, Chile, Colombia, Ecuador, El Salvador, Mexico, Panama, Paraguay, Dominican Republic, and Uruguay. And that doesn't even account for future AI-native industries. For a region where diversifying the economy and driving sustainable growth remain core challenges, AI presents a game-changing opportunity. This report quantifies that potential through econometric models adapted with regional macroeconomic data. Based on interviews with 55 experts across 10 countries, complemented by data analysis and regional case studies, it highlights best practices and sets forward a policy roadmap organized around four pillars: enabling policies, infrastructure, technological innovation, and people.",
    },
    keyStats: [
      { value: "$130–242B", label: { es: "USD impacto económico anual", en: "USD annual economic impact" } },
      { value: "3,6–6,7%", label: { es: "Del PIB regional", en: "Of regional GDP" } },
      { value: "10", label: { es: "Países analizados", en: "Countries analyzed" } },
      { value: "55", label: { es: "Expertos entrevistados", en: "Experts interviewed" } },
    ],
    pillarsTitle: { es: "Pilares Estratégicos", en: "Strategic Pillars" },
    pillarsSubtitle: { es: "Cuatro áreas fundamentales para habilitar un crecimiento digital inclusivo y acelerar una adopción responsable de la IA en Hispanoamérica", en: "Four foundational pillars that enable inclusive digital growth and accelerate responsible AI adoption in Hispanic America" },
    pillars: [
      {
        title: { es: "Políticas Públicas Habilitantes", en: "Enabling Public Policies" },
        icon: "Scale",
        content: {
          es: "Para liberar todo el potencial de la IA en Hispanoamérica, los países necesitan marcos de política pública claros, que conecten una visión de largo plazo con acciones concretas en infraestructura, talento, innovación y regulación. Esto parte por contar con estrategias nacionales de IA sólidas. Un componente clave es la regulación: las leyes bien diseñadas pueden proteger a las personas de riesgos reales asociados a la IA, pero regular sin una base sólida puede generar nuevos problemas. Los países deberían comenzar por revisar sus marcos jurídicos existentes, incorporar estándares internacionales de forma gradual y solo crear nuevas leyes cuando respondan a vacíos normativos claros.",
          en: "To unlock AI's full potential in Hispanic America, countries need a clear policy framework that connects long-term vision with concrete actions across infrastructure, talent, innovation, and regulation. This starts with strong national AI strategies. A key part of this work is regulation: well-designed laws can protect people from real AI-related harms, but regulating without a solid foundation can create new problems. Countries should start by reviewing their existing legal frameworks, incorporating relevant international standards gradually, and introducing new laws only when they clearly address unmet needs.",
        },
      },
      {
        title: { es: "Infraestructura", en: "Infrastructure" },
        icon: "Server",
        content: {
          es: "Contar con una infraestructura digital sólida es fundamental para desarrollar y escalar sistemas de IA. Si bien muchos países de América Latina han avanzado — ampliando el acceso a banda ancha, lanzando pilotos de 5G y atrayendo inversiones en centros de datos — aún persisten brechas importantes entre zonas urbanas y rurales. Los gobiernos tienen un rol central en cerrar estas brechas, mejorando la conectividad, facilitando el acceso a servicios en la nube, fortaleciendo la infraestructura local y abriendo los datos públicos a la innovación. Una estrategia de infraestructura para la IA no debe replicar el camino de los países más ricos, sino aprovechar soluciones escalables ya disponibles como los servicios en la nube.",
          en: "A strong digital infrastructure is essential to building and scaling AI systems. While many countries in Hispanic America have made progress — expanding broadband, launching 5G pilots, and attracting data center investments — some gaps still remain, especially between urban centers and rural areas. Governments have a central role to play, by improving connectivity, enabling access to cloud computing, strengthening local infrastructure, and opening public data for innovation. An effective AI infrastructure strategy should not try to replicate the path of wealthier countries. Instead, it should make the most of scalable solutions that already exist, like cloud services.",
        },
      },
      {
        title: { es: "Innovación Tecnológica", en: "Technological Innovation" },
        icon: "Lightbulb",
        content: {
          es: "Aprovechar el potencial económico de la IA en Hispanoamérica dependerá de qué tan bien los países logren integrar la innovación en sus sectores productivos. En economías avanzadas, la innovación en IA suele concentrarse en startups bien financiadas y en I+D de frontera. En Hispanoamérica, los mayores beneficios probablemente vendrán de ayudar a las empresas ya existentes, especialmente en sectores estratégicos, a adoptar y desarrollar IA para resolver problemas reales. Se estima que el 75% del valor de la IA provendrá de cuatro funciones clave: optimización de operaciones, automatización del trabajo del conocimiento, mejora del servicio al cliente y personalización de productos y servicios.",
          en: "Unlocking the economic potential of AI in Hispanic America will depend on how well countries can embed innovation into their productive sectors. In advanced economies, AI innovation often centers around well-funded startups and frontier R&D. In Hispanic America, the most significant gains are more likely to come from helping existing companies, especially those in strategic sectors, adopt and develop AI to solve real-world problems. It is estimated that 75% of AI's value will come from four key functions: optimizing operations, automating knowledge work, upgrading customer service, and enabling personalized products and services.",
        },
      },
      {
        title: { es: "Personas", en: "People" },
        icon: "GraduationCap",
        content: {
          es: "Uno de los cambios más significativos de esta era tecnológica es lo mucho que se ha simplificado el acceso y la aplicación del conocimiento productivo. Hoy, las personas ya no necesitan una formación técnica profunda para empezar a trabajar con IA. El informe propone un marco práctico que divide el desarrollo de talento en tres niveles: aprendices (alfabetización digital y en IA básica), implementadores (profesionales que aplican herramientas de IA en su trabajo diario) e innovadores (personas con habilidades avanzadas que diseñan y construyen soluciones de IA). Este enfoque permite que los programas de formación se adapten a distintos roles y necesidades.",
          en: "One of the most defining shifts of this technological era is how much easier it has become to access and apply productive knowledge. People no longer need deep technical backgrounds to start working with AI. The report proposes a helpful framework that divides talent development into three levels: apprentices (basic digital and AI literacy), implementers (professionals who apply AI tools in their daily work), and innovators (individuals who design and build AI solutions). This approach helps ensure that training programs are tailored to different roles, starting points, and needs across the population.",
        },
      },
    ],
    sectorsTitle: { es: "Impacto por País", en: "Impact by Country" },
    sectorsSubtitle: { es: "Impacto económico potencial de la IA como porcentaje del PIB por país", en: "Potential economic impact of AI as percentage of GDP by country" },
    sectorsType: "range",
    sectorsRangeData: [
      { name: { es: "Argentina", en: "Argentina" }, low: 3.7, high: 6.7 },
      { name: { es: "Chile", en: "Chile" }, low: 10.9, high: 20.0 },
      { name: { es: "Colombia", en: "Colombia" }, low: 2.0, high: 3.7 },
      { name: { es: "Ecuador", en: "Ecuador" }, low: 2.0, high: 3.8 },
      { name: { es: "El Salvador", en: "El Salvador" }, low: 2.1, high: 3.9 },
      { name: { es: "México", en: "Mexico" }, low: 3.0, high: 5.6 },
      { name: { es: "Panamá", en: "Panama" }, low: 2.1, high: 4.0 },
      { name: { es: "Paraguay", en: "Paraguay" }, low: 2.0, high: 3.7 },
      { name: { es: "República Dominicana", en: "Dominican Republic" }, low: 2.1, high: 3.9 },
      { name: { es: "Uruguay", en: "Uruguay" }, low: 2.0, high: 3.7 },
    ],
    externalUrl: "https://blog.google/outreach-initiatives/public-policy/google-ai-developing-countries-growth/",
    downloadUrl: "/reports/ai-sprinters-latam-es.pdf",
    downloadUrlEn: "/reports/ai-sprinters-latam-en.pdf",
  },
  {
    id: "ai-sprinters-el-salvador",
    title: {
      es: "AI Sprinters: Impacto de la IA en El Salvador",
      en: "AI Sprinters: AI Impact in El Salvador",
    },
    subtitle: {
      es: "Evaluación del impacto económico de la IA y documentación de casos de éxito en El Salvador, parte de la serie AI Digital Sprinters de Google",
      en: "Assessment of AI's economic impact and documentation of success cases in El Salvador, part of Google's AI Digital Sprinters series",
    },
    description: {
      es: "Evaluación del impacto económico de la IA y documentación de casos de éxito de uso de IA en El Salvador, parte de la serie AI Digital Sprinters de Google.",
      en: "Assessment of AI's economic impact and documentation of successful AI use cases in El Salvador, part of Google's AI Digital Sprinters series.",
    },
    client: "Google",
    year: 2026,
    region: "El Salvador",
    type: "research",
    status: "in_progress",
    parentProject: "ai-sprinters",
  },
  {
    id: "ai-sprinters-chile",
    title: {
      es: "AI Sprinters: Una oportunidad histórica para Chile",
      en: "AI Sprinters: A Historic Opportunity for Chile",
    },
    subtitle: {
      es: "Inteligencia artificial para desatar el potencial económico de Chile, parte de la serie AI Digital Sprinters de Google",
      en: "Artificial intelligence to unlock Chile's economic potential, part of Google's AI Digital Sprinters series",
    },
    description: {
      es: "Estudio de impacto económico de la IA en Chile, parte de la serie AI Digital Sprinters de Google. Se estima que la IA podría generar entre USD 36.432 y USD 67.224 millones anuales, equivalentes al 10,9% y 20% del PIB.",
      en: "AI economic impact study for Chile, part of Google's AI Digital Sprinters series. AI could generate between USD 36.432 and USD 67.224 billion annually, equivalent to 10.9% and 20% of GDP.",
    },
    client: "Google",
    year: 2025,
    region: "Chile",
    type: "research",
    status: "completed",
    parentProject: "ai-sprinters",
    featuredStat: {
      value: "10,9–20%",
      label: { es: "Del PIB de Chile podría representar el impacto económico de la IA", en: "Of Chile's GDP could represent AI's economic impact" },
    },
    summaryHighlight: {
      es: "La IA podría generar entre USD 36.432 y USD 67.224 millones anuales, equivalentes al 10,9% y 20% del PIB",
      en: "AI could generate between USD 36.432 and USD 67.224 billion annually, equivalent to 10.9% and 20% of GDP",
    },
    executiveSummary: {
      es: "Al analizar la matriz productiva de Chile, se estima que la IA podría generar entre USD 36.432 y USD 67.224 millones anuales, equivalentes al 10,9% y 20% del PIB. Los sectores con mayor impacto proyectado son las actividades financieras y de seguros, el comercio y la manufactura, que en conjunto representarían más del 65% del efecto económico total. Sin embargo, según datos de PwC, solo el 5% de las empresas chilenas ha integrado IA en sus operaciones. Este reporte es parte de la serie IA Digital Sprinters de Google.",
      en: "Analyzing Chile's productive matrix, AI could generate between USD 36.432 and USD 67.224 billion annually, equivalent to 10.9% and 20% of GDP. The sectors with the highest projected impact are financial activities and insurance, commerce and manufacturing, which together would represent more than 65% of the total economic effect. However, according to PwC data, only 5% of Chilean companies have integrated AI into their operations. This report is part of Google's AI Digital Sprinters series.",
    },
    keyStats: [
      { value: "$36–67B", label: { es: "USD millones anuales", en: "USD Billion Annual" } },
      { value: "5%", label: { es: "Empresas con IA adoptada", en: "Companies with AI Adopted" } },
      { value: "45", label: { es: "Centros de datos en Chile", en: "Data Centers in Chile" } },
    ],
    pillarsTitle: { es: "Factores Habilitantes", en: "Enabling Factors" },
    pillarsSubtitle: { es: "Áreas clave del marco Digital Sprinters de Google", en: "Key areas of Google's Digital Sprinters framework" },
    sectors: [
      { name: { es: "Servicios Financieros y Seguros", en: "Financial Services & Insurance" }, percentage: 38 },
      { name: { es: "Comercio", en: "Commerce" }, percentage: 20 },
      { name: { es: "Manufactura", en: "Manufacturing" }, percentage: 10 },
      { name: { es: "Minería", en: "Mining" }, percentage: 6 },
      { name: { es: "Agricultura", en: "Agriculture" }, percentage: 4 },
      { name: { es: "Electricidad y Gas", en: "Electricity & Gas" }, percentage: 4 },
    ],
    pillars: [
      {
        title: { es: "Políticas Públicas Habilitantes", en: "Enabling Public Policies" },
        icon: "Scale",
        content: {
          es: "Chile ha tomado un rol de liderazgo en el diseño de políticas para impulsar la IA. Publicó su Política Nacional de IA en 2021 y la actualizó en 2024. Adoptó los principios de IA de la OCDE y fue el primero en usar la Metodología RAM de UNESCO. Recomendaciones: promover un enfoque regulatorio equilibrado y basado en evidencia, priorizar la fiscalización sectorial y aclarar el marco legal para minería de datos.",
          en: "Chile has taken a leadership role in designing policies to promote AI. It published its National AI Policy in 2021 and updated it in 2024. It adopted the OECD AI principles and was the first to use UNESCO's RAM Methodology. Recommendations: promote a balanced, evidence-based regulatory approach, prioritize sectoral oversight, and clarify the legal framework for data mining.",
        },
      },
      {
        title: { es: "Infraestructura", en: "Infrastructure" },
        icon: "Server",
        content: {
          es: "Chile se perfila como un nodo digital clave en Hispanoamérica con 45 centros de datos (incluido el de Google en Quilicura) y cables submarinos como Humboldt y Curie. El 96,5% de los hogares tiene acceso a internet y posee las redes móviles más rápidas de la región. Recomendaciones: alinear inversiones con desarrollo sostenible, expandir adopción Cloud First y crear plataformas de datos abiertos.",
          en: "Chile is positioning itself as a key digital node in Hispanic America with 45 data centers (including Google's in Quilicura) and submarine cables like Humboldt and Curie. 96.5% of households have internet access and it has the fastest mobile networks in the region. Recommendations: align investments with sustainable development, expand Cloud First adoption, and create open data platforms.",
        },
      },
      {
        title: { es: "Fomento a la Innovación", en: "Innovation Promotion" },
        icon: "Lightbulb",
        content: {
          es: "Chile necesita conectar mejor la academia, la industria y el gobierno para traducir conocimiento en soluciones concretas de IA. El ecosistema emprendedor es dinámico pero se requiere mayor financiamiento y colaboración entre actores del ecosistema para escalar soluciones de IA.",
          en: "Chile needs to better connect academia, industry, and government to translate knowledge into concrete AI solutions. The entrepreneurial ecosystem is dynamic but more funding and collaboration between ecosystem actors is needed to scale AI solutions.",
        },
      },
      {
        title: { es: "Fortalecimiento del Capital Humano", en: "Human Capital Development" },
        icon: "GraduationCap",
        content: {
          es: "El desarrollo del capital humano es el pilar que sostiene la transformación digital y la adopción de IA. Fortalecer la formación en habilidades digitales, integrar la IA en el sistema educativo y promover programas de capacitación continua permitirá a las personas adaptarse a los cambios del mercado laboral y liderar la creación de nuevas oportunidades.",
          en: "Human capital development is the pillar that sustains digital transformation and AI adoption. Strengthening digital skills training, integrating AI into the educational system, and promoting continuous training programs will enable people to adapt to labor market changes and lead the creation of new opportunities.",
        },
      },
    ],
    downloadUrl: "/reports/ai-sprinters-chile.pdf",
  },
  {
    id: "ai-sprinters-mexico",
    title: {
      es: "AI Sprinters: Desbloqueando el potencial de la IA en México",
      en: "AI Sprinters: Unlocking AI's Potential in Mexico",
    },
    subtitle: {
      es: "El impacto económico de la inteligencia artificial en México, parte de la serie AI Digital Sprinters de Google",
      en: "The economic impact of artificial intelligence in Mexico, part of Google's AI Digital Sprinters series",
    },
    description: {
      es: "Estudio de impacto económico de la IA en México, parte de la serie AI Digital Sprinters de Google. Se estima un potencial de crecimiento de entre USD $54.770 y $102.525 millones anuales, equivalentes al 3% y 5,6% del PIB, concentrado en manufactura, comercio minorista y servicios financieros.",
      en: "AI economic impact study for Mexico, part of Google's AI Digital Sprinters series. Estimated growth potential of between USD $54.8 and $102.5 billion annually, equivalent to 3% and 5.6% of GDP, concentrated in manufacturing, retail and financial services.",
    },
    client: "Google",
    year: 2025,
    region: "México",
    type: "research",
    status: "completed",
    parentProject: "ai-sprinters",
    featuredStat: {
      value: "3–5,6%",
      label: { es: "Del PIB podría provenir del crecimiento impulsado por IA", en: "Of GDP could come from AI-driven growth" },
    },
    summaryHighlight: {
      es: "México podría generar entre USD $54.770 y $102.525 millones anuales de crecimiento económico impulsado por IA, equivalentes al 3% y 5,6% del PIB",
      en: "Mexico could generate between USD $54.8 and $102.5 billion in annual AI-driven economic growth, equivalent to 3% and 5.6% of GDP",
    },
    executiveSummary: {
      es: "La inteligencia artificial está redefiniendo el panorama económico global y, si México aprovecha su potencial, puede aumentar entre un 3% y un 5,6% el PIB. Se estima que México podría generar entre USD $54.770 y $102.525 millones anuales de crecimiento económico, concentrándose en sectores clave como la manufactura, el comercio minorista y los servicios financieros. Sin embargo, la adopción de IA sigue siendo limitada, con solo un 7,3% de las empresas utilizando herramientas tecnológicas avanzadas. La combinación del nearshoring y la IA presenta una oportunidad única para el crecimiento económico del país. Este reporte es parte de la serie IA Digital Sprinters de Google.",
      en: "Artificial intelligence is reshaping the global economic landscape and, if Mexico taps into its potential, it could boost GDP by 3% to 5.6%. Mexico could generate between USD $54.8 and $102.5 billion in annual economic growth, concentrated in key sectors such as manufacturing, retail and financial services. However, AI adoption remains limited, with only 7.3% of companies using advanced technological tools. The combination of nearshoring and AI presents a unique opportunity for the country's economic growth. This report is part of Google's AI Digital Sprinters series.",
    },
    keyStats: [
      { value: "$55–103B", label: { es: "USD millones anuales", en: "USD Billion Annual" } },
      { value: "7,3%", label: { es: "Adopción de tecnologías avanzadas", en: "Advanced Tech Adoption Rate" } },
      { value: "362", label: { es: "Empresas activas en IA", en: "Active AI Companies" } },
    ],
    pillarsTitle: { es: "Factores Habilitantes", en: "Enabling Factors" },
    pillarsSubtitle: { es: "Áreas clave del marco Digital Sprinters de Google", en: "Key areas of Google's Digital Sprinters framework" },
    sectors: [
      { name: { es: "Manufactura", en: "Manufacturing" }, percentage: 34 },
      { name: { es: "Comercio Minorista", en: "Retail" }, percentage: 19 },
      { name: { es: "Servicios Financieros y Seguros", en: "Financial Services & Insurance" }, percentage: 14 },
      { name: { es: "Comercio al por Mayor", en: "Wholesale" }, percentage: 12 },
      { name: { es: "Corporativos", en: "Corporate" }, percentage: 3 },
      { name: { es: "Transporte y Almacenamiento", en: "Transport & Storage" }, percentage: 3 },
    ],
    pillars: [
      {
        title: { es: "Políticas Públicas Efectivas", en: "Effective Public Policies" },
        icon: "Scale",
        content: {
          es: "México lanzó la primera estrategia de IA en América Latina en 2018, seguida por la Agenda Nacional de Inteligencia Artificial en 2020, pero ninguna fue plenamente implementada. Se requiere crear una estrategia nacional de IA con visión a largo plazo que trascienda los ciclos administrativos, diseñar un marco regulatorio equilibrado que fomente el uso ético y responsable sin restricciones excesivas, y promover la colaboración estratégica entre gobierno, industria y academia.",
          en: "Mexico launched the first AI strategy in Latin America in 2018, followed by the National Artificial Intelligence Agenda in 2020, but neither was fully implemented. The country needs to create a national AI strategy with a long-term vision that transcends administrative cycles, design a balanced regulatory framework that promotes ethical and responsible use without excessive restrictions, and foster strategic collaboration among government, industry and academia.",
        },
      },
      {
        title: { es: "Infraestructura Tecnológica Sólida", en: "Solid Technological Infrastructure" },
        icon: "Server",
        content: {
          es: "En el Índice Latinoamericano de Inteligencia Artificial (ILIA) de 2024, México se posicionó cuarto en factores habilitantes, con alta penetración de redes 5G y capacidad de cómputo. Sin embargo, la distribución de la infraestructura es desigual entre estados y solo el 78,6% de la población mayor de 6 años tenía acceso a internet en 2022. Recomendaciones: expandir fibra óptica, 5G e internet satelital; reforzar el rol de INEGI en datos abiertos; y facilitar el acceso de mipymes a infraestructura tecnológica y servicios en la nube.",
          en: "In the 2024 Latin American Artificial Intelligence Index (ILIA), Mexico ranked fourth in enabling factors, with high 5G network penetration and computing capacity. However, infrastructure distribution is uneven across states and only 78.6% of the population over 6 had internet access in 2022. Recommendations: expand fiber optics, 5G and satellite internet; strengthen INEGI's role in open data; and facilitate SME access to technological infrastructure and cloud services.",
        },
      },
      {
        title: { es: "Innovación Tecnológica", en: "Technological Innovation" },
        icon: "Lightbulb",
        content: {
          es: "México ocupa el cuarto lugar regional en investigación, adopción y desarrollo de IA según el ILIA, con 4,22 patentes de IA por millón de habitantes (líder regional) y 362 empresas activas desarrollando IA. El ecosistema emprendedor es dinámico pero se requiere mayor conexión entre la academia, la industria y el gobierno. Recomendaciones: fomentar laboratorios estatales de IA en universidades, crear fondos de financiamiento para startups de base tecnológica, y fomentar una cultura de innovación en todos los niveles.",
          en: "Mexico ranks fourth regionally in AI research, adoption and development according to ILIA, with 4.22 AI patents per million inhabitants (regional leader) and 362 active companies developing AI. The entrepreneurial ecosystem is dynamic but stronger connections between academia, industry and government are needed. Recommendations: establish state AI laboratories at universities, create funding for technology-based startups, and foster a culture of innovation at all levels.",
        },
      },
      {
        title: { es: "Personas", en: "People" },
        icon: "GraduationCap",
        content: {
          es: "México tiene elementos positivos como la incorporación de programas de IA en el sistema educativo y un ecosistema de investigación maduro, pero los niveles de alfabetización digital presentan brechas geográficas significativas. Solo el 7,3% de las empresas utilizan herramientas tecnológicas avanzadas. Recomendaciones: implementar programas de formación en habilidades digitales y en IA en todos los niveles educativos, desarrollar estrategias de divulgación pública sobre los beneficios y riesgos de la IA, y organizar talleres prácticos para mipymes y el sector público.",
          en: "Mexico has positive elements such as the incorporation of AI programs in the educational system and a mature research ecosystem, but digital literacy levels show significant geographic gaps. Only 7.3% of companies use advanced technological tools. Recommendations: implement digital and AI skills training programs at all educational levels, develop public outreach strategies about AI's benefits and risks, and organize practical workshops for SMEs and the public sector.",
        },
      },
    ],
    downloadUrl: "/reports/ai-sprinters-mexico-es.pdf",
  },
  {
    id: "ai-sprinters-argentina",
    title: {
      es: "AI Sprinters: Una oportunidad histórica para Argentina",
      en: "AI Sprinters: A Historic Opportunity for Argentina",
    },
    subtitle: {
      es: "Inteligencia artificial para desatar el potencial económico de Argentina, parte de la serie AI Digital Sprinters de Google",
      en: "Artificial intelligence to unlock Argentina's economic potential, part of Google's AI Digital Sprinters series",
    },
    description: {
      es: "Estudio de impacto económico de la IA en Argentina, parte de la serie AI Digital Sprinters de Google. Se estima que la IA podría generar entre USD 23.721 y USD 43.491 millones anuales, equivalentes al 3,7% y 6,7% del PIB.",
      en: "AI economic impact study for Argentina, part of Google's AI Digital Sprinters series. AI could generate between USD 23.721 and USD 43.491 billion annually, equivalent to 3.7% and 6.7% of GDP.",
    },
    client: "Google",
    year: 2026,
    region: "Argentina",
    type: "research",
    status: "completed",
    parentProject: "ai-sprinters",
    featuredStat: {
      value: "3,7–6,7%",
      label: { es: "Del PIB de Argentina podría representar el impacto económico de la IA", en: "Of Argentina's GDP could represent AI's economic impact" },
    },
    summaryHighlight: {
      es: "La IA podría generar entre USD 23.721 y USD 43.491 millones anuales, equivalentes al 3,7% y 6,7% del PIB",
      en: "AI could generate between USD 23.721 and USD 43.491 billion annually, equivalent to 3.7% and 6.7% of GDP",
    },
    executiveSummary: {
      es: "Como la tercera economía más grande de Hispanoamérica, Argentina está bien posicionada para beneficiarse del potencial de la IA. Se estima que la IA podría contribuir entre USD 23.721 y USD 43.491 millones anuales a la economía, equivalentes al 3,7% y 6,7% del PIB. Los sectores con mayor impacto proyectado son la manufactura, el comercio, las actividades inmobiliarias y la agricultura. Sin embargo, la tasa actual de adopción de IA sigue siendo baja (alrededor del 4,2%), lo que reduce el impacto potencial a entre USD 987 y USD 1.809 millones anuales. Esta brecha evidencia la importancia de fomentar la adopción de IA para aprovechar su potencial como motor de crecimiento económico. Este reporte es parte de la serie IA Digital Sprinters de Google.",
      en: "As Hispanic America's third-largest economy, Argentina is well-positioned to benefit from AI's potential. AI could contribute between USD 23.721 and USD 43.491 billion annually to the economy, equivalent to 3.7% and 6.7% of GDP. The sectors with the highest projected impact are manufacturing, trade, real estate and agriculture. However, the current AI adoption rate remains low (around 4.2%), reducing the potential impact to between USD 0.987 and USD 1.8 billion annually. This gap underscores the importance of promoting AI adoption to leverage its potential as an engine of economic growth. This report is part of Google's AI Digital Sprinters series.",
    },
    keyStats: [
      { value: "$24–43B", label: { es: "USD millones anuales", en: "USD Billion Annual" } },
      { value: "4,2%", label: { es: "Tasa de adopción de IA", en: "AI Adoption Rate" } },
      { value: "14", label: { es: "Centros de datos", en: "Data Centers" } },
    ],
    pillarsTitle: { es: "Factores Habilitantes", en: "Enabling Factors" },
    pillarsSubtitle: { es: "Áreas clave del marco Digital Sprinters de Google", en: "Key areas of Google's Digital Sprinters framework" },
    sectors: [
      { name: { es: "Manufactura", en: "Manufacturing" }, percentage: 30 },
      { name: { es: "Comercio", en: "Commerce" }, percentage: 15 },
      { name: { es: "Actividades Inmobiliarias", en: "Real Estate" }, percentage: 8 },
      { name: { es: "Agricultura, Ganadería y Pesca", en: "Agriculture, Forestry & Fishing" }, percentage: 6 },
      { name: { es: "Salud y Asistencia Social", en: "Health & Social Work" }, percentage: 6 },
      { name: { es: "Enseñanza", en: "Education" }, percentage: 5 },
    ],
    pillars: [
      {
        title: { es: "Políticas Públicas Habilitantes", en: "Enabling Public Policies" },
        icon: "Scale",
        content: {
          es: "Argentina presentó su Plan Nacional de IA en 2019 y el actual gobierno impulsa el desarrollo de la IA con la visión de convertir al país en un hub global. En el Congreso se han presentado más de 40 proyectos de ley relacionados con IA, aunque la mayoría aún carece de consenso. Recomendaciones: consolidar una estrategia nacional de IA de largo plazo con amplio consenso multisectorial, adoptar principios y estándares internacionales (ISO/IEC, IEEE) y revisar las leyes existentes y los proyectos en curso para avanzar hacia un marco normativo único y coherente.",
          en: "Argentina released its National AI Plan in 2019, and the current government is promoting AI development with the vision of turning the country into a global hub. More than 40 AI-related bills have been introduced in Congress, although most still lack consensus. Recommendations: consolidate a long-term national AI strategy with broad multi-sector consensus, adopt international principles and standards (ISO/IEC, IEEE), and review existing laws and pending bills to move toward a single, coherent regulatory framework.",
        },
      },
      {
        title: { es: "Infraestructura", en: "Infrastructure" },
        icon: "Server",
        content: {
          es: "La penetración de internet en hogares subió del 82,9% en 2019 al 93,4% en 2023, y en 2025 el país superó el promedio de Hispanoamérica en velocidad de descarga móvil (61,01 Mbps). Argentina cuenta con cinco clústeres de alto desempeño (HPC) y 14 centros de datos, y en diciembre de 2024 presentó un plan nuclear nacional que busca posicionar al país como líder en energía nuclear e IA. Recomendaciones: fomentar la inversión en infraestructura digital y acceso a capacidad de cómputo, promover políticas de Cloud First y mejorar la interoperabilidad de los sistemas, especialmente en salud y educación.",
          en: "Household internet penetration rose from 82.9% in 2019 to 93.4% in 2023, and in 2025 the country surpassed the Hispanic American average in mobile download speed (61.01 Mbps). Argentina has five high-performance computing (HPC) clusters and 14 data centers, and in December 2024 it unveiled a national nuclear plan aiming to position the country as a leader in nuclear energy and AI. Recommendations: promote investment in digital infrastructure and access to computing capacity, advance Cloud First policies, and improve system interoperability, especially in health and education.",
        },
      },
      {
        title: { es: "Fomento a la Innovación", en: "Innovation Promotion" },
        icon: "Lightbulb",
        content: {
          es: "Argentina invierte cerca del 0,6% de su PIB en I+D y cuenta con un ecosistema emprendedor dinámico: 38 empresas de IA han concretado 87 rondas de inversión por USD 7.135 millones, y el sector agtech destaca con 165 empresas que aplican IA. Sin embargo, solo el 20,4% de las empresas ya utiliza IA, aunque un 44,4% planea adoptarla en el corto plazo. Recomendaciones: impulsar la adopción de IA en sectores productivos estratégicos como agricultura, manufactura, energía y salud, acelerar el uso de IA en empresas estatales (YPF, Arsat, INVAP) y crear centros de excelencia en IA con foco sectorial.",
          en: "Argentina invests around 0.6% of its GDP in R&D and has a dynamic entrepreneurial ecosystem: 38 AI companies have closed 87 investment rounds totaling USD 7.135 billion, and the agtech sector stands out with 165 companies applying AI. However, only 20.4% of companies already use AI, although 44.4% plan to adopt it in the short term. Recommendations: promote AI adoption in strategic productive sectors such as agriculture, manufacturing, energy and health, accelerate AI use in state-owned companies (YPF, Arsat, INVAP), and create AI centers of excellence with a sectoral focus.",
        },
      },
      {
        title: { es: "Fortalecimiento del Capital Humano", en: "Human Capital Development" },
        icon: "GraduationCap",
        content: {
          es: "La concentración de talento en IA se ha duplicado en ocho años y Argentina supera el promedio regional en formación científica temprana y posgrados especializados, con una participación femenina del 24,8% en la investigación en IA. No obstante, el país registró un flujo neto negativo de expertos en IA en 2023, lo que evidencia el desafío de retener talento. Recomendaciones: conectar al talento argentino en el exterior con redes globales mediante mentorías y programas de retorno, formar formadores en habilidades aplicadas de IA y desarrollar sistemas nacionales de certificación de habilidades en IA.",
          en: "AI talent concentration has doubled in eight years, and Argentina surpasses the regional average in early scientific education and specialized postgraduate training, with women representing 24.8% of AI research. However, the country recorded a net negative flow of AI experts in 2023, highlighting the challenge of retaining talent. Recommendations: connect Argentine talent abroad with global networks through mentorship and return programs, train trainers in applied AI skills, and develop national AI skills certification systems.",
        },
      },
    ],
    downloadUrl: "/reports/ai-sprinters-argentina-es.pdf",
    downloadUrlEn: "/reports/ai-sprinters-argentina-en.pdf",
  },
  {
    id: "ram-camboya",
    title: {
      es: "Evaluación de Preparación en IA: Camboya",
      en: "AI Readiness Assessment: Cambodia",
    },
    subtitle: {
      es: "Perfil país capturando el panorama sociotécnico de la IA en Camboya mediante la Metodología de Evaluación de Preparación (RAM) de UNESCO",
      en: "Country profile capturing the sociotechnical landscape of AI in Cambodia through UNESCO's Readiness Assessment Methodology (RAM)",
    },
    description: {
      es: "Primera aplicación de la metodología RAM de UNESCO en el sudeste asiático, evaluando la preparación de Camboya para la adopción de IA. Los hallazgos contribuyeron directamente al diseño de la primera Estrategia Nacional de Inteligencia Artificial del país.",
      en: "First application of UNESCO's RAM methodology in Southeast Asia, assessing Cambodia's readiness for AI adoption. The findings directly contributed to the design of the country's first National Artificial Intelligence Strategy.",
    },
    client: "UNESCO",
    year: 2024,
    yearEnd: 2025,
    region: "Camboya",
    type: "assessment",
    status: "completed",
    parentProject: "ram-unesco",
    featuredStat: {
      value: "0,09%",
      label: { es: "Del PIB destinado a I+D, reflejando la brecha de inversión en innovación", en: "Of GDP spent on R&D, reflecting the innovation investment gap" },
    },
    summaryHighlight: {
      es: "Los hallazgos de la RAM informarán directamente la elaboración de la primera Estrategia Nacional de Inteligencia Artificial de Camboya",
      en: "The RAM findings will directly inform the drafting of Cambodia's first National Artificial Intelligence Strategy",
    },
    executiveSummary: {
      es: "Camboya inició el estudio de su ecosistema de IA a través de la Metodología de Evaluación de Preparación (RAM) de UNESCO, cuyos hallazgos informarán directamente la elaboración de su primera Estrategia Nacional de IA. El reporte revela un panorama dinámico con avances significativos y oportunidades de crecimiento. En la dimensión legal, Camboya participa activamente en la gobernanza de IA de ASEAN y avanza en legislación clave. En lo social y cultural, se está cerrando la brecha de género en internet y se desarrollan datasets en idioma jemer. El ámbito científico muestra crecimiento en publicaciones con énfasis en ética y nuevos programas de posgrado. Proyectos piloto como Sarika y Khmer Braille demuestran la capacidad de innovación local. Técnicamente, el país cuenta con acceso casi universal a electricidad y avanza en políticas de Cloud First y gobernanza de datos.",
      en: "Cambodia initiated the study of its AI ecosystem through UNESCO's Readiness Assessment Methodology (RAM), whose findings will directly inform the drafting of its first National AI Strategy. The report reveals a dynamic landscape with significant advances and growth opportunities. In the legal dimension, Cambodia actively participates in ASEAN AI governance and is advancing key legislation. Socially and culturally, the internet gender gap is narrowing and Khmer language datasets are being developed. The scientific sphere shows growth in publications with an ethics emphasis and new postgraduate programs. Pilot projects like Sarika and Khmer Braille demonstrate local innovation capacity. Technically, the country has near-universal electricity access and is advancing Cloud First and data governance policies.",
    },
    keyStats: [
      { value: "60,7%", label: { es: "Uso de internet (% de la población)", en: "Internet Usage (% of population)" } },
      { value: "55/100", label: { es: "Puntaje de infraestructura de datos", en: "Data Infrastructure Score" } },
      { value: "95%", label: { es: "Acceso a electricidad", en: "Electricity Access" } },
    ],
    pillarsTitle: { es: "Dimensiones Evaluadas", en: "Assessed Dimensions" },
    pillarsSubtitle: { es: "Las cinco dimensiones de la Metodología RAM de UNESCO", en: "The five dimensions of UNESCO's RAM Methodology" },
    pillars: [
      {
        title: { es: "Legal y Regulatoria", en: "Legal and Regulatory" },
        icon: "Scale",
        content: {
          es: "Camboya participa activamente en la gobernanza de IA de ASEAN y avanza en legislación clave como protección de datos personales, ciberseguridad y directrices éticas de IA. Ha introducido guías de protección infantil en línea y se han realizado avances significativos en capacitación digital para el sector público. La Estrategia Nacional de IA está en elaboración y representa una oportunidad clave para consolidar un marco institucional robusto, incluyendo leyes de adquisición pública de IA y alineación con estándares internacionales.",
          en: "Cambodia actively participates in ASEAN AI governance and is advancing key legislation such as personal data protection, cybersecurity and AI ethics guidelines. Child online protection guidelines have been introduced and significant progress has been made in digital skills training for the public sector. The National AI Strategy is under development and represents a key opportunity to consolidate a robust institutional framework, including AI procurement laws and alignment with international standards.",
        },
      },
      {
        title: { es: "Social y Cultural", en: "Social and Cultural" },
        icon: "Users",
        content: {
          es: "Se observan avances alentadores: la brecha de género en el uso de internet se está cerrando, con buenos resultados PISA para niñas en ciencia y lectura. Múltiples iniciativas promueven habilidades digitales y oportunidades para mujeres. CADT lidera el desarrollo de datasets en idioma jemer, cruciales para una IA inclusiva. Camboya está además integrando la IA en sus estrategias de salud digital y preservación del patrimonio cultural, con oportunidades para fortalecer los servicios de e-gobierno y la participación ciudadana.",
          en: "Encouraging progress is observed: the internet gender gap is narrowing, with good PISA results for girls in science and reading. Multiple initiatives promote digital skills and opportunities for women. CADT leads the development of Khmer language datasets, crucial for inclusive AI. Cambodia is also integrating AI into its digital health and cultural heritage preservation strategies, with opportunities to strengthen e-government services and citizen participation.",
        },
      },
      {
        title: { es: "Científica y Educativa", en: "Scientific and Educational" },
        icon: "GraduationCap",
        content: {
          es: "El ámbito científico muestra un crecimiento prometedor en publicaciones de investigación en IA, con un notable énfasis en ética desde sus inicios. Nuevos programas de maestría en IA y ciencia de datos integran consideraciones éticas en sus currículos, y la colaboración con UNESCO fortalece la educación en IA. Existe una oportunidad estratégica de aumentar la inversión en I+D, integrar el pensamiento computacional en el currículo escolar, invertir en formación docente y desarrollar talento avanzado en IA.",
          en: "The scientific sphere shows promising growth in AI research publications, with a notable emphasis on ethics from the outset. New AI and Data Science master's programs integrate ethical considerations into their curricula, and collaboration with UNESCO strengthens AI education. There is a strategic opportunity to increase R&D investment, integrate computational thinking into school curricula, invest in teacher training and develop advanced AI talent.",
        },
      },
      {
        title: { es: "Económica", en: "Economic" },
        icon: "TrendingUp",
        content: {
          es: "Proyectos piloto prometedores como Sarika y Khmer Braille demuestran la capacidad de innovación local de Camboya, y estudios proyectan un aumento significativo del PIB impulsado por IA hacia 2030. Sectores como agricultura, finanzas, PYMEs y turismo presentan oportunidades estratégicas para la adopción temprana de IA. La recopilación de datos sobre el mercado laboral e inversiones en IA permitirá una planificación más efectiva para maximizar el impacto económico.",
          en: "Promising pilot projects like Sarika and Khmer Braille demonstrate Cambodia's local innovation capacity, and studies project a significant AI-driven GDP increase by 2030. Sectors such as agriculture, finance, SMEs and tourism present strategic opportunities for early AI adoption. Gathering data on the labour market and AI investments will enable more effective planning to maximise economic impact.",
        },
      },
      {
        title: { es: "Técnica e Infraestructural", en: "Technical and Infrastructural" },
        icon: "Server",
        content: {
          es: "Camboya cuenta con una base sólida: acceso casi universal a electricidad, mejoras en conectividad móvil, estándares estadísticos establecidos y políticas de Cloud First y gobernanza de datos en desarrollo. El país tiene la oportunidad de mejorar el acceso y velocidad de internet, expandir la capacidad de centros de datos, participar en organismos internacionales de estandarización de IA y establecer un Centro de Recursos de IA que democratice el acceso a infraestructura computacional avanzada.",
          en: "Cambodia has a solid foundation: near-universal electricity access, mobile connectivity improvements, established statistical standards and Cloud First and data governance policies under development. The country has the opportunity to improve internet access and speed, expand data centre capacity, participate in international AI standardisation bodies and establish an AI Resource Centre to democratise access to advanced computing infrastructure.",
        },
      },
    ],
    images: [
      { src: "/images/projects/ram-camboya/1738671465327.jpeg", caption: { es: "Presentación de resultados preliminares de la RAM Camboya", en: "Presentation of preliminary RAM Cambodia results" } },
      { src: "/images/projects/ram-camboya/20250204_083735.jpg", caption: { es: "Evento de presentación en CADT con UNESCO", en: "Presentation event at CADT with UNESCO" } },
      { src: "/images/projects/ram-camboya/20250204_110523.jpg", caption: { es: "Mesas de validación multiactor", en: "Multi-stakeholder validation workshops" } },
    ],
    downloadUrl: "https://unesdoc.unesco.org/ark:/48223/pf0000394553",
  },
  // ── 2024 ───────────────────────────────────────────────────────
  {
    id: "marcos-regulatorios-ia-lac",
    title: {
      es: "Análisis Comparativo de Marcos Regulatorios de IA en ALC",
      en: "Comparative Analysis of AI Regulatory Frameworks in LAC",
    },
    subtitle: {
      es: "Mapeo y análisis de legislación de IA en más de 12 países de América Latina y el Caribe",
      en: "Mapping and analysis of AI legislation across 12+ Latin American and Caribbean countries",
    },
    description: {
      es: "Mapeo y análisis comparativo de la legislación de IA en más de 12 países de América Latina y el Caribe. Generamos recomendaciones concretas para armonizar marcos regulatorios y fomentar la innovación responsable en la región.",
      en: "Mapping and comparative analysis of AI legislation across 12+ Latin American and Caribbean countries. We delivered concrete recommendations to harmonize regulatory frameworks and foster responsible innovation in the region.",
    },
    client: "CENIA",
    year: 2024,
    region: "Latinoamérica",
    type: "research",
    status: "completed",
    featuredStat: { value: "12+", label: { es: "Países analizados", en: "Countries analyzed" } },
  },
  {
    id: "politica-municipal-ia-lascondes",
    title: {
      es: "Política Municipal de Inteligencia Artificial",
      en: "Municipal Artificial Intelligence Policy",
    },
    subtitle: {
      es: "Primera política municipal de IA en Chile, diseñada mediante participación ciudadana",
      en: "Chile's first municipal AI policy, designed through citizen participation",
    },
    description: {
      es: "Diseño y facilitación de un proceso de participación ciudadana que culminó en la primera Política Municipal de IA en Chile. Elaborada en colaboración con CENIA, establece lineamientos para el uso responsable de IA en la gestión municipal.",
      en: "Design and facilitation of a citizen participation process that culminated in Chile's first Municipal AI Policy. Developed in collaboration with CENIA, it establishes guidelines for the responsible use of AI in municipal governance.",
    },
    client: "Municipalidad de Las Condes",
    year: 2024,
    region: "Chile",
    type: "policy",
    status: "completed",
  },
  {
    id: "indice-idi-logistica",
    title: {
      es: "Índice de Investigación, Desarrollo e Innovación en Logística",
      en: "Logistics Research, Development & Innovation Index",
    },
    subtitle: {
      es: "Primer índice de I+D+i del sector logístico chileno",
      en: "First R&D&I index for Chile's logistics sector",
    },
    description: {
      es: "Creación del primer índice de I+D+i del sector logístico chileno, con metodología validada por un comité académico. Permite al sector medir su madurez en innovación y priorizar inversiones estratégicas.",
      en: "Creation of the first R&D&I index for Chile's logistics sector, with methodology validated by an academic committee. Enables the sector to measure its innovation maturity and prioritize strategic investments.",
    },
    client: "Conecta Logística",
    year: 2024,
    region: "Chile",
    type: "research",
    status: "completed",
  },
  {
    id: "prospeccion-regulacion-ia",
    title: {
      es: "Prospección sobre la Regulación de IA",
      en: "AI Regulation Foresight",
    },
    subtitle: {
      es: "Escenarios prospectivos sobre regulación de IA mediante grupos focales participativos",
      en: "Foresight scenarios on AI regulation through participatory focus groups",
    },
    description: {
      es: "Facilitación de grupos focales participativos para construir escenarios prospectivos sobre regulación de IA en Chile. Los resultados orientan la toma de decisiones frente a un entorno regulatorio en rápida evolución.",
      en: "Facilitation of participatory focus groups to build foresight scenarios on AI regulation in Chile. The results guide decision-making in a rapidly evolving regulatory environment.",
    },
    client: "Centro de Innovación UC",
    year: 2024,
    region: "Chile",
    type: "consulting",
    status: "completed",
    externalUrl: "https://centrodeinnovacion.uc.cl",
  },
  {
    id: "sandboxes-ia-chile",
    title: {
      es: "Levantamiento de Casos y Recomendaciones para Sandboxes de IA en Chile",
      en: "AI Regulatory Sandboxes: Cases & Recommendations for Chile",
    },
    subtitle: {
      es: "Hoja de ruta para entornos de prueba regulatoria de IA en Chile",
      en: "Roadmap for AI regulatory testing environments in Chile",
    },
    description: {
      es: "Investigación de experiencias internacionales de sandboxes regulatorios de IA y desarrollo de recomendaciones adaptadas a Chile. Entregamos una hoja de ruta para la implementación de entornos de prueba que aceleren la innovación con supervisión regulatoria.",
      en: "Research of international AI regulatory sandbox experiences and development of recommendations tailored to Chile. We delivered a roadmap for implementing testing environments that accelerate innovation with regulatory oversight.",
    },
    client: "BID",
    year: 2024,
    region: "Chile",
    type: "policy",
    status: "completed",
  },
  {
    id: "levantamiento-proyectos-ia-chile",
    title: {
      es: "Levantamiento de Proyectos de IA en Chile",
      en: "Mapping of AI Projects in Chile",
    },
    subtitle: {
      es: "Mapeo exhaustivo del ecosistema de investigación en IA de Chile",
      en: "Comprehensive mapping of Chile's AI research ecosystem",
    },
    description: {
      es: "Mapeo exhaustivo de los proyectos de investigación en IA del país, identificando capacidades, brechas y oportunidades de colaboración. El resultado entrega una visión estratégica para orientar la inversión pública en I+D de inteligencia artificial.",
      en: "Comprehensive mapping of the country's AI research projects, identifying capabilities, gaps, and collaboration opportunities. The result provides a strategic vision to guide public investment in artificial intelligence R&D.",
    },
    client: "BID",
    year: 2024,
    region: "Chile",
    type: "research",
    status: "completed",
  },
  // ── 2023–2024 ──────────────────────────────────────────────────
  {
    id: "ram-republica-dominicana",
    title: {
      es: "Evaluación de Preparación en IA: República Dominicana",
      en: "AI Readiness Assessment: Dominican Republic",
    },
    subtitle: {
      es: "Primera implementación de la metodología RAM de UNESCO en Centroamérica y el Caribe",
      en: "First implementation of UNESCO's RAM methodology in Central America and the Caribbean",
    },
    description: {
      es: "Primera implementación de la metodología RAM de UNESCO en Centroamérica y el Caribe, liderada por la OGTIC. Las recomendaciones fueron incorporadas directamente en la Estrategia Nacional de Inteligencia Artificial (ENIA), lanzada por decreto presidencial en 2023.",
      en: "First implementation of UNESCO's RAM methodology in Central America and the Caribbean, led by OGTIC. The recommendations were directly incorporated into the National Artificial Intelligence Strategy (NAIS), launched by presidential decree in 2023.",
    },
    client: "UNESCO",
    year: 2023,
    yearEnd: 2024,
    region: "República Dominicana",
    type: "assessment",
    status: "completed",
    parentProject: "ram-unesco",
    summaryHighlight: {
      es: "Las recomendaciones de la RAM fueron incorporadas directamente en la Estrategia Nacional de Inteligencia Artificial (ENIA), lanzada por decreto presidencial durante la implementación del estudio",
      en: "The RAM recommendations were directly incorporated into the National Artificial Intelligence Strategy (NAIS), launched by presidential decree during the study's implementation",
    },
    executiveSummary: {
      es: "República Dominicana fue seleccionada en 2023 como uno de los primeros países de la región en implementar la RAM de UNESCO, con el apoyo de la cooperación japonesa (JFIT). La OGTIC lideró el proceso en coordinación con UNESCO, y el gobierno publicó su Estrategia Nacional de IA (ENIA) incorporando las recomendaciones del reporte. El diagnóstico revela un país comprometido con la gobernanza ética de la IA, con avances en datos abiertos (posición 60 de 187 en el Open Data Inventory), una Agenda Digital 2030 como marco estratégico, y 11 programas universitarios en IA y ciencia de datos. Las oportunidades incluyen actualizar la legislación de protección de datos, fortalecer las capacidades del sector público, cerrar la brecha digital urbano-rural y aumentar la inversión en investigación.",
      en: "The Dominican Republic was selected in 2023 as one of the first countries in the region to implement UNESCO's RAM, with support from Japanese cooperation (JFIT). OGTIC led the process in coordination with UNESCO, and the government published its National AI Strategy (NAIS) incorporating the report's recommendations. The assessment reveals a country committed to ethical AI governance, with advances in open data (position 60 of 187 in the Open Data Inventory), a Digital Agenda 2030 as strategic framework, and 11 university programs in AI and data science. Opportunities include updating data protection legislation, strengthening public sector capacities, closing the urban-rural digital divide and increasing research investment.",
    },
    keyStats: [
      { value: "85%", label: { es: "Uso de internet (% de la población)", en: "Internet usage (% of population)" } },
      { value: "0,086%", label: { es: "Del PIB en I+D", en: "Of GDP in R&D" } },
      { value: "98,1%", label: { es: "Acceso a electricidad", en: "Electricity access" } },
    ],
    pillarsTitle: { es: "Dimensiones Evaluadas", en: "Assessed Dimensions" },
    pillarsSubtitle: { es: "Las cinco dimensiones de la Metodología RAM de UNESCO", en: "The five dimensions of UNESCO's RAM Methodology" },
    pillars: [
      {
        title: { es: "Legal y Regulatoria", en: "Legal and Regulatory" },
        icon: "Scale",
        content: {
          es: "República Dominicana lanzó su ENIA por decreto presidencial en 2023, incorporando un componente ético y de derechos humanos. Cuenta con una Ley de Protección de Datos Personales y la Agenda Digital 2030 como marco estratégico. El país tiene una Política Nacional de Datos Abiertos (posición 60/187 en el Open Data Inventory) y un portal de datos abiertos gubernamental. Las oportunidades incluyen actualizar la legislación de datos personales, crear regulaciones de contratación pública de IA y establecer mecanismos de rendición de cuentas para sistemas de IA.",
          en: "The Dominican Republic launched its NAIS by presidential decree in 2023, incorporating an ethical and human rights component. It has a Personal Data Protection Law and the Digital Agenda 2030 as a strategic framework. The country has a National Open Data Policy (position 60/187 in the Open Data Inventory) and a government open data portal. Opportunities include updating personal data legislation, creating AI procurement regulations and establishing accountability mechanisms for AI systems.",
        },
      },
      {
        title: { es: "Social y Cultural", en: "Social and Cultural" },
        icon: "Users",
        content: {
          es: "El país muestra una brecha de género en internet casi inexistente (índice 0,963), y las niñas superan a los niños en desempeño en matemáticas y ciencias. El PLANEG III promueve activamente la igualdad de género en tecnologías digitales. El 48% de la ciudadanía confía en los sitios web y aplicaciones del gobierno. La oportunidad está en cerrar la brecha digital urbano-rural (49,2% vs 30,6% de acceso a internet en hogares), promover la diversidad en equipos de IA e integrar la IA en estrategias de salud digital y preservación cultural.",
          en: "The country shows an almost non-existent internet gender gap (index 0.963), and girls outperform boys in mathematics and science. PLANEG III actively promotes gender equality in digital technologies. 48% of citizens trust government websites and applications. The opportunity lies in closing the urban-rural digital divide (49.2% vs 30.6% household internet access), promoting diversity in AI teams and integrating AI into digital health and cultural preservation strategies.",
        },
      },
      {
        title: { es: "Científica y Educativa", en: "Scientific and Educational" },
        icon: "GraduationCap",
        content: {
          es: "El país cuenta con 11 programas terciarios en IA, aprendizaje automático y ciencia de datos (2 licenciaturas, 7 diplomados y 2 maestrías), y ocupa la posición 63 a nivel global en ciencia de datos en Coursera. Un promedio de 10 autores activos publican anualmente en IA, y se registran 68 artículos científicos relacionados. La ENIA prioriza el fortalecimiento del ecosistema de I+D+i, con oportunidades para crear centros de investigación en IA, aumentar la inversión en I+D (actualmente 0,086% del PIB) y promover la colaboración industria-universidad.",
          en: "The country has 11 tertiary programs in AI, machine learning and data science (2 undergraduate, 7 diplomas and 2 master's), and ranks 63rd globally in data science on Coursera. An average of 10 active authors publish annually on AI, with 68 related scientific articles recorded. The NAIS prioritizes strengthening the R&D&I ecosystem, with opportunities to create AI research centers, increase R&D investment (currently 0.086% of GDP) and promote industry-university collaboration.",
        },
      },
      {
        title: { es: "Económica", en: "Economic" },
        icon: "TrendingUp",
        content: {
          es: "República Dominicana ocupa la posición 50 en el Índice Global de Innovación y muestra potencial de crecimiento en la adopción de IA. La ENIA contempla el impacto de la IA en el mercado laboral como un eje prioritario. Las exportaciones de alta tecnología representan el 2,9% del comercio. La oportunidad clave es mejorar la recopilación de datos sobre el ecosistema económico de IA, incluyendo datos laborales, de inversión y de consumo, para generar líneas base que permitan medir el progreso y diseñar políticas más efectivas.",
          en: "The Dominican Republic ranks 50th in the Global Innovation Index and shows growth potential in AI adoption. The NAIS considers AI's impact on the labor market as a priority axis. High-tech exports represent 2.9% of trade. The key opportunity is improving data collection on the AI economic ecosystem, including labor, investment and consumption data, to generate baselines that allow measuring progress and designing more effective policies.",
        },
      },
      {
        title: { es: "Técnica e Infraestructura", en: "Technical and Infrastructure" },
        icon: "Server",
        content: {
          es: "El país cuenta con 88% de suscripciones móviles, cobertura 3G del 99% y acceso a electricidad del 98,1%. La velocidad promedio de descarga de banda ancha es de 20,58 Mbps. República Dominicana tiene un centro de datos (operado por Kio Networks) y participa como observador en ISO/IEC JTC 1/SC 27. Las oportunidades incluyen expandir la capacidad de centros de datos, mejorar la conectividad de banda ancha fija (actualmente 10% de penetración) y cerrar la brecha urbano-rural en acceso a internet de alta velocidad.",
          en: "The country has 88% mobile subscriptions, 99% 3G coverage and 98.1% electricity access. Average broadband download speed is 20.58 Mbps. The Dominican Republic has one data center (operated by Kio Networks) and participates as an observer in ISO/IEC JTC 1/SC 27. Opportunities include expanding data center capacity, improving fixed broadband connectivity (currently 10% penetration) and closing the urban-rural gap in high-speed internet access.",
        },
      },
    ],
    downloadUrl: "https://unesdoc.unesco.org/ark:/48223/pf0000391573",
  },
  {
    id: "ram-cuba",
    title: {
      es: "Implementación RAM Cuba",
      en: "RAM Implementation Cuba",
    },
    subtitle: {
      es: "Evaluación de preparación en IA mediante la metodología RAM de UNESCO",
      en: "AI readiness assessment using UNESCO's RAM methodology",
    },
    description: {
      es: "Evaluación de los desafíos y oportunidades de Cuba para la adopción de IA mediante la metodología RAM de UNESCO. Entregamos recomendaciones concretas que alimentan la formulación de la política nacional de inteligencia artificial.",
      en: "Assessment of Cuba's challenges and opportunities for AI adoption using UNESCO's RAM methodology. We delivered concrete recommendations that inform the formulation of the national artificial intelligence policy.",
    },
    client: "UNESCO",
    year: 2023,
    yearEnd: 2024,
    region: "Cuba",
    type: "assessment",
    status: "completed",
    parentProject: "ram-unesco",
    externalUrl: "https://www.unesco.org/ethics-ai/en/cuba",
  },
  // ── 2023 ───────────────────────────────────────────────────────
  {
    id: "actualizacion-politica-ia-chile",
    title: {
      es: "Actualización Política de Inteligencia Artificial de Chile",
      en: "Chile's AI Policy Update",
    },
    subtitle: {
      es: "Revisión integral de la Política Nacional de IA alineada con la RAM de UNESCO",
      en: "Comprehensive review of the National AI Policy aligned with UNESCO's RAM",
    },
    description: {
      es: "Revisión integral de la Política Nacional de IA de Chile y su plan de acción, generando una propuesta actualizada alineada con las recomendaciones de la RAM UNESCO. El resultado informó la nueva versión de la política publicada por el Ministerio de Ciencia.",
      en: "Comprehensive review of Chile's National AI Policy and its action plan, generating an updated proposal aligned with UNESCO RAM recommendations. The result informed the new policy version published by the Ministry of Science.",
    },
    client: "Ministerio de Ciencia",
    year: 2023,
    region: "Chile",
    type: "policy",
    status: "completed",
    externalUrl: "https://minciencia.gob.cl",
  },
  {
    id: "ram-chile",
    title: {
      es: "Evaluación de Preparación en IA: Chile",
      en: "AI Readiness Assessment: Chile",
    },
    subtitle: {
      es: "Evaluación del estadío de preparación en materia de Inteligencia Artificial de la UNESCO",
      en: "UNESCO's Readiness Assessment Methodology for Artificial Intelligence",
    },
    description: {
      es: "Chile fue uno de los primeros países del mundo en implementar la metodología RAM de UNESCO, consolidándose como pionero en América Latina. Más de 300 actores del ecosistema participaron en mesas redondas en seis regiones del país, generando recomendaciones que informaron la actualización de la Política Nacional de IA.",
      en: "Chile was one of the first countries in the world to implement UNESCO's RAM methodology, establishing itself as a pioneer in Latin America. Over 300 ecosystem stakeholders participated in roundtables across six regions, generating recommendations that informed the update of the National AI Policy.",
    },
    client: "UNESCO",
    year: 2023,
    region: "Chile",
    type: "assessment",
    status: "completed",
    parentProject: "ram-unesco",
    featuredStat: { value: "300+", label: { es: "Participantes en mesas redondas en 6 regiones", en: "Roundtable participants across 6 regions" } },
    summaryHighlight: {
      es: "Chile fue pionero en implementar la RAM de UNESCO, generando recomendaciones que informaron directamente la actualización de la Política Nacional de Inteligencia Artificial",
      en: "Chile pioneered the implementation of UNESCO's RAM, generating recommendations that directly informed the update of the National Artificial Intelligence Policy",
    },
    executiveSummary: {
      es: "Chile fue uno de los primeros países del mundo en implementar la metodología de evaluación de preparación en IA de UNESCO, posicionándose como pionero en América Latina con una estrategia de IA reconocida por su amplio proceso participativo. La Política Nacional de IA (2021) incluye 70 acciones prioritarias y 185 iniciativas con un presupuesto estimado de USD 32 millones. Las consultas nacionales reunieron a más de 300 personas de diferentes regiones, sectores y disciplinas, revelando una visión optimista pero matizada: entusiasmo por mejorar la productividad y dinamizar la democracia, junto con preocupaciones sobre privacidad, transparencia e impacto laboral. Las recomendaciones abarcan regulación, marco institucional y desarrollo de capacidades, sentando las bases para la actualización de la estrategia nacional con un enfoque más ético y equitativo.",
      en: "Chile was one of the first countries in the world to implement UNESCO's AI readiness assessment methodology, positioning itself as a pioneer in Latin America with an AI strategy recognized for its broad participatory process. The National AI Policy (2021) includes 70 priority actions and 185 initiatives with an estimated budget of USD 32 million. National consultations brought together over 300 people from different regions, sectors and disciplines, revealing an optimistic but nuanced vision: enthusiasm for improving productivity and energizing democracy, alongside concerns about privacy, transparency and labor impact. Recommendations span regulation, institutional frameworks and capacity building, laying the groundwork for updating the national strategy with a more ethical and equitable approach.",
    },
    keyStats: [
      { value: "88,3%", label: { es: "Uso de internet (% de la población)", en: "Internet usage (% of population)" } },
      { value: "0,34%", label: { es: "Del PIB en I+D", en: "Of GDP in R&D" } },
      { value: "100%", label: { es: "Acceso a electricidad", en: "Electricity access" } },
    ],
    pillarsTitle: { es: "Dimensiones Evaluadas", en: "Assessed Dimensions" },
    pillarsSubtitle: { es: "Las cinco dimensiones de la Metodología RAM de UNESCO", en: "The five dimensions of UNESCO's RAM Methodology" },
    pillars: [
      {
        title: { es: "Legal y Regulatoria", en: "Legal and Regulatory" },
        icon: "Scale",
        content: {
          es: "Chile publicó su Política Nacional de IA en 2021, incluyendo un componente ético robusto. El país cuenta con un sólido cuerpo de instrumentos legales para promover la transparencia, el debido proceso y la contratación pública. Se avanza en la actualización de la Ley de Protección de Datos Personales y se discute un proyecto de ley de IA en el Congreso. La oportunidad está en consolidar un marco regulatorio equilibrado, basado en evidencia, y en crear directrices de transparencia algorítmica para el sector público.",
          en: "Chile published its National AI Policy in 2021, including a robust ethical component. The country has a solid body of legal instruments to promote transparency, due process and public procurement. Progress is being made on updating the Personal Data Protection Law and an AI bill is being discussed in Congress. The opportunity lies in consolidating a balanced, evidence-based regulatory framework and creating algorithmic transparency guidelines for the public sector.",
        },
      },
      {
        title: { es: "Social y Cultural", en: "Social and Cultural" },
        icon: "Users",
        content: {
          es: "Chile muestra fortalezas en acceso digital con una brecha de género casi inexistente en el uso de internet. Múltiples programas promueven la diversidad en CTIM, incluyendo la Política Nacional para la Igualdad de Género en Ciencia y Tecnología. El 63% de los chilenos cree que la IA tiene más beneficios que inconvenientes. Las oportunidades incluyen fortalecer la inclusión urbano-rural, desarrollar datos en lenguas indígenas y evaluar el impacto de la IA en la preservación del patrimonio cultural.",
          en: "Chile shows strengths in digital access with an almost non-existent gender gap in internet use. Multiple programs promote STEM diversity, including the National Policy for Gender Equality in Science and Technology. 63% of Chileans believe AI has more benefits than drawbacks. Opportunities include strengthening urban-rural inclusion, developing indigenous language data, and evaluating AI's impact on cultural heritage preservation.",
        },
      },
      {
        title: { es: "Científica y Educativa", en: "Scientific and Educational" },
        icon: "GraduationCap",
        content: {
          es: "Chile cuenta con tres centros de investigación en IA (CENIA, Milenio Futures of AI e Instituto Milenio en Ingeniería e IA para la Salud) y 837 investigadores activos. Las ofertas de educación terciaria en IA han crecido significativamente: 15 universidades ofrecen 15 cursos, 39 diplomados, 10 maestrías y 1 doctorado. La oportunidad estratégica es aumentar la inversión en I+D (actualmente 0,34% del PIB), integrar IA en el currículo escolar y fortalecer la formación docente en tecnologías digitales.",
          en: "Chile has three AI research centers (CENIA, Milenio Futures of AI and Milenio Institute in Engineering and AI for Health) and 837 active researchers. Tertiary AI education offerings have grown significantly: 15 universities offer 15 courses, 39 diplomas, 10 master's and 1 doctorate. The strategic opportunity is to increase R&D investment (currently 0.34% of GDP), integrate AI into school curricula and strengthen teacher training in digital technologies.",
        },
      },
      {
        title: { es: "Económica", en: "Economic" },
        icon: "TrendingUp",
        content: {
          es: "Chile registra un crecimiento sostenido en la contratación de talento en IA, con una concentración de talento que se ha triplicado entre 2017 y 2022. El sector de servicios de comunicaciones e información representó el 2,6% del PIB en 2022. Chile atrae inversiones tecnológicas significativas, con 589 millones de dólares registrados. Las oportunidades incluyen mejorar la recopilación de datos sobre el mercado laboral de IA, promover la certificación de competencias digitales y expandir los programas de reciclaje profesional.",
          en: "Chile shows sustained growth in AI talent hiring, with talent concentration tripling between 2017 and 2022. The communications and information services sector represented 2.6% of GDP in 2022. Chile attracts significant technology investments, with $589 million registered. Opportunities include improving AI labor market data collection, promoting digital skills certification and expanding professional reskilling programs.",
        },
      },
      {
        title: { es: "Técnica e Infraestructura", en: "Technical and Infrastructure" },
        icon: "Server",
        content: {
          es: "Chile destaca por su conectividad: 88,3% de uso de internet, 100% de acceso a electricidad, cobertura móvil del 98% y una de las velocidades de banda ancha más rápidas de la región (229 Mbps). El país cuenta con 15 centros de datos y suscripciones móviles que alcanzan el 107% de la población. La oportunidad está en expandir la capacidad de centros de datos, participar en organismos internacionales de estandarización de IA y cerrar las brechas de conectividad entre zonas urbanas y rurales.",
          en: "Chile stands out for its connectivity: 88.3% internet usage, 100% electricity access, 98% mobile coverage and one of the fastest broadband speeds in the region (229 Mbps). The country has 15 data centers and mobile subscriptions reaching 107% of the population. The opportunity lies in expanding data center capacity, participating in international AI standardization bodies and closing urban-rural connectivity gaps.",
        },
      },
    ],
    downloadUrl: "https://unesdoc.unesco.org/ark:/48223/pf0000387216",
  },
  {
    id: "innovacion-construccion",
    title: {
      es: "Análisis de Prácticas de Innovación en la Construcción",
      en: "Innovation Practices Analysis in Construction",
    },
    subtitle: {
      es: "Diagnóstico de innovación del sector de la construcción con indicadores medibles",
      en: "Construction sector innovation assessment with measurable indicators",
    },
    description: {
      es: "Diagnóstico de las prácticas de innovación del sector de la construcción, desarrollando indicadores medibles y recomendaciones accionables. El estudio permite a las empresas del rubro compararse y priorizar sus esfuerzos de innovación.",
      en: "Assessment of innovation practices in the construction sector, developing measurable indicators and actionable recommendations. The study enables companies in the industry to benchmark themselves and prioritize their innovation efforts.",
    },
    client: "CChC",
    year: 2023,
    region: "Chile",
    type: "research",
    status: "completed",
  },
  {
    id: "voz-nuevos-votantes",
    title: {
      es: "La Voz de los Nuevos Votantes",
      en: "The Voice of New Voters",
    },
    subtitle: {
      es: "Análisis con procesamiento de lenguaje natural de deliberaciones del proceso constitucional",
      en: "NLP analysis of deliberations from the constitutional process",
    },
    description: {
      es: "Desarrollo de metodología de procesamiento de lenguaje natural para analizar las deliberaciones de nuevos votantes en el proceso constitucional. Transformamos grandes volúmenes de conversaciones en hallazgos accionables sobre preferencias ciudadanas.",
      en: "Development of natural language processing methodology to analyze new voters' deliberations in the constitutional process. We transformed large volumes of conversations into actionable insights on citizen preferences.",
    },
    client: "UNAB",
    year: 2023,
    region: "Chile",
    type: "consulting",
    status: "completed",
    externalUrl: "https://ipp.unab.cl",
  },
  {
    id: "indice-municipal-ia",
    title: {
      es: "Índice Municipal de Inteligencia Artificial",
      en: "Municipal Artificial Intelligence Index",
    },
    subtitle: {
      es: "Primer instrumento para medir la preparación de los municipios chilenos para adoptar IA",
      en: "First instrument to measure Chilean municipalities' readiness to adopt AI",
    },
    description: {
      es: "Diseñamos el primer instrumento para medir la preparación de los municipios chilenos para adoptar IA, identificando brechas y oportunidades concretas. Una herramienta pionera que permite priorizar inversiones en transformación digital local.",
      en: "We designed the first instrument to measure Chilean municipalities' readiness to adopt AI, identifying concrete gaps and opportunities. A pioneering tool that enables prioritizing investments in local digital transformation.",
    },
    client: "Municipalidad de Las Condes",
    year: 2023,
    region: "Chile",
    type: "research",
    status: "completed",
  },
  {
    id: "sesgos-ia-apec",
    title: {
      es: "Estudio sobre Sesgos Dañinos de Sistemas de IA",
      en: "Study on Harmful Biases in AI Systems",
    },
    subtitle: {
      es: "Investigación para APEC sobre riesgos de sesgo en IA con marcos de mitigación",
      en: "APEC research on AI bias risks with mitigation frameworks",
    },
    description: {
      es: "Investigación para APEC sobre sesgos dañinos en sistemas de inteligencia artificial, desarrollada en colaboración con CENIA. El estudio identifica riesgos concretos y propone marcos de mitigación aplicables a las economías del Asia-Pacífico.",
      en: "Research for APEC on harmful biases in artificial intelligence systems, developed in collaboration with CENIA. The study identifies concrete risks and proposes mitigation frameworks applicable to Asia-Pacific economies.",
    },
    client: "Ministerio de Economía",
    year: 2023,
    region: "Global",
    type: "research",
    status: "completed",
    externalUrl: "https://www.apec.org",
  },
  {
    id: "ilia-2023",
    title: {
      es: "Índice Latinoamericano de Inteligencia Artificial 2023",
      en: "Latin American Artificial Intelligence Index 2023",
    },
    subtitle: {
      es: "Primer instrumento de referencia regional para medir el avance de los países en IA",
      en: "First regional benchmark instrument to measure countries' progress in AI",
    },
    description: {
      es: "Diseñamos la metodología y lideramos el levantamiento de datos del primer Índice Latinoamericano de IA, con apoyo de CAF y UNESCO. Un instrumento de referencia regional que permite comparar el avance de los países en adopción y gobernanza de IA.",
      en: "We designed the methodology and led the data collection for the first Latin American AI Index, with CAF and UNESCO support. A regional benchmark instrument that enables comparing countries' progress in AI adoption and governance.",
    },
    client: "CENIA",
    year: 2023,
    region: "Latinoamérica",
    type: "research",
    status: "completed",
    featuredStat: { value: "1°", label: { es: "Índice de IA en Latam", en: "AI Index in LatAm" } },
    externalUrl: "https://indicelatam.cl/",
  },
  {
    id: "equidad-genero-movilidad",
    title: {
      es: "Jornada Participativa sobre Equidad de Género y Movilidad",
      en: "Participatory Workshop on Gender Equity and Mobility",
    },
    subtitle: {
      es: "Análisis automatizado con IA de deliberaciones sobre transporte inclusivo",
      en: "Automated AI analysis of deliberations on inclusive transportation",
    },
    description: {
      es: "Diseño de metodología deliberativa y análisis automatizado con IA de una jornada participativa sobre equidad de género y movilidad. Convertimos las opiniones de los participantes en hallazgos estructurados para informar políticas de transporte inclusivo.",
      en: "Design of deliberative methodology and automated AI analysis of a participatory workshop on gender equity and mobility. We transformed participant opinions into structured findings to inform inclusive transportation policies.",
    },
    client: "UNAB",
    year: 2023,
    region: "Chile",
    type: "consulting",
    status: "completed",
    externalUrl: "https://ipp.unab.cl",
  },
  // ── 2022–2023 ──────────────────────────────────────────────────
  {
    id: "participacion-ciudadana-lac",
    title: {
      es: "Apoyo en Procesos de Participación Ciudadana en ALC",
      en: "Citizen Participation Support in LAC",
    },
    subtitle: {
      es: "Diseño y facilitación de participación ciudadana para estrategias nacionales de IA",
      en: "Design and facilitation of citizen participation for national AI strategies",
    },
    description: {
      es: "Diseñamos y facilitamos los procesos de participación ciudadana para la creación de la Estrategia Nacional de IA de República Dominicana y la actualización de la de Uruguay. Cientos de actores aportaron a políticas que reflejan las necesidades reales de cada país.",
      en: "We designed and facilitated citizen participation processes for the creation of the Dominican Republic's National AI Strategy and Uruguay's strategy update. Hundreds of stakeholders contributed to policies that reflect each country's real needs.",
    },
    client: "CAF",
    year: 2022,
    yearEnd: 2023,
    region: "Rep. Dominicana y Uruguay",
    type: "consulting",
    status: "completed",
    externalUrl: "https://scioteca.caf.com",
  },
  // ── 2022 ───────────────────────────────────────────────────────
  {
    id: "climate-tech-lac",
    title: {
      es: "Análisis de Emprendimientos en Climate Tech en ALC",
      en: "Climate Tech Startups Analysis in LAC",
    },
    subtitle: {
      es: "Marco conceptual y benchmark del ecosistema de emprendimiento climático regional",
      en: "Conceptual framework and benchmark of the regional climate entrepreneurship ecosystem",
    },
    description: {
      es: "Definición del marco conceptual de Climate Tech para América Latina y benchmark del ecosistema de emprendimiento en la región. Entregamos al BID un diagnóstico que identifica oportunidades de inversión y brechas del ecosistema climático regional.",
      en: "Definition of the Climate Tech conceptual framework for Latin America and benchmark of the regional entrepreneurship ecosystem. We delivered to the IDB an assessment identifying investment opportunities and gaps in the regional climate ecosystem.",
    },
    client: "BID",
    year: 2022,
    region: "Latinoamérica",
    type: "research",
    status: "completed",
  },
  {
    id: "analisis-participacion-unab",
    title: {
      es: "Análisis Automático de Participación",
      en: "Automated Participation Analysis",
    },
    subtitle: {
      es: "Metodología de IA para procesar deliberaciones ciudadanas en tiempo real",
      en: "AI methodology to process citizen deliberations in real time",
    },
    description: {
      es: "Desarrollo de metodología y análisis automatizado con IA de sesiones de participación ciudadana, entregando un panel de visualizaciones comparativas. Permitimos a los investigadores procesar grandes volúmenes de deliberaciones en tiempo real.",
      en: "Development of methodology and automated AI analysis of citizen participation sessions, delivering a comparative visualization dashboard. We enabled researchers to process large volumes of deliberations in real time.",
    },
    client: "UNAB",
    year: 2022,
    region: "Chile",
    type: "consulting",
    status: "completed",
  },
];

export const reports: Report[] = [
  {
    slug: "ai-sprinters-chile",
    title: {
      es: "AI Sprinters: Una oportunidad histórica para Chile",
      en: "AI Sprinters: A Historic Opportunity for Chile",
    },
    subtitle: {
      es: "Inteligencia artificial para desatar el potencial económico de Chile, parte de la serie AI Digital Sprinters de Google",
      en: "Artificial intelligence to unlock Chile's economic potential, part of Google's AI Digital Sprinters series",
    },
    client: "Google",
    year: 2025,
    featuredStat: {
      value: "10,9–20%",
      label: { es: "Del PIB de Chile podría representar el impacto económico de la IA", en: "Of Chile's GDP could represent AI's economic impact" },
    },
    executiveSummary: {
      es: "Al analizar la matriz productiva de Chile, se estima que la IA podría generar entre USD 36.432 y USD 67.224 millones anuales, equivalentes al 10,9% y 20% del PIB. Los sectores con mayor impacto proyectado son las actividades financieras y de seguros, el comercio y la manufactura, que en conjunto representarían más del 65% del efecto económico total. Sin embargo, según datos de PwC, solo el 5% de las empresas chilenas ha integrado IA en sus operaciones. Este reporte es parte de la serie IA Digital Sprinters de Google.",
      en: "Analyzing Chile's productive matrix, AI could generate between USD 36.432 and USD 67.224 billion annually, equivalent to 10.9% and 20% of GDP. The sectors with the highest projected impact are financial activities and insurance, commerce and manufacturing, which together would represent more than 65% of the total economic effect. However, according to PwC data, only 5% of Chilean companies have integrated AI into their operations. This report is part of Google's AI Digital Sprinters series.",
    },
    keyStats: [
      { value: "10,9–20%", label: { es: "Impacto potencial en PIB", en: "Potential GDP Impact" } },
      { value: "$36–67B", label: { es: "USD millones anuales", en: "USD Billion Annual" } },
      { value: "5%", label: { es: "Empresas con IA adoptada", en: "Companies with AI Adopted" } },
      { value: "45", label: { es: "Centros de datos en Chile", en: "Data Centers in Chile" } },
    ],
    sectors: [
      { name: { es: "Servicios Financieros y Seguros", en: "Financial Services & Insurance" }, percentage: 38 },
      { name: { es: "Comercio", en: "Commerce" }, percentage: 20 },
      { name: { es: "Manufactura", en: "Manufacturing" }, percentage: 10 },
      { name: { es: "Minería", en: "Mining" }, percentage: 6 },
      { name: { es: "Agricultura", en: "Agriculture" }, percentage: 4 },
      { name: { es: "Electricidad y Gas", en: "Electricity & Gas" }, percentage: 4 },
    ],
    pillars: [
      {
        title: { es: "Políticas Públicas Habilitantes", en: "Enabling Public Policies" },
        icon: "Scale",
        content: {
          es: "Chile ha tomado un rol de liderazgo en el diseño de políticas para impulsar la IA. Publicó su Política Nacional de IA en 2021 y la actualizó en 2024. Adoptó los principios de IA de la OCDE y fue el primero en usar la Metodología RAM de UNESCO. Recomendaciones: promover un enfoque regulatorio equilibrado y basado en evidencia, priorizar la fiscalización sectorial y aclarar el marco legal para minería de datos.",
          en: "Chile has taken a leadership role in designing policies to promote AI. It published its National AI Policy in 2021 and updated it in 2024. It adopted the OECD AI principles and was the first to use UNESCO's RAM Methodology. Recommendations: promote a balanced, evidence-based regulatory approach, prioritize sectoral oversight, and clarify the legal framework for data mining.",
        },
      },
      {
        title: { es: "Infraestructura", en: "Infrastructure" },
        icon: "Server",
        content: {
          es: "Chile se perfila como un nodo digital clave en Hispanoamérica con 45 centros de datos (incluido el de Google en Quilicura) y cables submarinos como Humboldt y Curie. El 96,5% de los hogares tiene acceso a internet y posee las redes móviles más rápidas de la región. Recomendaciones: alinear inversiones con desarrollo sostenible, expandir adopción Cloud First y crear plataformas de datos abiertos.",
          en: "Chile is positioning itself as a key digital node in Hispanic America with 45 data centers (including Google's in Quilicura) and submarine cables like Humboldt and Curie. 96.5% of households have internet access and it has the fastest mobile networks in the region. Recommendations: align investments with sustainable development, expand Cloud First adoption, and create open data platforms.",
        },
      },
      {
        title: { es: "Fomento a la Innovación", en: "Innovation Promotion" },
        icon: "Lightbulb",
        content: {
          es: "Chile necesita conectar mejor la academia, la industria y el gobierno para traducir conocimiento en soluciones concretas de IA. El ecosistema emprendedor es dinámico pero se requiere mayor financiamiento y colaboración entre actores del ecosistema para escalar soluciones de IA.",
          en: "Chile needs to better connect academia, industry, and government to translate knowledge into concrete AI solutions. The entrepreneurial ecosystem is dynamic but more funding and collaboration between ecosystem actors is needed to scale AI solutions.",
        },
      },
      {
        title: { es: "Fortalecimiento del Capital Humano", en: "Human Capital Development" },
        icon: "GraduationCap",
        content: {
          es: "El desarrollo del capital humano es el pilar que sostiene la transformación digital y la adopción de IA. Fortalecer la formación en habilidades digitales, integrar la IA en el sistema educativo y promover programas de capacitación continua permitirá a las personas adaptarse a los cambios del mercado laboral y liderar la creación de nuevas oportunidades.",
          en: "Human capital development is the pillar that sustains digital transformation and AI adoption. Strengthening digital skills training, integrating AI into the educational system, and promoting continuous training programs will enable people to adapt to labor market changes and lead the creation of new opportunities.",
        },
      },
    ],
    downloadUrl: "/reports/ai-sprinters-chile.pdf",
  },
  {
    slug: "ai-sprinters-mexico",
    title: {
      es: "AI Sprinters: Desbloqueando el potencial de la IA en México",
      en: "AI Sprinters: Unlocking AI's Potential in Mexico",
    },
    subtitle: {
      es: "El impacto económico de la inteligencia artificial en México, parte de la serie AI Digital Sprinters de Google",
      en: "The economic impact of artificial intelligence in Mexico, part of Google's AI Digital Sprinters series",
    },
    client: "Google",
    year: 2025,
    featuredStat: {
      value: "3–5,6%",
      label: { es: "Del PIB podría provenir del crecimiento impulsado por IA", en: "Of GDP could come from AI-driven growth" },
    },
    executiveSummary: {
      es: "La inteligencia artificial está redefiniendo el panorama económico global y, si México aprovecha su potencial, puede aumentar entre un 3% y un 5,6% el PIB. Se estima que México podría generar entre USD $54.770 y $102.525 millones anuales de crecimiento económico, concentrándose en sectores clave como la manufactura, el comercio minorista y los servicios financieros. Sin embargo, la adopción de IA sigue siendo limitada, con solo un 7,3% de las empresas utilizando herramientas tecnológicas avanzadas. La combinación del nearshoring y la IA presenta una oportunidad única para el crecimiento económico del país. Este reporte es parte de la serie IA Digital Sprinters de Google.",
      en: "Artificial intelligence is reshaping the global economic landscape and, if Mexico taps into its potential, it could boost GDP by 3% to 5.6%. Mexico could generate between USD $54.8 and $102.5 billion in annual economic growth, concentrated in key sectors such as manufacturing, retail and financial services. However, AI adoption remains limited, with only 7.3% of companies using advanced technological tools. The combination of nearshoring and AI presents a unique opportunity for the country's economic growth. This report is part of Google's AI Digital Sprinters series.",
    },
    keyStats: [
      { value: "3–5,6%", label: { es: "Impacto potencial en PIB", en: "Potential GDP Impact" } },
      { value: "$55–103B", label: { es: "USD millones anuales", en: "USD Billion Annual" } },
      { value: "7,3%", label: { es: "Adopción de tecnologías avanzadas", en: "Advanced Tech Adoption Rate" } },
      { value: "362", label: { es: "Empresas activas en IA", en: "Active AI Companies" } },
    ],
    sectors: [
      { name: { es: "Manufactura", en: "Manufacturing" }, percentage: 34 },
      { name: { es: "Comercio Minorista", en: "Retail" }, percentage: 19 },
      { name: { es: "Servicios Financieros y Seguros", en: "Financial Services & Insurance" }, percentage: 14 },
      { name: { es: "Comercio al por Mayor", en: "Wholesale" }, percentage: 12 },
      { name: { es: "Corporativos", en: "Corporate" }, percentage: 3 },
      { name: { es: "Transporte y Almacenamiento", en: "Transport & Storage" }, percentage: 3 },
    ],
    pillars: [
      {
        title: { es: "Políticas Públicas Efectivas", en: "Effective Public Policies" },
        icon: "Scale",
        content: {
          es: "México lanzó la primera estrategia de IA en América Latina en 2018, seguida por la Agenda Nacional de Inteligencia Artificial en 2020, pero ninguna fue plenamente implementada. Se requiere crear una estrategia nacional de IA con visión a largo plazo que trascienda los ciclos administrativos, diseñar un marco regulatorio equilibrado que fomente el uso ético y responsable sin restricciones excesivas, y promover la colaboración estratégica entre gobierno, industria y academia.",
          en: "Mexico launched the first AI strategy in Latin America in 2018, followed by the National Artificial Intelligence Agenda in 2020, but neither was fully implemented. The country needs to create a national AI strategy with a long-term vision that transcends administrative cycles, design a balanced regulatory framework that promotes ethical and responsible use without excessive restrictions, and foster strategic collaboration among government, industry and academia.",
        },
      },
      {
        title: { es: "Infraestructura Tecnológica Sólida", en: "Solid Technological Infrastructure" },
        icon: "Server",
        content: {
          es: "En el Índice Latinoamericano de Inteligencia Artificial (ILIA) de 2024, México se posicionó cuarto en factores habilitantes, con alta penetración de redes 5G y capacidad de cómputo. Sin embargo, la distribución de la infraestructura es desigual entre estados y solo el 78,6% de la población mayor de 6 años tenía acceso a internet en 2022. Recomendaciones: expandir fibra óptica, 5G e internet satelital; reforzar el rol de INEGI en datos abiertos; y facilitar el acceso de mipymes a infraestructura tecnológica y servicios en la nube.",
          en: "In the 2024 Latin American Artificial Intelligence Index (ILIA), Mexico ranked fourth in enabling factors, with high 5G network penetration and computing capacity. However, infrastructure distribution is uneven across states and only 78.6% of the population over 6 had internet access in 2022. Recommendations: expand fiber optics, 5G and satellite internet; strengthen INEGI's role in open data; and facilitate SME access to technological infrastructure and cloud services.",
        },
      },
      {
        title: { es: "Innovación Tecnológica", en: "Technological Innovation" },
        icon: "Lightbulb",
        content: {
          es: "México ocupa el cuarto lugar regional en investigación, adopción y desarrollo de IA según el ILIA, con 4,22 patentes de IA por millón de habitantes (líder regional) y 362 empresas activas desarrollando IA. El ecosistema emprendedor es dinámico pero se requiere mayor conexión entre la academia, la industria y el gobierno. Recomendaciones: fomentar laboratorios estatales de IA en universidades, crear fondos de financiamiento para startups de base tecnológica, y fomentar una cultura de innovación en todos los niveles.",
          en: "Mexico ranks fourth regionally in AI research, adoption and development according to ILIA, with 4.22 AI patents per million inhabitants (regional leader) and 362 active companies developing AI. The entrepreneurial ecosystem is dynamic but stronger connections between academia, industry and government are needed. Recommendations: establish state AI laboratories at universities, create funding for technology-based startups, and foster a culture of innovation at all levels.",
        },
      },
      {
        title: { es: "Personas", en: "People" },
        icon: "GraduationCap",
        content: {
          es: "México tiene elementos positivos como la incorporación de programas de IA en el sistema educativo y un ecosistema de investigación maduro, pero los niveles de alfabetización digital presentan brechas geográficas significativas. Solo el 7,3% de las empresas utilizan herramientas tecnológicas avanzadas. Recomendaciones: implementar programas de formación en habilidades digitales y en IA en todos los niveles educativos, desarrollar estrategias de divulgación pública sobre los beneficios y riesgos de la IA, y organizar talleres prácticos para mipymes y el sector público.",
          en: "Mexico has positive elements such as the incorporation of AI programs in the educational system and a mature research ecosystem, but digital literacy levels show significant geographic gaps. Only 7.3% of companies use advanced technological tools. Recommendations: implement digital and AI skills training programs at all educational levels, develop public outreach strategies about AI's benefits and risks, and organize practical workshops for SMEs and the public sector.",
        },
      },
    ],
    downloadUrl: "/reports/ai-sprinters-mexico-es.pdf",
  },
  {
    slug: "ai-sprinters-argentina",
    title: {
      es: "AI Sprinters: Una oportunidad histórica para Argentina",
      en: "AI Sprinters: A Historic Opportunity for Argentina",
    },
    subtitle: {
      es: "Inteligencia artificial para desatar el potencial económico de Argentina, parte de la serie AI Digital Sprinters de Google",
      en: "Artificial intelligence to unlock Argentina's economic potential, part of Google's AI Digital Sprinters series",
    },
    client: "Google",
    year: 2026,
    featuredStat: {
      value: "3,7–6,7%",
      label: { es: "Del PIB de Argentina podría representar el impacto económico de la IA", en: "Of Argentina's GDP could represent AI's economic impact" },
    },
    executiveSummary: {
      es: "Como la tercera economía más grande de Hispanoamérica, Argentina está bien posicionada para beneficiarse del potencial de la IA. Se estima que la IA podría contribuir entre USD 23.721 y USD 43.491 millones anuales a la economía, equivalentes al 3,7% y 6,7% del PIB. Los sectores con mayor impacto proyectado son la manufactura, el comercio, las actividades inmobiliarias y la agricultura. Sin embargo, la tasa actual de adopción de IA sigue siendo baja (alrededor del 4,2%), lo que reduce el impacto potencial a entre USD 987 y USD 1.809 millones anuales. Esta brecha evidencia la importancia de fomentar la adopción de IA para aprovechar su potencial como motor de crecimiento económico. Este reporte es parte de la serie IA Digital Sprinters de Google.",
      en: "As Hispanic America's third-largest economy, Argentina is well-positioned to benefit from AI's potential. AI could contribute between USD 23.721 and USD 43.491 billion annually to the economy, equivalent to 3.7% and 6.7% of GDP. The sectors with the highest projected impact are manufacturing, trade, real estate and agriculture. However, the current AI adoption rate remains low (around 4.2%), reducing the potential impact to between USD 0.987 and USD 1.8 billion annually. This gap underscores the importance of promoting AI adoption to leverage its potential as an engine of economic growth. This report is part of Google's AI Digital Sprinters series.",
    },
    keyStats: [
      { value: "3,7–6,7%", label: { es: "Impacto potencial en PIB", en: "Potential GDP Impact" } },
      { value: "$24–43B", label: { es: "USD millones anuales", en: "USD Billion Annual" } },
      { value: "4,2%", label: { es: "Tasa de adopción de IA", en: "AI Adoption Rate" } },
      { value: "14", label: { es: "Centros de datos", en: "Data Centers" } },
    ],
    sectors: [
      { name: { es: "Manufactura", en: "Manufacturing" }, percentage: 30 },
      { name: { es: "Comercio", en: "Commerce" }, percentage: 15 },
      { name: { es: "Actividades Inmobiliarias", en: "Real Estate" }, percentage: 8 },
      { name: { es: "Agricultura, Ganadería y Pesca", en: "Agriculture, Forestry & Fishing" }, percentage: 6 },
      { name: { es: "Salud y Asistencia Social", en: "Health & Social Work" }, percentage: 6 },
      { name: { es: "Enseñanza", en: "Education" }, percentage: 5 },
    ],
    pillars: [
      {
        title: { es: "Políticas Públicas Habilitantes", en: "Enabling Public Policies" },
        icon: "Scale",
        content: {
          es: "Argentina presentó su Plan Nacional de IA en 2019 y el actual gobierno impulsa el desarrollo de la IA con la visión de convertir al país en un hub global. En el Congreso se han presentado más de 40 proyectos de ley relacionados con IA, aunque la mayoría aún carece de consenso. Recomendaciones: consolidar una estrategia nacional de IA de largo plazo con amplio consenso multisectorial, adoptar principios y estándares internacionales (ISO/IEC, IEEE) y revisar las leyes existentes y los proyectos en curso para avanzar hacia un marco normativo único y coherente.",
          en: "Argentina released its National AI Plan in 2019, and the current government is promoting AI development with the vision of turning the country into a global hub. More than 40 AI-related bills have been introduced in Congress, although most still lack consensus. Recommendations: consolidate a long-term national AI strategy with broad multi-sector consensus, adopt international principles and standards (ISO/IEC, IEEE), and review existing laws and pending bills to move toward a single, coherent regulatory framework.",
        },
      },
      {
        title: { es: "Infraestructura", en: "Infrastructure" },
        icon: "Server",
        content: {
          es: "La penetración de internet en hogares subió del 82,9% en 2019 al 93,4% en 2023, y en 2025 el país superó el promedio de Hispanoamérica en velocidad de descarga móvil (61,01 Mbps). Argentina cuenta con cinco clústeres de alto desempeño (HPC) y 14 centros de datos, y en diciembre de 2024 presentó un plan nuclear nacional que busca posicionar al país como líder en energía nuclear e IA. Recomendaciones: fomentar la inversión en infraestructura digital y acceso a capacidad de cómputo, promover políticas de Cloud First y mejorar la interoperabilidad de los sistemas, especialmente en salud y educación.",
          en: "Household internet penetration rose from 82.9% in 2019 to 93.4% in 2023, and in 2025 the country surpassed the Hispanic American average in mobile download speed (61.01 Mbps). Argentina has five high-performance computing (HPC) clusters and 14 data centers, and in December 2024 it unveiled a national nuclear plan aiming to position the country as a leader in nuclear energy and AI. Recommendations: promote investment in digital infrastructure and access to computing capacity, advance Cloud First policies, and improve system interoperability, especially in health and education.",
        },
      },
      {
        title: { es: "Fomento a la Innovación", en: "Innovation Promotion" },
        icon: "Lightbulb",
        content: {
          es: "Argentina invierte cerca del 0,6% de su PIB en I+D y cuenta con un ecosistema emprendedor dinámico: 38 empresas de IA han concretado 87 rondas de inversión por USD 7.135 millones, y el sector agtech destaca con 165 empresas que aplican IA. Sin embargo, solo el 20,4% de las empresas ya utiliza IA, aunque un 44,4% planea adoptarla en el corto plazo. Recomendaciones: impulsar la adopción de IA en sectores productivos estratégicos como agricultura, manufactura, energía y salud, acelerar el uso de IA en empresas estatales (YPF, Arsat, INVAP) y crear centros de excelencia en IA con foco sectorial.",
          en: "Argentina invests around 0.6% of its GDP in R&D and has a dynamic entrepreneurial ecosystem: 38 AI companies have closed 87 investment rounds totaling USD 7.135 billion, and the agtech sector stands out with 165 companies applying AI. However, only 20.4% of companies already use AI, although 44.4% plan to adopt it in the short term. Recommendations: promote AI adoption in strategic productive sectors such as agriculture, manufacturing, energy and health, accelerate AI use in state-owned companies (YPF, Arsat, INVAP), and create AI centers of excellence with a sectoral focus.",
        },
      },
      {
        title: { es: "Fortalecimiento del Capital Humano", en: "Human Capital Development" },
        icon: "GraduationCap",
        content: {
          es: "La concentración de talento en IA se ha duplicado en ocho años y Argentina supera el promedio regional en formación científica temprana y posgrados especializados, con una participación femenina del 24,8% en la investigación en IA. No obstante, el país registró un flujo neto negativo de expertos en IA en 2023, lo que evidencia el desafío de retener talento. Recomendaciones: conectar al talento argentino en el exterior con redes globales mediante mentorías y programas de retorno, formar formadores en habilidades aplicadas de IA y desarrollar sistemas nacionales de certificación de habilidades en IA.",
          en: "AI talent concentration has doubled in eight years, and Argentina surpasses the regional average in early scientific education and specialized postgraduate training, with women representing 24.8% of AI research. However, the country recorded a net negative flow of AI experts in 2023, highlighting the challenge of retaining talent. Recommendations: connect Argentine talent abroad with global networks through mentorship and return programs, train trainers in applied AI skills, and develop national AI skills certification systems.",
        },
      },
    ],
    downloadUrl: "/reports/ai-sprinters-argentina-es.pdf",
  },
];

export const aboutContent = {
  es: {
    title: "¿Quiénes somos?",
    paragraphs: [
      "Foresight es una consultora especializada en inteligencia artificial, innovación y políticas públicas. Fue fundada por un equipo interdisciplinario que lideró políticas de innovación y economía digital desde la Subsecretaría de Economía de Chile, y que decidió seguir aplicando esa experiencia al servicio de organizaciones públicas y privadas a nivel global.",
      "Conocemos el sector público por dentro: hemos diseñado políticas que se implementaron, asesorado organismos internacionales como UNESCO y el BID, y acompañado a empresas en la adopción estratégica de inteligencia artificial. Entendemos los tiempos, las restricciones y las oportunidades reales de quienes toman decisiones en tecnología e innovación.",
      "Hemos desarrollado más de 20 proyectos para organizaciones como UNESCO, Google, el BID, CAF y gobiernos de la región. Nuestro trabajo abarca desde evaluaciones de preparación en IA para países, diseño de estrategias nacionales de inteligencia artificial y políticas públicas de innovación, hasta la adopción de IA en empresas y la formación de capital humano en tecnología.",
    ],
    mission: {
      title: "Misión",
      text: "Acelerar la adopción responsable de la inteligencia artificial, cerrando la brecha entre el potencial de la tecnología y la capacidad de gobiernos y organizaciones para aprovecharla.",
    },
    vision: {
      title: "Visión",
      text: "Un mundo donde la inteligencia artificial sea una herramienta de desarrollo inclusivo, y donde cada decisión estratégica sobre tecnología se tome con la mejor evidencia disponible.",
    },
    teamTitle: "Nuestro Equipo",
  },
  en: {
    title: "About Us",
    paragraphs: [
      "Foresight is a consultancy specialized in artificial intelligence, innovation, and public policy. It was founded by an interdisciplinary team that led innovation and digital economy policies at Chile's Undersecretariat of Economy, and decided to continue applying that experience to serve public and private organizations globally.",
      "We know the public sector from the inside: we have designed policies that were implemented, advised international organizations such as UNESCO and the IDB, and supported companies in the strategic adoption of artificial intelligence. We understand the timelines, constraints, and real opportunities faced by decision-makers in technology and innovation.",
      "We have delivered over 20 projects for organizations such as UNESCO, Google, the IDB, CAF, and governments across the region. Our work spans from AI readiness assessments for countries, design of national AI strategies and innovation public policies, to AI adoption in companies and technology-focused human capital development.",
    ],
    mission: {
      title: "Mission",
      text: "To accelerate the responsible adoption of artificial intelligence, bridging the gap between the potential of technology and the ability of governments and organizations to harness it.",
    },
    vision: {
      title: "Vision",
      text: "A world where artificial intelligence is a tool for inclusive development, and where every strategic decision about technology is made with the best available evidence.",
    },
    teamTitle: "Our Team",
  },
};

export const team: TeamMember[] = [
  {
    id: "julio-pertuze",
    name: "Julio Pertuzé",
    role: { es: "", en: "" },
    bio: {
      es: "Profesor UC, PhD MIT y exsubsecretario de Economía. Experto en innovación y gobernanza de tecnologías emergentes.",
      en: "UC Professor, MIT PhD, and former Undersecretary of Economy. Expert in innovation and governance of emerging technologies.",
    },
    image: "/images/team/julio.jpeg",
    linkedin: "https://www.linkedin.com/in/julio-pertuzé-1458124/",
    googleScholar: "https://scholar.google.com/citations?user=AKfqW_EAAAAJ&hl=en&oi=ao",
  },
  {
    id: "jose-guridi",
    name: "José A. Guridi",
    role: { es: "", en: "" },
    bio: {
      es: "PhD (c) en Ciencias de la Información, Cornell. Experto en gobernanza y adopción de IA en instituciones públicas y privadas.",
      en: "PhD candidate in Information Science, Cornell. Expert in AI governance and adoption in public and private institutions.",
    },
    image: "/images/team/jose-guridi.png",
    linkedin: "https://www.linkedin.com/in/jaguridi/",
    googleScholar: "https://scholar.google.com/citations?user=P5xFVC4AAAAJ&hl=en&oi=ao",
  },
  {
    id: "sandra-peralta",
    name: "Sandra Peralta",
    role: { es: "", en: "" },
    bio: {
      es: "Economista especializada en inteligencia artificial, economía digital y políticas públicas. Cofundadora de Foresight.",
      en: "Economist specialized in artificial intelligence, digital economy, and public policy. Co-founder of Foresight.",
    },
    image: "/images/team/sandra.jpeg",
    linkedin: "https://www.linkedin.com/in/sandra-peralta-alvarez-23580a252/",
  },
  {
    id: "sebastian-adasme",
    name: "Sebastián Adasme",
    role: { es: "", en: "" },
    bio: {
      es: "MSc Political Economy (KCL). Jefe de Estudios CENIA, cofundador de Foresight. Consultor para CEPAL, UNESCO, BID y gobiernos.",
      en: "MSc Political Economy (KCL). Head of Research at CENIA, co-founder of Foresight. Consultant for ECLAC, UNESCO, IDB, and governments.",
    },
    image: "/images/team/Sebastián Adasme.jpg",
    linkedin: "https://www.linkedin.com/in/sebastián-adasme-toro-18465b201/",
  },
  {
    id: "pilar-trivelli",
    name: "Pilar Trivelli",
    role: { es: "", en: "" },
    bio: {
      es: "Abogada U. de Chile, MSc NYU. Trabajó en el Ministerio de Economía e INAPI. Experta en regulación y propiedad intelectual.",
      en: "Lawyer, U. de Chile, MSc NYU. Worked at the Ministry of Economy and INAPI. Expert in regulation and intellectual property.",
    },
    image: "/images/team/pilar.jpeg",
    linkedin: "https://www.linkedin.com/in/pilar-trivelli-98823b69/",
  },
  {
    id: "nicole-rabba",
    name: "Nicole Rabba",
    role: { es: "", en: "" },
    bio: {
      es: "Economista U. de Chile, Máster U. Complutense de Madrid. Trabajó en el Ministerio de Economía, País Digital y CIEC.",
      en: "Economist, U. de Chile. Master's, U. Complutense de Madrid. Worked at the Ministry of Economy, País Digital, and CIEC.",
    },
    image: "/images/team/nico.jpeg",
    linkedin: "https://www.linkedin.com/in/prabba/",
  },
];

export const contactContent = {
  es: {
    title: "Contacto",
    subtitle: "¿Quieres integrar IA en tu organización? Conversemos",
    nameLabel: "Tu nombre",
    emailLabel: "Tu email",
    organizationLabel: "Tu organización",
    messageLabel: "Cuéntanos sobre tu proyecto o consulta",
    submit: "Enviar mensaje",
    directContact: "Contacto directo",
    locationLabel: "Ubicación",
    location: "Santiago, Chile",
  },
  en: {
    title: "Contact",
    subtitle: "Want to integrate AI into your organization? Let's talk",
    nameLabel: "Your name",
    emailLabel: "Your email",
    organizationLabel: "Your organization",
    messageLabel: "Tell us about your project or inquiry",
    submit: "Send message",
    directContact: "Direct contact",
    locationLabel: "Location",
    location: "Santiago, Chile",
  },
};

export const newsItems: NewsItem[] = [
  {
    id: "ram-centroamerica-2025",
    title: {
      es: "Inicio de evaluaciones RAM en El Salvador, Honduras y Guatemala",
      en: "Launch of RAM assessments in El Salvador, Honduras and Guatemala",
    },
    summary: {
      es: "Foresight inicia la implementación de la metodología RAM de UNESCO en tres nuevos países de Centroamérica, expandiendo nuestro trabajo a 10+ países evaluados.",
      en: "Foresight launches the implementation of UNESCO's RAM methodology in three new Central American countries, expanding our work to 10+ countries assessed.",
    },
    date: "2025-09-15",
    category: "alianza",
  },
  {
    id: "ai-sprinters-mexico-2025",
    title: {
      es: "Lanzamiento del reporte AI Sprinters México",
      en: "Launch of AI Sprinters Mexico report",
    },
    summary: {
      es: "Publicamos junto a Google el estudio de impacto económico de la IA en México, estimando un potencial de crecimiento de USD $55–103 mil millones anuales.",
      en: "We published with Google the AI economic impact study for Mexico, estimating a growth potential of USD $55–103 billion annually.",
    },
    date: "2025-06-01",
    category: "publicacion",
  },
  {
    id: "google-impacto-ia-chile",
    title: {
      es: "Estudio pionero: la IA podría aportar hasta un 20% al PIB de Chile",
      en: "Pioneering study: AI could contribute up to 20% to Chile's GDP",
    },
    summary: {
      es: "Como parte de la serie AI Sprinters de Google, estimamos que la IA podría generar entre USD 36.000 y USD 67.000 millones anuales en Chile, transformando sectores como finanzas, comercio y manufactura.",
      en: "As part of Google's AI Sprinters series, we estimated AI could generate between USD 36 and USD 67 billion annually in Chile, transforming sectors like finance, commerce and manufacturing.",
    },
    date: "2025-03-10",
    category: "publicacion",
  },
  {
    id: "politica-ia-lascondes",
    title: {
      es: "Primera Política Municipal de IA en Chile",
      en: "First Municipal AI Policy in Chile",
    },
    summary: {
      es: "En colaboración con CENIA, desarrollamos la primera política municipal de inteligencia artificial del país para la Municipalidad de Las Condes, incluyendo un proceso de participación ciudadana.",
      en: "In collaboration with CENIA, we developed the country's first municipal artificial intelligence policy for the Municipality of Las Condes, including a citizen participation process.",
    },
    date: "2024-06-20",
    category: "logro",
  },
  {
    id: "ilia-2024",
    title: {
      es: "Publicación del Índice Latinoamericano de Inteligencia Artificial 2024",
      en: "Publication of the Latin American Artificial Intelligence Index 2024",
    },
    summary: {
      es: "Se lanzó la tercera edición del ILIA, el estudio más completo sobre el estado de la IA en América Latina, cubriendo 12 países con más de 200 indicadores.",
      en: "The third edition of ILIA was launched, the most comprehensive study on the state of AI in Latin America, covering 12 countries with over 200 indicators.",
    },
    date: "2024-11-15",
    category: "publicacion",
  },
];

export const newsCategoryLabels = {
  publicacion: { es: "Publicación", en: "Publication" },
  logro: { es: "Logro", en: "Achievement" },
  evento: { es: "Evento", en: "Event" },
  alianza: { es: "Alianza", en: "Partnership" },
};

export const footerContent = {
  es: {
    description: "Consultoría estratégica en inteligencia artificial. Acompañamos a organizaciones públicas y privadas en su adopción de IA en América Latina.",
    links: "Enlaces",
    contact: "Contacto",
    followUs: "Síguenos",
    rights: "Todos los derechos reservados.",
  },
  en: {
    description: "Strategic AI consultancy. We guide public and private organizations through AI adoption in Latin America.",
    links: "Links",
    contact: "Contact",
    followUs: "Follow us",
    rights: "All rights reserved.",
  },
};
