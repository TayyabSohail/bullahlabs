import { OG_SIZE, renderOgCard } from '@/lib/og/card';

import { siteConfig } from '@/config/site';

// Node runtime on purpose: the Edge bundle (Satori wasm + fonts) exceeds
// Vercel's 1 MB Edge Function limit. Rendered once at build time.
export const alt = `${siteConfig.name} - ${siteConfig.tagline}`;
export const size = OG_SIZE;
export const contentType = 'image/png';

/** Default share card: the home hero, with the planet's receipt beside it. */
export default function OpenGraphImage() {
  return renderOgCard({
    kicker: 'Product and engineering studio',
    title: 'Technology that solves problems. Built with conscience.',
    accent: [4, 5, 6],
    body: 'We make AI do more with less. Less cost, less energy, less complexity.',
    aside: { kind: 'receipt' },
  });
}
