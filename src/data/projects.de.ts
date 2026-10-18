import type { Project, ProjectEfficiency } from './projects';

/**
 * German copy for each case study, keyed by slug. Only prose is translated:
 * slug, images, accent, tech, category, capabilities and year stay as they
 * are in `projects`. Product names and client labels are kept.
 */
export type ProjectTranslation = Partial<
  Pick<
    Project,
    | 'title'
    | 'client'
    | 'tagline'
    | 'summary'
    | 'description'
    | 'industry'
    | 'headline'
    | 'problem'
    | 'approach'
    | 'resultsSummary'
    | 'learning'
    | 'results'
    | 'architecture'
    | 'keyFeatures'
    | 'challenges'
  >
> & {
  /** Efficiency copy; the lens itself is not translated. */
  efficiency?: Omit<ProjectEfficiency, 'lens'>;
  /** Gallery captions, in the same order as the project's `gallery`. */
  gallery?: { title: string; caption: string }[];
  /** `techStack` category labels, in the same order. */
  techStackCategories?: string[];
};

export const projectsDe: Record<string, ProjectTranslation> = {
  brickfold: {
    efficiency: {
      title:
        'Exakte Regeln bewegen das Geld, und ein Mensch gibt jede Bewegung frei.',
      body:
        'Hier wird nichts geschätzt. Eigentumsanteile werden bei jedem Lesen aus den tatsächlichen Beträgen abgeleitet, jede Aufteilung rundet auf den ganzen Schilling ab, und die Wallet-Invariante wird erzwungen statt angenommen. Jede Einzahlung, Investition, Mietgutschrift und Auszahlung passiert die Administration, bevor sie wirksam wird, und Plattformregeln sind Einstellungen, deren Änderung kein Release braucht.',
      techniques: [
        'Deterministische Buchungsregeln, keine Schätzungen',
        'Menschliche Freigabe für jede Geldbewegung',
        'Regeln als Einstellungen statt Releases',
      ],
    },
    client: 'Vertraulich (Immobilien-Mitgliederclub)',
    tagline:
      'Anteiliges Immobilieneigentum für Ostafrika, auf einem Hauptbuch, das nie schätzt',
    summary:
      'Ein Mitgliederclub, in dem Uganderinnen und Ugander ertragsstarke Wohnungen ab 1.000.000 UGX gemeinsam besitzen. Jeder Schilling bewegt sich nach exakten Regeln, und ein Mensch gibt jede Bewegung frei.',
    description:
      'Immobilien werden als ein unteilbares Ganzes verkauft, und dieses Ganze kostet mehr, als die meisten Menschen je auf einmal auf dem Konto haben. Brickfold teilt es auf. Geprüfte Mitglieder bündeln Kapital, besitzen gemeinsam echte, ertragsstarke Wohnungen in Uganda, erhalten ihren anteiligen Anteil an der Monatsmiete und verkaufen ihren Anteil an andere Mitglieder, wenn sie aussteigen möchten.',
    industry: 'Fintech / Immobilien',
    headline: { value: '1 Mio. UGX', label: 'für den Einstieg in Eigentum' },
    problem:
      'Die meisten Menschen in Ostafrika werden nie eine Wohnung besitzen, nicht aus Mangel an Ersparnissen, sondern weil Immobilien als unteilbares Ganzes verkauft werden. Kapital ist über Jahre gebunden, Mieteinnahmen bedeuten, Vermieter zu werden, und niemand außer dem Eigentümer sieht, was ein Gebäude tatsächlich einbringt. Ändern musste sich die Einheit des Eigentums: klein genug für normale Sparer, exakt genug, um ihr das Geld anderer Menschen anzuvertrauen.',
    approach:
      'Wir haben den Mitgliederclub von Anfang bis Ende entworfen und gebaut: einen geprüften Bewerbungs- und Onboarding-Prozess, eine Wallet, durch die jeder Schilling läuft, drei Wege zum Anteil an einer Wohnung, eine monatliche Mietausschüttung nach exaktem Anteil und einen internen Zweitmarkt für den Ausstieg. Jede Geldbewegung läuft über eine reale Person in der Administration, und Gebühren und Mindestbeträge sind Einstellungen, die das Team ohne Release ändert.',
    resultsSummary:
      'Brickfold ist als funktionierender Mitgliederclub gestartet, nicht als Warteliste. Ein Mitglied kann sich bewerben, seine Wallet füllen, sich ab 1.000.000 UGX in eine Wohnung einkaufen, seinen Anteil an der Miete erhalten und seinen Anteil an ein anderes Mitglied verkaufen, wenn es aussteigen möchte. Für das Team stimmt jeder Saldo mit dem Hauptbuch überein, und jede Entscheidung trägt einen Namen. Nur so lässt sich das Geld anderer Menschen mit gutem Gewissen verwalten.',
    learning:
      'Bevor etwas gebaut wurde, wurde jede Buchungsregel in einfacher Sprache erklärt und mit dem Gründer vereinbart: warum Prozentsätze abgeleitet statt gespeichert werden, warum jede Aufteilung abrundet, warum ein Mensch jede Bewegung freigibt. Das Team betreibt die Plattform und weiß, warum sie sich so verhält, nicht nur wie.',
    results: [
      {
        value: '1 Mio. UGX',
        label: 'Mindesteinlage für den gemeinsamen Besitz einer Wohnung',
        detail:
          'Immobilien, die bisher nur als unteilbares Ganzes verkauft wurden, sind jetzt zu einem Preis zugänglich, den normale Sparer erreichen.',
      },
      {
        value: '3',
        label: 'Eigentumsprodukte auf einem Hauptbuch',
        detail:
          'Fractional, Live und Prime teilen sich dieselbe Wallet, Mietausschüttung und denselben Zweitmarkt. Ein Mitglied lernt ein System, nicht drei.',
      },
      {
        value: '100 %',
        label: 'der Geldbewegungen von einer Person freigegeben',
        detail:
          'Jede Einzahlung, Investition, Mietgutschrift und Auszahlung passiert die Freigabestelle der Administration, bevor sie wirksam wird. Nichts bewegt sich, weil Software es entschieden hat.',
      },
    ],
    architecture:
      'Next.js und React mit TanStack und typisierten Server Actions, darunter Supabase und PostgreSQL mit Zod an den Schnittstellen. Rund 72.600 Zeilen über 416 Dateien und 211 wiederverwendbare Komponenten. Wallet-Salden müssen zwingend immer Einzahlungen minus Investitionen minus Auszahlungen entsprechen, und UGX wird durchgängig in ganzen Schillingen geführt, nie als Gleitkommazahl.',
    keyFeatures: [
      'Wohnungsmarktplatz mit Suche, Filtern und Sortierung',
      'Vault-Wallet für Einzahlungen, Investitionen und Auszahlungen',
      'Monatliche Mietausschüttung, exakt nach Anteil aufgeteilt',
      'Zweitmarkt mit Ausstiegsfenstern und 1,5 % Plattformgebühr',
      'Freigabestelle in der Administration für jede Geldbewegung',
      'Broadcast-Editor mit 6 Zielgruppensegmenten',
      'Empfehlungen, 4 Mitgliedsstufen und 35 automatisierte E-Mails',
    ],
    challenges: [
      {
        challenge:
          'Eigentumsanteile mussten über Erstkäufe, monatliche Mietaufteilungen und Zweitmarktgeschäfte hinweg exakt bleiben, ohne dass ein Mitglied je durch Rundung benachteiligt wird.',
        solution:
          'Prozentsätze werden bei jedem Lesevorgang aus den tatsächlichen Beträgen abgeleitet statt gespeichert, und jede Aufteilung rundet auf den ganzen Schilling ab, sodass die Plattform nie zu ihren eigenen Gunsten rundet.',
      },
      {
        challenge:
          'Eine Wallet mit echtem Geld darf nie abweichen, und kein Mitglied durfte einen Admin-Screen sehen oder erreichen können.',
        solution:
          'Die Invariante des Hauptbuchs, nach der der Saldo Einzahlungen minus Investitionen minus Auszahlungen entspricht, wird erzwungen statt vorausgesetzt. Mitglieder- und Adminwelt sind im Produkt strikt getrennt.',
      },
      {
        challenge:
          'Mitgliedsbeiträge, Mindestbeträge und Zweitmarktgebühren mussten sich mit dem Geschäft ändern können, nicht mit dem Releasezyklus.',
        solution:
          'Jede Regel wurde zu einer betrieblichen Einstellung hinter einem Admin-Bereich, sodass das Team die Plattformökonomie sofort anpasst.',
      },
    ],
    gallery: [
      {
        title: 'Wohnungsmarktplatz',
        caption:
          'Einheiten, die zum Erwerb offenstehen, mit Finanzierungsfortschritt, Rendite und Mindestanteil.',
      },
      {
        title: 'Vault',
        caption:
          'Jede Einzahlung, Investition, Mietgutschrift und Auszahlung in einem exakten Hauptbuch.',
      },
      {
        title: 'Freigabestelle',
        caption:
          'Die Administration gibt jede Geldbewegung frei und ändert Plattformregeln ohne Release.',
      },
    ],
    techStackCategories: [
      'Frontend',
      'Styling',
      'Backend',
      'Nachrichten & Dokumente',
      'Analytics',
    ],
  },
  rankloom: {
    efficiency: {
      title:
        'Bündelung und Caching halbieren die Kosten des Keyword-Trackings.',
      body:
        'Anfragen werden gebündelt und nach Keyword und Sprachraum zwischengespeichert, sodass dieselben Daten nie zweimal eingekauft werden. Die Massenerzeugung läuft als fortsetzbare Jobs, die einen einzelnen fehlgeschlagenen Eintrag wiederholen statt des ganzen Stapels, und die Erzeugung läuft über OpenRouter, sodass sich ein Modell austauschen lässt, ohne den Produktcode anzufassen.',
      techniques: [
        'Cache nach Keyword und Sprachraum',
        'Einen Eintrag wiederholen, nicht den Stapel',
        'Modelle hinter einem Router austauschbar',
      ],
    },
    client: 'Vertraulich (SEO-Plattform)',
    tagline:
      'KI-Plattform für SEO und Content, die dieselben Daten nie zweimal einkauft',
    summary:
      'Eine KI-gestützte Plattform für SEO und Content. Bündelung und Caching halbieren die Kosten des Keyword-Trackings.',
    description:
      'Eine Plattform für Keyword-Recherche, KI-Content-Erstellung und Rank-Tracking, die dem Hin und Her zwischen Werkzeugen ein Ende macht, das SEO-Teams ganze Tage gekostet hat.',
    industry: 'Marketingtechnologie',
    headline: { value: '3x', label: 'geringere Kosten pro Artikel' },
    problem:
      'SEO-Teams wechselten zwischen fünf Tools, um von der Keyword-Recherche zum Rank-Tracking zu kommen, verloren Stunden am Tag und standen am Ende vor Zahlen, die nicht zusammenpassten. Die meisten dieser Tools liefen zudem auf veralteten Daten, sodass Teams spät auf das reagierten, was in der Suche tatsächlich passierte. Die Arbeit musste an einen Ort, auf Live-Daten laufen und weniger kosten als die Tools, die sie ersetzte.',
    approach:
      'Wir haben eine Plattform gebaut: Keyword-Recherche und Rank-Tracking auf Live-Daten von DataForSEO und Google Maps, eine KI-Content-Engine über OpenRouter, sodass Modelle ohne Eingriff in den Produktcode getauscht werden können, und Trigger.dev für die Massengenerierung als wiederaufnehmbare Hintergrundjobs. Anfragen werden gebündelt und nach Keyword und Sprache gecacht, sodass dieselben Daten nie zweimal gekauft werden.',
    resultsSummary:
      'Rankloom hat fünf separate Tools durch eines ersetzt. Keyword-Recherche, Texterstellung und Rank-Tracking laufen als Workflows, die das Team prüft statt bedient, Entwürfe kommen mit einem SEO-Score an, und der größte Kostenblock des Unternehmens, die Keyword-Daten, hat sich halbiert, ohne dass die Daten älter geworden wären.',
    learning:
      'Das Produktteam sieht heute, was ein getracktes Keyword und ein generierter Artikel tatsächlich kosten. Die Gespräche darüber, welche Anforderungen später teuer geworden wären, fanden statt, bevor etwas gebaut wurde, nicht danach.',
    results: [
      {
        value: '3x',
        label: 'geringere Kosten pro Artikel',
        detail:
          'Texterstellung, Optimierung und Veröffentlichung laufen als ein Workflow statt als Kette aus Tools und Übergaben. Ein Artikel kostet ein Drittel von vorher.',
      },
      {
        value: '30',
        label: 'Artikel in 10 Minuten erzeugt',
        detail:
          'Ein Stapel, der das Content-Team früher Stunden kostete, ist jetzt ein wiederaufnehmbarer Hintergrundjob, mit einem SEO-Score pro Entwurf, damit die Redaktion weiß, wo sie anfängt.',
      },
      {
        value: '50 %',
        label: 'geringere Kosten für Keyword-Tracking',
        detail:
          'Von 0,18 $ auf 0,09 $ pro getracktem Keyword, ohne Verlust an Aktualität. Dieselben Daten werden schlicht nicht zweimal gekauft.',
      },
    ],
    architecture:
      'Next.js App Router mit Server Components für datenintensive Ansichten, Supabase und PostgreSQL zur Speicherung und Trigger.dev für robuste Hintergrundjobs. Die Generierung läuft über OpenRouter, sodass Modelle ohne Eingriff in den Produktcode getauscht werden.',
    keyFeatures: [
      'KI-Content-Erstellung mit Unterstützung mehrerer Sprachräume',
      'Keyword- und Rank-Tracking in Echtzeit',
      'Standortbezogene Auswertungen über die Google-Maps-API',
      'Pipelines zur Massenverarbeitung mit Caching',
      'Abonnementabrechnung über Stripe',
    ],
    challenges: [
      {
        challenge:
          'Die Kosten der Keyword-API stiegen linear mit der Nutzerzahl und wurden schnell zum größten Posten.',
        solution:
          'Wir haben Anfragen gebündelt und eine Caching-Schicht nach Keyword und Sprachraum eingeführt, was die Tracking-Ausgaben halbierte, ohne die Aktualität der Daten zu verringern.',
      },
      {
        challenge:
          'Massenjobs zur Content-Erstellung überschritten die Ausführungsgrenzen von Serverless und brachen mittendrin ab.',
        solution:
          'Die Generierung läuft nun über Trigger.dev, mit fortsetzbaren Jobs, die Zwischenstände sichern und einzelne Elemente erneut versuchen statt des gesamten Stapels.',
      },
    ],
    gallery: [
      {
        title: 'Keyword-Recherche',
        caption:
          'Aktuelles Suchvolumen, Schwierigkeit und Suchabsicht, mit lokalen Auswertungen aus Google Maps.',
      },
      {
        title: 'Content-Assistent',
        caption:
          'Artikelerstellung im Stapel als fortsetzbarer Job, mit SEO-Bewertung je Entwurf.',
      },
      {
        title: 'Rank-Tracking',
        caption:
          'Tägliche Positionen, Veränderungen und die Hintergrundjobs, die sie aktualisieren.',
      },
    ],
    techStackCategories: [
      'Frontend',
      'Styling',
      'Backend',
      'APIs & KI',
      'Zahlungen',
      'Deployment',
      'Analytics',
    ],
  },
  bidnest: {
    efficiency: {
      title:
        'Jeder Bildschirm erhält nur die Gebote, die er gerade beobachtet.',
      body:
        'Echtzeit-Abonnements sind pro Inserat begrenzt, sodass ein Client nie Aktualisierungen für Inserate verarbeitet, die er nicht anzeigt. Die Reihenfolge der Gebote wird einmal entschieden, in einer serialisierten serverseitigen Transaktion, und die Clients gleichen sich mit dem bestätigten Ergebnis ab. Die Plattform trägt über 1.000 gleichzeitig Bietende, mit Aktualisierungen in 200 ms.',
      techniques: [
        'Abonnements pro Inserat begrenzt',
        'Eine verbindliche Entscheidung auf dem Server',
        'Zugriff über Row-Level Security erzwungen',
      ],
    },
    client: 'Vertraulich (Marktplatz für Studierendenwohnungen)',
    tagline:
      'Bieter-Marktplatz für Studentenwohnungen, der jedem Bildschirm nur seine Gebote sendet',
    summary:
      'Ein gebotsbasierter Marktplatz für Mietwohnungen außerhalb des Campus. Live-Aktualisierungen sind pro Inserat begrenzt, sodass über 1.000 Menschen gleichzeitig bieten können.',
    description:
      'Studierende bieten in Echtzeit auf Wohnungen außerhalb des Campus, mit rollenspezifischen Dashboards für Studierende, Eltern und Vermietende.',
    industry: 'Immobilientechnologie',
    headline: { value: '1.000+', label: 'gleichzeitig Bietende' },
    problem:
      'Studentisches Wohnen wird von Festpreisangeboten ohne Verhandlungsspielraum dominiert, verstreut über Plattformen, denen niemand vertraut. Eltern bezahlen die meisten dieser Mieten und haben keinerlei Zugang zum Prozess. Der Markt brauchte einen Ort, an dem der Preis offen gefunden wird, jeder Bietende dieselbe Zahl sieht und Eltern im Namen ihres Kindes handeln können.',
    approach:
      'Wir haben einen Live-Bietmarktplatz über WebSockets entworfen und gebaut. Die Annahme von Geboten ist serverseitig serialisiert, sodass es eine verbindliche Reihenfolge gibt, und Echtzeit-Abonnements sind pro Inserat begrenzt, sodass jeder Bildschirm nur die Gebote erhält, die er beobachtet. Studierende, Eltern und Vermieter bekamen jeweils ein Dashboard für ihre Rolle, dazu Messaging, Servicebuchungen und Benachrichtigungen.',
    resultsSummary:
      'Bidnest ging zum Semesterstart live und hielt stand. Tausend Studierende können gleichzeitig auf dasselbe Inserat bieten und sehen alle innerhalb einer Fünftelsekunde denselben Preis. Eltern können erstmals im Namen ihres Kindes bieten und schreiben, und Vermieter lassen den Markt den Preis finden, statt ihn zu raten.',
    results: [
      {
        value: '1.000+',
        label: 'gleichzeitig Bietende ohne Konflikt',
        detail:
          'Die Annahme von Geboten ist serverseitig serialisiert, sodass es eine verbindliche Reihenfolge gibt und kein Inserat je zweimal vergeben wird.',
      },
      {
        value: '200 ms',
        label: 'vom Gebot bis zur Aktualisierung aller Bildschirme',
        detail:
          'Studierende, Eltern und Vermieter sehen im selben Moment dieselbe Zahl. Genau das macht eine offene Auktion fair.',
      },
      {
        value: '3',
        label: 'Dashboards, eines je Rolle',
        detail:
          'Studierende, Eltern und Vermieter bekommen jeweils die Aktionen und Informationen, die für sie wichtig sind, und nichts anderes.',
      },
    ],
    architecture:
      'Next.js über Supabase und PostgreSQL. Gebote laufen über einen WebSocket-Kanal und werden vor dem Commit serverseitig geprüft, sodass ein Client nie ein Höchstgebot verbuchen kann, das er nicht erzielt hat. Der Rollenzugriff wird über Row-Level Security durchgesetzt.',
    keyFeatures: [
      'Auktionsmarktplatz für geprüfte Wohnungen außerhalb des Campus',
      'Elternzugang, um im Namen der Studierenden zu bieten und zu schreiben',
      'Buchung von Diensten für Umzug, Reinigung und Reparaturen',
      'Integrierte Nachrichten zwischen Studierenden, Vermietenden und Anbietern',
      'Benachrichtigungen in der App, per E-Mail und SMS',
      'Angebote gefiltert nach Nähe zu Partnerhochschulen',
    ],
    challenges: [
      {
        challenge:
          'Gleichzeitige Gebote auf dasselbe Angebot liefen gegeneinander und konnten beide angenommen werden.',
        solution:
          'Die Annahme von Geboten läuft nun in einer serialisierten serverseitigen Transaktion, sodass die Reihenfolge verbindlich entschieden wird und Clients sich mit dem festgeschriebenen Ergebnis abgleichen.',
      },
      {
        challenge:
          'Jedes Gebot an alle verbundenen Clients zu senden, überlastete die Socket-Schicht zu Spitzenzeiten.',
        solution:
          'Abonnements laufen nun je Angebot, sodass Clients nur Aktualisierungen zu dem erhalten, was sie tatsächlich verfolgen.',
      },
    ],
    gallery: [
      {
        title: 'Angebot und Live-Gebot',
        caption:
          'Die Gebotshistorie aktualisiert sich in unter 200 ms, mit einem Elternteil als Mitunterzeichner.',
      },
      {
        title: 'Dashboard für Studierende',
        caption:
          'Laufende Gebote, Fortschritt beim Mietvertrag und bei Partnern gebuchte Dienste.',
      },
      {
        title: 'Nachrichten',
        caption:
          'Studierende, Vermietende und Anbieter in einem Verlauf, mit dokumentierten Buchungen.',
      },
    ],
    techStackCategories: [
      'Frontend',
      'Styling',
      'Backend',
      'Echtzeit',
      'Zahlungen',
      'Benachrichtigungen',
      'Analytics',
    ],
  },
  'curio-market': {
    efficiency: {
      title:
        'Auszahlungen und Sendungsverfolgung laufen von selbst, der Support muss sie nicht wiederholen.',
      body:
        'Die beiden Abläufe mit der meisten Handarbeit, Händlerauszahlungen und Sendungsverfolgung, sind mit Stripe Connect und DHL-Webhooks durchgängig automatisiert, der Status steht direkt in der Bestellansicht. Die Supportanfragen sanken um 70 %. Die Mandantentrennung ist einmal in der Datenbank festgelegt statt in jeder Ansicht.',
      techniques: [
        'Auszahlungen und Tracking durchgängig automatisiert',
        'Status dort, wo ohnehin nachgesehen wird',
        'Trennung einmal in der Datenbank erzwungen',
      ],
    },
    client: 'Vertraulich (E-Commerce-Marktplatz)',
    tagline:
      'Personalisierter Multi-Seller-Marktplatz mit automatischen Auszahlungen und Tracking',
    summary:
      'Ein personalisierter E-Commerce-Marktplatz für viele Händler. Automatisierte Auszahlungen und Sendungsverfolgung senken die Supportanfragen um 70 %.',
    description:
      'Ein Marktplatz mit vielen Anbietern, personalisierten Empfehlungen, Auszahlungen über Stripe Connect und automatisierter Sendungsverfolgung von DHL.',
    industry: 'E-Commerce',
    headline: { value: '70 %', label: 'weniger Support-Anfragen' },
    problem:
      'Die meisten Shops zeigen allen Käuferinnen und Käufern denselben Feed und begraben sie unter Optionen, die nicht zu ihrem Geschmack passen. Verkäufer hatten nur Basiswerkzeuge ohne klaren Blick auf Bestellungen und Auszahlungen, und manuelle Zahlungsabwicklung plus undurchsichtige Lieferung füllten den Support mit immer denselben zwei Fragen. Der Marktplatz musste sich für Käufer persönlich anfühlen und für Verkäufer von selbst laufen.',
    approach:
      'Wir haben uns zuerst die Support-Warteschlange angesehen und dann gebaut: eine serverseitig gerenderte Empfehlungs-Engine auf Basis eines Geschmacksquiz mit acht Fragen, eine mandantenfähige Supabase-Architektur mit Verkäufertrennung direkt in der Datenbank, und die beiden Pfade mit dem meisten Aufwand, Auszahlungen und Sendungsverfolgung, durchgängig automatisiert mit Stripe Connect und DHL-Webhooks, mit dem Status direkt in der Bestellansicht.',
    resultsSummary:
      'Curio Market wurde vom generischen Storefront zu einem Marktplatz, der lernt, was jeder Käuferin und jedem Käufer gefällt, und beim Checkout aus dem Weg geht. Verkäufer werden planmäßig bezahlt und sehen das auch, Pakete verfolgen sich selbst, und der Support-Posteingang wurde still. Das eigene Team des Kunden betreibt die Plattform heute.',
    learning:
      'Die Übergabe war Teil des Projekts. Das Operations-Team wurde durch Auszahlungen, Sendungsverfolgung und Mandantentrennung geführt, mit dem Warum hinter jeder Entscheidung, gründlich genug, dass es den Marktplatz heute ohne uns betreibt.',
    results: [
      {
        value: '40 %',
        label: 'mehr Interaktion der Käuferschaft',
        detail:
          'Ein Geschmacksquiz mit acht Fragen macht aus einem generischen Feed einen persönlichen, sodass wiederkehrende Käufer finden, was sie wirklich wollen.',
      },
      {
        value: '70 %',
        label: 'weniger Support-Tickets',
        detail:
          'Automatisierte Auszahlungen und Sendungsverfolgung haben die beiden Fragen beseitigt, die den Posteingang füllten. Die Antworten stehen jetzt in der Bestellansicht, wo ohnehin alle hinschauen.',
      },
      {
        value: '1',
        label: 'Bezahlvorgang über alle Verkaufenden hinweg',
        detail:
          'Käufer zahlen einmal; Stripe Connect teilt die Zahlung auf und rechnet planmäßig mit jedem Verkäufer ab, ohne dass jemand Geld von Hand bewegt.',
      },
    ],
    architecture:
      'Next.js App Router, der die Empfehlungsflächen serverseitig rendert. Supabase liefert mandantenfähige Speicherung mit Row-Level Security je Anbieter. Stripe Connect wickelt geteilte Zahlungen und Auszahlungen ab; DHL-Webhooks steuern die Sendungsverfolgung.',
    keyFeatures: [
      'Persönlichkeitstest, der die Produktempfehlungen steuert',
      'Marktplatz mit vielen Anbietern in einem Einkaufserlebnis',
      'Anbieter-Dashboard für Produkte, Bestellungen und Auszahlungen',
      'Stripe-Zahlungen mit automatisierten Auszahlungen an Anbieter',
      'DHL-Anbindung für automatisierte Sendungsverfolgung',
    ],
    challenges: [
      {
        challenge:
          'Bei der Mandantenfähigkeit bestand das Risiko, dass Abfragen eines Anbieters die Daten eines anderen erreichen.',
        solution:
          'Wir haben die Trennung über Row-Level-Security-Richtlinien in der Datenbank erzwungen statt im Anwendungscode, sodass eine vergessene Prüfung in der App keine Daten preisgeben kann.',
      },
      {
        challenge:
          'Manuelle Anfragen zu Auszahlungen und Versand beherrschten die Support-Warteschlange.',
        solution:
          'Wir haben beide Wege automatisiert, mit Stripe Connect für planmäßige Auszahlungen und DHL-Webhooks für die Sendungsverfolgung, und zeigen den Status direkt in der Bestellansicht.',
      },
    ],
    gallery: [
      {
        title: 'Geschmackstest',
        caption:
          'Acht Fragen machen aus dem Geschmack der Kundschaft einen persönlichen Feed.',
      },
      {
        title: 'Personalisierter Marktplatz',
        caption:
          'Produkte vieler Anbieter, sortiert nach Übereinstimmung und gefiltert nach Stimmung.',
      },
      {
        title: 'Anbieter-Dashboard',
        caption:
          'Bestellungen mit DHL-Sendungsverfolgung und planmäßigen Auszahlungen über Stripe Connect.',
      },
    ],
    techStackCategories: [
      'Frontend',
      'Styling',
      'Backend',
      'Zahlungen',
      'Logistik',
      'Analytics',
    ],
  },
  'bitsmiths-hrm': {
    efficiency: {
      title:
        'Lohnabrechnung ist Rechnen, also läuft sie über Regeln, ohne Modell im Ablauf.',
      body:
        'Urlaubs- und Krankheitskonten, Lohnberechnung und Sperrung sind Postgres-Funktionen. Die Berechnung ist idempotent und lässt sich jederzeit gefahrlos wiederholen, bevor ein Zeitraum gesperrt wird, und jeder freigegebene Posten fließt in genau eine Abrechnung. Das Ergebnis: null manuelle Lohnberechnungen.',
      techniques: [
        'Deterministische Logik in der Datenbank',
        'Idempotente Neuberechnung',
        'Jeder Posten genau einmal gezählt',
      ],
    },
    tagline:
      'HR- und Lohnsystem, das auf Regeln läuft, ohne manuelle Berechnungen',
    summary:
      'Onboarding, Urlaub, Krankheitskosten, Überstunden und Lohnabrechnung für Bitsmiths Studio, berechnet durch Datenbankregeln statt von Hand.',
    description:
      'Eine interne HR-Plattform, auf der Mitarbeitende eingeladen, eingearbeitet und aktiviert werden; sie reichen Urlaub, Krankheitskosten und Überstunden ein, die Administration gibt jeden Vorgang frei, und die freigegebenen Posten fließen in einen monatlichen Abrechnungslauf, der Lohnabrechnungen berechnet, sperrt und nach Payoneer exportiert.',
    industry: 'HR-Technologie',
    headline: { value: '0', label: 'manuelle Payroll-Berechnungen' },
    problem:
      'Die Personalprozesse bei Bitsmiths Studio waren über E-Mail, Chat und Papier verstreut: Onboarding per E-Mail, Urlaub und Überstunden in Nachrichten, Krankheitskosten auf Papier und die Gehaltsabrechnung jeden Monat von Hand aus alldem zusammengesetzt. Nichts stimmte überein, nichts war nachvollziehbar. Das Studio brauchte einen Ort, an dem jeder Antrag einen Status hat und die Abrechnung nicht falsch sein kann.',
    approach:
      'Wir haben ein System gebaut, in dem jeder Antrag eine Zeile mit Status ist. Mitarbeitende werden eingeladen, onboardet und aktiviert; sie reichen Urlaub, Krankheitskosten und Überstunden ein; Admins genehmigen jeden Antrag; genehmigte Posten fließen in einen monatlichen Abrechnungslauf, der Gehaltsabrechnungen berechnet, sperrt und nach Payoneer exportiert. Salden, Berechnung und Sperrung sind Postgres-Funktionen, denn Gehaltsabrechnung ist Arithmetik und sollte nach Regeln laufen.',
    resultsSummary:
      'Das Studio führt seine Personalprozesse jetzt in einem System statt über E-Mail, Chat und Papier. Jeder Antrag ist nachvollziehbar, Mitarbeitende erfahren ohne Nachfragen, wo ihr Antrag steht, und die Abrechnung ist ein gesperrter Lauf, der sich selbst berechnet. Als eine Feinheit auftauchte, etwa späte Genehmigungen mit dem Risiko doppelter Zahlung, wurde sie in derselben Woche erklärt, behoben und dokumentiert.',
    learning:
      'Weil die Abrechnungsregeln in der Datenbank liegen und aufgeschrieben sind, verstehen die Menschen, die die Abrechnung durchführen, woraus jede Zahl besteht. Die Fallstricke aus dem Projekt, Doppelzählung und verlorene Überschreibungen, sind dokumentiert, damit die nächste Person sie nicht neu entdecken muss.',
    results: [
      {
        value: '0',
        label: 'manuelle Lohnberechnungen',
        detail:
          'Genehmigter Urlaub, Krankheitskosten und Überstunden fließen automatisch in den Monatslauf und werden dann gesperrt, sodass nichts zweimal ausgezahlt wird.',
      },
      {
        value: '5',
        label: 'Abläufe in einem System',
        detail:
          'Onboarding, Urlaub, Krankheitskosten, Überstunden und Gehaltsabrechnung haben fünf separate Kanäle ersetzt. Niemand muss sich merken, wo ein Antrag gelandet ist.',
      },
      {
        value: '12',
        label: 'automatisierte E-Mails',
        detail:
          'Statusänderungen benachrichtigen die Betroffenen von selbst, sodass niemand einer Genehmigung im Chat hinterherläuft.',
      },
    ],
    architecture:
      'Next.js 15 App Router mit next-safe-action Server Actions über Supabase, mit Postgres, Auth, Storage und pg_cron. Die Geschäftslogik liegt in der Datenbank: Urlaubs- und Krankheitskostensalden, Lohnberechnung und Sperrung sind Postgres-Funktionen, abgesichert durch Row-Level Security. Rollen werden per Trigger in das JWT gespiegelt, sodass die Middleware danach routen kann. Resend versendet 12 React-Email-Vorlagen, und ein monatlicher Cron-Job eröffnet jede Abrechnungsperiode.',
    keyFeatures: [
      'Mitarbeitenden-Dashboard mit aktuellen Salden und letzter Lohnabrechnung',
      'Anträge für Urlaub, Krankheitskosten und Überstunden mit Freigabeverlauf',
      'Freigabe-Warteschlange der Administration über alle Antragsarten',
      'Monatliche Abrechnungsläufe, nach Abschluss gesperrt',
      'Lohnabrechnungen, erst nach der Sperrung für Mitarbeitende freigegeben',
      'Payoneer-Export und eine Ablage für Richtliniendokumente',
    ],
    challenges: [
      {
        challenge:
          'Mitarbeitende konnten ihre eigenen gesperrten Lohnabrechnungen nicht sehen. Die Sichtbarkeitsrichtlinie fragte eine nur für die Administration zugängliche Tabelle ab, und diese Unterabfrage läuft mit den Rechten der aufrufenden Person, lieferte also stillschweigend nichts zurück.',
        solution:
          'Wir haben die Prüfung in eine SECURITY-DEFINER-Hilfsfunktion verlagert, die nur beantwortet, ob ein Lauf gesperrt ist. So löst sich die Richtlinie auf, ohne die unternehmensweiten Lohnsummen dieser Tabelle offenzulegen.',
      },
      {
        challenge:
          'Freigegebene Krankheitskosten und Überstunden konnten doppelt gezählt werden, einmal im Lauf, der sie erfasste, und erneut im nächsten.',
        solution:
          'Beim Sperren eines Laufs wird jeder freigegebene Posten in derselben Transaktion mit dessen Lauf-ID versehen, sodass jeder Posten in genau eine Abrechnung einfließt und späte Freigaben in den Folgemonat wandern statt sich zu verdoppeln.',
      },
      {
        challenge:
          'Manuelle Anpassungen der Administration an einer Lohnabrechnung, etwa geleistete Stunden, Überstundenfaktor und individuelle Korrekturen, gingen bei jeder Neuberechnung verloren.',
        solution:
          'Wir haben die Berechnung idempotent gemacht: Sie schreibt abgeleitete Werte fort und bewahrt dabei die von der Administration eingetragenen Anpassungen, sodass eine Neuberechnung jederzeit vor der Sperrung der Periode gefahrlos möglich ist.',
      },
    ],
    gallery: [
      {
        title: 'Urlaubsanträge',
        caption:
          'Anträge gehen an die Teamleitung und die Administration, mit Salden, die sich bei Freigabe aktualisieren.',
      },
      {
        title: 'Abrechnungszyklus',
        caption:
          'Das monatliche Register mit Überstunden und Abzügen, in zwei Schritten freigegeben.',
      },
      {
        title: 'Lohnabrechnung',
        caption:
          'Bezüge, Abzüge und der Nachweis, wer sie erstellt, geprüft und ausgezahlt hat.',
      },
    ],
    techStackCategories: [
      'Frontend',
      'Styling',
      'Backend',
      'Datenabruf',
      'E-Mail',
      'Zeitsteuerung',
    ],
  },
  'bitsmiths-studio': {
    efficiency: {
      title: 'Veröffentlichen ist eine CMS-Aktion, kein Deployment.',
      body:
        'Jede Inhaltsfläche ist einmal in Directus modelliert und wird über gemeinsame Vorlagen ausgegeben, sodass eine neue Fallstudie oder ein Beitrag keine Entwicklungszeit kostet. Medien werden pro Anfrage in WebP umgewandelt, der manuelle Export entfällt.',
      techniques: [
        'Gemeinsame Vorlagen für vier Inhaltstypen',
        'Kein Deployment zum Veröffentlichen',
        'Bilder auf Anfrage umgewandelt, nicht von Hand',
      ],
    },
    tagline:
      'Agentur-Website mit CMS, bei der Veröffentlichen kein Deployment braucht',
    summary:
      'Marketing-Website für ein Studio, das MVPs in 30 Tagen liefert. Jeder Inhaltstyp wird aus dem CMS veröffentlicht, ohne Entwicklungszeit.',
    description:
      'Die Marketing-Website des Studios, auf einem CMS gebaut, sodass Referenzen, Artikel und Kundenstimmen ohne Deploy veröffentlicht werden.',
    industry: 'Softwareagentur',
    headline: { value: '30 Tage', label: 'von der Idee zum fertigen MVP' },
    problem:
      'Das Studio verspricht Gründerinnen und Gründern produktionsreife MVPs in 30 Tagen, und die vergleichen es mit Agenturen, die ein Vielfaches verlangen. Dieses Versprechen braucht sichtbare Belege, und die ändern sich jeden Monat: neue Fallstudien, Artikel und Kundenstimmen. Das Team musste all das veröffentlichen können, ohne dass ein Entwickler beteiligt ist.',
    approach:
      'Wir haben die Marketing-Website mit Next.js auf einem Directus-CMS gebaut, jede Inhaltsfläche einmal modelliert und über gemeinsame Templates gerendert. Die Seite ist als Argument aufgebaut: Versprechen, Beleg, Einwände, ein Call-to-Action. Medien werden pro Anfrage zu WebP konvertiert, sodass niemand Bilder von Hand exportiert.',
    resultsSummary:
      'Die Website übernimmt den Vertrieb des Studios. Fallstudien, Artikel, Kundenstimmen und FAQs werden beim Speichern aus dem CMS veröffentlicht, sodass die Belege hinter dem 30-Tage-Versprechen ohne Entwicklungszeit aktuell bleiben, und wer bis zum Ende liest, kommt informiert beim Anfrageformular an.',
    results: [
      {
        value: '30 Tage',
        label: 'vom Briefing zum ausgelieferten MVP',
        detail:
          'Das Versprechen, das die Website gibt, gestützt durch die Fallstudien, die sie veröffentlicht.',
      },
      {
        value: '4',
        label: 'Inhaltstypen, veröffentlichbar ohne Deploy',
        detail:
          'Fallstudien, Beiträge, Kundenstimmen und FAQs werden in Directus bearbeitet und gehen beim Speichern live, durch die Person, die sie geschrieben hat.',
      },
      {
        value: '1',
        label: 'Handlungsaufruf je Besuch',
        detail:
          'Versprechen, Beleg und Einwände kommen zuerst, damit die Anfrage am Ende eine informierte ist.',
      },
    ],
    architecture:
      'Next.js App Router über einem Directus-Headless-CMS. Referenzen, Beiträge, Kundenstimmen und FAQs sind CMS-Sammlungen, die über gemeinsame Vorlagen gerendert werden, mit Medien über Transformationen zur Anfragezeit.',
    keyFeatures: [
      'CMS-gestützte Referenzen mit gemeinsamer Detailvorlage',
      'Technik-Blog',
      'Karussell mit Kundenstimmen',
      'FAQ zu Preisen und Vorgehen',
      'SEO- und OpenGraph-Metadaten je Seite',
    ],
    challenges: [
      {
        challenge:
          'Marketingtexte, Referenzen und Artikel mussten sich häufig ändern lassen, ohne dass die Entwicklung eingebunden ist.',
        solution:
          'Wir haben jede Inhaltsfläche in Directus modelliert und über gemeinsame Vorlagen gerendert, sodass Veröffentlichen eine Handlung im CMS ist statt eines Deploys.',
      },
      {
        challenge:
          'Bilder von Referenzen sind schwer und würden sonst das Seitengewicht dominieren, gerade auf einer Marketing-Website, bei der der erste Eindruck von der Geschwindigkeit abhängt.',
        solution:
          'Alle Medien laufen über Directus mit WebP-Transformationen je Anfrage, sodass Seiten moderne Formate ausliefern, ohne dass jemand von Hand exportieren muss.',
      },
    ],
    gallery: [
      {
        title: 'Blog',
        caption:
          'Beiträge und Neuigkeiten, aus dem CMS heraus auf der Startseite veröffentlicht.',
      },
      {
        title: 'Leistungen',
        caption: 'Der Leistungskatalog, vom Team im CMS verfasst und sortiert.',
      },
      {
        title: 'Preise',
        caption: 'Tarife und der Weg zur Anfrage am Ende der Seite.',
      },
    ],
    techStackCategories: ['Frontend', 'Styling', 'CMS'],
  },
  'real-estate-management-system': {
    efficiency: {
      title:
        'Drei spezialisierte Agenten, jeder auf eine Aufgabe zugeschnitten.',
      body:
        'Statt einem allgemeinen Assistenten alles zu übergeben, sind CRM, Compliance und Wissensarbeit auf drei Agenten verteilt, deren Übergaben LangGraph koordiniert. Die Unterschiede der Agenturen liegen hinter CRM-Integrationen, sodass mehr als 30 Agenturen einen Ablauf teilen statt dreißig Varianten.',
      techniques: [
        'Ein Agent pro Verantwortung',
        'Klare Übergaben zwischen den Agenten',
        'Ein gemeinsamer Ablauf für über 30 Agenturen',
      ],
    },
    title: 'Real Estate Operating System',
    client: 'Vertraulich (Immobiliengruppe)',
    tagline:
      'Mandantenfähige KI-Plattform für Immobilienagenturen, mit einem Agenten pro Aufgabe',
    summary:
      'Eine mandantenfähige KI-Plattform, die Abläufe von Immobilienagenturen automatisiert. Drei spezialisierte Agenten teilen sich einen Ablauf für über 30 Agenturen.',
    description:
      'Ein einheitliches Betriebssystem für Maklerbüros, das CRM, Compliance, Marketing, Dokumentenerstellung und E-Signatur in einer mandantenfähigen Plattform zusammenführt.',
    industry: 'Immobilien',
    headline: { value: '70 %', label: 'weniger Papierarbeit' },
    problem:
      'Immobilienagenturen führten CRM, Compliance, Marketing und Dokumente über unverbundene Tools und manuelle Prozesse, und jede Agentur tat es ein wenig anders. Es gab kein gemeinsames System für Kunden und Objekte, und Verträge wurden jedes Mal neu getippt. Die Gruppe brauchte eine Plattform, die zu dreißig Agenturen passt, ohne zu dreißig Produkten zu werden.',
    approach:
      'Wir haben eine mandantenfähige Plattform mit drei spezialisierten Agenten für CRM, Compliance und Wissen gebaut, koordiniert von LangGraph, statt einem allgemeinen Assistenten alles zu übergeben. Die Unterschiede zwischen Agenturen liegen hinter CRM-Integrationen, sodass der Workflow gemeinsam bleibt; ein Marketing-Modul und eine Pipeline für Dokumentenerstellung und E-Signatur vervollständigen das Betriebssystem.',
    resultsSummary:
      'Mehr als dreißig Agenturen führen CRM, Compliance, Marketing und Papierkram heute auf einer Plattform. Mietverträge entstehen aus Vorlagen und gehen direkt zur E-Signatur, statt neu getippt zu werden, und die Agenten übernehmen die Routinearbeit, die früher in Postfächern lag. Die Menschen verbringen mehr ihres Tages mit Kunden.',
    results: [
      {
        value: '30+',
        label: 'Maklerbüros auf einer Plattform',
        detail:
          'Jede mit eigener CRM-Integration und eigenen Workflows, bereitgestellt aus einer einzigen mandantenfähigen Installation, sodass eine Verbesserung alle gleichzeitig erreicht.',
      },
      {
        value: '70 %',
        label: 'weniger Zeit für Dokumente und Verträge',
        detail:
          'Mietverträge entstehen aus Vorlagen und werden zur E-Signatur verschickt, ohne dass jemand sie neu tippt.',
      },
      {
        value: '3',
        label: 'spezialisierte KI-Agenten',
        detail:
          'CRM-, Compliance- und Wissensagenten, jeweils auf die Daten der eigenen Agentur begrenzt und von LangGraph koordiniert. Jeder macht eine Sache gut.',
      },
    ],
    architecture:
      'Ein React-Frontend spricht mit einem Backend aus Python und FastAPI, während LangGraph spezialisierte Multi-Agenten-Abläufe auf Basis von OpenAI-Modellen orchestriert. Die mandantenfähige Architektur bedient mehr als 30 Maklerbüros aus einer Plattform heraus und unterstützt dabei das jeweils eigene CRM und die eigenen Abläufe.',
    keyFeatures: [
      'CRM-Agent, der sich mit den CRMs der einzelnen Büros abgleicht',
      'Compliance-Agent für regulatorische Abläufe',
      'Wissens-Agent für Fragen zu Pipeline und Abläufen',
      'Marketingmodul für Fotografiebuchung und Prospektbestellung',
      'Berichte für Eigentümer',
      'Automatisierte Dokumentenerstellung und E-Signatur',
    ],
    challenges: [
      {
        challenge:
          'Jedes Büro nutzte ein eigenes CRM und eigene Abläufe, sodass eine feste Integration nicht alle Mandanten bedienen konnte.',
        solution:
          'Wir haben die Unterschiede hinter büro-spezifischen CRM-Integrationen gekapselt und den Agentenablauf sowie das Produkterlebnis über alle Mandanten hinweg gemeinsam gehalten.',
      },
      {
        challenge:
          'Aufgaben aus CRM, Compliance, Wissen und Dokumenten mussten zusammenspielen, ohne dass ein langer Ablauf zu einer brüchigen Kette wird.',
        solution:
          'Wir haben die Arbeit auf spezialisierte Agenten aufgeteilt und mit LangGraph deren Zuständigkeiten und Übergaben koordiniert.',
      },
    ],
    gallery: [
      {
        title: 'Vermietungspipeline',
        caption:
          'Interessenten, vom CRM-Agenten bewertet und durch Besichtigung, Angebot und Vertrag geführt.',
      },
      {
        title: 'Vertragserstellung',
        caption:
          'Mietverträge, aus Vorlagen erzeugt und zur elektronischen Unterschrift versandt.',
      },
      {
        title: 'KI-Agenten',
        caption:
          'Agenten für CRM, Compliance und Wissen, begrenzt auf die Daten des jeweiligen Büros.',
      },
    ],
    techStackCategories: ['Frontend', 'Backend', 'KI', 'Architektur'],
  },
  'qa-compliance-agent': {
    efficiency: {
      title: 'Jede Feststellung verweist auf die Klausel, aus der sie stammt.',
      body:
        'Jede Prüfung stützt sich auf den Normen-Datensatz und wird als nachverfolgte Änderung auf Klauselebene mit Erläuterung zurückgegeben, sodass eine Prüferin die Feststellung an Ort und Stelle verifizieren kann. Ein wiederholbarer Ablauf bewertet jeden Bericht nach denselben Normen und derselben Ausgabestruktur.',
      techniques: [
        'Gestützt auf einen Normen-Datensatz',
        'Nachvollziehbare Feststellungen auf Klauselebene',
        'Ein wiederholbarer Prüfablauf',
      ],
    },
    title: 'Agent für Compliance-Prüfung',
    client: 'Vertraulich (Wirtschaftsprüfung)',
    tagline:
      'KI-Compliance-Prüfer, dessen Feststellungen jeweils ihre Klausel nennen',
    summary:
      'Ein KI-Agent, der Berichte gegen einen Normen-Datensatz prüft und nachverfolgte Änderungen auf Klauselebene liefert, die ein Mensch verifizieren kann.',
    description:
      'Ein KI-gestützter Prüfablauf, der hochgeladene Berichte gegen etablierte Normen abgleicht und Änderungsverfolgung auf Klauselebene zurückgibt, mit einer klaren Begründung zu jeder Feststellung.',
    industry: 'Prüfung und Compliance',
    headline: { value: '2x', label: 'schnellere Dokumentenprüfung' },
    problem:
      'Compliance- und Prüfungsreviews gegen etablierte Standards liefen von Hand. Jeder Bericht dauerte etwa eine Woche, und zwei Prüfende konnten beim selben Dokument zu unterschiedlichen Schlüssen kommen. Die Kanzlei wollte schnellere und konsistente Reviews, war gegenüber KI in der Prüfungsarbeit aber zu Recht skeptisch und hätte keine Befunde akzeptiert, die sie nicht nachprüfen kann.',
    approach:
      'Wir haben einen Agenten gebaut, der hochgeladene Berichte gegen den Standards-Datensatz der Kanzlei prüft und einen Befundbericht als Änderungen auf Klauselebene zurückgibt, jeweils mit schriftlicher Begründung und dem zitierten Standard. Wir haben mit einem kleinen Pilotprojekt begonnen, die Begründung hinter jedem Befund gezeigt und erst erweitert, als die Prüfenden der Kanzlei zufrieden waren.',
    resultsSummary:
      'Reviews, die eine Woche dauerten, dauern jetzt etwa die Hälfte, und jeder Befund verweist auf die Klausel und den Standard dahinter. Prüfende verbringen ihre Zeit mit Ermessensentscheidungen statt mit der Suche nach dem Absatz, der ein Problem ausgelöst hat, und weil jeder Bericht denselben Workflow durchläuft, sind die Ergebnisse zwischen Prüfenden vergleichbar.',
    learning:
      'Das Pilotprojekt war zugleich Training. Die Prüfenden lernten, die Befunde des Agenten als Behauptungen zu behandeln, die zu prüfen sind, nicht als Urteile, die zu übernehmen sind, und das Format auf Klauselebene machte diese Prüfung schnell. Aus Skepsis gegenüber KI in der Prüfungsarbeit wurde eine Arbeitsregel: Sie ist genau dort nützlich, wo ihre Begründung sichtbar ist.',
    results: [
      {
        value: '2x',
        label: 'schnellere Dokumentenprüfung',
        detail:
          'Die Bearbeitungszeit eines Compliance-Berichts fiel von etwa einer Woche auf ungefähr die Hälfte, und die Prüfenden treffen weiterhin die endgültige Entscheidung.',
      },
      {
        value: '100 %',
        label: 'der Feststellungen einer Klausel zugeordnet',
        detail:
          'Jeder kommt als nachverfolgte Änderung mit dem zitierten Standard und einer schriftlichen Erklärung an, sodass Prüfende ihn an Ort und Stelle verifizieren können.',
      },
      {
        value: '1',
        label: 'Prüfmaßstab für jeden Bericht',
        detail:
          'Derselbe Workflow bewertet jedes Dokument, sodass die Ergebnisse zwischen Prüfenden konsistent und über Berichte hinweg vergleichbar sind.',
      },
    ],
    architecture:
      'Ein auf AWS betriebenes Backend aus Python und FastAPI übernimmt das Einlesen der Berichte und den Abgleich mit dem Normendatensatz. Claude erzeugt Prüfung und Kommentare und gibt Feststellungen zurück, die einzelnen Klauseln zugeordnet sind, für einen nachvollziehbaren Prüfablauf.',
    keyFeatures: [
      'Upload von Berichten und Abgleich mit einem Normendatensatz',
      'Feststellungen als Änderungsverfolgung auf Klauselebene',
      'KI-erzeugte Kommentare zu jeder Feststellung',
      'Einheitliche, wiederholbare Prüflogik über alle Berichte hinweg',
    ],
    challenges: [
      {
        challenge:
          'Allgemein gehaltene KI-Rückmeldungen waren nicht präzise genug für Prüferinnen und Prüfer, die genau sehen mussten, welche Klausel eine Feststellung ausgelöst hat.',
        solution:
          'Wir haben jede Prüfung im Normendatensatz verankert und Feststellungen als Änderungsverfolgung mit angehängter Begründung zurückgegeben.',
      },
      {
        challenge:
          'Die Einschätzung der Prüfenden schwankte zwischen Berichten, was Ergebnisse schwer vergleichbar machte und die abschließende Freigabe verzögerte.',
        solution:
          'Wir haben die Prüfung als wiederholbaren Agentenablauf festgeschrieben, sodass jeder Bericht gegen dieselben Normen und dieselbe Ausgabestruktur bewertet wird.',
      },
    ],
    gallery: [
      {
        title: 'Prüf-Warteschlange',
        caption:
          'Dokumente, in Klauseln zerlegt und gegen die ausgewählten Normen geprüft.',
      },
      {
        title: 'Feststellungsbericht',
        caption:
          'Feststellungen nach Schweregrad, exportierte Änderungen und Kommentare am Rand.',
      },
      {
        title: 'Normenbibliothek',
        caption:
          'Die Absätze, auf die sich jede Feststellung beruft, samt der eigenen Auslegung der Kanzlei.',
      },
    ],
    techStackCategories: ['Backend', 'Cloud', 'KI'],
  },
  'ai-interview-assistant': {
    efficiency: {
      title: 'Sprache und Transkription teilen sich eine Echtzeit-Sitzung.',
      body:
        'Das Interview und sein Transkript laufen in derselben OpenAI-Realtime-Sitzung, nicht als zwei getrennte Durchgänge über die Aufnahme. Meeting-Links, Einladungen und die Transkript-E-Mail folgen automatisch, sodass nach dem Ende einer Sitzung kein manueller Schritt bleibt.',
      techniques: [
        'Eine Sitzung für Sprache und Transkript',
        'Kein zweiter Durchgang über die Aufnahme',
        'Nachbereitung durchgängig automatisiert',
      ],
    },
    title: 'Sprachassistent für Interviews in Echtzeit',
    client: 'Vertraulich (Personalvermittlung)',
    tagline: 'Live-KI-Sprachinterviews, mit Transkript in derselben Sitzung',
    summary:
      'Eine durchgängige KI-Interviewplattform. Sprache und Transkription laufen in einer Echtzeit-Sitzung, ohne manuelle Schritte danach.',
    description:
      'Eine durchgängige Interviewplattform, die Live-KI-Sprachinterviews plant, terminiert und durchführt und das Transkript nach Ende der Sitzung automatisch zustellt.',
    industry: 'Personalvermittlung',
    headline: { value: '30+', label: 'Interviews abgeschlossen' },
    problem:
      'Strukturierte Interviews in großer Zahl zu führen, ob allgemein, im Podcast-Stil oder für Recruiting, bedeutete: Jemand plante jede Sitzung, jemand moderierte sie live, jemand kümmerte sich danach um das Transkript. Das Format war wiederholbar, der Aufwand drumherum nicht. Der Kunde brauchte Interviews, die von der Einladung bis zum Transkript von selbst laufen.',
    approach:
      'Wir haben eine Plattform gebaut, auf der Nutzer Interviewtyp, Beschreibung, Stil sowie ein eigenes Intro oder Outro wählen. Sie führt das Interview live über die OpenAI Realtime API, erstellt das Transkript in derselben Sitzung, generiert Meeting-Links und Einladungen, unterstützt mehrere Kandidaten und Lebensläufe in Recruiting-Runden und verschickt das Transkript per E-Mail, sobald die Sitzung endet.',
    resultsSummary:
      'Interviews, die eine Planung, eine Moderation und eine Transkription brauchten, laufen jetzt durchgängig von selbst. Das Recruiting-Team legt Format und Fragen fest; die Plattform bucht, führt und dokumentiert die Sitzung, und Praktikums-Recruiting-Runden werden für alle Kandidaten nach derselben Rubrik bewertet.',
    results: [
      {
        value: '30+',
        label: 'Interviews auf der Plattform geführt',
        detail:
          'Praktikums-Recruiting-Runden laufen live über den KI-Interviewer, jede Kandidatin und jeder Kandidat nach derselben Rubrik bewertet.',
      },
      {
        value: '3',
        label: 'Interviewformate',
        detail:
          'Allgemeine, Podcast- und Recruiting-Sitzungen, jeweils mit eigener Beschreibung, eigenem Stil, Intro und Outro.',
      },
      {
        value: '0',
        label: 'manuelle Schritte nach Ende einer Sitzung',
        detail:
          'Das Transkript entsteht live und wird automatisch per E-Mail verschickt, wenn das Interview endet. Niemand tippt eine Sitzung ab.',
      },
    ],
    architecture:
      'Next.js trägt Frontend und Backend und hält damit Einrichtung, Einladungen und Zustellung nach der Sitzung in einer Anwendung. Die OpenAI Realtime API führt das Live-Sprachgespräch und die Transkription, einschließlich Bewerbungssitzungen mit mehreren Kandidatinnen, Kandidaten und Lebensläufen.',
    keyFeatures: [
      'Interviewarten allgemein, podcastartig und Bewerbung',
      'Eigene Interviewbeschreibung, Stil, Einleitung und Abschluss',
      'Live-Sprachinterview mit Transkription in Echtzeit',
      'Unterstützung mehrerer Bewerbender und Lebensläufe je Sitzung',
      'Automatische Erzeugung von Meeting-Links und Einladungen',
      'Automatische Zustellung des Transkripts per E-Mail nach dem Interview',
    ],
    challenges: [
      {
        challenge:
          'Ein Live-Interview musste gesprochenes Gespräch und Transkript über die gesamte Sitzung hinweg synchron halten.',
        solution:
          'Wir nutzen die OpenAI Realtime API sowohl für das Sprachinterview als auch für die Live-Transkription, sodass beides in derselben Echtzeitsitzung läuft.',
      },
      {
        challenge:
          'Bewerbungsinterviews mussten mehrere Kandidatinnen, Kandidaten und Lebensläufe unterstützen, ohne deren Kontext zu vermischen.',
        solution:
          'Wir haben Bewerbungssitzungen um kandidatenspezifische Eingaben herum strukturiert und Terminplanung, Einladungen und Transkriptzustellung in einem Ablauf gehalten.',
      },
    ],
    gallery: [
      {
        title: 'Bewerbende',
        caption:
          'Jede Runde nach demselben Raster bewertet, mit Live-Sitzungen einen Klick entfernt.',
      },
      {
        title: 'Interviewbericht',
        caption:
          'Bewertungen nach Raster, Höhepunkte mit Zeitstempel und eine Empfehlung zur Durchsicht.',
      },
      {
        title: 'Einrichtung der Rolle',
        caption:
          'Fragestruktur, adaptive Nachfragen und Spracheinstellungen je Rolle.',
      },
    ],
    techStackCategories: ['Frontend & Backend', 'KI'],
  },
  snobbots: {
    efficiency: {
      title:
        'Jede Antwort stammt aus den Inhalten eines Shops, und aus nichts anderem.',
      body:
        'Embeddings sind in Pinecone pro Mandant getrennt, sodass der Abruf nur den Namespace des anfragenden Shops erreichen kann. Das Modell arbeitet mit einer einzigen Wissensbasis, wodurch die Antworten in den Inhalten dieses Shops verankert bleiben. Die Bereitstellung ist automatisiert, sodass Reseller Shops gebündelt statt einzeln einrichten.',
      techniques: [
        'Abruf auf einen Namespace begrenzt',
        'Antworten aus den eigenen Inhalten des Shops',
        'Gebündelte Bereitstellung statt Handarbeit',
      ],
    },
    tagline:
      'KI-Support-Agenten für Onlineshops, die nur aus dem eigenen Shop antworten',
    summary:
      'Eine mandantenfähige KI-Chatbot-Plattform. Der Abruf ist auf die Inhalte eines Shops begrenzt, und neue Shops werden gebündelt eingerichtet.',
    description:
      'Wiederverkäufer richten KI-Support-Agenten für ihre Shops in großer Zahl ein, wobei jeder Mandant getrennt ist und jede Antwort in den Inhalten des jeweiligen Shops verankert wird.',
    industry: 'E-Commerce / Kundenservice',
    headline: { value: '60 %', label: 'schnellere Shop-Einrichtung' },
    problem:
      'Reseller wollten ihren Shops KI-Support-Agenten anbieten, aber jede Installation war maßgeschneidert, sodass das Onboarding eines Shops Tage manueller Einrichtung kostete. Schlimmer noch: Ein gemeinsamer Index barg das Risiko, dass Inhalte eines Shops in den Antworten eines anderen auftauchen. Die Plattform musste Shops in großer Zahl einrichten und das Wissen jedes Shops strikt bei ihm belassen.',
    approach:
      'Wir haben eine mandantenfähige MERN-Plattform gebaut, auf der jeder Shop seinen eigenen kontextbewussten Agenten betreibt. Embeddings sind in Pinecone pro Mandant partitioniert, sodass die Suche nur den Namespace des anfragenden Shops erreicht, und Antworten sind in Katalog, Bestellungen und Richtlinien dieses Shops verankert. Darüber liegt eine automatisierte Bereitstellung, mit der Reseller Shops aus einem Verwaltungs-Dashboard in großer Zahl einrichten.',
    resultsSummary:
      'Reseller richten Support-Agenten für ihre Shops jetzt in großer Zahl ein statt eine maßgeschneiderte Installation nach der anderen. Jeder Bot antwortet nur aus den Inhalten seines eigenen Shops und übergibt an einen Menschen, wenn er ein Gespräch nicht abschließen kann. Kunden bekommen fundierte Antworten, und Shop-Betreiber behalten das letzte Wort.',
    results: [
      {
        value: '60 %',
        label: 'schnelleres Onboarding je Shop',
        detail:
          'Automatisierte Bereitstellung hat aus einer tagelangen manuellen Einrichtung einen Massenvorgang gemacht, den ein Reseller aus dem Dashboard startet.',
      },
      {
        value: '1',
        label: 'isolierter Namensraum je Shop',
        detail:
          'Embeddings sind in Pinecone pro Mandant partitioniert, sodass kein Bot je Inhalte eines anderen Shops ausgeben kann.',
      },
      {
        value: '100 %',
        label: 'der Antworten aus den Inhalten des eigenen Shops',
        detail:
          'Die Suche läuft über Katalog, Bestell-API und Richtlinien, die der Reseller für diesen Bot freigegeben hat, und über nichts außerhalb davon.',
      },
    ],
    architecture:
      'MERN: React, eine API aus Express und Node.js und MongoDB für Mandanten- und Gesprächsdaten. Pinecone hält die Embeddings je Mandant, sodass der Abruf auf die Wissensbasis eines Shops begrenzt ist und die Bereitstellung ohne manuelle Einrichtung läuft.',
    keyFeatures: [
      'Mandantenfähige Architektur mit getrennten Agenten',
      'RAG für kontextbewusste, geschäftsspezifische Antworten',
      'Automatisierte Bereitstellung vieler Bots auf einmal',
      'Verwaltungs-Dashboard für Wiederverkäufer',
      'Einbettbares Support-Widget',
    ],
    challenges: [
      {
        challenge:
          'Der Abruf über einen gemeinsamen Vektorindex brachte Inhalte eines Shops in den Antworten eines anderen zum Vorschein.',
        solution:
          'Wir haben die Embeddings in Pinecone je Mandant partitioniert, sodass der Abruf immer nur den Namensraum des anfragenden Shops erreichen kann.',
      },
      {
        challenge:
          'Die manuelle Einrichtung je Shop machte das Onboarding der Wiederverkäufer zum Engpass für Wachstum.',
        solution:
          'Wir haben die Bereitstellung durchgängig automatisiert und damit aus einem mehrtägigen manuellen Vorgang eine Massenoperation gemacht.',
      },
    ],
    gallery: [
      {
        title: 'Übergabe-Postfach',
        caption:
          'Gespräche, die der Bot nicht abschließen konnte, mit Bestellung und Kunde daneben.',
      },
      {
        title: 'Wissensbasis',
        caption:
          'Katalog, Bestell-API und Richtlinien, aus denen jeder Bot antworten darf.',
      },
      {
        title: 'Shop-Widget',
        caption: 'Der Kundenchat erscheint im Shop des Kunden.',
      },
    ],
    techStackCategories: ['Frontend', 'Backend', 'Datenbank', 'KI'],
  },
  'ai-physiotherapy': {
    efficiency: {
      title:
        'Regeln passen den Plan täglich an. Das Modell übernimmt, was Urteilsvermögen braucht.',
      body:
        'Tägliche Protokolle speisen Regeln für Steigerung und Rücknahme, sodass sich der Plan automatisch anpasst, statt auf eine manuelle Durchsicht zu warten. KI kommt dort zum Einsatz, wo sie sich lohnt: bei der Aufnahme, bei der Planerstellung auf Basis hochgeladener Fachartikel und beim Feedback zu Übungsvideos.',
      techniques: [
        'Steigerung und Rücknahme nach Regeln',
        'Pläne auf Basis hochgeladener Fachartikel',
        'KI-Feedback zu eingereichten Videos',
      ],
    },
    title: 'KI-Assistent für Physiotherapie',
    client: 'Vertraulich (Gesundheitswesen)',
    tagline:
      'KI-Reha-Assistent, dessen Pläne sich täglich nach Regeln anpassen',
    summary:
      'Eine Full-Stack-KI-Plattform für adaptive Rehabilitation. Tägliche Protokolle passen den Plan automatisch an, und KI übernimmt Aufnahme, Pläne und Video-Feedback.',
    description:
      'Ein durchgängiger Rehabilitationsverlauf von der Aufnahme über die Bewegungsanalyse und adaptive Trainingsplanung bis zu täglichem Fortschritt und KI-gestütztem Videofeedback.',
    industry: 'Gesundheitswesen',
    headline: { value: '90 %+', label: 'genaue Bewegungsanalysen' },
    problem:
      'Der Rehabilitationsweg war zerstückelt: manuelle Aufnahme, eine Bewegungsanalyse, ein generischer Übungsplan und seltene Nachkontrollen. Zwischen den betreuten Sitzungen hatten Patientinnen und Patienten kaum Anleitung, und Pläne reagierten nicht, wenn jemand Fortschritte machte oder Mühe hatte. Die Genesung musste ein zusammenhängender Weg werden, der sich jeden Tag anpasst.',
    approach:
      'Wir haben den Weg von Anfang bis Ende gebaut: einen Aufnahme-Agenten, eine geführte Bewegungsanalyse mit Anleitungsvideos, automatische Erstellung von Übungsplänen auf Basis hochgeladener Fachartikel zu Verletzungen, tägliches Protokollieren und KI-Feedback zu hochgeladenen Übungsvideos. Steigerung und Rücknahme sind Regeln, die vom Tagesprotokoll gesteuert werden; das Modell kommt dort zum Einsatz, wo Urteilsvermögen gefragt ist: bei Aufnahme, Planerstellung und Videofeedback.',
    resultsSummary:
      'Patientinnen und Patienten haben jetzt jeden Tag Anleitung, nicht nur in betreuten Sitzungen. Der Plan passt sich daran an, wie sie tatsächlich abgeschnitten haben, Feedback zur Ausführung kommt zu den Clips, die sie hochladen, und die Therapeutin prüft Gelenkwinkel und Korrekturen, statt zu raten, was zwischen den Terminen passiert ist.',
    results: [
      {
        value: '90 %+',
        label: 'Genauigkeit bei Bewegungs- und Ausführungsprüfungen',
        detail:
          'Die Posenanalyse hochgeladener Clips liefert Gelenkwinkel und korrigierendes Feedback, das die Therapeutin prüfen kann, bevor es die Patientin erreicht.',
      },
      {
        value: '8 Wochen',
        label: 'Plan, täglich angepasst',
        detail:
          'Tagesprotokolle steuern Steigerung oder Rücknahme automatisch, statt auf den nächsten Termin zu warten.',
      },
      {
        value: '1',
        label: 'durchgehender Weg von der Aufnahme bis zur Genesung',
        detail:
          'Aufnahme-Agent, Analyse, Plan, tägliches Protokoll und KI-Videofeedback ersetzen vier unverbundene Schritte.',
      },
    ],
    architecture:
      'Ein React-Frontend verbindet sich mit einem Backend aus Python und FastAPI. LangChain koordiniert Aufnahme, Analysekontext und Planerstellung, während OpenAI die adaptive Anleitung erzeugt. Hochgeladene Videos fließen in die Ausführungsanalyse, und hochgeladene Fachartikel zu Verletzungen liefern das Quellenmaterial für die Planerstellung.',
    keyFeatures: [
      'Aufnahme-Agent, der den Patientenverlauf startet',
      'Bewegungsanalyse mit Anleitungsvideos und Tutorials',
      'Automatische Erstellung von Trainingsplänen',
      'Tägliche Einträge mit automatischer Steigerung oder Reduktion',
      'Ausführungsanalyse hochgeladener Videos mit KI-Feedback',
      'Planerstellung auf Basis hochgeladener Fachartikel zu Verletzungen',
    ],
    challenges: [
      {
        challenge:
          'Statische Trainingspläne konnten nicht reagieren, wenn sich die tägliche Leistung verbesserte oder verschlechterte.',
        solution:
          'Wir haben die täglichen Einträge mit Regeln für Steigerung und Reduktion verbunden, sodass sich der Plan automatisch anpasst, statt auf eine manuelle Durchsicht zu warten.',
      },
      {
        challenge:
          'Die Planerstellung brauchte verletzungsspezifischen Kontext, statt sich auf allgemeines Modellwissen zu verlassen.',
        solution:
          'Wir haben hochgeladene Artikel zu häufigen Verletzungen für den Erstellungsablauf verfügbar gemacht, sodass Empfehlungen auf einschlägiges Quellenmaterial zurückgreifen können.',
      },
    ],
    gallery: [
      {
        title: 'Bewegungsanalyse',
        caption:
          'Haltungsanalyse an einem hochgeladenen Clip, mit Gelenkwinkeln und Rückmeldung zur Ausführung.',
      },
      {
        title: 'Achtwochenplan',
        caption:
          'Phasen, die Einheiten dieser Woche und jede Anpassung samt Begründung.',
      },
      {
        title: 'Ansicht für Behandelnde',
        caption:
          'Patientinnen und Patienten nach Dringlichkeit, mit KI-Planänderungen zur Freigabe.',
      },
    ],
    techStackCategories: ['Frontend', 'Backend', 'KI'],
  },
  'new-web-order': {
    efficiency: {
      title:
        'Jede Route liefert nur den Code und die Bilder aus, die sie braucht.',
      body:
        'Routen werden vorgerendert, wo der Inhalt es erlaubt, JavaScript wird pro Route aufgeteilt, und nur das Bild im sichtbaren Bereich wird priorisiert. Die Seiten laden 40 % schneller und ohne Layoutverschiebung durch Bilder, weil das Rendern einmal beim Build geschieht statt bei jedem Besuch.',
      techniques: [
        'Einmal vorgerendert, vielfach ausgeliefert',
        'Code pro Route aufgeteilt',
        'Nur das erste Bild priorisiert',
      ],
    },
    tagline:
      'Unternehmenswebsite, neu gebaut, damit jede Seite nur das Nötige lädt',
    summary:
      'Eine Unternehmenswebsite für Performance und SEO. Vorgerenderte Routen und Code pro Route lassen Seiten 40 % schneller laden.',
    description:
      'Eine Unternehmenswebsite, auf Next.js neu gebaut für Tempo und Suche. 40 % schneller, und endlich mit guten Rankings.',
    industry: 'Professionelle Dienstleistungen',
    headline: { value: '40 %', label: 'schneller ladende Seiten' },
    problem:
      'Die Website des Unternehmens lud langsam und rankte schlecht, sodass Anfragen verloren gingen, bevor Besucher das Angebot überhaupt sahen. Sie musste beim ersten Besuch schnell sein, in der Suche auffindbar und so gebaut, dass jede Seite irgendwohin führt.',
    approach:
      'Wir haben die Website mit Next.js, TypeScript und Tailwind neu gebaut und dann das Performance-Budget abgearbeitet: Routen vorgerendert, wo der Inhalt es erlaubt, JavaScript pro Route aufgeteilt, Bilder über next/image mit expliziten Abmessungen ausgeliefert und nur das Bild im sichtbaren Bereich priorisiert, dazu SEO-Metadaten auf jeder Route.',
    resultsSummary:
      'Die neue Website lädt 40 % schneller, rankt für die Begriffe, mit denen das Unternehmen verkauft, und hat auf jeder Route eine Anfrage innerhalb eines Scrolls. Besucher sehen das Angebot, bevor sie Gelegenheit haben zu gehen, und die Rendering-Arbeit wird einmal beim Build erledigt statt bei jedem Besuch.',
    results: [
      {
        value: '40 %',
        label: 'schnellere Seitenladezeiten',
        detail:
          'Statisches Rendering zuerst, Code-Splitting pro Route und optimierte Bilder, damit schon der erste Besuch der schnelle ist.',
      },
      {
        value: '100 %',
        label:
          'der Routen erreichen den Handlungsaufruf in einem Scrollvorgang',
        detail:
          'Jede Seite führt Besucher vom Angebot zur Anfrage, ohne dass sie suchen müssen.',
      },
      {
        value: '0',
        label: 'Layoutverschiebung durch Bilder',
        detail:
          'Alle Bilder laufen über next/image mit expliziten Abmessungen und modernen Formaten, sodass beim Laden nichts springt.',
      },
    ],
    architecture:
      'Static-First-Build mit dem Next.js App Router. Routen werden vorgerendert, wo die Inhalte es zulassen, Bilder laufen über next/image mit expliziten Maßen, und JavaScript wird je Route aufgeteilt, um die anfängliche Last klein zu halten.',
    keyFeatures: [
      'Static-First-Rendering für schnelles erstes Bild',
      'Code-Splitting auf Routenebene',
      'Optimierte Bilder ohne Layoutsprünge',
      'SEO-Metadaten über alle Routen',
      'Vollständig responsives Layout',
    ],
    challenges: [
      {
        challenge:
          'Große Marketingbilder dominierten das Seitengewicht und verzögerten das erste Bild.',
        solution:
          'Wir haben alle Bilder auf next/image mit expliziten Maßen und modernen Formaten umgestellt und nur das Hero-Bild oberhalb der Falz priorisiert.',
      },
    ],
    gallery: [
      {
        title: 'Projekte',
        caption: 'Die Projektübersicht, neu gebaute Seiten.',
      },
      {
        title: 'Leistungen',
        caption: 'Leistungsseiten, aus strukturierten Inhalten erzeugt.',
      },
      {
        title: 'Über uns',
        caption: 'Die Unternehmensseite auf demselben Layoutsystem.',
      },
    ],
    techStackCategories: ['Frontend', 'Styling'],
  },
  'bank-islami-pep': {
    efficiency: {
      title:
        'Eine Scoring-Pipeline liest die Nachrichten. Analysten sehen nur glaubwürdige Treffer.',
      body:
        'Der Abgleich ist eine Scoring-Pipeline über Namensvarianten, Transliterationen, Funktion und Stadt. Nur Treffer über einer Konfidenzschwelle erreichen die Prüfwarteschlange, jeweils mit genau den Feldern, die übereinstimmten, sodass Analysten ihre Zeit für Entscheidungen nutzen. Die morgendliche Sichtung sank von vier Stunden auf 30 Minuten.',
      techniques: [
        'Geplanter Crawl, bevor das Team eintrifft',
        'Konfidenzschwelle vor der menschlichen Prüfung',
        'Jeder Treffer zeigt, warum er passt',
      ],
    },
    title: 'BankIslami PEP-Screening',
    client: 'BankIslami, umgesetzt mit Aawaz AI',
    tagline:
      'Tägliches PEP-Medienscreening, das Analysten nur glaubwürdige Treffer zeigt',
    summary:
      'Eine interne Web- und Mobilplattform, die jeden Morgen die Nachrichten liest, sie gegen die PEP-Liste der Bank bewertet und daraus einen Risikobericht erstellt.',
    description:
      'Banken müssen politisch exponierte Personen und ihr Umfeld laufend überwachen, nicht nur beim Onboarding. Bei BankIslami hieß das: Analystinnen und Analysten öffneten jeden Morgen Dutzende Nachrichtenseiten und suchten Hunderte Namen von Hand. Wir haben eine durchgängige Screening-Plattform gebaut: einen Crawler, der die Finanz- und Politiknachrichten des Tages abruft, eine Matching-Engine, die Artikel mit den PEP-Datensätzen der Bank verknüpft, und einen Prüfprozess, der in einem signierten täglichen Risikobericht endet. Ausgeliefert als MERN-Webanwendung für Analysten am Schreibtisch und als native Mobile-App für Compliance-Beauftragte unterwegs.',
    industry: 'Banken / Compliance',
    headline: { value: '38', label: 'Nachrichtenquellen täglich geprüft' },
    problem:
      'Aufsichtsbehörden erwarten, dass Banken politisch exponierte Personen so lange prüfen, wie die Geschäftsbeziehung besteht. Das Compliance-Team von BankIslami tat das von Hand: ein Vormittag über Nachrichtenseiten, Gerichtslisten und Amtsblätter, auf der Suche nach über tausend Namen, dann Befunde in eine Tabelle kopiert. Meldungen wurden übersehen, der Bericht kam erst am Nachmittag, und niemand konnte einer Prüferin zeigen, wie ein Name geprüft worden war. Das Screening musste vollständig, früh und belegbar werden.',
    approach:
      'Gemeinsam mit Aawaz AI haben wir bei den Quellen angefangen, nicht beim Interface: ein geplanter Crawler, der um 06:00 Uhr jedes relevante pakistanische und internationale Medium abruft, die Artikel normalisiert und speichert. Eine Scoring-Pipeline gleicht jeden Artikel über Namensvarianten, Transliterationen, Rolle und Stadt mit der PEP-Liste der Bank ab, und nur Treffer über einer Konfidenzschwelle erreichen eine Analystin, jeweils mit den Feldern, die übereinstimmten. Prüfwarteschlange, Risikoprofile und der signierte Tagesbericht wurden einmal als Komponentensatz gebaut und für Browser, iOS und Android ausgeliefert.',
    resultsSummary:
      'Das Compliance-Team beginnt den Tag jetzt mit einem fertigen Bericht statt mit einem Vormittag Suche. Jedes relevante Medium ist gelesen, bevor jemand eintrifft, Analysten verbringen ihre Zeit mit Entscheidungen statt mit Suchen, und jede Entscheidung zu einem Namen ist so dokumentiert, dass man sie einer Prüferin zeigen kann. Das Modell liest; der Mensch entscheidet.',
    learning:
      'Compliance heißt, die eigene Begründung zeigen zu können, und so wurde das Produkt vom ersten Sprint an gebaut. Jeder Treffer erklärt sich selbst, sodass die Analysten schnell lernten, welchen Signalen sie vertrauen und welche sie hinterfragen, und nichts wurde ausgeliefert, was das Team einer Prüferin nicht hätte erklären können.',
    results: [
      {
        value: '38',
        label: 'Quellen geprüft, bevor das Team eintrifft',
        detail:
          'Rund 200 Artikel pro Tag werden ab 06:00 Uhr gecrawlt, normalisiert und mit der PEP-Liste abgeglichen, bevor sich die erste Analystin anmeldet.',
      },
      {
        value: '30 Min.',
        label: 'morgendliche Triage statt vier Stunden',
        detail:
          'Analysten bestätigen oder verwerfen bewertete Treffer mit Kundendatensatz und Artikel nebeneinander, statt von Hand zu suchen.',
      },
      {
        value: '07:30',
        label: 'Uhr, täglicher Risikobericht zugestellt',
        detail:
          'Wo er früher am Nachmittag ankam, jetzt mit vollständigem Prüfpfad pro Name und Zustellung an Compliance und Risk.',
      },
      {
        value: '1.240',
        label: 'Konten laufend überwacht',
        detail: 'PEP- und verbundene Konten, die jeden Tag über Web und Mobile geprüft werden, keines davon an einem vollen Vormittag übersprungen.',
      },
    ],
    architecture:
      'Ein MERN-Stack: React mit Vite und Tailwind für das Analysten-Dashboard, React Native für die Mobile-App und eine Express-API über MongoDB, die beide bedient. Ein BullMQ-Worker auf Redis führt den Crawl um 06:00 Uhr aus und ruft Quellen mit Puppeteer ab, wo Seiten clientseitig gerendert werden, sonst mit Cheerio. Das Matching ist eine Bewertungspipeline über Namensvarianten, Transliterationen, Rolle und Stadt mit einem Konfidenzschwellwert, der Treffer in die Prüfwarteschlange leitet. Bestätigte Funde fließen in einen serverseitig erzeugten PDF-Bericht, der per E-Mail und Push-Benachrichtigung zugestellt wird.',
    keyFeatures: [
      'Geplanter täglicher Crawl von Nachrichten-, Aufsichts- und Gerichtsquellen',
      'Namensabgleich mit Transliteration und Alias-Behandlung',
      'Risikowert pro Person aus Adverse Media, Rechtsstreitigkeiten und Sanktionssignalen',
      'Prüfwarteschlange mit Kundendatensatz und Artikel nebeneinander',
      'Eskalation an den Geldwäschebeauftragten mit vollständigem Prüfpfad',
      'Generierter täglicher Risikobericht als signiertes PDF',
      'Mobile-App mit Push-Alarmen bei Hochrisiko-Treffern',
      'Rollenbasierter Zugriff für Analysten, Prüfer und Management',
    ],
    challenges: [
      {
        challenge:
          'Namen aus dem Urdu werden auf viele Arten ins Englische transliteriert; ein strenger Abgleich übersah echte Meldungen, ein lockerer begrub die Analysten unter Fehltreffern.',
        solution:
          'Eine Bewertungspipeline gewichtet Namensvarianten gegen Rolle, Stadt und bekannte Kontakte, und jeder Treffer über dem Schwellwert zeigt genau, welche Felder übereinstimmten.',
      },
      {
        challenge:
          'Nachrichtenseiten ändern ihr Markup ohne Vorwarnung, und ein stiller Ausfall bedeutete, dass eine Quelle im Morgenbericht fehlte.',
        solution:
          'Jede Quelle hat einen Gesundheitscheck und eine Artikelzahl als Referenz; ein Crawl mit deutlich weniger Ergebnissen als üblich wiederholt sich und markiert die Quelle im Dashboard als verzögert, statt unbemerkt durchzulaufen.',
      },
      {
        challenge:
          'Die Bank brauchte dasselbe Screening auf dem Telefon für Beauftragte, die selten am Schreibtisch sind, ohne zwei Produkte zu pflegen.',
        solution:
          'Die Screens wurden einmal als gemeinsamer Komponentensatz entworfen und von einer API bedient, sodass Web-Dashboard und React-Native-App immer dieselben Daten und dieselben Entscheidungen zeigen.',
      },
    ],
    gallery: [
      {
        title: 'Prüfwarteschlange',
        caption:
          'Kundendatensatz und Artikel nebeneinander, sodass ein Namenstreffer in Sekunden bestätigt oder verworfen wird.',
      },
      {
        title: 'Täglicher Risikobericht',
        caption:
          'Die Funde des Morgens als signiertes PDF, mit Bewegung der Risikowerte und Zustellung an Compliance und Risiko.',
      },
      {
        title: 'Quellen',
        caption:
          'Jeder Nachrichtenfeed, jede Aufsichtsbehörde und Gerichtsliste, die der Crawler liest, mit dem Status des letzten Laufs.',
      },
    ],
    techStackCategories: [
      'Web-App',
      'Mobile-App',
      'Styling',
      'Backend',
      'Crawling',
      'Jobs',
      'Auth & Berichte',
    ],
  },
  'bidnest-mobile': {
    efficiency: {
      title: 'Drei Plattformen aus einem Build, ohne etwas nativ neu zu bauen.',
      body:
        'Die bestehende Webanwendung wird mit Capacitor verpackt, statt zweimal neu geschrieben zu werden. Bieten, Nachrichten und Bezahlen sind derselbe Code im Web, auf iOS und auf Android, sodass eine Korrektur drei Plattformen zugleich erreicht.',
      techniques: [
        'Eine Codebasis für Web, iOS und Android',
        'Keine Funktion nativ neu gebaut',
        'Eine Korrektur, drei Plattformen',
      ],
    },
    title: 'Bidnest Mobile App',
    client: 'Vertraulich (Marktplatz für Studierendenwohnungen)',
    tagline: 'Der Bieter-Marktplatz auf iOS und Android, aus einer Codebasis',
    summary:
      'Der Bidnest-Marktplatz, mit Capacitor verpackt, sodass drei Plattformen aus einem Build entstehen, ohne etwas neu zu bauen.',
    description:
      'Dieselbe Codebasis, die die Bidnest-Webplattform betreibt, mit Capacitor zu nativen iOS- und Android-Apps verpackt. Ein Team liefert die Webplattform und beide App Stores aus einem einzigen Repository, und jeder Ablauf des Marktplatzes funktioniert innerhalb der nativen Hülle, ohne neu gebaut zu werden.',
    industry: 'Immobilientechnologie',
    headline: { value: '3', label: 'Plattformen aus einem Build' },
    problem:
      'Studierende leben am Handy. Ein Gebot vom Laptop kann während einer Vorlesung überboten werden, und ein Browser-Tab weckt niemanden auf. Den Marktplatz gab es bereits im Web, und zwei native Apps von Grund auf zu bauen hätte die Arbeit verdoppelt und das Team gespalten. Bidnest musste in die Hosentasche der Studierenden, ohne zu drei Produkten zu werden.',
    approach:
      'Statt nativ neu zu bauen, haben wir die bestehende Next.js-Anwendung mit Capacitor verpackt, die Biet- und Messaging-Screens für Touch und Safe Areas abgestimmt, native Navigation, einen Offline-Screen, Deep Links aus Benachrichtigungen und eine gespeicherte Sitzung ergänzt und aus demselben Repository wie die Website in beide Stores ausgeliefert.',
    resultsSummary:
      'Bidnest kam ohne zweite Codebasis und ohne zweites Team in den App Store und auf Google Play. Studierende bieten, schreiben und zahlen vom Handy mit denselben Abläufen wie auf der Web-Plattform, werden per Benachrichtigung geweckt, wenn sie überboten wurden, und ein Fix erreicht alle drei Plattformen gleichzeitig.',
    results: [
      {
        value: '3',
        label: 'Plattformen aus einem Build',
        detail:
          'Website, iOS-App und Android-App werden aus einem einzigen Repository und Release-Branch ausgeliefert.',
      },
      {
        value: '0',
        label: 'für Native neu gebaute Funktionen',
        detail:
          'Echtzeitgebote, Messaging und Stripe-Checkout sind derselbe Code, der die Web-Plattform bedient. Nichts wurde zweimal gebaut.',
      },
      {
        value: '2',
        label: 'App Stores aus demselben Release-Branch',
        detail:
          'Native Navigation, Safe-Area-Layouts und ein Offline-Screen, damit sich die App wie eine App verhält und nicht wie eine Website im Rahmen.',
      },
    ],
    architecture:
      'Capacitor betreibt den produktiven Web-Build in einer nativen WebView auf iOS und Android. Native Plugins decken ab, was der Browser nicht kann; alles andere, von Echtzeitgeboten bis zum Stripe-Checkout, ist derselbe Code, der die Webplattform bedient, sodass eine Korrektur auf drei Plattformen zugleich ausgeliefert wird.',
    keyFeatures: [
      'Native iOS- und Android-Builds aus der Web-Codebasis',
      'Dieselben Abläufe für Gebote, Nachrichten und Zahlungen',
      'Touch-orientierte Layouts mit Beachtung sicherer Bereiche',
      'Sitzung bleibt zwischen Starts auf dem Gerät erhalten',
      'Deep Links aus Benachrichtigungen direkt zum passenden Angebot',
      'Offline-Screen statt einer Browser-Fehlermeldung',
    ],
    challenges: [
      {
        challenge:
          'WebSocket-Verbindungen brechen ab, wenn die App in den Hintergrund wechselt, sodass Gebote nach dem Fortsetzen verspätet eintreffen konnten.',
        solution:
          'Beim Fortsetzen wird neu verbunden und der Zustand vollständig abgeglichen, sodass das Angebot die verbindliche Gebotshistorie zeigt, sobald die App zurückkehrt.',
      },
      {
        challenge:
          'Die Store-Prüfung lehnt Apps ab, die sich wie eine Website in einem Rahmen verhalten.',
        solution:
          'Native Navigationsgesten, Layouts für sichere Bereiche und ein Offline-Screen, wobei die Web-Navigation innerhalb der Hülle entfernt wurde.',
      },
    ],
    gallery: [
      {
        title: 'Dashboard für Studierende',
        caption:
          'Gebote, Schritte zum Mietvertrag und Dienste innerhalb der nativen Hülle.',
      },
      {
        title: 'Nachrichten',
        caption:
          'Verläufe mit Vermietenden und Anbietern, per Deep Link aus Benachrichtigungen geöffnet.',
      },
      {
        title: 'Stöbern',
        caption: 'Karte und Suche der Webplattform, auf Touch abgestimmt.',
      },
    ],
    techStackCategories: [
      'Native Hülle',
      'Frontend',
      'Styling',
      'Backend',
      'Echtzeit',
      'Zahlungen',
      'Benachrichtigungen',
      'Analytics',
    ],
  },
  'tayyab-sohail-portfolio': {
    efficiency: {
      title: 'Eine typisierte Datendatei erzeugt die gesamte Website.',
      body:
        'Das Raster, jede Fallstudienseite, die Sitemap und die Social-Media-Vorschauen entstehen aus einem einzigen Array. Es gibt kein CMS und keine Datenbank zu pflegen, und der Compiler verweigert den Build, wenn ein Abschnitt fehlt.',
      techniques: [
        'Eine einzige Quelle der Wahrheit',
        'Kein CMS und keine Datenbank im Betrieb',
        'Fehler schon beim Build erkannt',
      ],
    },
    tagline: 'Fallstudien-Portfolio, erzeugt aus einer typisierten Datendatei',
    summary:
      'Eine persönliche Website, auf der jedes Projekt eine vollständige Fallstudie ist, erzeugt aus einer einzigen typisierten Datendatei.',
    description:
      'Das Portfolio unseres Gründers: eine Next.js-Website, bei der das Projektraster, jede Fallstudienseite, die Sitemap und die Social-Vorschauen aus einer einzigen typisierten Datendatei erzeugt werden. Sie liefert HTML aus, animiert ohne Einbußen bei der Ladezeit und ermöglicht Terminbuchungen über einen eingebetteten Kalender.',
    industry: 'Softwareentwicklung',
    headline: { value: '12', label: 'Projekte in einem Portfolio' },
    problem:
      'Ein Lebenslauf listet Technologien auf; er zeigt nicht, wie ein Produkt gebaut wurde oder was sich nach dem Launch verändert hat. Die meisten Portfolio-Websites sind ein Raster aus Vorschaubildern ohne etwas dahinter, und ein Dutzend Projektseiten von Hand konsistent zu halten ist der Punkt, an dem sie scheitern. Das Portfolio musste die Arbeit richtig zeigen und ohne ständige Pflege konsistent bleiben.',
    approach:
      'Wir haben das Portfolio wie ein Produkt behandelt. Jedes Projekt ist ein typisierter Datensatz mit Problem, Vorgehen, Architektur, Funktionen, Herausforderungen und Ergebnissen, und die Website rendert Raster, Fallstudienseiten, Sitemap und Social-Vorschauen aus diesem einen Array. Sie wird als statisches HTML ausgeliefert, animiert nach dem ersten Paint und bucht Gespräche über einen eingebetteten Cal.com-Kalender.',
    resultsSummary:
      'Jedes Projekt auf der Website ist eine vollständige Fallstudie statt eines Vorschaubilds, und alle teilen eine Struktur, weil sie aus einer typisierten Datendatei stammen. Es gibt kein CMS und keine Datenbank zu pflegen, die Animationen kosten beim Laden nichts, und ein Gespräch ist von jeder Seite einen Klick entfernt.',
    results: [
      {
        value: '12',
        label: 'Fallstudien aus einer typisierten Datendatei',
        detail:
          'Raster, jede Fallstudienseite, Sitemap und Social-Vorschauen werden aus einem einzigen Array gerendert.',
      },
      {
        value: '0',
        label: 'CMS oder Datenbank zu pflegen',
        detail:
          'Jede Seite wird beim Deploy statisch gebaut, und der Type-Checker verweigert den Build, wenn ein Abschnitt fehlt.',
      },
      {
        value: '1',
        label: 'Klick von jeder Fallstudie zum gebuchten Termin',
        detail:
          'Ein eingebetteter Cal.com-Kalender sitzt auf dem Kontakt-Screen neben dem Nachrichtenformular.',
      },
    ],
    architecture:
      'Next.js App Router mit statischer Generierung für jede Fallstudien-Route. Die Projektdaten liegen in einem einzigen TypeScript-Array, sodass die Typprüfung einen Build verweigert, wenn ein Abschnitt fehlt. Die Bewegung läuft über Framer Motion nach dem ersten Bild; die Terminbuchung ist ein eingebettetes Cal.com-Widget.',
    keyFeatures: [
      'Filterbares Projektraster nach Kategorie und Kompetenz',
      'Je Projekt erzeugte Fallstudienseite',
      'Navigation zum vorherigen und nächsten Projekt',
      'Sitemap und Social-Bilder aus denselben Daten abgeleitet',
      'Eingebettete Terminbuchung',
      'Lebenslauf zum Herunterladen',
    ],
    challenges: [
      {
        challenge:
          'Zwölf von Hand geschriebene Fallstudien liefen in Struktur und Tonfall auseinander.',
        solution:
          'Ein typisiertes Schema für alle Projekte, wobei der Compiler den Build scheitern lässt, wenn ein Feld fehlt.',
      },
      {
        challenge:
          'Animierte Seiten schneiden bei Ladezeit und Layoutstabilität meist schlecht ab.',
        solution:
          'Statische Generierung, Schriften über next/font geladen und Bewegung, die erst nach dem ersten Bild startet.',
      },
    ],
    gallery: [
      {
        title: 'Tech-Stack',
        caption: 'Werkzeuge und Frameworks, nach Ebene gruppiert.',
      },
      {
        title: 'Kontakt',
        caption:
          'Ein Nachrichtenformular und eine eingebettete Cal.com-Buchung auf einem Screen.',
      },
    ],
    techStackCategories: ['Frontend', 'Styling & Motion', 'Buchung', 'Hosting'],
  },
};
