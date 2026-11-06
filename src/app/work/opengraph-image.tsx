import { OG_SIZE, renderOgCard } from '@/lib/og/card';

export const alt = 'Work - Real products, real results.';
export const size = OG_SIZE;
export const contentType = 'image/png';

/** Share card for the project index. */
export default function WorkOpenGraphImage() {
  return renderOgCard({
    kicker: 'Selected work',
    title: 'Real products, real results.',
    accent: [3, 4],
    body: 'Web and mobile products, integrations and AI, each with the problem, the work and what changed.',
  });
}
