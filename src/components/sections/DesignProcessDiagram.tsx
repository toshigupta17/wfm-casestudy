import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { designProcess as D } from '../../content/caseStudy'
import { FadeIn } from '../ui/FadeIn'
import { GlassCard } from '../ui/GlassCard'

function ArrowRight({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-sky-400/70 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  )
}

function ArrowDown({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-sky-400/70 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
    </svg>
  )
}

function ArrowBidirectional({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-sky-400/60 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 12m0 0l-4.5 4.5M21 12H7.5" />
    </svg>
  )
}

function StepCard({
  children,
  variant = 'sky',
  className = '',
}: {
  children: ReactNode
  variant?: 'sky' | 'neutral' | 'muted'
  className?: string
}) {
  const styles =
    variant === 'sky'
      ? 'border-sky-400/25 bg-gradient-to-br from-sky-500/12 to-transparent text-sky-50/95'
      : variant === 'muted'
        ? 'border-zinc-500/30 bg-zinc-500/[0.08] text-zinc-200/90'
        : 'border-white/[0.12] bg-white/[0.05] text-white/90'

  return (
    <div
      className={`rounded-xl border px-4 py-3 text-center text-[0.8125rem] font-medium leading-snug shadow-sm backdrop-blur-sm md:px-5 md:text-sm ${styles} ${className}`}
    >
      {children}
    </div>
  )
}

function FlowConnector({ vertical }: { vertical?: boolean }) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center text-sky-400/55 ${vertical ? 'py-2' : 'px-1 md:px-2'}`}
      aria-hidden
    >
      {vertical ? <ArrowDown /> : <ArrowRight />}
    </div>
  )
}

export function DesignProcessDiagram() {
  const reduced = useReducedMotion()
  const animate = !reduced

  return (
    <FadeIn>
      <div
        className="mb-12 space-y-8 md:space-y-10"
        role="region"
        aria-label="Design and delivery process from discovery through launch"
      >
        {/* Discovery */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:justify-center sm:gap-2">
          <motion.div
            className="min-w-0 flex-1 sm:max-w-md"
            initial={animate ? { opacity: 0, y: 12 } : false}
            whileInView={animate ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <StepCard>{D.discovery[0]}</StepCard>
          </motion.div>
          <div className="flex justify-center sm:hidden" aria-hidden>
            <ArrowDown />
          </div>
          <div className="hidden items-center justify-center sm:flex" aria-hidden>
            <ArrowRight />
          </div>
          <motion.div
            className="min-w-0 flex-1 sm:max-w-md"
            initial={animate ? { opacity: 0, y: 12 } : false}
            whileInView={animate ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <StepCard>{D.discovery[1]}</StepCard>
          </motion.div>
        </div>

        <FlowConnector vertical />

        {/* Iteration hub */}
        <GlassCard className="relative overflow-hidden border-sky-500/20 bg-gradient-to-b from-sky-950/45 to-zinc-950/90 p-5 md:p-6">
          <div className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl" aria-hidden />
          <div className="relative z-[1] mb-4 text-center">
            <p className="font-display text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-sky-300/90">
              {D.cycleHubLabel}
            </p>
            <p className="mt-1 text-xs text-white/45">Prototype, validate with real data, lock IA—on repeat.</p>
          </div>
          <div className="relative z-[1] flex flex-col gap-3 md:flex-row md:items-stretch md:justify-center md:gap-2">
            {D.cycle.map((label, i) => (
              <div key={label} className="contents md:flex md:min-w-0 md:flex-1 md:flex-row md:items-center">
                {i > 0 && (
                  <div className="flex justify-center md:flex md:shrink-0 md:px-1">
                    <ArrowRight className="rotate-90 md:rotate-0" />
                  </div>
                )}
                <motion.div
                  className="min-w-0 flex-1"
                  initial={animate ? { opacity: 0, y: 10 } : false}
                  whileInView={animate ? { opacity: 1, y: 0 } : undefined}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.08 * i }}
                >
                  <StepCard className="h-full min-h-[4.5rem] md:flex md:items-center md:justify-center">
                    {label}
                  </StepCard>
                </motion.div>
              </div>
            ))}
          </div>
          <div className="relative z-[1] mt-5 flex items-center justify-center gap-2 border-t border-white/[0.07] pt-4 text-xs text-sky-300/75">
            <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
            <span>{D.cycleFootnote}</span>
          </div>
        </GlassCard>

        <FlowConnector vertical />

        {/* Reviews ↔ hub */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/40">
            <ArrowBidirectional />
            <span>{D.feedbackLabel}</span>
          </div>
          <motion.div
            className="w-full max-w-xl"
            initial={animate ? { opacity: 0, y: 10 } : false}
            whileInView={animate ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <StepCard variant="neutral">{D.reviews}</StepCard>
          </motion.div>
        </div>

        <FlowConnector vertical />

        {/* Staging → UAT + dev branch */}
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-0">
          <div className="flex w-full flex-col items-stretch gap-4 md:flex-row md:items-center md:justify-center md:gap-3">
            <motion.div
              className="min-w-0 flex-1 md:max-w-[42%]"
              initial={animate ? { opacity: 0, y: 10 } : false}
              whileInView={animate ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <StepCard variant="neutral">{D.staging}</StepCard>
            </motion.div>
            <div className="hidden items-center justify-center md:flex" aria-hidden>
              <ArrowRight />
            </div>
            <div className="flex justify-center md:hidden" aria-hidden>
              <ArrowDown />
            </div>
            <motion.div
              className="min-w-0 flex-1 md:max-w-[42%]"
              initial={animate ? { opacity: 0, y: 10 } : false}
              whileInView={animate ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 }}
            >
              <StepCard variant="sky">{D.launch}</StepCard>
            </motion.div>
          </div>

          <div className="flex flex-col items-center" aria-hidden>
            <div className="h-8 w-px bg-gradient-to-b from-sky-400/35 to-white/15" />
          </div>
          <motion.div
            className="w-full max-w-md"
            initial={animate ? { opacity: 0, y: 8 } : false}
            whileInView={animate ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <StepCard variant="muted">{D.devIntegration}</StepCard>
          </motion.div>
          <p className="mt-2 text-center text-[0.7rem] text-white/35">{D.devIntegrationHint}</p>
        </div>
      </div>
    </FadeIn>
  )
}
