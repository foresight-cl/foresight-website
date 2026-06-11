import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { inter, righteous } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "404 | Foresight",
  robots: { index: false },
};

/**
 * Global 404 (experimental.globalNotFound). Rendered outside both root
 * layouts, so it carries its own <html>/<body> and stays static and
 * bilingual without the i18n provider.
 */
export default function GlobalNotFound() {
  return (
    <html
      lang="es"
      className={`scroll-smooth ${inter.variable} ${righteous.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-subtle">
          <div className="text-center">
            <div className="text-9xl font-bold text-navy/10 mb-2">404</div>
            <h1 className="text-3xl font-bold text-navy mb-4">
              Página no encontrada · Page not found
            </h1>
            <p className="text-lg text-slate-500 mb-2 max-w-md mx-auto">
              La página que buscas no existe o ha sido movida.
            </p>
            <p className="text-lg text-slate-500 mb-8 max-w-md mx-auto">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-brand text-white font-medium hover:shadow-lg transition-all"
              >
                Volver al inicio
              </Link>
              <Link
                href="/en"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-slate-200 text-navy font-medium hover:bg-slate-50 transition-colors"
              >
                Back to home (English)
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
