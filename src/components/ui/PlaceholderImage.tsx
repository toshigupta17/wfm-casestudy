type PlaceholderImageProps = {
  label: string
  alt: string
  /** When you add a real asset, pass src (e.g. `/images/screen.png`) */
  src?: string | null
  aspectClassName?: string
}

/** Resolves `/public/...` paths for Vite `base` (e.g. `./` on GitHub Pages). */
export function resolvePublicSrc(path: string) {
  if (path.startsWith('/')) {
    const base = import.meta.env.BASE_URL
    return `${base}${path.slice(1)}`
  }
  return path
}

export function PlaceholderImage({
  label,
  alt,
  src,
  aspectClassName = 'aspect-[16/10]',
}: PlaceholderImageProps) {
  if (src) {
    return (
      <figure
        className={`overflow-hidden rounded-xl border border-slate-200/90 bg-slate-100/80 ${aspectClassName}`}
      >
        <img
          src={resolvePublicSrc(src)}
          alt={alt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </figure>
    )
  }

  return (
    <figure
      className={`relative overflow-hidden rounded-xl border border-dashed border-slate-300/90 bg-gradient-to-br from-slate-50/90 to-white/40 ${aspectClassName}`}
    >
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, transparent, transparent 6px, rgba(15,23,42,0.06) 6px, rgba(15,23,42,0.06) 7px)',
        }}
      />
      <figcaption className="absolute inset-0 flex items-center justify-center p-6 text-center font-display text-sm font-medium tracking-wide text-slate-500">
        {label}
      </figcaption>
    </figure>
  )
}
