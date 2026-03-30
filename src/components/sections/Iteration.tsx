import { iteration } from '../../content/caseStudy'
import { FadeIn } from '../ui/FadeIn'
import { GlassCard } from '../ui/GlassCard'
import { Section } from '../layout/Section'
import { IterationMockups } from './IterationMockups'

export function Iteration() {
  const ui = iteration.representativeUI

  return (
    <Section id={iteration.id} labelledBy={`${iteration.id}-title`}>
      <FadeIn>
        <h2 id={`${iteration.id}-title`} className="mb-4 font-display">
          {iteration.title}
        </h2>
        <p className="mb-10 max-w-prose text-slate-600">{iteration.lede}</p>
      </FadeIn>

      <FadeIn delay={0.06}>
        <div className="mb-6 space-y-3">
          <h3 className="font-display text-lg font-semibold text-slate-900 md:text-xl">
            {ui.heading}
          </h3>
          <p className="max-w-prose text-[0.98rem] leading-relaxed text-slate-600">
            {ui.intro}
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <GlassCard className="overflow-hidden p-0">
          <div className="border-b border-slate-200/80 bg-slate-100/50 p-4 md:p-6">
            <IterationMockups />
          </div>
          <div className="grid gap-6 p-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:p-7">
            {ui.captions.map((screen) => (
              <div key={screen.title} className="space-y-2">
                <p className="font-display text-sm font-semibold text-sky-200/90">
                  {screen.title}
                </p>
                <p className="text-[0.92rem] leading-relaxed text-slate-600">
                  {screen.body}
                </p>
              </div>
            ))}
          </div>
        </GlassCard>
      </FadeIn>
    </Section>
  )
}
