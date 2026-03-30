import { navItems } from '../../content/caseStudy'

export function StickyNav() {
  return (
    <nav
      className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#07080f]/65 px-4 py-3 backdrop-blur-xl md:px-8"
      aria-label="Case study sections"
    >
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-2 md:justify-between">
        <a
          href="#top"
          className="font-display text-sm font-semibold tracking-tight text-white/90 underline-offset-4 hover:text-accent hover:underline"
        >
          Atlassian WFM by Toshi
        </a>
        <ul className="flex max-w-full flex-wrap justify-center gap-x-3 gap-y-2 text-xs font-medium text-white/55 md:justify-end">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="rounded-md px-1.5 py-1 text-white/65 transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
