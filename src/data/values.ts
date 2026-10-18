import type { Locale } from '@/i18n/config';

export interface Value {
  /** The rule, as a short sentence. */
  title: string;
  /** One sentence on what it means in practice. */
  body: string;
}

/** The engineering principles. Shown on the homepage, /about, /services and /approach. */
export const values: Value[] = [
  {
    title: 'Purpose before technology.',
    body: 'Start with the problem, not the newest tool.',
  },
  {
    title: 'The right tool for the task.',
    body: 'Bigger, more complex systems are not automatically better.',
  },
  {
    title: 'Efficiency is designed.',
    body: 'Consider cost, latency, energy and complexity from the beginning.',
  },
  {
    title: 'People matter.',
    body: 'Technology should support human judgement, capability and well-being.',
  },
  {
    title: 'Impact is part of the decision.',
    body: 'Consider environmental, social and ethical consequences alongside performance.',
  },
  {
    title: 'Use the minimum necessary computation.',
    body: 'Meet the required standard of quality, reliability and safety without unnecessary work.',
  },
  {
    title: 'Keep learning.',
    body: 'Help people understand their tools and make better technology decisions over time.',
  },
];

const valuesDe: Value[] = [
  {
    title: 'Zweck vor Technologie.',
    body: 'Mit dem Problem beginnen, nicht mit dem neuesten Werkzeug.',
  },
  {
    title: 'Das richtige Werkzeug für die Aufgabe.',
    body: 'Größere, komplexere Systeme sind nicht automatisch besser.',
  },
  {
    title: 'Effizienz wird entworfen.',
    body: 'Kosten, Latenz, Energie und Komplexität von Anfang an mitdenken.',
  },
  {
    title: 'Menschen zählen.',
    body: 'Technologie soll menschliches Urteil, Können und Wohlbefinden unterstützen.',
  },
  {
    title: 'Wirkung ist Teil der Entscheidung.',
    body: 'Ökologische, soziale und ethische Folgen neben der Leistung berücksichtigen.',
  },
  {
    title: 'So wenig Rechenleistung wie nötig.',
    body: 'Den geforderten Standard an Qualität, Zuverlässigkeit und Sicherheit erfüllen, ohne unnötige Arbeit.',
  },
  {
    title: 'Weiter lernen.',
    body: 'Menschen helfen, ihre Werkzeuge zu verstehen und mit der Zeit bessere Technologieentscheidungen zu treffen.',
  },
];

export function getValues(locale: Locale): Value[] {
  return locale === 'de' ? valuesDe : values;
}
