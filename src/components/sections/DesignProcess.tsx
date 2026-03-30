import { designProcess } from '../../content/caseStudy'
import { FadeIn } from '../ui/FadeIn'
import { Section } from '../layout/Section'
import { DesignProcessDiagram } from './DesignProcessDiagram'

export function DesignProcess() {
  return (
    <Section
      id={designProcess.id}
      labelledBy={`${designProcess.id}-title`}
      className="h-fit"
    >
      <FadeIn>
        <h2 id={`${designProcess.id}-title`} className="mb-4 font-display">
          {designProcess.title}
        </h2>
        <p className="mb-10 max-w-prose text-white/75">{designProcess.lede}</p>
      </FadeIn>
      <DesignProcessDiagram />
    </Section>
  )
}
