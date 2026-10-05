/**
 * Two favicon frames, dark and light. `DynamicFavicon` flips the tab icon
 * between them.
 */
const BRAND = '#10b981';
const INK = '#0d0d0d';
const PAPER = '#f5f5f3';

const B_BARS = (fill: string) =>
  `<g fill="${fill}"><rect x="17" y="15" width="9" height="34" rx="1.5"/><rect x="17" y="15" width="24" height="8" rx="1.5"/><rect x="34" y="15" width="8" height="19" rx="1.5"/><rect x="17" y="28" width="30" height="8" rx="1.5"/><rect x="17" y="41" width="22" height="8" rx="1.5"/></g>`;

function frame(plate: string, glyph: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="8" fill="${plate}"/>${B_BARS(glyph)}<rect x="39" y="36" width="8" height="13" rx="1.5" fill="${BRAND}"/></svg>`;
}

export function faviconFrames(): string[] {
  return [frame(INK, PAPER), frame(PAPER, INK)].map(
    (svg) => `data:image/svg+xml,${encodeURIComponent(svg)}`,
  );
}
