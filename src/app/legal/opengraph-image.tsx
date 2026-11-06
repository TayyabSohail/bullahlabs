import { OG_SIZE, renderOgCard } from '@/lib/og/card';

export const alt = 'Legal - Bullah Labs';
export const size = OG_SIZE;
export const contentType = 'image/png';

/** Share card for the legal pages: privacy, terms, cookies and imprint. */
export default function LegalOpenGraphImage() {
  return renderOgCard({
    kicker: 'Legal',
    title: 'Privacy, terms, cookies and imprint.',
    accent: [0],
    body: 'How Bullah Labs handles data and contracts, and how to reach us about either.',
  });
}
