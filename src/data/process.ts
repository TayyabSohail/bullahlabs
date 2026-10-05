import type { Locale } from '@/i18n/config';

export interface ProcessStep {
  title: string;
  duration: string;
  summary: string;
  outcome: string;
}

/** How an engagement runs, in three steps a client actually experiences. */
export const processSteps: ProcessStep[] = [
  {
    title: 'Brief',
    duration: 'Week 1',
    summary:
      'One call to understand the problem, then a written scope, a fixed quote and a launch date within five working days.',
    outcome: 'You know exactly what you will get, when, and for how much.',
  },
  {
    title: 'Build',
    duration: 'Weeks 2-8',
    summary:
      'A working version on staging at the end of every sprint, with a short written update. Change your mind early and it costs nothing.',
    outcome: 'No surprises at the end, because there is no "the end".',
  },
  {
    title: 'Launch',
    duration: 'Launch week and after',
    summary:
      'We ship, monitor it live, fix what breaks and keep maintaining it. Stay on a maintenance plan or take it in-house with full documentation. We do not hand over and disappear.',
    outcome: 'A product that is yours, running, maintained, and ready to grow.',
  },
];

export interface Guarantee {
  title: string;
  body: string;
}

/** Commitments repeated in every proposal. */
export const guarantees: Guarantee[] = [
  {
    title: 'Fixed price',
    body: 'Quoted in writing, per phase. Custom scopes too.',
  },
  { title: 'Fixed date', body: 'Agreed before work starts.' },
  {
    title: 'Maintained after launch',
    body: 'Support, fixes and updates. We stay accountable.',
  },
  { title: 'You own it all', body: 'Code, accounts and designs.' },
  { title: '1 business day', body: 'Reply time on every message.' },
];

export interface Value {
  title: string;
  body: string;
}

export const values: Value[] = [
  {
    title: 'The smallest reliable system',
    body: 'Use the minimum that reliably does the job. Rules and ordinary software before AI, a lighter model before a heavier one.',
  },
  {
    title: 'People stay in the loop',
    body: 'Efficiency never comes at the cost of quality, accuracy or safety. Where an error is expensive, a person checks before anything ships.',
  },
  {
    title: 'Measure before and after',
    body: 'Record a baseline, change one thing, compare. We keep what the numbers support and drop what they do not.',
  },
  {
    title: 'Write it down',
    body: 'Decisions and handover notes are documented as we go, so your team can run what we built without us.',
  },
];

const valuesDe: Value[] = [
  {
    title: 'Das kleinste zuverlässige System',
    body: 'Das Minimum einsetzen, das die Aufgabe zuverlässig erledigt. Regeln und gewöhnliche Software vor KI, ein leichteres Modell vor einem schwereren.',
  },
  {
    title: 'Menschen bleiben beteiligt',
    body: 'Effizienz geht nie auf Kosten von Qualität, Genauigkeit oder Sicherheit. Wo ein Fehler teuer ist, prüft ein Mensch, bevor etwas ausgeliefert wird.',
  },
  {
    title: 'Vorher und nachher messen',
    body: 'Ausgangswert festhalten, eine Sache ändern, vergleichen. Wir behalten, was die Zahlen stützen, und verwerfen den Rest.',
  },
  {
    title: 'Alles aufschreiben',
    body: 'Entscheidungen und Übergabenotizen entstehen laufend, damit Ihr Team ohne uns betreiben kann, was wir gebaut haben.',
  },
];

const processStepsDe: ProcessStep[] = [
  {
    title: 'Briefing',
    duration: 'Woche 1',
    summary:
      'Ein Gespräch, um das Problem zu verstehen, dann ein schriftlicher Leistungsumfang, ein Festangebot und ein Launch-Termin innerhalb von fünf Werktagen.',
    outcome: 'Sie wissen genau, was Sie bekommen, wann und zu welchem Preis.',
  },
  {
    title: 'Umsetzung',
    duration: 'Wochen 2-8',
    summary:
      'Am Ende jedes Sprints eine lauffähige Version auf Staging, mit einem kurzen schriftlichen Update. Wenn Sie früh umdenken, kostet es nichts.',
    outcome: 'Keine Überraschungen am Ende, weil es kein „Ende“ gibt.',
  },
  {
    title: 'Launch',
    duration: 'Launch-Woche und danach',
    summary:
      'Wir liefern aus, überwachen den Livebetrieb, beheben, was bricht, und warten weiter. Bleiben Sie im Wartungsvertrag oder übernehmen Sie selbst, mit vollständiger Dokumentation. Wir übergeben nicht und verschwinden.',
    outcome:
      'Ein Produkt, das Ihnen gehört, läuft, gewartet wird und wachsen kann.',
  },
];

const guaranteesDe: Guarantee[] = [
  {
    title: 'Festpreis',
    body: 'Schriftlich je Phase kalkuliert. Auch für individuelle Umfänge.',
  },
  { title: 'Fester Termin', body: 'Vereinbart, bevor die Arbeit beginnt.' },
  {
    title: 'Wartung nach dem Launch',
    body: 'Support, Fehlerbehebung und Updates. Wir bleiben verantwortlich.',
  },
  { title: 'Alles gehört Ihnen', body: 'Code, Zugänge und Designs.' },
  { title: '1 Werktag', body: 'Antwortzeit auf jede Nachricht.' },
];

export function getValues(locale: Locale): Value[] {
  return locale === 'de' ? valuesDe : values;
}

export function getProcessSteps(locale: Locale): ProcessStep[] {
  return locale === 'de' ? processStepsDe : processSteps;
}

export function getGuarantees(locale: Locale): Guarantee[] {
  return locale === 'de' ? guaranteesDe : guarantees;
}
