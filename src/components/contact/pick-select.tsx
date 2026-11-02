'use client';

import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * A single-answer picker drawn like the rest of the retro system: a ruled
 * box with a separate chevron cell on the right, a hard offset shadow when
 * it is open, and an ivory ledger of options on an ink shadow. The chosen
 * row is marked with a filled square, and the chevron cell turns brand
 * once a value exists so the three pickers read as "done" at a glance.
 *
 * Built for the ink contact card, so the trigger is tuned for a dark
 * background while the open ledger uses the site's light surface.
 */

interface PickSelectProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>,
    'value' | 'onValueChange' | 'placeholder'
  > {
  value: string;
  onValueChange: (value: string) => void;
  placeholder: string;
  options: Array<[value: string, label: string]>;
}

export const PickSelect = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  PickSelectProps
>(({ value, onValueChange, placeholder, options, className, ...rest }, ref) => {
  const filled = value !== '';
  return (
    <SelectPrimitive.Root value={value} onValueChange={onValueChange}>
      {/* Any id / aria props from FormControl land on the trigger. */}
      <SelectPrimitive.Trigger
        ref={ref}
        {...rest}
        className={cn(
          'group flex h-12 w-full items-stretch rounded-none border border-white/30 bg-transparent text-left text-[15px] text-white outline-none transition-[border-color,box-shadow,transform] duration-150',
          'hover:border-white/70',
          'focus-visible:border-brand focus-visible:shadow-[3px_3px_0_0_hsl(var(--brand))]',
          'data-[state=open]:-translate-x-px data-[state=open]:-translate-y-px data-[state=open]:border-brand data-[state=open]:shadow-[3px_3px_0_0_hsl(var(--brand))]',
          'data-[placeholder]:text-white/45',
          className,
        )}
      >
        <span className='flex min-w-0 flex-1 items-center px-4 [&>span]:truncate'>
          <SelectPrimitive.Value placeholder={placeholder} />
        </span>
        <SelectPrimitive.Icon asChild>
          <span
            aria-hidden
            className={cn(
              'flex w-11 shrink-0 items-center justify-center border-l border-white/30 transition-colors duration-150',
              'group-hover:border-white/70 group-focus-visible:border-brand group-data-[state=open]:border-brand',
              filled
                ? 'bg-brand text-brand-foreground'
                : 'bg-white/[0.06] text-white/70 group-data-[state=open]:bg-brand group-data-[state=open]:text-brand-foreground',
            )}
          >
            <ChevronDown
              strokeWidth={2.25}
              className='h-4 w-4 transition-transform duration-150 group-data-[state=open]:rotate-180'
            />
          </span>
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          position='popper'
          sideOffset={6}
          className={cn(
            'relative z-50 w-[var(--radix-select-trigger-width)] overflow-hidden rounded-none border border-ink bg-surface text-foreground',
            // Brand, not ink: an ink shadow disappears against the ink card.
            'shadow-[4px_4px_0_0_hsl(var(--brand))]',
            'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-top-1 data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
          )}
        >
          <SelectPrimitive.Viewport className='max-h-80 overflow-y-auto'>
            {options.map(([optionValue, label]) => (
              <SelectPrimitive.Item
                key={optionValue}
                value={optionValue}
                className={cn(
                  'group relative flex h-11 cursor-pointer select-none items-center justify-between gap-4 border-b border-ink/15 px-4 text-[15px] outline-none last:border-b-0',
                  'data-[highlighted]:bg-ink data-[highlighted]:text-white',
                  'data-[state=checked]:font-semibold',
                  'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                )}
              >
                <SelectPrimitive.ItemText>{label}</SelectPrimitive.ItemText>
                <span
                  aria-hidden
                  className='flex h-3.5 w-3.5 shrink-0 items-center justify-center border border-ink/40 group-data-[highlighted]:border-white/60'
                >
                  <SelectPrimitive.ItemIndicator>
                    <span className='block h-2 w-2 bg-brand' />
                  </SelectPrimitive.ItemIndicator>
                </span>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
});
PickSelect.displayName = 'PickSelect';
