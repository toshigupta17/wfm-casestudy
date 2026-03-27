import { motion, useReducedMotion } from 'framer-motion'
import { hero } from '../../content/caseStudy'

export function Hero() {
  const reduced = useReducedMotion()

  return (
    <header id="top" className="mb-12 md:mb-20">
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {hero.eyebrow}
        </p>
        <h1 className="mb-5 bg-gradient-to-br from-white via-white to-white/70 bg-clip-text font-display text-transparent">
          {hero.title}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
          {hero.subtitle}
        </p>
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
              delay: reduced ? 0 : 0.12 + i * 0.06,
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
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
