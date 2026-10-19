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
      <div className='bl-container grid gap-8 sm:gap-12 lg:grid-cols-[0.8fr_1.2fr]'>
        <SectionHeading
          kicker={kicker}
          title={title}
          accentWords={accentWords}
          description={description}
          className='md:grid-cols-1 lg:sticky lg:top-32 lg:self-start'
        />
        <Reveal className='bl-card px-5 sm:px-8'>
          <Accordion type='single' collapsible className='divide-y divide-line'>
            {items.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`faq-${index}`}
                className='border-b-0'
              >
                <AccordionTrigger className='gap-4 py-5 text-left text-base font-medium tracking-tight hover:no-underline sm:py-6 sm:text-lg [&>svg]:hidden [&[data-state=open]]:text-brand-text [&[data-state=open]_.bl-faq-mark]:rotate-45'>
                  <span className='flex-1'>{item.question}</span>
                  <span
                    aria-hidden='true'
                    className='bl-faq-mark flex h-7 w-7 shrink-0 items-center justify-center border border-ink font-mono text-base font-medium leading-none text-ink transition-transform duration-200'
                  >
                    +
                  </span>
                </AccordionTrigger>
                <AccordionContent className='pb-7 text-base leading-relaxed text-muted-foreground'>
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
