import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { siteConfig } from '@/config/site';

// Node runtime on purpose: the Edge bundle (Satori wasm + the logo bytes)
// exceeded Vercel's 1 MB Edge Function limit. The image is static anyway,
// so it is rendered once at build time.
export const alt = `${siteConfig.name} - ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Default social share image, generated at build time. */
export default async function OpenGraphImage() {
  // The mark is drawn at 64px, so the 64px icon is enough.
  const bytes = await readFile(join(process.cwd(), 'public/icon-64.png'));
  // Satori wants a real ArrayBuffer, not a Node Buffer view.
  const mark = bytes.buffer.slice(
    bytes.byteOffset,
    bytes.byteOffset + bytes.byteLength,
  );

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
