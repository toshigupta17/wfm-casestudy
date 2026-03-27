type PlaceholderImageProps = {
  label: string
  alt: string
  /** When you add a real asset, pass src (e.g. `/images/screen.png`) */
  src?: string | null
  aspectClassName?: string
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
        className={`overflow-hidden rounded-xl border border-white/10 bg-black/20 ${aspectClassName}`}
      >
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </figure>
    )
  }

  return (
    <figure
      className={`relative overflow-hidden rounded-xl border border-dashed border-white/20 bg-gradient-to-br from-white/[0.07] to-transparent ${aspectClassName}`}
    >
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, transparent, transparent 6px, rgba(255,255,255,0.08) 6px, rgba(255,255,255,0.08) 7px)',
        }}
      />
      <figcaption className="absolute inset-0 flex items-center justify-center p-6 text-center font-display text-sm font-medium tracking-wide text-white/55">
        {label}
      </figcaption>
    </figure>
  )
}
