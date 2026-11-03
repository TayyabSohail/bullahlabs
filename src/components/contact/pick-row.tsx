'use client';

import { Check } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * One numbered question and a row of answer cells. The question reads as
 * a full sentence under a small numeral, so the three together feel like
 * a short questionnaire rather than a filter bar. Each answer is its own
 * soft cell: rounded, faint border, a little breathing room between
 * them. The chosen cell turns brand with a tick; the rest stay quiet.
 *
 * Native radio inputs underneath, so keyboard, screen readers and form
 * autofill all behave without any extra wiring.
 */

interface PickRowProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  /** 1-based position shown as "01", "02", "03". */
  index: number;
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  options: Array<[value: string, label: string]>;
}

export const PickRow = React.forwardRef<HTMLDivElement, PickRowProps>(
  (
    {
      name,
      index,
      label,
      value,
      onValueChange,
      options,
      className,
      id,
      ...rest
    },
    ref,
  ) => {
    const groupId = id ?? `${name}-group`;
    const labelId = `${groupId}-label`;
    return (
      <div
        ref={ref}
        id={groupId}
        role='radiogroup'
        aria-labelledby={labelId}
        {...rest}
        className={cn('space-y-3.5', className)}
      >
        <div className='flex items-baseline gap-3'>
          <span
            aria-hidden
            className='font-mono text-[11px] font-semibold tracking-[0.12em] text-brand'
          >
            {String(index).padStart(2, '0')}
          </span>
          <span
            id={labelId}
            className='font-display text-base font-semibold leading-snug text-white sm:text-[17px]'
          >
            {label}
          </span>
        </div>

        {/* Round pills that size to their word and wrap as they need. */}
        <div className='flex flex-wrap gap-2.5'>
          {options.map(([optionValue, optionLabel]) => {
            const checked = optionValue === value;
            const inputId = `${groupId}-${optionValue}`;
            return (
              <label
                key={optionValue}
                htmlFor={inputId}
                className={cn(
                  'inline-flex min-h-[2.75rem] cursor-pointer select-none items-center gap-2.5 rounded-full border py-2 pl-2.5 pr-5 text-[14px] leading-tight transition-[border-color,background-color,color] duration-150',
                  'has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand/70 has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-ink',
                  checked
                    ? 'border-brand/80 bg-brand/15 text-white'
                    : 'border-white/15 bg-white/[0.04] text-white/80 hover:border-white/35 hover:bg-white/[0.07] hover:text-white',
                )}
              >
                <input
                  id={inputId}
                  type='radio'
                  name={name}
                  value={optionValue}
                  checked={checked}
                  onChange={() => onValueChange(optionValue)}
                  className='sr-only'
                />
                <span
                  aria-hidden
                  className={cn(
                    'flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors duration-150',
                    checked
                      ? 'border-brand bg-brand text-brand-foreground'
                      : 'border-white/25 bg-transparent text-transparent',
                  )}
                >
                  <Check className='h-3 w-3' strokeWidth={3} />
                </span>
                <span className={cn(checked && 'font-medium')}>
                  {optionLabel}
                </span>
              </label>
            );
          })}
        </div>
      </div>
    );
  },
);
PickRow.displayName = 'PickRow';
