import type { Locale } from '@/i18n/config';

/**
 * Which part of the site a question belongs to. The homepage shows the
 * studio questions; the program page shows the program questions.
 */
export type FaqTopic = 'studio' | 'program';

export interface Faq {
  topic: FaqTopic;
  question: string;
  answer: string;
}

/** Studio questions first, then the program. */
export const faqs: Faq[] = [
  {
    topic: 'studio',
    question: 'What does an engagement with Bullah Labs look like?',
    answer:
      'Most projects start with a one-week discovery that ends in a written scope, a success metric and a fixed price for the first release. From there we ship weekly to a staging environment you can click through, with a demo at the end of each sprint. After launch we stay on to maintain what we built.',
  },
  {
    topic: 'studio',
    question: 'How do you use AI in the products you build?',
    answer:
      'Only where it earns its place. Rules, formulas and search handle what they can. A model is used where judgement over language is needed, with the smallest model that passes the check, only the context the task needs, results cached so nothing is computed twice, and a person or a test verifying what comes back. Every case study on the projects page names the principle it demonstrates.',
  },
  {
    topic: 'studio',
    question: 'Do you maintain what you build after launch?',
    answer:
      'Yes. We do not hand over and disappear. Every engagement comes with post-launch support, and a maintenance plan keeps us accountable after that: monitoring, bug fixes, dependency and security updates and small improvements, handled by an engineer who knows the codebase. You can take it in-house whenever you like, because the documentation is written as we go.',
  },
  {
    topic: 'studio',
    question: 'Who owns the code and the accounts?',
    answer:
      'You do, from day one. We work inside repositories, cloud accounts and third-party services registered to your company, so there is nothing to migrate when a project ends.',
  },
  {
    topic: 'studio',
    question: 'Where is the team based?',
    answer:
      'Our Asian office is in Islamabad and our European office is in Fellbach, Germany. That gives clients in Europe a local contact and a working-hours overlap with the whole team.',
  },
  {
    topic: 'studio',
    question: 'Can you take over an existing product?',
    answer:
      'Yes. We begin with a short technical audit, agree on what to keep, stabilise and improve, then work in the same codebase your team already knows.',
  },
  {
    topic: 'studio',
    question: 'Do you sign NDAs and data processing agreements?',
    answer:
      'Yes. We routinely sign NDAs before discovery and provide a GDPR-compliant data processing agreement for projects that involve personal data.',
  },
  {
    topic: 'studio',
    question: 'Which technologies do you use?',
    answer:
      'We usually use Next.js, React, TypeScript, PostgreSQL, Supabase and cloud platforms such as Vercel or AWS, with Claude, OpenAI or open models behind one router where a product needs AI. The exact stack follows the product, integrations, team and long-term operating cost rather than a fixed house preference.',
  },
  {
    topic: 'studio',
    question: 'What if we need updates or changes after launch?',
    answer:
      'We can continue with maintenance, small improvements or a new product phase. Ongoing work can run as a monthly maintenance plan, a retainer or a separately scoped fixed-price phase.',
  },
  {
    topic: 'studio',
    question: 'How do you keep our data private and secure?',
    answer:
      'We minimise the data we handle, separate customer access, use least-privilege permissions and build auditability into the product. We can sign an NDA before discovery and provide a GDPR-compliant data processing agreement where personal data is involved.',
  },
  {
    topic: 'studio',
    question: 'Can you connect our product to other tools or platforms?',
    answer:
      'Yes. We connect products to payments, CRMs, email, analytics, identity providers, marketplaces and internal systems through APIs, webhooks and background jobs. We scope the integration around reliability, permissions and how it will be monitored after launch.',
  },
  {
    topic: 'studio',
    question:
      'Can you help with projects that are already started, or just new ideas?',
    answer:
      'Both. We can turn a new idea into a first release, or audit, stabilise and continue an existing product. We start by understanding the current code, infrastructure and users before recommending what to keep, fix or rebuild.',
  },
  {
    topic: 'program',
    question: 'What is Conscious AI?',
    answer:
      'A free video course that teaches non-technical knowledge workers when, why and how to use AI well. Short lessons, each ending with one thing to change in how you work. Teams that want more than the videos can ask us about training.',
  },
  {
    topic: 'program',
    question: 'How is it different from other AI training?',
    answer:
      'Most courses teach how to operate a tool. We teach judgement: when AI is the right choice, how to reach a reliable result in fewer rounds, how to check it, and when a formula or a search does the job better. Every lesson ends with something you apply to your own work.',
  },
  {
    topic: 'program',
    question: 'Which AI tools does it cover?',
    answer:
      'The course works with any AI tool. The examples use ChatGPT, Claude, Gemini and Microsoft Copilot, and the principles carry over to whichever one your company uses.',
  },
  {
    topic: 'program',
    question: 'What does it cost?',
    answer:
      'The course is free. Training for a whole team is scoped individually. Tell us about your team and we will reply with what applies.',
  },
  {
    topic: 'program',
    question: 'How do you talk about sustainability?',
    answer:
      'Carefully. We do not claim an environmental figure for a single prompt. We focus on unnecessary usage repeated across teams and workflows, which is where cost and computation add up.',
  },
];

/** German copy, in the same order as `faqs`. */
const faqsDe: Faq[] = [
  {
    topic: 'studio',
    question: 'Wie läuft ein Projekt mit Bullah Labs ab?',
    answer:
      'Die meisten Projekte beginnen mit einer einwöchigen Analyse, an deren Ende ein schriftlicher Leistungsumfang, eine Erfolgskennzahl und ein Festpreis für das erste Release stehen. Danach liefern wir wöchentlich auf eine Staging-Umgebung, die Sie selbst durchklicken können, mit einer Demo am Ende jedes Sprints. Nach dem Launch bleiben wir an Bord und warten, was wir gebaut haben.',
  },
  {
    topic: 'studio',
    question: 'Wie setzen Sie KI in den Produkten ein, die Sie bauen?',
    answer:
      'Nur dort, wo sie ihren Platz verdient. Regeln, Formeln und Suche erledigen, was sie können. Ein Modell kommt dort zum Einsatz, wo Urteil über Sprache gefragt ist, mit dem kleinsten Modell, das die Prüfung besteht, nur dem Kontext, den die Aufgabe braucht, zwischengespeicherten Ergebnissen, damit nichts zweimal berechnet wird, und einer Person oder einem Test, der prüft, was zurückkommt. Jede Fallstudie auf der Projektseite nennt das Prinzip, das sie zeigt.',
  },
  {
    topic: 'studio',
    question: 'Warten Sie nach dem Launch, was Sie gebaut haben?',
    answer:
      'Ja. Wir übergeben nicht und verschwinden. Jedes Projekt umfasst Support nach dem Launch, und ein Wartungsvertrag hält uns danach in der Verantwortung: Monitoring, Fehlerbehebung, Abhängigkeits- und Sicherheitsupdates sowie kleine Verbesserungen, betreut von einer Entwicklerin oder einem Entwickler, die den Code kennen. Sie können die Wartung jederzeit selbst übernehmen, denn die Dokumentation entsteht von Anfang an mit.',
  },
  {
    topic: 'studio',
    question: 'Wem gehören der Code und die Zugänge?',
    answer:
      'Ihnen, vom ersten Tag an. Wir arbeiten in Repositories, Cloud-Konten und Diensten, die auf Ihr Unternehmen laufen. Am Projektende ist deshalb nichts zu migrieren.',
  },
  {
    topic: 'studio',
    question: 'Wo sitzt das Team?',
    answer:
      'Unser asiatisches Büro ist in Islamabad, unser europäisches in Fellbach bei Stuttgart. So haben Kundinnen und Kunden in Europa einen Ansprechpartner vor Ort und eine Überschneidung der Arbeitszeiten mit dem gesamten Team.',
  },
  {
    topic: 'studio',
    question: 'Können Sie ein bestehendes Produkt übernehmen?',
    answer:
      'Ja. Wir beginnen mit einem kurzen technischen Audit, stimmen ab, was bleibt, stabilisiert und verbessert wird, und arbeiten dann in derselben Codebasis, die Ihr Team bereits kennt.',
  },
  {
    topic: 'studio',
    question: 'Unterzeichnen Sie NDAs und Auftragsverarbeitungsverträge?',
    answer:
      'Ja. Wir unterzeichnen regelmäßig NDAs vor der Analysephase und stellen für Projekte mit personenbezogenen Daten einen DSGVO-konformen Auftragsverarbeitungsvertrag bereit.',
  },
  {
    topic: 'studio',
    question: 'Welche Technologien nutzen Sie?',
    answer:
      'Meist arbeiten wir mit Next.js, React, TypeScript, PostgreSQL, Supabase und Cloud-Plattformen wie Vercel oder AWS, und mit Claude, OpenAI oder offenen Modellen hinter einem Router, wo ein Produkt KI braucht. Der konkrete Stack richtet sich nach Produkt, Schnittstellen, Team und langfristigen Betriebskosten, nicht nach einer festen Vorliebe.',
  },
  {
    topic: 'studio',
    question: 'Was ist, wenn wir nach dem Launch Änderungen brauchen?',
    answer:
      'Wir können die Wartung, kleinere Verbesserungen oder eine weitere Produktphase übernehmen. Laufende Arbeit kann als monatlicher Wartungsvertrag, Retainer oder separat kalkulierte Festpreisphase laufen.',
  },
  {
    topic: 'studio',
    question: 'Wie schützen Sie unsere Daten und halten sie vertraulich?',
    answer:
      'Wir minimieren die Daten, die wir verarbeiten, trennen Zugriffe, arbeiten mit dem Prinzip der geringsten Berechtigung und bauen Nachvollziehbarkeit in das Produkt ein. Vor der Analysephase unterzeichnen wir auf Wunsch ein NDA und stellen bei personenbezogenen Daten einen DSGVO-konformen Auftragsverarbeitungsvertrag bereit.',
  },
  {
    topic: 'studio',
    question:
      'Können Sie unser Produkt mit anderen Tools oder Plattformen verbinden?',
    answer:
      'Ja. Wir verbinden Produkte über APIs, Webhooks und Hintergrundjobs mit Zahlungen, CRMs, E-Mail, Analytics, Identitätsdiensten, Marktplätzen und internen Systemen. Dabei planen wir Zuverlässigkeit, Berechtigungen und Monitoring von Anfang an mit ein.',
  },
  {
    topic: 'studio',
    question:
      'Helfen Sie auch bei begonnenen Projekten oder nur bei neuen Ideen?',
    answer:
      'Bei beidem. Wir können eine neue Idee in einen ersten Release überführen oder ein bestehendes Produkt prüfen, stabilisieren und weiterentwickeln. Zuerst verstehen wir Code, Infrastruktur und Nutzer, bevor wir empfehlen, was bleiben, repariert oder neu gebaut werden sollte.',
  },
  {
    topic: 'program',
    question: 'Was ist Conscious AI?',
    answer:
      'Ein kostenloser Videokurs, der nicht-technischen Wissensarbeitenden vermittelt, wann, warum und wie man KI gut einsetzt. Kurze Lektionen, jede endet mit einer Sache, die Sie an Ihrer Arbeitsweise ändern. Teams, die mehr als die Videos wollen, können uns nach einer Schulung fragen.',
  },
  {
    topic: 'program',
    question: 'Worin unterscheidet es sich von anderen KI-Schulungen?',
    answer:
      'Die meisten Kurse zeigen, wie man ein Werkzeug bedient. Wir vermitteln Urteilsvermögen: wann KI die richtige Wahl ist, wie man in weniger Runden zu einem verlässlichen Ergebnis kommt, wie man es prüft und wann eine Formel oder eine Suche die Aufgabe besser löst. Jede Lektion endet mit etwas, das Sie auf Ihre eigene Arbeit anwenden.',
  },
  {
    topic: 'program',
    question: 'Welche KI-Werkzeuge deckt es ab?',
    answer:
      'Der Kurs funktioniert mit jedem KI-Werkzeug. Die Beispiele nutzen ChatGPT, Claude, Gemini und Microsoft Copilot, und die Prinzipien lassen sich auf das Werkzeug übertragen, das Ihr Unternehmen einsetzt.',
  },
  {
    topic: 'program',
    question: 'Was kostet es?',
    answer:
      'Der Kurs ist kostenlos. Eine Schulung für ein ganzes Team wird individuell abgestimmt. Erzählen Sie uns von Ihrem Team, und wir antworten mit dem, was für Sie gilt.',
  },
  {
    topic: 'program',
    question: 'Wie sprechen Sie über Nachhaltigkeit?',
    answer:
      'Vorsichtig. Wir nennen keine Umweltzahl für einen einzelnen Prompt. Wir konzentrieren uns auf unnötige Nutzung, die sich über Teams und Abläufe wiederholt, denn dort summieren sich Kosten und Rechenleistung.',
  },
];

/** All questions, or only those for one part of the site. */
export function getFaqs(locale: Locale, topic?: FaqTopic): Faq[] {
  const all = locale === 'de' ? faqsDe : faqs;
  return topic ? all.filter((faq) => faq.topic === topic) : all;
}
