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
        'rounded-2xl border border-slate-200/90 bg-white/80 shadow-[0_8px_40px_-14px_rgba(15,23,42,0.12)] backdrop-blur-xl',
        'transition-transform duration-300 ease-out motion-reduce:transition-none',
        'hover:-translate-y-0.5 hover:border-slate-300/95 hover:bg-white/95 hover:shadow-[0_12px_44px_-14px_rgba(15,23,42,0.14)] motion-reduce:hover:translate-y-0',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Tag>
  )
}
