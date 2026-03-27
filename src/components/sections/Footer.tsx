import { footer } from '../../content/caseStudy'
import { FadeIn } from '../ui/FadeIn'

export function Footer() {
  return (
    <footer className="border-t border-white/10 pb-12 pt-10">
      <FadeIn>
        <p className="text-center text-sm leading-relaxed text-white/45">
          {footer.note}
        </p>
      </FadeIn>
    </footer>
  )
}
