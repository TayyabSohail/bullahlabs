'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { ArrowUpRight, Mail, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { FaDiscord, FaRedditAlien } from 'react-icons/fa';

import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { cn } from '@/lib/utils';

import { siteConfig } from '@/config/site';

const places = [
  {
    key: 'reddit',
    label: 'Reddit',
    detail: 'r/AI_Conscious · ask the "dumb" questions, nobody judges',
    href: siteConfig.community.reddit,
    icon: FaRedditAlien,
    className: 'border-[#ff4500] bg-[#fff7f2] hover:bg-[#ffece2]',
    iconClassName: 'bg-[#ff4500]',
  },
  {
    key: 'discord',
    label: 'Discord',
    detail: 'Bullah Labs server · swap what works, skip what wastes',
    href: siteConfig.community.discord,
    icon: FaDiscord,
    className: 'border-[#5865f2] bg-[#f5f5ff] hover:bg-[#ebebff]',
    iconClassName: 'bg-[#5865f2]',
  },
];

/**
 * "Talk to real humans": a button that opens a small window with the
 * places a person actually answers, instead of scrolling the page away.
 */
export function TalkToHumansButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  // Freeze the smooth scroller while the window is up, as the mobile menu
  // does, so a wheel over the popup cannot move the page underneath.
  useEffect(() => {
    document.documentElement.classList.toggle('lenis-stopped', open);
    return () => {
      document.documentElement.classList.remove('lenis-stopped');
    };
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className={cn('inline-flex items-center', className)}
        data-cta='talk-to-humans'
      >
        {children}
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay
          data-lenis-prevent
          className='bg-ink/35 backdrop-blur-[2px]'
        />
        <DialogPrimitive.Content
          data-lenis-prevent
          className='bl-card bl-grid-surface fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 p-6 shadow-[4px_4px_0_0_hsl(var(--brand))] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:p-8'
        >
          <p className='bl-kicker'>Real humans</p>
          <DialogTitle className='bl-display mt-4 text-3xl leading-tight text-ink'>
            Talk to a real human.
          </DialogTitle>
          <DialogDescription className='mt-2 text-sm leading-relaxed text-muted-foreground'>
            Pick a place. Someone from Bullah Labs reads all three.
          </DialogDescription>

          <div className='mt-6 grid gap-3'>
            {places.map(
              ({
                key,
                label,
                detail,
                href,
                icon: Icon,
                className: rowClassName,
                iconClassName,
              }) => (
                <a
                  key={key}
                  href={href}
                  target='_blank'
                  rel='noreferrer'
                  data-cta={`talk-${key}`}
                  className={cn(
                    'group flex items-center gap-4 border p-4 text-ink shadow-[3px_3px_0_0_hsl(var(--ink))] transition-transform hover:-translate-y-0.5',
                    rowClassName,
                  )}
                >
                  <span
                    className={cn(
                      'flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white',
                      iconClassName,
                    )}
                  >
                    <Icon className='h-5 w-5' aria-hidden='true' />
                  </span>
                  <span className='min-w-0 flex-1'>
                    <span className='bl-display block text-xl'>{label}</span>
                    <span className='block text-xs leading-snug text-muted-foreground'>
                      {detail}
                    </span>
                  </span>
                  <ArrowUpRight
                    className='h-4 w-4 shrink-0 text-ink/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                    aria-hidden='true'
                  />
                </a>
              ),
            )}
            {siteConfig.publicEmail ? (
              <a
                href={`mailto:${siteConfig.publicEmail}`}
                data-cta='talk-email'
                className='group flex items-center gap-4 border border-ink bg-surface p-4 text-ink shadow-[3px_3px_0_0_hsl(var(--ink))] transition-transform hover:-translate-y-0.5'
              >
                <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-white'>
                  <Mail className='h-5 w-5' aria-hidden='true' />
                </span>
                <span className='min-w-0 flex-1'>
                  <span className='bl-display block text-xl'>Email</span>
                  <span className='block text-xs leading-snug text-muted-foreground'>
                    {siteConfig.publicEmail} · {siteConfig.responseTime}
                  </span>
                </span>
                <ArrowUpRight
                  className='h-4 w-4 shrink-0 text-ink/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                  aria-hidden='true'
                />
              </a>
            ) : null}
          </div>

          <DialogClose className='absolute right-4 top-4 p-1 text-ink/50 transition-colors hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/60'>
            <X className='h-4 w-4' />
            <span className='sr-only'>Close</span>
          </DialogClose>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}
