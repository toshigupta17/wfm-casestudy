import { discovery } from '../../content/caseStudy'
import { DiscoveryProcessFigures } from '../discovery/DiscoveryProcessFigures'
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
      <div className="flex flex-col gap-5 md:[&>*]:min-w-0 md:[&>*]:flex-1">
        {discovery.cards.map((card, i) => (
          <FadeIn key={card.title} delay={i * 0.07}>
            <div className="flex flex-col gap-5">
              <GlassCard
                className={
                  card.title === 'Journey and system map'
                    ? 'mt-6 flex h-full flex-col p-6 md:p-7'
                    : 'flex h-full flex-col p-6 md:p-7'
                }
              >
                <h3 className="mb-3 text-base font-semibold text-accent">
                  {card.title}
                </h3>
                <p className="text-[0.98rem] leading-relaxed text-white/70">
                  {card.body}
                </p>
              </GlassCard>
              {card.figures && card.figures.length > 0 ? (
                <DiscoveryProcessFigures kinds={card.figures} />
              ) : null}
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
