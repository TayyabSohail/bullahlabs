import type { Course, CourseModule } from './lessons';

/** German copy for the course modules, same ids and video sources as `modules`. */
export const lessonsDe: CourseModule[] = [
  {
    id: 'decide',
    title: 'Bevor Sie KI öffnen',
    tagline: 'Erst entscheiden, dann tippen.',
    lessons: [
      {
        id: 'decide-01',
        title: 'Gehört KI hierher?',
        summary:
          'Die eine Frage vor jeder Aufgabe, die an einen Chatbot geht, und die Aufgaben, die eine Regel, eine Formel oder eine Suche besser erledigt.',
      },
      {
        id: 'decide-02',
        title: 'Das kleinste Werkzeug, das die Aufgabe löst',
        summary:
          'Ein leichtes Modell für den Entwurf, ein schweres nur, wenn das Ergebnis schwer zu prüfen ist. In der richtigen Größe steckt der größte Teil der Ersparnis.',
      },
      {
        id: 'decide-03',
        title: 'Was ein Prompt kostet',
        summary:
          'Wohin Zeit, Geld und Rechenleistung in einer Runde mit dem Modell gehen, damit jede weitere Runde ihren Platz verdienen muss.',
      },
    ],
  },
  {
    id: 'result',
    title: 'Zum Ergebnis kommen',
    tagline: 'Einmal sagen, richtig.',
    lessons: [
      {
        id: 'result-01',
        title: 'Einmal sagen, richtig',
        summary:
          'Aufgabe, Zielgruppe, Länge und Form im ersten Prompt. Die Gewohnheit, die aus sechs Runden eine macht.',
      },
      {
        id: 'result-02',
        title: 'Nur den Teil teilen, der zählt',
        summary:
          'Warum zwei Abschnitte den ganzen Bericht schlagen: bessere Antworten, weniger Kontext, nichts geteilt, was nicht nötig war.',
      },
      {
        id: 'result-03',
        title: 'Aufhören, wenn es die Anforderung erfüllt',
        summary:
          'Den ersten brauchbaren Entwurf bearbeiten, statt neu zu generieren, bis sich einer richtig anfühlt. Ziel ist ein geprüftes Ergebnis, kein perfektes.',
      },
    ],
  },
  {
    id: 'check',
    title: 'Prüfen und beibehalten',
    tagline: 'KI entwirft. Sie entscheiden.',
    lessons: [
      {
        id: 'check-01',
        title: 'Prüfen, was zurückkommt',
        summary:
          'Zahlen, Quellen und Aussagen prüfen, bevor etwas Ihren Schreibtisch verlässt. Eine Drei-Minuten-Routine, die das meiste abfängt.',
      },
      {
        id: 'check-02',
        title: 'Messen, dann zur Gewohnheit machen',
        summary:
          'Einen Ausgangswert festhalten, eine Sache ändern, vergleichen. So wird die Ersparnis in Stunden, Kosten und Fußabdruck sichtbar.',
      },
      {
        id: 'check-03',
        title: 'Es an die Menschen um Sie weitergeben',
        summary:
          'Aus der eigenen Routine eine machen, der ein Team folgen kann, ohne ein Richtliniendokument, das niemand liest.',
      },
    ],
  },
];

/** German copy for the courses, same ids as `courses`. */
export const coursesDe: Course[] = [
  {
    id: 'conscious-ai',
    title: 'Coming Soon',
    tagline: 'Weniger KI, bessere KI: der kostenlose Kurs.',
    modules: lessonsDe,
  },
];
