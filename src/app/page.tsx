"use client";

import {
  Hero,
  ProjectsShowcase,
  NewsHighlights,
  ClientsSection,
  TeamPreview,
  ContactCTA,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsShowcase />
      <NewsHighlights />
      <ClientsSection />
      <TeamPreview />
      {/* <ServicesSection /> */}
      <ContactCTA />
    </>
  );
}
