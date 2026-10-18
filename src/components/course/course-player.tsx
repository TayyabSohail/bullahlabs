'use client';

import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  Lock,
  Maximize2,
  Play,
} from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import {
  type PlayerLabels,
  VideoPlayer,
  type VideoPlayerHandle,
} from '@/components/course/video-player';

import { cn } from '@/lib/utils';

import {
  type CourseModule,
  flattenLessons,
  type LessonEntry,
} from '@/data/lessons';

export interface CoursePlayerLabels extends PlayerLabels {
  fullscreenShort: string;
  modules: string;
  module: string;
  lesson: string;
  lessons: string;
  published: string;
  watched: string;
  watchedTag: string;
  minutes: string;
  previous: string;
  next: string;
  upNext: string;
  listLabel: string;
}

interface CoursePlayerProps {
  modules: CourseModule[];
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

/**
 * The course as a player: the current lesson in a 16:9 frame with the
 * module list beside it. The list scrolls on its own so every module stays
 * reachable without the page growing; the frame stays put. Which lessons
 * have been watched is remembered in the browser only.
 */
export function CoursePlayer({
  modules,
  labels,
  placeholderAction,
  className,
}: CoursePlayerProps) {
  const entries = useMemo(() => flattenLessons(modules), [modules]);
  const published = entries.filter((entry) => entry.lesson.video);
  const firstPlayable = published[0] ?? entries[0];

  const [activeId, setActiveId] = useState<string>(firstPlayable?.lesson.id);
  const [watched, setWatched] = useState<string[]>([]);
  const playerRef = useRef<VideoPlayerHandle>(null);
  const listRef = useRef<HTMLDivElement>(null);

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

  const select = (entry: LessonEntry) => {
    setActiveId(entry.lesson.id);
    // Keep the chosen row in view inside the scrolling list.
    const row = listRef.current?.querySelector<HTMLElement>(
      `[data-lesson="${entry.lesson.id}"]`,
    );
    row?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  };

  if (!active) return null;

  const tag = `${labels.module} ${pad(active.moduleIndex + 1)} / ${labels.lesson} ${pad(active.lessonIndex + 1)}`;
  const watchedCount = watched.filter((id) =>
    entries.some((entry) => entry.lesson.id === id),
  ).length;

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
          onEnded={() => markWatched(active.lesson.id)}
          placeholderAction={placeholderAction}
          className='border-b'
        />

        <div className='flex flex-1 flex-col p-5 sm:p-6'>
          <div className='flex flex-wrap items-center gap-x-3 gap-y-2'>
            <p className='font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-text'>
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

      {/* ---- Modules, scrolling on their own. From `lg` the card fills the
          height the player column sets, so the list scrolls inside it instead
          of stretching the row. ---- */}
      <div className='relative lg:min-h-[28rem]'>
        <div className='bl-card flex min-h-0 flex-col overflow-hidden lg:absolute lg:inset-0'>
          <div className='flex items-end justify-between gap-4 border-b px-5 py-4'>
            <div>
              <p className='font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground'>
                {labels.modules}
              </p>
              <p className='mt-1 text-sm text-foreground'>
                {modules.length} {labels.modules.toLowerCase()} &middot;{' '}
                {entries.length} {labels.lessons}
              </p>
            </div>
            {published.length > 0 && (
              <div className='text-right font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground'>
                <p>
                  <span className='text-brand-text'>{published.length}</span>/
                  {entries.length} {labels.published}
                </p>
                <p>
                  <span className='text-brand-text'>{watchedCount}</span>/
                  {entries.length} {labels.watched}
                </p>
              </div>
            )}
          </div>

          <div
            ref={listRef}
            role='list'
            aria-label={labels.listLabel}
            className='bl-scrollbar max-h-[22rem] min-h-0 overflow-y-auto overscroll-contain lg:max-h-none lg:flex-1'
          >
            {modules.map((module, moduleIndex) => (
              <div key={module.id} role='listitem'>
                <div className='sticky top-0 z-[2] border-b bg-surface/95 px-5 py-3 backdrop-blur'>
                  <p className='font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-text'>
                    {labels.module} {pad(moduleIndex + 1)}
                  </p>
                  <p className='bl-display mt-1 text-lg text-ink'>
                    {module.title}
                  </p>
                  <p className='mt-0.5 text-xs text-muted-foreground'>
                    {module.tagline}
                  </p>
                </div>
                <ul>
                  {module.lessons.map((lesson, lessonIndex) => {
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
                            'group flex w-full items-start gap-3 border-b border-l-2 px-5 py-3.5 text-left transition-colors',
                            isActive
                              ? 'border-l-brand bg-brand-soft/40'
                              : 'border-l-transparent hover:bg-surface-2',
                          )}
                        >
                          <span className='mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border border-line bg-surface font-mono text-[10px] font-semibold tabular-nums text-muted-foreground transition-colors group-hover:border-brand group-hover:text-brand-text'>
                            {isWatched ? (
                              <Check className='h-3.5 w-3.5 text-brand-text' />
                            ) : lesson.video ? (
                              isActive ? (
                                <Play className='ml-px h-3 w-3 text-brand-text' />
                              ) : (
                                pad(lessonIndex + 1)
                              )
                            ) : (
                              <Lock
                                className='h-3 w-3 opacity-60'
                                strokeWidth={1.75}
                              />
                            )}
                          </span>
                          <span className='min-w-0 flex-1'>
                            <span
                              className={cn(
                                'block text-sm font-medium leading-snug',
                                isActive ? 'text-brand-text' : 'text-ink',
                              )}
                            >
                              {lesson.title}
                            </span>
                            {lesson.minutes ? (
                              <span className='mt-1 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground'>
                                <Clock className='h-3 w-3' />
                                {lesson.minutes} {labels.minutes}
                              </span>
                            ) : null}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {next && (
            <div className='border-t px-5 py-3'>
              <p className='font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground'>
                {labels.upNext}
              </p>
              <button
                type='button'
                onClick={() => select(next)}
                className='mt-1 line-clamp-1 text-left text-sm font-medium text-ink transition-colors hover:text-brand-text'
              >
                {next.lesson.title}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
