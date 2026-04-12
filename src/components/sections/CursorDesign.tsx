import { cursorSection } from '../../content/caseStudy'
import { FadeIn } from '../ui/FadeIn'
import { GlassCard } from '../ui/GlassCard'
import { Section } from '../layout/Section'

/** Public-folder URLs must respect `vite.config` `base` (e.g. `./` for GitHub Pages). */
function publicAssetUrl(path: string): string {
  const trimmed = path.replace(/^\//, '')
  return encodeURI(`${import.meta.env.BASE_URL}${trimmed}`)
}

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
                {h.promptExamples && h.promptExamples.length > 0 ? (
                  <details
                    className="group mt-5 border-t border-fuchsia-200/70 pt-4"
                    aria-label="Prompt framework examples"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-lg py-2 pr-1 text-sm font-semibold text-slate-800 outline-none hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-fuchsia-400/80 focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                      <span>Prompt frameworks & examples</span>
                      <svg
                        className="h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 ease-out group-open:rotate-180 motion-reduce:transition-none"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </summary>
                    <div className="mt-4 space-y-5 border-t border-fuchsia-200/50 pt-4">
                      {h.promptExamples.map((ex) => (
                        <div key={ex.label} className="space-y-2">
                          <h4 className="text-sm font-semibold text-slate-800">
                            {ex.label}
                          </h4>
                          <p className="rounded-lg bg-white/70 px-3 py-2.5 text-[0.9rem] leading-snug text-slate-700 ring-1 ring-slate-200/90">
                            {ex.framework}
                          </p>
                          {ex.example ? (
                            <p className="text-[0.92rem] leading-relaxed text-slate-600">
                              <span className="font-medium text-slate-700">
                                Example:{' '}
                              </span>
                              {ex.example}
                            </p>
                          ) : null}
                          {ex.tip ? (
                            <p className="text-[0.9rem] leading-relaxed text-slate-500">
                              {ex.tip}
                            </p>
                          ) : null}
                          {ex.video ? (
                            <figure className="mt-3 space-y-2">
                              <div className="overflow-hidden rounded-lg bg-slate-950/5 ring-1 ring-slate-200/90">
                                <video
                                  controls
                                  playsInline
                                  preload="metadata"
                                  className="aspect-video w-full bg-black object-contain"
                                >
                                  {/*
                                    H.264 in .mov works in Safari; Chromium may prefer MP4 container.
                                    Omit type so the browser can sniff; URL uses Vite base.
                                  */}
                                  <source src={publicAssetUrl(ex.video.src)} />
                                </video>
                              </div>
                              <figcaption className="text-[0.82rem] leading-snug text-slate-500">
                                {ex.video.description}
                              </figcaption>
                            </figure>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </details>
                ) : null}
              </GlassCard>
            </FadeIn>
          </li>
        ))}
      </ul>
    </Section>
  )
}
