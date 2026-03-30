import { cursorSection } from '../../content/caseStudy'
import { FadeIn } from '../ui/FadeIn'
import { GlassCard } from '../ui/GlassCard'
import { Section } from '../layout/Section'

export function CursorDesign() {
  return (
    <Section id={cursorSection.id} labelledBy={`${cursorSection.id}-title`}>
      <FadeIn>
        <h2 id={`${cursorSection.id}-title`} className="mb-4 font-display">
          {cursorSection.title}
        </h2>
        <p className="mb-10 max-w-prose text-slate-600">{cursorSection.lede}</p>
      </FadeIn>
      <ul className="flex flex-col gap-5">
        {cursorSection.highlights.map((h, i) => (
          <li key={h.title}>
            <FadeIn delay={i * 0.06}>
              <GlassCard className="border-fuchsia-200/80 bg-gradient-to-br from-fuchsia-50/90 to-white/50 p-6 md:p-7">
                <h3 className="mb-2 text-base font-semibold text-slate-900">
                  {h.title}
                </h3>
                <p className="text-[0.98rem] leading-relaxed text-slate-600">
                  {h.body}
                </p>
              </GlassCard>
            </FadeIn>
          </li>
        ))}
      </ul>
    </Section>
  )
}
