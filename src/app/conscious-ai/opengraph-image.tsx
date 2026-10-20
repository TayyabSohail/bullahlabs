import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'Conscious AI - Use AI on your terms.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** A dedicated share card for the Conscious AI program. */
export default async function ConsciousAiOpenGraphImage() {
  const bytes = await readFile(join(process.cwd(), 'public/icon-64.png'));
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
          padding: '58px 64px 52px',
          backgroundColor: '#f5fbfb',
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(13, 30, 29, 0.045) 0px, rgba(13, 30, 29, 0.045) 1px, transparent 1px, transparent 6px)',
          color: '#121a18',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            right: 64,
            top: 58,
            display: 'flex',
            width: 280,
            height: 208,
            border: '2px solid #121a18',
            backgroundColor: '#fffefd',
            boxShadow: '8px 8px 0 #121a18',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: '100%',
              padding: 22,
            }}
          >
            <span
              style={{
                fontFamily: 'monospace',
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: 2,
              }}
            >
              CONSCIOUS AI
            </span>
            <div style={{ display: 'flex', gap: 9, alignItems: 'flex-end' }}>
              <div
                style={{ width: 48, height: 26, backgroundColor: '#00a878' }}
              />
              <div
                style={{ width: 48, height: 48, backgroundColor: '#121a18' }}
              />
              <div
                style={{
                  width: 48,
                  height: 36,
                  border: '2px solid #121a18',
                  backgroundColor: '#efd6c5',
                }}
              />
            </div>
            <span
              style={{
                fontFamily: 'monospace',
                fontSize: 12,
                letterSpacing: 1.4,
                color: '#007e5a',
              }}
            >
              PRACTICAL LESSONS
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <img
            alt=''
            src={mark as unknown as string}
            width={42}
            height={42}
            style={{ borderRadius: 9 }}
          />
          <span
            style={{
              fontFamily: 'monospace',
              fontSize: 17,
              fontWeight: 700,
              letterSpacing: 4,
            }}
          >
            BULLAH LABS
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 790,
          }}
        >
          <span
            style={{
              fontFamily: 'monospace',
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: 3,
              color: '#007e5a',
              marginBottom: 22,
            }}
          >
            [ CONSCIOUS AI ]
          </span>
          <span
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 82,
              fontWeight: 700,
              letterSpacing: -4,
              lineHeight: 0.94,
            }}
          >
            Use AI{' '}
            <span style={{ color: '#008f68', fontStyle: 'italic' }}>
              on your terms.
            </span>
          </span>
          <span
            style={{
              marginTop: 28,
              fontSize: 24,
              lineHeight: 1.3,
              color: '#50605b',
              maxWidth: 700,
            }}
          >
            Free, practical lessons on when AI helps, which tool fits, and what
            it really costs.
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: 2.5,
            color: '#007e5a',
          }}
        >
          <span>LEARN AI WITH INTENTION</span>
          <span>BULLAHLABS.COM</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
