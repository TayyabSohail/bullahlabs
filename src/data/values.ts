import type { Locale } from '@/i18n/config';

export interface Value {
  title: string;
  body: string;
}

/** The rules the program teaches and the company works by. Shown on /about. */
export const values: Value[] = [
  {
    title: 'The smallest reliable system',
    body: 'Use the minimum that reliably does the job. Rules and ordinary software before AI, a lighter model before a heavier one.',
  },
  {
    title: 'People stay in the loop',
    body: 'Efficiency never comes at the cost of quality, accuracy or safety. Where an error is expensive, a person checks before anything is used.',
  },
  {
    title: 'Measure before and after',
    body: 'Record a baseline, change one thing, compare. We keep what the numbers support and drop what they do not.',
  },
  {
    title: 'Write it down',
    body: 'Every module ends in something written: a checklist, a template, a policy. What is documented can be reused, shared and improved.',
  },
];

const valuesDe: Value[] = [
  {
    title: 'Das kleinste zuverlässige System',
    body: 'Das Minimum einsetzen, das die Aufgabe zuverlässig erledigt. Regeln und gewöhnliche Software vor KI, ein leichteres Modell vor einem schwereren.',
  },
  {
    title: 'Menschen bleiben beteiligt',
    body: 'Effizienz geht nie auf Kosten von Qualität, Genauigkeit oder Sicherheit. Wo ein Fehler teuer ist, prüft ein Mensch, bevor etwas verwendet wird.',
  },
  {
    title: 'Vorher und nachher messen',
    body: 'Ausgangswert festhalten, eine Sache ändern, vergleichen. Wir behalten, was die Zahlen stützen, und verwerfen den Rest.',
  },
  {
    title: 'Alles aufschreiben',
    body: 'Jedes Modul endet mit etwas Schriftlichem: einer Checkliste, einer Vorlage, einer Richtlinie. Was dokumentiert ist, lässt sich wiederverwenden, teilen und verbessern.',
  },
];

export function getValues(locale: Locale): Value[] {
  return locale === 'de' ? valuesDe : values;
}
