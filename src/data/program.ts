import type { Locale } from '@/i18n/config';

import { programDe } from './program.de';

/**
 * The Conscious AI program: the three pillars it stands on. The course
 * itself lives off-site (see `siteConfig.courseUrl`); the site only shows
 * the pillars and the video placeholders on /conscious-ai and the homepage.
 */

export type PillarId = 'conscious-use' | 'trained-teams' | 'optimized-usage';

export interface Pillar {
  id: PillarId;
  title: string;
  /** One line that reads on from the title. */
  tagline: string;
  body: string;
}

export interface Program {
  pillars: Pillar[];
}

export const program: Program = {
  pillars: [
    {
      id: 'conscious-use',
      title: 'Conscious Use',
      tagline: 'Know when AI helps, and when it does not.',
      body: 'Understand when AI is the right choice, use it deliberately and judge what it gives back before you rely on it.',
    },
    {
      id: 'trained-teams',
      title: 'Trained Teams',
      tagline: 'Practical skill, in every non-technical role.',
      body: 'Role-relevant learning that builds real AI literacy and confidence in marketing, sales, operations, HR, finance and product teams.',
    },
    {
      id: 'optimized-usage',
      title: 'Optimized Usage',
      tagline: 'The smallest system that is still reliable.',
      body: 'The right tool and model for each task, lean workflows and less unnecessary computation, without giving up quality, reliability or safety.',
    },
  ],
};

export function getProgram(locale: Locale): Program {
  return locale === 'de' ? programDe : program;
}
