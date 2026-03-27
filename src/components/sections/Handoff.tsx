import { handoff } from '../../content/caseStudy'
import { FadeIn } from '../ui/FadeIn'
import { GlassCard } from '../ui/GlassCard'
import { Section } from '../layout/Section'

export function Handoff() {
  return (
    <Section id={handoff.id} labelledBy={`${handoff.id}-title`}>
      <FadeIn>
        <h2 id={`${handoff.id}-title`} className="mb-4 font-display">
          {handoff.title}
        </h2>
        <p className="mb-10 max-w-prose text-white/75">{handoff.lede}</p>
      </FadeIn>
      <ul className="flex flex-col gap-4">
        {handoff.items.map((item, i) => (
          <li key={item.label}>
            <FadeIn delay={i * 0.05}>
              <GlassCard className="flex flex-col gap-1 p-5 md:p-6 sm:flex-row sm:items-baseline sm:justify-between">
                <span className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
                  {item.label}
                </span>
                <p className="max-w-xl text-[0.98rem] leading-relaxed text-white/75">
                  {item.detail}
                </p>
              </GlassCard>
            </FadeIn>
          </li>
        ))}
      </ul>
    </Section>
  )
}
