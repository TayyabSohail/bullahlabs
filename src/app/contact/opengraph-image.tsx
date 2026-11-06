import { OG_SIZE, renderOgCard } from '@/lib/og/card';

export const alt = "Contact - Let's talk about your project.";
export const size = OG_SIZE;
export const contentType = 'image/png';

/** Share card for the contact page. */
export default function ContactOpenGraphImage() {
  return renderOgCard({
    kicker: 'Contact',
    title: "Let's talk about your project.",
    accent: [3, 4],
    body: 'Book an intro call or write to us. A person replies within one business day.',
  });
}
