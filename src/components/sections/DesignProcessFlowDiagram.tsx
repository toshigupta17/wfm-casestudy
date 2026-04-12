import type { ReactNode } from 'react'

/** Light-mode process flow (replaces PNG with unreadable white-on-pastel text). */
const stepClass =
  'max-w-[11.5rem] shrink-0 rounded-xl border px-2.5 py-2 text-center text-[11px] font-medium leading-snug text-slate-800 shadow-sm sm:max-w-[13rem] sm:px-3 sm:text-xs md:max-w-[14rem]'

function Arrow() {
  return (
    <span className="shrink-0 px-0.5 text-lg font-light text-slate-400 sm:px-1" aria-hidden>
      →
    </span>
  )
}

function HubBox({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-[14rem] shrink-0 rounded-xl border border-violet-300/90 bg-violet-50 px-2 py-2 text-center text-[10px] font-medium leading-snug text-slate-800 shadow-sm sm:max-w-[16rem] sm:text-[11px]">
      {children}
    </div>
  )
}

/** Marker between “Commit changes to staging” and “UAT & launch”. */
function CurrentPhaseMarker() {
  return (
    <div className="pointer-events-none flex flex-col items-center gap-1.5" aria-hidden>
      <span className="whitespace-nowrap rounded-md border border-teal-200 bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent shadow-md shadow-slate-900/15 md:text-[11px]">
        Current phase
      </span>
      <span className="relative flex h-7 w-7 items-center justify-center">
        <span className="absolute h-7 w-7 rounded-full border border-accent/50" />
        <span className="absolute h-3 w-3 rounded-full border-2 border-accent bg-accent/25 shadow-[0_0_12px_rgba(15,118,110,0.35)] motion-safe:animate-pulse" />
      </span>
    </div>
  )
}

export function DesignProcessFlowDiagram() {
  return (
    <div
      className="relative min-h-[268px] min-w-[min(1218px,100%)]"
      role="img"
      aria-label="Process flow from discovery through audit, iterative hub, reviews, staging, UAT, and dev integration"
    >
      <div className="flex min-w-[1080px] flex-col gap-4 pb-1 pt-2 sm:min-w-[1150px]">
        <div className="flex flex-wrap items-center gap-y-4 sm:flex-nowrap">
          <div className={`${stepClass} border-sky-300 bg-sky-100`}>
            Understand the requirements, painpoints and use-cases
          </div>
          <Arrow />
          <div className={`${stepClass} border-sky-300 bg-sky-100`}>
            Audit the existing product and precedence
          </div>
          <Arrow />

          {/* Iterative hub — dashed region, dark text on soft fills */}
          <div className="flex shrink-0 flex-col gap-2 rounded-2xl border-2 border-dashed border-rose-300/90 bg-rose-50/95 p-3">
            <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
              <HubBox>Vibe coding on Replit and get alignment</HubBox>
              <span className="hidden shrink-0 text-rose-400 sm:inline" aria-hidden>
                ·
              </span>
              <HubBox>
                Vibe coding on Cursor with real backend data in staging environment
              </HubBox>
            </div>
            <div className="flex justify-center border-t border-rose-200/90 pt-2">
              <HubBox>Brainstorming on Figma to finalise the IA</HubBox>
            </div>
          </div>

          <Arrow />
          <div className={`${stepClass} border-sky-300 bg-sky-100`}>
            Stakeholder and design reviews
          </div>
          <Arrow />

          {/* Commit → UAT with “Current phase” marker */}
          <div className={`${stepClass} border-sky-300 bg-sky-100`}>
            Commit changes to staging
          </div>
          <div className="flex shrink-0 flex-col items-center gap-1 px-0.5 sm:px-1">
            <CurrentPhaseMarker />
            <Arrow />
          </div>
          <div className={`${stepClass} border-sky-300 bg-sky-100`}>UAT &amp; launch</div>
        </div>

        <div className="flex justify-center sm:justify-end sm:pr-[6%] md:pr-[10%]">
          <div
            className={`${stepClass} max-w-[20rem] border-slate-600 bg-slate-800 text-slate-50 sm:text-xs`}
          >
            Dev integration with backend and review
          </div>
        </div>
      </div>
    </div>
  )
}
