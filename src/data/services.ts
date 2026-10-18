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
    body: 'Turn an idea into a product people can use. We support discovery, design, architecture and development, with a focus on real needs and long-term usefulness.',
  },
  {
    id: 'product-engineering',
    title: 'Product Engineering',
    body: 'Build reliable software that can grow with the product. We make deliberate technical choices rather than adding complexity without a clear reason.',
  },
  {
    id: 'ai-automation',
    title: 'AI and Automation',
    body: 'Identify where AI can genuinely help. We help teams select suitable tools, design useful workflows and understand the limitations, costs and wider impacts of AI.',
  },
  {
    id: 'systems-integrations',
    title: 'Systems and Integrations',
    body: 'Connect tools and services so information flows more smoothly. We aim for systems that are understandable, maintainable and fit for purpose.',
  },
  {
    id: 'architecture-optimisation',
    title: 'Architecture and Optimisation',
    body: 'Improve performance, latency, cost and complexity. We look for the simplest system that can meet the required standards of quality, reliability and safety.',
  },
  {
    id: 'education-guidance',
    title: 'Technology Education and Guidance',
    body: 'Help people understand the technology they use and the decisions behind it. Through practical guidance and knowledge-sharing, we build confidence in choosing, applying and evaluating technology with care for its environmental, social and ethical effects.',
  },
  {
    id: 'product-improvement',
    title: 'Product Improvement',
    body: 'Make existing products more useful, efficient and sustainable to maintain. We identify what needs attention, what can be simplified and what may not need to be built at all.',
  },
];

/** German copy, same ids and order as `services`. */
const servicesDe: Service[] = [
  {
    id: 'product-development',
    title: 'Digitale Produktentwicklung',
    body: 'Aus einer Idee wird ein Produkt, das Menschen nutzen können. Wir begleiten Analyse, Design, Architektur und Entwicklung, mit Blick auf echte Bedürfnisse und langfristigen Nutzen.',
  },
  {
    id: 'product-engineering',
    title: 'Product Engineering',
    body: 'Zuverlässige Software, die mit dem Produkt wachsen kann. Wir treffen technische Entscheidungen bewusst, statt Komplexität ohne klaren Grund hinzuzufügen.',
  },
  {
    id: 'ai-automation',
    title: 'KI und Automatisierung',
    body: 'Herausfinden, wo KI wirklich hilft. Wir unterstützen Teams dabei, passende Werkzeuge zu wählen, nützliche Abläufe zu gestalten und die Grenzen, Kosten und weiteren Auswirkungen von KI zu verstehen.',
  },
  {
    id: 'systems-integrations',
    title: 'Systeme und Integrationen',
    body: 'Werkzeuge und Dienste verbinden, damit Informationen reibungsloser fließen. Wir streben Systeme an, die verständlich, wartbar und zweckmäßig sind.',
  },
  {
    id: 'architecture-optimisation',
    title: 'Architektur und Optimierung',
    body: 'Leistung, Latenz, Kosten und Komplexität verbessern. Wir suchen das einfachste System, das die geforderten Standards an Qualität, Zuverlässigkeit und Sicherheit erfüllt.',
  },
  {
    id: 'education-guidance',
    title: 'Technologiebildung und Beratung',
    body: 'Menschen helfen, die Technologie zu verstehen, die sie nutzen, und die Entscheidungen dahinter. Mit praktischer Anleitung und geteiltem Wissen stärken wir die Sicherheit, Technologie auszuwählen, anzuwenden und zu bewerten, mit Blick auf ihre ökologischen, sozialen und ethischen Folgen.',
  },
  {
    id: 'product-improvement',
    title: 'Produktverbesserung',
    body: 'Bestehende Produkte nützlicher, effizienter und nachhaltiger wartbar machen. Wir finden heraus, was Aufmerksamkeit braucht, was sich vereinfachen lässt und was vielleicht gar nicht gebaut werden muss.',
  },
];

export function getServices(locale: Locale): Service[] {
  return locale === 'de' ? servicesDe : services;
}
