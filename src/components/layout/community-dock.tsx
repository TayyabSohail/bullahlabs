'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { FaDiscord, FaRedditAlien } from 'react-icons/fa';

import { siteConfig } from '@/config/site';
import type { Dictionary } from '@/i18n/dictionaries/en';

/** A single horizontal control that opens into its social destinations. */
export function CommunityDock({ dict }: { dict: Dictionary }) {
  const [open, setOpen] = useState(true);
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
    <div
      ref={dockRef}
      className='fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] right-3 z-40 sm:bottom-6 sm:right-6'
    >
      <motion.div
        layout
        transition={{ layout: { type: 'spring', stiffness: 420, damping: 32 } }}
        className='flex h-12 items-center overflow-hidden rounded-full border border-ink bg-ink text-white shadow-[3px_3px_0_hsl(var(--brand))]'
      >
        <button
          type='button'
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? 'Close community menu' : t.mobileJoin}
          aria-expanded={open}
          data-cta='community-dock'
          className='flex h-full shrink-0 items-center gap-2 px-3 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-inset'
        >
          {open ? (
            <X className='h-4 w-4' aria-hidden />
          ) : (
            <SocialMarks />
          )}
          <span className='font-mono text-[10px] font-bold uppercase tracking-[0.12em]'>
            {open ? t.dockOpen : 'Community'}
          </span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 'auto', opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className='flex h-full items-center overflow-hidden border-l border-white/20'
            >
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
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

function SocialMarks() {
  return (
    <span className='flex -space-x-1.5' aria-hidden>
      <span className='flex h-6 w-6 items-center justify-center rounded-full border border-ink bg-[#ff4500] text-white'>
        <FaRedditAlien className='h-3.5 w-3.5' />
      </span>
      <span className='flex h-6 w-6 items-center justify-center rounded-full border border-ink bg-[#5865f2] text-white'>
        <FaDiscord className='h-3.5 w-3.5' />
      </span>
    </span>
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
      className='flex h-full w-12 shrink-0 items-center justify-center transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-inset'
    >
      <span
        className='flex h-7 w-7 items-center justify-center rounded-full text-white'
        style={{ backgroundColor: accent }}
      >
        <Icon className='h-4 w-4' aria-hidden />
      </span>
    </a>
  );
}
