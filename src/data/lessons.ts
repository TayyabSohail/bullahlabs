import type { Locale } from '@/i18n/config';

import { coursesDe } from './lessons.de';

/**
 * The Conscious AI course as the site plays it: modules of short video
 * lessons. A lesson without a `video` is listed as coming soon; set the
 * source once it is published and the player picks it up.
 *
 * The six steps of the method (see `howItWorks` in the dictionaries) are
 * grouped into three modules: deciding before AI is opened, getting the
 * result, then checking it and keeping the habit.
 */

export type VideoSource =
  /** YouTube video id. Embedded through youtube-nocookie.com after a click. */
  | { kind: 'youtube'; id: string }
  /** Vimeo video id, with the hash for unlisted videos if there is one. */
  | { kind: 'vimeo'; id: string; hash?: string }
  /** A hosted file, e.g. under /public/course or a CDN. */
  | { kind: 'file'; src: string; poster?: string };

export interface Lesson {
  /** Stable id; watched state is stored against it in the browser. */
  id: string;
  title: string;
  /** One or two sentences: what changes in how you work after watching. */
  summary: string;
  /** Running time in minutes. Omit while the lesson is unrecorded. */
  minutes?: number;
  /** Omit until the lesson is published. */
  video?: VideoSource;
}

export interface CourseModule {
  id: string;
  title: string;
  /** One line under the title. */
  tagline: string;
  lessons: Lesson[];
}

/** A course: a named set of modules. The player lists every course. */
export interface Course {
  id: string;
  title: string;
  /** One line under the title. */
  tagline: string;
  modules: CourseModule[];
}

export const modules: CourseModule[] = [
  {
    id: 'decide',
    title: 'Before you open AI',
    tagline: 'Decide first, type second.',
    lessons: [
      {
        id: 'decide-01',
        title: 'Does AI belong here?',
        summary:
          'One question to ask before you open a chatbot. Plenty of jobs go faster with a formula, a template or a quick search.',
      },
      {
        id: 'decide-02',
        title: 'Pick the right-sized tool',
        summary:
          'A light model for a draft, a heavy one only when the result is hard to check. Right-sizing is where most of the saving sits.',
      },
      {
        id: 'decide-03',
        title: 'What a prompt really costs',
        summary:
          'Where the time, the money and the computation go in one round with a model, so every extra round has to earn its place.',
      },
    ],
  },
  {
    id: 'result',
    title: 'Getting the result',
    tagline: 'Say it once, properly.',
    lessons: [
      {
        id: 'result-01',
        title: 'Say it once, properly',
        summary:
          'Task, audience, length and shape in the first prompt. The habit that turns six rounds into one.',
      },
      {
        id: 'result-02',
        title: 'Share only the part that matters',
        summary:
          'Why the two sections beat the whole report: better answers, less context, nothing shared that did not need to be.',
      },
      {
        id: 'result-03',
        title: 'Stop when it meets the requirement',
        summary:
          'Editing the first usable draft instead of regenerating until one feels right. The goal is a checked result, not a perfect one.',
      },
    ],
  },
  {
    id: 'check',
    title: 'Checking and keeping it',
    tagline: 'AI drafts. You decide.',
    lessons: [
      {
        id: 'check-01',
        title: 'Check what comes back',
        summary:
          'Figures, sources and claims, verified before anything leaves your hands. A three-minute routine that catches most of it.',
      },
      {
        id: 'check-02',
        title: 'Measure, then make it a habit',
        summary:
          'Record a baseline, change one thing, compare. How to see the saving in hours, bills and footprint.',
      },
      {
        id: 'check-03',
        title: 'Teach it to the people around you',
        summary:
          'Turning your own routine into one a team can follow, without a policy document nobody reads.',
      },
    ],
  },
];

/** Every course the site plays. Add a course here and the player lists it. */
export const courses: Course[] = [
  {
    id: 'conscious-ai',
    title: 'Coming Soon',
    tagline: 'Less AI, better AI: the free course.',
    modules,
  },
];

export function getCourses(locale: Locale): Course[] {
  return locale === 'de' ? coursesDe : courses;
}

/** Every lesson in order, with the module it belongs to. */
export function flattenLessons(list: CourseModule[]) {
  return list.flatMap((module, moduleIndex) =>
    module.lessons.map((lesson, lessonIndex) => ({
      lesson,
      module,
      moduleIndex,
      lessonIndex,
    })),
  );
}

export type LessonEntry = ReturnType<typeof flattenLessons>[number];
