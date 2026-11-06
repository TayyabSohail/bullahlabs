import { OG_SIZE, renderOgCard } from '@/lib/og/card';

export const alt = 'Our DNA - We build technology with purpose.';
export const size = OG_SIZE;
export const contentType = 'image/png';

/** Share card for Our DNA, served at /our-dna and /about. */
export default function AboutOpenGraphImage() {
  return renderOgCard({
    kicker: 'Our DNA',
    title: 'We build technology with purpose, and believe progress comes with responsibility.',
    accent: [7, 8, 9, 10],
    body: 'A product and engineering studio with offices in Stuttgart and Islamabad. Digital products, and help using technology, including AI, well.',
  });
}
