import { photoFile, photoSrcSet, type SitePhoto } from '../photos'

interface PhotoProps {
  photo: SitePhoto
  /** the shown width from 640px up, as a sizes value */
  sizes?: string
  /** a portrait crop (photo-<id>-phone.webp) for phones, where the frames stand tall */
  phoneCrop?: boolean
  eager?: boolean
  peekFor?: string
  hidden?: boolean
}

const DEFAULT_SIZES = '(max-width: 1023px) 100vw, (max-width: 1279px) 80vw, 60vw'

/** A photograph that fills its frame (.frame > .frame__img), with its own crop on a phone. */
export function Photo({
  photo,
  sizes = DEFAULT_SIZES,
  phoneCrop = true,
  eager,
  peekFor,
  hidden,
}: PhotoProps) {
  const largest = photo.widths[photo.widths.length - 1]

  return (
    <picture className="frame__img" data-peek-for={peekFor} hidden={hidden}>
      {phoneCrop ? (
        <source media="(max-width: 639px)" srcSet={`/assets/img/photo-${photo.id}-phone.webp`} />
      ) : null}
      <img
        src={photoFile(photo, largest)}
        srcSet={photoSrcSet(photo)}
        sizes={sizes}
        width={photo.width}
        height={photo.height}
        alt={photo.alt}
        loading={eager ? undefined : 'lazy'}
        fetchPriority={eager ? 'high' : undefined}
        decoding="async"
        data-source="stand-in"
        data-subject="stand-in"
      />
    </picture>
  )
}
