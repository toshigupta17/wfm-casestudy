import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { FadeIn } from '../ui/FadeIn'
import processDiagramFrame from '../../content/Assets/Frame 13.png'

/** Native export dimensions — layout uses full width so text is not downscaled. */
const DIAGRAM_NATIVE_W = 1218
const DIAGRAM_NATIVE_H = 268

const diagramAlt =
  'Process flow from discovery and audit through an iterative hub (Replit, Figma, Cursor), stakeholder reviews, staging, UAT and launch, with dev integration. Current phase is between committing changes to staging and UAT and launch.'

/** Approximate position of the gap between “Commit changes to staging” and “UAT & launch” (native 1218×268 asset). */
const CURRENT_PHASE_STYLE = {
  left: '77.5%',
  top: '34%',
} as const

function CurrentPhaseMarker() {
  return (
    <div
      className="pointer-events-none absolute z-[1] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
      style={{ left: CURRENT_PHASE_STYLE.left, top: CURRENT_PHASE_STYLE.top }}
      aria-hidden
    >
      <span className="whitespace-nowrap rounded-md border border-accent/45 bg-[#07080f]/92 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent shadow-[0_8px_28px_rgba(0,0,0,0.55)] md:text-[11px]">
        Current phase
      </span>
      <span className="relative flex h-7 w-7 items-center justify-center">
        <span className="absolute h-7 w-7 rounded-full border border-accent/35" />
        <span className="absolute h-3 w-3 rounded-full border-2 border-accent bg-accent/30 shadow-[0_0_14px_rgba(124,240,214,0.65)] motion-safe:animate-pulse" />
      </span>
    </div>
  )
}

export function DesignProcessDiagram() {
  const [expanded, setExpanded] = useState(false)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const dialogId = useId()

  useEffect(() => {
    if (!expanded) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setExpanded(false)
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeBtnRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [expanded])

  return (
    <FadeIn>
      <div
        className="mb-12"
        role="region"
        aria-label="Design and delivery process from discovery through launch"
      >
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="group relative w-full cursor-zoom-in rounded-lg border-0 bg-transparent p-0 text-left"
          aria-expanded={expanded}
          aria-haspopup="dialog"
          aria-controls={expanded ? dialogId : undefined}
          aria-label="Expand process diagram"
        >
          <div
            className="overflow-x-auto rounded-lg border border-white/10 bg-zinc-950/40 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.75)] [-webkit-overflow-scrolling:touch]"
            role="presentation"
          >
            <div className="relative inline-block">
              <img
                src={processDiagramFrame}
                alt={diagramAlt}
                width={DIAGRAM_NATIVE_W}
                height={DIAGRAM_NATIVE_H}
                className="block max-w-none rounded-lg contrast-[1.12] brightness-[1.04]"
                style={{ width: DIAGRAM_NATIVE_W, minWidth: DIAGRAM_NATIVE_W }}
                loading="lazy"
                decoding="async"
              />
              <CurrentPhaseMarker />
            </div>
          </div>
        </button>
        <p className="mt-3 text-center text-xs leading-relaxed text-white/50 md:text-sm">
          <span className="font-medium text-accent">Current focus:</span>{' '}
          between committing changes to staging and UAT &amp; launch.
        </p>
        {expanded &&
          createPortal(
            <div
              id={dialogId}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`${dialogId}-title`}
              className="fixed inset-0 z-[200] flex items-center justify-center bg-zinc-950/90 p-4 backdrop-blur-sm"
              onClick={() => setExpanded(false)}
            >
              <h2 id={`${dialogId}-title`} className="sr-only">
                Process diagram
              </h2>
              <button
                ref={closeBtnRef}
                type="button"
                className="absolute right-4 top-4 z-[201] flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-zinc-900/90 text-white/90 transition hover:bg-white/10"
                onClick={(e) => {
                  e.stopPropagation()
                  setExpanded(false)
                }}
                aria-label="Close expanded diagram"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden
                >
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>
              <div className="relative inline-block max-w-full" onClick={(e) => e.stopPropagation()}>
                <img
                  src={processDiagramFrame}
                  alt={diagramAlt}
                  width={DIAGRAM_NATIVE_W}
                  height={DIAGRAM_NATIVE_H}
                  className="h-auto max-h-[min(92vh,900px)] w-auto max-w-[min(98vw,1218px)] rounded-lg object-contain object-left shadow-[0_24px_80px_-32px_rgba(0,0,0,0.75)] contrast-[1.08] brightness-[1.03]"
                />
                <CurrentPhaseMarker />
              </div>
            </div>,
            document.body
          )}
      </div>
    </FadeIn>
  )
}
