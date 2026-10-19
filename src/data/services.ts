import type { Locale } from '@/i18n/config';

export type ServiceId =
  | 'product-development'
  | 'product-engineering'
  | 'ai-automation'
  | 'systems-integrations'
  | 'architecture-optimisation'
  | 'education-guidance'
  | 'product-improvement';

export interface Service {
  id: ServiceId;
  title: string;
  /** Two sentences: what it is for, and how we go about it. */
  body: string;
}

/** What we do, from a first idea to improving what already runs. */
export const services: Service[] = [
  {
    id: 'product-development',
    title: 'Digital Product Development',
    body: 'From idea to a product people actually use. Discovery, design, architecture and development, focused on real needs and long-term value.',
  },
  {
    id: 'product-engineering',
    title: 'Product Engineering',
    body: 'Reliable software that grows with the product. Deliberate technical choices, no complexity without a reason.',
  },
  {
    id: 'ai-automation',
    title: 'AI and Automation',
    body: 'AI where it genuinely helps, and nowhere else. We pick the tools, design the workflows and make the costs and limits clear.',
  },
  {
    id: 'systems-integrations',
    title: 'Systems and Integrations',
    body: 'Tools and services that finally talk to each other. Systems you can understand, maintain and hand over.',
  },
  {
    id: 'architecture-optimisation',
    title: 'Architecture and Optimisation',
    body: 'Faster, cheaper, simpler. We find the leanest system that still meets your bar for quality, reliability and safety.',
  },
  {
    id: 'education-guidance',
    title: 'Technology Education and Guidance',
    body: 'Confident technology decisions, made in-house. Practical guidance on choosing, applying and judging tools, AI included.',
  },
  {
    id: 'product-improvement',
    title: 'Product Improvement',
    body: 'Make what you have more useful and cheaper to keep. We find what needs attention, what can be simplified and what should not be built at all.',
  },
];

/** German copy, same ids and order as `services`. */
const servicesDe: Service[] = [
  {
    id: 'product-development',
    title: 'Digitale Produktentwicklung',
    body: 'Von der Idee zum Produkt, das Menschen wirklich nutzen. Analyse, Design, Architektur und Entwicklung, ausgerichtet auf echte Bedürfnisse und langfristigen Wert.',
  },
  {
    id: 'product-engineering',
    title: 'Product Engineering',
    body: 'Zuverlässige Software, die mit dem Produkt wächst. Bewusste technische Entscheidungen, keine Komplexität ohne Grund.',
  },
  {
    id: 'ai-automation',
    title: 'KI und Automatisierung',
    body: 'KI dort, wo sie wirklich hilft, und sonst nirgends. Wir wählen die Werkzeuge, gestalten die Abläufe und machen Kosten und Grenzen klar.',
  },
  {
    id: 'systems-integrations',
    title: 'Systeme und Integrationen',
    body: 'Werkzeuge und Dienste, die endlich miteinander sprechen. Systeme, die Sie verstehen, warten und übergeben können.',
  },
  {
    id: 'architecture-optimisation',
    title: 'Architektur und Optimierung',
    body: 'Schneller, günstiger, einfacher. Wir finden das schlankste System, das Ihre Anforderungen an Qualität, Zuverlässigkeit und Sicherheit noch erfüllt.',
  },
  {
    id: 'education-guidance',
    title: 'Technologiebildung und Beratung',
    body: 'Sichere Technologieentscheidungen, im eigenen Haus. Praktische Anleitung zum Auswählen, Anwenden und Beurteilen von Werkzeugen, KI eingeschlossen.',
  },
  {
    id: 'product-improvement',
    title: 'Produktverbesserung',
    body: 'Was Sie haben, nützlicher und günstiger im Unterhalt machen. Wir finden, was Aufmerksamkeit braucht, was sich vereinfachen lässt und was gar nicht gebaut werden sollte.',
  },
];

export function getServices(locale: Locale): Service[] {
  return locale === 'de' ? servicesDe : services;
}
