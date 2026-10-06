import { LogoMark } from '@/components/brand/logo';
import { Reveal } from '@/components/motion/reveal';
import { TextReveal } from '@/components/motion/text-reveal';

import { cn } from '@/lib/utils';

import type { Dictionary } from '@/i18n/dictionaries/en';

interface OriginProps {
  dict: Dictionary;
  className?: string;
}

/**
 * Where the name comes from. Bulleh Shah's line about reading yourself sits
 * on an ink panel under the mark; the copy next to it says what "conscious"
 * means for the program.
 */
export function Origin({ dict, className }: OriginProps) {
  const t = dict.origin;

  return (
    <section
      id='name'
      className={cn('bl-section bl-rule bl-band-white', className)}
      data-rail={t.kicker}
    >
      <div className='bl-container grid gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center lg:gap-16'>
        <Reveal className='bl-card bl-card-ink p-7 sm:p-10 lg:p-12'>
          <LogoMark className='h-14 w-14' />
          <blockquote className='mt-8'>
            <p
              lang='pa-Latn'
              className='bl-display text-2xl leading-snug text-white sm:text-3xl'
            >
              {t.verse}
            </p>
            <p className='mt-4 text-base leading-relaxed text-white/70 sm:text-lg'>
              {t.translation}
            </p>
            <footer className='mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-brand-2'>
              {t.attribution}
            </footer>
          </blockquote>
        </Reveal>

        <div>
          <Reveal>
            <p className='bl-kicker'>{t.kicker}</p>
          </Reveal>
          <TextReveal
            as='h2'
            text={t.title}
            accentWords={[...t.accent]}
            className='bl-display mt-5 text-display-md text-foreground'
          />
          <Reveal delay={0.2} className='mt-6 space-y-4'>
            {t.body.map((paragraph) => (
              <p
                key={paragraph}
                className='max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg'
              >
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
