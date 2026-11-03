'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * One question, one joined strip of answers. The strip is a ruled box cut
 * into equal cells by hairlines; the chosen cell fills brand and the rest
 * sit on the ink card as plain text. Nothing opens, nothing hides: three
 * strips stack under their labels like the text fields below them, so the
 * card reads as one set of ruled boxes from top to bottom.
 *
 * Native radio inputs underneath, so keyboard, screen readers and form
 * autofill all behave without any extra wiring.
 */

interface PickRowProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  options: Array<[value: string, label: string]>;
}

export const PickRow = React.forwardRef<HTMLDivElement, PickRowProps>(
  (
    { name, label, value, onValueChange, options, className, id, ...rest },
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
        className={cn('space-y-2', className)}
      >
        <span
          id={labelId}
          className='block text-sm font-medium leading-none text-white'
        >
          {label}
        </span>
        {/* gap-px over a pale background draws the hairlines between cells. */}
        <div className='grid grid-cols-2 gap-px border border-white/30 bg-white/30 sm:grid-cols-3 lg:grid-flow-col lg:auto-cols-fr'>
          {options.map(([optionValue, optionLabel]) => {
            const checked = optionValue === value;
            const inputId = `${groupId}-${optionValue}`;
            return (
              <label
                key={optionValue}
                htmlFor={inputId}
                className={cn(
                  'flex min-h-12 cursor-pointer select-none items-center justify-center px-3 py-2 text-center text-[14px] leading-tight transition-colors duration-150',
                  'has-[:focus-visible]:relative has-[:focus-visible]:z-10 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-[-2px] has-[:focus-visible]:outline-brand',
                  checked
                    ? 'bg-brand font-semibold text-brand-foreground'
                    : 'bg-ink text-white/75 hover:bg-white/[0.08] hover:text-white',
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
                {optionLabel}
              </label>
            );
          })}
        </div>
      </div>
    );
  },
);
PickRow.displayName = 'PickRow';
