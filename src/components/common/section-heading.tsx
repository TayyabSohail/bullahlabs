import { Reveal } from '@/components/motion/reveal';
import { TextReveal } from '@/components/motion/text-reveal';

import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  kicker: string;
  title: string;
  /** Word indexes rendered in the serif accent style. */
  accentWords?: number[];
  description?: string;
  /** Whether the description sits alongside or directly below the title. */
  descriptionPosition?: 'aside' | 'below';
  /** Slot on the right of the description, e.g. a link. */
  aside?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
  as?: 'h1' | 'h2';
}

export function SectionHeading({
  kicker,
  title,
  accentWords,
  description,
  descriptionPosition = 'aside',
  aside,
  align = 'left',
  className,
  as = 'h2',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        descriptionPosition === 'aside'
          ? 'grid gap-4 md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-8'
          : 'block',
        align === 'left' && 'text-center md:text-left',
        align === 'center' &&
          'text-center md:grid-cols-1 md:justify-items-center',
        className,
      )}
    >
      <div>
        <Reveal>
          <p
            className={cn(
              'bl-kicker justify-center md:justify-start',
              align === 'center' && 'md:justify-center',
            )}
          >
            {kicker}
          </p>
        </Reveal>
        <TextReveal
          as={as}
          text={title}
          accentWords={accentWords}
          className={cn(
            'bl-display mt-4 justify-center text-display-lg text-foreground md:justify-start',
            align === 'center' && 'md:justify-center',
          )}
        />
      </div>
      {(description || aside) && (
        <Reveal
          delay={0.15}
          className={cn(
            'flex flex-col items-center gap-4 md:items-start',
            descriptionPosition === 'aside' && 'md:items-end',
            descriptionPosition === 'below' && 'mt-4',
            align === 'center' && 'items-center md:items-center',
          )}
        >
          {description && (
            <p
              className={cn(
                'mx-auto max-w-md text-base leading-relaxed text-muted-foreground md:mx-0 md:text-lg',
                descriptionPosition === 'aside' &&
                  align === 'left' &&
                  'md:text-right',
              )}
            >
              {description}
            </p>
          )}
          {aside}
        </Reveal>
      )}
    </div>
  );
}
