import { Fragment, type ReactElement } from 'react'

const profBadge = (level: number) => {
  const map: Record<number, { bg: string; fg: string }> = {
    1: { bg: 'rgba(148, 163, 184, 0.35)', fg: '#e5e7eb' },
    2: { bg: 'rgba(245, 158, 11, 0.4)', fg: '#1a1a1a' },
    3: { bg: 'rgba(59, 130, 246, 0.45)', fg: '#fff' },
    4: { bg: 'rgba(139, 92, 246, 0.45)', fg: '#fff' },
    5: { bg: 'rgba(74, 222, 128, 0.35)', fg: '#052e16' },
  }
  return map[level] ?? map[1]
}

/** Low-fi heatmap: people × segments, colored proficiency + gap callout */
export function SkillsHeatmapFigure(): ReactElement {
  const segments = ['Seg 1', 'Seg 2', 'Seg 3', '…', 'Seg 62']
  const rows = ['Person 1', 'Person 1', 'Person 1', 'Person 1']
  const cells: { v: number; tone: 'bad' | 'mid' | 'good' }[][] = [
    [
      { v: 1, tone: 'bad' },
      { v: 2, tone: 'mid' },
      { v: 3, tone: 'good' },
      { v: 2, tone: 'mid' },
      { v: 2, tone: 'mid' },
    ],
    [
      { v: 3, tone: 'good' },
      { v: 2, tone: 'mid' },
      { v: 3, tone: 'good' },
      { v: 1, tone: 'bad' },
      { v: 2, tone: 'mid' },
    ],
    [
      { v: 2, tone: 'mid' },
      { v: 3, tone: 'good' },
      { v: 2, tone: 'mid' },
      { v: 3, tone: 'good' },
      { v: 2, tone: 'mid' },
    ],
    [
      { v: 2, tone: 'mid' },
      { v: 2, tone: 'mid' },
      { v: 2, tone: 'mid' },
      { v: 2, tone: 'mid' },
      { v: 3, tone: 'good' },
    ],
  ]

  const color = (tone: 'bad' | 'mid' | 'good') =>
    tone === 'bad'
      ? 'text-red-400'
      : tone === 'good'
        ? 'text-emerald-400'
        : 'text-white/80'

  return (
    <figure
      className="flex h-full min-h-0 w-full flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-black/25 px-3 py-4 sm:px-4"
      aria-label="Skills heatmap mockup: team members by segment with proficiency numbers"
    >
      <figcaption className="mb-3 shrink-0 text-sm font-medium tracking-wide text-white/90">
        Skills heatmap
      </figcaption>
      <div className="relative min-h-0 flex-1 overflow-x-auto pb-6 sm:pb-7">
        <div className="min-w-[320px]">
          <div
            className="grid gap-x-1 gap-y-1 text-center text-[10px] font-medium sm:text-[11px]"
            style={{
              gridTemplateColumns: `minmax(4.5rem,1fr) repeat(${segments.length}, minmax(2.5rem,1fr))`,
            }}
          >
            <div className="text-white/40" />
            {segments.map((s) => (
              <div
                key={s}
                className="truncate px-0.5 pb-1 text-white/55"
                title={s}
              >
                {s}
              </div>
            ))}
            {rows.map((label, ri) => (
              <Fragment key={`row-${ri}`}>
                <div className="flex items-center justify-end pr-2 text-right text-white/45">
                  {label}
                </div>
                {cells[ri].map((c, ci) => (
                  <div
                    key={`c-${ri}-${ci}`}
                    className={[
                      'relative flex min-h-[2.25rem] items-center justify-center rounded-md bg-white/[0.04]',
                      color(c.tone),
                      ri === 0 && ci === 0 ? 'ring-1 ring-white/15' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    <span className="text-base font-semibold tabular-nums sm:text-lg">{c.v}</span>
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-6 shrink-0 text-center text-[10px] leading-relaxed text-white/40 sm:text-xs">
        Team manager must be able to scan and identify skill gaps.
      </p>
    </figure>
  )
}

function Badge({ level }: { level: number }) {
  const { bg, fg } = profBadge(level)
  return (
    <span
      className="inline-flex min-w-[2.75rem] justify-center rounded-md px-1.5 py-0.5 text-[10px] font-semibold tabular-nums"
      style={{ backgroundColor: bg, color: fg }}
    >
      L{level}
    </span>
  )
}

/** Stylized team roster + expanded skills table (concept) */
export function TeamMembersFigure(): ReactElement {
  return (
    <figure
      className="flex h-full min-h-0 w-full flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-black/25 px-3 py-4 sm:px-4"
      aria-label="Team members page: roster cards with segment and skill levels"
    >
      <figcaption className="mb-3 shrink-0 text-sm font-medium tracking-wide text-white/90">
        Team members view
      </figcaption>
      <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto text-[11px] leading-snug sm:text-xs">
        {/* Collapsed card */}
        <div className="shrink-0 rounded-xl border border-white/10 bg-white/[0.04] p-3">
          <div className="flex flex-wrap items-center gap-3">
            <div className="h-9 w-9 shrink-0 rounded-full bg-white/10 ring-1 ring-white/15" />
            <div className="min-w-0 flex-1">
              <div className="font-semibold text-white/90">Raj Patel</div>
              <div className="text-white/45">Support Engineer · NA</div>
            </div>
            <span className="rounded-full bg-white/[0.08] px-2 py-0.5 text-[10px] text-white/55">
              2 Segments · 9 Skills
            </span>
          </div>
        </div>

        {/* Expanded card */}
        <div className="min-h-0 flex-1 rounded-xl border border-accent/20 bg-white/[0.04] p-3 ring-1 ring-accent/15">
          <div className="mb-3 flex flex-wrap items-start gap-3 border-b border-white/10 pb-3">
            <div className="h-10 w-10 shrink-0 rounded-full bg-white/10 ring-1 ring-accent/30" />
            <div className="min-w-0 flex-1">
              <div className="font-semibold text-white/95">Sophia Turner</div>
              <div className="text-white/45">Sr. Support Engineer · EMEA</div>
            </div>
            <span className="rounded-full bg-white/[0.1] px-2 py-0.5 text-[10px] text-white/60">
              3 Segments · 15 Skills
            </span>
          </div>

          <div className="mb-2 grid grid-cols-[1fr_auto_auto] gap-2 border-b border-white/[0.06] pb-2 text-[10px] font-medium uppercase tracking-wide text-white/40">
            <span>Segments & skills</span>
            <span className="text-center">Actual</span>
            <span className="text-center">Req.</span>
          </div>

          <div className="space-y-3">
            <div>
              <div className="mb-1 flex flex-wrap items-center gap-1.5 text-white/75">
                <span className="text-red-400/90" aria-hidden>
                  ◆
                </span>
                <span className="font-medium">Domain verification</span>
              </div>
              <div className="ml-4 grid grid-cols-[1fr_auto_auto] items-center gap-2 border-l border-white/10 pl-2">
                <span className="text-white/55">Segment level</span>
                <Badge level={3} />
                <Badge level={5} />
              </div>
            </div>

            <div className="ml-4 space-y-1.5 border-l border-white/10 pl-2">
              <div className="grid grid-cols-[1fr_auto_auto] items-center gap-2">
                <span className="truncate text-white/60">Cloud administration</span>
                <Badge level={1} />
                <Badge level={1} />
              </div>
              <div className="grid grid-cols-[1fr_auto_auto] items-center gap-2">
                <span className="truncate text-white/60">DNS</span>
                <Badge level={3} />
                <Badge level={3} />
              </div>
              <div className="grid grid-cols-[1fr_auto_auto] items-center gap-2">
                <span className="flex items-center gap-1 truncate text-white/60">
                  <span className="text-red-400/80" aria-hidden>
                    ◆
                  </span>
                  Splunk SMU
                </span>
                <Badge level={2} />
                <Badge level={4} />
              </div>
              <div className="grid grid-cols-[1fr_auto_auto] items-center gap-2">
                <span className="flex items-center gap-1 truncate text-white/60">
                  <span className="text-red-400/80" aria-hidden>
                    ◆
                  </span>
                  REST / HTTP
                </span>
                <Badge level={4} />
                <Badge level={5} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-2 shrink-0 text-center text-[10px] text-white/40 sm:text-xs">
        Each team member can be proficient in multiple products, segments and
        skills. But they must meet the required proficiency.
      </p>
    </figure>
  )
}
