import type { Program } from './program';

/** German copy for the Conscious AI program. Structure mirrors `program`. */
export const programDe: Program = {
  pillars: [
    {
      id: 'conscious-use',
      title: 'Bewusste Nutzung',
      tagline: 'Wissen, wann KI hilft und wann nicht.',
      body: 'Verstehen, wann KI die richtige Wahl ist, sie gezielt einsetzen und ihre Ergebnisse beurteilen, bevor Sie sich darauf verlassen.',
    },
    {
      id: 'trained-teams',
      title: 'Geschulte Teams',
      tagline: 'Praktisches Können, in jeder nicht-technischen Rolle.',
      body: 'Rollenbezogenes Lernen, das echte KI-Kompetenz und Sicherheit in Marketing, Vertrieb, Operations, HR, Finanzen und Produktteams aufbaut.',
    },
    {
      id: 'optimized-usage',
      title: 'Optimierte Nutzung',
      tagline: 'Das kleinste System, das noch zuverlässig ist.',
      body: 'Das richtige Werkzeug und Modell für jede Aufgabe, schlanke Abläufe und weniger unnötige Rechenleistung, ohne Abstriche bei Qualität, Zuverlässigkeit oder Sicherheit.',
    },
  ],
  themes: [
    {
      title: 'Warum Effizienz zählt',
      body: 'KI hat zwei Rechnungen, eine finanzielle und eine ökologische. Beide steigen mit Rechenleistung, die niemand gebraucht hat.',
    },
    {
      title: 'Das richtige Werkzeug wählen',
      body: 'Regeln, Formeln und Suche vor KI. Ein leichteres Modell, wenn sich das Ergebnis einfach prüfen lässt.',
    },
    {
      title: 'Prompts und Kontext',
      body: 'Im ersten Prompt sagen, was Sie brauchen, und nur den Teil des Dokuments teilen, auf den es ankommt.',
    },
    {
      title: 'Schlanke Abläufe',
      body: 'Jeder zusätzliche KI-Schritt und jede Übergabe muss sich lohnen. Aufhören, sobald das Ergebnis die Anforderung erfüllt.',
    },
    {
      title: 'Messen',
      body: 'Ausgangswert festhalten, eine Sache ändern, vergleichen. Ein günstigeres Ergebnis ist nicht besser, wenn es die Anforderung verfehlt.',
    },
  ],
  tiers: [
    {
      id: 'fundamentals',
      name: 'AI Fundamentals',
      access: 'Kostenlos',
      audience: 'Alle, die KI nutzen',
      summary:
        'Der Einstieg. Funktioniert mit jedem KI-Werkzeug und setzt kein technisches Vorwissen voraus. Sie sehen, wo KI-Nutzung Kosten verursacht, lernen Verschwendung zu erkennen und gehen mit einem verbesserten Ablauf heraus.',
      outcome:
        'Ein geprüfter Ablauf und eine persönliche Optimierungs-Checkliste',
      highlights: ['5 Module', 'Im eigenen Tempo', 'Jedes KI-Werkzeug'],
      modules: [
        {
          code: 'T1.1',
          title: 'Warum KI-Optimierung zählt',
          focus:
            'Die zwei Rechnungen der KI, verborgene Rechenleistung, die Standard-Falle und Tokens als Denkmodell.',
          output:
            'Ein schlanker Arbeitsbereich und ein persönliches Effizienzprinzip',
        },
        {
          code: 'T1.2',
          title: 'Die richtige KI für die Aufgabe',
          focus:
            'Deterministische Logik, leichtere und leistungsfähigere Modelle, Modi nach Zweck und das Prinzip der Überprüfbarkeit.',
          output: 'Ein persönlicher Leitfaden für Werkzeug- und Modellwahl',
        },
        {
          code: 'T1.3',
          title: 'Verschwendung in KI-Abläufen verstehen',
          focus:
            'Vage Prompts, lange Chats, ganze Dokumente, wiederholte Anfragen und Übergaben ohne Verantwortliche.',
          output: 'Ein Verschwendungs-Audit und ein überarbeiteter Ablauf',
        },
        {
          code: 'T1.4',
          title: 'Das kleinste zuverlässige System entwerfen',
          focus:
            'Vom Ergebnis her entwerfen, pro Schritt ein passendes Modell, aufhören, sobald die Anforderung erfüllt ist.',
          output:
            'Ein dokumentierter schlanker Ablauf und eine wiederverwendbare Vorlage',
        },
        {
          code: 'T1.5',
          title: 'Messen, bewerten, verbessern',
          focus:
            'Kosten, Latenz, Qualität und Zuverlässigkeit, und der Kreislauf aus Beobachten, einer Änderung und Vergleichen.',
          output: 'Eine Optimierungs-Checkliste und eine gemessene Verbesserung',
        },
      ],
    },
    {
      id: 'practitioner',
      name: 'Practitioner',
      access: 'Kostenpflichtig',
      audience: 'Tägliche KI-Nutzer',
      summary:
        'Für alle, die KI täglich nutzen und messbare Einsparungen in der eigenen Arbeit wollen. Zeigt genau, wie sich die Prinzipien in ChatGPT, Claude, Gemini und Microsoft Copilot anwenden lassen.',
      outcome: 'Ein persönliches KI-Toolkit und das Practitioner-Zertifikat',
      highlights: ['6 Module', 'Geprüftes Abschlussprojekt', 'Zertifikat'],
      modules: [
        {
          code: 'T2.1',
          title: 'Werkzeuge und Nutzung kennen',
          focus:
            'Die Werkzeuglandschaft, was auf Tariflimits angerechnet wird, wo die Nutzung steht und wann ein Upgrade günstiger ist.',
          output: 'Ein persönlicher Nutzungs-Ausgangswert',
        },
        {
          code: 'T2.2',
          title: 'Workspace Engineering',
          focus:
            'Projekte, Custom GPTs und Gems, die Anweisungsformel und der Streichtest für jede Anweisungszeile.',
          output: 'Zwei funktionierende Workspaces und 15 Anweisungsvorlagen',
        },
        {
          code: 'T2.3',
          title: 'Fortgeschrittene Prompt-Muster',
          focus:
            'Zeigen statt beschreiben, Rückfrage-Prompts, Verkettung, Ausgabesteuerung, bearbeiten statt neu erzeugen.',
          output: 'Eine persönliche Bibliothek mit 10 wiederverwendbaren Prompts',
        },
        {
          code: 'T2.4',
          title: 'Dateien, Daten und Wissen',
          focus:
            'Warum Dateien mehr kosten, erst extrahieren, dann fragen, Referenz-Zusammenfassungen, und wann eine Formel KI schlägt.',
          output:
            'Eine wiederverwendbare Referenzdatei und eine Checkliste für Dateien',
        },
        {
          code: 'T2.5',
          title: 'Verifizierung und Datenschutz',
          focus:
            'Wo KI falsch liegt, wie viel Prüfung jede Aufgabe verdient, schnelle Checks und was nie eingefügt werden darf.',
          output: 'Persönliche Regeln für Verifizierung und Datenschutz',
        },
        {
          code: 'T2.6',
          title: 'Automatisierung ohne Programmieren',
          focus:
            'Geplante Prompts, Konnektoren nur dort, wo sie Schritte sparen, No-Code-Werkzeuge und Automatisierungs-Verschwendung.',
          output: 'Eine funktionierende Automatisierung mit Stoppregel',
        },
        {
          code: 'Capstone',
          title: 'Ihre optimierte Woche',
          focus:
            'Drei Ihrer echten Abläufe prüfen, neu gestalten und eine Vorher-nachher-Scorecard zur Bewertung einreichen.',
          output: 'Das Practitioner-Zertifikat',
        },
      ],
    },
    {
      id: 'role-tracks',
      name: 'Role Tracks',
      access: 'Kostenpflichtige Ergänzung',
      audience: 'Bestimmte Berufsrollen',
      summary:
        'Die Techniken, angewendet auf einen Beruf. Jeder Track findet, wo KI in der Rolle verschwendet wird, baut drei echte Abläufe von Anfang bis Ende und schließt mit einer Vorher-nachher-Fallstudie.',
      outcome: 'Drei funktionierende Abläufe für Ihre Rolle und das Rollen-Badge',
      highlights: ['9 Tracks', 'Je 5 Module', 'Vorlagenpaket'],
      modules: [
        {
          code: 'T3.1',
          title: 'Verschwendung finden',
          focus: 'Wo KI in dieser Rolle heute verschwendet wird.',
          output: 'Eine rollenspezifische Verschwendungs-Übersicht',
        },
        {
          code: 'T3.2 - T3.4',
          title: 'Drei Abläufe bauen',
          focus:
            'Drei echte Abläufe von Anfang bis Ende, jeder auf eine Aufgabe zugeschnitten, nur mit den Daten, die er braucht.',
          output: 'Drei funktionierende Abläufe und ihre Vorlagen',
        },
        {
          code: 'T3.5',
          title: 'Die Veränderung belegen',
          focus: 'Eine Vorher-nachher-Fallstudie an der eigenen Arbeit.',
          output: 'Das Rollen-Badge',
        },
      ],
    },
    {
      id: 'team',
      name: 'Team',
      access: 'Kostenpflichtig, für Unternehmen',
      audience: 'Unternehmen und Teamleitungen',
      summary:
        'Bringt das Programm in die Organisation. Mitarbeitende absolvieren Practitioner und ihre Role Tracks, während Teamleitungen sechs Team-Module durcharbeiten, beginnend mit einem Live-Workshop.',
      outcome:
        'Ein Team-Playbook, eine einseitige KI-Richtlinie und ein ROI-Bericht',
      highlights: ['6 Team-Module', 'Live-Workshop', 'Monatliche Scorecard'],
      modules: [
        {
          code: 'T4.1',
          title: 'Team-Ausgangslage (Live-Workshop)',
          focus:
            'Welche Werkzeuge und Tarife jede Rolle nutzt, eine Woche Nutzungsdaten und die fünf größten Verschwendungsquellen.',
          output: 'Ein Bericht zur Team-Ausgangslage',
        },
        {
          code: 'T4.2',
          title: 'Gemeinsame Standards',
          focus:
            'Eine Bibliothek für Prompts und Workspaces mit Verantwortlichen und Versionen, in der jede Aufgabe nur ihre eigenen Anweisungen lädt.',
          output: 'Eine Team-Bibliothek für Prompts und Workspaces',
        },
        {
          code: 'T4.3',
          title: 'KI-Nutzungsrichtlinie',
          focus:
            'Freigegebene Werkzeuge, Datenregeln und die Ergebnisse, die ein Mensch vor der Verwendung prüfen muss.',
          output: 'Eine einseitige KI-Nutzungsrichtlinie',
        },
        {
          code: 'T4.4',
          title: 'Team-Abläufe gestalten',
          focus:
            'Wer was zwischen Mensch und KI übernimmt, wann eine Aufgabe eskaliert, und das Ende doppelter Arbeit unter Kollegen.',
          output: 'Zwei neu gestaltete Team-Abläufe',
        },
        {
          code: 'T4.5',
          title: 'Messung und ROI',
          focus:
            'Eine Team-Scorecard für Nutzung, gesparte Zeit, Qualität, Zuverlässigkeit und geschätzten Energieverbrauch, monatlich geprüft.',
          output: 'Eine ROI-Berichtsvorlage und der erste Bericht',
        },
        {
          code: 'T4.6',
          title: 'KI-Champions',
          focus:
            'Interne Mitarbeitende, die neue Kollegen einarbeiten und Abläufe jedes Quartal neu prüfen, wenn sich Werkzeuge ändern.',
          output: 'Ein Champion-Leitfaden und ein Re-Audit-Plan',
        },
      ],
    },
  ],
  roleTracks: [
    {
      id: 'sustainability-esg',
      name: 'Nachhaltigkeit & ESG',
      audience: 'Nachhaltigkeits-, ESG- und Compliance-Teams',
      workflows: [
        'Nachhaltigkeitsberichte entwerfen',
        'Lieferanten- und Materialdaten prüfen',
        'Regulierung und Zertifizierungen verfolgen',
      ],
      flagship: true,
    },
    {
      id: 'operations-admin',
      name: 'Operations & Verwaltung',
      audience: 'Operations, Büro und Verwaltung',
      workflows: [
        'E-Mails sortieren und beantworten',
        'Von Besprechungsnotizen zu Aufgaben',
        'SOPs und Prozessdokumentation',
      ],
    },
    {
      id: 'sales-support',
      name: 'Vertrieb & Kundenservice',
      audience: 'Vertrieb, Account-Management, Support',
      workflows: [
        'Lead-Recherche und Ansprache',
        'Bibliothek für Support-Antworten',
        'Von Gesprächsnotizen ins CRM',
      ],
    },
    {
      id: 'marketing-content',
      name: 'Marketing & Content',
      audience: 'Marketing-, Content- und Social-Media-Teams',
      workflows: [
        'Vom Kampagnen-Briefing zum Redaktionsplan',
        'Ein Beitrag in fünf Formaten',
        'Workspace für die Markenstimme',
      ],
    },
    {
      id: 'hr-recruiting',
      name: 'HR & Recruiting',
      audience: 'HR-Teams, Recruiter, Führungskräfte',
      workflows: [
        'Stellenbeschreibungen und Kriterien',
        'Lebenslauf-Vorauswahl mit menschlicher Prüfung',
        'Onboarding- und Richtlinienunterlagen',
      ],
    },
    {
      id: 'research-analysis',
      name: 'Recherche & Analyse',
      audience: 'Analysten, Forschende, Finanzteams',
      workflows: [
        'Quellen-Zusammenfassungen mit Belegen',
        'Tabellenanalyse, Formeln zuerst',
        'Berichte entwerfen und prüfen',
      ],
    },
    {
      id: 'freelancers-small-business',
      name: 'Freelancer & kleine Unternehmen',
      audience: 'Freelancer, Solo-Gründer, kleine Teams',
      workflows: [
        'Angebote und Kostenvoranschläge',
        'Kundenkommunikation',
        'Rechnungen, FAQs und Verwaltung',
      ],
    },
    {
      id: 'students-educators',
      name: 'Lernende & Lehrende',
      audience: 'Studierende, Lehrkräfte, Trainer',
      workflows: [
        'Lernnotizen und Wiederholung',
        'Übungsfragen und Quizze',
        'Feedback im Rahmen der Integritätsregeln',
      ],
    },
    {
      id: 'builder',
      name: 'Builder Track',
      audience: 'Entwickler und Teams, die KI-Produkte bauen',
      workflows: [
        'Token-Kosten, schlanke Architektur und Prompt-Caching',
        'RAG, Kompression, Routing und Ausgabesteuerung',
        'Semantisches Caching, Batching und Energiebilanz',
      ],
      technical: true,
    },
  ],
  roles: [
    'Marketing & Kommunikation',
    'Vertrieb & Revenue Operations',
    'Customer Success',
    'Operations & HR',
    'Finanzen & Verwaltung',
    'Produkt- & Projektmanagement',
  ],
};
