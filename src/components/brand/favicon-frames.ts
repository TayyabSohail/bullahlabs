import { markSvg } from './mark';

/**
 * Two favicon frames, dark and light. `DynamicFavicon` flips the tab icon
 * between them.
 */
const BRAND = '#10b981';
const INK = '#0d0d0d';
const PAPER = '#f5f5f3';

export function faviconFrames(): string[] {
  return [markSvg(INK, PAPER, BRAND), markSvg(PAPER, INK, BRAND)].map(
    (svg) => `data:image/svg+xml,${encodeURIComponent(svg)}`,
  );
}
