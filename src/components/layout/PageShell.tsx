import type { ReactNode } from 'react'

type PageShellProps = {
  children: ReactNode
  nav?: ReactNode
}

export function PageShell({ children, nav }: PageShellProps) {
  return (
    <div className="relative min-h-svh overflow-x-hidden">
      <div
        className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(124,240,214,0.18),transparent_55%),radial-gradient(ellipse_80%_60%_at_100%_50%,rgba(232,121,249,0.12),transparent_50%),radial-gradient(ellipse_70%_50%_at_0%_80%,rgba(59,130,246,0.08),transparent_45%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[#07080f]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 -z-[9] opacity-[0.22] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '220px 220px',
        }}
        aria-hidden
      />

      {nav}

      <main className="relative mx-auto max-w-3xl px-5 pb-28 pt-10 md:px-8 md:pt-14 lg:max-w-4xl">
        {children}
      </main>
    </div>
  )
}
