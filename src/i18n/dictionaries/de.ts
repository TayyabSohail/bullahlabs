import type { Dictionary } from './en';

/** German copy. Structure mirrors `en` exactly. */
export const de: Dictionary = {
  locale: 'de',
  nav: {
    program: 'Conscious AI',
    work: 'Projekte',
    about: 'Über uns',
    contact: 'Kontakt',
    home: 'Start',
    cta: 'Kontakt aufnehmen',
    bookCall: 'Gespräch buchen',
    menuOpen: 'Menü öffnen',
    menuClose: 'Menü schließen',
    language: 'Sprache',
  },
  hero: {
    badge: 'KI-Befähigung & Optimierung',
    title: 'KI nicht aus Gewohnheit.\nSondern bewusst.',
    body: 'Conscious AI ist ein praktisches Programm, das nicht-technischen Teams beibringt, für jede Aufgabe das richtige Werkzeug zu wählen, Ergebnisse zu prüfen und KI ohne Verschwendung zu nutzen.',
    primary: 'Zum Programm',
    secondary: 'Frühen Zugang anfragen',
    facts: {
      free: {
        value: 'Kostenlos',
        label: 'Grundlagenkurs, für jedes KI-Werkzeug',
      },
      tiers: 'Stufen, von der Einzelperson bis zum ganzen Team',
      tracks: 'Role Tracks, rund um echte Aufgaben',
    },
    map: {
      kicker: 'Ein Team durchläuft das Programm und nutzt KI danach gut',
      nodes: {
        team: 'Ihr Team',
        program: 'Conscious\nAI',
        use: 'Bewusste\nNutzung',
        teams: 'Geschulte\nTeams',
        usage: 'Optimierter\nEinsatz',
        result: 'KI gut\ngenutzt',
      },
    },
  },
  compare: {
    kicker: 'In der Praxis',
    title: 'Dieselbe Aufgabe, zwei Wege',
    accent: [2, 3],
    description:
      'Aus einem langen Bericht wird ein kurzes Update für einen Kunden. Nichts davon erfordert technisches Vorwissen.',
    defaultLabel: 'Aus Gewohnheit',
    consciousLabel: 'Bewusst',
    rows: [
      {
        step: 'Werkzeug',
        default: 'Das stärkste Modell, weil es gerade offen ist.',
        conscious:
          'Ein leichteres Modell. Eine Zusammenfassung lässt sich leicht mit der Quelle abgleichen.',
      },
      {
        step: 'Kontext',
        default: 'Der ganze 40-seitige Bericht, eingefügt.',
        conscious: 'Nur die zwei Abschnitte, nach denen der Kunde gefragt hat.',
      },
      {
        step: 'Prompt',
        default:
          '„Fass das zusammen.“ Danach vier Nachfragen, um Ton und Länge zu korrigieren.',
        conscious:
          'Aufgabe, Zielgruppe, Länge und Format, alles im ersten Prompt.',
      },
      {
        step: 'Abschluss',
        default: 'Neu erzeugen, bis sich eine Version richtig anfühlt.',
        conscious:
          'Den ersten brauchbaren Entwurf überarbeiten, die Zahlen prüfen, senden.',
      },
    ],
    defaultResult: 'Mehr Runden und mehr Rechenleistung, für dasselbe Update.',
    consciousResult:
      'Weniger Runden, weniger Rechenleistung und ein geprüftes Ergebnis.',
    note: 'Eine Veranschaulichung der Gewohnheiten aus dem kostenlosen Kurs, kein gemessenes Ergebnis.',
    cta: 'Was der kostenlose Kurs behandelt',
  },
  origin: {
    kicker: 'Der Name',
    title: 'Bullah, nach Bulleh Shah',
    accent: [2, 3],
    verse: 'Parh parh aalim faazil hoya, kadi apne aap nu parhya ee nahin.',
    translation:
      'Du hast gelesen und gelesen und bist ein Gelehrter geworden, doch dich selbst hast du nie gelesen.',
    attribution: 'Bulleh Shah, Dichter aus dem Punjab, ca. 1680 bis 1757',
    body: [
      'Für Bulleh Shah, in Erinnerung geblieben für seine Verse und seinen wirbelnden Tanz, zählte Wissen wenig ohne das Bewusstsein dafür, was man tut und warum.',
      'Das bedeutet „conscious“ bei uns: nicht mehr Werkzeuge und mehr Prompts, sondern zu wissen, was die Aufgabe braucht, und dort aufzuhören. Unser Zeichen ist dieser Tänzer als neuronales Netz: jedes Gelenk ein Knoten, jedes Glied eine Verbindung, und der Rock zwei Schichten von Knoten, die sich beim Drehen auffächern.',
    ],
  },
  work: {
    kicker: 'Belege im Betrieb',
    title: 'Was wir gebaut haben, und wie es optimiert ist',
    description:
      'Vierzehn Produkte im Einsatz. Jede Fallstudie sagt, was das Produkt ist, und zeigt dann die Optimierung dahinter: das richtige Werkzeug für die Aufgabe, nur der nötige Kontext, nichts doppelt, erst geprüft, dann vertraut.',
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
      title: 'Echte Produkte, gebaut ohne Verschwendung',
      accent: [3, 4],
      body: 'Marktplätze, SaaS-Plattformen, KI-Systeme und Websites im Einsatz. Jedes sagt, was es ist und wie es optimiert wurde.',
      cta: 'Alle Projekte ansehen',
      listLabel: 'Ausgewählte Projekte',
      more: '{n} weitere auf der Projektseite',
    },
  },
  pillars: {
    kicker: 'Wofür wir stehen',
    title: 'Drei Säulen guter KI-Nutzung',
  },
  program: {
    kicker: 'Conscious AI',
    title: 'Ein Programm, vier Einstiege',
    accent: [2, 3],
    description:
      'Beginnen Sie mit dem kostenlosen Kurs. Vertiefen Sie in Ihren eigenen Werkzeugen, Ihrer eigenen Rolle und dann im ganzen Team. Sie können auf jeder Stufe mit einem vollständigen, nutzbaren Ergebnis aufhören.',
    cta: 'Das ganze Programm ansehen',
    tracksCta: 'Was jeder Track aufbaut',
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
      'Ein praktisches Programm für nicht-technische Wissensarbeit: wann KI hilft, wie Sie in weniger Runden zu einem verlässlichen Ergebnis kommen und wie Sie aufhören, für Nutzung zu zahlen, die niemand gebraucht hat.',
    primary: 'Frühen Zugang anfragen',
    secondary: 'Die vier Stufen ansehen',
    principle:
      'KI-Kompetenz heißt zu wissen, wann, warum und wie man KI gut einsetzt, nicht nur, wie man die Werkzeuge bedient.',
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
    ctaTitle: 'Beginnen Sie mit dem kostenlosen Kurs.',
    ctaAccent: [4, 5],
    ctaBody:
      'Sagen Sie uns, wer Sie sind und wie Sie KI heute nutzen. Wir antworten innerhalb eines Werktags, mit Zugangsdetails für Sie oder einem Plan für Ihr Team.',
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
      'Eine Frage, eine Partnerschaft oder etwas, das hier nicht steht.',
    message: 'Ihre Nachricht',
    messagePlaceholder:
      'Wie nutzen Sie oder Ihr Team KI heute, und worin möchten Sie besser werden?',
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
        subtitle:
          'Wählen Sie das Passendste. Sie können später zwischen den Stufen wechseln.',
      },
      message: {
        title: 'Erzählen Sie uns etwas mehr.',
        subtitle:
          'Ihre Rolle, die KI-Werkzeuge, die Sie nutzen, und was Sie verbessern möchten.',
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
    more: 'Weitere Projekte',
    previous: 'zurück',
    next: 'weiter',
    notFound: 'Projekt nicht gefunden',
    ctaTitle: 'Soll Ihr Team so arbeiten?',
    ctaAccent: [3, 4],
    ctaBody:
      'Die Prinzipien hinter diesem Projekt sind die, die Conscious AI vermittelt. Sagen Sie uns, wie Ihr Team KI heute nutzt, und wir antworten innerhalb eines Werktags.',
  },
  aboutPage: {
    kicker: 'Über Bullah Labs',
    title: 'Ein Unternehmen rund um gute KI-Nutzung.',
    accent: [3, 4, 5],
    description:
      'Wir bringen nicht-technischen Teams bei, KI wirksam und verantwortungsvoll einzusetzen.',
    story: [
      'Bullah Labs hat als Softwarestudio begonnen. Jahre des Produktbaus haben uns eine Regel gelehrt: das kleinste System einsetzen, das die Aufgabe zuverlässig erledigt.',
      'Als KI in jedes Werkzeug einzog, sahen wir überall das Gegenteil: das stärkste Modell für jede Aufgabe, ganze Dokumente eingefügt, wo ein Absatz genügt hätte, Antworten neu erzeugt statt wiederverwendet. Also haben wir aus der Regel ein Programm gemacht. Conscious AI ist heute das ganze Unternehmen.',
    ],
    facts: [
      {
        label: 'Was wir tun',
        value:
          'Das Programm Conscious AI: ein kostenloser Kurs und drei kostenpflichtige Stufen',
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
    principlesTitle: 'Vier Regeln, die wir lehren und nach denen wir arbeiten.',
    principlesAccent: [0, 1],
    whereKicker: 'Wo wir sind',
    whereTitle: 'Zwei Büros, ein Arbeitstag.',
    whereAccent: [3, 4],
    whereDescription:
      'Ein asiatisches Büro in Islamabad und ein europäisches in Fellbach. Schreiben Sie dem, das näher ist; es antwortet dasselbe Team.',
    ctaTitle: 'Möchten Sie sehen, wo Ihr Team KI verschwendet?',
    ctaAccent: [6, 7],
    ctaBody:
      'Sagen Sie uns, wie Ihr Team KI heute nutzt. Wir antworten innerhalb eines Werktags mit dem passenden Einstieg ins Programm.',
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
    body: 'Die Adresse hat sich vielleicht geändert, oder der Link war falsch. Das Programm ist einen Klick entfernt.',
    home: 'Zurück zur Startseite',
    program: 'Zum Programm',
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
      'Ein paar Sätze genügen. Sagen Sie uns, wie Sie oder Ihr Team KI heute nutzen. Wir antworten innerhalb eines Werktags.',
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
        'Ein paar Sätze genügen. Sagen Sie uns, wie Sie oder Ihr Team KI heute nutzen. Wir antworten innerhalb eines Werktags.',
    },
  },
  faq: {
    kicker: 'FAQ',
    title: 'Klare Antworten, bevor Sie sich festlegen.',
    description: 'Zum Programm, für wen es gedacht ist und wie es abläuft.',
    accent: [0, 1],
  },
  cta: {
    kicker: 'Sprechen wir',
    title: 'Bereit, KI bewusst einzusetzen?',
    accent: [2, 3, 4],
    body: 'Erzählen Sie uns von Ihrem Team und wie es KI heute nutzt. Wir antworten innerhalb eines Werktags mit dem passenden Einstieg in Conscious AI.',
    button: 'Kontakt aufnehmen',
  },
  footer: {
    pitch: 'KI-Befähigung für nicht-technische Wissensarbeit.',
    quote: 'Kontakt aufnehmen',
    program: 'Das Programm',
    company: 'Unternehmen',
    offices: 'Standorte',
    legal: 'Rechtliches',
    rights: 'Alle Rechte vorbehalten.',
    backToTop: 'Nach oben',
  },
};
