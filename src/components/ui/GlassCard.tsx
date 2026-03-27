import type { ReactNode } from 'react'

type GlassCardProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'article' | 'section'
}

export function GlassCard({
  children,
  className = '',
  as: Tag = 'div',
}: GlassCardProps) {
  return (
    <Tag
      className={[
        'rounded-2xl border border-white/10 bg-white/[0.06] shadow-[0_24px_80px_-32px_rgba(0,0,0,0.75)] backdrop-blur-xl',
        'transition-transform duration-300 ease-out motion-reduce:transition-none',
        'hover:-translate-y-0.5 hover:border-white/[0.14] hover:bg-white/[0.09] motion-reduce:hover:translate-y-0',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Tag>
  )
}
