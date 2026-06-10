/**
 * One-off image optimization for public/ assets. Results are committed;
 * this does NOT run as part of the build.
 *
 * Run: node scripts/optimize-images.mjs
 *
 * - Team photos: max 800px wide, JPEG q80 (mozjpeg)
 * - Project photos: max 1600px wide, JPEG q80 (mozjpeg)
 * - PWA icons: 192/512px PNGs derived from src/app/icon.png
 */
import sharp from "sharp";
import { existsSync, mkdirSync, readFileSync, rmSync, statSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { setTimeout as sleep } from "timers/promises";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pub = (...p) => join(root, "public", ...p);

const kb = (path) => Math.round(statSync(path).size / 1024);

// Dropbox briefly locks freshly-touched files on Windows; retry transient EPERM.
async function retry(fn, attempts = 5) {
  for (let i = 1; ; i++) {
    try {
      return fn();
    } catch (err) {
      if (err.code !== "EPERM" || i === attempts) throw err;
      await sleep(2000 * i);
    }
  }
}

async function toJpeg(input, output, maxWidth) {
  const before = kb(input);
  const buf = readFileSync(input); // buffer input: no file handle held by sharp
  const result = await sharp(buf)
    .rotate() // respect EXIF orientation
    .resize({ width: maxWidth, withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toBuffer();
  if (input !== output) await retry(() => rmSync(input));
  await retry(() => writeFileSync(output, result));
  console.log(`${input.replace(root, "")} ${before}KB -> ${output.replace(root, "")} ${kb(output)}KB`);
}

async function toPngIcon(input, output, size) {
  await sharp(input).resize(size, size).png().toFile(output);
  console.log(`${output.replace(root, "")} ${kb(output)}KB`);
}

// Team photos
if (existsSync(pub("images", "team", "Sebastián Adasme.jpg"))) {
  await toJpeg(pub("images", "team", "Sebastián Adasme.jpg"), pub("images", "team", "sebastian-adasme.jpg"), 800);
}
if (existsSync(pub("images", "team", "jose-guridi.png"))) {
  await toJpeg(pub("images", "team", "jose-guridi.png"), pub("images", "team", "jose-guridi.jpg"), 800);
}

// Project photos (RAM Cambodia gallery)
for (const name of ["20250204_083735.jpg", "20250204_110523.jpg", "1738671465327.jpeg"]) {
  const file = pub("images", "projects", "ram-camboya", name);
  await toJpeg(file, file, 1600);
}

// PWA icons for the web manifest
mkdirSync(pub("icons"), { recursive: true });
await toPngIcon(join(root, "src", "app", "icon.png"), pub("icons", "icon-192.png"), 192);
await toPngIcon(join(root, "src", "app", "icon.png"), pub("icons", "icon-512.png"), 512);

console.log("Done.");
