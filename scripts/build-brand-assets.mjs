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

const plate = constant('MARK_PLATE_PATH');
const body = constant('MARK_BODY_PATH');
const skirt = constant('MARK_SKIRT_PATH');
const nodes = constant('MARK_NODES_PATH');
const hand = constant('MARK_HAND_PATH');
const node = constant('MARK_NODE_PATH');

const BRAND = '#10b981';
const INK = '#0d0d0d';
const PAPER = '#f5f5f3';

const shapes = (plateFill, glyph, dot) =>
  `<path fill="${plateFill}" d="${plate}"/><path fill="none" stroke="${glyph}" stroke-width="2" stroke-linecap="round" d="${skirt}"/><path fill="none" stroke="${glyph}" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="${body}"/><path fill="${glyph}" d="${nodes}"/><path fill="${plateFill}" stroke="${glyph}" stroke-width="2.2" d="${hand}"/><path fill="${dot}" d="${node}"/>`;

const mark = (plate, glyph, dot) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">${shapes(plate, glyph, dot)}</svg>`;

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
  await sharp(Buffer.from(dark), { density: (72 * size) / 64 })
    .resize(size, size)
    .flatten(file.includes('apple') ? { background: PAPER } : false)
    .png()
    .toFile(join(root, file));
}

console.log('Brand assets written.');
