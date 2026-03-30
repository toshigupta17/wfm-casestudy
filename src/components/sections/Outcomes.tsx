import { outcomes } from '../../content/caseStudy'
import { FadeIn } from '../ui/FadeIn'
import { GlassCard } from '../ui/GlassCard'
import { Section } from '../layout/Section'

export function Outcomes() {
  return (
    <Section id={outcomes.id} labelledBy={`${outcomes.id}-title`}>
      <FadeIn>
        <h2 id={`${outcomes.id}-title`} className="mb-4 font-display">
          {outcomes.title}
        </h2>
        <p className="mb-10 max-w-prose text-slate-600">{outcomes.lede}</p>
      </FadeIn>
      <ul className="flex flex-col gap-5">
        {outcomes.bullets.map((b, i) => (
          <li key={b.title}>
            <FadeIn delay={i * 0.06}>
              <GlassCard className="p-6 md:p-7">
                <h3 className="mb-2 text-base font-semibold text-slate-900">
                  {b.title}
                </h3>
                <p className="text-[0.98rem] leading-relaxed text-slate-600">
                  {b.body}
                </p>
              </GlassCard>
            </FadeIn>
          </li>
        ))}
      </ul>
    </Section>
  )
}
