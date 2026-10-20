'use client';

import { useEffect, useState } from 'react';

export interface LocalTime {
  /** 24-hour wall-clock reading, e.g. "09:41". */
  time: string;
  /** Monday to Friday, 08:00 to 18:00 local. */
  open: boolean;
}

/**
 * Wall-clock time in one timezone, refreshed every quarter minute.
 * Null until mounted so server and browser markup never disagree.
 */
export function useLocalTime(timezone: string) {
  const [value, setValue] = useState<LocalTime | null>(null);

  useEffect(() => {
    const format = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      weekday: 'short',
      hourCycle: 'h23',
      timeZone: timezone,
    });
    const tick = () => {
      const parts = format.formatToParts(new Date());
      const part = (type: Intl.DateTimeFormatPartTypes) =>
        parts.find((p) => p.type === type)?.value ?? '';
      const hour = Number(part('hour'));
      const weekday = part('weekday');
      setValue({
        time: `${part('hour')}:${part('minute')}`,
        open: !['Sat', 'Sun'].includes(weekday) && hour >= 8 && hour < 18,
      });
    };
    tick();
    const id = window.setInterval(tick, 15_000);
    return () => window.clearInterval(id);
  }, [timezone]);

  return value;
}
