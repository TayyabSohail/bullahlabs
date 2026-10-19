import type { Locale } from '@/i18n/config';

export interface Faq {
  question: string;
  answer: string;
}

/** The questions we get most, answered on the homepage. */
export const faqs: Faq[] = [
  {
    question: 'What does Bullah Labs do?',
    answer:
      'We design, build and improve digital products: web and mobile apps, integrations and automation. We also train teams to use AI well.',
  },
  {
    question: 'Do you only work with AI?',
    answer:
      'No. Most of our work is product and engineering. AI is one tool among many, used where it earns its place.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Write to us or book a 30-minute intro call. We reply within one business day, and sign a mutual NDA on request before any scoping conversation.',
  },
  {
    question: 'Can you improve an existing product?',
    answer:
      'Yes. We review architecture, performance, cost and workflows, then prioritise the changes with the biggest return.',
  },
  {
    question: 'Can you help us use AI responsibly?',
    answer:
      'Yes. We help teams find the right use cases, choose suitable models and tools, and understand the limits, costs and impact.',
  },
  {
    question: 'Who owns what you build?',
    answer:
      'You do. Code, designs and documentation are assigned to you on payment, in repositories registered to your company.',
  },
];

/** German copy, in the same order as `faqs`. */
const faqsDe: Faq[] = [
  {
    question: 'Was macht Bullah Labs?',
    answer:
      'Wir entwerfen, bauen und verbessern digitale Produkte: Web- und Mobile-Apps, Integrationen und Automatisierung. Außerdem schulen wir Teams darin, KI gut zu nutzen.',
  },
  {
    question: 'Arbeiten Sie nur mit KI?',
    answer:
      'Nein. Der größte Teil unserer Arbeit ist Produkt und Engineering. KI ist ein Werkzeug unter vielen, eingesetzt dort, wo es sich lohnt.',
  },
  {
    question: 'Wie fangen wir an?',
    answer:
      'Schreiben Sie uns oder buchen Sie ein 30-minütiges Erstgespräch. Wir antworten innerhalb eines Werktags und unterzeichnen auf Wunsch vor jedem Gespräch über den Leistungsumfang ein beidseitiges NDA.',
  },
  {
    question: 'Können Sie ein bestehendes Produkt verbessern?',
    answer:
      'Ja. Wir prüfen Architektur, Leistung, Kosten und Abläufe und priorisieren dann die Änderungen mit dem größten Ertrag.',
  },
  {
    question: 'Können Sie uns helfen, KI verantwortungsvoll einzusetzen?',
    answer:
      'Ja. Wir helfen Teams, die richtigen Anwendungsfälle zu finden, geeignete Modelle und Werkzeuge zu wählen und Grenzen, Kosten und Wirkung zu verstehen.',
  },
  {
    question: 'Wem gehört, was Sie bauen?',
    answer:
      'Ihnen. Code, Designs und Dokumentation gehen mit der Zahlung auf Sie über, in Repositories, die auf Ihr Unternehmen laufen.',
  },
];

export function getFaqs(locale: Locale): Faq[] {
  return locale === 'de' ? faqsDe : faqs;
}
