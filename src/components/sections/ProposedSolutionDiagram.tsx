import { motion, useReducedMotion } from 'framer-motion'
import { challengeComparison as C, requirements } from '../../content/caseStudy'
import { FadeIn } from '../ui/FadeIn'
import { GlassCard } from '../ui/GlassCard'

function PillarGlyph({ variant }: { variant: 'skills' | 'capacity' | 'insights' }) {
  const common = 'h-6 w-6 shrink-0 text-sky-200/90'
  if (variant === 'skills') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    )
  }
  if (variant === 'capacity') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    )
  }
  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.147-2.147a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-2.147 2.147A11.95 11.95 0 0121 21.75" />
    </svg>
  )
}

const pillarVariants = ['skills', 'capacity', 'insights'] as const

export function ProposedSolutionDiagram() {
  const reduced = useReducedMotion()
  const chaosAnimate = !reduced
  const firstBullet = requirements.bullets[0]

  return (
    <FadeIn>
      <div className="mb-12">
        <GlassCard className="mb-12 flex gap-4 p-6 md:p-7">
          <span
            className="font-display text-2xl font-bold tabular-nums text-magenta/90"
            aria-hidden
          >
            01
          </span>
          <div>
            <h3 className="mb-2 text-base font-semibold text-white">{firstBullet.title}</h3>
            <p
              className="text-[0.98rem] leading-relaxed text-white/70 [&_b]:font-semibold [&_b]:text-white/85"
              dangerouslySetInnerHTML={{ __html: firstBullet.body }}
            />
          </div>
        </GlassCard>
        <GlassCard className="relative flex min-h-[420px] flex-col overflow-hidden border-sky-500/20 bg-gradient-to-b from-sky-950/50 to-emerald-950/20 p-5 md:p-6">
          <div className="pointer-events-none absolute -left-10 top-20 h-48 w-48 rounded-full bg-sky-500/15 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute bottom-10 right-0 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl" aria-hidden />

          <div className="relative z-[1] mb-5">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-sky-300/95">
              {C.futureSubtitle}
            </p>
            <h3 className="mt-2 font-display text-lg font-semibold text-white md:text-xl">
              {C.futureTitle}
            </h3>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-sky-100/75">
              {C.futureLede}
            </p>
          </div>

          <div className="relative z-[1] flex flex-1 flex-col gap-3">
            {C.pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={chaosAnimate ? { opacity: 0, y: 14 } : false}
                whileInView={chaosAnimate ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true }}
                transition={{ delay: 0.12 + i * 0.07, duration: 0.5 }}
                className="rounded-xl border border-sky-400/20 bg-gradient-to-br from-sky-500/15 to-transparent p-4 backdrop-blur-md"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-sky-400/25 bg-sky-500/10">
                    <PillarGlyph variant={pillarVariants[i]} />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-sky-100">
                      {pillar.title}
                    </p>
                    <ul className="mt-2 space-y-1.5 text-[13px] leading-snug text-sky-100/75">
                      {pillar.items.map((line) => (
                        <li key={line} className="flex gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sky-400/80" aria-hidden />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative z-[1] mt-4 rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-4 py-3 backdrop-blur-sm">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-emerald-200/90">
              {C.outcomesLabel}
            </p>
            <p className="mt-1 text-sm font-medium text-emerald-100/95">
              {C.outcomes}
            </p>
          </div>

          <div className="relative z-[1] mt-4 border-t border-white/[0.08] pt-4">
            <span className="inline-flex w-full justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/15 py-2 text-center font-display text-xs font-semibold uppercase tracking-[0.12em] text-emerald-200">
              {C.futureBar}
            </span>
          </div>
        </GlassCard>
      </div>
    </FadeIn>
  )
}
