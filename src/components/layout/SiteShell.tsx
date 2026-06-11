import "@/app/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop, SkipLink } from "@/components/ui";
import { I18nProvider } from "@/lib/i18n";
import { inter, righteous } from "@/lib/fonts";
import type { Lang } from "@/data/types";

const ORG_DESCRIPTION = {
  es: "Consultoría estratégica en inteligencia artificial para organizaciones públicas y privadas en América Latina",
  en: "Strategic artificial intelligence consulting for public and private organizations in Latin America",
};

function OrgJsonLd({ lang }: { lang: Lang }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Foresight",
          url: "https://foresight.cl",
          logo: "https://foresight.cl/images/logos/logo-original.png",
          description: ORG_DESCRIPTION[lang],
          email: "consultoria@foresight.cl",
          sameAs: ["https://www.linkedin.com/company/foresight-cl"],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Santiago",
            addressCountry: "CL",
          },
        }),
      }}
    />
  );
}

/**
 * Shared document shell for the ES (root) and EN (/en) route trees.
 * Each root layout renders this with its fixed language so the correct
 * <html lang> is server-rendered per tree.
 */
export function SiteShell({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  return (
    <html
      lang={lang}
      className={`scroll-smooth ${inter.variable} ${righteous.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        {/* JSON-LD is valid for Google anywhere in the document */}
        <OrgJsonLd lang={lang} />
        <I18nProvider initialLang={lang}>
          <SkipLink />
          <Navbar />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </I18nProvider>
        {/* Set NEXT_PUBLIC_GA_ID only in the hosting's Production env */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
