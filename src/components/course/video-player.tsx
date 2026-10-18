'use client';

import {
  Clock,
  Maximize2,
  Minimize2,
  Pause,
  PictureInPicture2,
  Play,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
} from 'lucide-react';
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { cn } from '@/lib/utils';

import type { VideoSource } from '@/data/lessons';

export interface PlayerLabels {
  play: string;
  pause: string;
  mute: string;
  unmute: string;
  speed: string;
  fullscreen: string;
  exitFullscreen: string;
  pip: string;
  back: string;
  forward: string;
  loadEmbed: string;
  comingSoon: string;
  nothingYet: string;
  seek: string;
}

export interface VideoPlayerHandle {
  /** Puts the whole player (controls included) into full screen. */
  enterFullscreen: () => void;
}

interface VideoPlayerProps {
  source?: VideoSource;
  title: string;
  /** Shown top-left on the frame, e.g. "Module 01 / Lesson 02". */
  tag: string;
  labels: PlayerLabels;
  /** Called once when a file lesson plays to its end. */
  onEnded?: () => void;
  /** Rendered over an unpublished lesson, under the note. */
  placeholderAction?: React.ReactNode;
  className?: string;
}

const RATES = [0.75, 1, 1.25, 1.5, 2];
const SKIP_SECONDS = 10;
const IDLE_MS = 2600;

const ICON_BUTTON =
  'flex h-9 w-9 shrink-0 items-center justify-center text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/70 disabled:opacity-40';

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const whole = Math.floor(seconds);
  const h = Math.floor(whole / 3600);
  const m = Math.floor((whole % 3600) / 60);
  const s = whole % 60;
  const mm = h > 0 ? String(m).padStart(2, '0') : String(m);
  return `${h > 0 ? `${h}:` : ''}${mm}:${String(s).padStart(2, '0')}`;
}

interface IosVideoElement extends HTMLVideoElement {
  webkitEnterFullscreen?: () => void;
}

/**
 * The lesson frame. A hosted file plays in a `<video>` with the site's own
 * controls: play, skip, seek, volume, speed, picture in picture and full
 * screen, with the usual keyboard shortcuts while the frame has focus.
 * YouTube and Vimeo lessons load their iframe only after a click, so no
 * third-party request happens until the visitor asks for the video. A lesson
 * without a source shows the coming-soon frame.
 */
export const VideoPlayer = forwardRef<VideoPlayerHandle, VideoPlayerProps>(
  function VideoPlayer(
    { source, title, tag, labels, onEnded, placeholderAction, className },
    ref,
  ) {
    const frameRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<IosVideoElement>(null);
    const idleTimer = useRef<number | null>(null);

    const [embedLoaded, setEmbedLoaded] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(false);
    const [rate, setRate] = useState(1);
    const [current, setCurrent] = useState(0);
    const [duration, setDuration] = useState(0);
    const [buffered, setBuffered] = useState(0);
    const [fullscreen, setFullscreen] = useState(false);
    const [controlsVisible, setControlsVisible] = useState(true);
    const [pipSupported, setPipSupported] = useState(false);

    const isFile = source?.kind === 'file';

    // Reset per lesson.
    useEffect(() => {
      setEmbedLoaded(false);
      setPlaying(false);
      setCurrent(0);
      setDuration(0);
      setBuffered(0);
      setControlsVisible(true);
    }, [source]);

    useEffect(() => {
      setPipSupported(
        typeof document !== 'undefined' &&
          'pictureInPictureEnabled' in document,
      );
    }, []);

    useEffect(() => {
      const onChange = () =>
        setFullscreen(document.fullscreenElement === frameRef.current);
      document.addEventListener('fullscreenchange', onChange);
      return () => document.removeEventListener('fullscreenchange', onChange);
    }, []);

    const enterFullscreen = useCallback(() => {
      const frame = frameRef.current;
      if (!frame) return;
      if (document.fullscreenElement === frame) {
        void document.exitFullscreen?.();
        return;
      }
      if (frame.requestFullscreen) {
        void frame.requestFullscreen().catch(() => {
          // iOS Safari: only the video element itself can go full screen.
          videoRef.current?.webkitEnterFullscreen?.();
        });
        return;
      }
      videoRef.current?.webkitEnterFullscreen?.();
    }, []);

    useImperativeHandle(ref, () => ({ enterFullscreen }), [enterFullscreen]);

    const togglePlay = useCallback(() => {
      const video = videoRef.current;
      if (!video) return;
      if (video.paused) void video.play();
      else video.pause();
    }, []);

    const skip = useCallback((delta: number) => {
      const video = videoRef.current;
      if (!video) return;
      video.currentTime = Math.min(
        Math.max(0, video.currentTime + delta),
        video.duration || Infinity,
      );
    }, []);

    const toggleMute = useCallback(() => {
      const video = videoRef.current;
      if (!video) return;
      video.muted = !video.muted;
      setMuted(video.muted);
    }, []);

    const cycleRate = useCallback(() => {
      const video = videoRef.current;
      if (!video) return;
      const next =
        RATES[(RATES.indexOf(video.playbackRate) + 1) % RATES.length];
      video.playbackRate = next;
      setRate(next);
    }, []);

    const togglePip = useCallback(async () => {
      const video = videoRef.current;
      if (!video || !document.pictureInPictureEnabled) return;
      try {
        if (document.pictureInPictureElement) {
          await document.exitPictureInPicture();
        } else {
          await video.requestPictureInPicture();
        }
      } catch {
        // Not available for this stream; nothing to do.
      }
    }, []);

    // Controls fade while a file plays and the pointer rests.
    const wake = useCallback(() => {
      setControlsVisible(true);
      if (idleTimer.current) window.clearTimeout(idleTimer.current);
      idleTimer.current = window.setTimeout(() => {
        if (videoRef.current && !videoRef.current.paused) {
          setControlsVisible(false);
        }
      }, IDLE_MS);
    }, []);

    useEffect(
      () => () => {
        if (idleTimer.current) window.clearTimeout(idleTimer.current);
      },
      [],
    );

    const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (!isFile) return;
      const target = event.target as HTMLElement;
      if (target.tagName === 'INPUT') return;
      switch (event.key) {
        case ' ':
        case 'k':
          event.preventDefault();
          togglePlay();
          break;
        case 'ArrowLeft':
        case 'j':
          event.preventDefault();
          skip(-SKIP_SECONDS);
          break;
        case 'ArrowRight':
        case 'l':
          event.preventDefault();
          skip(SKIP_SECONDS);
          break;
        case 'f':
          event.preventDefault();
          enterFullscreen();
          break;
        case 'm':
          event.preventDefault();
          toggleMute();
          break;
        default:
          return;
      }
      wake();
    };

    const progress = duration > 0 ? (current / duration) * 100 : 0;
    const bufferedPct = duration > 0 ? (buffered / duration) * 100 : 0;

    return (
      <div
        ref={frameRef}
        tabIndex={isFile ? 0 : -1}
        onKeyDown={onKeyDown}
        onMouseMove={isFile ? wake : undefined}
        onMouseLeave={
          isFile
            ? () => {
                if (playing) setControlsVisible(false);
              }
            : undefined
        }
        onTouchStart={isFile ? wake : undefined}
        aria-label={title}
        className={cn(
          'group/player relative w-full overflow-hidden bg-ink text-white outline-none focus-visible:ring-2 focus-visible:ring-brand/70',
          // The coming-soon frame holds a form, so on phones it grows with
          // its content instead of being locked to 16:9.
          source
            ? 'aspect-video'
            : 'min-h-[16rem] bg-[repeating-linear-gradient(135deg,transparent_0_14px,hsl(0_0%_100%/0.035)_14px_15px)] sm:aspect-video',
          fullscreen && 'flex aspect-auto h-full items-center justify-center',
          className,
        )}
      >
        {/* Tag, hidden once a file plays so the frame is clean */}
        <span
          className={cn(
            'pointer-events-none absolute left-4 top-4 z-[3] font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55 transition-opacity duration-300',
            isFile && playing && !controlsVisible && 'opacity-0',
            embedLoaded && 'opacity-0',
          )}
        >
          {tag}
        </span>

        {/* ---- No video yet ---- */}
        {!source && (
          <>
            <div className='relative flex flex-col items-center justify-center px-5 pb-16 pt-14 text-center sm:absolute sm:inset-0 sm:px-6 sm:py-0'>
              <span className='flex h-12 w-12 items-center justify-center border border-white/15 bg-white/[0.06] text-white/70 backdrop-blur-sm sm:h-14 sm:w-14'>
                <Clock className='h-5 w-5' strokeWidth={1.5} />
              </span>
              <p className='mt-4 max-w-sm text-sm leading-relaxed text-white/65 sm:mt-5 sm:text-base'>
                {labels.nothingYet}
              </p>
              {placeholderAction && (
                <div className='mt-5 w-full max-w-md'>{placeholderAction}</div>
              )}
            </div>
            <span className='absolute bottom-4 right-4 border border-brand bg-brand px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brand-foreground'>
              {labels.comingSoon}
            </span>
          </>
        )}

        {/* ---- Embedded lesson (YouTube / Vimeo), loaded on demand ---- */}
        {source && source.kind !== 'file' && (
          <>
            {embedLoaded ? (
              <iframe
                src={embedUrl(source)}
                title={title}
                allow='autoplay; fullscreen; picture-in-picture; encrypted-media'
                allowFullScreen
                referrerPolicy='strict-origin-when-cross-origin'
                className='absolute inset-0 h-full w-full border-0'
              />
            ) : (
              <button
                type='button'
                onClick={() => setEmbedLoaded(true)}
                className='absolute inset-0 flex items-center justify-center bg-[radial-gradient(60%_60%_at_50%_50%,hsl(var(--brand)/0.18),transparent_70%)]'
                aria-label={`${labels.loadEmbed}: ${title}`}
              >
                <span className='flex h-16 w-16 items-center justify-center border border-white/20 bg-white/[0.08] text-white backdrop-blur-sm transition-colors group-hover/player:border-brand group-hover/player:bg-brand group-hover/player:text-brand-foreground'>
                  <Play className='ml-0.5 h-6 w-6' strokeWidth={1.5} />
                </span>
                <span className='absolute bottom-4 left-4 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60'>
                  {labels.loadEmbed}
                </span>
              </button>
            )}
            <button
              type='button'
              onClick={enterFullscreen}
              aria-label={
                fullscreen ? labels.exitFullscreen : labels.fullscreen
              }
              title={fullscreen ? labels.exitFullscreen : labels.fullscreen}
              className={cn(
                ICON_BUTTON,
                'absolute bottom-3 right-3 z-[3] border border-white/15 bg-ink/70 backdrop-blur-sm',
              )}
            >
              {fullscreen ? (
                <Minimize2 className='h-4 w-4' />
              ) : (
                <Maximize2 className='h-4 w-4' />
              )}
            </button>
          </>
        )}

        {/* ---- Hosted file with our own controls ---- */}
        {source?.kind === 'file' && (
          <>
            <video
              ref={videoRef}
              src={source.src}
              poster={source.poster}
              playsInline
              preload='metadata'
              onClick={togglePlay}
              onPlay={() => {
                setPlaying(true);
                wake();
              }}
              onPause={() => {
                setPlaying(false);
                setControlsVisible(true);
              }}
              onEnded={() => {
                setPlaying(false);
                setControlsVisible(true);
                onEnded?.();
              }}
              onTimeUpdate={(event) =>
                setCurrent(event.currentTarget.currentTime)
              }
              onDurationChange={(event) =>
                setDuration(event.currentTarget.duration)
              }
              onProgress={(event) => {
                const ranges = event.currentTarget.buffered;
                if (ranges.length > 0)
                  setBuffered(ranges.end(ranges.length - 1));
              }}
              onVolumeChange={(event) => setMuted(event.currentTarget.muted)}
              onRateChange={(event) =>
                setRate(event.currentTarget.playbackRate)
              }
              className={cn(
                'h-full w-full cursor-pointer object-contain',
                fullscreen ? 'max-h-full' : 'absolute inset-0',
              )}
            />

            {/* Big play button while paused */}
            {!playing && (
              <button
                type='button'
                onClick={togglePlay}
                aria-label={labels.play}
                className='absolute inset-0 z-[2] flex items-center justify-center'
              >
                <span className='flex h-16 w-16 items-center justify-center border border-white/20 bg-white/[0.08] text-white backdrop-blur-sm transition-colors hover:border-brand hover:bg-brand hover:text-brand-foreground'>
                  <Play className='ml-0.5 h-6 w-6' strokeWidth={1.5} />
                </span>
              </button>
            )}

            {/* Control bar */}
            <div
              className={cn(
                'absolute inset-x-0 bottom-0 z-[3] bg-gradient-to-t from-ink/90 via-ink/60 to-transparent px-3 pb-2 pt-10 transition-opacity duration-300 sm:px-4',
                !controlsVisible && 'pointer-events-none opacity-0',
              )}
            >
              {/* Seek */}
              <div className='relative h-5 w-full'>
                <div className='absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 bg-white/20'>
                  <span
                    className='absolute inset-y-0 left-0 bg-white/30'
                    style={{ width: `${bufferedPct}%` }}
                  />
                  <span
                    className='absolute inset-y-0 left-0 bg-brand'
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <input
                  type='range'
                  min={0}
                  max={duration || 0}
                  step={0.1}
                  value={Math.min(current, duration || 0)}
                  onChange={(event) => {
                    const video = videoRef.current;
                    if (!video) return;
                    video.currentTime = Number(event.target.value);
                    setCurrent(video.currentTime);
                  }}
                  aria-label={labels.seek}
                  aria-valuetext={`${formatTime(current)} / ${formatTime(duration)}`}
                  className='bl-seek absolute inset-0 h-full w-full cursor-pointer appearance-none bg-transparent'
                />
              </div>

              <div className='mt-1 flex items-center gap-1 sm:gap-2'>
                <button
                  type='button'
                  onClick={togglePlay}
                  aria-label={playing ? labels.pause : labels.play}
                  className={ICON_BUTTON}
                >
                  {playing ? (
                    <Pause className='h-4 w-4' />
                  ) : (
                    <Play className='ml-0.5 h-4 w-4' />
                  )}
                </button>
                <button
                  type='button'
                  onClick={() => skip(-SKIP_SECONDS)}
                  aria-label={labels.back}
                  className={cn(ICON_BUTTON, 'hidden sm:flex')}
                >
                  <RotateCcw className='h-4 w-4' />
                </button>
                <button
                  type='button'
                  onClick={() => skip(SKIP_SECONDS)}
                  aria-label={labels.forward}
                  className={cn(ICON_BUTTON, 'hidden sm:flex')}
                >
                  <RotateCw className='h-4 w-4' />
                </button>
                <button
                  type='button'
                  onClick={toggleMute}
                  aria-label={muted ? labels.unmute : labels.mute}
                  className={ICON_BUTTON}
                >
                  {muted ? (
                    <VolumeX className='h-4 w-4' />
                  ) : (
                    <Volume2 className='h-4 w-4' />
                  )}
                </button>
                <span className='ml-1 font-mono text-[11px] tabular-nums text-white/80'>
                  {formatTime(current)}
                  <span className='text-white/40'>
                    {' '}
                    / {formatTime(duration)}
                  </span>
                </span>

                <span className='flex-1' />

                <button
                  type='button'
                  onClick={cycleRate}
                  aria-label={`${labels.speed}: ${rate}x`}
                  title={labels.speed}
                  className={cn(
                    ICON_BUTTON,
                    'w-auto px-2 font-mono text-[11px] font-semibold tabular-nums',
                  )}
                >
                  {rate}x
                </button>
                {pipSupported && (
                  <button
                    type='button'
                    onClick={togglePip}
                    aria-label={labels.pip}
                    title={labels.pip}
                    className={cn(ICON_BUTTON, 'hidden sm:flex')}
                  >
                    <PictureInPicture2 className='h-4 w-4' />
                  </button>
                )}
                <button
                  type='button'
                  onClick={enterFullscreen}
                  aria-label={
                    fullscreen ? labels.exitFullscreen : labels.fullscreen
                  }
                  title={fullscreen ? labels.exitFullscreen : labels.fullscreen}
                  className={ICON_BUTTON}
                >
                  {fullscreen ? (
                    <Minimize2 className='h-4 w-4' />
                  ) : (
                    <Maximize2 className='h-4 w-4' />
                  )}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    );
  },
);

function embedUrl(source: Exclude<VideoSource, { kind: 'file' }>) {
  if (source.kind === 'youtube') {
    const params = new URLSearchParams({
      autoplay: '1',
      rel: '0',
      modestbranding: '1',
      playsinline: '1',
    });
    return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(source.id)}?${params}`;
  }
  const params = new URLSearchParams({
    autoplay: '1',
    dnt: '1',
    title: '0',
    byline: '0',
    portrait: '0',
  });
  if (source.hash) params.set('h', source.hash);
  return `https://player.vimeo.com/video/${encodeURIComponent(source.id)}?${params}`;
}
