import { ArrowRight, Compass, GraduationCap, Hammer } from 'lucide-react';
import Link from 'next/link';

import { SectionHeading } from '@/components/common/section-heading';

import { paths } from '@/constants/paths';

/** The studio offer and the working method, in one chapter. The figures sit with the offices. */
export function Studio() {
  const services = [
    {
      title: 'Build',
      body: 'New products from first sketch to launch. Web, mobile and the systems behind them. AI goes in only where it does a job, on the leanest model that does it, and stays out everywhere else.',
      typical: 'New product · MVP · Platform',
      Icon: Hammer,
    },
    {
      title: 'Fix',
      body: 'Software that costs too much to run, or that nobody dares touch. We take out what is not needed, swap heavy services for lean ones and give the code a future. The running bill usually shrinks with it.',
      typical: 'Rebuild · Rescue · Integration',
      Icon: Compass,
    },
    {
      title: 'Teach',
      body: 'Conscious AI for your team, on your real work. Which tool fits, how little it needs, when to skip it altogether, and how to check what it gives you before you trust it.',
      typical: 'Workshops · Team training · Free course',
      Icon: GraduationCap,
    },
  ] as const;
  const process = [
    ['Discover', 'We ask why before how, and whether software or AI belongs here at all.'],
    ['Decide', 'The simplest option that will hold. Proven over trending, lean over large.'],
    ['Build', 'We ship with the running costs in plain sight: time, money and energy.'],
    ['Improve', 'We keep it useful and cheap to run, and remove what stopped earning its place.'],
  ] as const;

  return (
    <section
      id='studio'
      className='bl-section bl-rule bl-band-stone scroll-mt-24'
    >
      <div className='bl-container'>
        <SectionHeading
          kicker='Studio'
          title='Built the way we use AI: only where it earns its place.'
          accentWords={[9, 10, 11]}
          description='Every tool, model and line of code in our work has to justify its cost in time, money and energy. Three ways in, one standard.'
        />

        {/* The offer: three ruled cards. */}
        <div className='mt-12 grid gap-6 md:grid-cols-3'>
          {services.map(({ title, body, typical, Icon }, index) => (
            <article key={title} className='bl-card flex flex-col p-7 sm:p-8'>
              <div className='flex items-center justify-between text-brand-text'>
                <span className='font-mono text-[11px] font-semibold tracking-[0.18em]'>
                  0{index + 1}
                </span>
                <Icon className='h-6 w-6' strokeWidth={1.5} />
              </div>
              <h3 className='bl-display mt-8 text-4xl text-foreground sm:text-5xl'>
                {title}
              </h3>
              <p className='mt-4 text-base leading-relaxed text-muted-foreground'>
                {body}
              </p>
              <p className='mt-auto border-t border-line pt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-brand-text'>
                {typical}
              </p>
            </article>
          ))}
        </div>

        <div className='mt-8 flex justify-end'>
          <Link
            href={paths.services}
            className='bl-btn bl-btn-secondary inline-flex h-12 items-center gap-3 px-5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em]'
          >
            Explore all services
            <ArrowRight className='h-4 w-4' />
          </Link>
        </div>

        {/* The method: one ruled panel on the same hard shadow as the cards above. */}
        <div className='bl-card mt-16'>
          <div className='flex flex-col gap-2 border-b px-6 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:px-8'>
            <p className='bl-kicker'>How we work</p>
            <p className='font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground'>
              Four steps, every project
            </p>
          </div>
          <ol className='grid sm:grid-cols-2 lg:grid-cols-4'>
            {process.map(([title, body], index) => (
              <li
                key={title}
                className={[
                  'p-6 sm:p-8',
                  index > 0 ? 'border-t' : '',
                  index % 2 === 1 ? 'sm:border-l sm:border-t-0' : '',
                  index === 2 ? 'sm:border-t' : '',
                  index > 0 ? 'lg:border-l lg:border-t-0' : '',
                ].join(' ')}
              >
                <span className='inline-flex items-center gap-2.5 font-mono text-[11px] font-semibold tracking-[0.18em] text-brand-text'>
                  <span aria-hidden='true' className='h-2 w-2 bg-brand' />
                  0{index + 1}
                </span>
                <h3 className='bl-display mt-6 text-3xl text-foreground'>
                  {title}
                </h3>
                <p className='mt-3 text-sm leading-relaxed text-muted-foreground'>
                  {body}
                </p>
              </li>
            ))}
          </ol>
          <p className='border-t px-6 py-4 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:px-8'>
            Lean systems. No surprise bills. Nothing gets in because it is
            trending.
          </p>
        </div>
      </div>
    </section>
  );
}
