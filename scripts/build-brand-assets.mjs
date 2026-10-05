/**
 * Regenerates the static brand files in /public from the mark geometry in
 * src/components/brand/mark.ts:
 *
 *   public/icon.svg, public/brand/logo-mark{,-light,-brand}.svg
 *   public/icon.png (512), public/icon-192.png, public/apple-icon.png (180)
 *
 * Run after changing the mark: node scripts/build-brand-assets.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = readFileSync(join(root, 'src/components/brand/mark.ts'), 'utf8');

/** Reads `export const NAME = <literal>;` from mark.ts. */
function constant(name) {
  const match = source.match(
    new RegExp(`export const ${name} =\\s*(?:'([^']*)'|([\\d.]+));`),
  );
  if (!match) throw new Error(`${name} not found in mark.ts`);
  return match[1] ?? match[2];
}

const glyphPath = constant('MARK_B_PATH');
const glyphTransform = constant('MARK_B_TRANSFORM');
const whirl = constant('MARK_WHIRL_PATH');
const dotCx = constant('MARK_DOT_CX');
const dotCy = constant('MARK_DOT_CY');
const dotR = constant('MARK_DOT_R');

const BRAND = '#10b981';
const INK = '#0d0d0d';
const PAPER = '#f5f5f3';

const shapes = (plate, glyph, dot) =>
  `<circle cx="32" cy="32" r="32" fill="${plate}"/><path fill="${glyph}" d="${whirl}"/><path fill="${glyph}" transform="${glyphTransform}" d="${glyphPath}"/><circle cx="${dotCx}" cy="${dotCy}" r="${dotR}" fill="${dot}"/>`;

const mark = (plate, glyph, dot) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">${shapes(plate, glyph, dot)}</svg>`;

/**
 * App icons need an opaque square, so the disc sits on a paper tile with a
 * little room around it.
 */
const tile = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="${PAPER}"/><g transform="translate(6.4 6.4) scale(0.8)">${shapes(INK, PAPER, BRAND)}</g></svg>`;

const dark = mark(INK, PAPER, BRAND);

const svgs = {
  'public/icon.svg': dark,
  'public/brand/logo-mark.svg': dark,
  'public/brand/logo-mark-light.svg': mark(PAPER, INK, BRAND),
  'public/brand/logo-mark-brand.svg': mark(BRAND, PAPER, PAPER),
};
for (const [file, svg] of Object.entries(svgs)) {
  writeFileSync(join(root, file), svg);
}

const pngs = {
  'public/icon.png': 512,
  'public/icon-192.png': 192,
  'public/apple-icon.png': 180,
};
for (const [file, size] of Object.entries(pngs)) {
  await sharp(Buffer.from(tile), { density: (72 * size) / 64 })
    .resize(size, size)
    .png()
    .toFile(join(root, file));
}

console.log('Brand assets written.');
