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
    body: 'Bigger and more complex is not automatically better.',
  },
  {
    title: 'Efficiency is designed.',
    body: 'Cost, latency, energy and complexity are decided at the start, not patched at the end.',
  },
  {
    title: 'People matter.',
    body: 'Technology should support human judgement, capability and well-being.',
  },
  {
    title: 'Impact is part of the decision.',
    body: 'Environmental, social and ethical consequences count alongside performance.',
  },
  {
    title: 'Use the minimum necessary computation.',
    body: 'Meet the standard for quality, reliability and safety without unnecessary work.',
  },
  {
    title: 'Keep learning.',
    body: 'Help people understand their tools and make better decisions over time.',
  },
];

const valuesDe: Value[] = [
  {
    title: 'Zweck vor Technologie.',
    body: 'Mit dem Problem beginnen, nicht mit dem neuesten Werkzeug.',
  },
  {
    title: 'Das richtige Werkzeug für die Aufgabe.',
    body: 'Größer und komplexer ist nicht automatisch besser.',
  },
  {
    title: 'Effizienz wird entworfen.',
    body: 'Kosten, Latenz, Energie und Komplexität werden am Anfang entschieden, nicht am Ende geflickt.',
  },
  {
    title: 'Menschen zählen.',
    body: 'Technologie soll menschliches Urteil, Können und Wohlbefinden unterstützen.',
  },
  {
    title: 'Wirkung ist Teil der Entscheidung.',
    body: 'Ökologische, soziale und ethische Folgen zählen neben der Leistung.',
  },
  {
    title: 'So wenig Rechenleistung wie nötig.',
    body: 'Den geforderten Standard an Qualität, Zuverlässigkeit und Sicherheit erfüllen, ohne unnötige Arbeit.',
  },
  {
    title: 'Weiter lernen.',
    body: 'Menschen helfen, ihre Werkzeuge zu verstehen und mit der Zeit bessere Entscheidungen zu treffen.',
  },
];

export function getValues(locale: Locale): Value[] {
  return locale === 'de' ? valuesDe : values;
}
