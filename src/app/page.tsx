import { Compare } from '@/components/sections/compare';
import { CourseVideos, Pillars } from '@/components/sections/conscious-ai';
import { ContactSection } from '@/components/sections/contact-section';
import { FaqSection } from '@/components/sections/faq';
import { GlobalReach } from '@/components/sections/global-reach';
import { Hero } from '@/components/sections/hero';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Numbers } from '@/components/sections/numbers';
import { ProjectsTeaser } from '@/components/sections/projects-teaser';
import { Technologies } from '@/components/sections/technologies';
import { Testimonials } from '@/components/sections/testimonials';

import { getFaqs } from '@/data/faqs';
import { getDictionary } from '@/i18n/server';

/**
 * Proof first, then the mindset: the figures and the work, the three
 * pillars and one task shown both ways; the stack, the two offices on the
 * globe and how conscious use works; what clients said; then the program,
 * questions about working with us, and the form.
 */
export default async function HomePage() {
  const dict = await getDictionary();
  const faqs = getFaqs(dict.locale, 'studio').slice(0, 4);

  return (
    <>
      <Hero dict={dict} />
      <Numbers dict={dict} />
      <ProjectsTeaser dict={dict} />
      <Pillars dict={dict} />
      <Compare dict={dict} />
      <Technologies dict={dict} />
      <GlobalReach dict={dict} />
      <HowItWorks dict={dict} />
      <Testimonials dict={dict} />
      <CourseVideos
        dict={dict}
        kicker={dict.program.kicker}
        title={dict.program.title}
        accentWords={[...dict.program.accent]}
        description={dict.program.description}
        showProgramLink
        className='bl-band-stone'
      />
      <FaqSection
        items={faqs}
        kicker={dict.faq.kicker}
        title={dict.faq.title}
        accentWords={[...dict.faq.accent]}
        description={dict.faq.description}
        className='bl-band-white bl-rule'
      />
      <ContactSection dict={dict} />
    </>
  );
}
