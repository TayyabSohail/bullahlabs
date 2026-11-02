import Link from 'next/link';
import type { ReactNode } from 'react';

import { BookCallButton } from '@/components/contact/book-call-button';

import { siteConfig } from '@/config/site';
import { paths } from '@/constants/paths';

interface LetsTalkButtonProps {
  children: ReactNode;
  className?: string;
}

/**
 * The "Let's talk" button in the header and footer: opens the Cal.com
 * booking modal over the current page. Falls back to the contact page when
 * no Cal.com link is configured, so the button never goes dead.
 */
export function LetsTalkButton({ children, className }: LetsTalkButtonProps) {
  if (!siteConfig.calHandle) {
    return (
      <Link href={paths.contact} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <BookCallButton
      calHandle={siteConfig.calHandle}
      hideIcon
      className={className}
    >
      {children}
    </BookCallButton>
  );
}
