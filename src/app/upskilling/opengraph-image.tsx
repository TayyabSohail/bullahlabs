import { OG_SIZE, renderOgCard } from '@/lib/og/card';

export const alt = 'AI Upskilling - Make your team AI-fluent.';
export const size = OG_SIZE;
export const contentType = 'image/png';

/** Share card for the upskilling page. */
export default function UpskillingOpenGraphImage() {
  return renderOgCard({
    kicker: 'AI upskilling',
    title: "Your AI bill is growing. Your team's output isn't.",
    accent: [5, 6, 7, 8],
    body: 'Hands-on AI training on your team’s real work. Less waste, a smaller AI bill, and a free workflow audit to start.',
  });
}
