/**
 * Regenerates the static brand files in /public from the source mark in
 * public/brand/logo-mark.svg (the whirling dervish, 100x100 viewBox,
 * currentColor fill):
 *
 *   public/brand/logo-mark.png        512, white mark on the site's ink (near-black)
 *   public/brand/logo-mark-ring.png   512, same with a brand-colour ring (favicon frame B)
 *   public/icon.png (512), public/icon-192.png, public/icon-64.png, public/icon-64-ring.png
 *   public/apple-icon.png (180)
 *
 * Run after replacing the artwork: node scripts/build-brand-assets.mjs
 */
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE = join(root, 'public/brand/logo-mark.svg');

const BRAND = '#10b981';
/** The site's ink, a warm near-black (hsl 28 14% 9%). */
const PLATE = '#1a1714';
/** The mark itself: white, so it reads on the ink at 16 px. */
const MARK = '#ffffff';

const source = await readFile(SOURCE, 'utf8');
const pathData = source.match(/ d="([^"]+)"/)?.[1];
if (!pathData) throw new Error(`No <path d> found in ${SOURCE}`);

/** The white mark on an ink plate, inset so it clears icon masks. */
function plate(size, { ring = false } = {}) {
  const inset = size * 0.1;
  const inner = size - inset * 2;
  const width = Math.max(2, Math.round(size / 16));
  const half = width / 2;
  const ringRect = ring
    ? `<rect x="${half}" y="${half}" width="${size - width}" height="${size - width}" fill="none" stroke="${BRAND}" stroke-width="${width}"/>`
    : '';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" fill="${PLATE}"/>
  <g transform="translate(${inset} ${inset}) scale(${inner / 100})"><path fill="${MARK}" fill-rule="evenodd" d="${pathData}"/></g>
  ${ringRect}
</svg>`;
  return sharp(Buffer.from(svg), { density: 300 }).resize(size, size);
}

const plain = {
  'public/brand/logo-mark.png': 512,
  'public/icon.png': 512,
  'public/icon-192.png': 192,
  'public/icon-64.png': 64,
  'public/apple-icon.png': 180,
};
for (const [file, size] of Object.entries(plain)) {
  await plate(size).png().toFile(join(root, file));
}

const ringed = {
  'public/brand/logo-mark-ring.png': 512,
  'public/icon-64-ring.png': 64,
};
for (const [file, size] of Object.entries(ringed)) {
  await plate(size, { ring: true }).png().toFile(join(root, file));
}

console.log('Brand assets written.');
