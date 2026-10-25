'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { FaDiscord, FaRedditAlien } from 'react-icons/fa';

import { siteConfig } from '@/config/site';
import type { Dictionary } from '@/i18n/dictionaries/en';

/** A deliberately quiet community floater that expands only when it is wanted. */
export function CommunityDock({ dict }: { dict: Dictionary }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return (
    <div className='fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-40 sm:bottom-6 sm:right-6'>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.94 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className='absolute bottom-14 right-0 w-56 overflow-hidden border border-ink bg-surface shadow-[4px_4px_0_0_hsl(var(--brand))]'
          >
            <p className='border-b px-4 py-3 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground'>
              {dict.community.mobileJoin}
            </p>
            <div className='p-2'>
              <CommunityLink
                href={siteConfig.community.reddit}
                icon={FaRedditAlien}
                label='Reddit'
                detail='Ask, share, discuss'
                onClick={() => setOpen(false)}
              />
              <CommunityLink
                href={siteConfig.community.discord}
                icon={FaDiscord}
                label='Discord'
                detail='Talk with the community'
                onClick={() => setOpen(false)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type='button'
        onClick={() => setOpen((current) => !current)}
        aria-label={dict.community.mobileJoin}
        aria-expanded={open}
        className='group flex h-11 w-11 items-center justify-center gap-2 border border-ink bg-ink text-white shadow-[3px_3px_0_0_hsl(var(--brand))] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 sm:w-auto sm:px-4'
      >
        {open ? (
          <X className='h-4 w-4' aria-hidden='true' />
        ) : (
          <span className='flex -space-x-1.5' aria-hidden='true'>
            <span className='flex h-6 w-6 items-center justify-center rounded-full border border-ink bg-[#ff4500] text-white'>
              <FaRedditAlien className='h-3.5 w-3.5' />
            </span>
            <span className='flex h-6 w-6 items-center justify-center rounded-full border border-ink bg-[#5865f2] text-white'>
              <FaDiscord className='h-3.5 w-3.5' />
            </span>
          </span>
        )}
        {!open && (
          <span className='hidden font-mono text-[9px] font-semibold uppercase tracking-[0.14em] sm:inline'>
            {dict.community.mobileJoin}
          </span>
        )}
      </button>
    </div>
  );
}

function CommunityLink({
  href,
  icon: Icon,
  label,
  detail,
  onClick,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
  label: string;
  detail: string;
  onClick: () => void;
}) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      onClick={onClick}
      className='flex items-center gap-3 px-3 py-3 transition-colors hover:bg-brand-soft/45'
    >
      <Icon className='h-5 w-5 text-brand-text' aria-hidden />
      <span>
        <span className='block font-display text-lg leading-none text-foreground'>
          {label}
        </span>
        <span className='mt-1 block text-[11px] text-muted-foreground'>
          {detail}
        </span>
      </span>
    </a>
  );
}
