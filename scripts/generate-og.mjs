/**
 * Generates public/og-image.png (1200x630) for social sharing previews.
 * LinkedIn/Facebook/WhatsApp do not support SVG og:images, so the PNG is
 * what actually shows up when a page is shared.
 *
 * Composites the white brand logo over the brand gradient instead of
 * rasterizing og-image.svg text (librsvg has no system-ui font).
 *
 * Run: node scripts/generate-og.mjs  (one-off, result is committed)
 */
import sharp from "sharp";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const W = 1200;
const H = 630;

const background = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00d4b8"/>
      <stop offset="50%" stop-color="#6366f1"/>
      <stop offset="100%" stop-color="#8b5cf6"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="rgba(0,0,0,0.15)"/>
</svg>`);

const logo = await sharp(readFileSync(join(root, "public", "images", "logos", "logo-white.png")))
  .resize({ width: 640, withoutEnlargement: true })
  .toBuffer();
const logoMeta = await sharp(logo).metadata();

await sharp(background)
  .composite([
    {
      input: logo,
      left: Math.round((W - logoMeta.width) / 2),
      top: Math.round((H - logoMeta.height) / 2),
    },
  ])
  .png()
  .toFile(join(root, "public", "og-image.png"));

console.log("public/og-image.png generated");
