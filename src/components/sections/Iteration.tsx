import { iteration } from '../../content/caseStudy'
import { FadeIn } from '../ui/FadeIn'
import { GlassCard } from '../ui/GlassCard'
import { PlaceholderImage } from '../ui/PlaceholderImage'
import { Section } from '../layout/Section'

export function Iteration() {
  return (
    <Section id={iteration.id} labelledBy={`${iteration.id}-title`}>
      <FadeIn>
        <h2 id={`${iteration.id}-title`} className="mb-4 font-display">
          {iteration.title}
        </h2>
        <p className="mb-10 max-w-prose text-white/75">{iteration.lede}</p>
      </FadeIn>
      <div className="flex flex-col gap-10">
        {iteration.frames.map((frame, i) => (
          <FadeIn key={frame.caption} delay={i * 0.08}>
            <GlassCard className="overflow-hidden p-0">
              <PlaceholderImage
                label={frame.caption}
                alt={frame.imageAlt}
                src={frame.imageSrc}
              />
              <div className="space-y-3 p-6 md:p-7">
                <p className="font-display text-sm font-medium text-white/55">
                  {frame.caption}
                </p>
                <p className="text-[0.98rem] leading-relaxed text-white/75">
                  {frame.body}
                </p>
              </div>
            </GlassCard>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
