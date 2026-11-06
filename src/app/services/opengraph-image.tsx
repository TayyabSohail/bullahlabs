import { OG_SIZE, renderOgCard } from '@/lib/og/card';

export const alt = 'Services - From first idea to a product that lasts.';
export const size = OG_SIZE;
export const contentType = 'image/png';

/** Share card for the services page. */
export default function ServicesOpenGraphImage() {
  return renderOgCard({
    kicker: 'Services',
    title: 'From first idea to a product that lasts.',
    accent: [5, 6, 7],
    body: 'Everything you need, under one roof: product thinking, solid engineering and honest advice on where technology, including AI, pays off.',
  });
}
