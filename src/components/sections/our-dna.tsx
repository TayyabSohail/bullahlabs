import Image from 'next/image';

import { Reveal, Stagger } from '@/components/motion/reveal';
import { TextReveal } from '@/components/motion/text-reveal';
import {
  ValueCard,
  VerseCard,
} from '@/components/sections/our-dna-cards';

const VALUES = [
  [
    'Love',
    'He preached love before doctrine. We build for the person doing the work: more confidence, less busywork.',
  ],
  [
    'Acceptance',
    'He chose a gardener as his teacher and let the scandal pass. We teach AI skills to every kind of learner, whatever their background.',
  ],
  [
    'Courage',
    'He mocked hypocrisy and stood up to the powerful. We say no to AI where it does not belong, even when more automation is easier to sell.',
  ],
  [
    'Responsibility',
    'He never hid behind his rank. We never hide behind the model: the smallest reliable system, with people checking the work.',
  ],
] as const;

/**
 * The origin of the name and the values it puts into practice, in three
 * ruled blocks: the story, the verse, and four values in practice.
 */
export function OurDna() {
  return (
    <section
      id='our-dna'
      className='bl-section bl-rule bl-band-stone scroll-mt-24 overflow-hidden'
    >
      <div className='bl-container'>
        {/* Headline and the origin story. */}
        <div className='grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16'>
          <div>
            <Reveal>
              <p className='bl-kicker'>Our DNA</p>
            </Reveal>
            <TextReveal
              as='h2'
              text='Our values are 300 years old. Still in production.'
              accentWords={[6, 7, 8]}
              className='bl-display mt-5 max-w-[16ch] text-display-lg text-foreground'
            />
          </div>
          <Reveal delay={0.15}>
            <div className='flex max-w-xl items-start gap-4 sm:gap-5'>
              <Image
                src='/images/bulleh-shah-portrait.webp'
                alt='Illustrated portrait of Bulleh Shah'
                width={320}
                height={320}
                sizes='(max-width: 640px) 72px, 96px'
                className='mt-0.5 h-[72px] w-[72px] shrink-0 object-contain sm:h-24 sm:w-24'
              />
              <p className='text-base leading-relaxed text-muted-foreground sm:text-lg'>
              Bullah is a nod to Bulleh Shah (c. 1680–1757), the Punjabi Sufi
              poet who preached love, mocked hypocrisy, and stood up to the
              powerful. Born at the top of the social ladder, he chose a teacher
              from a caste of gardeners. His family was scandalised. He wrote
              poetry about it, and Punjab is still singing it.
              </p>
            </div>
          </Reveal>
        </div>

        {/* The verse as a printed card beside the four values. */}
        <div className='mt-10 grid gap-8 sm:mt-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10'>
          <VerseCard />
          <div>
            <Stagger stagger={0.12} className='grid gap-5 sm:grid-cols-2'>
              {VALUES.map(([title, body]) => (
                <ValueCard
                  key={title}
                  title={title}
                  body={body}
                />
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
