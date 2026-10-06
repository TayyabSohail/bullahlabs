/**
 * Two favicon frames: the mark on its own, and the mark with a brand-colour
 * ring. `DynamicFavicon` flips the tab icon between them. Both are 64 px PNGs
 * cut from public/brand/logo.jpg by `scripts/build-brand-assets.mjs`.
 */
export function faviconFrames(): string[] {
  return ['/icon-64.png', '/icon-64-ring.png'];
}
