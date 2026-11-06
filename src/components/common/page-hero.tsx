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
 * Shared opening block for inner pages. Left-aligned at every width, with
 * the headline a short step under the header on phones and a deeper one on
 * desktop, so the first screen holds the hero and the start of the first
 * section, not the hero alone.
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
      <div className='bl-container pb-8 pt-24 sm:pb-10 sm:pt-32 lg:pb-12 lg:pt-40'>
      <Reveal>
        <p className='bl-kicker'>{kicker}</p>
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
          <p className='mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg'>
            {description}
          </p>
        </Reveal>
      )}
      {children && (
        <Reveal delay={0.4} className='mt-8'>
          {children}
        </Reveal>
      )}
      </div>
    </section>
  );
}
