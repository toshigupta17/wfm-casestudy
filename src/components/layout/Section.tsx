import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  children: ReactNode
  className?: string
  labelledBy?: string
}

export function Section({ id, children, className = '', labelledBy }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`scroll-mt-28 py-[60px] ${className}`}
    >
      {children}
    </section>
  )
}
