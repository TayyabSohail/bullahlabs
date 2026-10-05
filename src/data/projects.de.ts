import type { Project } from './projects';

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
    | 'results'
    | 'architecture'
    | 'keyFeatures'
    | 'challenges'
  >
> & {
  /** Gallery captions, in the same order as the project's `gallery`. */
  gallery?: { title: string; caption: string }[];
  /** `techStack` category labels, in the same order. */
  techStackCategories?: string[];
};

export const projectsDe: Record<string, ProjectTranslation> = {
  brickfold: {
    client: 'Vertraulich (Immobilien-Mitgliederclub)',
    tagline: 'Anteiliges Immobilieneigentum für Ostafrika',
    summary:
      'Ein Mitgliederclub, in dem Uganderinnen und Ugander ertragsstarke Wohnungen ab 1.000.000 UGX gemeinsam besitzen.',
    description:
      'Immobilien werden als ein unteilbares Ganzes verkauft, und dieses Ganze kostet mehr, als die meisten Menschen je auf einmal auf dem Konto haben. Brickfold teilt es auf. Geprüfte Mitglieder bündeln Kapital, besitzen gemeinsam echte, ertragsstarke Wohnungen in Uganda, erhalten ihren anteiligen Anteil an der Monatsmiete und verkaufen ihren Anteil an andere Mitglieder, wenn sie aussteigen möchten.',
    industry: 'Fintech / Immobilien',
    headline: { value: '1 Mio. UGX', label: 'für den Einstieg in Eigentum' },
    problem:
      'Die meisten Menschen in Ostafrika werden nie eine Wohnung besitzen, nicht aus Mangel an Ersparnissen, sondern weil Immobilien als unteilbares Ganzes verkauft werden. Kapital ist über Jahre gebunden, Mieteinnahmen bedeuten, Vermieter zu werden, und es gibt keine Transparenz darüber, was ein Gebäude tatsächlich einbringt.',
    approach:
      'Wir haben einen zweiseitigen Mitgliederclub gebaut: einen geprüften Bewerbungs- und Onboarding-Prozess, eine Wallet, durch die jeder Schilling läuft, drei Wege zum Eigentum und einen internen Zweitmarkt für den Ausstieg. Jede finanzielle Entscheidung läuft über eine reale Person in der Administration.',
    resultsSummary:
      'Brickfold ist als funktionierender Mitgliederclub gestartet, nicht als Warteliste. Mitglieder bewerben sich, füllen ihre Wallet, kaufen sich in Wohnungen ein, erhalten ihren Anteil an der Miete und steigen über den Zweitmarkt aus, und jeder Schilling davon stimmt mit dem Hauptbuch überein.',
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
          'Fractional, Live und Prime teilen sich dieselbe Wallet, Mietausschüttung und denselben Zweitmarkt.',
      },
      {
        value: '100 %',
        label: 'der Geldbewegungen von einer Person freigegeben',
        detail:
          'Jede Einzahlung, Investition, Mietgutschrift und Auszahlung passiert die Freigabestelle der Administration, bevor sie wirksam wird.',
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
    client: 'Vertraulich (SEO-Plattform)',
    tagline: 'KI-gestützte Plattform für intelligenteres SEO-Wachstum',
    summary: 'KI-gestützte SEO- und Content-Plattform.',
    description:
      'Eine Plattform für Keyword-Recherche, KI-Content-Erstellung und Rank-Tracking, die dem Hin und Her zwischen Werkzeugen ein Ende macht, das SEO-Teams ganze Tage gekostet hat.',
    industry: 'Marketingtechnologie',
    headline: { value: '3x', label: 'geringere Kosten pro Artikel' },
    problem:
      'SEO-Teams wechselten zwischen fünf verschiedenen Werkzeugen, nur um von der Keyword-Recherche bis zum Tracking zu kommen, verloren dabei Stunden und riskierten uneinheitliche Daten. Die meisten Werkzeuge stützen sich zudem auf veraltete Keyword- und Ranking-Daten, sodass Teams langsam auf Suchtrends reagieren.',
    approach:
      'Eine Plattform: eine KI-Content-Engine auf OpenRouter, verbunden mit Live-Daten aus DataForSEO und Google Maps, während Trigger.dev Massenjobs und Caching im Hintergrund ausführt.',
    resultsSummary:
      'Rankloom hat fünf separate SEO-Tools durch eine Plattform ersetzt. Keyword-Recherche, Texterstellung und Rank-Tracking laufen als automatisierte Abläufe, die das Team prüft statt bedient, und der größte Kostenposten hat sich halbiert.',
    results: [
      {
        value: '3x',
        label: 'geringere Kosten pro Artikel',
        detail:
          'Entwurf, Optimierung und Veröffentlichung laufen als ein automatisierter Ablauf statt über eine Kette aus Tools und Übergaben.',
      },
      {
        value: '30',
        label: 'Artikel in 10 Minuten erzeugt',
        detail:
          'Ein Stapel, der das Content-Team zuvor Stunden kostete, jetzt ein fortsetzbarer Hintergrundjob mit SEO-Score je Entwurf.',
      },
      {
        value: '50 %',
        label: 'geringere Kosten für Keyword-Tracking',
        detail:
          'Von 0,18 $ auf 0,09 $ je verfolgtem Keyword, ohne Verlust an Aktualität.',
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
    client: 'Vertraulich (Marktplatz für Studierendenwohnungen)',
    tagline: 'Wohnungen außerhalb des Campus, zu Ihren Bedingungen',
    summary:
      'Auktionsbasierter Mietmarktplatz für Wohnungen außerhalb des Campus.',
    description:
      'Studierende bieten in Echtzeit auf Wohnungen außerhalb des Campus, mit rollenspezifischen Dashboards für Studierende, Eltern und Vermietende.',
    industry: 'Immobilientechnologie',
    headline: { value: '1.000+', label: 'gleichzeitig Bietende' },
    problem:
      'Der Markt für Studierendenwohnungen ist von Festpreisangeboten ohne Verhandlungsspielraum geprägt, verstreut über unzuverlässige Plattformen. Eltern finanzieren die meisten dieser Mieten, haben aber überhaupt keinen Zugang zum Prozess.',
    approach:
      'Wir haben ein Live-Auktionssystem über WebSockets mit Aktualisierungen unter 200 ms entworfen, gestützt auf Datenmodelle für Angebote, Gebote und Benachrichtigungen sowie getrennte Dashboards je Rolle.',
    resultsSummary:
      'Bidnest ging zum Semesterstart live und hat gehalten. Tausend Studierende können gleichzeitig auf dasselbe Angebot bieten, alle sehen denselben Preis innerhalb einer Fünftelsekunde, und Studierende, Eltern und Vermietende arbeiten je in einer Ansicht für ihre Rolle.',
    results: [
      {
        value: '1.000+',
        label: 'gleichzeitig Bietende ohne Konflikt',
        detail:
          'Die Annahme von Geboten wird serverseitig serialisiert, sodass es eine verbindliche Reihenfolge gibt und kein Angebot zweimal vergeben wird.',
      },
      {
        value: '200 ms',
        label: 'vom Gebot bis zur Aktualisierung aller Bildschirme',
        detail:
          'Live-Updates halten Studierende, Eltern und Vermietende auf derselben Zahl.',
      },
      {
        value: '3',
        label: 'Dashboards, eines je Rolle',
        detail:
          'Studierende, Eltern und Vermietende erhalten genau die Aktionen und Informationen, die für sie zählen, und sonst nichts.',
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
    client: 'Vertraulich (E-Commerce-Marktplatz)',
    tagline: 'Ein personalisierter Marktplatz mit vielen Anbietern',
    summary: 'Personalisierter E-Commerce-Marktplatz mit vielen Anbietern.',
    description:
      'Ein Marktplatz mit vielen Anbietern, personalisierten Empfehlungen, Auszahlungen über Stripe Connect und automatisierter Sendungsverfolgung von DHL.',
    industry: 'E-Commerce',
    headline: { value: '70 %', label: 'weniger Support-Anfragen' },
    problem:
      'Die meisten Shops zeigen einen allgemeinen Feed und begraben Kundinnen und Kunden unter Optionen, die nicht zu ihrem Stil passen. Anbieter erhalten einfache Werkzeuge ohne Überblick über Bestellungen oder Auszahlungen, und die manuelle Zahlungsabwicklung samt undurchsichtiger Lieferung untergräbt das Vertrauen an der Kasse.',
    approach:
      'Wir haben eine serverseitig gerenderte Empfehlungs-Engine auf einer mandantenfähigen Supabase-Architektur mit strikter Datentrennung gebaut und anschließend die Wege für Geld und Logistik durchgängig automatisiert, mit Stripe Connect und der DHL-API.',
    resultsSummary:
      'Curio Market wurde von einem generischen Shop zu einem Marktplatz, der lernt, was jede Person mag, und beim Bezahlen nicht im Weg steht. Verkaufende werden planmäßig ausgezahlt, Pakete verfolgen sich selbst, und der Support-Posteingang ist ruhig geworden.',
    results: [
      {
        value: '40 %',
        label: 'mehr Interaktion der Käuferschaft',
        detail:
          'Ein Geschmacksquiz mit acht Fragen macht aus einem generischen Feed einen persönlichen für jeden wiederkehrenden Besuch.',
      },
      {
        value: '70 %',
        label: 'weniger Support-Tickets',
        detail:
          'Automatische Auszahlungen über Stripe Connect und DHL-Sendungsverfolgung haben die zwei Fragen beseitigt, die den Posteingang füllten.',
      },
      {
        value: '1',
        label: 'Bezahlvorgang über alle Verkaufenden hinweg',
        detail:
          'Kundinnen und Kunden zahlen einmal; Stripe Connect teilt die Zahlung auf und rechnet mit jedem Shop planmäßig ab.',
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
    tagline: 'HR- und Lohnsystem, vollständig prüfbar',
    summary:
      'Onboarding, Urlaub, Krankheitskosten, Überstunden und Lohnabrechnung für Bitsmiths Studio.',
    description:
      'Eine interne HR-Plattform, auf der Mitarbeitende eingeladen, eingearbeitet und aktiviert werden; sie reichen Urlaub, Krankheitskosten und Überstunden ein, die Administration gibt jeden Vorgang frei, und die freigegebenen Posten fließen in einen monatlichen Abrechnungslauf, der Lohnabrechnungen berechnet, sperrt und nach Payoneer exportiert.',
    industry: 'HR-Technologie',
    headline: { value: '0', label: 'manuelle Payroll-Berechnungen' },
    problem:
      'Die Personalarbeit war über E-Mail, Chat und Papier verstreut: Onboarding per E-Mail, Urlaub und Überstunden in Nachrichten, Krankheitskosten auf Papier und eine Lohnabrechnung, die jeden Monat von Hand aus all dem zusammengesetzt wurde. Nichts stimmte überein, und nichts war prüfbar.',
    approach:
      'Ein System, in dem jeder Antrag ein Datensatz mit einem Status ist. Mitarbeitende reichen ein, die Administration gibt frei; freigegebener Urlaub, Krankheitskosten und Überstunden fließen dann in einen monatlichen Abrechnungslauf, der die Lohnabrechnungen berechnet und sperrt.',
    resultsSummary:
      'Bitsmiths Studio führt seine Personalprozesse jetzt in einem System statt über E-Mail, Chat und Papier. Jeder Antrag ist eine Zeile mit Status, jede Freigabe ist nachvollziehbar, und die Lohnabrechnung ist ein gesperrter Lauf, der sich selbst berechnet.',
    results: [
      {
        value: '0',
        label: 'manuelle Lohnberechnungen',
        detail:
          'Genehmigter Urlaub, Krankheitskosten und Überstunden fließen automatisch in den Monatslauf und werden dann gesperrt, sodass nichts doppelt gezahlt wird.',
      },
      {
        value: '5',
        label: 'Abläufe in einem System',
        detail:
          'Onboarding, Urlaub, Krankheitskosten, Überstunden und Lohnabrechnung ersetzen fünf getrennte Kanäle.',
      },
      {
        value: '12',
        label: 'automatisierte E-Mails',
        detail:
          'Statusänderungen benachrichtigen von selbst, sodass niemand mehr einer Freigabe im Chat hinterherläuft.',
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
    tagline: 'Agenturwebsite und CMS',
    summary: 'Marketing-Website für ein Studio, das MVPs in 30 Tagen liefert.',
    description:
      'Die Marketing-Website des Studios, auf einem CMS gebaut, sodass Referenzen, Artikel und Kundenstimmen ohne Deploy veröffentlicht werden.',
    industry: 'Softwareagentur',
    headline: { value: '30 Tage', label: 'von der Idee zum fertigen MVP' },
    problem:
      'Das Studio verspricht produktionsreife MVPs in 30 Tagen, und zwar Gründerinnen und Gründern, die es mit Agenturen vergleichen, die ein Vielfaches verlangen. Dieses Versprechen braucht sichtbare Belege, und das Team musste sie ohne Entwicklung veröffentlichen können.',
    approach:
      'Next.js über einem Directus-CMS, sodass jede Inhaltsfläche bearbeitbar ist. Die Seite ist als geordnete Argumentation aufgebaut: Versprechen, Beleg, Einwände, ein Handlungsaufruf.',
    resultsSummary:
      'Die Website übernimmt den Vertrieb des Studios. Fallstudien, Artikel, Kundenstimmen und FAQs werden aus dem CMS veröffentlicht, ohne dass ein Entwickler beteiligt ist, und die Seite führt Gründende vom 30-Tage-Versprechen über den Beleg zu einem einzigen Handlungsaufruf.',
    results: [
      {
        value: '30 Tage',
        label: 'vom Briefing zum ausgelieferten MVP',
        detail:
          'Das Versprechen der Website, belegt durch die Fallstudien, die sie veröffentlicht.',
      },
      {
        value: '4',
        label: 'Inhaltstypen, veröffentlichbar ohne Deploy',
        detail:
          'Fallstudien, Beiträge, Kundenstimmen und FAQs werden in Directus bearbeitet und sind beim Speichern live.',
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
    title: 'Real Estate Operating System',
    client: 'Vertraulich (Immobiliengruppe)',
    tagline:
      'Mandantenfähige KI-Plattform, die den Maklerbetrieb automatisiert',
    summary:
      'Mandantenfähige KI-Plattform zur Automatisierung des Betriebs von Immobilienmaklern.',
    description:
      'Ein einheitliches Betriebssystem für Maklerbüros, das CRM, Compliance, Marketing, Dokumentenerstellung und E-Signatur in einer mandantenfähigen Plattform zusammenführt.',
    industry: 'Immobilien',
    headline: { value: '70 %', label: 'weniger Papierarbeit' },
    problem:
      'Maklerbüros verwalteten CRM, Compliance, Marketing und Dokumentenabläufe über unverbundene Werkzeuge und manuelle Prozesse hinweg. Für Kunden- und Objektverwaltung oder die Erstellung von Verträgen gab es kein einheitliches System.',
    approach:
      'Wir haben ein mandantenfähiges KI-System mit spezialisierten Agenten für CRM, Compliance und Wissen gebaut und diese dann mit einem Marketingmodul und einer vollständigen Pipeline für Dokumentenerstellung und E-Signatur verbunden.',
    resultsSummary:
      'Mehr als dreißig Maklerbüros führen CRM, Compliance, Marketing und Papierkram jetzt auf einer Plattform. Verträge entstehen aus Vorlagen und gehen direkt zur E-Signatur, und die spezialisierten Agenten erledigen die Arbeit, die früher in Postfächern lag.',
    results: [
      {
        value: '30+',
        label: 'Maklerbüros auf einer Plattform',
        detail:
          'Jedes mit eigener CRM-Anbindung und eigenen Abläufen, bedient aus einer einzigen mandantenfähigen Installation.',
      },
      {
        value: '70 %',
        label: 'weniger Zeit für Dokumente und Verträge',
        detail:
          'Mietverträge entstehen aus Vorlagen und werden zur E-Signatur versendet, ohne dass jemand sie neu tippt.',
      },
      {
        value: '3',
        label: 'spezialisierte KI-Agenten',
        detail:
          'CRM-, Compliance- und Wissensagenten, begrenzt auf die Daten des jeweiligen Büros und koordiniert über LangGraph.',
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
    title: 'Agent für Compliance-Prüfung',
    client: 'Vertraulich (Wirtschaftsprüfung)',
    tagline: 'Feststellungen als Änderungsverfolgung je Klausel, KI-erzeugt',
    summary:
      'KI-Agent für Compliance, der Feststellungen als Änderungsverfolgung je Klausel erzeugt.',
    description:
      'Ein KI-gestützter Prüfablauf, der hochgeladene Berichte gegen etablierte Normen abgleicht und Änderungsverfolgung auf Klauselebene zurückgibt, mit einer klaren Begründung zu jeder Feststellung.',
    industry: 'Prüfung und Compliance',
    headline: { value: '2x', label: 'schnellere Dokumentenprüfung' },
    problem:
      'Manuelle Compliance- und Prüfungsdurchsichten gegen etablierte Normen waren langsam und fielen je nach prüfender Person unterschiedlich aus, wobei jeder Bericht rund eine Woche in Anspruch nahm.',
    approach:
      'Wir haben einen Agenten gebaut, der hochgeladene Berichte gegen einen Datensatz etablierter Normen prüft und daraus einen Feststellungsbericht mit Änderungsverfolgung auf Klauselebene und KI-verfassten Kommentaren zu jedem beanstandeten Punkt erzeugt.',
    resultsSummary:
      'Prüfungen, die eine Woche dauerten, brauchen jetzt die Hälfte, und jede Feststellung nennt die Klausel und die Norm dahinter. Prüfende verbringen ihre Zeit mit Ermessensentscheidungen statt mit der Suche nach dem auslösenden Absatz.',
    results: [
      {
        value: '2x',
        label: 'schnellere Dokumentenprüfung',
        detail:
          'Die Durchlaufzeit eines Compliance-Berichts sank von etwa einer Woche auf ungefähr die Hälfte.',
      },
      {
        value: '100 %',
        label: 'der Feststellungen einer Klausel zugeordnet',
        detail:
          'Jede kommt als nachverfolgte Änderung mit der zitierten Norm und einer schriftlichen Begründung.',
      },
      {
        value: '1',
        label: 'Prüfmaßstab für jeden Bericht',
        detail:
          'Derselbe Agenten-Workflow bewertet jedes Dokument, sodass Ergebnisse zwischen Prüfenden einheitlich und über Berichte hinweg vergleichbar sind.',
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
    title: 'Sprachassistent für Interviews in Echtzeit',
    client: 'Vertraulich (Personalvermittlung)',
    tagline: 'Live-KI-Sprachinterviews mit automatischen Transkripten',
    summary:
      'Durchgängige KI-Interviewplattform mit Live-Sprache und Transkription.',
    description:
      'Eine durchgängige Interviewplattform, die Live-KI-Sprachinterviews plant, terminiert und durchführt und das Transkript nach Ende der Sitzung automatisch zustellt.',
    industry: 'Personalvermittlung',
    headline: { value: '30+', label: 'Interviews abgeschlossen' },
    problem:
      'Strukturierte allgemeine, podcastartige oder Bewerbungsinterviews in größerer Zahl zu führen, erforderte für jede Sitzung manuelle Terminplanung, Moderation und Nachbearbeitung des Transkripts.',
    approach:
      'Wir haben eine Plattform gebaut, auf der Nutzende Interviewart, Beschreibung, Stil sowie eigene Einleitung und Abschluss wählen. Sie führt das Interview live über die OpenAI Realtime API, übernimmt Transkription, Meeting-Links und Einladungen und stellt das Transkript anschließend automatisch zu.',
    resultsSummary:
      'Interviews, die eine Terminplanung, eine Moderation und jemanden für das Transkript brauchten, laufen jetzt durchgängig von selbst. Recruiting wählt Format und Fragen; die Plattform bucht, führt und dokumentiert die Sitzung.',
    results: [
      {
        value: '30+',
        label: 'Interviews auf der Plattform geführt',
        detail:
          'Recruiting-Runden für Praktika laufen live über die KI-Interviewerin, jede nach derselben Rubrik bewertet.',
      },
      {
        value: '3',
        label: 'Interviewformate',
        detail:
          'Allgemeine, podcastartige und Recruiting-Sitzungen, jeweils mit eigener Beschreibung, eigenem Stil, Intro und Outro.',
      },
      {
        value: '0',
        label: 'manuelle Schritte nach Ende einer Sitzung',
        detail:
          'Das Transkript entsteht live und wird beim Schließen des Interviews automatisch per E-Mail versendet.',
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
    tagline: 'Mandantenfähige KI-Support-Agenten für Onlineshops',
    summary: 'Mandantenfähige KI-Chatbot-Plattform.',
    description:
      'Wiederverkäufer richten KI-Support-Agenten für ihre Shops in großer Zahl ein, wobei jeder Mandant getrennt ist und jede Antwort in den Inhalten des jeweiligen Shops verankert wird.',
    industry: 'E-Commerce / Kundenservice',
    headline: { value: '60 %', label: 'schnellere Shop-Einrichtung' },
    problem:
      'Wiederverkäufer wollten ihren eigenen Kunden KI-Support-Agenten anbieten, doch jede Bereitstellung war Maßarbeit, sodass die Einrichtung eines neuen Shops Tage manueller Arbeit kostete.',
    approach:
      'Wir haben eine mandantenfähige MERN-Architektur gebaut, in der jeder Shop einen eigenständigen, kontextbewussten Agenten betreibt, und darüber eine automatisierte Bereitstellung gelegt, sodass Wiederverkäufer Bots in großer Zahl statt einzeln aufsetzen können.',
    resultsSummary:
      'Reseller richten KI-Support-Agenten für ihre Shops jetzt gebündelt ein statt als einzelne Sonderanfertigung. Jeder Bot antwortet nur aus Katalog, Bestellungen und Richtlinien seines eigenen Shops und übergibt an eine Person, wenn er ein Gespräch nicht abschließen kann.',
    results: [
      {
        value: '60 %',
        label: 'schnelleres Onboarding je Shop',
        detail:
          'Automatisierte Bereitstellung machte aus einer mehrtägigen manuellen Einrichtung einen Sammelvorgang.',
      },
      {
        value: '1',
        label: 'isolierter Namensraum je Shop',
        detail:
          'Embeddings sind in Pinecone je Mandant partitioniert, sodass kein Bot je Inhalte eines anderen Shops ausspielen kann.',
      },
      {
        value: '100 %',
        label: 'der Antworten aus den Inhalten des eigenen Shops',
        detail:
          'Die Suche läuft über Katalog, Bestell-API und Richtlinien, die der Reseller für diesen Bot freigegeben hat.',
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
    title: 'KI-Assistent für Physiotherapie',
    client: 'Vertraulich (Gesundheitswesen)',
    tagline: 'Adaptive Rehabilitation, von KI begleitet',
    summary: 'Full-Stack-KI-Plattform für adaptive Rehabilitation.',
    description:
      'Ein durchgängiger Rehabilitationsverlauf von der Aufnahme über die Bewegungsanalyse und adaptive Trainingsplanung bis zu täglichem Fortschritt und KI-gestütztem Videofeedback.',
    industry: 'Gesundheitswesen',
    headline: { value: '90 %+', label: 'genaue Bewegungsanalysen' },
    problem:
      'Der Rehabilitationsverlauf war zersplittert: manuelle Aufnahme, Bewegungsanalyse, allgemeine Trainingspläne und seltene Nachkontrollen. Zwischen den betreuten Terminen hatten Patientinnen und Patienten kaum Anleitung, und die Pläne reagierten nicht schnell auf die tatsächliche Leistung.',
    approach:
      'Wir haben den Verlauf um einen Aufnahme-Agenten, eine angeleitete Bewegungsanalyse und die automatische Erstellung von Trainingsplänen herum gebaut. Tägliche Einträge steuern die Steigerung oder Reduktion des Plans, während hochgeladene Übungsvideos KI-Feedback erhalten und Fachartikel zu Verletzungen in künftige Pläne einfließen.',
    resultsSummary:
      'Patientinnen und Patienten haben jetzt jeden Tag Anleitung, nicht nur in betreuten Sitzungen. Aufnahme, Bewegungsanalyse, Planerstellung und Videofeedback laufen als ein zusammenhängender Weg, und der Plan passt sich der tatsächlichen Leistung an.',
    results: [
      {
        value: '90 %+',
        label: 'Genauigkeit bei Bewegungs- und Ausführungsprüfungen',
        detail:
          'Die Posenanalyse hochgeladener Clips liefert Gelenkwinkel und korrigierendes Feedback, das die Klinik prüfen kann.',
      },
      {
        value: '8 Wochen',
        label: 'Plan, täglich angepasst',
        detail:
          'Tägliche Protokolle steuern Steigerung oder Reduktion automatisch, statt auf den nächsten Termin zu warten.',
      },
      {
        value: '1',
        label: 'durchgehender Weg von der Aufnahme bis zur Genesung',
        detail:
          'Aufnahme-Agent, Analyse, Plan, tägliches Protokoll und KI-Videofeedback ersetzen vier getrennte Schritte.',
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
    tagline: 'Unternehmenswebsite, neu gebaut für Tempo und SEO',
    summary: 'Unternehmenswebsite, gebaut für Performance und SEO.',
    description:
      'Eine Unternehmenswebsite, auf Next.js neu gebaut für Tempo und Suche. 40 % schneller, und endlich mit guten Rankings.',
    industry: 'Professionelle Dienstleistungen',
    headline: { value: '40 %', label: 'schneller ladende Seiten' },
    problem:
      'Die bestehende Website lud langsam und rankte schlecht, was das Unternehmen Anfragen kostete, noch bevor Besuchende das Angebot überhaupt sahen.',
    approach:
      'Wir haben die Website auf Next.js mit TypeScript für Typsicherheit und Tailwind für das Styling neu gebaut und uns dann durch das Performance-Budget gearbeitet: Code-Splitting, Bildoptimierung und je Route abgestimmte Rendering-Strategien.',
    resultsSummary:
      'Die neu gebaute Website lädt schneller, rankt für die Begriffe, mit denen das Unternehmen verkauft, und bringt auf jeder Route eine Anfrage in Reichweite eines Scrollvorgangs. Eingehende Leads springen nicht mehr ab, bevor sie das Angebot sehen.',
    results: [
      {
        value: '40 %',
        label: 'schnellere Seitenladezeiten',
        detail:
          'Statisches Rendering zuerst, Code-Splitting je Route und optimierte Bilder auf der gesamten Website.',
      },
      {
        value: '100 %',
        label:
          'der Routen erreichen den Handlungsaufruf in einem Scrollvorgang',
        detail:
          'Jede Seite führt vom Angebot zur Anfrage, ohne dass jemand suchen muss.',
      },
      {
        value: '0',
        label: 'Layoutverschiebung durch Bilder',
        detail:
          'Alle Bilder laufen über next/image mit festen Abmessungen und modernen Formaten.',
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
    title: 'BankIslami PEP-Screening',
    client: 'BankIslami, umgesetzt mit Aawaz AI',
    tagline: 'Tägliches Adverse-Media-Screening politisch exponierter Personen',
    summary:
      'Eine interne Web- und Mobile-Plattform, die jeden Morgen die Nachrichten liest und daraus einen Risikobericht für das Compliance-Team der Bank erstellt.',
    description:
      'Banken müssen politisch exponierte Personen und ihr Umfeld laufend überwachen, nicht nur beim Onboarding. Bei BankIslami hieß das: Analystinnen und Analysten öffneten jeden Morgen Dutzende Nachrichtenseiten und suchten Hunderte Namen von Hand. Wir haben eine durchgängige Screening-Plattform gebaut: einen Crawler, der die Finanz- und Politiknachrichten des Tages abruft, eine Matching-Engine, die Artikel mit den PEP-Datensätzen der Bank verknüpft, und einen Prüfprozess, der in einem signierten täglichen Risikobericht endet. Ausgeliefert als MERN-Webanwendung für Analysten am Schreibtisch und als native Mobile-App für Compliance-Beauftragte unterwegs.',
    industry: 'Banken / Compliance',
    headline: { value: '38', label: 'Nachrichtenquellen täglich geprüft' },
    problem:
      'Aufsichtsbehörden erwarten, dass Banken politisch exponierte Personen über die gesamte Geschäftsbeziehung hinweg prüfen. Das Compliance-Team tat dies von Hand: ein Vormittag über Nachrichtenseiten, Gerichtslisten und Amtsblätter, die Suche nach über tausend Namen, dann das Übertragen der Funde in eine Tabelle. Meldungen wurden übersehen, der Bericht kam spät, und niemand konnte einem Prüfer zeigen, wie ein Name geprüft worden war.',
    approach:
      'Wir haben bei den Quellen begonnen, nicht bei der Oberfläche: ein geplanter Crawler ruft um 06:00 Uhr jedes relevante pakistanische und internationale Medium ab, normalisiert die Artikel und legt sie in MongoDB ab. Eine Matching-Engine bewertet jeden Artikel gegen die PEP-Liste der Bank anhand von Namensvarianten, Rollen und Orten, und nur glaubwürdige Treffer erreichen eine Analystin. Prüfwarteschlange, Risikoprofile und der generierte Bericht wurden einmal als Komponentenbibliothek gebaut und in den Browser sowie auf iOS und Android ausgeliefert.',
    resultsSummary:
      'Das Compliance-Team beginnt den Tag jetzt mit einem fertigen Bericht statt mit einem Vormittag voller Suche. Jedes relevante Medium ist gelesen, bevor jemand eintrifft, nur glaubwürdige Treffer erreichen eine Analystin, und jede Entscheidung zu einem Namen ist so dokumentiert, dass sie einem Prüfer gezeigt werden kann.',
    results: [
      {
        value: '38',
        label: 'Quellen geprüft, bevor das Team eintrifft',
        detail:
          'Rund 200 Artikel am Tag werden ab 06:00 Uhr abgerufen, normalisiert und mit der PEP-Liste abgeglichen.',
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
          'Wo er früher am Nachmittag ankam, jetzt mit vollständigem Prüfpfad pro Name und Zustellung an Compliance und Risiko.',
      },
      {
        value: '1.240',
        label: 'Konten laufend überwacht',
        detail: 'PEP- und Umfeldkonten, jeden Tag über Web und Mobile geprüft.',
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
    title: 'Bidnest Mobile App',
    client: 'Vertraulich (Marktplatz für Studierendenwohnungen)',
    tagline: 'Der Auktionsmarktplatz, verpackt für iOS und Android',
    summary:
      'Der Bidnest-Marktplatz, mit Capacitor verpackt, damit Studierende und Eltern vom Telefon aus bieten können.',
    description:
      'Dieselbe Codebasis, die die Bidnest-Webplattform betreibt, mit Capacitor zu nativen iOS- und Android-Apps verpackt. Ein Team liefert die Webplattform und beide App Stores aus einem einzigen Repository, und jeder Ablauf des Marktplatzes funktioniert innerhalb der nativen Hülle, ohne neu gebaut zu werden.',
    industry: 'Immobilientechnologie',
    headline: { value: '3', label: 'Plattformen aus einem Build' },
    problem:
      'Studierende leben auf ihrem Telefon. Ein vom Laptop abgegebenes Gebot kann überboten werden, während sie in der Vorlesung sitzen, und ein Browser-Tab weckt niemanden. Zwei native Apps von Grund auf zu bauen, hätte die Arbeit für einen bereits bestehenden Marktplatz verdoppelt.',
    approach:
      'Statt das Produkt nativ neu zu bauen, haben wir die bestehende Next.js-Anwendung mit Capacitor verpackt, die Screens für Gebote und Nachrichten auf Touch und sichere Bereiche abgestimmt und das Ergebnis aus demselben Repository in beide Stores geliefert.',
    resultsSummary:
      'Bidnest hat App Store und Google Play erreicht, ohne zweite Codebasis und ohne zweites Team. Studierende bieten, schreiben und bezahlen vom Telefon mit denselben Abläufen wie auf der Web-Plattform, und ein Fix erreicht alle drei Plattformen auf einmal.',
    results: [
      {
        value: '3',
        label: 'Plattformen aus einem Build',
        detail:
          'Website, iOS-App und Android-App werden aus einem Repository und einem Release-Branch ausgeliefert.',
      },
      {
        value: '0',
        label: 'für Native neu gebaute Funktionen',
        detail:
          'Echtzeitgebote, Nachrichten und Stripe-Checkout sind derselbe Code, der die Web-Plattform bedient.',
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
    tagline: 'Referenz-Portfolio für einen erfahrenen Entwickler',
    summary:
      'Eine persönliche Website, auf der jedes Projekt eine vollständige Fallstudie ist, erzeugt aus einer einzigen typisierten Datendatei.',
    description:
      'Das Portfolio unseres Gründers: eine Next.js-Website, bei der das Projektraster, jede Fallstudienseite, die Sitemap und die Social-Vorschauen aus einer einzigen typisierten Datendatei erzeugt werden. Sie liefert HTML aus, animiert ohne Einbußen bei der Ladezeit und ermöglicht Terminbuchungen über einen eingebetteten Kalender.',
    industry: 'Softwareentwicklung',
    headline: { value: '12', label: 'Projekte in einem Portfolio' },
    problem:
      'Ein Lebenslauf zählt Technologien auf; er zeigt nicht, wie ein Produkt gebaut wurde oder was sich nach dem Launch verändert hat. Die meisten Portfolio-Websites sind ein Raster aus Vorschaubildern ohne Substanz dahinter, und ein Dutzend Projektseiten von Hand konsistent zu halten, ist genau die Stelle, an der sie auseinanderfallen.',
    approach:
      'Wir haben das Portfolio wie ein Produkt behandelt. Jedes Projekt ist ein typisierter Datensatz mit Problem, Vorgehen, Architektur, Funktionen, Herausforderungen und Ergebnissen, und die Website erzeugt Raster, Fallstudienseiten, Sitemap und Social-Vorschauen aus diesem einen Array.',
    resultsSummary:
      'Jedes Projekt auf der Website ist eine vollständige Fallstudie statt eines Vorschaubilds, und alle teilen eine Struktur, weil sie aus einer typisierten Datendatei stammen. Die Website wird als statisches HTML ausgeliefert, sodass die Animation beim Laden nichts kostet, und ein Termin ist von jeder Seite einen Klick entfernt.',
    results: [
      {
        value: '12',
        label: 'Fallstudien aus einer typisierten Datendatei',
        detail:
          'Raster, jede Fallstudienseite, Sitemap und Social-Vorschauen entstehen aus einem einzigen Array.',
      },
      {
        value: '0',
        label: 'CMS oder Datenbank zu pflegen',
        detail:
          'Jede Seite wird beim Deploy statisch gebaut, und die Typprüfung verweigert einen Build, wenn ein Abschnitt fehlt.',
      },
      {
        value: '1',
        label: 'Klick von jeder Fallstudie zum gebuchten Termin',
        detail:
          'Ein eingebetteter Cal.com-Kalender liegt auf dem Kontakt-Screen neben dem Nachrichtenformular.',
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
