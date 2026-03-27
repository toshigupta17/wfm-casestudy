import { requirements } from '../../content/caseStudy'
import { FadeIn } from '../ui/FadeIn'
import { GlassCard } from '../ui/GlassCard'
import { Section } from '../layout/Section'
import { ProposedSolutionDiagram } from './ProposedSolutionDiagram'

export function Requirements() {
  return (
    <Section id={requirements.id} labelledBy={`${requirements.id}-title`}>
      <FadeIn>
        <h2 id={`${requirements.id}-title`} className="mb-4 font-display">
          {requirements.title}
        </h2>
        <p className="mb-10 max-w-prose text-white/75">{requirements.lede}</p>
      </FadeIn>
      <ProposedSolutionDiagram />
      <ol className="flex flex-col gap-5">
        {requirements.bullets.map((b, i) => (
          <li key={b.title}>
            <FadeIn delay={i * 0.06}>
              <GlassCard className="flex gap-4 p-6 md:p-7">
                <span
                  className="font-display text-2xl font-bold tabular-nums text-magenta/90"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="mb-2 text-base font-semibold text-white">
                    {b.title}
                  </h3>
                  <p className="text-[0.98rem] leading-relaxed text-white/70">
                    {b.body}
                  </p>
                </div>
              </GlassCard>
            </FadeIn>
          </li>
        ))}
      </ol>
    </Section>
  )
}
