'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Check, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

import { setLocale } from '@/actions/locale';

import { Flag } from '@/components/brand/flags';

import { cn } from '@/lib/utils';

import { type Locale, LOCALES } from '@/i18n/config';

interface LocaleSwitcherProps {
  current: Locale;
  label: string;
  className?: string;
}

const FLAG_FOR: Record<Locale, string> = { en: 'US', de: 'DE' };
const NAME_FOR: Record<Locale, string> = { en: 'English', de: 'Deutsch' };

/**
 * The current flag and a chevron; opens a small menu of flag + language
 * name. Built on the Radix primitives rather than ui/dropdown-menu, whose
 * items force every svg to 16px and would squash the flags.
 */
export function LocaleSwitcher({
  current,
  label,
  className,
}: LocaleSwitcherProps) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const choose = (locale: Locale) => {
    if (locale === current) return;
    startTransition(async () => {
      await setLocale(locale);
      router.refresh();
    });
  };

  return (
    // Not modal: a modal menu locks page scroll, which shifts the layout
    // under Lenis for a menu this small.
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger
        aria-label={`${label}: ${NAME_FOR[current]}`}
        title={label}
        className={cn(
          'group inline-flex h-9 items-center gap-1.5 border border-ink/20 bg-white/60 pl-2.5 pr-2 transition-colors hover:border-ink/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 data-[state=open]:border-ink/60 data-[state=open]:bg-white',
          pending && 'opacity-60',
          className,
        )}
      >
        <Flag countryCode={FLAG_FOR[current]} className='h-3.5 w-[21px]' />
        <ChevronDown
          aria-hidden='true'
          className='h-3.5 w-3.5 text-ink/60 transition-transform duration-200 group-data-[state=open]:rotate-180'
        />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align='end'
          sideOffset={8}
          // Above the mobile menu overlay (z-65/70), which also hosts this.
          className='z-[80] min-w-[11rem] border border-ink/80 bg-surface p-1 shadow-[3px_3px_0_0_hsl(var(--ink)/0.9)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2'
        >
          <DropdownMenu.Label className='px-3 pb-1.5 pt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
            {label}
          </DropdownMenu.Label>
          {LOCALES.map((locale) => {
            const active = locale === current;
            return (
              <DropdownMenu.Item
                key={locale}
                lang={locale}
                onSelect={() => choose(locale)}
                className={cn(
                  'flex cursor-pointer select-none items-center gap-3 px-3 py-2.5 text-sm outline-none transition-colors data-[highlighted]:bg-brand-soft',
                  active ? 'font-semibold text-ink' : 'text-ink/75',
                )}
              >
                <Flag
                  countryCode={FLAG_FOR[locale]}
                  className='h-3.5 w-[21px] shrink-0'
                />
                <span className='flex-1'>{NAME_FOR[locale]}</span>
                {active && (
                  <Check
                    aria-hidden='true'
                    className='h-4 w-4 text-brand-text'
                  />
                )}
              </DropdownMenu.Item>
            );
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
