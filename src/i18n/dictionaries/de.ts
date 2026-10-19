import type { Dictionary } from './en';

/** German copy. Structure mirrors `en` exactly. */
export const de: Dictionary = {
  locale: 'de',
  nav: {
    about: 'Über uns',
    program: 'Conscious AI',
    services: 'Leistungen',
    work: 'Projekte',
    approach: 'Ansatz',
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
    badge: 'Digitale Produkte & Conscious AI',
    title: 'Technologie, die Probleme löst.\nMit Gewissen gebaut.',
    accent: [4, 5, 6],
    body: 'Wir bauen digitale Produkte, die echte Probleme lösen, schlank laufen und lange halten. Dieselbe Disziplin prägt, wie wir KI nutzen und wie wir es anderen beibringen.',
    primary: 'Projekt besprechen',
    secondary: 'Projekte ansehen',
    map: {
      kicker:
        'Conscious AI: KI nur, wo sie hilft, so wenig wie nötig, von Ihnen geprüft.',
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
      'KI gut zu nutzen ist eine Fähigkeit, kein Abo. Wir vermitteln sie, kostenlos.',
      'Kurze, praktische Module zeigen Ihnen, wie Sie das richtige Werkzeug für die Aufgabe wählen, Ihren KI-Arbeitsplatz einrichten, Prompts schreiben, die beim ersten Mal sitzen, und KI weglassen, wo Sie sie nicht brauchen. Kein technischer Hintergrund nötig.',
    ],
    closingKicker: 'Kostenlose Ressourcen',
    closing:
      'Smarter mit KI arbeiten. Weniger verschwenden. Die Kontrolle behalten.',
    cta: 'Conscious AI entdecken',
    notifyNote:
      'Die kostenlosen Module entstehen gerade. Hinterlassen Sie Ihre E-Mail, und wir sagen Ihnen am Tag der Eröffnung Bescheid.',
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
  numbers: {
    kicker: 'Bilanz',
    title: 'Zahlen, die es belegen.',
    description:
      'Ausgelieferte Produkte, langjährige Kunden und ein Team auf zwei Kontinenten.',
    items: [
      { value: '150+', label: 'Abgeschlossene Projekte' },
      { value: '40+', label: 'Kunden auf vier Kontinenten' },
      { value: '2', label: 'Standorte, Deutschland und Pakistan' },
    ],
  },
  technologies: {
    kicker: 'Werkzeuge und Technologie',
    statement: 'Bewährte Werkzeuge. Mit Bedacht gewählt, nicht aus Gewohnheit.',
    statementMuted:
      'Wir wählen etablierte Technologie, die zu Problem, Team und Budget passt. Nichts kommt dazu, nur weil es im Trend ist. Jedes Werkzeug muss sich seinen Platz verdienen und im Betrieb wenig kosten, an Zeit, Geld und Energie.',
    stackLabel: 'Womit wir bauen, in einfachen Worten',
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
  globalReach: {
    kicker: 'Weltweit im Einsatz',
    title: 'Ein Team. Wo immer die Arbeit stattfindet.',
    description:
      'Kunden auf vier Kontinenten, betreut aus Stuttgart und Islamabad. Wann immer Ihr Tag beginnt, ist jemand aus dem Team schon online.',
    legend: 'Standorte und Kundenorte',
  },
  testimonials: {
    kicker: 'Kundenstimmen',
    title: 'Gute Arbeit, in ihren Worten.',
    accent: [2, 3, 4],
    caseStudy: 'Projekt ansehen',
    prev: 'Vorherige Stimme',
    next: 'Nächste Stimme',
  },
  work: {
    kicker: 'Ausgewählte Projekte',
    title: 'Echte Produkte, echte Ergebnisse.',
    description:
      'Produkte, die wir entworfen, gebaut oder verbessert haben, jeweils mit Problem, Arbeit und Ergebnis. Filtern Sie nach Art oder nach dem Effizienzprinzip, das im Vordergrund steht.',
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
        'Neue Produkte, neu gebaute und Systeme, die endlich miteinander sprechen. Jede Fallstudie zeigt das Problem, die Arbeit und was sich verändert hat.',
        'Unsere Kunden reichen von jungen Start-ups bis zu etablierten Unternehmen auf vier Kontinenten.',
      ],
      cta: 'Alle Projekte ansehen',
      listLabel: 'Ausgewählte Projekte',
      more: '{n} weitere auf der Projektseite',
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
      'Kostenlose, praktische Module, mit denen Sie mehr aus KI herausholen und dabei weniger davon brauchen. Für Menschen, die mit KI arbeiten, nicht für die, die sie bauen.',
    heroCta: 'Bescheid geben, wenn es öffnet',
    principle:
      'Praktische Fähigkeiten. Bewusste Entscheidungen. Kein Programmieren nötig.',
    course: {
      kicker: 'Demnächst',
      title: 'Bessere KI-Gewohnheiten beginnen hier.',
      accent: [0, 1],
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
        'Wir wollen Technologie, die erweitert, was Menschen können, ohne aus dem Blick zu verlieren, was sie kostet.',
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
      'Was bauen Sie, was muss besser werden, oder wo steht Technologie im Weg?',
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
      'Vielen Dank. Ein Mensch liest jede Anfrage und antwortet {time}, direkt an die von Ihnen angegebene Adresse.',
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
          'Ein paar Zeilen genügen. Den Rest fragen wir in der Antwort.',
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
        label: 'Seit',
        value: '2024, mit über 150 Projekten und Kunden auf vier Kontinenten',
      },
      {
        label: 'Wo',
        value: 'Stuttgart und Islamabad, mit überlappenden Arbeitszeiten',
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
      'Schreiben Sie uns oder buchen Sie ein 30-minütiges Erstgespräch. Ein Mensch antwortet innerhalb eines Werktags.',
    book: 'Ein 30-minütiges Kennenlerngespräch buchen',
    choose: {
      formTab: 'Schreiben Sie uns',
      callTab: 'Gespräch buchen',
      callHint: '30-minütiges Erstgespräch',
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
    legal: 'Rechtliches',
    rights: 'Alle Rechte vorbehalten.',
    backToTop: 'Nach oben',
  },
};
