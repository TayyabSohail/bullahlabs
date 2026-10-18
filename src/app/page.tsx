import { ConsciousAiIntro } from '@/components/sections/conscious-ai-intro';
import { ConsciousTechnology } from '@/components/sections/conscious-technology';
import { ContactSection } from '@/components/sections/contact-section';
import { FaqSection } from '@/components/sections/faq';
import { GlobalReach } from '@/components/sections/global-reach';
import { Hero } from '@/components/sections/hero';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Numbers } from '@/components/sections/numbers';
import { Principles } from '@/components/sections/principles';
import { ProjectsTeaser } from '@/components/sections/projects-teaser';
import { Services } from '@/components/sections/services';
import { Technologies } from '@/components/sections/technologies';
import { Testimonials } from '@/components/sections/testimonials';
import { WhoWeAre } from '@/components/sections/who-we-are';

import { getFaqs } from '@/data/faqs';
import { getDictionary } from '@/i18n/server';

/**
 * The landing page, top to bottom: what we build and why, Conscious AI,
 * why technology is never just technology, the figures, the work, the
 * services, the stack, the two offices on the globe, who we are, how we
 * work, what clients said, the engineering principles, questions, and the
 * form.
 */
export default async function HomePage() {
  const dict = await getDictionary();

  return (
    <>
      <Hero dict={dict} />
      <ConsciousAiIntro dict={dict} className='bl-band-stone' />
      <ConsciousTechnology dict={dict} className='bl-band-white' />
      <Numbers dict={dict} />
      <ProjectsTeaser dict={dict} />
      <Services dict={dict} className='bl-band-stone' />
      <Technologies dict={dict} />
      <GlobalReach dict={dict} />
      <WhoWeAre dict={dict} className='bl-band-stone' />
      <HowItWorks dict={dict} className='bl-band-white' />
      <Testimonials dict={dict} className='bl-band-stone' />
      <Principles dict={dict} className='bl-band-white' />
      <FaqSection
        items={getFaqs(dict.locale)}
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
