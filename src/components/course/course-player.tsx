'use client';

import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Lock,
  Maximize2,
  Play,
  Search,
  X,
} from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import {
  type PlayerLabels,
  VideoPlayer,
  type VideoPlayerHandle,
} from '@/components/course/video-player';

import { track } from '@/lib/analytics';
import { cn } from '@/lib/utils';

import { PosthogEventKeys } from '@/constants/posthog-events';
import {
  type Course,
  type CourseModule,
  flattenLessons,
  type LessonEntry,
} from '@/data/lessons';

export interface CoursePlayerLabels extends PlayerLabels {
  fullscreenShort: string;
  courses: string;
  course: string;
  modules: string;
  module: string;
  lesson: string;
  lessons: string;
  watched: string;
  watchedTag: string;
  minutes: string;
  previous: string;
  next: string;
  listLabel: string;
  search: string;
  clearSearch: string;
  noResults: string;
}

interface CoursePlayerProps {
  courses: Course[];
  labels: CoursePlayerLabels;
  /** Rendered inside the frame of an unpublished lesson. */
  placeholderAction?: React.ReactNode;
  className?: string;
}

const STORAGE_KEY = 'bl-course-watched';

function readWatched(): string[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? (JSON.parse(raw) as unknown) : [];
    return Array.isArray(parsed)
      ? parsed.filter((v) => typeof v === 'string')
      : [];
  } catch {
    return [];
  }
}

function pad(n: number) {
  return String(n).padStart(2, '0');
}

function minutesOf(module: CourseModule) {
  return module.lessons.reduce((sum, l) => sum + (l.minutes ?? 0), 0);
}

function firstPlayable(course: Course) {
  const entries = flattenLessons(course.modules);
  return entries.find((entry) => entry.lesson.video) ?? entries[0];
}

/**
 * The courses as a player: the current lesson in a 16:9 frame, and beside
 * it one list that goes course → module → lesson. Courses are tabs, modules
 * fold open one at a time, and a search box filters every lesson across the
 * open course. Which lessons have been watched is remembered in the browser
 * only.
 */
export function CoursePlayer({
  courses,
  labels,
  placeholderAction,
  className,
}: CoursePlayerProps) {
  const [courseId, setCourseId] = useState(courses[0]?.id);
  const course = courses.find((c) => c.id === courseId) ?? courses[0];

  const entries = useMemo(
    () => (course ? flattenLessons(course.modules) : []),
    [course],
  );

  const [activeId, setActiveId] = useState<string | undefined>(() =>
    course ? firstPlayable(course)?.lesson.id : undefined,
  );
  const [openModules, setOpenModules] = useState<string[]>(() =>
    course
      ? ([firstPlayable(course)?.module.id].filter(Boolean) as string[])
      : [],
  );
  const [query, setQuery] = useState('');
  const [watched, setWatched] = useState<string[]>([]);
  const playerRef = useRef<VideoPlayerHandle>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const started = useRef(new Set<string>());

  const lessonProps = (entry: LessonEntry) => ({
    course: course?.id,
    module: entry.module.id,
    lesson: entry.lesson.id,
    lesson_title: entry.lesson.title,
  });

  useEffect(() => {
    setWatched(readWatched());
  }, []);

  const markWatched = useCallback((id: string) => {
    setWatched((current) => {
      if (current.includes(id)) return current;
      const next = [...current, id];
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // Private mode or storage blocked: the tick simply does not persist.
      }
      return next;
    });
  }, []);

  const activeIndex = Math.max(
    0,
    entries.findIndex((entry) => entry.lesson.id === activeId),
  );
  const active: LessonEntry | undefined = entries[activeIndex];
  const previous = entries[activeIndex - 1];
  const next = entries[activeIndex + 1];

  const openModule = (id: string) =>
    setOpenModules((open) => (open.includes(id) ? open : [...open, id]));

  const toggleModule = (id: string) =>
    setOpenModules((open) =>
      open.includes(id) ? open.filter((m) => m !== id) : [...open, id],
    );

  const select = (entry: LessonEntry) => {
    setActiveId(entry.lesson.id);
    openModule(entry.module.id);
    // Keep the chosen row in view inside the scrolling list.
    requestAnimationFrame(() => {
      const row = listRef.current?.querySelector<HTMLElement>(
        `[data-lesson="${entry.lesson.id}"]`,
      );
      row?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    });
  };

  const switchCourse = (nextCourse: Course) => {
    if (nextCourse.id === course?.id) return;
    const first = firstPlayable(nextCourse);
    setCourseId(nextCourse.id);
    setActiveId(first?.lesson.id);
    setOpenModules(first ? [first.module.id] : []);
    setQuery('');
  };

  // ---- Search: every lesson in the open course, matched on title, summary
  //      and module title. While a query is typed every matching module is
  //      open so the hits are visible without a click.
  const needle = query.trim().toLocaleLowerCase();
  const searching = needle.length > 0;
  const matches = (module: CourseModule, lesson: CourseModule['lessons'][0]) =>
    !searching ||
    `${lesson.title} ${lesson.summary} ${module.title}`
      .toLocaleLowerCase()
      .includes(needle);

  const visibleModules = (course?.modules ?? [])
    .map((module) => ({
      module,
      lessons: module.lessons.filter((lesson) => matches(module, lesson)),
    }))
    .filter(({ lessons }) => lessons.length > 0);

  if (!course || !active) return null;

  const tag = `${labels.module} ${pad(active.moduleIndex + 1)} / ${labels.lesson} ${pad(active.lessonIndex + 1)}`;
  const watchedCount = watched.filter((id) =>
    entries.some((entry) => entry.lesson.id === id),
  ).length;
  const progress = entries.length ? (watchedCount / entries.length) * 100 : 0;

  return (
    <div
      className={cn(
        'grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)] lg:gap-5',
        className,
      )}
    >
      {/* ---- Player and the lesson's words ---- */}
      <div className='bl-card flex min-w-0 flex-col overflow-hidden'>
        <VideoPlayer
          ref={playerRef}
          source={active.lesson.video}
          title={active.lesson.title}
          tag={tag}
          labels={labels}
          onPlay={() => {
            // Resuming after a pause fires play again; count a lesson once.
            if (started.current.has(active.lesson.id)) return;
            started.current.add(active.lesson.id);
            track(PosthogEventKeys.LESSON_STARTED, lessonProps(active));
          }}
          onEnded={() => {
            markWatched(active.lesson.id);
            track(PosthogEventKeys.LESSON_COMPLETED, lessonProps(active));
          }}
          placeholderAction={placeholderAction}
          className='border-b'
        />

        <div className='flex flex-1 flex-col p-5 sm:p-6'>
          <div className='flex flex-wrap items-center gap-x-3 gap-y-2'>
            <p className='font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-text'>
              {course.title}
              <span className='text-muted-foreground'> / </span>
              {active.module.title}
            </p>
            <span className='font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground'>
              {active.lesson.minutes
                ? `${active.lesson.minutes} ${labels.minutes}`
                : labels.comingSoon}
            </span>
            {watched.includes(active.lesson.id) && (
              <span className='inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.16em] text-brand-text'>
                <Check className='h-3 w-3' /> {labels.watchedTag}
              </span>
            )}
          </div>
          <h3 className='bl-display mt-3 text-2xl text-ink sm:text-3xl'>
            {active.lesson.title}
          </h3>
          <p className='mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base'>
            {active.lesson.summary}
          </p>

          <div className='mt-6 flex items-center gap-2 border-t pt-5 sm:mt-auto'>
            {active.lesson.video && (
              <button
                type='button'
                onClick={() => playerRef.current?.enterFullscreen()}
                className='bl-btn bl-btn-ink inline-flex h-11 min-w-0 items-center gap-2.5 px-4 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] sm:px-5'
              >
                <Maximize2 className='h-4 w-4 shrink-0' />
                <span className='sm:hidden'>{labels.fullscreenShort}</span>
                <span className='hidden sm:inline'>{labels.fullscreen}</span>
              </button>
            )}
            <span className='flex-1' />
            <button
              type='button'
              onClick={() => previous && select(previous)}
              disabled={!previous}
              aria-label={labels.previous}
              title={labels.previous}
              className='flex h-11 w-11 items-center justify-center border border-line text-foreground transition-colors hover:border-brand hover:bg-brand-soft hover:text-brand-text disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-line disabled:hover:bg-transparent disabled:hover:text-foreground'
            >
              <ArrowLeft className='h-4 w-4' />
            </button>
            <button
              type='button'
              onClick={() => next && select(next)}
              disabled={!next}
              aria-label={labels.next}
              title={labels.next}
              className='flex h-11 items-center gap-2.5 bg-ink px-4 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-ink'
            >
              <span className='hidden sm:inline'>{labels.next}</span>
              <ArrowRight className='h-4 w-4' />
            </button>
          </div>
        </div>
      </div>

      {/* ---- Course → module → lesson. From `lg` the card fills the height
          the player column sets, so the list scrolls inside it instead of
          stretching the row. ---- */}
      <div className='relative lg:min-h-[28rem]'>
        <div className='bl-card flex min-h-0 flex-col overflow-hidden lg:absolute lg:inset-0'>
          {/* Course tabs when there is more than one course; the course
              name and its size otherwise. */}
          {courses.length > 1 ? (
            <div
              role='tablist'
              aria-label={labels.courses}
              className='bl-scrollbar flex overflow-x-auto border-b'
            >
              {courses.map((c) => {
                const isCurrent = c.id === course.id;
                return (
                  <button
                    key={c.id}
                    type='button'
                    role='tab'
                    aria-selected={isCurrent}
                    onClick={() => switchCourse(c)}
                    className={cn(
                      '-mb-px shrink-0 border-b-2 px-4 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors',
                      isCurrent
                        ? 'border-brand text-brand-text'
                        : 'border-transparent text-muted-foreground hover:text-ink',
                    )}
                  >
                    {c.title}
                  </button>
                );
              })}
            </div>
          ) : null}

          <div className='border-b px-4 pb-3 pt-4'>
            <div className='flex items-baseline justify-between gap-3'>
              <p className='bl-display truncate text-lg text-ink'>
                {course.title}
              </p>
              <p className='shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground'>
                <span className='text-brand-text'>{watchedCount}</span>/
                {entries.length} {labels.watched}
              </p>
            </div>
            <p className='mt-0.5 text-xs text-muted-foreground'>
              {course.modules.length} {labels.modules.toLowerCase()} &middot;{' '}
              {entries.length} {labels.lessons}
            </p>
            <div
              aria-hidden='true'
              className='mt-3 h-[3px] w-full bg-surface-2'
            >
              <div
                className='h-full bg-brand transition-[width] duration-500'
                style={{ width: `${progress}%` }}
              />
            </div>

            <label className='relative mt-3 block'>
              <Search className='pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground' />
              <input
                type='search'
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={labels.search}
                aria-label={labels.search}
                className='h-10 w-full border border-line bg-surface pl-9 pr-9 text-sm text-ink outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/40 [&::-webkit-search-cancel-button]:hidden'
              />
              {searching && (
                <button
                  type='button'
                  onClick={() => setQuery('')}
                  aria-label={labels.clearSearch}
                  className='absolute right-1.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center text-muted-foreground transition-colors hover:text-ink'
                >
                  <X className='h-3.5 w-3.5' />
                </button>
              )}
            </label>
          </div>

          <div
            ref={listRef}
            role='list'
            aria-label={labels.listLabel}
            className='bl-scrollbar max-h-[24rem] min-h-0 overflow-y-auto overscroll-contain lg:max-h-none lg:flex-1'
          >
            {visibleModules.length === 0 && (
              <p className='px-4 py-8 text-center text-sm text-muted-foreground'>
                {labels.noResults} &ldquo;{query.trim()}&rdquo;
              </p>
            )}

            {visibleModules.map(({ module, lessons }) => {
              const moduleIndex = course.modules.indexOf(module);
              const isOpen = searching || openModules.includes(module.id);
              const hasActive = module.lessons.some(
                (l) => l.id === active.lesson.id,
              );
              const done = module.lessons.filter((l) =>
                watched.includes(l.id),
              ).length;
              const minutes = minutesOf(module);
              const panelId = `module-${module.id}`;

              return (
                <div key={module.id} role='listitem' className='border-b'>
                  <button
                    type='button'
                    onClick={() => toggleModule(module.id)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className={cn(
                      'flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-surface-2',
                      hasActive && !isOpen && 'bg-brand-soft/30',
                    )}
                  >
                    <span className='w-6 shrink-0 font-mono text-[10px] font-semibold tabular-nums text-brand-text'>
                      {pad(moduleIndex + 1)}
                    </span>
                    <span className='min-w-0 flex-1'>
                      <span className='block truncate text-sm font-semibold text-ink'>
                        {module.title}
                      </span>
                      <span className='mt-0.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground'>
                        {module.lessons.length} {labels.lessons}
                        {minutes > 0 && (
                          <>
                            {' '}
                            &middot; {minutes} {labels.minutes}
                          </>
                        )}
                      </span>
                    </span>
                    <span className='shrink-0 font-mono text-[10px] tabular-nums text-muted-foreground'>
                      {done}/{module.lessons.length}
                    </span>
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200',
                        isOpen && 'rotate-180',
                      )}
                    />
                  </button>

                  {isOpen && (
                    <ul id={panelId} className='border-t bg-surface-2/40'>
                      {lessons.map((lesson) => {
                        const lessonIndex = module.lessons.indexOf(lesson);
                        const isActive = lesson.id === active.lesson.id;
                        const isWatched = watched.includes(lesson.id);
                        const entry = entries.find(
                          (e) => e.lesson.id === lesson.id,
                        )!;
                        return (
                          <li key={lesson.id}>
                            <button
                              type='button'
                              data-lesson={lesson.id}
                              onClick={() => select(entry)}
                              aria-current={isActive ? 'true' : undefined}
                              className={cn(
                                'group flex w-full items-center gap-3 border-l-2 py-2.5 pl-4 pr-4 text-left transition-colors',
                                isActive
                                  ? 'border-l-brand bg-brand-soft/50'
                                  : 'border-l-transparent hover:bg-surface-2',
                              )}
                            >
                              <span className='flex h-6 w-6 shrink-0 items-center justify-center border border-line bg-surface font-mono text-[10px] tabular-nums text-muted-foreground transition-colors group-hover:border-brand group-hover:text-brand-text'>
                                {isWatched ? (
                                  <Check className='h-3 w-3 text-brand-text' />
                                ) : lesson.video ? (
                                  isActive ? (
                                    <Play className='ml-px h-2.5 w-2.5 text-brand-text' />
                                  ) : (
                                    pad(lessonIndex + 1)
                                  )
                                ) : (
                                  <Lock
                                    className='h-2.5 w-2.5 opacity-60'
                                    strokeWidth={1.75}
                                  />
                                )}
                              </span>
                              <span
                                className={cn(
                                  'min-w-0 flex-1 truncate text-sm leading-snug',
                                  isActive
                                    ? 'font-medium text-brand-text'
                                    : 'text-ink',
                                )}
                              >
                                {lesson.title}
                              </span>
                              <span className='shrink-0 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground'>
                                {lesson.minutes
                                  ? `${lesson.minutes} ${labels.minutes}`
                                  : labels.comingSoon}
                              </span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
