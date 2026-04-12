import type { ReactElement } from 'react'

/** Generic redacted line (no readable copy). */
function RedactedLine({ className = '' }: { className?: string }) {
  return (
    <span
      className={[
        'inline-block rounded-sm bg-slate-200/90',
        className,
      ].join(' ')}
      aria-hidden
    />
  )
}

/** Team list pattern seen in other WFM tools — fully redacted. */
export function CompetitiveTeamPageFigure(): ReactElement {
  const rows = [0, 1, 2, 3]
  return (
    <figure
      className="flex h-full min-h-0 w-full flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-slate-50/95 px-3 py-4 sm:px-4"
      aria-label="Redacted team directory pattern from competitive tools"
    >
      <figcaption className="mb-3 shrink-0 text-sm font-medium tracking-wide text-slate-800">
        Team page (pattern)
      </figcaption>
      <div className="flex min-h-0 flex-1 flex-col gap-2">
        <div className="mb-1 flex items-center justify-between gap-2 border-b border-slate-200 pb-2">
          <RedactedLine className="h-2.5 w-28" />
          <RedactedLine className="h-6 w-16 rounded-md" />
        </div>
        <div className="grid min-h-0 flex-1 grid-cols-1 gap-2 sm:grid-cols-2">
          {rows.map((i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-lg border border-slate-200/80 bg-white px-2 py-2.5 shadow-sm"
            >
              <div className="h-9 w-9 shrink-0 rounded-full bg-slate-200 ring-1 ring-slate-300/80" />
              <div className="min-w-0 flex-1 space-y-1.5">
                <RedactedLine className="h-2 w-[45%] max-w-[8rem]" />
                <RedactedLine className="h-1.5 w-[70%] max-w-[12rem]" />
              </div>
              <div className="hidden shrink-0 flex-col items-end gap-1 sm:flex">
                <RedactedLine className="h-4 w-14 rounded-full" />
                <RedactedLine className="h-1.5 w-10" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-3 shrink-0 text-center text-[10px] leading-relaxed text-slate-500 sm:text-xs">
        A team page information architecture on Atlassian Teams app.
      </p>
    </figure>
  )
}

/** Person profile pattern — redacted rows and badges. */
export function CompetitivePersonPageFigure(): ReactElement {
  const blocks = [0, 1, 2, 3, 4]
  return (
    <figure
      className="flex h-full min-h-0 w-full flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-100/80 px-3 py-4 sm:px-4"
      aria-label="Redacted person profile with skills and team details from competitive tools"
    >
      <figcaption className="mb-3 shrink-0 text-sm font-medium tracking-wide text-slate-800">
        Person page (pattern)
      </figcaption>
      <div className="flex min-h-0 flex-1 flex-col gap-3 md:flex-row md:gap-4 md:items-stretch">
        <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-3 overflow-y-auto">
          <div className="flex gap-3 border-b border-slate-200 pb-3">
            <div className="h-14 w-14 shrink-0 rounded-2xl bg-slate-200 ring-1 ring-slate-300/80" />
            <div className="min-w-0 flex-1 space-y-2 pt-1">
              <RedactedLine className="h-3 w-[55%]" />
              <RedactedLine className="h-2 w-[85%]" />
              <div className="flex flex-wrap gap-1.5 pt-1">
                <RedactedLine className="h-5 w-16 rounded-full" />
                <RedactedLine className="h-5 w-20 rounded-full" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[1fr_auto_auto] items-center gap-x-2 gap-y-2 border-b border-slate-200/80 pb-2">
            <RedactedLine className="h-1.5 w-16" />
            <RedactedLine className="mx-auto h-1.5 w-8" />
            <RedactedLine className="mx-auto h-1.5 w-8" />
          </div>
          <div className="space-y-2.5">
            {blocks.map((i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-2 rounded-md bg-white px-2 py-2 shadow-sm ring-1 ring-slate-100"
              >
                <RedactedLine
                  className={['h-2', i % 2 ? 'w-[72%]' : 'w-[58%]'].join(' ')}
                />
                <RedactedLine className="h-5 w-9 rounded-md" />
                <RedactedLine className="h-5 w-9 rounded-md" />
              </div>
            ))}
          </div>
        </div>
        <aside
          className="flex w-full min-w-0 shrink-0 flex-col gap-3 rounded-lg border border-slate-200/85 bg-slate-50/90 p-3 shadow-sm md:max-w-[280px] md:self-stretch"
          aria-label="Redacted team details panel"
        >
          <h3 className="text-xs font-medium tracking-wide text-slate-800">
            Team details
          </h3>
          <div className="min-h-0 flex-1 space-y-3" aria-hidden>
            <div className="space-y-1.5">
              <RedactedLine className="h-1.5 w-full" />
              <RedactedLine className="h-1.5 w-[94%]" />
              <RedactedLine className="h-1.5 w-[88%]" />
              <RedactedLine className="h-1.5 w-full" />
              <RedactedLine className="h-1.5 w-[72%]" />
            </div>
            <div className="space-y-1.5">
              <RedactedLine className="h-1.5 w-[78%]" />
              <RedactedLine className="h-1.5 w-full" />
              <RedactedLine className="h-1.5 w-[90%]" />
            </div>
          </div>
        </aside>
      </div>
      <p className="mt-2 shrink-0 text-center text-[10px] text-slate-500 sm:text-xs">
        A person&apos;s profile on Atlassian Talent app.
      </p>
    </figure>
  )
}
