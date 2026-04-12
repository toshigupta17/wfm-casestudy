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

/** Incoming (left) and outgoing (right) horizontals meet a downward stem for the integration branch. */
function BranchTeeConnector() {
  return (
    <svg
      className="h-10 w-[3.25rem] shrink-0 text-slate-400 sm:h-11 sm:w-14"
      viewBox="0 0 52 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M0 10H26M26 10H52M26 10v22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M26 36.5l-3.25-5.5h6.5z" fill="currentColor" />
    </svg>
  )
}

function CurrentPhaseBadge() {
  return (
    <span className="mt-1.5 block whitespace-nowrap rounded-md border border-teal-200/90 bg-white/90 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-accent shadow-sm sm:text-[10px]">
      Current phase
    </span>
  )
}

export function DesignProcessFlowDiagram() {
  return (
    <div
      className="relative min-h-[320px] min-w-[min(1218px,100%)] sm:min-h-[300px]"
      role="img"
      aria-label="Process flow from discovery through audit, iterative hub, reviews, staging, branch to development and backend integration, then UAT"
    >
      <div className="flex min-w-[1080px] flex-col gap-4 pb-1 pt-2 sm:min-w-[1150px]">
        <div className="relative flex flex-wrap items-center gap-y-4 pb-20 sm:flex-nowrap sm:pb-[4.75rem]">
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

          {/* Staging (current) → branch → UAT; dev/integration stems downward between staging and UAT */}
          <div
            className={`${stepClass} border-teal-400/90 bg-teal-50/90 shadow-md shadow-teal-900/10 ring-2 ring-accent/35 ring-offset-2 ring-offset-white`}
          >
            Commit changes to staging
            <CurrentPhaseBadge />
          </div>
          <div className="flex shrink-0 items-center self-center">
            <Arrow />
          </div>
          <div className="flex shrink-0 items-center self-start sm:self-center">
            <div className="relative shrink-0">
              <BranchTeeConnector />
              <div className="absolute left-1/2 top-[60px] z-[1] mt-2 w-max max-w-[min(20rem,calc(100vw-2.5rem))] -translate-x-1/2 sm:mt-2.5">
                <div
                  className={`${stepClass} max-w-[20rem] border-slate-300/95 bg-slate-100 text-slate-800 sm:text-xs`}
                >
                  Development and backend integration
                </div>
              </div>
            </div>
            <Arrow />
            <div className={`${stepClass} border-sky-300 bg-sky-100`}>UAT &amp; launch</div>
          </div>
        </div>
      </div>
    </div>
  )
}
