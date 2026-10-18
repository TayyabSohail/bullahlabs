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
      'We design, build and improve digital products and systems. We also help teams use technology, including AI, more effectively and responsibly.',
  },
  {
    question: 'Do you only work with AI?',
    answer:
      'No. AI is one part of our work. We also build software, improve products, connect systems and help teams make better technical decisions.',
  },
  {
    question: 'What does conscious technology mean?',
    answer:
      'It means considering more than whether something works. We look at usefulness, resource consumption, maintainability, human consequences and ethical implications.',
  },
  {
    question: 'Can you help us use AI responsibly?',
    answer:
      'Yes. We help teams identify appropriate use cases, choose suitable tools and models, improve workflows and understand the limits and impacts of AI.',
  },
  {
    question: 'Do you provide training and education?',
    answer:
      'We help people understand the technologies they use, make informed choices and develop practical skills. The focus is on applying technology thoughtfully, not adopting it for its own sake.',
  },
  {
    question: 'Can you improve an existing product?',
    answer:
      'Yes. We can review architecture, performance, complexity, costs and workflows, then prioritise improvements based on their value.',
  },
];

/** German copy, in the same order as `faqs`. */
const faqsDe: Faq[] = [
  {
    question: 'Was macht Bullah Labs?',
    answer:
      'Wir entwerfen, bauen und verbessern digitale Produkte und Systeme. Außerdem helfen wir Teams, Technologie, einschließlich KI, wirksamer und verantwortungsvoller einzusetzen.',
  },
  {
    question: 'Arbeiten Sie nur mit KI?',
    answer:
      'Nein. KI ist ein Teil unserer Arbeit. Wir bauen auch Software, verbessern Produkte, verbinden Systeme und helfen Teams, bessere technische Entscheidungen zu treffen.',
  },
  {
    question: 'Was bedeutet bewusste Technologie?',
    answer:
      'Es bedeutet, mehr zu betrachten als die Frage, ob etwas funktioniert. Wir schauen auf Nutzen, Ressourcenverbrauch, Wartbarkeit, Folgen für Menschen und ethische Implikationen.',
  },
  {
    question: 'Können Sie uns helfen, KI verantwortungsvoll einzusetzen?',
    answer:
      'Ja. Wir helfen Teams, passende Anwendungsfälle zu erkennen, geeignete Werkzeuge und Modelle zu wählen, Abläufe zu verbessern und die Grenzen und Auswirkungen von KI zu verstehen.',
  },
  {
    question: 'Bieten Sie Schulungen und Weiterbildung an?',
    answer:
      'Wir helfen Menschen, die Technologien zu verstehen, die sie nutzen, informierte Entscheidungen zu treffen und praktische Fähigkeiten aufzubauen. Im Mittelpunkt steht der bewusste Einsatz von Technologie, nicht ihre Einführung um ihrer selbst willen.',
  },
  {
    question: 'Können Sie ein bestehendes Produkt verbessern?',
    answer:
      'Ja. Wir können Architektur, Leistung, Komplexität, Kosten und Abläufe prüfen und Verbesserungen dann nach ihrem Wert priorisieren.',
  },
];

export function getFaqs(locale: Locale): Faq[] {
  return locale === 'de' ? faqsDe : faqs;
}
