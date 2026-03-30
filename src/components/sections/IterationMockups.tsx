import type { ReactNode } from 'react'

/** Stylized light-mode UI shells for the iteration narrative — white surfaces, blue accents. */

function MockShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-[0_1px_3px_rgba(15,23,42,0.08)]">
      <div className="h-1 shrink-0 bg-sky-500" aria-hidden />
      <div className="flex min-h-0 flex-1 flex-col p-3 sm:p-4">
        <p className="mb-2.5 text-[11px] font-bold leading-tight tracking-tight text-slate-900 sm:mb-3">
          {title}
        </p>
        <div className="min-h-0 flex-1 text-slate-800">{children}</div>
      </div>
    </div>
  )
}

function Loz({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center rounded-md bg-sky-100 px-1.5 py-0.5 text-[10px] font-semibold leading-none text-sky-900">
      {children}
    </span>
  )
}

function ScreenACatalog() {
  return (
    <MockShell title="Skills catalog — Name">
      <div className="text-[10px]">
        <div className="grid grid-cols-[1fr_auto_auto] gap-x-2 gap-y-0 border-b border-slate-200 pb-1.5 font-semibold text-slate-500">
          <span>Name</span>
          <span className="text-center">Type</span>
          <span className="text-center">Req</span>
        </div>
        <div className="grid grid-cols-[1fr_auto_auto] gap-x-2 gap-y-0 border-b border-slate-100 py-2 align-middle">
          <span className="min-w-0 truncate font-medium text-slate-800">
            Jira Cloud Platform — Fields and issue …
          </span>
          <span className="flex justify-center">
            <Loz>Skill</Loz>
          </span>
          <span className="flex justify-center">
            <Loz>5</Loz>
          </span>
        </div>
        <div className="grid grid-cols-[1fr_auto_auto] gap-x-2 gap-y-0 py-2 align-middle">
          <span className="min-w-0 text-[10px] font-medium leading-snug text-slate-800">
            Atlas — Integrations <span className="text-slate-600">(R)</span>
          </span>
          <span className="flex justify-center">
            <Loz>Skill</Loz>
          </span>
          <span className="flex justify-center">
            <Loz>3</Loz>
          </span>
        </div>
      </div>
    </MockShell>
  )
}

function HeatCell({
  children,
  highlight,
}: {
  children: React.ReactNode
  highlight?: boolean
}) {
  return (
    <div
      className={`flex h-8 items-center justify-center rounded-md border text-[10px] font-semibold tabular-nums ${
        highlight
          ? 'border-sky-400 bg-sky-50 text-slate-900'
          : 'border-slate-200 bg-white text-slate-800'
      }`}
    >
      {children}
    </div>
  )
}

function ScreenBHeatmap() {
  return (
    <MockShell title="Team skills — heatmap (excerpt)">
      <div className="grid grid-cols-[minmax(0,1fr)_repeat(4,minmax(0,1fr))] gap-x-1.5 gap-y-1.5 text-[10px]">
        <div />
        {['S1', 'S2', 'S3', 'S4'].map((h) => (
          <div key={h} className="text-center font-bold text-slate-500">
            {h}
          </div>
        ))}
        <div className="flex items-center font-semibold text-slate-700">Skill A</div>
        <HeatCell highlight>4</HeatCell>
        <HeatCell>2</HeatCell>
        <HeatCell>—</HeatCell>
        <HeatCell>3</HeatCell>
        <div className="flex items-center font-semibold text-slate-700">
          Skill B <span className="font-normal text-slate-500">(O)</span>
        </div>
        <HeatCell>1</HeatCell>
        <HeatCell highlight>5</HeatCell>
        <HeatCell>2</HeatCell>
        <HeatCell>2</HeatCell>
      </div>
    </MockShell>
  )
}

function Scale() {
  return (
    <div className="flex shrink-0 gap-2 font-medium tabular-nums text-slate-500">
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className="w-3 text-center text-[10px]">
          {n}
        </span>
      ))}
    </div>
  )
}

function ScreenCSegment() {
  return (
    <MockShell title="Edit segment · Skills in this segment">
      <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50/80 p-2.5">
        <div className="space-y-2.5">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
            <span className="min-w-0 flex-1 text-[10px] font-medium leading-snug text-slate-800">
              Atlas — Integrations (R)
            </span>
            <Loz>Req</Loz>
            <Scale />
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
            <span className="min-w-0 flex-1 text-[10px] font-medium leading-snug text-slate-800">
              Jira Cloud — Issues (O)
            </span>
            <Loz>Opt</Loz>
            <Scale />
          </div>
          <p className="py-0.5 text-center text-sm font-medium tracking-wide text-slate-400">
            …
          </p>
        </div>
      </div>
    </MockShell>
  )
}

export function IterationMockups() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
      <ScreenACatalog />
      <ScreenBHeatmap />
      <ScreenCSegment />
    </div>
  )
}
