import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { siteConfig } from '@/config/site';

/**
 * One share card for every page. These are intentionally much simpler than
 * the website UI: link previews are usually shown at roughly 280px wide, so
 * a card needs one clear message rather than a miniature web page.
 *
 * Satori (the renderer behind next/og) only reads TTF/OTF/WOFF, never the
 * woff2 slices the pages use, and ships no fallback serif or mono, so the
 * static TTFs in ./fonts are loaded here. Every route is rendered once at
 * build time on the Node runtime.
 */

export const OG_SIZE = { width: 1200, height: 630 } as const;

/* Hex twins of the globals.css tokens. Satori cannot read CSS variables. */
const INK = '#1a1714';
const IVORY = '#fcfbf8';
const PEACH = '#f8eee7';
const GREEN = '#10b77f';
const GREEN_TEXT = '#04865d';
const MUTED = '#5e5750';

const FONT_DIR = 'src/lib/og/fonts';

type Weight = 400 | 500 | 600 | 700;
type Style = 'normal' | 'italic';

interface FontSpec {
  name: string;
  file: string;
  weight: Weight;
  style: Style;
}

const FONT_FILES: FontSpec[] = [
  { name: 'Fraunces', file: 'Fraunces-Bold.ttf', weight: 700, style: 'normal' },
  {
    name: 'Fraunces',
    file: 'Fraunces-BoldItalic.ttf',
    weight: 700,
    style: 'italic',
  },
  {
    name: 'IBM Plex Mono',
    file: 'IBMPlexMono-Medium.ttf',
    weight: 500,
    style: 'normal',
  },
  {
    name: 'IBM Plex Mono',
    file: 'IBMPlexMono-SemiBold.ttf',
    weight: 600,
    style: 'normal',
  },
  {
    name: 'IBM Plex Sans',
    file: 'IBMPlexSans-Regular.ttf',
    weight: 400,
    style: 'normal',
  },
  {
    name: 'IBM Plex Sans',
    file: 'IBMPlexSans-Medium.ttf',
    weight: 500,
    style: 'normal',
  },
];

let fontsPromise: Promise<
  { name: string; data: ArrayBuffer; weight: Weight; style: Style }[]
> | null = null;

function loadFonts() {
  fontsPromise ??= Promise.all(
    FONT_FILES.map(async (font) => ({
      name: font.name,
      weight: font.weight,
      style: font.style,
      data: toArrayBuffer(
        await readFile(join(process.cwd(), FONT_DIR, font.file)),
      ),
    })),
  );
  return fontsPromise;
}

/** Satori wants a real ArrayBuffer, not a Node Buffer view. */
function toArrayBuffer(bytes: Buffer): ArrayBuffer {
  return bytes.buffer.slice(
    bytes.byteOffset,
    bytes.byteOffset + bytes.byteLength,
  ) as ArrayBuffer;
}

let markPromise: Promise<string> | null = null;

/** The brand mark, inked, as an SVG data URI Satori can place with img. */
function loadMark() {
  markPromise ??= readFile(
    join(process.cwd(), 'public/brand/logo-mark.svg'),
    'utf8',
  ).then(
    (svg) =>
      `data:image/svg+xml;base64,${Buffer.from(
        svg.replace(/currentColor/g, INK),
      ).toString('base64')}`,
  );
  return markPromise;
}

/** A case-study screenshot, pre-sized to JPEG in ./covers by scripts. */
export async function loadCover(slug: string): Promise<ArrayBuffer | null> {
  try {
    return toArrayBuffer(
      await readFile(join(process.cwd(), 'src/lib/og/covers', `${slug}.jpg`)),
    );
  } catch {
    return null;
  }
}

export interface OgReceipt {
  kind: 'receipt';
}

export interface OgCover {
  kind: 'cover';
  /** JPEG bytes from loadCover. */
  image: ArrayBuffer;
  /** Natural size, used to pick a landscape or portrait frame. */
  width: number;
  height: number;
  /** Mono caption under the frame. */
  caption: string;
}

export interface OgCardProps {
  /** Sentence case; rendered as "[ kicker ]" in mono. */
  kicker: string;
  /** Headline. Words at `accent` indexes go green italic. */
  title: string;
  accent?: number[];
  /** One or two quiet lines under the headline. */
  body?: string;
  /** Optional panel on the right: the planet's receipt or a product shot. */
  aside?: OgReceipt | OgCover;
  /** Bottom-left stamp. Defaults to the two offices. */
  footer?: string;
}

/** Headline size from length, so long titles still fit on two or three lines. */
function headlineSize(title: string, hasAside: boolean) {
  const n = title.length;
  if (hasAside) {
    if (n > 60) return 54;
    if (n > 40) return 62;
    return 70;
  }
  if (n > 70) return 64;
  if (n > 48) return 74;
  return 88;
}

function Headline({
  title,
  accent = [],
  size,
}: {
  title: string;
  accent?: number[];
  size: number;
}) {
  const words = title.split(/\s+/);
  return (
    /* Satori needs flex on any element with several children, and a flex
       row drops the spaces between inline spans, so each word is its own
       item and the gap between items stands in for the space. */
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        columnGap: size * 0.24,
        rowGap: 0,
        fontFamily: 'Fraunces',
        fontWeight: 700,
        fontSize: size,
        lineHeight: 1.02,
        letterSpacing: -size * 0.03,
        color: INK,
      }}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          style={
            accent.includes(i)
              ? { color: GREEN_TEXT, fontStyle: 'italic' }
              : undefined
          }
        >
          {word}
        </span>
      ))}
    </div>
  );
}

/** The planet's tab from the hero, boiled down to its three rows. */
function Receipt() {
  const rows: [string, string, string][] = [
    ['Tokens', '288,000,000', '9,600,000'],
    ['Money', '$ 4,320', '$ 96'],
    ['Carbon', '58 kg CO₂', '1.9 kg CO₂'],
  ];
  const mono = { fontFamily: 'IBM Plex Mono', fontWeight: 500 } as const;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 348,
        border: `2px solid ${INK}`,
        backgroundColor: IVORY,
        boxShadow: `8px 8px 0 ${INK}`,
        color: INK,
      }}
    >
      <div
        style={{
          ...mono,
          display: 'flex',
          justifyContent: 'space-between',
          padding: '14px 18px',
          borderBottom: `2px solid ${INK}`,
          backgroundColor: PEACH,
          fontSize: 15,
        }}
      >
        <span>Receipt · the planet&apos;s tab</span>
        <span style={{ color: MUTED }}>1 yr</span>
      </div>
      <div
        style={{
          ...mono,
          display: 'flex',
          justifyContent: 'space-between',
          padding: '12px 18px 0',
          fontSize: 13,
          color: MUTED,
        }}
      >
        <span style={{ width: 80 }}></span>
        <span style={{ width: 118 }}>Usual</span>
        <span style={{ width: 102, color: GREEN_TEXT }}>Conscious</span>
      </div>
      {rows.map(([label, usual, lean]) => (
        <div
          key={label}
          style={{
            ...mono,
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px 18px',
            fontSize: 16,
            borderBottom: `1px dashed ${INK}`,
          }}
        >
          <span style={{ width: 80 }}>{label}</span>
          <span style={{ width: 118, color: MUTED }}>{usual}</span>
          <span style={{ width: 102, fontWeight: 600 }}>{lean}</span>
        </div>
      ))}
      <div
        style={{
          ...mono,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '14px 18px',
          fontSize: 16,
        }}
      >
        <span>Saved</span>
        <span
          style={{
            display: 'flex',
            padding: '4px 12px',
            backgroundColor: GREEN,
            color: '#ffffff',
            fontWeight: 600,
            fontSize: 20,
          }}
        >
          98%
        </span>
      </div>
    </div>
  );
}

/** A product screen in a ruled frame, landscape or phone-shaped. */
function Cover({ image, width, height, caption }: OgCover) {
  const portrait = height > width;
  const frameW = portrait ? 166 : 420;
  const frameH = portrait ? 300 : 263;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 12,
      }}
    >
      <div
        style={{
          display: 'flex',
          width: frameW,
          height: frameH,
          border: `2px solid ${INK}`,
          backgroundColor: '#ffffff',
          boxShadow: `8px 8px 0 ${INK}`,
          overflow: 'hidden',
        }}
      >
        {/* Satori accepts raw image bytes as src; the frame crops the top. */}
        {/* eslint-disable-next-line @next/next/no-img-element -- Satori renders plain img only */}
        <img
          alt=''
          src={image as unknown as string}
          width={frameW - 4}
          height={Math.round(((frameW - 4) * height) / width)}
          style={{ objectFit: 'cover', objectPosition: 'top' }}
        />
      </div>
      <span
        style={{
          fontFamily: 'IBM Plex Mono',
          fontWeight: 500,
          fontSize: 14,
          color: MUTED,
        }}
      >
        {caption}
      </span>
    </div>
  );
}

export async function renderOgCard({
  kicker,
  title,
  accent,
  body,
  aside,
  footer,
}: OgCardProps) {
  const [fonts, mark] = await Promise.all([loadFonts(), loadMark()]);
  const hasAside = Boolean(aside);
  const size = headlineSize(title, hasAside);
  const stamp =
    footer ?? siteConfig.locations.map((l) => l.city).join(' · ');

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          padding: 0,
          backgroundColor: INK,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
            padding: '36px 56px 32px',
            borderLeft: `20px solid ${GREEN}`,
            backgroundColor: IVORY,
          }}
        >
          {/* Masthead */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              {/* eslint-disable-next-line @next/next/no-img-element -- Satori renders plain img only */}
              <img alt='' src={mark} width={42} height={42} />
              <span
                style={{
                  fontFamily: 'Fraunces',
                  fontWeight: 700,
                  fontSize: 28,
                  letterSpacing: -0.5,
                  color: INK,
                }}
              >
                Bullah Labs
              </span>
            </div>
            <span
              style={{
                fontFamily: 'IBM Plex Mono',
                fontWeight: 500,
                fontSize: 16,
                color: MUTED,
              }}
            >
              Product &amp; Engineering Studio
            </span>
          </div>

          {/* Body row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 48,
              flexGrow: 1,
              paddingTop: 26,
              paddingBottom: 26,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 18,
                width: hasAside ? 650 : 1040,
              }}
            >
              <span
                style={{
                  fontFamily: 'IBM Plex Mono',
                  fontWeight: 600,
                  fontSize: 20,
                  color: GREEN_TEXT,
                }}
              >
                [ {kicker} ]
              </span>
              <Headline title={title} accent={accent} size={size} />
              {body ? (
                <span
                  style={{
                    fontFamily: 'IBM Plex Sans',
                    fontWeight: 400,
                    fontSize: hasAside ? 20 : 23,
                    lineHeight: 1.35,
                    color: MUTED,
                    maxWidth: hasAside ? 600 : 860,
                  }}
                >
                  {body}
                </span>
              ) : null}
            </div>
            {aside?.kind === 'receipt' ? <Receipt /> : null}
            {aside?.kind === 'cover' ? <Cover {...aside} /> : null}
          </div>

          {/* Foot rule */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: 16,
              borderTop: `3px solid ${INK}`,
              fontFamily: 'IBM Plex Mono',
              fontWeight: 500,
              fontSize: 18,
              color: INK,
            }}
          >
            <span>{stamp}</span>
            <span style={{ color: GREEN_TEXT }}>bullahlabs.com</span>
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts },
  );
}
