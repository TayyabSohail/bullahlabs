import { OG_SIZE, renderOgCard } from '@/lib/og/card';

export const alt = 'Approach - Clear thinking. Deliberate building.';
export const size = OG_SIZE;
export const contentType = 'image/png';

/** Share card for the approach page. */
export default function ApproachOpenGraphImage() {
  return renderOgCard({
    kicker: 'How we work',
    title: 'Clear thinking. Deliberate building.',
    accent: [2, 3],
    body: 'Four steps, from the first conversation to a product that keeps improving. Technology built with its consequences in mind.',
  });
}
