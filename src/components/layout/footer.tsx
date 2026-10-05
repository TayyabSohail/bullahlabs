import Link from 'next/link';

import { Flag } from '@/components/brand/flags';
import { Logo } from '@/components/brand/logo';
import { BackToTop } from '@/components/layout/back-to-top';

import { legalLabel } from '@/lib/legal-labels';

import { siteConfig } from '@/config/site';
import { primaryNav } from '@/constants/navigation';
import { isSectionLink, paths } from '@/constants/paths';
import { getProgram } from '@/data/program';
import type { Dictionary } from '@/i18n/dictionaries/en';

interface FooterProps {
  dict: Dictionary;
}

export function Footer({ dict }: FooterProps) {
  const year = new Date().getFullYear();
  const t = dict.footer;
  const { tiers } = getProgram(dict.locale);

  // Same links, same order as the header, so the two never disagree.
  const companyLinks = [
    ...primaryNav(dict),
    { label: dict.nav.contact, href: paths.contact },
  ];

  return (
    <footer className='mt-24 border-t bg-surface'>
      <div className='bl-container'>
        <div className='grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]'>
          <div>
            <Logo />
            <p className='mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground'>
              {t.pitch}
            </p>
            <Link
              href={paths.contact}
              className='bl-btn bl-btn-primary mt-6 inline-flex h-11 items-center px-5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em]'
            >
              {t.quote}
            </Link>
          </div>

          <FooterColumn title={t.program}>
            {tiers.map((tier) => (
              <FooterLink key={tier.id} href={paths.programTier(tier.id)}>
                {tier.name}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title={t.company}>
            {companyLinks.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title={t.offices}>
            {siteConfig.locations.map((location) => (
              <div key={location.id} className='text-sm'>
                <p className='flex items-center gap-2 font-medium text-foreground'>
                  <Flag
                    countryCode={location.countryCode}
                    className='h-3 w-[18px]'
                  />
                  {location.city}, {location.country}
                </p>
              </div>
            ))}
          </FooterColumn>
        </div>

        <div className='flex flex-col gap-4 border-t py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between'>
          <p>
            &copy; {year} {siteConfig.legalName}. {t.rights}
          </p>
          <div className='flex flex-wrap items-center gap-5'>
            {siteConfig.footerNav.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='bl-link hover:text-foreground'
              >
                {legalLabel(item.href, dict) ?? item.label}
              </Link>
            ))}
          </div>
          <BackToTop label={t.backToTop} />
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className='font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground'>
        {title}
      </p>
      <div className='mt-5 flex flex-col gap-2.5 text-sm'>{children}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      scroll={!isSectionLink(href)}
      className='bl-link w-fit text-foreground/80 transition-colors hover:text-foreground'
    >
      {children}
    </Link>
  );
}
