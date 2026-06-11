import type { Metadata } from "next";
import { Inter, Righteous } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/layout";
import { ScrollToTop, SkipLink } from "@/components/ui";
import { I18nProvider } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Foresight | Consultoría en Inteligencia Artificial",
  description:
    "Acompañamos a organizaciones públicas y privadas en su adopción estratégica de inteligencia artificial — desde la estrategia hasta la implementación en América Latina.",
  keywords: [
    "AI consulting",
    "AI adoption",
    "AI strategy",
    "AI implementation",
    "artificial intelligence",
    "digital transformation",
    "Latin America",
    "AI governance",
    "organizational transformation",
    "UNESCO RAM",
    "consultoría IA",
    "adopción de IA",
    "transformación digital",
    "estrategia IA",
  ],
  authors: [{ name: "Foresight" }],
  metadataBase: new URL("https://foresight.cl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Foresight | Consultoría en Inteligencia Artificial",
    description:
      "Acompañamos a organizaciones públicas y privadas en su adopción estratégica de inteligencia artificial en América Latina.",
    url: "https://foresight.cl",
    siteName: "Foresight",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Foresight - Consultoría Estratégica en Inteligencia Artificial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foresight | Consultoría en Inteligencia Artificial",
    description:
      "Acompañamos a organizaciones públicas y privadas en su adopción estratégica de inteligencia artificial en América Latina.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`scroll-smooth ${inter.variable} ${righteous.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Foresight",
              url: "https://foresight.cl",
              logo: "https://foresight.cl/images/logos/logo-original.png",
              description:
                "Consultoría estratégica en inteligencia artificial para organizaciones públicas y privadas en América Latina",
              email: "consultoria@foresight.cl",
              sameAs: [
                "https://www.linkedin.com/company/foresight-cl",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Santiago",
                addressCountry: "CL",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <I18nProvider>
          <SkipLink />
          <Navbar />
          <main id="main-content" className="flex-grow">{children}</main>
          <Footer />
          <ScrollToTop />
        </I18nProvider>
      </body>
    </html>
  );
}
