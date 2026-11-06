'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { FaDiscord, FaRedditAlien } from 'react-icons/fa';

import { siteConfig } from '@/config/site';
import type { Dictionary } from '@/i18n/dictionaries/en';

/**
 * A compact community trigger that opens a deliberately roomy menu of social
 * destinations. It sits inside the CornerDock, which fixes it to the
 * bottom-right corner.
 */
export function CommunityDock({ dict }: { dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const dockRef = useRef<HTMLDivElement>(null);
  const t = dict.community;

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  useEffect(() => {
    const closeOnOutsidePress = (event: PointerEvent) => {
      if (!dockRef.current?.contains(event.target as Node)) setOpen(false);
    };
    window.addEventListener('pointerdown', closeOnOutsidePress);
    return () => window.removeEventListener('pointerdown', closeOnOutsidePress);
  }, []);

  return (
    <div ref={dockRef} className='relative shrink-0'>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className='absolute bottom-[calc(100%+0.75rem)] right-0 w-48 border border-ink bg-ink p-2 text-white shadow-[3px_3px_0_hsl(var(--brand))]'
          >
            <p className='px-1 pb-2 pt-1 font-mono text-[9px] font-bold uppercase tracking-[0.13em] text-white/70'>
              {t.mobileJoin}
            </p>
            <div className='space-y-2'>
              <SocialLink
                href={siteConfig.community.reddit}
                icon={FaRedditAlien}
                label={t.links.reddit.label}
                accent='#ff4500'
                onClick={() => setOpen(false)}
              />
              <SocialLink
                href={siteConfig.community.discord}
                icon={FaDiscord}
                label={t.links.discord.label}
                accent='#5865f2'
                onClick={() => setOpen(false)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type='button'
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? t.closeMenu : t.mobileJoin}
        aria-expanded={open}
        data-cta='community-dock'
        title={open ? t.closeMenu : t.mobileJoin}
        className='relative flex h-14 w-14 items-center justify-center rounded-full border border-white bg-ink text-white shadow-[3px_3px_0_hsl(var(--brand))] transition-[transform,box-shadow] duration-200 hover:-translate-x-px hover:-translate-y-px hover:shadow-[4px_4px_0_hsl(var(--brand))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none'
      >
        {open ? (
          <X className='h-5 w-5' aria-hidden />
        ) : (
          <span className='flex -space-x-1.5' aria-hidden>
            <span className='z-10 flex h-7 w-7 items-center justify-center rounded-full border border-ink bg-[#ff4500] text-white'>
              <FaRedditAlien className='h-4 w-4' />
            </span>
            <span className='flex h-7 w-7 items-center justify-center rounded-full border border-ink bg-[#5865f2] text-white'>
              <FaDiscord className='h-4 w-4' />
            </span>
          </span>
        )}
        {!open && (
          <span className='absolute -right-3 -top-1 rounded-full border border-ink bg-brand px-1.5 py-0.5 font-mono text-[8px] font-black uppercase tracking-[0.12em] text-brand-foreground shadow-[1px_1px_0_hsl(var(--ink))]'>
            Join
          </span>
        )}
      </button>
    </div>
  );
}

function SocialLink({
  href,
  icon: Icon,
  label,
  accent,
  onClick,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
  label: string;
  accent: string;
  onClick: () => void;
}) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      onClick={onClick}
      aria-label={label}
      title={label}
      className='flex h-12 w-full items-center gap-3 border border-white/30 bg-white/10 px-3 text-left transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand'
    >
      <span
        className='flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white'
        style={{ backgroundColor: accent }}
      >
        <Icon className='h-4 w-4' aria-hidden />
      </span>
      <span className='font-mono text-[10px] font-bold uppercase tracking-[0.12em]'>
        {label}
      </span>
    </a>
  );
}
