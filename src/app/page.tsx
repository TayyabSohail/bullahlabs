import { CommunitySection } from '@/components/sections/community';
import { ConsciousAiHome } from '@/components/sections/conscious-ai-home';
import { ContactSection } from '@/components/sections/contact-section';
import { FaqSection } from '@/components/sections/faq';
import { Hero } from '@/components/sections/hero';
import { LocationsHome } from '@/components/sections/locations-home';
import { OurDna } from '@/components/sections/our-dna';
import { Problem } from '@/components/sections/problem';
import { ProjectsTeaser } from '@/components/sections/projects-teaser';
import { Studio } from '@/components/sections/studio';
import { Technologies } from '@/components/sections/technologies';

import { getFaqs } from '@/data/faqs';
import { getDictionary } from '@/i18n/server';

/**
 * The landing page, top to bottom: who we are, the problem people arrive
 * with, how the studio works, a tool carousel, selected work, a Conscious AI
 * preview, figures and locations, contact and FAQ. Full company and program
 * information live on their dedicated pages.
 */
export default async function HomePage() {
  const dict = await getDictionary();

  return (
    <>
      <Hero dict={dict} />
      <OurDna />
      <Problem dict={dict} />
      <Studio />
      <Technologies dict={dict} carouselOnly />
      <ProjectsTeaser dict={dict} />
      <ConsciousAiHome dict={dict} />
      <CommunitySection dict={dict} />
      <LocationsHome />
      <ContactSection dict={dict} />
      <div id='faq' className='scroll-mt-24'>
        <FaqSection
          items={getFaqs(dict.locale)}
          kicker={dict.faq.kicker}
          title={dict.faq.title}
          accentWords={[...dict.faq.accent]}
          description={dict.faq.description}
          className='bl-band-mint bl-rule'
        />
      </div>
    </>
  );
}
