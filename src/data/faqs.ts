import type { Locale } from '@/i18n/config';

export interface Faq {
  question: string;
  answer: string;
}

/** General questions. The homepage shows the first four. */
export const faqs: Faq[] = [
  {
    question: 'What is Conscious AI?',
    answer:
      'A practical program that teaches non-technical knowledge workers when, why and how to use AI well. It starts with a free fundamentals course and continues with three paid tiers: Practitioner for your own tools, Role Tracks for your job, and Team for a whole organisation. You can stop at any tier with a complete, usable result.',
  },
  {
    question: 'Who is it for?',
    answer:
      'People in marketing, sales, customer success, operations, HR, finance and product roles who use AI at work or are about to, and the L&D, HR and operations leaders responsible for them. No technical background is needed.',
  },
  {
    question: 'How is it different from other AI training?',
    answer:
      'Most courses teach how to operate a tool. We teach judgement: when AI is the right choice, how to reach a reliable result in fewer rounds, how to check it, and when a formula or a search does the job better. Every module ends in something you built from your own work.',
  },
  {
    question: 'Do you still build software for clients?',
    answer:
      'Yes. Our engineering team builds web platforms, AI systems and automation to the same principles the program teaches. Every case study on this site opens with the principle that keeps that product lean.',
  },
  {
    question: 'What does the free course cover?',
    answer:
      'Five self-paced modules that work with any AI tool: why efficiency matters, choosing the right AI for the task, understanding workflow waste, designing the smallest reliable system, and measuring the result. You leave with one audited workflow and a personal optimization checklist.',
  },
  {
    question: 'What does it cost?',
    answer:
      'AI Fundamentals is free. The paid tiers are not priced publicly. Tell us about yourself or your team and we will reply with what applies.',
  },
  {
    question: 'How do you talk about sustainability?',
    answer:
      'Carefully. We do not claim an environmental figure for a single prompt. We focus on unnecessary usage repeated across teams and workflows, which is where cost and computation add up, and the Team tier reports estimated energy use alongside cost and time.',
  },
  {
    question: 'Where is the team based?',
    answer:
      'Our Asian office is in Islamabad and our European office is in Fellbach, Germany. That gives clients in Europe a local contact and a working-hours overlap with the whole team.',
  },
  {
    question: 'Do you sign NDAs and data processing agreements?',
    answer:
      'Yes. We routinely sign NDAs before discovery and provide a GDPR-compliant data processing agreement for projects that involve personal data.',
  },
];

/** German copy, in the same order as `faqs`. */
const faqsDe: Faq[] = [
  {
    question: 'Was ist Conscious AI?',
    answer:
      'Ein praktisches Programm, das nicht-technischen Wissensarbeitenden vermittelt, wann, warum und wie man KI gut einsetzt. Es beginnt mit einem kostenlosen Grundlagenkurs und setzt sich in drei kostenpflichtigen Stufen fort: Practitioner für Ihre eigenen Werkzeuge, Role Tracks für Ihren Beruf und Team für die ganze Organisation. Sie können auf jeder Stufe mit einem vollständigen, nutzbaren Ergebnis aufhören.',
  },
  {
    question: 'Für wen ist es gedacht?',
    answer:
      'Für Menschen in Marketing, Vertrieb, Customer Success, Operations, HR, Finanzen und Produktrollen, die KI bei der Arbeit nutzen oder bald nutzen werden, und für die Verantwortlichen in Personalentwicklung, HR und Operations. Technisches Vorwissen ist nicht nötig.',
  },
  {
    question: 'Worin unterscheidet es sich von anderen KI-Schulungen?',
    answer:
      'Die meisten Kurse zeigen, wie man ein Werkzeug bedient. Wir vermitteln Urteilsvermögen: wann KI die richtige Wahl ist, wie man in weniger Runden zu einem verlässlichen Ergebnis kommt, wie man es prüft und wann eine Formel oder eine Suche die Aufgabe besser löst. Jedes Modul endet mit etwas, das Sie aus Ihrer eigenen Arbeit gebaut haben.',
  },
  {
    question: 'Bauen Sie weiterhin Software für Kunden?',
    answer:
      'Ja. Unser Engineering-Team baut Webplattformen, KI-Systeme und Automatisierung nach denselben Prinzipien, die das Programm lehrt. Jede Fallstudie auf dieser Website beginnt mit dem Prinzip, das das jeweilige Produkt schlank hält.',
  },
  {
    question: 'Was behandelt der kostenlose Kurs?',
    answer:
      'Fünf Module im eigenen Tempo, die mit jedem KI-Werkzeug funktionieren: warum Effizienz zählt, die richtige KI für die Aufgabe, Verschwendung in Abläufen verstehen, das kleinste zuverlässige System entwerfen und das Ergebnis messen. Sie gehen mit einem geprüften Ablauf und einer persönlichen Optimierungs-Checkliste heraus.',
  },
  {
    question: 'Was kostet es?',
    answer:
      'AI Fundamentals ist kostenlos. Die kostenpflichtigen Stufen haben keine öffentlichen Preise. Erzählen Sie uns von sich oder Ihrem Team, und wir antworten mit dem, was für Sie gilt.',
  },
  {
    question: 'Wie sprechen Sie über Nachhaltigkeit?',
    answer:
      'Vorsichtig. Wir nennen keine Umweltzahl für einen einzelnen Prompt. Wir konzentrieren uns auf unnötige Nutzung, die sich über Teams und Abläufe wiederholt, denn dort summieren sich Kosten und Rechenleistung, und die Team-Stufe weist den geschätzten Energieverbrauch neben Kosten und Zeit aus.',
  },
  {
    question: 'Wo sitzt das Team?',
    answer:
      'Unser asiatisches Büro ist in Islamabad, unser europäisches in Fellbach. So haben Kunden in Europa einen Ansprechpartner vor Ort und überlappende Arbeitszeiten mit dem gesamten Team.',
  },
  {
    question: 'Unterzeichnen Sie NDAs und Auftragsverarbeitungsverträge?',
    answer:
      'Ja. Wir unterzeichnen regelmäßig NDAs vor dem ersten Gespräch und stellen für Projekte mit personenbezogenen Daten einen DSGVO-konformen Auftragsverarbeitungsvertrag bereit.',
  },
];

export function getFaqs(locale: Locale): Faq[] {
  return locale === 'de' ? faqsDe : faqs;
}
