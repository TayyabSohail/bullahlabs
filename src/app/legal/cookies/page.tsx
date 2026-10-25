import type { Metadata } from 'next';
import Link from 'next/link';

import { LegalPage, type LegalSection } from '@/components/legal/legal-page';

import { paths } from '@/constants/paths';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/server';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'Which cookies and browser storage the Bullah Labs website uses, what they do, and how to change your choice.',
  alternates: { canonical: paths.legal.cookies },
};

const UPDATED = '5 September 2026';

const sectionsEn: LegalSection[] = [
  {
    id: 'what',
    title: 'What cookies are',
    body: (
      <p>
        Cookies and similar browser storage (local storage) are small pieces of
        data a website saves in your browser. Some are needed for a site to
        work; others measure how it is used. This site uses very few, and none
        for advertising.
      </p>
    ),
  },
  {
    id: 'essential',
    title: 'Strictly necessary storage',
    body: (
      <>
        <p>
          These are set without consent because the site cannot function
          properly without them:
        </p>
        <ul>
          <li>
            <strong>bl-cookie-consent</strong> (local storage): remembers
            whether you accepted or declined analytics. Kept until you clear
            site data.
          </li>
          <li>
            <strong>theme</strong> (local storage): remembers your light or dark
            mode choice. Kept until you clear site data.
          </li>
          <li>
            <strong>bl-course-waitlist</strong> (cookie): remembers that this
            browser has joined the course waitlist, so we do not ask for the
            same email again. It contains no email address and expires after 12
            months.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'analytics',
    title: 'Analytics',
    body: (
      <>
        <p>
          We use PostHog analytics to see which pages are useful. It records
          pages viewed, buttons clicked, referring site, campaign links, device
          type and approximate country. It does not record what you type into
          forms. Data is processed by PostHog in the EU.
        </p>
        <p>
          Until you decide, or if you decline, PostHog stores nothing on your
          device: no cookie, no local storage. Each page load counts as a new,
          anonymous visitor.
        </p>
        <p>
          If you click &ldquo;Accept&rdquo; on the cookie banner, PostHog also
          sets a first-party cookie and local storage entry (prefixed{' '}
          <strong>ph_</strong>) containing a random identifier, so that repeat
          visits are counted once. The identifier is kept for up to 12 months.
          Declining later removes it.
        </p>
      </>
    ),
  },
  {
    id: 'third-party',
    title: 'Third-party content',
    body: (
      <p>
        Links to Cal.com take you to that service, which sets its own cookies
        under its own policy. We do not embed third-party widgets that set
        cookies on this site.
      </p>
    ),
  },
  {
    id: 'change',
    title: 'Changing your choice',
    body: (
      <p>
        To withdraw or change consent, clear this site&rsquo;s data in your
        browser settings (usually under Privacy or Site settings). The banner
        will appear again on your next visit. You can also block cookies
        entirely in your browser; the site will still work.
      </p>
    ),
  },
  {
    id: 'more',
    title: 'More information',
    body: (
      <p>
        How we handle personal data more generally is described in the{' '}
        <Link href={paths.legal.privacy}>privacy policy</Link>.
      </p>
    ),
  },
];

const sectionsDe: LegalSection[] = [
  {
    id: 'what',
    title: 'Was Cookies sind',
    body: (
      <p>
        Cookies und ähnliche Browserspeicher (Local Storage) sind kleine
        Datenmengen, die eine Website in Ihrem Browser ablegt. Einige sind
        nötig, damit eine Website funktioniert; andere messen, wie sie genutzt
        wird. Diese Website nutzt sehr wenige, und keine für Werbung.
      </p>
    ),
  },
  {
    id: 'essential',
    title: 'Unbedingt erforderliche Speicherung',
    body: (
      <>
        <p>
          Diese werden ohne Einwilligung gesetzt, weil die Website ohne sie
          nicht richtig funktionieren kann:
        </p>
        <ul>
          <li>
            <strong>bl-cookie-consent</strong> (Local Storage): merkt sich, ob
            Sie Analyse akzeptiert oder abgelehnt haben. Bleibt, bis Sie die
            Websitedaten löschen.
          </li>
          <li>
            <strong>theme</strong> (Local Storage): merkt sich Ihre Wahl von
            hellem oder dunklem Modus. Bleibt, bis Sie die Websitedaten löschen.
          </li>
          <li>
            <strong>bl-course-waitlist</strong> (Cookie): merkt sich, dass
            dieser Browser der Kurs-Warteliste beigetreten ist, damit wir nicht
            noch einmal nach derselben E-Mail-Adresse fragen. Er enthält keine
            E-Mail-Adresse und läuft nach 12 Monaten ab.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'analytics',
    title: 'Analyse',
    body: (
      <>
        <p>
          Wir nutzen die Analyse von PostHog, um zu sehen, welche Seiten
          nützlich sind. Erfasst werden aufgerufene Seiten, geklickte
          Schaltflächen, verweisende Website, Kampagnen-Links, Gerätetyp und
          ungefähres Land. Was Sie in Formulare eintippen, wird nicht erfasst.
          Die Daten werden von PostHog in der EU verarbeitet.
        </p>
        <p>
          Solange Sie nicht entschieden haben oder wenn Sie ablehnen, speichert
          PostHog nichts auf Ihrem Gerät: kein Cookie, kein Local Storage. Jeder
          Seitenaufruf zählt als neuer, anonymer Besuch.
        </p>
        <p>
          Wenn Sie im Cookie-Banner auf &bdquo;Akzeptieren&ldquo; klicken, setzt
          PostHog zusätzlich ein Erstanbieter-Cookie und einen
          Local-Storage-Eintrag (mit dem Präfix <strong>ph_</strong>) mit einer
          zufälligen Kennung, damit wiederholte Besuche nur einmal gezählt
          werden. Die Kennung wird bis zu 12 Monate aufbewahrt. Ein späteres
          Ablehnen entfernt sie.
        </p>
      </>
    ),
  },
  {
    id: 'third-party',
    title: 'Inhalte Dritter',
    body: (
      <p>
        Links zu Cal.com führen Sie zu diesem Dienst, der eigene Cookies nach
        seiner eigenen Richtlinie setzt. Wir binden keine Widgets Dritter ein,
        die auf dieser Website Cookies setzen.
      </p>
    ),
  },
  {
    id: 'change',
    title: 'Ihre Wahl ändern',
    body: (
      <p>
        Um die Einwilligung zu widerrufen oder zu ändern, löschen Sie die Daten
        dieser Website in Ihren Browsereinstellungen (meist unter Datenschutz
        oder Website-Einstellungen). Beim nächsten Besuch erscheint das Banner
        erneut. Sie können Cookies auch vollständig im Browser blockieren; die
        Website funktioniert weiterhin.
      </p>
    ),
  },
  {
    id: 'more',
    title: 'Weitere Informationen',
    body: (
      <p>
        Wie wir mit personenbezogenen Daten allgemein umgehen, ist in der{' '}
        <Link href={paths.legal.privacy}>Datenschutzerklärung</Link>{' '}
        beschrieben.
      </p>
    ),
  },
];

function getSections(locale: Locale): LegalSection[] {
  return locale === 'de' ? sectionsDe : sectionsEn;
}

export default async function CookiesPage() {
  const dict = await getDictionary();

  return (
    <LegalPage
      dict={dict}
      kicker={dict.legal.kicker}
      title={dict.legal.policies.cookies.title}
      accentWords={[0]}
      description={dict.legal.intros.cookies}
      updated={UPDATED}
      href={paths.legal.cookies}
      sections={getSections(dict.locale)}
    />
  );
}
