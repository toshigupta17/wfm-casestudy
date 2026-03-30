import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import { hero } from '../../content/caseStudy'
import { GlassCard } from '../ui/GlassCard'

const easeOut = [0.22, 1, 0.36, 1] as const
const AUTO_MS = 6500

export function Hero() {
  const reduced = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)
  const pauseRef = useRef(false)
  const len = hero.screens.length

  const go = useCallback(
    (delta: number) => {
      setDir(delta)
      setIndex((i) => (i + delta + len) % len)
    },
    [len],
  )

  useEffect(() => {
    if (reduced) return
    const id = window.setInterval(() => {
      if (pauseRef.current || document.hidden) return
      setDir(1)
      setIndex((i) => (i + 1) % len)
    }, AUTO_MS)
    return () => window.clearInterval(id)
  }, [reduced, len])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        go(-1)
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        go(1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  const screen = hero.screens[index]

  const screenVariants = {
    initial: (direction: number) =>
      reduced
        ? { opacity: 0 }
        : {
            opacity: 0,
            x: direction >= 0 ? 48 : -48,
            filter: 'blur(8px)',
          },
    animate: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.55, ease: easeOut },
    },
    exit: (direction: number) =>
      reduced
        ? { opacity: 0, transition: { duration: 0.25 } }
        : {
            opacity: 0,
            x: direction >= 0 ? -40 : 40,
            filter: 'blur(6px)',
            transition: { duration: 0.38, ease: easeOut },
          },
  }

  return (
    <header id="top" className="mb-12 md:mb-20">
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <GlassCard className="relative overflow-hidden border-accent/15 bg-gradient-to-br from-white/[0.07] to-white/[0.03] p-6 md:p-8">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/5 blur-3xl"
            aria-hidden
          />
          <div className="relative z-[1]">
            <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {hero.eyebrow}
            </p>
            <h1 className="mb-5 bg-gradient-to-br from-white via-white to-white/70 bg-clip-text font-display text-transparent">
              {hero.title}
            </h1>
            <p className="max-w-2xl text-[17px] leading-relaxed text-white/75">
              {hero.subtitle}
            </p>
          </div>
        </GlassCard>
      </motion.div>

      <motion.div
        className="mt-10 md:mt-12"
        initial={reduced ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: reduced ? 0 : 0.15, duration: 0.65, ease: easeOut }}
      >
        <p className="mb-4 text-center font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">
          Product UI
        </p>

        <div
          className={[
            'overflow-hidden rounded-2xl border border-white/[0.12]',
            'bg-[#0a0c11] shadow-[0_40px_100px_-40px_rgba(0,0,0,0.95)]',
            'ring-1 ring-inset ring-white/[0.06]',
          ].join(' ')}
          onMouseEnter={() => {
            pauseRef.current = true
          }}
          onMouseLeave={() => {
            pauseRef.current = false
          }}
          role="region"
          aria-roledescription="carousel"
          aria-label="Symphony interface screens"
        >
          {/* Browser chrome — decorative mock; screen content is real product UI */}
          <div className="flex h-11 shrink-0 items-center gap-3 border-b border-white/[0.08] bg-white/[0.04] px-3 md:h-12 md:px-4">
            <div className="flex gap-1.5" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/90" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/90" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/90" />
            </div>
            <div className="min-w-0 flex-1 rounded-md border border-white/[0.06] bg-black/30 px-3 py-1 text-center">
              <p className="truncate text-[11px] text-white/45 md:text-xs">
                <span className="text-white/30">symphony · </span>
                <span className="font-medium text-white/70">{screen.label}</span>
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-1">
              <button
                type="button"
                onClick={() => go(-1)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-white/70 transition-colors hover:border-white/20 hover:bg-white/[0.09] hover:text-white"
                aria-label="Previous screen"
              >
                <Chevron dir="left" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-white/70 transition-colors hover:border-white/20 hover:bg-white/[0.09] hover:text-white"
                aria-label="Next screen"
              >
                <Chevron dir="right" />
              </button>
            </div>
          </div>

          {/* Full screenshot: width-fit, no cropping; tall pages scroll inside */}
          <div className="relative bg-[#f1f2f4]">
            <div
              className="relative max-h-[min(78vh,900px)] w-full overflow-x-hidden overflow-y-auto"
              style={{ scrollbarGutter: 'stable' }}
            >
              <AnimatePresence mode="wait" initial={false} custom={dir}>
                <motion.div
                  key={screen.src}
                  custom={dir}
                  variants={screenVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full"
                >
                  <img
                    src={screen.src}
                    alt={screen.alt}
                    width={1600}
                    height={1200}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    fetchPriority={index === 0 ? 'high' : 'low'}
                    draggable={false}
                    className="block h-auto w-full max-w-full object-contain object-top"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 border-t border-white/[0.08] bg-white/[0.03] px-3 py-3">
            {hero.screens.map((s, i) => (
              <button
                key={s.src}
                type="button"
                onClick={() => {
                  setDir(i > index ? 1 : -1)
                  setIndex(i)
                }}
                className={[
                  'h-2 rounded-full transition-all duration-300',
                  i === index
                    ? 'w-7 bg-accent/90'
                    : 'w-2 bg-white/20 hover:bg-white/35',
                ].join(' ')}
                aria-label={`Show ${s.label}`}
                aria-current={i === index}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <ul
        className="mt-10 flex list-none flex-wrap gap-3 p-0"
        aria-label="Project meta"
      >
        {hero.meta.map((chip, i) => (
          <motion.li
            key={chip.label}
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: reduced ? 0 : 0.72 + i * 0.07,
              duration: 0.45,
              ease: easeOut,
            }}
          >
            <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm backdrop-blur-md">
              <span className="text-white/45">{chip.label}</span>
              <span className="mx-2 text-white/25">·</span>
              <span className="text-white/85">{chip.value}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </header>
  )
}

function Chevron({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {dir === 'left' ? (
        <path d="M15 18l-6-6 6-6" />
      ) : (
        <path d="M9 18l6-6-6-6" />
      )}
    </svg>
  )
}
