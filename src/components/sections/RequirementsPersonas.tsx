import { motion, useReducedMotion } from 'framer-motion'
import { requirements, type PersonaGoal } from '../../content/caseStudy'
import { FadeIn } from '../ui/FadeIn'
import { GlassCard } from '../ui/GlassCard'

const accentStyles: Record<PersonaGoal['accent'], { border: string; glow: string }> = {
  amber: {
    border: 'border-amber-400/45',
    glow: 'bg-amber-400/20',
  },
  violet: {
    border: 'border-violet-400/45',
    glow: 'bg-violet-400/20',
  },
  teal: {
    border: 'border-teal-400/45',
    glow: 'bg-teal-400/15',
  },
}

/** Distinct DiceBear styles per accent; seed = role so avatars stay stable across visits. */
const avatarStyleByAccent: Record<PersonaGoal['accent'], string> = {
  amber: 'notionists',
  violet: 'lorelei',
  teal: 'micah',
}

function personaAvatarUrl(persona: PersonaGoal) {
  const style = avatarStyleByAccent[persona.accent]
  const seed = encodeURIComponent(persona.role)
  return `https://api.dicebear.com/7.x/${style}/svg?seed=${seed}&size=128`
}

function PersonaGlyph({ persona }: { persona: PersonaGoal }) {
  const a = accentStyles[persona.accent]

  return (
    <div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center">
      <div className={`pointer-events-none absolute inset-0 scale-110 rounded-full blur-2xl ${a.glow}`} aria-hidden />
      <div
        className={`relative h-16 w-16 overflow-hidden rounded-full border-2 bg-zinc-900/40 ${a.border}`}
      >
        <img
          src={personaAvatarUrl(persona)}
          alt=""
          width={128}
          height={128}
          className="h-full w-full object-cover object-top grayscale contrast-[1.08]"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  )
}

export function RequirementsPersonas() {
  const { personasTitle, personas } = requirements
  const reduced = useReducedMotion()
  const animate = !reduced

  return (
    <FadeIn>
      <div className="mb-12">
        <h3 className="mb-6 font-display text-xl font-semibold text-white md:text-2xl">{personasTitle}</h3>
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6" role="list">
          {personas.map((persona, i) => (
            <li key={persona.role}>
              <motion.div
                initial={animate ? { opacity: 0, y: 14 } : false}
                whileInView={animate ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <GlassCard className="flex h-full flex-col p-6 md:p-7">
                  <PersonaGlyph persona={persona} />
                  <h4 className="mb-3 text-center font-display text-base font-semibold text-white">
                    {persona.role}
                  </h4>
                  <p className="text-center text-[0.95rem] leading-relaxed text-white/70">{persona.goal}</p>
                </GlassCard>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  )
}
