import {
  siConfluence,
  siGooglesheets,
  siJira,
  type SimpleIcon,
} from 'simple-icons'
import { motion, useReducedMotion } from 'framer-motion'
import { challengeComparison as C } from '../../content/caseStudy'
import { FadeIn } from '../ui/FadeIn'
import { GlassCard } from '../ui/GlassCard'

const brandMap = {
  googlesheets: siGooglesheets,
  confluence: siConfluence,
  jira: siJira,
} as const

function BrandLogo({
  icon,
  className,
}: {
  icon: SimpleIcon
  className?: string
}) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
    >
      <title>{icon.title}</title>
      <path fill={`#${icon.hex}`} d={icon.path} />
    </svg>
  )
}

/**
 * Normalized viewBox 0–100 (x), 0–120 (y). Sheets ~top-left (22,24),
 * Confluence ~top-right (78,24), Jira ~bottom-center (50,70); chaos knot mid triangle.
 */
const MESSY_SVG_ID = 'messy-tangle-grad'

const CONNECTION_AND_CHAOS_PATHS: { d: string; opacity: number; width: number; dash?: string }[] = [
  /* Sheets ↔ Confluence — arc across the top */
  { d: 'M 22 24 Q 50 14 78 24', opacity: 0.52, width: 1.35 },
  { d: 'M 22 28 C 42 36 58 36 78 28', opacity: 0.38, width: 1.1 },
  /* Sheets → Jira */
  { d: 'M 22 24 Q 36 48 50 70', opacity: 0.48, width: 1.25 },
  { d: 'M 22 30 C 32 48 42 58 50 68', opacity: 0.4, width: 1.05 },
  /* Confluence → Jira */
  { d: 'M 78 24 Q 64 48 50 70', opacity: 0.48, width: 1.25 },
  { d: 'M 78 30 C 68 48 58 58 50 68', opacity: 0.4, width: 1.05 },
  /* Cross / wrong-way routes */
  { d: 'M 22 24 Q 50 45 78 24', opacity: 0.36, width: 1, dash: '4 3' },
  { d: 'M 50 70 C 35 40 65 40 50 70', opacity: 0.32, width: 1, dash: '3 4' },
  /* Feedback loops */
  { d: 'M 50 70 Q 15 42 22 24', opacity: 0.34, width: 1 },
  { d: 'M 50 70 Q 85 42 78 24', opacity: 0.34, width: 1 },
  /* Converge into center chaos */
  { d: 'M 22 24 C 38 38 62 38 78 24', opacity: 0.44, width: 1.2 },
  { d: 'M 40 42 C 45 48 55 48 60 42', opacity: 0.42, width: 1.3 },
  /* Chaos scribble — dense knot between the three tools */
  { d: 'M 42 38 C 50 44 58 38 50 50', opacity: 0.42, width: 1.15, dash: '3 3' },
  { d: 'M 48 40 Q 52 48 45 54', opacity: 0.38, width: 1.05, dash: '2 4' },
  { d: 'M 52 42 C 48 50 55 52 48 56', opacity: 0.35, width: 0.95 },
  { d: 'M 38 44 Q 50 50 62 44', opacity: 0.36, width: 1.1 },
  { d: 'M 44 46 C 56 44 50 54 52 58', opacity: 0.33, width: 0.9, dash: '4 3' },
  { d: 'M 46 48 C 50 52 54 48 50 56', opacity: 0.4, width: 1.2 },
]

type MessyConnectionsProps = {
  animate: boolean
}

function MessyConnections({ animate }: MessyConnectionsProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-visible" aria-hidden>
      <svg
        className="h-full w-full overflow-visible"
        viewBox="0 0 100 120"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={MESSY_SVG_ID} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(251 113 133)" stopOpacity="0.75" />
            <stop offset="50%" stopColor="rgb(244 63 94)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="rgb(190 18 60)" stopOpacity="0.35" />
          </linearGradient>
          <filter id="messyGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {CONNECTION_AND_CHAOS_PATHS.map((item, i) => (
          <motion.path
            key={item.d}
            d={item.d}
            fill="none"
            stroke={`url(#${MESSY_SVG_ID})`}
            strokeWidth={item.width}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={item.dash}
            vectorEffect="non-scaling-stroke"
            filter="url(#messyGlow)"
            initial={
              animate
                ? { pathLength: 0, opacity: 0 }
                : { pathLength: 1, opacity: item.opacity }
            }
            animate={{ pathLength: 1, opacity: item.opacity }}
            transition={{
              pathLength: {
                duration: animate ? 1.2 : 0,
                delay: animate ? 0.05 * i : 0,
                ease: 'easeOut',
              },
              opacity: { duration: animate ? 0.35 : 0, delay: animate ? 0.05 * i : 0 },
            }}
          />
        ))}
      </svg>
      {animate && (
        <>
          <motion.span
            className="pointer-events-none absolute left-[48%] top-[30%] -translate-x-1/2 font-display text-xs font-bold text-rose-400/95"
            initial={{ opacity: 0, rotate: -8 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 1.1, type: 'spring', stiffness: 200 }}
          >
            ?
          </motion.span>
          <motion.span
            className="pointer-events-none absolute left-[18%] top-[22%] font-display text-xs font-bold text-rose-400/90"
            initial={{ opacity: 0, rotate: 10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 1.25, type: 'spring', stiffness: 200 }}
          >
            ?
          </motion.span>
          <motion.span
            className="pointer-events-none absolute right-[14%] top-[22%] font-display text-sm font-bold text-rose-500"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, type: 'spring', stiffness: 260 }}
          >
            !
          </motion.span>
        </>
      )}
    </div>
  )
}

export function ChallengeComparison() {
  const reduced = useReducedMotion()
  const chaosAnimate = !reduced

  return (
    <FadeIn>
      <div className="mb-12 mt-2">
        <h3 className="sr-only">Fragmented tools and the messy middle</h3>
        <div>
          <GlassCard className="relative flex min-h-[420px] flex-col overflow-visible border-rose-500/15 bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 p-5 md:p-6">
            <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-rose-500/10 blur-3xl" aria-hidden />
            <div className="relative z-20 mb-4">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-rose-300/90">
                {C.messyTitle}
              </p>
              <p className="mt-2 w-full text-sm leading-relaxed text-zinc-400">
                {C.messySubtitle}
              </p>
            </div>

            {/* SVG spans tools + friction; red lines connect each tool and tangle downward */}
            <div className="relative z-10 mb-2 flex min-h-[320px] flex-1 flex-col">
              <MessyConnections animate={chaosAnimate} />
              <div className="relative z-10 grid w-full grid-cols-2 gap-x-3 gap-y-4">
                {C.tools.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={chaosAnimate ? { opacity: 0, y: 8 } : false}
                    whileInView={chaosAnimate ? { opacity: 1, y: 0 } : undefined}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.45 }}
                    className={
                      i === 2
                        ? 'col-span-2 flex justify-center'
                        : 'min-w-0'
                    }
                  >
                    <div
                      className={`relative flex w-full gap-3 rounded-xl border border-white/[0.08] bg-zinc-950/55 p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur-md supports-[backdrop-filter]:bg-zinc-950/40 ${
                        i === 2
                          ? 'max-w-md'
                          : 'max-w-[min(100%,20rem)] md:max-w-none'
                      }`}
                    >
                      <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/90 p-2 shadow-inner shadow-black/20 ring-1 ring-white/20">
                        <BrandLogo
                          icon={brandMap[tool.icon]}
                          className="h-7 w-7"
                        />
                      </div>
                      <div className="relative z-10 min-w-0 flex-1">
                        <p className="font-display text-sm font-semibold text-zinc-200">
                          {tool.name}
                        </p>
                        <ul className="mt-1.5 flex flex-wrap gap-1.5">
                          {tool.tags.map((tag) => (
                            <li
                              key={tag}
                              className="rounded-md border border-white/[0.07] bg-black/35 px-2 py-0.5 text-[11px] leading-snug text-zinc-400"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="relative z-20 mt-auto border-t border-white/[0.06] pt-5">
                <div className="flex flex-wrap justify-center gap-2">
                  {C.frictionHints.map((hint) => (
                    <span
                      key={hint}
                      className="rounded-full border border-rose-500/35 bg-rose-950/50 px-2.5 py-1 text-[11px] font-medium text-rose-200/95 shadow-sm backdrop-blur-sm"
                    >
                      {hint}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex flex-col items-center gap-3">
                  <span className="inline-flex min-w-[11rem] items-center justify-center rounded-lg border border-rose-600/45 bg-rose-950/70 px-5 py-2 font-display text-xs font-bold uppercase tracking-[0.2em] text-rose-100 shadow-[0_0_28px_-10px_rgba(225,29,72,0.45)]">
                    {C.dataDebt}
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-500">
                    {C.currentBar}
                  </span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </FadeIn>
  )
}
