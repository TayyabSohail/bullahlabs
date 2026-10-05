import { Pillars, ProgramTiers } from '@/components/sections/conscious-ai';
import { ContactSection } from '@/components/sections/contact-section';
import { FaqSection } from '@/components/sections/faq';
import { GlobalReach } from '@/components/sections/global-reach';
import { Hero } from '@/components/sections/hero';
import { Numbers } from '@/components/sections/numbers';
import { ProjectsTeaser } from '@/components/sections/projects-teaser';
import { ServicesGrid } from '@/components/sections/services-grid';
import { Technologies } from '@/components/sections/technologies';
import { Testimonials } from '@/components/sections/testimonials';

import { getFaqs } from '@/data/faqs';
import { getDictionary } from '@/i18n/server';

export default async function HomePage() {
  const dict = await getDictionary();
  const faqs = getFaqs(dict.locale).slice(0, 4);

  return (
    <>
      <Hero dict={dict} />
      <Pillars dict={dict} />
      <ProgramTiers dict={dict} />
      <ProjectsTeaser dict={dict} className='bl-band-stone' />
      <Numbers dict={dict} className='bl-band-white' />
      <ServicesGrid dict={dict} className='bl-band-stone' />
      <Technologies dict={dict} />
      <GlobalReach dict={dict} />
      <Testimonials dict={dict} className='bl-band-stone' />
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
