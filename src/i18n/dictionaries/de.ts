import type { Dictionary } from './en';

/** German copy. Structure mirrors `en` exactly. */
export const de: Dictionary = {
  locale: 'de',
  nav: {
    program: 'Conscious AI',
    services: 'Leistungen',
    work: 'Projekte',
    about: 'Über uns',
    contact: 'Kontakt',
    home: 'Start',
    careers: 'Karriere',
    cta: 'Kontakt aufnehmen',
    bookCall: 'Gespräch buchen',
    menuOpen: 'Menü öffnen',
    menuClose: 'Menü schließen',
    language: 'Sprache',
    next: 'Weiter',
    top: 'Nach oben',
  },
  hero: {
    badge: 'KI-Befähigung für Wissensarbeit',
    title: 'Klüger arbeiten mit KI.\nUnd sie bewusst nutzen.',
    accent: [4, 5, 6, 7],
    body: 'Bullah Labs hilft nicht-technischen Teams, KI wirksam einzusetzen, Fähigkeiten aufzubauen, die relevant bleiben, und die Nutzung zu streichen, die niemand gebraucht hat. Wir lehren es in Conscious AI und bauen es in jedes System ein, das wir ausliefern.',
    primary: 'Conscious AI entdecken',
    secondary: 'In unseren Projekten ansehen',
    map: {
      kicker: 'Das kleinste zuverlässige System für jede Aufgabe',
      nodes: {
        web: 'Aufgabe',
        mobile: 'Kontext',
        api: 'Routing',
        db: 'Regeln',
        ai: 'Starke KI',
        cloud: 'Leichte KI',
      },
    },
  },
  work: {
    kicker: 'Belege im Betrieb',
    title: 'Effizienz, die sich prüfen lässt',
    description:
      'Vierzehn Produkte im Einsatz. Jedes wird durch ein Prinzip gelesen, das wir lehren: das richtige Werkzeug für die Aufgabe, nur der nötige Kontext, nichts doppelt, erst geprüft, dann vertraut.',
    all: 'Alle Projekte',
    view: 'Fallstudie lesen',
    filterLabel: 'Projekte filtern',
    filters: {
      All: 'Alle',
      'right-tool': 'Richtiges Werkzeug',
      'lean-context': 'Nötiger Kontext',
      'no-repeat': 'Nichts doppelt',
      checked: 'Geprüft',
      SaaS: 'SaaS',
      Marketplace: 'Marktplätze',
      AI: 'KI',
      Mobile: 'Mobil',
      Website: 'Websites',
    },
    lenses: {
      'right-tool': {
        label: 'Das richtige Werkzeug für die Aufgabe',
        principle:
          'Regeln und gewöhnliche Software vor KI. Ein Modell nur dort, wo es sich lohnt.',
      },
      'lean-context': {
        label: 'Nur der nötige Kontext',
        principle:
          'Jede Anfrage, jeder Nutzer und jeder Agent erhält die Daten, die er braucht, und nicht mehr.',
      },
      'no-repeat': {
        label: 'Nichts doppelt gemacht',
        principle:
          'Caching, Bündelung und Wiederverwendung, statt dieselbe Arbeit neu zu erzeugen.',
      },
      checked: {
        label: 'Erst geprüft, dann vertraut',
        principle:
          'Ergebnisse sind belegt, nachvollziehbar oder von einem Menschen freigegeben, wo das Risiko es verlangt.',
      },
    },
    count: '{n} Projekte',
    teaser: {
      kicker: 'Projekte',
      title: 'Jedes Projekt, und was es einspart',
      accent: [3, 4, 5],
      body: 'Wir bauen so, wie wir lehren. Jedes Produkt hier ist im Einsatz, und jede Fallstudie beginnt mit dem Prinzip, das es schlank hält.',
      cta: 'Alle Projekte ansehen',
      listLabel: 'Ausgewählte Projekte',
      more: '{n} weitere auf der Projektseite',
    },
  },
  services: {
    kicker: 'Mit uns bauen',
    title: 'Wir bauen so, wie wir lehren',
    explore: 'Leistung ansehen',
    groups: {
      capability: {
        label: 'Schlanke Systeme, von Anfang bis Ende',
      },
    },
    meta: {
      timeline: 'Zeitrahmen',
      team: 'Team',
      pricing: 'Angebot',
      support: 'Nach dem Launch',
    },
  },
  pillars: {
    kicker: 'Wofür wir stehen',
    title: 'Drei Säulen guter KI-Nutzung',
    description:
      'Produktivität zuerst, berufliche Widerstandskraft dazu, und verantwortungsvolle, effiziente Nutzung als Standard.',
  },
  program: {
    kicker: 'Conscious AI',
    title: 'Ein Programm, vier Einstiege',
    accent: [2, 3],
    description:
      'Beginnen Sie mit dem kostenlosen Kurs. Vertiefen Sie in Ihren eigenen Werkzeugen, Ihrer eigenen Rolle und dann im ganzen Team. Sie können auf jeder Stufe mit einem vollständigen, nutzbaren Ergebnis aufhören.',
    cta: 'Das ganze Programm ansehen',
    tier: 'Stufe',
    audience: 'Für',
    outcome: 'Das nehmen Sie mit',
    modules: 'Module',
    output: 'Ergebnis',
  },
  programPage: {
    kicker: 'Conscious AI',
    title: 'KI gut nutzen. Nicht nur mehr.',
    accent: [3, 4, 5],
    description:
      'Ein praktisches Programm für nicht-technische Wissensarbeit. Lernen Sie, wann KI hilft, wie Sie in weniger Runden zu einem verlässlichen Ergebnis kommen und wie Sie aufhören, in Geld und Rechenleistung für Nutzung zu zahlen, die niemand gebraucht hat.',
    primary: 'Frühen Zugang anfragen',
    secondary: 'Die vier Stufen ansehen',
    principle:
      'KI-Kompetenz heißt zu wissen, wann, warum und wie man KI gut einsetzt, nicht nur, wie man die Werkzeuge bedient.',
    themesKicker: 'Fünf Themen',
    themesTitle: 'Dieselben fünf Themen, auf jeder Stufe tiefer',
    tiersKicker: 'Die Stufen',
    tiersTitle: 'Auf jeder Stufe mit etwas aufhören, das funktioniert',
    tiersDescription:
      'Der kostenlose Kurs vermittelt die Prinzipien. Drei kostenpflichtige Stufen wenden sie auf Ihre Werkzeuge, Ihren Beruf und Ihr ganzes Team an.',
    tracksKicker: 'Role Tracks',
    tracksTitle: 'Rund um die Arbeit gebaut, die Sie wirklich tun',
    tracksDescription:
      'Jeder Track baut drei echte Abläufe für eine Rolle und bringt ein fertiges Vorlagenpaket mit.',
    flagship: 'Schwerpunkt',
    technical: 'Technisch',
    audienceKicker: 'Für wen',
    audienceTitle: 'Für Wissensarbeit, nicht für Entwickler',
    audienceDescription:
      'Geschrieben für Menschen, die mit KI bessere Arbeit leisten wollen, ohne technische Experten zu werden.',
    employee: {
      label: 'Für Sie',
      title: 'Produktiver, sicherer, bereit für Veränderung',
      body: 'Fähigkeiten, die Sie am selben Tag nutzen: weniger Runden bis zur brauchbaren Antwort, ein klares Gespür dafür, wann KI das falsche Werkzeug ist, und das Urteilsvermögen, ihre Ergebnisse zu prüfen.',
    },
    employer: {
      label: 'Für Ihr Unternehmen',
      title: 'Eine KI-fähige Belegschaft, mit Nutzung, die sich belegen lässt',
      body: 'Einheitliche, messbare KI-Nutzung in nicht-technischen Teams: gemeinsame Standards, eine einseitige Richtlinie, menschliche Prüfung, wo es darauf ankommt, und weniger Ausgaben für Rechenleistung, die nichts verändert hat.',
    },
    sustainabilityKicker: 'Zur Nachhaltigkeit',
    sustainabilityTitle: 'Weniger Verschwendung, aufsummiert',
    sustainabilityBody:
      'Wir beziffern keinen einzelnen Prompt, weil das niemand seriös kann. Ins Gewicht fällt unnötige Nutzung, die sich über Teams, Abläufe und ganze Organisationen wiederholt. Das Programm reduziert sie an der Quelle, und die Team-Stufe weist den geschätzten Energieverbrauch neben Kosten und Zeit aus.',
    ctaTitle: 'Beginnen Sie mit dem kostenlosen Kurs.',
    ctaAccent: [4, 5],
    ctaBody:
      'Sagen Sie uns, wer Sie sind und wie Sie KI heute nutzen. Wir antworten innerhalb eines Werktags, mit Zugangsdetails für Sie oder einem Plan für Ihr Team.',
  },
  technologies: {
    kicker: 'Bewährte Technologie',
    statement: 'Gebaut auf den Werkzeugen, die zählen.',
    statementMuted: 'Bewährte Werkzeuge. Keine Experimente auf Ihre Kosten.',
    stackLabel: 'Der Stack, nach Ebene',
    layers: [
      { label: 'Oberfläche', note: 'Was Ihre Nutzer sehen und bedienen.' },
      {
        label: 'Mobile',
        note: 'iOS und Android, nativ oder plattformübergreifend.',
      },
      { label: 'Backend & Daten', note: 'Wo die Wahrheit liegt.' },
      {
        label: 'KI-Systeme',
        note: 'Modelle, Retrieval und Agenten auf Ihren Daten.',
      },
      {
        label: 'Automatisierung',
        note: 'Abläufe, die ohne Menschen im Loop laufen.',
      },
      { label: 'Cloud & Betrieb', note: 'Wo es läuft und weiterläuft.' },
    ],
  },
  industries: {
    kicker: 'Branchen',
    title: 'Für wen wir bauen',
    description:
      'Produkte, bei denen eine falsche Zahl Geld kostet. Hinter jeder Branche steht ein ausgeliefertes Projekt.',
    shipped: 'Geliefert',
    items: {
      fintech: {
        name: 'Fintech',
        blurb:
          'Wallets, Ledger und Auszahlungen, die bis auf die letzte Einheit stimmen.',
      },
      realEstate: {
        name: 'Immobilien',
        blurb: 'Marktplätze, Mietplattformen und Agentur-Abläufe.',
      },
      ecommerce: {
        name: 'E-Commerce',
        blurb:
          'Multi-Seller-Shops, Checkout, Versand und automatisierter Support.',
      },
      hr: {
        name: 'HR & Lohn',
        blurb:
          'Zeiterfassung, Urlaub und Lohnabrechnung, die jede Prüfung bestehen.',
      },
      healthcare: {
        name: 'Gesundheit',
        blurb: 'Reha- und Patientenassistenten mit klinischen Leitplanken.',
      },
      recruiting: {
        name: 'Recruiting',
        blurb:
          'Strukturierte Sprachinterviews, Bewertung und Transkripte in großer Zahl.',
      },
      martech: {
        name: 'Marketing-Technologie',
        blurb:
          'SEO- und Content-Plattformen, die erzeugen, veröffentlichen und messen.',
      },
      compliance: {
        name: 'Compliance',
        blurb: 'Dokumentenprüfung auf Klauselebene mit Prüfpfad.',
      },
    },
  },
  globalReach: {
    kicker: 'Standorte',
    title: 'Weltweit im Einsatz, aus Deutschland und Pakistan.',
    description:
      'Kunden in Europa, Nordamerika, dem Nahen Osten, Afrika und Asien, betreut aus Fellbach bei Stuttgart und Islamabad. Wann immer Sie arbeiten, ist jemand aus dem Team online.',
    legend: 'Standorte und Kundenorte',
  },
  numbers: {
    kicker: 'In Zahlen',
    title: 'Belege statt Versprechen',
    description: 'Zahlen aus gelieferten Projekten.',
    items: [
      { value: '150+', label: 'Abgeschlossene Projekte' },
      { value: '40+', label: 'Kunden auf vier Kontinenten' },
      { value: '6 Wo.', label: 'Typische Zeit bis zum ersten Release' },
    ],
  },
  howItWorks: {
    kicker: 'Zusammenarbeit',
    title: 'So läuft eine Umsetzung ab',
    stepLabel: 'Schritt',
    cta: 'Mit einem Gespräch starten',
    steps: [
      {
        title: 'Kosten kennen, bevor Code entsteht',
        when: 'Kick-off',
        summary:
          'Ein kurzes Gespräch über das Produkt und den Termin. Innerhalb einer Woche haben Sie Umfang, Preis und Launch-Datum schriftlich.',
      },
      {
        title: 'Den ersten Release schärfen',
        when: 'Umfang',
        summary:
          'Wir reduzieren das Briefing auf das kleinste Produkt, das ab dem ersten Tag nützlich ist.',
      },
      {
        title: 'Sehen, bevor gebaut wird',
        when: 'Design',
        summary:
          'Klickbare Screens der wichtigsten Abläufe, gemeinsam geprüft, bevor Produktionscode entsteht.',
      },
      {
        title: 'Nutzen, während es entsteht',
        when: 'Umsetzung',
        summary:
          'Jeder Sprint endet mit einem Staging-Link und einer kurzen Notiz, was als Nächstes kommt.',
      },
      {
        title: 'Sicher live gehen',
        when: 'Launch',
        summary:
          'Wir testen die Abläufe, auf die es ankommt, richten Monitoring ein und proben die Übergabe.',
      },
      {
        title: 'Das Eigentum bleibt bei Ihnen',
        when: 'Betrieb',
        summary:
          'Wir behalten den Betrieb im Blick und reparieren, was bricht. Bleiben Sie im Retainer, oder übernehmen Sie Code und Zugänge vollständig.',
      },
    ],
  },
  testimonials: {
    kicker: 'Kundenstimmen',
    title: 'So ist die Zusammenarbeit mit uns',
    accent: [3],
    caseStudy: 'Projekt ansehen',
    prev: 'Vorherige Stimme',
    next: 'Nächste Stimme',
  },
  servicesPage: {
    kicker: 'Mit uns bauen',
    title: 'Systeme, passend zur Aufgabe.',
    accent: [1, 2, 3],
    description:
      'Unser Engineering-Team baut, was das Programm lehrt: das kleinste System, das die Arbeit zuverlässig erledigt. Fünf Kompetenzen und zwei Formen der Zusammenarbeit, jeweils schriftlich abgegrenzt und von uns nach dem Launch gewartet.',
    deliverables: 'Was Sie bekommen',
    useCases: 'Typische Projekte',
    stack: 'Werkzeuge, die wir nutzen',
    proof: 'Referenzen',
    faqTitle: 'Fragen zu dieser Leistung',
  },
  servicePage: {
    back: 'Alle Leistungen',
    kindEngagement: 'Zusammenarbeitsmodell',
    kindCapability: 'Kompetenz',
    discuss: 'Über diese Leistung sprechen',
    engagement: 'Zusammenarbeit',
    coreStack: 'Kern-Stack',
    included: 'Was enthalten ist',
    useCases: 'Typische Anwendungsfälle',
    proof: 'Referenzen',
    proofTitle: 'Wo wir das schon gemacht haben.',
    allCaseStudies: 'Alle Projekte',
    faqKicker: 'Fragen',
    faqTitle: 'Zu dieser Leistung.',
    faqAccent: [1, 2],
    others: 'Weitere Leistungen',
    notFound: 'Leistung nicht gefunden',
  },
  contactForm: {
    name: 'Vollständiger Name',
    namePlaceholder: 'Erika Mustermann',
    email: 'Geschäftliche E-Mail',
    emailPlaceholder: 'erika@unternehmen.de',
    company: 'Unternehmen',
    optional: 'optional',
    companyPlaceholder: 'Unternehmens- oder Produktname',
    service: 'Was brauchen Sie?',
    serviceProgram: 'Programm Conscious AI',
    serviceProgramTagline: 'Schulung für Sie oder Ihr ganzes Team.',
    servicePlaceholder: 'Leistung auswählen',
    serviceOther: 'Etwas anderes',
    budget: 'Budgetrahmen',
    budgetPlaceholder: 'Rahmen auswählen',
    budgetHeading: 'Ungefähres Budget',
    budgetHint:
      'Ein Rahmen genügt. Er zeigt uns, welches Team passt - es ist kein Angebot.',
    message: 'Ihre Nachricht',
    messagePlaceholder:
      'Wie nutzt Ihr Team KI heute, oder was brauchen Sie gebaut, und bis wann?',
    consentBefore:
      'Ich bin damit einverstanden, dass Bullah Labs diese Anfrage speichert und verarbeitet, um mir zu antworten, wie in der',
    consentLink: 'Datenschutzerklärung',
    consentAfter: ' beschrieben.',
    submit: 'Anfrage senden',
    replyNote: 'Wir antworten {time}. Keine Newsletter, keine Kampagnen.',
    errorGeneric:
      'Etwas ist schiefgelaufen. Bitte versuchen Sie es gleich noch einmal.',
    sentTitle: 'Nachricht erhalten.',
    sentToast: 'Ihre Anfrage wurde gesendet. Wir antworten {time}.',
    sentBody:
      'Vielen Dank. Wir lesen jede Anfrage persönlich und antworten {time}, direkt an die von Ihnen angegebene Adresse.',
    sentAgain: 'Weitere senden',
    // Mehrstufiges Formular
    stepLabel: 'Schritt {current} von {total}',
    next: 'Weiter',
    back: 'Zurück',
    steps: {
      service: {
        title: 'Wobei können wir helfen?',
        subtitle:
          'Wählen Sie das Passendste. Die Details klären wir gemeinsam.',
        kicker: 'Das Anliegen',
      },
      message: {
        title: 'Erzählen Sie uns etwas mehr.',
        subtitle:
          'Wie nutzt Ihr Team KI heute, oder was brauchen Sie gebaut, und bis wann?',
        kicker: 'Das Briefing',
      },
      details: {
        title: 'Wohin dürfen wir antworten?',
        subtitle:
          'Letzter Schritt. Wir nutzen das nur für die Antwort auf Ihre Anfrage.',
        kicker: 'Ihre Daten',
      },
    },
    reviewTitle: 'Ihre Anfrage',
    notProvided: 'Nicht angegeben',
    charactersLeft: 'Noch {count} Zeichen',
    minChars: 'Mindestens 20 Zeichen',
    budgets: {
      'under-10k': 'Unter 10.000 €',
      '10k-25k': '10.000 € - 25.000 €',
      '25k-50k': '25.000 € - 50.000 €',
      '50k-100k': '50.000 € - 100.000 €',
      'over-100k': 'Über 100.000 €',
      retainer: 'Monatliche Pauschale',
      unsure: 'Noch unklar',
    },
  },
  workPage: {
    back: 'Alle Projekte',
    anonymised: 'Kundenprojekt, Name auf Wunsch geändert',
    private: 'Nicht öffentlich betrieben, Kundenprojekt',
    category: 'Kategorie',
    year: 'Jahr',
    capabilities: 'Kompetenzen',
    lens: 'Effizienz-Prinzip',
    efficiencyKicker: 'Warum es effizient ist',
    techniques: 'Was es schlank hält',
    industry: 'Branche',
    problem: 'Das Problem',
    approach: 'Unser Vorgehen',
    architecture: 'Wie es gebaut ist',
    keyFeatures: 'Kernfunktionen',
    challengesKicker: 'Herausforderungen & Lösungen',
    challenge: 'Herausforderung',
    solution: 'Lösung',
    resultsKicker: 'Ergebnisse',
    resultsTitle: 'Was der Launch verändert hat.',
    gallery: 'Im Produkt',
    onThePhone: 'Auf dem Telefon',
    galleryTitle: 'Mehr als ein Screen.',
    galleryAnonymised:
      'Produktname und Daten wurden auf Wunsch des Kunden geändert; diese Screens bilden {title} so nach, wie es gebaut wurde.',
    galleryMore: '{n} weitere Screens aus {title}, in Gerätegröße aufgenommen.',
    homeScreen: 'Start',
    stack: 'Stack',
    servicesInvolved: 'Beteiligte Leistungen',
    more: 'Weitere Projekte',
    previous: 'zurück',
    next: 'weiter',
    notFound: 'Projekt nicht gefunden',
    ctaTitle: 'Bauen Sie etwas Ähnliches?',
    ctaAccent: [1, 2],
    ctaBody:
      'Meist lässt sich in einem Gespräch sagen, ob sich das obige Vorgehen auf Ihr Problem übertragen lässt und was sich dafür ändern müsste.',
  },
  aboutPage: {
    kicker: 'Über Bullah Labs',
    title: 'Ein Unternehmen rund um gute KI-Nutzung.',
    accent: [3, 4, 5],
    description:
      'Wir bringen nicht-technischen Teams bei, KI wirksam und verantwortungsvoll einzusetzen, und wir bauen schlanke Systeme für Unternehmen, die sie brauchen.',
    story: [
      'Bullah Labs hat als Softwarestudio begonnen. Jahre des Produktbaus haben uns gelehrt, wonach Kunden selten fragen und was sie immer brauchen: das kleinste System, das die Aufgabe zuverlässig erledigt.',
      'Als KI in jedes Werkzeug einzog, sahen wir dieselbe Verschwendung in größerem Maßstab. Das stärkste Modell für jede Aufgabe. Ganze Dokumente eingefügt, wo ein Absatz genügt hätte. Antworten neu erzeugt statt wiederverwendet. Das meiste davon entsteht bei Menschen, die ein Werkzeug bekommen haben und keine Schulung.',
      'Also haben wir aus unserer Praxis ein Programm gemacht. Conscious AI vermittelt Wissensarbeitenden, wann, warum und wie man KI gut einsetzt, und unser Engineering-Team baut weiterhin für Unternehmen, die ein System brauchen und keinen Kurs. Unsere Büros sind in Islamabad und Fellbach.',
    ],
    facts: [
      {
        label: 'Was wir tun',
        value:
          'Das Programm Conscious AI sowie schlanke Web-, KI- und Automatisierungsprojekte',
      },
      {
        label: 'Für wen',
        value:
          'Nicht-technische Wissensarbeitende und die Unternehmen, die sie beschäftigen',
      },
      {
        label: 'Wie',
        value:
          'Praktisch, rollenbezogen, vorher und nachher gemessen, mit menschlicher Kontrolle, wo das Risiko es verlangt',
      },
      {
        label: 'Wo',
        value: 'Islamabad und Fellbach, mit überlappenden Arbeitszeiten',
      },
    ],
    principlesKicker: 'Grundsätze',
    principlesTitle: 'Vier Regeln, an denen sich jedes Projekt messen lässt.',
    principlesAccent: [0, 1],
    whereKicker: 'Wo wir sind',
    whereTitle: 'Zwei Büros, ein Arbeitstag.',
    whereAccent: [3, 4],
    whereDescription:
      'Ein asiatisches Büro in Islamabad und ein europäisches in Fellbach. Rufen Sie an, wo es näher ist; es antwortet dasselbe Team.',
    careersKicker: 'Karriere',
    careersTitle: 'Derzeit keine offenen Stellen.',
    careersBody:
      'Wir stellen momentan nicht ein. Sobald sich das ändert, werden Stellen auf der Karriereseite ausgeschrieben.',
    careersLink: 'Karriere',
    ctaTitle: 'Möchten Sie sehen, wo Ihr Team KI verschwendet?',
    ctaAccent: [6, 7],
    ctaBody:
      'Sagen Sie uns, wie Ihr Team KI heute nutzt. Wir antworten innerhalb eines Werktags, mit dem passenden Einstieg ins Programm oder mit einem schriftlichen Umfang, falls Sie etwas gebaut brauchen.',
  },
  careersPage: {
    kicker: 'Karriere',
    title: 'Derzeit keine offenen Stellen.',
    accent: [1, 2],
    description:
      'Bullah Labs ist ein kleines Studio, das langsam einstellt. Wir rekrutieren momentan nicht, und es gibt keine Stellen, auf die Sie sich bewerben könnten. Sobald sich das ändert, werden die Stellen auf dieser Seite ausgeschrieben.',
    badge: '0 offene Stellen',
    statusKicker: 'Aktueller Stand',
    statusTitle: 'Wir nehmen keine Bewerbungen an.',
    statusBody:
      'Es gibt keine offenen Stellen für Entwicklung, Design oder andere Rollen, weder in Islamabad noch in Fellbach noch remote.',
    notifyBefore:
      'Möchten Sie erfahren, wenn sich das ändert? Schreiben Sie uns über',
    notifyAfter:
      'mit dem Hinweis „Künftige Stellen“ und wir melden uns, sobald eine Position frei wird.',
    ctaTitle: 'Lieber uns beauftragen als bei uns anfangen?',
    ctaAccent: [1, 2],
    ctaBody:
      'Unser dediziertes Team bringt erfahrene Entwicklerinnen und Entwickler in Ihre Roadmap, Ihre Werkzeuge und Ihren Zeitplan.',
  },
  legal: {
    kicker: 'Rechtliches',
    title: 'Die Formalitäten, verständlich formuliert.',
    accent: [3, 4],
    description:
      'Alles, was den Betrieb dieser Website und die Zusammenarbeit mit Kundinnen und Kunden regelt, geschrieben zum Lesen und nicht zum Überfliegen. Fragen gehen direkt an einen Menschen, nicht an ein Formular.',
    reviewed: 'Alle Dokumente zuletzt geprüft am {date}',
    updatedLabel: 'Zuletzt aktualisiert',
    read: 'Lesen',
    contents: 'Inhalt',
    onThisPage: 'Auf dieser Seite',
    otherPolicies: 'Weitere Dokumente:',
    backToLegal: 'Alle Rechtsdokumente',
    policies: {
      privacy: {
        title: 'Datenschutzerklärung',
        summary:
          'Welche personenbezogenen Daten diese Website erhebt, warum, wer sie verarbeitet und welche Rechte Ihnen nach der DSGVO zustehen.',
        audience: 'Besuchende, Anfragende und Kundschaft',
      },
      terms: {
        title: 'Allgemeine Geschäftsbedingungen',
        summary:
          'Die allgemeinen Bedingungen für die Nutzung dieser Website und die Beauftragung von Bullah Labs, zu Leistungsumfang, Zahlung, geistigem Eigentum und Haftung.',
        audience: 'Geschäftskunden',
      },
      cookies: {
        title: 'Cookie-Richtlinie',
        summary:
          'Die zwei Präferenzeinträge, die die Website speichert, und das eine Analyse-Cookie, das nur bei Ihrer Zustimmung geladen wird.',
        audience: 'Besuchende',
      },
      imprint: {
        title: 'Impressum',
        summary:
          'Impressum mit den Unternehmensangaben, Kontaktdaten und verantwortlichen Personen, wie nach deutschem Recht vorgeschrieben.',
        audience: 'Alle',
      },
    },
    intros: {
      privacy:
        'Was wir erheben, warum, und worum Sie uns bitten können. Geschrieben für Menschen, nicht für Juristen.',
      terms:
        'Die Bedingungen für diese Website und unsere Kundenprojekte, in einer Sprache, die man tatsächlich lesen kann.',
      cookies:
        'Zwei kleine Speichereinträge für Ihre Präferenzen und ein Analyse-Cookie, nur wenn Sie zustimmen.',
      imprint:
        'Wer diese Website betreibt, wo wir eingetragen sind und wie Sie eine verantwortliche Person erreichen.',
    },
    commitmentsKicker: 'Wie wir Verträge schließen',
    commitmentsTitle: 'Vier Zusagen in jedem Projekt.',
    commitments: [
      {
        title: 'Ihnen gehört, was wir bauen',
        body: 'Individueller Code, Designs und Dokumentation gehen mit der Zahlung auf Sie über. Wir arbeiten in Repositories und Konten, die auf Ihr Unternehmen laufen.',
      },
      {
        title: 'DSGVO als Standard',
        body: 'Für jedes Projekt mit personenbezogenen Daten stellen wir einen Auftragsverarbeitungsvertrag bereit, und unsere eigene Website erhebt nur das Nötigste, um Ihnen zu antworten.',
      },
      {
        title: 'NDA vor der Analysephase',
        body: 'Auf Wunsch unterzeichnen wir vor jedem Gespräch über den Leistungsumfang eine beidseitige Vertraulichkeitsvereinbarung und behandeln ohnehin jedes Briefing vertraulich.',
      },
      {
        title: 'Zwei Vertragspartner',
        body: 'Kundinnen und Kunden können mit unserem deutschen Büro nach deutschem Recht oder mit unserem asiatischen Büro nach pakistanischem Recht kontrahieren. Der Leistungsschein benennt, welcher gilt.',
      },
    ],
    requestsKicker: 'Rechts- und Datenanfragen',
    requestsBody:
      'Um ein Datenrecht auszuüben, einen Auftragsverarbeitungsvertrag oder ein NDA anzufordern, ein Sicherheitsproblem zu melden oder etwas zu diesen Dokumenten zu fragen, schreiben Sie uns. Ein Mensch antwortet innerhalb von fünf Werktagen; Datenanfragen werden innerhalb eines Monats beantwortet, wie es die DSGVO verlangt.',
  },
  notFound: {
    kicker: 'Fehler 404',
    title: 'Diese Seite wurde nie gebaut.',
    accent: [4],
    body: 'Die Adresse hat sich vielleicht geändert, oder der Link war falsch. Das Programm und unsere Projekte sind einen Klick entfernt.',
    home: 'Zurück zur Startseite',
    work: 'Arbeiten ansehen',
  },
  cookies: {
    label: 'Cookie-Einwilligung',
    kicker: 'Cookies',
    bodyBefore:
      'Wir nutzen ein datenschutzfreundliches Analyse-Cookie, um zu verstehen, welche Seiten nützlich sind. Keine Werbung, kein seitenübergreifendes Tracking. Lesen Sie die',
    link: 'Cookie-Richtlinie',
    bodyAfter: '.',
    accept: 'Akzeptieren',
    decline: 'Ablehnen',
  },
  contact: {
    kicker: 'Kontakt',
    title: 'Sagen Sie uns, wo KI helfen soll.',
    accent: [3, 4, 5, 6],
    description:
      'Ein paar Sätze genügen. Sagen Sie uns, wie Ihr Team KI heute nutzt oder was Sie gebaut brauchen. Wir antworten innerhalb eines Werktags.',
    direct: 'So erreichen Sie uns',
    formNote:
      'Das Formular ist der schnellste Weg zu uns. Es kommt direkt bei uns an und wir beantworten jede Anfrage persönlich.',
    book: 'Ein 30-minütiges Kennenlerngespräch buchen',
    callNote:
      'Lieber telefonieren? Erwähnen Sie es und wir senden Ihnen einen Buchungslink.',
    choose: {
      formTab: 'Schreiben Sie uns',
      callTab: 'Gespräch buchen',
      callHint: '30-minütiges Erstgespräch',
    },
    faqKicker: 'Bevor Sie schreiben',
    faqTitle: 'Die Fragen, die wir am häufigsten hören.',
    faqAccent: [4],
    home: {
      kicker: 'Kontakt',
      title: 'Sagen Sie uns, wo KI helfen soll.',
      accent: [3, 4, 5, 6],
      description:
        'Ein paar Sätze genügen. Sagen Sie uns, wie Ihr Team KI heute nutzt oder was Sie gebaut brauchen. Wir antworten innerhalb eines Werktags.',
    },
  },
  faq: {
    kicker: 'FAQ',
    title: 'Klare Antworten, bevor Sie sich festlegen.',
    description: 'Zum Programm, zu unseren Projekten und zur Zusammenarbeit.',
    accent: [0, 1],
  },
  cta: {
    kicker: 'Sprechen wir',
    title: 'Bereit, KI bewusst einzusetzen?',
    accent: [2, 3, 4],
    body: 'Erzählen Sie uns von Ihrem Team und wie es KI heute nutzt. Wir antworten innerhalb eines Werktags, mit dem passenden Einstieg in Conscious AI oder mit einem schriftlichen Umfang, falls Sie etwas gebaut brauchen.',
    button: 'Kontakt aufnehmen',
  },
  footer: {
    pitch:
      'KI-Befähigung für Wissensarbeit, und schlanke Systeme für Teams, die sie gebaut brauchen.',
    quote: 'Kontakt aufnehmen',
    services: 'Mit uns bauen',
    company: 'Unternehmen',
    offices: 'Standorte',
    legal: 'Rechtliches',
    connect: 'Kontakt',
    caseStudies: 'Projekte',
    rights: 'Alle Rechte vorbehalten.',
    backToTop: 'Nach oben',
  },
};
