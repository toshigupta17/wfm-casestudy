import { discovery } from '../../content/caseStudy'
import { FadeIn } from '../ui/FadeIn'
import { GlassCard } from '../ui/GlassCard'
import { Section } from '../layout/Section'

export function Discovery() {
  return (
    <Section id={discovery.id} labelledBy={`${discovery.id}-title`}>
      <FadeIn>
        <h2 id={`${discovery.id}-title`} className="mb-4 font-display">
          {discovery.title}
        </h2>
        <p className="mb-10 max-w-prose text-white/75">{discovery.lede}</p>
      </FadeIn>
      <div className="grid gap-5 md:grid-cols-3">
        {discovery.cards.map((card, i) => (
          <FadeIn key={card.title} delay={i * 0.07}>
            <GlassCard className="flex h-full flex-col p-6 md:p-7">
              <h3 className="mb-3 text-base font-semibold text-accent">
                {card.title}
              </h3>
              <p className="text-[0.98rem] leading-relaxed text-white/70">
                {card.body}
              </p>
            </GlassCard>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
