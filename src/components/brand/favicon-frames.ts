import {
  MARK_B_PATH,
  MARK_B_TRANSFORM,
  MARK_DOT_CX,
  MARK_DOT_CY,
  MARK_DOT_R,
  MARK_WHIRL_PATH,
} from './mark';

/**
 * Two favicon frames, dark and light. `DynamicFavicon` flips the tab icon
 * between them.
 */
const BRAND = '#10b981';
const INK = '#0d0d0d';
const PAPER = '#f5f5f3';

function frame(plate: string, glyph: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="${plate}"/><path d="${MARK_WHIRL_PATH}" fill="${glyph}"/><path transform="${MARK_B_TRANSFORM}" d="${MARK_B_PATH}" fill="${glyph}"/><circle cx="${MARK_DOT_CX}" cy="${MARK_DOT_CY}" r="${MARK_DOT_R}" fill="${BRAND}"/></svg>`;
}

export function faviconFrames(): string[] {
  return [frame(INK, PAPER), frame(PAPER, INK)].map(
    (svg) => `data:image/svg+xml,${encodeURIComponent(svg)}`,
  );
}
