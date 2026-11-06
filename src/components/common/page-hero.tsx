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

/**
 * Shared opening block for inner pages. The opening message is centred on
 * phones, where it has the whole viewport to itself, then returns to the
 * editorial left edge from `sm` up.
 */
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
    <section className={cn('bl-hero border-b border-line', className)}>
      <div className='bl-container pb-8 pt-24 text-center sm:pb-10 sm:pt-32 sm:text-left lg:pb-12 lg:pt-40'>
        <Reveal>
          <p className='bl-kicker justify-center sm:justify-start'>{kicker}</p>
        </Reveal>
        <TextReveal
          as='h1'
          text={title}
          accentWords={accentWords}
          delay={0.1}
          className={cn(
            'bl-display mt-4 text-foreground',
            size === 'xl'
              ? 'max-w-[14ch] text-display-xl'
              : 'max-w-[18ch] text-display-lg',
          )}
        />
        {description && (
          <Reveal delay={0.3}>
            <p className='mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mx-0 sm:mt-5 sm:text-lg'>
              {description}
            </p>
          </Reveal>
        )}
        {children && (
          <Reveal
            delay={0.4}
            className='mt-8 flex justify-center sm:justify-start'
          >
            {children}
          </Reveal>
        )}
      </div>
    </section>
  );
}
