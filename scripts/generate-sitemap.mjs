/**
 * Generates sitemap.xml from content data.
 * Run: node scripts/generate-sitemap.mjs
 * Called automatically before build via prebuild script.
 */
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");

// Parse project IDs and report slugs from content.ts
const contentFile = readFileSync(
  join(rootDir, "src/data/content.ts"),
  "utf-8"
);

// Extract project IDs (only from the projects array, not from team).
// Commented-out entries (hidden projects) must not produce sitemap URLs.
const projectsSection = contentFile
  .slice(
    contentFile.indexOf("export const projects"),
    contentFile.indexOf("export const reports")
  )
  .split("\n")
  .filter((line) => !line.trimStart().startsWith("//"))
  .join("\n");
const projectIds = [...projectsSection.matchAll(/id:\s*"([^"]+)"/g)].map(
  (m) => m[1]
);

const BASE_URL = "https://foresight.cl";

// /reportes, /reportes/[slug] and /noticias are client-side redirects,
// so they are deliberately left out of the sitemap.
const staticPages = [
  { path: "/", changefreq: "monthly", priority: "1.0" },
  { path: "/proyectos", changefreq: "monthly", priority: "0.8" },
  { path: "/equipo", changefreq: "monthly", priority: "0.6" },
  { path: "/contacto", changefreq: "yearly", priority: "0.6" },
];

const dynamicPages = projectIds.map((id) => ({
  path: `/proyectos/${id}`,
  changefreq: "yearly",
  priority: "0.5",
}));

const allPages = [...staticPages, ...dynamicPages];

// Every page exists in Spanish (root) and English (/en/...); both URLs
// are listed, each carrying the full set of hreflang alternates.
const enPath = (p) => (p === "/" ? "/en" : `/en${p}`);

const alternates = (esPath) => `
    <xhtml:link rel="alternate" hreflang="es" href="${BASE_URL}${esPath}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}${enPath(esPath)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${esPath}"/>`;

const urlEntry = (loc, page) => `  <url>
    <loc>${loc}</loc>${alternates(page.path)}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allPages
  .flatMap((page) => [
    urlEntry(`${BASE_URL}${page.path}`, page),
    urlEntry(`${BASE_URL}${enPath(page.path)}`, page),
  ])
  .join("\n")}
</urlset>
`;

writeFileSync(join(rootDir, "public/sitemap.xml"), sitemap);
console.log(
  `Sitemap generated with ${allPages.length * 2} URLs (${allPages.length} pages x es/en)`
);
