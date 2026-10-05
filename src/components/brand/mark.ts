/**
 * Geometry of the Bullah Labs mark on a 64 x 64 plate: the "B" of the
 * wordmark, set in the same typeface, closed by a square full stop in the
 * brand colour.
 *
 * Shared by the logo component, the favicon frames and the social image.
 * `scripts/build-brand-assets.mjs` reads these constants to regenerate the
 * static files in /public, so keep each one a plain string or number literal.
 */

/** Space Grotesk "B", outlined from the font file. Baseline at y = 0. */
export const MARK_B_PATH =
  'M24.420 0L2.760 0L2.760-6.360L8.400-6.360L8.400-35.640L2.760-35.640L2.760-42L24.240-42Q28.020-42 30.870-40.710Q33.720-39.420 35.310-37.050Q36.900-34.680 36.900-31.380L36.900-30.840Q36.900-27.960 35.820-26.100Q34.740-24.240 33.240-23.220Q31.740-22.200 30.360-21.780L30.360-20.760Q31.740-20.400 33.330-19.410Q34.920-18.420 36.030-16.530Q37.140-14.640 37.140-11.640L37.140-11.040Q37.140-7.620 35.490-5.130Q33.840-2.640 30.990-1.320Q28.140 0 24.420 0M15.600-17.880L15.600-6.540L23.580-6.540Q26.460-6.540 28.170-7.950Q29.880-9.360 29.880-11.940L29.880-12.480Q29.880-15.060 28.200-16.470Q26.520-17.880 23.580-17.880L15.600-17.880M15.600-35.460L15.600-24.420L23.520-24.420Q26.280-24.420 27.990-25.800Q29.700-27.180 29.700-29.640L29.700-30.240Q29.700-32.700 27.990-34.080Q26.280-35.460 23.520-35.460Z';

/** Places the glyph on the plate, optically centred with the full stop. */
export const MARK_B_TRANSFORM = 'translate(8.57 51) scale(0.9)';

/** The full stop: a square, like every marker on the site. */
export const MARK_DOT_X = 45.45;
export const MARK_DOT_Y = 43.5;
export const MARK_DOT_SIZE = 7.5;

/** Corner radius of the plate. The site is square-cornered; so is the mark. */
export const MARK_RADIUS = 2;

/** The mark as a standalone SVG string, for favicons and generated images. */
export function markSvg(plate: string, glyph: string, dot: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="${MARK_RADIUS}" fill="${plate}"/><path transform="${MARK_B_TRANSFORM}" fill="${glyph}" d="${MARK_B_PATH}"/><rect x="${MARK_DOT_X}" y="${MARK_DOT_Y}" width="${MARK_DOT_SIZE}" height="${MARK_DOT_SIZE}" fill="${dot}"/></svg>`;
}
