import type { ReceiptCopy } from '@/components/sections/planet-receipt';

import type { Dictionary } from './en';

/** German copy. Structure mirrors `en` exactly. */
export const de: Dictionary = {
  locale: 'de',
  nav: {
    about: 'Über uns',
    program: 'Conscious AI',
    upskilling: 'Weiterbildung',
    services: 'Leistungen',
    work: 'Projekte',
    approach: 'Ansatz',
    pricing: 'Preise',
    contact: 'Kontakt',
    home: 'Start',
    cta: 'Sprechen wir',
    bookCall: 'Gespräch buchen',
    menuOpen: 'Menü öffnen',
    menuClose: 'Menü schließen',
    primary: 'Hauptnavigation',
    language: 'Sprache',
    community: 'Community',
  },
  hero: {
    title: 'Technologie, die Probleme löst.\nMit Gewissen gebaut.',
    accent: [4, 5, 6],
    lead: 'Bullah Labs ist ein Produkt- und Engineering-Studio.',
    body: 'Wir bauen digitale Produkte, auf die sich Menschen verlassen, und helfen Teams, Technologie, auch KI, mit Bedacht einzusetzen.',
    primary: 'Conscious AI entdecken',
    steps: [
      {
        kicker: 'Kostenlos · eigenes Tempo',
        title: 'Selbst lernen.',
        body: 'Ein kostenloser Kurs für Nicht-Entwickler. KI gut nutzen, in der eigenen Arbeit.',
        cta: 'Zum Kurs',
      },
      {
        kicker: 'Für Teams',
        title: 'Ihr Team schulen.',
        body: 'Praxisnahe Sessions rund um Ihre echten Abläufe. Vorher und nachher gemessen.',
        cta: 'Zum Team-Training',
      },
      {
        kicker: 'Das Studio',
        title: 'Uns bauen lassen.',
        body: 'KI-Optimierung und schlanke digitale Produkte. Passendes Modell, weniger Verschwendung.',
        cta: 'Zu den Services',
      },
    ],
    receipt: {
      header: 'Quittung · die Rechnung des Planeten',
      task: 'Vertragszusammenfassungen · ein Team · ein Jahr',
      payer: 'Zahlt: der Planet · Begleicht: Sie',
      usual: {
        label: 'Der übliche Weg',
        route: 'Großes Modell · voller Kontext',
        rows: [
          ['Tokens', '288.000.000'],
          ['Geld', '$ 4.320'],
          ['CO₂', '58 kg'],
        ],
      },
      conscious: {
        label: 'Conscious AI',
        route: 'KI nötig? · Schlankes Modell · Sie prüfen',
        rows: [
          ['Tokens', '9.600.000'],
          ['Geld', '$ 96'],
          ['CO₂', '1,9 kg'],
        ],
      },
      savedLabel: 'Gespart',
      saved: '98 %',
      stamp: ['Bessere', 'KI'],
    } satisfies ReceiptCopy,
    map: {
      lanes: {
        usual: 'Der übliche Weg',
        conscious: 'Conscious AI',
      },
      nodes: {
        largeModel: 'Großes Modell',
        fullContext: 'Voller Kontext',
        minimalContext: 'Minimaler Kontext',
        round: 'Runde',
        guide: 'Bullah Labs',
        guideNote: 'hier setzen wir an',
        decide: 'KI nötig?',
        tool: 'Schlankes\nModell',
        check: 'Sie prüfen',
      },
      saved: {
        label: 'Gespart',
        locale: 'de',
        currency: 'USD',
        tokens: 'Tokens',
        co2: 'kg CO₂',
      },
      scenarios: [
        {
          task: 'Vertragszusammenfassungen, ein Team, ein Jahr',
          ai: true,
          usual: { tokens: 288000000, cost: 4320, co2: 58 },
          lean: { tokens: 9600000, cost: 96, co2: 1.9 },
        },
      ],
    },
  },
  consciousAi: {
    kicker: 'Conscious AI',
    title: 'KI entwickelt sich schnell. Wo fangen Sie an?',
    accent: [4, 5, 6, 7],
    paragraphs: [
      'Jede Woche neue Werkzeuge. Druck, smarter zu arbeiten. Wenig Klarheit, welchen Werkzeugen man trauen kann, was man lernen soll oder ob man KI gut nutzt, und was das an Zeit, Geld und Energie kostet.',
      'KI gut zu nutzen ist eine Fähigkeit, kein Abo.',
      'Kurze, praktische Module zeigen Ihnen, wie Sie das richtige Werkzeug für die Aufgabe wählen, Ihren KI-Arbeitsplatz einrichten, Prompts schreiben, die beim ersten Mal sitzen, und KI weglassen, wo Sie sie nicht brauchen. Kein technischer Hintergrund nötig.',
    ],
    closingKicker: 'Kostenlose Ressourcen',
    closing:
      'Smarter mit KI arbeiten. Weniger verschwenden. Die Kontrolle behalten.',
    cta: 'Conscious AI entdecken',
    notifyNote:
      'Die kostenlosen Module entstehen gerade. Hinterlassen Sie Ihre E-Mail, und wir sagen Ihnen am Tag der Eröffnung Bescheid.',
    notify: 'Benachrichtigen',
  },
  community: {
    kicker: 'Teil unserer Community werden',
    mobileJoin: 'Community beitreten',
    dockOpen: 'Gespräch beginnen',
    closeMenu: 'Community-Menü schließen',
    title: 'Bessere KI-Entscheidungen entstehen gemeinsam.',
    description:
      'Tauschen Sie praktische Erfahrungen aus und stellen Sie menschliches Urteilsvermögen in Ihrer KI-Arbeit in den Mittelpunkt.',
    links: {
      reddit: {
        label: 'Reddit',
        description:
          'Diskutieren Sie praktische Fragen und lernen Sie von der breiteren Community.',
        cta: 'Zum Subreddit',
      },
      discord: {
        label: 'Discord',
        description:
          'Nehmen Sie an fokussierten Gesprächen, neuen Ressourcen und Community-Updates teil.',
        cta: 'Zum Server',
      },
    },
  },
  consciousTech: {
    kicker: 'Bewusste Technologie',
    title: 'Technologie ist nie nur Technologie.',
    accent: [2, 3, 4],
    paragraphs: [
      'Jedes Produkt prägt, wie Menschen arbeiten und entscheiden. Jedes System verbraucht Ressourcen. Jede technische Entscheidung hat eine Folge.',
      'Wir wägen diese Folgen ab der ersten Skizze ab: Kosten, Energie, Wartbarkeit und wen es betrifft.',
      'Bessere Technologie tut mehr, als zu funktionieren. Sie ist verständlich, bezahlbar im Betrieb und es wert, behalten zu werden.',
    ],
  },
  problem: {
    kicker: 'Das Problem',
    title: 'KI verändert die Arbeit.\nNiemand hat Ihnen gezeigt, wie.',
    accent: [6, 7, 8],
    impact: {
      label: 'Die Auswirkung',
      kicker: 'Was KI jenseits der Rechnung kostet',
      intro:
        'KI läuft in Rechenzentren: Gebäuden voller leistungsstarker Computer, die Strom und Kühlung brauchen. KI ist nicht ihre einzige Aufgabe, aber der am schnellsten wachsende Teil.',
      stats: [
        {
          value: '1,5 %',
          eyebrow: 'Fakt',
          label:
            '2025 verbrauchten Rechenzentren 1,5 % des weltweiten Stroms – und KI ist der am schnellsten wachsende Grund dafür.',
        },
        {
          value: '3 %',
          eyebrow: 'Achtung',
          label:
            'Bis 2030 könnten sie so viel Strom verbrauchen wie Japan heute. Mehr Bedarf setzt Stromnetze zusätzlich unter Druck.',
        },
        {
          value: '3×',
          eyebrow: 'Achtung',
          label:
            'Der Stromverbrauch von KI-Rechenzentren soll sich bis 2030 verdreifachen – das kann mehr Verschmutzung bedeuten, wo Strom noch aus fossilen Brennstoffen kommt.',
        },
      ],
      sourceLabel: 'Quelle: Internationale Energieagentur, 2026',
      sourceUrl:
        'https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary',
      water: {
        value: '1 Flasche',
        eyebrow: 'Wasserverbrauch',
        title: '10–50 Prompts.',
        body: 'Diese GPT-3-Schätzung ist kein fester Preis pro Prompt. Sie hängt von Modell, Antwortlänge, Wetter, Kühlung und Stromnetz ab.',
      },
      powerStats: [
        {
          value: '1 von 67',
          eyebrow: 'Stromverbrauch 2024',
          label: 'des weltweiten Stroms.',
        },
        {
          value: 'Mehr als Japan',
          eyebrow: 'Prognose für 2030',
          label: 'als Japans Stromverbrauch im Jahr.',
        },
        {
          value: 'Wie 65 Millionen Autos',
          eyebrow: 'CO₂ im Jahr 2035',
          label: 'die ein Jahr lang fahren.',
        },
      ],
    },
  },
  technologies: {
    kicker: 'Unser Werkzeugkasten',
    statement: 'Die richtige Technologie für die Aufgabe.',
    statementMuted:
      'Wir wählen verlässliche Werkzeuge, die zu Ihrem Produkt, Team und Budget passen. Der Stack unten ist ein Ausgangspunkt, kein starres Rezept.',
    stripLabel: 'Ausgewählte Werkzeuge',
    stackLabel: 'So setzen wir Technologie ein',
    layers: [
      {
        label: 'Websites und Web-Apps',
        note: 'Was Menschen im Browser öffnen. Schnell, barrierearm und einfach aktuell zu halten.',
      },
      {
        label: 'Mobile Apps',
        note: 'iOS und Android, nativ oder eine Codebasis für beide.',
      },
      {
        label: 'Logik und Daten',
        note: 'Wo Ihre Geschäftsregeln und Datensätze liegen. Konsistent, privat und sicher.',
      },
      {
        label: 'KI, mit Bedacht eingesetzt',
        note: 'Die Modelle, mit denen wir bauen, und die Assistenten, deren guten Einsatz wir vermitteln. Nur dort, wo sie wirklich helfen.',
      },
      {
        label: 'Automatisierung',
        note: 'Wiederkehrende Arbeit, die von selbst läuft, während ein Mensch prüft, was zählt.',
      },
      {
        label: 'Hosting und Betrieb',
        note: 'Wo es läuft, wie Updates live gehen und woran wir erkennen, dass alles gesund ist.',
      },
    ],
  },
  howItWorks: {
    kicker: 'So arbeiten wir',
    title: 'Klar denken. Bewusst bauen.',
    accent: [2, 3],
    description:
      'Vier Schritte, vom ersten Gespräch bis zum Produkt, das immer besser wird.',
    stepLabel: 'Schritt',
    cta: 'Projekt besprechen',
    steps: [
      {
        title: 'Das Problem verstehen',
        when: 'Verstehen',
        summary:
          'Wir lernen, was Menschen brauchen, was im Weg steht und wie Erfolg aussieht, bevor etwas gebaut wird.',
      },
      {
        title: 'Den richtigen Ansatz wählen',
        when: 'Entscheiden',
        summary:
          'Wir vergleichen Optionen nach Komplexität, Kosten, Ressourcenbedarf und Folgen und wählen die einfachste, die die Aufgabe erfüllt.',
      },
      {
        title: 'Bauen und lernen',
        when: 'Bauen',
        summary:
          'Wir liefern in kurzen Zyklen, testen mit echten Nutzern und passen Prioritäten an, während wir lernen.',
      },
      {
        title: 'Mit Absicht verbessern',
        when: 'Verbessern',
        summary:
          'Wir messen, was zählt, und verbessern dort weiter, wo Wert entsteht. Manchmal heißt das vereinfachen statt ergänzen.',
      },
    ],
  },
  testimonials: {
    kicker: 'Kundenstimmen',
    title: 'Gute Arbeit, in ihren Worten.',
    accent: [2, 3, 4],
    caseStudy: 'Projekt ansehen',
    pageTitle: 'Was Kunden sagen.',
    prev: 'Vorherige Stimme',
    next: 'Nächste Stimme',
  },
  work: {
    kicker: 'Ausgewählte Projekte',
    title: 'Echte Produkte, echte Ergebnisse.',
    description:
      'Produkte, die wir entworfen, gebaut oder verbessert haben, jeweils mit Problem, Arbeit und Ergebnis. Filtern Sie nach Art.',
    view: 'Fallstudie lesen',
    grid: {
      kicker: 'Unsere Arbeit',
      title: 'Projekte, die wir geliefert haben.',
      accent: [1, 2],
    },
    filterLabel: 'Projekte filtern',
    filterBy: 'Filtern nach',
    filters: {
      All: 'Alle',
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
    teaser: {
      kicker: 'Ausgewählte Projekte',
      title: 'Jedes Projekt soll einen Unterschied machen.',
      accent: [3, 4, 5],
      cta: 'Alle Projekte ansehen',
      servicesCta: 'Unsere Leistungen entdecken',
      listLabel: 'Ausgewählte Projekte',
      previous: 'Vorheriges Projekt',
      next: 'Nächstes Projekt',
      progress: 'Fortschritt der Projektrotation',
      featured: 'Ausgewählte Arbeit',
      more: '{n} weitere auf der Projektseite',
    },
    showcase: {
      kicker: 'Unsere Arbeit',
      title: 'Echte Produkte, so gebaut.',
      accent: [2, 3],
      description:
        'Drei Produkte, drei Arten, jeweils mit Problem, Arbeit und Ergebnis. Alle weiteren auf der Projektseite.',
      cta: 'Alle Projekte ansehen',
      more: '{n} weitere Fallstudien, filterbar nach Produktart.',
    },
  },
  services: {
    kicker: 'Leistungen',
    title: 'Von der ersten Idee zum Produkt, das bleibt.',
    accent: [5, 6, 7],
    description:
      'Sieben Wege, wie wir helfen, aus einer Hand: Produktdenken, solide Technik und ehrlicher Rat, wo sich Technologie, auch KI, lohnt und wo nicht.',
    promise: 'Gleich richtig bauen, oder reparieren, was schon da ist.',
    cta: 'Gespräch beginnen',
    teaser: {
      kicker: 'Unsere Leistungen',
      title: 'Sieben Wege, wie wir helfen.',
      accent: [3, 4, 5],
      description:
        'Jedes Projekt hier baute auf einer oder mehreren davon auf. Wählen Sie die passende, oder wir helfen bei der Wahl.',
      cta: 'Alle Leistungen ansehen',
    },
  },
  whoWeAre: {
    kicker: 'Wer wir sind',
    title: 'Ingenieure, die erst warum fragen, dann wie.',
    accent: [3, 4, 5, 6],
    paragraphs: [
      'Bullah Labs ist ein Produkt- und Engineering-Studio in Stuttgart und Islamabad. Wir verwandeln Ideen in digitale Produkte, auf die sich Menschen verlassen, und helfen Teams, Technologie, auch KI, mit Bedacht einzusetzen.',
      'Gute Technologie löst ein echtes Problem, braucht nicht mehr als nötig und lässt Menschen besser zurück. Das ist der Maßstab, nach dem wir bauen, und der, den wir vermitteln.',
    ],
    cta: 'Mehr über uns',
  },
  principles: {
    kicker: 'Technische Grundsätze',
    title: 'Bauen, was zählt. Weglassen, was nicht zählt.',
    accent: [3, 4, 5, 6],
    description:
      'Sieben Regeln hinter jeder technischen Entscheidung, die wir treffen.',
  },
  program: {
    watch: 'Ganzen Kurs ansehen',
    request: 'Schulung für ein Team',
    player: {
      courses: 'Kurse',
      course: 'Kurs',
      modules: 'Module',
      module: 'Modul',
      lesson: 'Lektion',
      lessons: 'Lektionen',
      watched: 'gesehen',
      watchedTag: 'Gesehen',
      minutes: 'Min.',
      comingSoon: 'Demnächst',
      nothingYet:
        'Diese Lektion wird gerade aufgenommen. Wir sagen Bescheid, sobald sie online ist.',
      listLabel: 'Kursmodule und Lektionen',
      search: 'Lektionen durchsuchen',
      clearSearch: 'Suche löschen',
      noResults: 'Keine Lektion passt',
      previous: 'Vorherige Lektion',
      next: 'Nächste Lektion',
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
      body: 'Die kostenlosen Module entstehen gerade. Hinterlassen Sie Ihre E-Mail, und wir sagen Ihnen am Tag der Eröffnung Bescheid.',
      email: 'E-Mail-Adresse',
      placeholder: 'Ihre E-Mail-Adresse',
      submit: 'Bescheid geben',
      consentBefore:
        'Mit der Anmeldung stimmen Sie zu, dass wir Ihre Adresse für diesen Hinweis speichern, wie in der',
      consentLink: 'Datenschutzerklärung',
      consentAfter: ' beschrieben.',
      doneTitle: 'Danke, Sie stehen auf der Warteliste.',
      alreadyTitle: 'Sie stehen bereits auf der Warteliste.',
      doneBody: 'Ihr Weg zu besseren KI-Gewohnheiten beginnt hier.',
      doneClose: 'Schließen',
      errorGeneric:
        'Etwas ist schiefgelaufen. Bitte versuchen Sie es gleich noch einmal.',
      errors: {
        emailRequired: 'Bitte geben Sie Ihre E-Mail-Adresse ein',
        emailInvalid: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
      },
      teamLink: 'Schulung für ein ganzes Team?',
    },
    popup: {
      pill: 'Gratis-Kurs',
      pillHint: 'Zur Warteliste',
      open: 'Karte zum kostenlosen Kurs öffnen',
      minimise: 'Verkleinern',
      tag: 'Gratis · Demnächst',
      kicker: 'Gratis-Kurs',
      title: 'KI zu Ihren Bedingungen nutzen.',
      body: 'Kurze Lektionen dazu, wann KI hilft, welches Werkzeug passt und was es wirklich kostet.',
      taughtBy: 'Unterrichtet von',
      cta: 'Zur Warteliste',
    },
  },
  programPage: {
    kicker: 'Conscious AI',
    title: 'KI mit Absicht nutzen.',
    accent: [1, 2],
    description:
      'Kostenlose, praktische Module, mit denen Sie mehr aus KI herausholen und dabei weniger davon brauchen. Für Menschen, die mit KI arbeiten, nicht für die, die sie bauen.',
    audience:
      'Für Menschen, die mit KI arbeiten, nicht für die, die sie bauen.',
    heroCta: 'Bescheid geben, wenn es öffnet',
    principle:
      'Praktische Fähigkeiten. Bewusste Entscheidungen. Kein Programmieren nötig.',
    course: {
      kicker: 'Zur Warteliste',
      title: 'Bessere KI-Gewohnheiten beginnen hier.',
      accent: [0, 1],
      preview: {
        instructorLabel: 'Ihr Dozent',
        alumnus: 'Alumnus',
        moreAbout: 'Mehr über {name}',
        title: 'KI bewusster nutzen und weniger verschwenden.',
        audience:
          'Für Menschen, die mit KI arbeiten, nicht für die, die sie bauen.',
        points: ['Kostenlos', 'Kein Programmieren', 'An echten Aufgaben'],
        waitlistCta: 'Zur Warteliste',
      },
    },
    problem: {
      kicker: 'Das Problem',
      title: 'Alle erwarten, dass Sie KI nutzen. Wenige zeigen, wie.',
      accent: [6, 7, 8],
      lines: [
        'Jede Woche neue Werkzeuge, mehr Druck, Schritt zu halten, und kein klarer Weg zu erkennen, was Ihre Zeit wert ist.',
        'Sie sollten nicht wählen müssen zwischen guter Arbeit und einem verantwortungsvollen Umgang mit KI.',
      ],
    },
    approach: {
      kicker: 'Unsere Antwort',
      title: 'Nicht mehr KI. Bessere KI.',
      accent: [3, 4],
      lines: [
        'KI nur nutzen, wo sie hilft. Das richtige Modell wählen. Klare Anweisungen geben und nur den Kontext, den sie braucht.',
        'Das Ergebnis prüfen. Die Kosten kennen. Das eigene Urteil im Spiel behalten.',
      ],
    },
    modules: {
      kicker: 'Lernen durch Tun',
      title: 'Sechs Gewohnheiten. Echte Arbeit.',
      accent: [2, 3],
      description:
        'Jedes Modul nimmt eine Aufgabe, die Sie ohnehin erledigen, und zeigt einen besseren Weg, sie mit KI zu lösen.',
      habits: [
        {
          title: 'Einmal einrichten.',
          body: 'Wiederverwendbare Anweisungen für Aufgaben, die sich wiederholen.',
        },
        {
          title: 'Klar prompten.',
          body: 'Bessere Ergebnisse, weniger Nachfragen.',
        },
        {
          title: 'Klug wählen.',
          body: 'Das Modell zur Aufgabe wählen, nicht zum Hype.',
        },
        {
          title: 'Kontext schlank halten.',
          body: 'Der KI geben, was sie braucht, nicht alles, was Sie haben.',
        },
        {
          title: 'Kritisch denken.',
          body: 'Ergebnisse prüfen. Wissen, wann KI gar nicht nötig ist.',
        },
        {
          title: 'Die Wirkung kennen.',
          body: 'Sehen, wie alltägliche Entscheidungen Zeit, Kosten, Energie und Wasser beeinflussen.',
        },
      ],
    },
    whoFor: {
      kicker: 'Für Nicht-Entwickler',
      title: 'Neugierig auf KI. Kein Programmieren nötig.',
      accent: [3, 4, 5],
      paragraphs: [
        'Marketing, Operations, Finanzen, HR, Vertrieb, Projektmanagement: Wenn KI auf Ihrem Schreibtisch gelandet ist, ist das hier für Sie. Fähigkeiten, die Sie noch am selben Tag einsetzen.',
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
      kicker: 'Für Teams',
      title: 'Helfen Sie Ihrem Team, KI gut zu nutzen.',
      accent: [4, 5, 6, 7],
      paragraphs: [
        'KI-Werkzeuge zu verteilen ist leicht. Sie gut zu nutzen, braucht Übung. Wir schulen Teams an ihren echten Abläufen, damit der Gewinn in der Arbeit sichtbar wird, nicht nur auf der Lizenzrechnung.',
      ],
      offers: [
        {
          title: 'Schulungen und Workshops',
          body: 'Praktische Sitzungen rund um die alltäglichen Aufgaben Ihres Teams.',
        },
        {
          title: 'Fähigkeiten und Abläufe',
          body: 'Nützliche Anwendungen finden, Prompts verbessern, Ergebnisse beurteilen.',
        },
        {
          title: 'Conscious-AI-Beratung',
          body: 'Werkzeugwahl, Kosten, Ressourcenverbrauch und verantwortungsvolle Einführung, verständlich erklärt.',
        },
        {
          title: 'KI-Optimierung',
          body: 'Unnötige Komplexität und Rechenleistung streichen, ohne Qualität oder Sicherheit zu verlieren.',
        },
      ],
      cta: 'Teamschulung besprechen',
    },
    vision: {
      kicker: 'Warum wir das tun',
      title: 'Technologie soll uns voranbringen, mit Bedacht.',
      accent: [4, 5],
      paragraphs: [
        'Fortschritt heißt, echte Probleme zu lösen, nicht mehr zu bauen um des Bauens willen.',
        'Wir glauben, dass Technologie erweitern sollte, was Menschen erreichen können, und dabei ihre Auswirkungen auf Menschen, Budgets und die Umwelt berücksichtigen muss. Das heißt, effiziente Lösungen zu wählen und nur die Rechenleistung einzusetzen, die eine Aufgabe braucht.',
      ],
    },
    comingSoon: {
      kicker: 'Etwas Neues entsteht',
      title: 'Bewusst lernen. In die Praxis bringen.',
      accent: [2, 3, 4, 5],
      body: 'Der kostenlose Kurs ist erst der Anfang. Wir bauen ein Produkt, das Conscious AI in den Arbeitsalltag bringt. Hinterlassen Sie Ihre E-Mail, und Sie erfahren von beidem.',
      cta: 'Auf dem Laufenden bleiben',
    },
  },
  contactForm: {
    name: 'Vollständiger Name',
    namePlaceholder: 'Erika Mustermann',
    email: 'Geschäftliche E-Mail',
    emailPlaceholder: 'erika@unternehmen.de',
    optional: 'optional',
    sections: {
      setup: {
        title: 'Ihre KI-Situation',
        body: 'Drei kurze Fragen, damit wir eine brauchbare Antwort vorbereiten können.',
      },
      reach: {
        title: 'Persönliche Angaben',
        body: 'Wohin die Antwort gehen soll. Ein Mensch antwortet.',
      },
    },
    tools: {
      label: 'Welches KI-Tool nutzt Ihr Team hauptsächlich?',
      options: {
        chatgpt: 'ChatGPT',
        claude: 'Claude',
        copilot: 'Copilot',
        gemini: 'Gemini',
        api: 'Eigenbau / API',
        other: 'Andere oder unsicher',
      },
    },
    teamSize: {
      label: 'Anzahl der Personen, die es nutzen',
      options: {
        '1-10': '1 bis 10',
        '11-50': '11 bis 50',
        '51-200': '51 bis 200',
        '200+': 'Mehr als 200',
      },
    },
    goals: {
      label: 'Was soll zuerst besser werden?',
      options: {
        cost: 'Monatliche Kosten',
        quality: 'Qualität der Ergebnisse',
        privacy: 'Daten und Datenschutz',
        adoption: 'Einführung und Tempo',
        carbon: 'Energie und CO₂',
      },
    },
    message: 'Noch etwas?',
    messagePlaceholder:
      'Ungefähre monatliche Ausgaben, ein Ablauf, der schmerzt, eine Frist.',
    submit: 'Anfrage senden',
    replyNote: 'Wir antworten {time}. Keine Newsletter, keine Kampagnen.',
    errorGeneric:
      'Etwas ist schiefgelaufen. Bitte versuchen Sie es gleich noch einmal.',
    errors: {
      tool: 'Wählen Sie Ihr wichtigstes Werkzeug',
      teamSize: 'Wählen Sie eine Teamgröße',
      goal: 'Wählen Sie, was zuerst besser werden soll',
      nameRequired: 'Ihr Name wird benötigt',
      nameShort: 'Bitte geben Sie Ihren vollständigen Namen ein',
      nameLong: 'Dieser Name ist etwas lang',
      emailRequired: 'E-Mail-Adresse wird benötigt',
      emailInvalid: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
      messageLong: 'Bitte bleiben Sie unter 4.000 Zeichen',
    },
    sentTitle: 'Vielen Dank.',
    sentBody:
      'Ihre Anfrage ist angekommen. Ein Mensch liest jede einzelne und antwortet {time}, direkt an die von Ihnen angegebene Adresse.',
    sentHome: 'Zur Startseite',
    sentAgain: 'Weitere Anfrage senden',
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
    learning: 'Die Erkenntnis',
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
    ctaTitle: 'Bauen Sie etwas Ähnliches?',
    ctaAccent: [2, 3],
    ctaBody:
      'Erzählen Sie uns, wo Sie stehen. Wir sagen klar, was wir als Nächstes tun würden, und ob wir das richtige Team dafür sind.',
  },
  aboutPage: {
    kicker: 'Über uns',
    title:
      'Wir bauen Technologie mit Absicht und glauben, dass Fortschritt Verantwortung bedeutet.',
    accent: [8, 9, 10],
    description:
      'Bullah Labs ist ein Produkt- und Engineering-Studio mit Büros in Stuttgart und Islamabad. Wir bauen digitale Produkte und helfen den Menschen, die Technologie, auch KI, nutzen, sie gut zu nutzen.',
    story: [
      'Zu viel Technologie wird gebaut, um zu beeindrucken, nicht um zu helfen. Wir stellen zuerst andere Fragen: Was soll dieses Produkt tun, was kostet es im Betrieb, und wen betrifft es?',
      'Das prägt alles, was wir ausliefern. Einfachere Systeme. Weniger bewegliche Teile. KI nur dort, wo sie sich lohnt. Produkte, die günstig zu halten und leicht zu übergeben sind.',
      'Es prägt auch, was wir vermitteln. Mit Conscious AI helfen wir Menschen und Teams, KI mit Sicherheit und weniger Verschwendung zu nutzen, denn die beste Technologieentscheidung ist meist die, die man versteht.',
    ],
    facts: [
      {
        label: 'Was wir tun',
        value:
          'Digitale Produkte, entworfen, gebaut und verbessert. Beratung zu Technologie und KI.',
      },
      {
        label: 'Für wen',
        value:
          'Start-ups und etablierte Unternehmen, die etwas Neues bauen, etwas Altes reparieren oder entscheiden, was als Nächstes kommt',
      },
      {
        label: 'Reichweite',
        value:
          'Kunden auf fünf Kontinenten. Zwei Büros: Stuttgart und Islamabad.',
      },
      {
        label: 'Seit',
        value: '2024, mit über 150 abgeschlossenen Projekten',
      },
    ],
    whereKicker: 'Wo wir sind',
    whereTitle: 'Zwei Büros, ein Arbeitstag.',
    whereAccent: [2, 3],
    whereDescription:
      'Ein europäisches Büro in Stuttgart und ein asiatisches in Islamabad. Schreiben Sie dem, das näher ist. Es antwortet dasselbe Team.',
  },
  legal: {
    kicker: 'Rechtliches',
    title: 'Die Formalitäten, verständlich formuliert.',
    accent: [2, 3],
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
    title: 'Sprechen wir über Ihr Projekt.',
    accent: [3, 4],
    description:
      'Buchen Sie ein Erstgespräch oder schreiben Sie uns. Ein Mensch antwortet innerhalb eines Werktags.',
    book: 'Ein Kennenlerngespräch buchen',
    choose: {
      formTab: 'Schreiben Sie uns',
      callTab: 'Gespräch buchen',
      callHint: 'Kurzes Erstgespräch',
    },
    home: {
      kicker: 'Kontakt',
      title: 'Ein Problem, das sich zu lösen lohnt?',
      accent: [4, 5, 6],
      description:
        'Erzählen Sie uns, was Sie bauen, was besser werden muss oder wo Technologie im Weg steht. Wir schlagen einen praktischen nächsten Schritt vor.',
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
    body: 'Erzählen Sie uns, was Sie bauen, was besser werden muss oder wo Technologie im Weg steht. Wir schlagen einen praktischen nächsten Schritt vor.',
    button: 'Erzählen Sie uns von Ihrem Projekt',
  },
  footer: {
    pitch:
      'Ein Produkt- und Engineering-Studio in Stuttgart und Islamabad. Wir bauen digitale Produkte, die bleiben, und bringen Menschen bei, KI gut zu nutzen.',
    program: 'Conscious AI',
    company: 'Unternehmen',
    offices: 'Standorte',
    community: 'Community',
    legal: 'Rechtliches',
    rights: 'Alle Rechte vorbehalten.',
    backToTop: 'Nach oben',
  },
  consciousAiPage: {
    hero: {
      kicker: 'Unsere Vision',
      title: 'Conscious AI',
      titleAccent: [1],
      tagline: 'Nicht mehr KI. Bessere KI.',
      taglineAccent: [3, 4],
      body: 'KI ist nicht gratis. Die Rechnung zahlt der Planet. Nutzen Sie KI dort, wo sie zählt, nicht fürs Token-Maxing.',
      cta: 'Termin mit uns buchen',
    },
    principles: {
      kicker: 'Das Problem, und die Lösung',
      title: 'Alle sagen: Nutzt KI. Niemand sagt wie.',
      accent: [2, 3],
      asideLead: 'Wir prompten in Panik.',
      asideAccent: 'Der Planet zahlt.',
      problemHead: 'Das Problem',
      fixHead: 'Die Lösung · Bessere KI in drei Schritten',
      problems: [
        [
          '01',
          'FOMO, jede Woche.',
          'Jeden Montag ein neues Modell. Jeden Dienstag Hausaufgaben.',
        ],
        [
          '02',
          'Schneller. Günstiger. Und Sie?',
          'Der Chef hat gerade KI entdeckt. Unangenehm.',
        ],
        [
          '03',
          'Heiß und durstig.',
          'Rechenzentren schlucken Strom und Wasser. Die Rechnung sehen Sie nie.',
        ],
      ],
      moves: [
        [
          '01',
          'Gezielt einsetzen',
          'Wenn eine Formel es kann, lassen Sie sie.',
        ],
        [
          '02',
          'Die richtige Größe wählen',
          'Kleineres Modell, kleinerer Fußabdruck.',
        ],
        ['03', 'Experte bleiben', 'KI entwirft. Sie entscheiden.'],
      ],
    },
    nextSteps: {
      kicker: 'Suchen Sie eine Lösung?',
      title: 'So lösen wir es.',
      accent: [],
      build: {
        kicker: 'Für Ihr Produkt',
        title: 'Mit uns etwas bauen',
        cta: 'Sehen, was wir bauen',
      },
    },
    numbers: {
      kicker: 'Die Zahlen',
      title:
        'Weniger Zeit verloren. Weniger Tokens verschwendet. Kleinere Rechnung, kleinerer Fußabdruck.',
      accent: [6, 7, 8, 9],
      source: 'Quelle: {name}',
      ownExample: 'Unser eigenes Rechenbeispiel.',
      note: 'Daten Dritter, nicht unsere Kundenergebnisse.',
      previous: 'Vorherige Zahl',
      next: 'Nächste Zahl',
      cards: [
        {
          topic: 'Training zahlt sich aus',
          figure: '14 Stunden',
          body: 'pro Woche gewinnen Mitarbeitende mit über 81 Stunden KI-Training im Jahr.',
          source: 'ey2025',
        },
        {
          topic: 'Training zahlt sich aus',
          figure: 'Bis zu 19-mal',
          body: 'eher sagen Geschulte, dass KI sie produktiver macht.',
          source: 'slack2024',
        },
        {
          topic: 'Was Schlamperei kostet',
          figure: 'Fast 40 %',
          body: 'der Zeit, die KI spart, geht fürs Ausbessern schlechter Ergebnisse drauf.',
          source: 'workday2026',
        },
        {
          topic: 'Was Schlamperei kostet',
          figure: '~2 Stunden',
          body: 'kostet jedes schlampige KI-Ergebnis, das ein Kollege weiterreicht.',
          source: 'betterup2025',
        },
        {
          topic: 'KPIs, die wir messen',
          figure: '7 KPIs',
          body: 'vorher und nachher: gesparte Stunden, KI-Kosten pro Aufgabe, Tokens, Wiederholungen, Lizenzen, Ergebnisqualität, KI-Kompetenz.',
        },
        {
          topic: 'KPIs, die wir messen · Beispiel',
          figure: '≈ 4.700 €',
          body: 'im Monat verliert ein 12-köpfiges Team durch Nacharbeit, bei 45 € pro Stunde.',
        },
        {
          topic: 'Klügeres Setup',
          figure: '90 %+',
          body: 'weniger Kosten für wiederholte Anweisungen, mit Prompt-Caching.',
          source: 'anthropic2026',
        },
        {
          topic: 'Klügeres Setup',
          figure: '85 %+',
          body: 'günstiger, wenn einfache Aufgaben an ein kleineres Modell gehen, bei 95 % der Qualität.',
          source: 'routellm2024',
        },
        {
          topic: 'Menschen, nicht Modelle',
          figure: '70 %',
          body: 'der KI-Probleme liegen an Menschen und Prozessen, nicht an Algorithmen.',
          source: 'bcg2024',
        },
        {
          topic: 'Menschen, nicht Modelle',
          figure: '12 %',
          body: 'der Mitarbeitenden bekommen genug KI-Training.',
          source: 'ey2025',
        },
        {
          topic: 'Verborgener Fußabdruck',
          figure: '2-mal',
          body: 'so viel Strom für Rechenzentren bis 2030. Mehr, als Japan heute verbraucht.',
          source: 'iea2025',
        },
        {
          topic: 'Verborgener Fußabdruck',
          figure: '4–6-mal Dänemark',
          body: 'so viel Wasser wird KI 2027 voraussichtlich entnehmen, gemessen am Jahresverbrauch Dänemarks.',
          source: 'ucr2025',
        },
        {
          topic: 'Verborgener Fußabdruck · die Lösung',
          figure: 'Bis zu 90 %',
          body: 'weniger Energie bei Routineaufgaben, mit kleinen Modellen und kürzeren Prompts.',
          source: 'unesco2025',
        },
      ],
      sources: {
        ey2025: 'EY Work Reimagined Survey, 2025',
        slack2024: 'Slack Workforce Index, 2024',
        workday2026: 'Workday, 2026',
        betterup2025: 'BetterUp & Stanford, 2025',
        anthropic2026: 'Anthropic-Preise, 2026',
        routellm2024: 'UC Berkeley, RouteLLM, 2024',
        bcg2024: 'BCG, 2024',
        iea2025: 'IEA, Energy and AI, 2025',
        ucr2025: 'Li et al., UC Riverside, 2025',
        unesco2025: 'UNESCO & UCL, 2025',
      },
    },
    aiProfile: {
      kicker: 'Ausprobieren · Live',
      title: 'Angst, dass KI Sie ersetzt?',
      accent: [3, 4],
      description: 'Fünf kurze Schritte, um es herauszufinden.',
      spoiler: {
        tag: 'Spoiler',
        lead: 'Sie sind',
        accent: 'schwerer zu ersetzen',
        tail: 'als Sie denken.',
      },
    },
    instructor: {
      kicker: 'Ihr Dozent',
      title: 'Unterrichtet von einem Lehrer der Lehrer.',
      accent: [5],
      alumnus: 'Alumnus',
      moreAbout: 'Mehr über {name}',
      portraitAlt: 'Porträt von {name}',
    },
    roots: {
      kicker: 'Unsere Wurzeln',
      title: 'Den Hype ignorieren. Seit dem 18. Jahrhundert.',
      accent: [3, 4, 5, 6],
      body: 'Bulleh Shah, der Sufi-Dichter aus dem Punjab, weigerte sich, der Masse zu folgen. Er hinterfragte, was alle nachsprachen, und wählte das Wesentliche statt der Mode. Mit KI tun wir dasselbe.',
      cta: 'Unsere DNA lesen',
      portraitAlt: 'Illustriertes Porträt von Bulleh Shah',
      name: 'Bulleh Shah',
      years: '1680–1757',
      translation:
        'Tausend Bücher hast du gelesen, doch dich selbst hast du nie gelesen.',
      values: [
        ['01', 'Die Masse hinterfragen.', 'Beliebt ist kein Beweis.'],
        ['02', 'Substanz statt Glanz.', 'Was zählt, schlägt, was neu ist.'],
        [
          '03',
          'Schwere Probleme zuerst.',
          'Technik für das, was wirklich repariert werden muss.',
        ],
      ],
    },
    faq: {
      kicker: 'FAQ',
      title: 'Fragen Sie. Ganz ohne Prompt-Engineering.',
      accent: [2, 3, 4],
      description:
        'Noch unsicher? Fragen Sie einen echten Menschen in der Community unten.',
      items: [
        {
          question: 'Ist das eine Anti-KI-Sache?',
          answer:
            'Nein. Wir nutzen KI jeden Tag und bauen damit. Conscious AI heißt, sie gezielt einzusetzen: das richtige Werkzeug für die Aufgabe, nur der Kontext, den sie braucht, und ein Mensch, der das Ergebnis prüft. Das ergibt bessere Arbeit für weniger Geld und Energie.',
        },
        {
          question: 'Wird KI mich ersetzen?',
          answer:
            'KI ersetzt Aufgaben viel schneller als Menschen. Gefährdet ist, wer einen Prompt einfügt und allem vertraut, was zurückkommt. Lernen Sie, wann KI hilft, welches Werkzeug passt und wie Sie das Ergebnis prüfen, und Sie werden zu der Person, auf die sich Ihr Team verlässt.',
        },
        {
          question: 'Kann ein einzelner Prompt wirklich dem Planeten schaden?',
          answer:
            'Ein einzelner Prompt kostet sehr wenig. Das Problem sind Masse und Gewohnheit: Milliarden Prompts am Tag, oft an das größte Modell und mit weit mehr Kontext, als die Aufgabe braucht. Ein kleineres Modell, ein knapperer Prompt oder gar keine KI, wo eine Suche reicht, senkt diesen Fußabdruck um ein Vielfaches.',
        },
        {
          question: 'Muss ich technisch sein?',
          answer:
            'Nein. Das ist für Menschen in Marketing, HR, Finanzen, Operations, Vertrieb und Lehre gemacht, nicht für Entwickler. Alles wird an alltäglicher Arbeit gezeigt: E-Mails, Zusammenfassungen, Tabellen, Recherche und Planung.',
        },
        {
          question: 'Was kostet das?',
          answer:
            'Das KI-Profil, der Kurs und die Community sind kostenlos. Für Teams werden Workshops, Leitlinien und Audits auf Ihr Team zugeschnitten und pro Auftrag berechnet. Buchen Sie einen Termin, und wir sagen Ihnen, was passt, bevor etwas beginnt.',
        },
      ],
    },
    closing: {
      kicker: 'Conscious AI',
      title: 'Weniger FOMO. Weniger Watt.',
      accent: [2, 3],
      body: 'Bringen Sie eine Frage, einen Ablauf oder eine Sorge mit. Ein echter Mensch antwortet, innerhalb eines Werktags.',
      cta: 'Termin mit uns buchen',
    },
  },
  offers: {
    teams: {
      kicker: 'Für Teams & Unternehmen',
      title: 'Ihr Team soll KI gut nutzen',
      cta: 'So arbeiten wir mit Teams',
      rows: [
        ['01', 'Workshops', 'KI-Sicherheit, an Ihren echten Aufgaben.'],
        ['02', 'Leitlinien', 'Ein Regelwerk für Werkzeuge, Kosten und CO₂.'],
        [
          '03',
          'Audits',
          'Die Verschwendung in einem Ablauf finden. Und streichen.',
        ],
      ],
    },
    build: [
      [
        '01',
        'Produktentwicklung',
        'Von der groben Idee zum zahlenden Produkt.',
      ],
      ['02', 'Engineering', 'Web, Mobile, Backend. Gebaut, um zu halten.'],
      [
        '03',
        'KI-Automatisierung & Integrationen',
        'Die langweilige Arbeit, automatisiert.',
      ],
    ],
  },
  consciousAiHome: {
    kicker: 'So lösen wir es mit KI',
    title: 'KI gut zu nutzen ist eine Fähigkeit. Kein Abo.',
    accent: [7, 8],
    course: {
      kicker: 'Kostenloser Kurs · bald verfügbar',
      title: 'KI lernen, die hilft.',
      body: 'Das richtige Werkzeug wählen, gut nutzen und KI weglassen, wenn Einfacheres reicht.',
      submit: 'Auf die Warteliste',
      portraitAlt: 'Porträt von {name}',
    },
    rail: {
      kicker: 'Conscious AI',
      title: 'Entdecken Sie das Conscious-AI-Programm.',
    },
  },
  ourDna: {
    kicker: 'Unsere DNA',
    title: 'Unsere Werte sind 300 Jahre alt. Noch immer in Produktion.',
    accent: [6, 7, 8, 9],
    portraitAlt: 'Illustriertes Porträt von Bulleh Shah',
    origin:
      'Bullah Labs ist nach Bulleh Shah benannt — einem Sufi-Dichter aus dem Punjab, der Liebe über Dogma stellte, Heuchelei anprangerte und zu den einfachen Menschen stand.',
    verse: {
      name: 'Bulleh Shah',
      place: 'Kasur, Punjab',
      translation: '„Bulleh, was weiß ich schon, wer ich bin?“',
      note: 'Eine Weigerung, sich von Religion, Kaste oder den Erwartungen anderer einsperren zu lassen.',
    },
    meaning: {
      kicker: 'Was das für uns heißt',
      title: 'Fortschritt, der menschlich bleibt.',
      body: 'Das heißt: nützliche Technologie, mehr Möglichkeiten für Menschen, weniger unnötige Kosten und Belastung und menschliches Urteil dort, wo es zählt.',
    },
    office: {
      open: 'Bürozeiten',
      closed: 'Außerhalb der Bürozeiten',
      localTime: 'Ortszeit in {city}: {time}',
    },
  },
  teamsPage: {
    breadcrumb: 'Für Teams',
    hero: {
      kicker: 'Conscious AI für Teams',
      title: 'Ihr Team nutzt KI. Zahlt es sich aus?',
      accent: [4, 5, 6, 7],
      body: 'Wir streichen verschwendete Rechenleistung aus Ihrer KI. Von der Rechnung. Vom Fußabdruck. Nie von der Qualität.',
      cta: 'Ihren Ablauf durchsprechen',
    },
    familiar: {
      kicker: 'Kommt Ihnen bekannt vor?',
      title: 'KI überall. Ein Plan nirgends.',
      accent: [2, 3],
      items: [
        [
          'KI überall.',
          'Das halbe Team fragt sich leise, ob es als Nächstes dran ist.',
        ],
        ['Welches Modell wofür?', 'Schulterzucken überall.'],
        ['Die KI-Rechnung wächst.', 'Die Ergebnisse eher nicht.'],
        ['Ihr Nachhaltigkeitsbericht', 'hat ein Loch in KI-Form.'],
      ],
    },
    how: {
      kicker: 'So arbeiten wir',
      title: 'Ein Ablauf nach dem anderen.',
      accent: [2, 3, 4],
      steps: [
        ['01', 'Audit', 'Abbilden. Messen. Fußabdruck inklusive.'],
        ['02', 'Plan', 'Lösungen nach Wirkung und Risiko ordnen.'],
        ['03', 'Beheben & schulen', 'Große Gewinne zuerst. Qualität geprüft.'],
        ['04', 'Wiederholen', 'Der nächste Ablauf, bitte.'],
      ],
    },
    offers: {
      kicker: 'Jede Größe',
      title: 'Wählen Sie Ihren Einstieg.',
      accent: [2, 3],
      items: [
        [
          'Erste Schritte',
          'Workshops',
          'KI-Angst wird zu Sicherheit, an Ihren echten Aufgaben. Welches Werkzeug wann, und wie man es prüft.',
          'Workshop buchen',
        ],
        [
          'Erste Schritte',
          'Leitlinien',
          'Gemeinsame Regeln für Werkzeuge, Daten, Kosten und CO₂. Damit KI-Nutzung endlich eine Anleitung hat.',
          'Nach Leitlinien fragen',
        ],
        [
          'Für Fortgeschrittene',
          'Audit & Optimierung',
          'KI, die zu Ihrem Ablauf passt. Wir bilden den Ablauf ab, finden verschwendete Rechenleistung und streichen sie. Vorher und nachher gemessen.',
          'Audit starten',
        ],
      ],
    },
    waste: {
      kicker: 'Was ein Audit findet',
      title: 'Verschwendung, die wir jagen.',
      accent: [2, 3],
      body: 'Prompts, Modelle, Retrieval, Werkzeuge, Schritte. Dazu Kosten, Tempo und geschätzte Energie.',
      items: [
        ['Ein Lkw, der einen Brief ausliefert', 'Überdimensioniertes Modell'],
        ['Ein Aktenschrank in jedem Meeting', 'Zu viel Kontext'],
        ['Die ganze Karte bestellen für ein Gericht', 'Übereifriges Retrieval'],
        [
          'Ein Romanautor, der einen Kassenbon zusammenrechnet',
          'KI für simple Aufgaben',
        ],
        ['Nach der Ankunft noch um den Block kreisen', 'Überflüssige Schritte'],
      ],
    },
    changes: {
      kicker: 'Was sich ändert',
      title: 'Nützliche KI, mit einem Plan dahinter.',
      accent: [2, 3, 4, 5],
      body: 'Sie gehen mit Entscheidungen, die Ihr Team morgen nutzen kann, nicht mit einem weiteren Dashboard, das gepflegt werden will.',
      items: [
        [
          'Eine gemeinsame Arbeitsweise',
          'Klare Entscheidungen zu Werkzeugen, Prompting, Prüfung der Arbeit und dazu, wann KI nicht zum Einsatz kommt.',
        ],
        [
          'Ein kleinerer, klügerer Stack',
          'Die Modelle und Schritte, die ihren Platz verdienen, und der teure Ballast, der es nicht tut.',
        ],
        [
          'Ein schriftlicher Plan für die nächsten Schritte',
          'Priorisierte Verbesserungen, Verantwortliche und ein realistischer Weg, das Ergebnis zu messen.',
        ],
      ],
      privacy:
        'Wir nutzen nur den minimalen Zugang, der nötig ist, um einen Ablauf zu verstehen. Ihre Daten bleiben Ihre Sache.',
      closing: {
        lead: 'Bringen Sie einen Ablauf mit.',
        accent: 'Wir bringen die Schere.',
        body: 'Beginnen Sie mit einem ehrlichen Gespräch. Wir sagen Ihnen, ob ein Workshop, Leitlinien oder ein Audit der richtige nächste Schritt ist.',
      },
    },
  },
  upskillingPage: {
    breadcrumb: 'Weiterbildung',
    hero: {
      kicker: 'KI-Weiterbildung',
      title: 'Ihre KI-Rechnung wächst. Die Leistung Ihres Teams nicht.',
      accent: [3, 4, 5, 6, 7],
      body: 'Machen Sie aus KI-Ausgaben nützliche Arbeit.',
      primaryCta: 'Team weiterbilden',
      secondaryCta: 'Kostenloser Workflow-Audit',
    },
    familiar: {
      kicker: 'Kommt Ihnen bekannt vor?',
      items: [
        'Die KI-Rechnung steigt und steigt.',
        'Was darf sicher geteilt werden?',
        'KI macht mehr Arbeit, als sie spart.',
      ],
    },
    trainings: {
      kicker: 'Conscious AI Trainings',
      title: 'Von Ihrem Team wird KI erwartet. Gezeigt hat es ihm niemand.',
      accent: [6, 7, 8, 9, 10],
      lead: 'Praxisnahes Training an den echten Aufgaben Ihres Teams.',
      points: [
        'Für Marketing, HR, Finanzen, Operations, Recht und Compliance',
        'Weniger Raten, niedrigere KI-Kosten',
        'Mehr geschafft, bessere Ergebnisse',
      ],
      cta: 'Team KI-kompetent machen',
      how: "So funktioniert's",
      benefits: [
        [
          'Mehr schaffen',
          'Schneller entwerfen. Menschen behalten die Kontrolle.',
        ],
        ['Weniger für KI ausgeben', 'Das richtige Tool für jede Aufgabe.'],
        ['Compliant bleiben', 'Klare Regeln für Tools und Daten.'],
        [
          'Ihre Branche anführen',
          'Das Tempo mit einem sicheren Team bestimmen.',
        ],
      ],
    },
    learns: {
      kicker: 'Ihr Team lernt',
      step: 'Schritt',
      repeat: 'Wiederholen',
      steps: [
        ['Erst fragen', 'KI nur einsetzen, wenn sie hilft'],
        ['Das richtige Tool wählen', 'Das einfachste passende Tool wählen'],
        ['Prüfen und verbessern', 'Ergebnisse prüfen, bevor sie rausgehen'],
      ],
    },
    planet: {
      kicker: 'Profit und Planet',
      title: 'Weniger Verschwendung. Kleinerer Fußabdruck.',
      accent: [2, 3],
      body: 'Weniger Verschwendung bedeutet weniger:',
      chips: ['Energie', 'Kühlwasser', 'CO₂'],
    },
    security: {
      kicker: 'Datensicherheit · Compliance',
      title: 'Firmendaten bleiben drin.',
      accent: [2, 3],
      body: 'Klare Regeln schützen Ihre Unternehmensdaten.',
      items: [
        'Was nie in öffentliche KI gehört',
        'Welche Tools Ihr Team nutzen kann',
        'Einfache Regeln für alle',
      ],
      note: 'Auf Ihre bestehenden Richtlinien abgestimmt.',
    },
    bill: {
      kicker: 'Conscious AI · Für Teams',
      title: 'Die KI-Rechnung Ihres Teams, aufgeschlüsselt.',
      accent: [4],
      body: 'Wir finden Verschwendung. Ihr Team behebt sie.',
      steps: [
        'Kostenloser Workflow-Audit',
        'Praxisnahes Training',
        'Zahlen vorher und nachher',
      ],
      primaryCta: 'Team KI-kompetent machen',
      receipt: {
        title: 'Beleg',
        payer: 'Bezahlt von: Ihrem Budget und dem Planeten',
        caption:
          'Beispielhafte KI-Kosten eines Teams, vor und nach dem Training',
        item: 'Posten',
        before: 'Vorher',
        after: 'Nachher',
        rows: [
          ['Größtes Modell für jede Aufgabe', '€€€', '€'],
          ['Schlampige KI-Arbeit nachbessern', '€€€', '€'],
          ['Ungenutzte Lizenzen', '€€', '€0'],
        ],
        totalLabel: 'Summe',
        total: 'Kleiner. Auf beiden Rechnungen.',
        stamp: ['Nicht mehr,', 'bessere KI'],
        note: 'Beispielhaft. Ihre echten Zahlen liefert der kostenlose Audit.',
      },
    },
    pricing: {
      kicker: 'Kostenloser Audit · Preise',
      title: 'Klare Preise. Keine Überraschungen.',
      accent: [2, 3],
      aside: 'Pro Team, nicht pro Platz. Kein Taxameter.',
      recommended: 'Empfohlen',
      from: 'Ab',
      note: 'Preise zzgl. MwSt. Remote oder vor Ort im Raum Stuttgart.',
      audit: {
        kicker: 'Kostenloser Audit',
        price: 'KOSTENLOS',
        title: 'Wohin fließt Ihr KI-Budget? Finden Sie es kostenlos heraus.',
        accent: [4, 5, 6, 7, 8],
        body: 'Ein Workflow, kostenlos geprüft. Ohne Haken.',
        items: [
          'Wohin das Geld fließt',
          'Was ein Skript oder kleineres Modell leisten kann',
          'Wie KI-kompetent Ihr Team ist',
          'Eine Maßnahmenliste, nach Einsparung sortiert',
        ],
        cta: 'Kostenloser Workflow-Audit',
      },
      plans: [
        {
          name: 'Workshop',
          from: false,
          price: '1.490 €',
          lead: 'Ein Team, ein halber Tag.',
          items: [
            'Bis zu 12 Personen',
            'Aufgebaut auf Ihren echten Aufgaben',
            'KI-Playbook fürs Team',
          ],
          cta: 'Workshop buchen',
          recommended: false,
        },
        {
          name: 'Teamprogramm',
          from: false,
          price: '4.900 €',
          lead: 'Das Team schulen. Einen Workflow verbessern.',
          items: [
            'Ganzer Tag, bis zu 12 Personen',
            'Ein Workflow verbessert',
            'Eine gemeinsame Prompt-Bibliothek fürs Team',
            'E-Mail-Support für 30 Tage',
            'Follow-ups und Zahlen vorher und nachher',
          ],
          cta: 'Programm starten',
          recommended: true,
        },
        {
          name: 'Unternehmensweit',
          from: true,
          price: '12.900 €',
          lead: 'Mehrere Teams, eine Arbeitsweise.',
          items: [
            'Bis zu vier Teams',
            'Eine Session für Führungskräfte',
            'Eine KI-Ansprechperson in jedem Team',
            'KI-Richtlinie, Datenregeln und freigegebene Tools',
            'Ein Check von Lizenzen und KI-Ausgaben',
            'Bis zu drei Workflows verbessert',
            'Drei Monate Check-ins und Berichte',
          ],
          cta: 'Rollout planen',
          recommended: false,
        },
      ],
    },
    testimonials: {
      title: 'Was Kunden sagen.',
    },
    course: {
      kicker: 'Kostenloser Kurs',
      title:
        'Noch nicht bereit zu buchen? Starten Sie mit einem kostenlosen Kurs im eigenen Tempo.',
      accent: [5, 6, 7, 8, 9, 10, 11, 12, 13],
      body: 'Kurze Videos zur KI-Kompetenz: KI gut nutzen, weniger verschwenden und Daten schützen.',
      label: 'Geschäftliche E-Mail',
      submit: 'Kurs kostenlos erhalten',
      note: 'Kostenlos, für immer. Nur Ihre E-Mail.',
    },
    services: {
      kicker: 'Leistungen',
      lead: 'Sie brauchen Software, kein Training?',
      accent: 'Das machen wir auch.',
      cta: 'Unsere Leistungen',
    },
    faq: {
      kicker: 'FAQ',
      title: 'Faire Fragen. Klare Antworten.',
      accent: [2, 3],
      items: [
        {
          question: 'Wir wissen nicht, wo wir anfangen sollen. Ist das okay?',
          answer:
            'Das ist normal. Wir starten mit den echten Aufgaben Ihres Teams. Kein technisches Vorwissen nötig.',
        },
        {
          question: 'Wie wählen wir das richtige KI-Tool?',
          answer:
            'Das ist der Kern des Trainings: wann Sie keine KI brauchen, ein einfaches Skript, ein kleines Modell oder ein großes. Wir arbeiten mit den Tools, die Sie schon haben, von jedem Anbieter.',
        },
        {
          question: 'Wird KI unsere Leute ersetzen?',
          answer:
            'Wir schulen Menschen darin, KI mit Urteilsvermögen zu nutzen, nicht ihre Arbeit abzugeben. Die Entscheidungen bleiben bei ihnen.',
        },
        {
          question: 'Können wir KI-Tools unsere Daten anvertrauen?',
          answer:
            'Für keinen Anbieter können wir bürgen. Wir zeigen, was nie in öffentliche Tools gehört und welche Einstellungen Sie aktivieren sollten. Im Audit fragen wir nur nach dem Nötigen, wo möglich anonymisiert.',
        },
        {
          question: 'Was passiert im kostenlosen Audit?',
          answer:
            'Sie wählen einen Workflow. Wir prüfen Nutzung, Lizenzen und Ergebnisse und schicken eine Maßnahmenliste, nach Einsparung sortiert. Kostenlos, ohne Haken.',
        },
      ],
    },
    closing: {
      kicker: 'Sprechen wir',
      title:
        'Zahlen Sie nicht zu viel für KI. Starten Sie mit einem kostenlosen Audit.',
      accent: [7, 8, 9, 10, 11, 12],
      body: 'Ein Workflow, ein Gespräch, eine klare Maßnahmenliste.',
      primaryCta: 'Kostenloser Workflow-Audit',
      secondaryCta: 'Team weiterbilden',
    },
  },
  snapshot: {
    errors: {
      role: 'Wählen Sie das Feld, das Ihrer Arbeit am nächsten kommt.',
      option: 'Wählen Sie die Antwort, die am ehesten passt.',
      email: 'Geben Sie eine gültige E-Mail-Adresse ein.',
      emailSave:
        'Ihre E-Mail konnte nicht gespeichert werden. Bitte erneut versuchen.',
    },
    questions: [
      {
        rail: 'Ihr Job',
        title: 'Welche Rolle kommt Ihrer am nächsten?',
        options: [
          { value: 'operations', label: 'Operations & Verwaltung' },
          { value: 'sales', label: 'Vertrieb & Support' },
          { value: 'marketing', label: 'Marketing & Content' },
          { value: 'hr', label: 'HR & Recruiting' },
          { value: 'education', label: 'Studierende oder Lehrkraft' },
          { value: 'technical', label: 'Entwickler oder Technik' },
          { value: 'research', label: 'Forschung & Analyse' },
          { value: 'freelance', label: 'Freelancer oder Kleinunternehmen' },
          { value: 'developer', label: 'Softwareentwickler oder Engineer' },
          { value: 'data', label: 'Daten- oder KI-Spezialist' },
          { value: 'designer', label: 'Designer oder UX-Researcher' },
          { value: 'project_manager', label: 'Projekt- oder Programmmanager' },
          {
            value: 'customer_success',
            label: 'Customer Success oder Account Manager',
          },
          { value: 'recruiter', label: 'Recruiter oder Talent-Spezialist' },
          { value: 'accountant', label: 'Buchhalter oder Steuerfachkraft' },
          { value: 'writer', label: 'Autor, Redakteur oder Texter' },
          { value: 'manager', label: 'Manager, Direktor oder Führungskraft' },
          { value: 'analyst', label: 'Business- oder Datenanalyst' },
          { value: 'product', label: 'Produkt & Design' },
          { value: 'finance', label: 'Finanzen & Buchhaltung' },
          { value: 'legal', label: 'Recht & Compliance' },
          { value: 'healthcare', label: 'Gesundheit & Pflege' },
          { value: 'consulting', label: 'Beratung & Kundenservice' },
          { value: 'logistics', label: 'Logistik & Lieferkette' },
          { value: 'hospitality', label: 'Gastgewerbe & Events' },
          { value: 'nonprofit', label: 'Gemeinnützig & Community' },
          { value: 'government', label: 'Öffentlicher Dienst' },
          { value: 'founder', label: 'Gründer & Führung' },
          { value: 'creator', label: 'Kreativ & Medien' },
          { value: 'other', label: 'Etwas anderes' },
        ],
      },
      {
        rail: 'Wie oft',
        title: 'Wie oft taucht KI in Ihrer Arbeit auf?',
        options: [
          { value: 'rarely', label: 'Selten', detail: 'Nur hin und wieder' },
          {
            value: 'weekly',
            label: 'Ein paar Mal pro Woche',
            detail: 'Nützlich bei Bedarf',
          },
          {
            value: 'daily',
            label: 'An den meisten Tagen',
            detail: 'Teil meines Ablaufs',
          },
          {
            value: 'constant',
            label: 'Den ganzen Tag über',
            detail: 'Immer griffbereit',
          },
        ],
      },
      {
        rail: 'Wie nützlich',
        title:
          'Wie oft liefert KI Ihnen eine brauchbare Antwort ohne viel Nacharbeit?',
        options: [
          { value: '1', label: 'Selten' },
          { value: '2', label: 'Manchmal' },
          { value: '3', label: 'Oft' },
          { value: '4', label: 'Meistens' },
          { value: '5', label: 'Fast immer' },
        ],
      },
      {
        rail: 'Wie leicht',
        title: 'Wie reibungslos läuft der Ablauf, wenn Sie KI nutzen?',
        options: [
          {
            value: '1',
            label: 'Ich erkläre ständig neu',
            detail:
              'Derselbe Kontext muss wieder eingefügt oder erklärt werden.',
          },
          {
            value: '2',
            label: 'Ich fange oft von vorn an',
            detail: 'Nützliche Arbeit geht über mehrere Anläufe verloren.',
          },
          {
            value: '3',
            label: 'Meist ein klarer Durchgang',
            detail:
              'Ich komme meist ohne viel Wiederholung zu einem brauchbaren Ergebnis.',
          },
          {
            value: '4',
            label: 'Mein Kontext bleibt erhalten',
            detail:
              'Der Ablauf fühlt sich klar, verbunden und leicht fortsetzbar an.',
          },
        ],
      },
      {
        rail: 'Was Sie brauchen',
        title: 'Was würde KI für Sie nützlicher machen?',
        options: [
          {
            value: 'output',
            label: 'Bessere Ergebnisse',
            detail: 'Klarere, nützlichere erste Entwürfe',
          },
          {
            value: 'choice',
            label: 'Klarere Entscheidungen',
            detail: 'Wissen, wann KI das richtige Werkzeug ist',
          },
          {
            value: 'system',
            label: 'Ein wiederholbares System',
            detail: 'Weniger Reibung, jede Woche',
          },
          {
            value: 'team',
            label: 'Ein stärkerer Team-Ansatz',
            detail: 'Mehr Konsistenz in der Arbeit',
          },
        ],
      },
    ],
    rail: {
      brand: 'Conscious AI',
      title: 'KI besser nutzen.',
      body: 'Beantworten Sie ein paar Fragen dazu, wie Sie KI bei der Arbeit nutzen.',
      answers: 'Ihre Antworten',
    },
    mobile: {
      progress: 'Ihr Fortschritt',
      step: 'Schritt {n} von {total}',
    },
    gate: {
      kicker: 'Ihre Ergebnisse sind bereit',
      title: 'E-Mail hinzufügen.',
      body: 'Wir bereiten Ihre Ergebnisse vor und schicken das Kurs-Update ebenfalls dorthin.',
      email: 'E-Mail-Adresse',
      placeholder: 'Ihre E-Mail-Adresse',
      preparing: 'Wird vorbereitet...',
      submit: 'Ergebnisse anzeigen',
      restart: 'Von vorn beginnen',
    },
    result: {
      preparing: 'Ihre Ergebnisse werden vorbereitet.',
      confidence: 'Sicherheit',
      efficiency: 'Effizienz',
      confidenceHigh: 'Sie kommen meist zu brauchbaren Antworten.',
      confidenceLow: 'Klarerer Kontext wird Ihre Ergebnisse verbessern.',
      efficiencyHigh: 'Ihr Ablauf ist schon recht schlank.',
      efficiencyLow:
        'Ein wiederverwendbares Setup kann zusätzliche Runden sparen.',
      headings: {
        both: 'KI hilft bereits.',
        confidence: 'Sie bekommen brauchbare Antworten.',
        workflow: 'KI fügt sich reibungslos in Ihre Arbeit ein.',
        neither: 'KI kann besser für Sie arbeiten.',
      },
      helpTitle: 'Brauchen Sie Hilfe, KI zum Laufen zu bringen?',
      helpCta: 'Mit uns arbeiten',
      courseTitle: 'Kostenloser Kurs startet bald.',
      courseCta: 'Zum Kurs',
      community: 'Der Community beitreten',
      restart: 'Von vorn beginnen',
    },
    intro: {
      title: 'Machen Sie den Test.',
      kicker: 'Ein kurzer Realitätscheck',
      heading: 'Nutzen Sie KI gut, oder einfach nur mehr davon?',
      body: 'Beantworten Sie fünf kurze Fragen und nehmen Sie einen nützlichen nächsten Schritt für Ihre echte Arbeit mit.',
      cta: 'Test starten',
      score: 'Ihr Ergebnis',
      waiting: 'wartet auf Sie',
      bars: ['Sicherheit', 'Ablauf', 'Urteil'],
    },
    form: {
      badge: 'KI-Profil',
      option: 'Option {n}',
      yourRole: 'Ihre Rolle',
      change: 'Ändern',
      moreRoles: 'Mehr Rollen, bitte ({n} weitere)',
      findRole: 'Finden Sie Ihre Rolle.',
      findRoleBody:
        'Wählen Sie die beste Entsprechung. Das macht nur die nächsten Fragen nützlicher.',
      searchPlaceholder: 'Rollen suchen...',
      noMatch: 'Noch nichts gefunden. Versuchen Sie ein allgemeineres Wort.',
      back: 'Zurück',
      next: 'Weiter',
      finish: 'Mein Profil ansehen',
    },
  },
  studio: {
    title: 'Was würde die Arbeit besser machen?',
    accent: [],
    description:
      'Wir bringen gute Ideen voran, entwirren festgefahrene Produkte und machen KI nützlich.',
    services: [
      {
        title: 'Bauen',
        body: 'Von der Idee zum Launch: digitale Produkte, gebaut, um zu halten.',
        typical: 'Neues Produkt · MVP · Plattform',
        cta: 'Produkt bauen',
      },
      {
        title: 'Reparieren',
        body: 'Einfachere, robustere Software mit weniger Verschwendung.',
        typical: 'Neubau · Rettung · Integration',
        cta: 'Produkt verbessern',
      },
      {
        title: 'KI optimieren',
        body: 'Klügere KI-Systeme. Geringere Kosten. Bessere Ergebnisse.',
        typical: 'KI-Audit · Workflow-Design · Team-Training',
        cta: 'KI optimieren',
      },
    ],
    wantTitle: 'Unsere Leistungen gefragt?',
    wantCta: 'Zu den Leistungen',
    learning: {
      kicker: 'Mit uns lernen',
      title:
        'Starten Sie mit dem kostenlosen Kurs. Bauen Sie bessere KI-Gewohnheiten auf.',
    },
  },
  locationsHome: {
    kicker: 'Wo wir sind',
    title: 'Zwei Büros. Ein Team.',
    cta: 'Projekt starten',
    stats: [
      ['150+', 'Projekte geliefert'],
      ['40+', 'Kunden betreut'],
      ['5', 'Kontinente erreicht'],
    ],
  },
};
