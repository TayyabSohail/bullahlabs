import { Compare } from '@/components/sections/compare';
import {
  Audience,
  Pillars,
  ProgramTiers,
} from '@/components/sections/conscious-ai';
import { ContactSection } from '@/components/sections/contact-section';
import { Hero } from '@/components/sections/hero';
import { Origin } from '@/components/sections/origin';

import { getDictionary } from '@/i18n/server';

/**
 * Six steps and the form: what we do, where the name comes from, the three pillars, one task shown
 * both ways, the four tiers, who it is for. Detail lives on the program page.
 */
export default async function HomePage() {
  const dict = await getDictionary();

  return (
    <>
      <Hero dict={dict} />
      <Origin dict={dict} />
      <Pillars dict={dict} />
      <Compare dict={dict} />
      <ProgramTiers dict={dict} className='bl-band-stone' />
      <Audience dict={dict} className='bl-band-white' />
      <ContactSection dict={dict} />
    </>
  );
}
