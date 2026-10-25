import { Reveal } from '@/components/motion/reveal';
import { TextReveal } from '@/components/motion/text-reveal';

import { cn } from '@/lib/utils';

interface PageHeroProps {
  kicker: string;
  title: string;
  accentWords?: number[];
  description?: string;
  children?: React.ReactNode;
  className?: string;
  /** Narrower title for long-form pages. */
  size?: 'lg' | 'xl';
}

/** Shared opening block for inner pages. */
export function PageHero({
  kicker,
  title,
  accentWords,
  description,
  children,
  className,
  size = 'xl',
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'bl-container pb-10 pt-28 text-center sm:pb-12 sm:pt-44 md:text-left lg:pb-16 lg:pt-52',
        className,
      )}
    >
      <Reveal>
        <p className='bl-kicker'>{kicker}</p>
      </Reveal>
      <TextReveal
        as='h1'
        text={title}
        accentWords={accentWords}
        delay={0.1}
        className={cn(
          'bl-display mx-auto mt-6 justify-center text-foreground md:mx-0 md:justify-start',
          size === 'xl'
            ? 'max-w-[14ch] text-display-xl'
            : 'max-w-[18ch] text-display-lg',
        )}
      />
      {description && (
        <Reveal delay={0.4}>
          <p className='mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-7 sm:text-lg md:mx-0 lg:text-xl'>
            {description}
          </p>
        </Reveal>
      )}
      {children && (
        <Reveal delay={0.5} className='mt-9 flex justify-center md:block'>
          {children}
        </Reveal>
      )}
    </section>
  );
}
