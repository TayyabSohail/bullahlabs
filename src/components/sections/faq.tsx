import { SectionHeading } from '@/components/common/section-heading';
import { Reveal } from '@/components/motion/reveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { cn } from '@/lib/utils';

import type { Faq } from '@/data/faqs';

interface FaqSectionProps {
  items: Faq[];
  kicker?: string;
  title?: string;
  accentWords?: number[];
  description?: string;
  className?: string;
}

export function FaqSection({
  items,
  kicker = 'Questions',
  title = 'Answers before you ask.',
  accentWords = [2],
  description,
  className,
}: FaqSectionProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <section className={cn('bl-section', className)}>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className='bl-container grid gap-6 sm:gap-10 lg:grid-cols-[0.8fr_1.2fr]'>
        <SectionHeading
          kicker={kicker}
          title={title}
          accentWords={accentWords}
          description={description}
          className='md:grid-cols-1 lg:sticky lg:top-32 lg:self-start'
        />
        <Reveal className='bl-card self-start px-4 sm:px-6'>
          <Accordion type='single' collapsible className='divide-y divide-line'>
            {items.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`faq-${index}`}
                className='border-b-0'
              >
                <AccordionTrigger className='group gap-4 border-l-2 border-transparent py-4 pl-3 text-left text-base font-medium transition-colors hover:border-brand hover:bg-brand-soft/30 hover:no-underline sm:py-5 sm:text-lg [&>svg]:hidden [&[data-state=open]]:border-brand [&[data-state=open]]:bg-brand-soft/30 [&[data-state=open]]:text-brand-text [&[data-state=open]_.bl-faq-mark]:rotate-45'>
                  <span className='flex min-w-0 flex-1 items-baseline gap-3'>
                    <span className='font-mono text-[10px] font-medium tracking-[0.14em] text-brand-text/70'>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{item.question}</span>
                  </span>
                  <span
                    aria-hidden='true'
                    className='bl-faq-mark flex h-7 w-7 shrink-0 items-center justify-center border border-ink font-mono text-base font-medium leading-none text-ink transition-[transform,background-color,color,border-color] duration-200 group-hover:border-brand group-hover:bg-brand group-hover:text-brand-foreground'
                  >
                    +
                  </span>
                </AccordionTrigger>
                <AccordionContent className='pb-5 pl-7 pr-4 text-base leading-relaxed text-muted-foreground sm:pl-9'>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
