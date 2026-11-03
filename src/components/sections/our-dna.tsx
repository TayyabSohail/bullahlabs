import Image from 'next/image';

import { Reveal } from '@/components/motion/reveal';
import { TextReveal } from '@/components/motion/text-reveal';
import { VerseCard } from '@/components/sections/our-dna-cards';

import type { Dictionary } from '@/i18n/dictionaries/en';

/**
 * The origin of the name and the four principles it puts into practice.
 */
export function OurDna({ dict }: { dict: Dictionary }) {
  const t = dict.ourDna;
  return (
    <section
      id='our-dna'
      className='bl-section bl-rule bl-band-stone scroll-mt-24 overflow-hidden py-16 sm:py-24 lg:py-28'
    >
      <div className='bl-container'>
        {/* Headline and the origin story. */}
        <div className='grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16'>
          <div>
            <Reveal>
              <p className='bl-kicker'>{t.kicker}</p>
            </Reveal>
            <TextReveal
              as='h2'
              text={t.title}
              accentWords={[...t.accent]}
              className='bl-display mt-5 max-w-[16ch] text-display-lg text-foreground'
            />
          </div>
          <Reveal delay={0.15}>
            <div className='flex max-w-xl items-center gap-4 sm:gap-5'>
              <Image
                src='/images/bulleh-shah-portrait.webp'
                alt={t.portraitAlt}
                width={320}
                height={320}
                sizes='(max-width: 640px) 64px, 80px'
                className='h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20'
              />
              <p className='text-base leading-relaxed text-muted-foreground sm:text-lg'>
                {t.origin}
              </p>
            </div>
          </Reveal>
        </div>

        <div className='mt-8 grid gap-5 sm:mt-10 sm:gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10'>
          <VerseCard copy={t.verse} />
          <Reveal delay={0.2} className='flex'>
            <div className='flex w-full flex-col justify-center border-y border-line py-6 text-center sm:py-8 lg:py-10'>
              <div className='mx-auto max-w-xl'>
                <p className='bl-kicker'>{t.meaning.kicker}</p>
                <h3 className='bl-display mx-auto mt-4 max-w-[16ch] text-3xl text-foreground sm:text-4xl'>
                  {t.meaning.title}
                </h3>
                <p className='mt-5 text-justify text-base leading-relaxed text-muted-foreground sm:text-lg'>
                  {t.meaning.body}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
