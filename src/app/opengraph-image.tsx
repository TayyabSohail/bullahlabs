import { ImageResponse } from 'next/og';

import { siteConfig } from '@/config/site';

export const runtime = 'edge';
export const alt = `${siteConfig.name} - ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Default social share image, generated at build time. */
export default async function OpenGraphImage() {
  const mark = await fetch(
    new URL('../../public/brand/logo-mark.png', import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: '#0d0d0d',
          color: '#f5f5f3',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            right: -160,
            top: -160,
            width: 520,
            height: 520,
            borderRadius: 999,
            background: 'rgba(16, 185, 129, 0.35)',
            filter: 'blur(120px)',
          }}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          {/* Satori renders plain img tags only; it accepts an ArrayBuffer src. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=''
            src={mark as unknown as string}
            width={64}
            height={64}
            style={{ borderRadius: 14 }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 30, fontWeight: 700, letterSpacing: -1 }}>
              Bullah
            </span>
            <span
              style={{
                fontSize: 14,
                letterSpacing: 5,
                textTransform: 'uppercase',
                color: '#9a9a9a',
              }}
            >
              Labs
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 700,
              letterSpacing: -4,
              lineHeight: 0.98,
              maxWidth: 900,
            }}
          >
            Stop using AI by default. Start using it on purpose.
          </div>
          <div style={{ fontSize: 30, color: '#b3b3b3', maxWidth: 900 }}>
            Conscious AI: a practical program for non-technical knowledge
            workers and their teams.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 20,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#10b981',
          }}
        >
          <span>bullah labs</span>
          <span>PK &middot; DE</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
