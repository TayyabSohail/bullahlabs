import { ArrowRight, Compass, GraduationCap, Hammer, RefreshCw, Scale, ScanSearch } from 'lucide-react';
import Link from 'next/link';

import { SectionHeading } from '@/components/common/section-heading';

import { paths } from '@/constants/paths';

/** The studio offer and the working method, in one chapter. The figures sit with the offices. */
export function Studio() {
  const services = [
    {
      title: 'Build',
      body: 'New products from first sketch to launch. Web, mobile and the systems behind them. AI goes in only where it does a job, on the leanest model that does it, and stays out everywhere else.',
      mobileBody: 'From first idea to launch. Lean, purposeful AI.',
      typical: 'New product · MVP · Platform',
      Icon: Hammer,
    },
    {
      title: 'Fix',
      body: 'Software that costs too much to run, or that nobody dares touch. We take out what is not needed, swap heavy services for lean ones and give the code a future. The running bill usually shrinks with it.',
      mobileBody: 'Make costly, fragile software simple again.',
      typical: 'Rebuild · Rescue · Integration',
      Icon: Compass,
    },
    {
      title: 'Teach',
      body: 'Conscious AI for your team, on your real work. Which tool fits, how little it needs, when to skip it altogether, and how to check what it gives you before you trust it.',
      mobileBody: 'Practical AI for your team and real work.',
      typical: 'Workshops · Team training · Free course',
      Icon: GraduationCap,
    },
  ] as const;
  const process = [
    {
      title: 'Audit',
      body: 'We trace where tokens, time and money go, and whether AI is needed in the first place.',
      mobileBody: 'Find where tokens, time and money go.',
      Icon: ScanSearch,
      tone: 'bg-brand-soft/60',
    },
    {
      title: 'Right-size',
      body: 'We choose the smallest capable model, the right amount of context and the fewest useful steps.',
      mobileBody: 'Use the smallest capable model and context.',
      Icon: Scale,
      tone: 'bg-warm/10',
    },
    {
      title: 'Build lean',
      body: 'We design prompts, retrieval and workflows that use fewer tokens without compromising useful, reliable output.',
      mobileBody: 'Use fewer tokens without losing useful output.',
      Icon: Hammer,
      tone: 'bg-surface-2/70',
    },
    {
      title: 'Measure',
      body: 'We measure quality, cost and usage, then keep removing waste. Less unnecessary compute lowers cumulative environmental impact.',
      mobileBody: 'Measure quality and cost. Keep removing waste.',
      Icon: RefreshCw,
      tone: 'bg-brand-soft/30',
    },
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
          {services.map(({ title, body, mobileBody, typical, Icon }, index) => (
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
              <p className='mt-4 text-base leading-relaxed text-muted-foreground md:hidden'>
                {mobileBody}
              </p>
              <p className='mt-4 hidden text-base leading-relaxed text-muted-foreground md:block'>
                {body}
              </p>
              <p className='mt-auto border-t border-line pt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-brand-text'>
                {typical}
              </p>
            </article>
          ))}
        </div>

        {/* The method: one ruled panel on the same hard shadow as the cards above. */}
        <div className='bl-card mt-16'>
          <div className='flex flex-col gap-2 border-b px-6 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:px-8'>
            <p className='bl-kicker'>How we optimise AI</p>
            <p className='font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground'>
              Four steps to AI that costs less to run
            </p>
          </div>
          <ol className='grid sm:grid-cols-2 lg:grid-cols-4'>
            {process.map(({ title, body, mobileBody, Icon, tone }, index) => (
              <li
                key={title}
                className={[
                  'relative min-h-0 overflow-hidden p-6 sm:min-h-64 sm:p-8',
                  index > 0 ? 'border-t' : '',
                  index % 2 === 1 ? 'sm:border-l sm:border-t-0' : '',
                  index === 2 ? 'sm:border-t' : '',
                  index > 0 ? 'lg:border-l lg:border-t-0' : '',
                ].join(' ')}
              >
                <div className='relative flex items-center justify-between'>
                  <span className='inline-flex items-center gap-2.5 font-mono text-[11px] font-semibold tracking-[0.18em] text-brand-text'>
                    <span aria-hidden='true' className='h-2 w-2 bg-brand' />
                    0{index + 1}
                  </span>
                  <span className={`flex h-10 w-10 items-center justify-center border border-ink/15 ${tone} text-foreground`}>
                    <Icon className='h-[18px] w-[18px]' strokeWidth={1.7} />
                  </span>
                </div>
                <h3 className='bl-display relative mt-9 text-3xl text-foreground'>
                  {title}
                </h3>
                <p className='relative mt-3 text-sm leading-relaxed text-muted-foreground md:hidden'>
                  {mobileBody}
                </p>
                <p className='relative mt-3 hidden text-sm leading-relaxed text-muted-foreground md:block'>
                  {body}
                </p>
                <span aria-hidden='true' className={`absolute inset-x-0 bottom-0 h-1 ${tone}`} />
              </li>
            ))}
          </ol>
          <p className='border-t px-6 py-4 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:px-8'>
            Useful AI. Fewer tokens. Lower cost. Less unnecessary compute.
          </p>
        </div>

        <div className='mt-6 flex flex-col gap-5 bg-ink px-6 py-7 text-white sm:flex-row sm:items-center sm:justify-between sm:px-8'>
          <p className='bl-display text-2xl sm:text-3xl'>Want our services?</p>
          <Link
            href={paths.services}
            className='bl-btn bl-btn-primary inline-flex h-14 w-full items-center justify-center gap-3 px-7 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] sm:w-auto'
          >
            Visit services
            <ArrowRight className='h-4 w-4' />
          </Link>
        </div>
      </div>
    </section>
  );
}
