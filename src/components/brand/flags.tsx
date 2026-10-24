import { cn } from '@/lib/utils';

interface FlagProps {
  className?: string;
}

/** Flag of Pakistan, drawn inline so it renders identically everywhere. */
export function FlagPK({ className }: FlagProps) {
  return (
    <svg
      viewBox='0 0 36 24'
      aria-hidden='true'
      className={cn('h-4 w-6 rounded-[2px] shadow-sm', className)}
    >
      <rect width='36' height='24' fill='#ffffff' />
      <rect x='9' width='27' height='24' fill='#01411C' />
      <circle cx='23' cy='12' r='6' fill='#ffffff' />
      <circle cx='24.8' cy='10.8' r='5.4' fill='#01411C' />
      <polygon
        fill='#ffffff'
        points='27.2,5.8 28,8.1 30.4,8.1 28.5,9.5 29.2,11.8 27.2,10.4 25.2,11.8 25.9,9.5 24,8.1 26.4,8.1'
      />
    </svg>
  );
}

/** Flag of Germany. */
export function FlagDE({ className }: FlagProps) {
  return (
    <svg
      viewBox='0 0 36 24'
      aria-hidden='true'
      className={cn('h-4 w-6 rounded-[2px] shadow-sm', className)}
    >
      <rect width='36' height='8' fill='#000000' />
      <rect y='8' width='36' height='8' fill='#DD0000' />
      <rect y='16' width='36' height='8' fill='#FFCE00' />
    </svg>
  );
}

/** Flag of the United States, used for the English switch. */
export function FlagUS({ className }: FlagProps) {
  return (
    <svg
      viewBox='0 0 36 24'
      aria-hidden='true'
      className={cn('h-4 w-6 rounded-[2px] shadow-sm', className)}
    >
      <rect width='36' height='24' fill='#ffffff' />
      <path
        d='M0 0H36V1.85H0ZM0 3.69H36V5.54H0ZM0 7.38H36V9.23H0ZM0 11.08H36V12.92H0ZM0 14.77H36V16.62H0ZM0 18.46H36V20.31H0ZM0 22.15H36V24H0Z'
        fill='#B22234'
      />
      <rect width='16.2' height='12.92' fill='#3C3B6E' />
      <g fill='#ffffff'>
        <circle cx='2.3' cy='2' r='.65' />
        <circle cx='5.1' cy='2' r='.65' />
        <circle cx='7.9' cy='2' r='.65' />
        <circle cx='10.7' cy='2' r='.65' />
        <circle cx='13.5' cy='2' r='.65' />
        <circle cx='3.7' cy='4.15' r='.65' />
        <circle cx='6.5' cy='4.15' r='.65' />
        <circle cx='9.3' cy='4.15' r='.65' />
        <circle cx='12.1' cy='4.15' r='.65' />
        <circle cx='2.3' cy='6.3' r='.65' />
        <circle cx='5.1' cy='6.3' r='.65' />
        <circle cx='7.9' cy='6.3' r='.65' />
        <circle cx='10.7' cy='6.3' r='.65' />
        <circle cx='13.5' cy='6.3' r='.65' />
        <circle cx='3.7' cy='8.45' r='.65' />
        <circle cx='6.5' cy='8.45' r='.65' />
        <circle cx='9.3' cy='8.45' r='.65' />
        <circle cx='12.1' cy='8.45' r='.65' />
        <circle cx='2.3' cy='10.6' r='.65' />
        <circle cx='5.1' cy='10.6' r='.65' />
        <circle cx='7.9' cy='10.6' r='.65' />
        <circle cx='10.7' cy='10.6' r='.65' />
        <circle cx='13.5' cy='10.6' r='.65' />
      </g>
    </svg>
  );
}

export function Flag({
  countryCode,
  className,
}: FlagProps & { countryCode: string }) {
  if (countryCode === 'PK') return <FlagPK className={className} />;
  if (countryCode === 'DE') return <FlagDE className={className} />;
  if (countryCode === 'US') return <FlagUS className={className} />;
  return null;
}
