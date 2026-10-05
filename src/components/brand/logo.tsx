import Link from 'next/link';

import { cn } from '@/lib/utils';

import { siteConfig } from '@/config/site';
import { paths } from '@/constants/paths';

import {
  MARK_B_PATH,
  MARK_B_TRANSFORM,
  MARK_DOT_CX,
  MARK_DOT_CY,
  MARK_DOT_R,
  MARK_WHIRL_PATH,
} from './mark';

interface LogoMarkProps {
  className?: string;
  /** Renders the mark in fixed brand colours instead of theme tokens. */
  inverted?: boolean;
}

/**
 * The Bullah Labs mark: the wordmark's "B" on a round plate, inside one
 * turning line that ends at a point in the brand colour. Theme-aware by
 * default: the plate takes the foreground colour, the letter and the whirl
 * the background.
 */
export function LogoMark({ className, inverted }: LogoMarkProps) {
  const glyph = inverted ? 'fill-white' : 'fill-background';
  return (
    <svg
      viewBox='0 0 64 64'
      aria-hidden='true'
      className={cn('h-9 w-9', className)}
    >
      <circle
        cx='32'
        cy='32'
        r='32'
        className={inverted ? 'fill-brand' : 'fill-foreground'}
      />
      <path d={MARK_WHIRL_PATH} className={glyph} />
      <path transform={MARK_B_TRANSFORM} d={MARK_B_PATH} className={glyph} />
      <circle
        cx={MARK_DOT_CX}
        cy={MARK_DOT_CY}
        r={MARK_DOT_R}
        className={inverted ? 'fill-white' : 'fill-brand'}
      />
    </svg>
  );
}

interface WordmarkProps {
  className?: string;
}

/**
 * "Bullah" over "LABS", drawn as vector outlines rather than text.
 *
 * A company name is not content to be translated, but machine translators
 * (and browser translate extensions) happily rewrote the live text version
 * of this. Paths
 * have no text layer to rewrite, so the name survives every locale intact.
 *
 * Keep the `<title>`: it is what assistive tech and search crawlers read, and
 * it is the only place the name still exists as characters.
 */
export function Wordmark({ className }: WordmarkProps) {
  return (
    <svg
      viewBox='0 0 176 88'
      role='img'
      className={cn('h-[26px] w-auto', className)}
    >
      <title>{siteConfig.name}</title>
      {/* Space Grotesk 600 at -0.02em, outlined from the real font file. */}
      <path
        transform='translate(0 44)'
        className='fill-foreground'
        d='M24.420 0L2.760 0L2.760-6.360L8.400-6.360L8.400-35.640L2.760-35.640L2.760-42L24.240-42Q28.020-42 30.870-40.710Q33.720-39.420 35.310-37.050Q36.900-34.680 36.900-31.380L36.900-30.840Q36.900-27.960 35.820-26.100Q34.740-24.240 33.240-23.220Q31.740-22.200 30.360-21.780L30.360-20.760Q31.740-20.400 33.330-19.410Q34.920-18.420 36.030-16.530Q37.140-14.640 37.140-11.640L37.140-11.040Q37.140-7.620 35.490-5.130Q33.840-2.640 30.990-1.320Q28.140 0 24.420 0M15.600-17.880L15.600-6.540L23.580-6.540Q26.460-6.540 28.170-7.950Q29.880-9.360 29.880-11.940L29.880-12.480Q29.880-15.060 28.200-16.470Q26.520-17.880 23.580-17.880L15.600-17.880M15.600-35.460L15.600-24.420L23.520-24.420Q26.280-24.420 27.990-25.800Q29.700-27.180 29.700-29.640L29.700-30.240Q29.700-32.700 27.990-34.080Q26.280-35.460 23.520-35.460 M54.300 0.480Q50.880 0.480 48.240-1.050Q45.600-2.580 44.160-5.370Q42.720-8.160 42.720-11.880L42.720-29.640L49.560-29.640L49.560-12.420Q49.560-8.820 51.330-7.080Q53.100-5.340 56.340-5.340Q60-5.340 62.130-7.740Q64.260-10.140 64.260-14.640L64.260-29.640L71.100-29.640L71.100 0L64.380 0L64.380-4.140L63.360-4.140Q62.580-2.520 60.510-1.020Q58.440 0.480 54.300 0.480 M85.560 0L78.660 0L78.660-42L85.560-42 M100.020 0L93.120 0L93.120-42L100.020-42 M116.760 0.840Q113.640 0.840 111.120-0.270Q108.600-1.380 107.130-3.480Q105.660-5.580 105.660-8.640Q105.660-11.640 107.130-13.680Q108.600-15.720 111.180-16.770Q113.760-17.820 117.060-17.820L125.640-17.820L125.640-19.620Q125.640-21.960 124.200-23.430Q122.760-24.900 119.700-24.900Q116.700-24.900 115.170-23.490Q113.640-22.080 113.160-19.860L106.800-21.960Q107.520-24.300 109.110-26.220Q110.700-28.140 113.340-29.310Q115.980-30.480 119.820-30.480Q125.640-30.480 128.970-27.570Q132.300-24.660 132.300-19.140L132.300-7.500Q132.300-5.700 133.980-5.700L136.500-5.700L136.500 0L131.640 0Q129.480 0 128.100-1.080Q126.720-2.160 126.720-4.020L126.720-4.140L125.700-4.140Q125.340-3.300 124.440-2.100Q123.540-0.900 121.710-0.030Q119.880 0.840 116.760 0.840M117.900-4.800Q121.320-4.800 123.480-6.750Q125.640-8.700 125.640-12L125.640-12.600L117.480-12.600Q115.260-12.600 113.880-11.640Q112.500-10.680 112.500-8.820Q112.500-7.020 113.940-5.910Q115.380-4.800 117.900-4.800 M147.900 0L141 0L141-42L147.900-42L147.900-25.740L148.920-25.740Q149.400-26.760 150.480-27.780Q151.560-28.800 153.330-29.460Q155.100-30.120 157.800-30.120Q161.220-30.120 163.860-28.590Q166.500-27.060 167.970-24.300Q169.440-21.540 169.440-17.760L169.440 0L162.540 0L162.540-17.220Q162.540-20.820 160.770-22.590Q159-24.360 155.760-24.360Q152.100-24.360 150-21.930Q147.900-19.500 147.900-15'
      />
      {/* JetBrains Mono 500 at 0.22em, outlined from the real font file. */}
      <path
        transform='translate(0 85.92)'
        className='fill-muted-foreground'
        d='M19.296 0L3.924 0L3.924-26.280L7.812-26.280L7.812-3.564L19.296-3.564 M35.028 0L31.068 0L37.764-26.280L42.876-26.280L49.572 0L45.648 0L44.064-6.660L36.612-6.660L35.028 0M39.132-17.496L37.332-9.864L43.308-9.864L41.508-17.460Q41.040-19.476 40.734-20.970Q40.428-22.464 40.320-23.004Q40.212-22.464 39.924-20.970Q39.636-19.476 39.132-17.496 M70.344 0L62.100 0L62.100-26.280L69.840-26.280Q73.584-26.280 75.708-24.480Q77.832-22.680 77.832-19.512Q77.832-17.712 77.058-16.398Q76.284-15.084 74.916-14.364Q74.268-14.040 73.512-13.860Q74.412-13.680 75.204-13.284Q76.716-12.492 77.580-10.980Q78.444-9.468 78.444-7.380Q78.444-5.148 77.454-3.474Q76.464-1.800 74.646-0.900Q72.828 0 70.344 0M65.880-12.024L65.880-3.348L70.020-3.348Q72.108-3.348 73.332-4.464Q74.556-5.580 74.556-7.560Q74.556-9.576 73.332-10.800Q72.108-12.024 70.020-12.024L65.880-12.024M65.880-22.932L65.880-15.264L69.804-15.264Q71.748-15.264 72.864-16.308Q73.980-17.352 73.980-19.116Q73.980-20.880 72.864-21.906Q71.748-22.932 69.840-22.932 M99.468 0.360Q96.804 0.360 94.896-0.522Q92.988-1.404 91.944-3.042Q90.900-4.680 90.900-6.948L94.752-6.948Q94.752-5.148 96.012-4.122Q97.272-3.096 99.504-3.096Q101.592-3.096 102.780-4.104Q103.968-5.112 103.968-6.876Q103.968-8.352 103.158-9.432Q102.348-10.512 100.836-10.908L97.524-11.880Q94.644-12.708 93.078-14.706Q91.512-16.704 91.512-19.476Q91.512-21.636 92.484-23.256Q93.456-24.876 95.256-25.776Q97.056-26.676 99.504-26.676Q103.104-26.676 105.282-24.732Q107.460-22.788 107.496-19.512L103.608-19.512Q103.608-21.240 102.510-22.230Q101.412-23.220 99.432-23.220Q97.524-23.220 96.444-22.302Q95.364-21.384 95.364-19.728Q95.364-18.252 96.174-17.172Q96.984-16.092 98.496-15.660L101.844-14.652Q104.724-13.860 106.272-11.844Q107.820-9.828 107.820-7.020Q107.820-4.824 106.776-3.150Q105.732-1.476 103.860-0.558Q101.988 0.360 99.468 0.360'
      />
    </svg>
  );
}

interface LogoProps {
  className?: string;
  /** Hide the wordmark and show only the mark. */
  compact?: boolean;
  /** Wraps in a link to the homepage unless false. */
  linked?: boolean;
  markClassName?: string;
  wordmarkClassName?: string;
}

export function Logo({
  className,
  compact,
  linked = true,
  markClassName,
  wordmarkClassName,
}: LogoProps) {
  const content = (
    <span
      className={cn(
        'group/logo inline-flex items-center gap-3 text-foreground',
        className,
      )}
    >
      <LogoMark
        className={cn(
          'transition-transform duration-500 ease-out-expo group-hover/logo:-translate-y-0.5',
          markClassName,
        )}
      />
      {!compact && (
        <Wordmark className={cn('h-[26px] w-auto', wordmarkClassName)} />
      )}
    </span>
  );

  if (!linked) return content;

  return (
    <Link
      href={paths.home}
      aria-label={`${siteConfig.name} home`}
      className='rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'
    >
      {content}
    </Link>
  );
}
