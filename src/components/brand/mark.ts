/**
 * Geometry of the Bullah Labs mark on a 64 x 64 grid.
 *
 * The company is named after Bulleh Shah, the Punjabi Sufi poet, and the mark
 * is drawn from two of his lines: "ikko alif tere darkaar" (a single alif is
 * all you need) and "ik nuqte vich gal mukdi ae" (the whole matter comes down
 * to a single point). So it has three parts:
 *
 * - the arch: the pointed doorway of a shrine, used as the plate;
 * - the alif: the first letter, one reed-pen stroke with a slanted cut;
 * - the nuqta: the rhombic dot calligraphers measure letters with, in the
 *   brand colour.
 *
 * Shared by the logo component and the social image.
 * `scripts/build-brand-assets.mjs` reads these constants to regenerate the
 * static files in /public, so keep each one a plain string literal.
 */

/** The plate: a pointed arch, 48 wide, apex at the top centre. */
export const MARK_ARCH_PATH = 'M8 62V30Q8 14 32 3Q56 14 56 30V62Z';

/** The alif: a single tapered stroke with the pen's slanted cut at the top. */
export const MARK_ALIF_PATH = 'M23 20.5L31 15V45Q31 51.5 24.5 55Q23 48 23 43Z';

/** The nuqta: one rhombic dot, set at the foot of the alif. */
export const MARK_NUQTA_PATH = 'M42 37.5L48.5 44L42 50.5L35.5 44Z';

/** The mark as a standalone SVG string, for favicons and generated images. */
export function markSvg(plate: string, glyph: string, dot: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="${plate}" d="${MARK_ARCH_PATH}"/><path fill="${glyph}" d="${MARK_ALIF_PATH}"/><path fill="${dot}" d="${MARK_NUQTA_PATH}"/></svg>`;
}
