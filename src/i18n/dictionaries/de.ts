import type { Dictionary } from './en';

/** German copy. Structure mirrors `en` exactly. */
export const de: Dictionary = {
  locale: 'de',
  nav: {
    about: 'Wer wir sind',
    program: 'Conscious AI',
    services: 'Leistungen',
    work: 'Projekte',
    approach: 'Unser Ansatz',
    contact: 'Kontakt',
    home: 'Start',
    cta: 'Sprechen wir',
    bookCall: 'Gespräch buchen',
    menuOpen: 'Menü öffnen',
    menuClose: 'Menü schließen',
    language: 'Sprache',
    next: 'Weiter',
    top: 'Nach oben',
  },
  hero: {
    badge: 'Durchdachte Technologie. Spürbare Wirkung.',
    title: 'Technologie, die Probleme löst.\nMit Gewissen gebaut.',
    accent: [4, 5, 6],
    body: 'Wir entwerfen, bauen und verbessern digitale Produkte mit Blick auf ihre Wirkung in der echten Welt. Von den Systemen, die wir bauen, bis zur KI, die wir nutzen, konzentrieren wir uns auf das, was nützlich ist, was verantwortbar ist und was es wert ist, gebaut zu werden.',
    primary: 'Projekt besprechen',
    secondary: 'Projekte ansehen',
    cases: {
      kicker:
        'Echte Projekte: das Problem, was wir gebaut haben, das Ergebnis.',
      heading: 'Echte Projekte',
      stages: {
        problem: 'Das Problem',
        built: 'Was wir gebaut haben',
        conscience: 'Mit Gewissen',
        result: 'Das Ergebnis',
      },
      link: 'Zur Fallstudie',
      cases: [
        {
          slug: 'bank-islami-pep',
          client: 'BankIslami',
          problem:
            'Analysten öffneten jeden Morgen Dutzende Nachrichtenseiten und suchten Hunderte Namen von Hand.',
          built:
            'Eine Screening-Plattform, die die Tagesnachrichten liest, mit der PEP-Liste abgleicht und in einem signierten Risikobericht endet.',
          conscience:
            'Eine Scoring-Pipeline liest. Die Entscheidung treffen Analysten.',
          value: '30 Min.',
          label: 'Morgen-Triage statt vier Stunden',
        },
        {
          slug: 'bitsmiths-hrm',
          client: 'Bitsmiths Studio',
          problem:
            'Urlaub, Spesen, Überstunden und Lohnabrechnung für ein ganzes Studio, jeden Monat von Hand berechnet.',
          built:
            'Ein HR-System, in dem freigegebene Posten in einen Payroll-Lauf fließen, der berechnet, sperrt und exportiert.',
          conscience:
            'Lohnabrechnung ist Arithmetik, also laufen Regeln. Kein KI-Modell im Spiel.',
          value: '0',
          label: 'manuelle Payroll-Berechnungen',
        },
        {
          slug: 'curio-market',
          client: 'E-Commerce-Marktplatz',
          problem:
            'Auszahlungen an Verkäufer und Sendungsverfolgung liefen von Hand, und der Support-Posteingang zeigte es.',
          built:
            'Ein Multi-Seller-Marktplatz mit Stripe-Connect-Auszahlungen und DHL-Tracking, die von allein laufen.',
          conscience:
            'Die zwei Pfade mit der meisten Handarbeit wurden zuerst automatisiert.',
          value: '70 %',
          label: 'weniger Support-Anfragen',
        },
        {
          slug: 'rankloom',
          client: 'SEO-Plattform',
          problem:
            'SEO-Teams sprangen den ganzen Tag zwischen Tools und kauften dieselben Keyword-Daten immer wieder.',
          built:
            'Eine Plattform für Keyword-Recherche, KI-Content und Rank-Tracking, mit gebündelten und gecachten Anfragen.',
          conscience:
            'Dieselben Daten werden nie zweimal gekauft. Modelle lassen sich ohne Umbau tauschen.',
          value: '3x',
          label: 'geringere Kosten pro Artikel',
        },
        {
          slug: 'qa-compliance-agent',
          client: 'Prüfungsgesellschaft',
          problem:
            'Berichte wurden Klausel für Klausel von Hand gegen die Standards geprüft.',
          built:
            'Ein KI-Reviewer, der jeden Befund als nachverfolgbare Änderung mit Klausel und Begründung zurückgibt.',
          conscience:
            'Jeder Befund lässt sich an Ort und Stelle prüfen. Nichts wird blind übernommen.',
          value: '2x',
          label: 'schnellere Dokumentenprüfung',
        },
      ],
    },
  },
  consciousAi: {
    kicker: 'Conscious AI',
    title:
      'KI entwickelt sich schnell. Sie sollen Schritt halten. Aber wo anfangen?',
    accent: [8, 9, 10],
    paragraphs: [
      'Jeden Tag erscheinen neue Werkzeuge. Sie wollen smarter arbeiten, Fähigkeiten aufbauen und relevant bleiben, aber es ist schwer zu wissen, was man lernen soll, welchen Werkzeugen man trauen kann oder ob man KI überhaupt gut nutzt. Vielleicht beschäftigen Sie auch ihre ökologischen und sozialen Folgen.',
      'Sie sollten nicht wählen müssen zwischen guter Arbeit und einem verantwortungsvollen Umgang mit KI.',
      'Wir bieten kostenlose Ressourcen und praktische Anleitung, damit Sie KI mit mehr Sicherheit und weniger Verschwendung nutzen. Lernen Sie, das richtige Werkzeug für die Aufgabe zu wählen, Ihren KI-Arbeitsplatz einzurichten, klarere Prompts zu schreiben und unnötige Nutzung zu vermeiden.',
      'Sie erfahren, wo KI wirklich hilft, wo sie an Grenzen stößt und wie alltägliche Entscheidungen Zeit, Kosten, Energie- und Wasserverbrauch beeinflussen. Kein technischer Hintergrund nötig. Kein Hinterherlaufen hinter jedem Trend.',
    ],
    closingKicker: 'Kostenlose Ressourcen',
    closing:
      'Smarter mit KI arbeiten. Sicherer werden. Bewusstere Entscheidungen treffen.',
    cta: 'Kostenlose KI-Ressourcen entdecken',
    notifyNote:
      'Die kostenlosen Lernmodule entstehen gerade. Hinterlassen Sie Ihre E-Mail, und wir sagen Ihnen Bescheid, sobald sie offen sind.',
  },
  consciousTech: {
    kicker: 'Bewusste Technologie',
    title: 'Technologie ist nie nur Technologie.',
    accent: [2, 3, 4],
    paragraphs: [
      'Jedes Produkt prägt, wie Menschen arbeiten, leben und Entscheidungen treffen. Jedes System verbraucht Ressourcen. Jede technische Entscheidung hat Folgen.',
      'Wir bauen Technologie mit diesen Folgen im Blick und denken Umweltwirkung, soziale Verantwortung und ethische Fragen von Anfang an mit.',
      'Bessere Technologie heißt mehr, als dass sie funktioniert. Es heißt zu verstehen, was sie verändert, was sie verbraucht und wen sie betrifft.',
    ],
  },
  numbers: {
    kicker: 'Belege und Ergebnisse',
    title: 'Gebaut für echte Ergebnisse.',
    description:
      'Wir machen aus Ideen nützliche Produkte und verbinden durchdachte Technik mit dem Blick auf bleibenden Wert.',
    items: [
      { value: '150+', label: 'Abgeschlossene Projekte' },
      { value: '40+', label: 'Kunden auf vier Kontinenten' },
      { value: '2', label: 'Standorte, Deutschland und Pakistan' },
    ],
  },
  technologies: {
    kicker: 'Werkzeuge und Technologie',
    statement: 'Bewährte Werkzeuge. Aus gutem Grund gewählt.',
    statementMuted:
      'Etablierte Technologien, die zu Problem, Team und Produkt passen, gewählt, damit Systeme gut funktionieren und praktisch zu betreiben und zu verbessern bleiben.',
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
  howItWorks: {
    kicker: 'So arbeiten wir',
    title: 'Klar denken. Bewusst bauen.',
    accent: [2, 3],
    description:
      'Vom Verstehen des Problems bis zur Verbesserung dessen, was wir gebaut haben.',
    stepLabel: 'Schritt',
    cta: 'Projekt besprechen',
    steps: [
      {
        title: 'Das Problem verstehen',
        when: 'Verstehen',
        summary:
          'Wir lernen, was Menschen brauchen, was im Weg steht und wie Erfolg aussehen soll.',
      },
      {
        title: 'Den richtigen Ansatz wählen',
        when: 'Entscheiden',
        summary:
          'Wir bewerten mögliche Lösungen, einschließlich ihrer Komplexität, Kosten, Ressourcenbedarfe und Folgen.',
      },
      {
        title: 'Bauen und lernen',
        when: 'Bauen',
        summary:
          'Wir entwickeln, testen und verfeinern die Lösung mit regelmäßigem Feedback und klaren Prioritäten.',
      },
      {
        title: 'Mit Absicht verbessern',
        when: 'Verbessern',
        summary:
          'Wir messen, was zählt, und verbessern dort weiter, wo echter Wert entsteht. Manchmal ist der richtige nächste Schritt, zu vereinfachen statt mehr hinzuzufügen.',
      },
    ],
  },
  globalReach: {
    kicker: 'Weltweit im Einsatz',
    title: 'Ein Team. Wo immer die Arbeit stattfindet.',
    description:
      'Wir arbeiten mit Teams an verschiedenen Standorten zusammen und verbinden klare Kommunikation mit praktischer Produkt- und Entwicklungsarbeit. Betreut aus Stuttgart und aus Islamabad, damit immer jemand aus dem Team online ist, wenn Sie arbeiten.',
    legend: 'Standorte und Kundenorte',
  },
  testimonials: {
    kicker: 'Kundenstimmen',
    title: 'Gute Arbeit, gemeinsam gebaut.',
    accent: [2, 3],
    caseStudy: 'Projekt ansehen',
    prev: 'Vorherige Stimme',
    next: 'Nächste Stimme',
  },
  work: {
    kicker: 'Ausgewählte Projekte',
    title: 'Jedes Projekt soll einen Unterschied machen.',
    description:
      'Wir arbeiten an digitalen Produkten und Systemen, die echte Probleme lösen. Dazu gehört, neue Produkte zu bauen, bestehende zu verbessern und Teams zu fundierteren Technologieentscheidungen zu verhelfen.',
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
      kicker: 'Ausgewählte Projekte',
      title: 'Jedes Projekt soll einen Unterschied machen.',
      accent: [3, 4, 5],
      body: [
        'Wir arbeiten an digitalen Produkten und Systemen, die echte Probleme lösen. Dazu gehört, neue Produkte zu bauen, bestehende zu verbessern und Teams zu fundierteren Technologieentscheidungen zu verhelfen.',
        'Unsere Arbeit schafft auch Gelegenheiten, Wissen zu teilen: Menschen verstehen die Werkzeuge, die sie nutzen, treffen bessere Entscheidungen und erkennen die weitere Wirkung von Technologie.',
      ],
      cta: 'Alle Projekte ansehen',
      listLabel: 'Ausgewählte Projekte',
      more: '{n} weitere auf der Projektseite',
    },
  },
  services: {
    kicker: 'Leistungen',
    title: 'Durchdachte Technologie, von der Idee bis zur Verbesserung.',
    accent: [2, 3, 4, 5, 6, 7],
    description:
      'Wir bringen Produktdenken, Technik und verantwortungsvolle Technologieentscheidungen zusammen. Und wir helfen Kundinnen und Kunden, das Wissen aufzubauen, um über ein einzelnes Projekt hinaus bessere Entscheidungen zu treffen.',
    promise:
      'Produktdenken, Technik und verantwortungsvolle Technologieentscheidungen, zusammen.',
    cta: 'Projekt besprechen',
  },
  whoWeAre: {
    kicker: 'Wer wir sind',
    title:
      'Wir bauen Technologie mit Absicht und glauben, dass Fortschritt Verantwortung bedeutet.',
    accent: [8, 9, 10],
    paragraphs: [
      'Bullah Labs ist ein Produkt- und Entwicklungsteam, das Ideen in nützliche digitale Produkte verwandelt. Wir verbinden durchdachte Technik mit einem bewussten Blick darauf, wie Technologie entworfen, gebaut und genutzt wird.',
      'Wir glauben, dass Technologie echte Probleme lösen soll, statt Komplexität um ihrer selbst willen zu schaffen. Das heißt, über das hinauszuschauen, was ein Produkt kann, und zu fragen, was es tun sollte, welche Ressourcen es braucht und wie es Menschen und die Welt um uns herum beeinflusst.',
      'Unsere Vision geht über das Bauen von Software oder die Einführung von KI hinaus. Wir wollen eine Zukunft mitgestalten, in der Technologie menschliche Fähigkeiten erweitert, ohne ihre ökologischen, sozialen und ethischen Folgen aus dem Blick zu verlieren.',
      'Das beginnt mit Verstehen. Wir helfen Menschen und Organisationen, informierte Entscheidungen zu treffen, Technologie wirksam zu nutzen und zu erkennen, wann weniger mehr ist.',
      'Für uns ist bessere Technologie nicht einfach leistungsfähiger. Sie ist nützlicher, durchdachter und verantwortungsvoller.',
    ],
    cta: 'Mehr über uns',
  },
  principles: {
    kicker: 'Technische Grundsätze',
    title: 'Bauen, was zählt. Weglassen, was nicht zählt.',
    accent: [3, 4, 5, 6],
    description:
      'Die Regeln hinter jeder technischen Entscheidung, die wir treffen.',
  },
  program: {
    watch: 'Ganzen Kurs ansehen',
    request: 'Schulung für ein Team',
    player: {
      modules: 'Module',
      module: 'Modul',
      lesson: 'Lektion',
      lessons: 'Lektionen',
      published: 'veröffentlicht',
      watched: 'gesehen',
      watchedTag: 'Gesehen',
      minutes: 'Min.',
      comingSoon: 'Demnächst',
      nothingYet:
        'Diese Lektion wird gerade aufgenommen. Hinterlassen Sie Ihre E-Mail, und wir sagen Ihnen Bescheid, sobald sie online ist.',
      listLabel: 'Kursmodule und Lektionen',
      previous: 'Vorherige Lektion',
      next: 'Nächste Lektion',
      upNext: 'Als Nächstes',
      play: 'Abspielen',
      pause: 'Pause',
      mute: 'Stumm',
      unmute: 'Ton an',
      speed: 'Geschwindigkeit',
      fullscreen: 'Im Vollbild ansehen',
      fullscreenShort: 'Vollbild',
      exitFullscreen: 'Vollbild beenden',
      pip: 'Bild im Bild',
      back: '10 Sekunden zurück',
      forward: '10 Sekunden vor',
      loadEmbed: 'Lektion abspielen',
      seek: 'Position',
    },
    signup: {
      kicker: 'Auf dem Laufenden bleiben',
      title: 'Erfahren Sie es als Erste.',
      body: 'Die kostenlosen Lernmodule entstehen gerade. Hinterlassen Sie Ihre E-Mail, und wir sagen Ihnen Bescheid, sobald sie fertig sind.',
      email: 'E-Mail-Adresse',
      placeholder: 'Ihre E-Mail-Adresse',
      submit: 'Bescheid geben',
      consentBefore:
        'Mit der Anmeldung stimmen Sie zu, dass wir Ihre Adresse für diesen Hinweis speichern, wie in der',
      consentLink: 'Datenschutzerklärung',
      consentAfter: ' beschrieben.',
      doneTitle: 'Sie stehen auf der Liste.',
      alreadyTitle: 'Sie standen schon auf der Liste.',
      doneBody: 'Eine E-Mail, sobald es so weit ist, sonst nichts.',
      errorGeneric:
        'Etwas ist schiefgelaufen. Bitte versuchen Sie es gleich noch einmal.',
      teamLink: 'Schulung für ein ganzes Team?',
    },
  },
  programPage: {
    kicker: 'Conscious AI',
    title: 'KI mit Absicht nutzen.',
    accent: [1, 2],
    description:
      'KI entwickelt sich schnell. Fühlen Sie sich abgehängt? Unsicher, wo Sie anfangen, wem Sie trauen oder wie Sie KI verantwortungsvoll nutzen sollen?',
    promise:
      'Wir entwickeln kostenlose, praktische Lernmodule, mit denen Sie KI sicher nutzen, smarter arbeiten und unnötige Verschwendung vermeiden.',
    heroCta: 'Bescheid geben, wenn es öffnet',
    principle:
      'Praktische Fähigkeiten. Bewusste Entscheidungen. Kein Programmieren nötig.',
    course: {
      kicker: 'Demnächst',
      title: 'Bessere KI-Gewohnheiten beginnen hier.',
      accent: [0, 1],
      learnKicker: 'Sie lernen',
      learn: [
        'Das richtige Werkzeug für die Aufgabe wählen.',
        'Bessere Prompts schreiben und brauchbare Ergebnisse bekommen.',
        'Wiederverwendbare KI-Abläufe einrichten.',
        'Kosten, Energie- und Wasserverbrauch von KI verstehen.',
        'Grenzen erkennen und Ergebnisse prüfen.',
      ],
      facts: [
        { label: 'Format', value: 'Demnächst' },
        { label: 'Anmeldung', value: 'Noch nicht offen' },
      ],
      cta: 'Benachrichtigen',
    },
    problem: {
      kicker: 'Das Problem',
      title: 'Alle erwarten, dass Sie KI nutzen. Wenige zeigen, wie.',
      accent: [6, 7, 8],
      lines: [
        'Neue Werkzeuge. Neue Trends. Mehr Druck, Schritt zu halten.',
        'Sie wollen smarter arbeiten und relevant bleiben. Aber Sie wollen auch informierte Entscheidungen über die ökologischen und sozialen Folgen von KI treffen.',
        'Sie sollten nicht wählen müssen zwischen guter Arbeit und einem verantwortungsvollen Umgang mit KI.',
      ],
    },
    approach: {
      kicker: 'KI besser nutzen',
      title: 'Nicht mehr KI. Bessere KI.',
      accent: [3, 4],
      lines: [
        'KI nutzen, wenn sie hilft. Das richtige Modell wählen. Klare Anweisungen geben. Unnötige Schritte weglassen.',
        'Kleine Änderungen können Zeit sparen, Ergebnisse verbessern und unnötige Rechenleistung vermeiden.',
        'Nutzen, was Sie brauchen. Die Wirkung verstehen. Das menschliche Urteil im Spiel behalten.',
      ],
    },
    modules: {
      kicker: 'Lernen durch Tun',
      title: 'Praktische Fähigkeiten. Echte Arbeit.',
      accent: [2, 3],
      description:
        'Kostenlose Ressourcen, mit denen Sie bessere KI-Gewohnheiten aufbauen, eine Aufgabe nach der anderen.',
      habits: [
        {
          title: 'Einmal einrichten.',
          body: 'Wiederverwendbare Anweisungen für wiederkehrende Aufgaben anlegen.',
        },
        {
          title: 'Klar prompten.',
          body: 'Bessere Ergebnisse mit weniger Nachfragen.',
        },
        {
          title: 'Klug wählen.',
          body: 'Das Modell zur Aufgabe passend wählen.',
        },
        {
          title: 'Kontext relevant halten.',
          body: 'Der KI geben, was sie braucht, nicht alles, was Sie haben.',
        },
        {
          title: 'Kritisch denken.',
          body: 'Ergebnisse prüfen und wissen, wann man KI nicht nutzt.',
        },
        {
          title: 'Die Wirkung verstehen.',
          body: 'Lernen, wie alltägliche Entscheidungen den Ressourcenverbrauch beeinflussen.',
        },
      ],
      cta: 'Bescheid geben, wenn es startet',
    },
    whoFor: {
      kicker: 'Für Nicht-Entwickler',
      title: 'Neugierig auf KI. Kein Programmieren nötig.',
      accent: [3, 4, 5],
      paragraphs: [
        'Für Menschen, die KI bei der Arbeit nutzen wollen, ohne technische Experten zu werden.',
        'Ob Sie in Marketing, Operations, Finanzen, HR, Vertrieb oder Projektmanagement arbeiten: Lernen Sie Fähigkeiten, die Sie sofort einsetzen können.',
      ],
      questions: [
        'Unsicher, wo Sie anfangen sollen?',
        'Mühe, Schritt zu halten?',
        'Bessere Ergebnisse mit weniger Aufwand?',
        'Sorgen um die Wirkung von KI?',
      ],
      closing: 'Beginnen Sie mit der Arbeit, die Sie ohnehin tun.',
    },
    business: {
      kicker: 'Für Teams und Organisationen',
      title: 'Helfen Sie Ihrem Team, KI gut zu nutzen.',
      accent: [4, 5, 6, 7],
      paragraphs: [
        'Menschen KI-Werkzeuge zu geben ist leicht. Ihnen zu helfen, diese Werkzeuge wirksam und verantwortungsvoll zu nutzen, braucht Übung.',
        'Wir helfen Teams, Sicherheit aufzubauen, Abläufe zu verbessern und bewusstere Entscheidungen zu treffen.',
      ],
      offers: [
        {
          title: 'Gruppenschulungen und Workshops',
          body: 'Praktische Sitzungen, zugeschnitten auf alltägliche Aufgaben und die Bedürfnisse des Teams.',
        },
        {
          title: 'KI-Fähigkeiten und Abläufe',
          body: 'Menschen helfen, nützliche Anwendungen zu finden, Prompts zu verbessern und Ergebnisse zu bewerten.',
        },
        {
          title: 'Conscious-AI-Beratung',
          body: 'Werkzeugwahl, Kosten, Ressourcenverbrauch und verantwortungsvolle Einführung verstehen.',
        },
        {
          title: 'KI-Optimierung',
          body: 'Unnötige Komplexität und Rechenleistung erkennen, bei gleichbleibender Qualität, Zuverlässigkeit und Sicherheit.',
        },
      ],
      cta: 'Teamschulung besprechen',
      note: 'Kostenloses Lernen für Einzelne. Praktische Schulung und Beratung für Teams.',
    },
    vision: {
      kicker: 'Warum wir das tun',
      title: 'Technologie soll uns voranbringen, mit Bedacht.',
      accent: [4, 5],
      paragraphs: [
        'Bei Bullah Labs bauen wir digitale Produkte und helfen Menschen, bessere Technologieentscheidungen zu treffen.',
        'Wir glauben, Fortschritt heißt, echte Probleme zu lösen, nicht mehr zu bauen um des Bauens willen.',
        'Das heißt, den ökologischen Fußabdruck, die sozialen Folgen und die ethischen Implikationen von Technologie mitzudenken.',
        'Unsere Vision: Technologie, die menschliche Fähigkeiten erweitert, ohne ihre Wirkung aus dem Blick zu verlieren.',
      ],
    },
    notify: {
      kicker: 'Auf dem Laufenden bleiben',
      title: 'Erfahren Sie es als Erste.',
      body: 'Die kostenlosen Lernmodule entstehen gerade. Hinterlassen Sie Ihre E-Mail, und wir sagen Ihnen Bescheid, sobald sie fertig sind.',
      cta: 'Bescheid geben',
      note: 'Eine E-Mail, sobald es so weit ist.',
    },
    comingSoon: {
      kicker: 'Etwas Neues entsteht',
      title: 'Bewusst lernen. In die Praxis bringen.',
      accent: [2, 3, 4, 5],
      body: 'Kostenloses Lernen ist erst der Anfang. Wir bauen ein neues Produkt, das mehr bewusste Technologie in den Alltag bringt. Bald mehr. Mit Absicht gebaut.',
      cta: 'Auf dem Laufenden bleiben',
    },
  },
  contactForm: {
    name: 'Vollständiger Name',
    namePlaceholder: 'Erika Mustermann',
    email: 'Geschäftliche E-Mail',
    emailPlaceholder: 'erika@unternehmen.de',
    company: 'Unternehmen',
    optional: 'optional',
    companyPlaceholder: 'Unternehmens- oder Teamname',
    service: 'Wofür interessieren Sie sich?',
    serviceOther: 'Etwas anderes',
    serviceOtherTagline:
      'Ein Projekt, eine Frage, eine Partnerschaft oder etwas, das hier nicht steht.',
    interests: {
      course: {
        title: 'Der kostenlose Kurs',
        description: 'Zugang zu den Conscious-AI-Lernmodulen.',
      },
      team: {
        title: 'Schulung für mein Team',
        description: 'Conscious AI für ein ganzes Team oder Unternehmen.',
      },
    },
    message: 'Ihre Nachricht',
    messagePlaceholder:
      'Was bauen Sie, was möchten Sie verbessern, oder wo steht Technologie im Weg?',
    consentBefore:
      'Ich bin damit einverstanden, dass Bullah Labs diese Anfrage speichert und verarbeitet, um mir zu antworten, wie in der',
    consentLink: 'Datenschutzerklärung',
    consentAfter: ' beschrieben.',
    submit: 'Anfrage senden',
    replyNote: 'Wir antworten {time}. Keine Newsletter, keine Kampagnen.',
    errorGeneric:
      'Etwas ist schiefgelaufen. Bitte versuchen Sie es gleich noch einmal.',
    sentTitle: 'Nachricht erhalten.',
    sentBody:
      'Vielen Dank. Wir lesen jede Anfrage persönlich und antworten {time}, direkt an die von Ihnen angegebene Adresse.',
    sentAgain: 'Weitere senden',
    // Mehrstufiges Formular
    stepLabel: 'Schritt {current} von {total}',
    next: 'Weiter',
    back: 'Zurück',
    steps: {
      service: {
        title: 'Wo möchten Sie anfangen?',
        subtitle: 'Wählen Sie das Passendste.',
      },
      message: {
        title: 'Erzählen Sie uns etwas mehr.',
        subtitle:
          'Was Sie bauen, was Sie verbessern möchten oder wo Technologie im Weg steht.',
      },
      details: {
        title: 'Wohin dürfen wir antworten?',
        subtitle:
          'Letzter Schritt. Wir nutzen das nur für die Antwort auf Ihre Anfrage.',
      },
    },
    charactersLeft: 'Noch {count} Zeichen',
    minChars: 'Mindestens 20 Zeichen',
  },
  workPage: {
    back: 'Alle Projekte',
    anonymised: 'Kundenprojekt, Name auf Wunsch geändert',
    private: 'Nicht öffentlich betrieben, Kundenprojekt',
    category: 'Kategorie',
    year: 'Jahr',
    capabilities: 'Kompetenzen',
    lens: 'Optimierung',
    efficiencyKicker: 'So ist es optimiert',
    techniques: 'Was es schlank hält',
    industry: 'Branche',
    problem: 'Die Herausforderung',
    approach: 'Die Arbeit',
    architecture: 'Wie es gebaut ist',
    keyFeatures: 'Kernfunktionen',
    challengesKicker: 'Herausforderungen & Lösungen',
    challenge: 'Herausforderung',
    solution: 'Lösung',
    resultsKicker: 'Die Wirkung',
    resultsTitle: 'Was leichter, besser oder wirksamer wurde.',
    gallery: 'Im Produkt',
    onThePhone: 'Auf dem Telefon',
    galleryTitle: 'Mehr als ein Screen.',
    galleryAnonymised:
      'Produktname und Daten wurden auf Wunsch des Kunden geändert; diese Screens bilden {title} so nach, wie es gebaut wurde.',
    galleryMore: '{n} weitere Screens aus {title}, in Gerätegröße aufgenommen.',
    homeScreen: 'Start',
    stack: 'Stack',
    more: 'Weitere Projekte',
    previous: 'zurück',
    next: 'weiter',
    notFound: 'Projekt nicht gefunden',
    ctaTitle: 'Ein Problem, das sich zu lösen lohnt?',
    ctaAccent: [4, 5, 6],
    ctaBody:
      'Erzählen Sie uns, was Sie bauen, was Sie verbessern wollen oder wo Technologie im Weg steht. Wir helfen Ihnen, einen praktischen nächsten Schritt zu finden.',
  },
  aboutPage: {
    kicker: 'Wer wir sind',
    title:
      'Wir bauen Technologie mit Absicht und glauben, dass Fortschritt Verantwortung bedeutet.',
    accent: [8, 9, 10],
    description:
      'Bullah Labs ist ein Produkt- und Entwicklungsteam, das Ideen in nützliche digitale Produkte verwandelt. Wir verbinden durchdachte Technik mit einem bewussten Blick darauf, wie Technologie entworfen, gebaut und genutzt wird.',
    story: [
      'Wir glauben, dass Technologie echte Probleme lösen soll, statt Komplexität um ihrer selbst willen zu schaffen. Das heißt, über das hinauszuschauen, was ein Produkt kann, und zu fragen, was es tun sollte, welche Ressourcen es braucht und wie es Menschen und die Welt um uns herum beeinflusst.',
      'Unsere Vision geht über das Bauen von Software oder die Einführung von KI hinaus. Wir wollen eine Zukunft mitgestalten, in der Technologie menschliche Fähigkeiten erweitert, ohne ihre ökologischen, sozialen und ethischen Folgen aus dem Blick zu verlieren.',
      'Das beginnt mit Verstehen. Wir helfen Menschen und Organisationen, informierte Entscheidungen zu treffen, Technologie wirksam zu nutzen und zu erkennen, wann weniger mehr ist.',
      'Für uns ist bessere Technologie nicht einfach leistungsfähiger. Sie ist nützlicher, durchdachter und verantwortungsvoller.',
    ],
    facts: [
      {
        label: 'Was wir tun',
        value:
          'Digitale Produkte, entworfen, gebaut und verbessert, mit Beratung zum guten Umgang mit Technologie und KI',
      },
      {
        label: 'Für wen',
        value:
          'Teams, die ein neues Produkt bauen, ein bestehendes verbessern oder Technologieentscheidungen treffen',
      },
      {
        label: 'Wie',
        value:
          'Das Problem verstehen, den richtigen Ansatz wählen, bauen und lernen, mit Absicht verbessern',
      },
      {
        label: 'Wo',
        value: 'Islamabad und Stuttgart, mit überlappenden Arbeitszeiten',
      },
    ],
    whereKicker: 'Wo wir sind',
    whereTitle: 'Zwei Büros, ein Arbeitstag.',
    whereAccent: [3, 4],
    whereDescription:
      'Ein asiatisches Büro in Islamabad und ein europäisches in Stuttgart. Schreiben Sie dem, das näher ist; es antwortet dasselbe Team.',
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
    body: 'Die Adresse hat sich vielleicht geändert, oder der Link war falsch. Die Startseite ist einen Klick entfernt.',
    home: 'Zurück zur Startseite',
    program: 'Conscious AI',
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
    title: 'Ein Problem, das sich zu lösen lohnt?',
    accent: [4, 5, 6],
    description:
      'Erzählen Sie uns, was Sie bauen, was Sie verbessern wollen oder wo Technologie im Weg steht. Wir helfen Ihnen, einen praktischen nächsten Schritt zu finden.',
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
      title: 'Ein Problem, das sich zu lösen lohnt?',
      accent: [4, 5, 6],
      description:
        'Erzählen Sie uns, was Sie bauen, was Sie verbessern wollen oder wo Technologie im Weg steht. Wir helfen Ihnen, einen praktischen nächsten Schritt zu finden.',
    },
  },
  faq: {
    kicker: 'FAQ',
    title: 'Klare Antworten auf wichtige Fragen.',
    description: 'Was wir tun, wie wir arbeiten und wo KI hineinpasst.',
    accent: [0, 1],
  },
  cta: {
    kicker: 'Sprechen wir',
    title: 'Ein Problem, das sich zu lösen lohnt?',
    accent: [4, 5, 6],
    body: 'Erzählen Sie uns, was Sie bauen, was Sie verbessern wollen oder wo Technologie im Weg steht. Wir helfen Ihnen, einen praktischen nächsten Schritt zu finden.',
    button: 'Erzählen Sie uns von Ihrem Projekt',
  },
  footer: {
    pitch:
      'Wir bauen digitale Produkte und helfen Menschen, Technologie mit mehr Sorgfalt, Klarheit und Verantwortung zu nutzen.',
    program: 'Conscious AI',
    company: 'Unternehmen',
    offices: 'Standorte',
    legal: 'Rechtliches',
    rights: 'Alle Rechte vorbehalten.',
    backToTop: 'Nach oben',
    status: 'Online',
  },
};
