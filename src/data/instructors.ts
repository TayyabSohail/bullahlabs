import type { Locale } from '@/i18n/config';

export type Instructor = {
  name: string;
  firstName: string;
  role: string;
  tagline: string;
  /** One or two sentences: who they are, why they teach this. */
  bio: string;
  image: string;
  /** Where the portrait is cropped to, as an object-position class. */
  focus: string;
  school: string;
  /** The longer story, kept behind a fold-out. */
  facts: [label: string, body: string][];
};

/**
 * Who teaches Conscious AI. Shared by the course section on /conscious-ai
 * and the free-course card in the page corner. The English list is the
 * source; the German one carries the same people with translated copy.
 */
export const instructors: Instructor[] = [
  {
    name: 'M. Umair Khan',
    firstName: 'Umair',
    role: 'Lead Instructor',
    tagline: 'Teacher of teachers.',
    bio: 'Harvard-trained Fulbright scholar and ed-tech co-founder. He makes sure the lessons actually stick.',
    image: '/images/umair-khan.jpg',
    focus: 'object-[center_18%]',
    school: 'Harvard Graduate School of Education',
    facts: [
      [
        'Before Bullah Labs',
        'Co-founded Quva (2018), ed-tech for teacher training; maths-pedagogy courses for teacher education in Pakistan since 2016.',
      ],
      [
        'Education',
        "Master's in International Education Policy, Harvard Graduate School of Education. Mechanical engineer by training.",
      ],
      ['Off the clock', 'Calligraphy, poetry and classical music.'],
    ],
  },
];

const instructorsDe: Instructor[] = [
  {
    ...instructors[0],
    role: 'Leitender Dozent',
    tagline: 'Lehrer der Lehrer.',
    bio: 'In Harvard ausgebildeter Fulbright-Stipendiat und Ed-Tech-Mitgründer. Er sorgt dafür, dass die Lektionen wirklich hängen bleiben.',
    facts: [
      [
        'Vor Bullah Labs',
        'Mitgründer von Quva (2018), Ed-Tech für Lehrerfortbildung; seit 2016 Kurse zur Mathematikdidaktik in der Lehrerausbildung in Pakistan.',
      ],
      [
        'Ausbildung',
        'Master in International Education Policy, Harvard Graduate School of Education. Maschinenbauingenieur von Haus aus.',
      ],
      ['Nach Feierabend', 'Kalligrafie, Poesie und klassische Musik.'],
    ],
  },
];

const BY_LOCALE: Record<Locale, Instructor[]> = {
  en: instructors,
  de: instructorsDe,
};

export function getInstructors(locale: Locale): Instructor[] {
  return BY_LOCALE[locale] ?? instructors;
}

export function getLeadInstructor(locale: Locale): Instructor {
  return getInstructors(locale)[0];
}

export const leadInstructor = instructors[0];
