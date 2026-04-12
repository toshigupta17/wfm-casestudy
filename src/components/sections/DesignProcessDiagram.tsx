import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { FadeIn } from '../ui/FadeIn'
import { DesignProcessFlowDiagram } from './DesignProcessFlowDiagram'

const diagramAlt =
  'Process flow from discovery and audit through an iterative hub (Replit, Figma, Cursor), stakeholder reviews, staging, UAT and launch, with dev integration. Current phase is between committing changes to staging and UAT and launch.'

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
            className="overflow-x-auto rounded-lg border border-slate-200/90 bg-white p-3 shadow-[0_12px_40px_-16px_rgba(15,23,42,0.12)] [-webkit-overflow-scrolling:touch] sm:p-4"
            role="presentation"
          >
            <div className="relative inline-block min-w-0">
              <DesignProcessFlowDiagram />
            </div>
          </div>
        </button>
        <p className="mt-3 text-center text-xs leading-relaxed text-slate-500 md:text-sm">
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
              className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-900/55 p-4 backdrop-blur-sm"
              onClick={() => setExpanded(false)}
            >
              <h2 id={`${dialogId}-title`} className="sr-only">
                {diagramAlt}
              </h2>
              <button
                ref={closeBtnRef}
                type="button"
                className="absolute right-4 top-4 z-[201] flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-md transition hover:bg-slate-50"
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
              <div
                className="max-h-[min(92vh,900px)] max-w-[min(98vw,1280px)] overflow-auto rounded-xl border border-slate-200/80 bg-white p-4 shadow-2xl shadow-slate-900/20 sm:p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <DesignProcessFlowDiagram />
              </div>
            </div>,
            document.body
          )}
      </div>
    </FadeIn>
  )
}
