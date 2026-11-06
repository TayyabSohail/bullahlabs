import { OG_SIZE, renderOgCard } from '@/lib/og/card';

export const alt = 'Conscious AI - Use AI on your terms.';
export const size = OG_SIZE;
export const contentType = 'image/png';

/** Share card for the Conscious AI program. */
export default function ConsciousAiOpenGraphImage() {
  return renderOgCard({
    kicker: 'Conscious AI',
    title: 'Use AI on your terms.',
    accent: [2, 3, 4],
    body: 'Free, practical lessons on when AI helps, which tool fits, and what it really costs.',
    aside: { kind: 'receipt' },
  });
}
