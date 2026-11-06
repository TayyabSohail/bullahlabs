import { OG_SIZE, renderOgCard } from '@/lib/og/card';

export const alt = 'Conscious AI for teams - Your team uses AI. Is it paying off?';
export const size = OG_SIZE;
export const contentType = 'image/png';

/** Share card for Conscious AI for teams. */
export default function TeamsOpenGraphImage() {
  return renderOgCard({
    kicker: 'Conscious AI for teams',
    title: 'Your team uses AI. Is it paying off?',
    accent: [6, 7],
    body: 'We cut wasted compute from your AI. Off the bill. Off the footprint. Never off the quality.',
    aside: { kind: 'receipt' },
  });
}
