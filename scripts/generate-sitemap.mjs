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

// /reportes and /reportes/[slug] are client-side redirects to /proyectos,
// so they are deliberately left out of the sitemap.
const staticPages = [
  { path: "/", changefreq: "monthly", priority: "1.0" },
  { path: "/proyectos", changefreq: "monthly", priority: "0.8" },
  { path: "/equipo", changefreq: "monthly", priority: "0.6" },
  { path: "/noticias", changefreq: "monthly", priority: "0.7" },
  { path: "/contacto", changefreq: "yearly", priority: "0.6" },
];

const dynamicPages = projectIds.map((id) => ({
  path: `/proyectos/${id}`,
  changefreq: "yearly",
  priority: "0.5",
}));

const allPages = [...staticPages, ...dynamicPages];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${BASE_URL}${page.path}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync(join(rootDir, "public/sitemap.xml"), sitemap);
console.log(
  `Sitemap generated with ${allPages.length} URLs (${staticPages.length} static + ${dynamicPages.length} dynamic)`
);
