/**
 * Regenerates the static brand files in /public from the source artwork in
 * public/brand/logo.jpg (the whirling dancer):
 *
 *   public/brand/logo-mark.png        512, square crop, used by the logo component
 *   public/brand/logo-mark-ring.png   512, same crop with a brand-colour ring (favicon frame B)
 *   public/icon.png (512), public/icon-192.png, public/icon-64.png, public/icon-64-ring.png
 *   public/apple-icon.png (180)
 *
 * Run after replacing the artwork: node scripts/build-brand-assets.mjs
 */
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE = join(root, 'public/brand/logo.jpg');

const BRAND = '#10b981';

/** The artwork, centre-cropped to a square. */
const square = (size) =>
  sharp(SOURCE).resize(size, size, { fit: 'cover', position: 'centre' });

/** An SVG ring in the brand colour, laid over the square crop. */
function ring(size) {
  const width = Math.max(2, Math.round(size / 16));
  const inset = width / 2;
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}"><rect x="${inset}" y="${inset}" width="${size - width}" height="${size - width}" fill="none" stroke="${BRAND}" stroke-width="${width}"/></svg>`,
  );
}

const plain = {
  'public/brand/logo-mark.png': 512,
  'public/icon.png': 512,
  'public/icon-192.png': 192,
  'public/icon-64.png': 64,
  'public/apple-icon.png': 180,
};
for (const [file, size] of Object.entries(plain)) {
  await square(size).png().toFile(join(root, file));
}

const ringed = {
  'public/brand/logo-mark-ring.png': 512,
  'public/icon-64-ring.png': 64,
};
for (const [file, size] of Object.entries(ringed)) {
  await square(size)
    .composite([{ input: ring(size) }])
    .png()
    .toFile(join(root, file));
}

console.log('Brand assets written.');
