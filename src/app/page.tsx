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
 * The program first, then the proof behind it: the course player straight
 * after the hero, the figures and the work, the three pillars, the stack,
 * the two offices on the globe and how conscious use works, what clients
 * said, questions, and the form.
 */
export default async function HomePage() {
  const dict = await getDictionary();
  // The program questions lead; two studio questions (how AI is used in
  // what we build, and where the team is) round the list off.
  const studio = getFaqs(dict.locale, 'studio');
  const faqs = [
    ...getFaqs(dict.locale, 'program').slice(0, 3),
    ...studio.filter((_, index) => index === 1 || index === 4),
  ];

  return (
    <>
      <Hero dict={dict} />
      <CourseVideos
        dict={dict}
        kicker={dict.program.kicker}
        title={dict.program.title}
        accentWords={[...dict.program.accent]}
        description={dict.program.description}
        showProgramLink
        className='bl-band-white'
      />
      <Numbers dict={dict} />
      <ProjectsTeaser dict={dict} />
      <Pillars dict={dict} />
      <Technologies dict={dict} />
      <GlobalReach dict={dict} />
      <HowItWorks dict={dict} />
      <Testimonials dict={dict} />
      <FaqSection
        items={faqs}
        kicker={dict.faq.kicker}
        title={dict.faq.title}
        accentWords={[...dict.faq.accent]}
        description={dict.faq.description}
        className='bl-band-stone bl-rule'
      />
      <ContactSection dict={dict} />
    </>
  );
}
