export interface SitePhoto {
  /** the id in /assets/img/photo-<id>*.webp (and in credits.html) */
  id: string
  /** the widths on disk; the largest file has no width in its name unless `largestSuffix` says so */
  widths: number[]
  largestSuffix?: boolean
  width: number
  height: number
  alt: string
}

/* Every photograph is a licensed stand-in (Wikimedia Commons) until the client's own are shot. */
export const photos = {
  workshop: {
    id: 'f71269648',
    widths: [500, 960, 1280],
    width: 1280,
    height: 785,
    alt: 'Pizarra de un taller de trabajo cubierta de notas adhesivas de colores',
  },
  retail: {
    id: 'f76566244',
    widths: [500, 960],
    largestSuffix: true,
    width: 960,
    height: 596,
    alt: 'Pasillo de un supermercado con los lineales llenos',
  },
  bank: {
    id: 'f130198951',
    widths: [500, 960, 1280],
    width: 1280,
    height: 853,
    alt: 'Pared de cajas de seguridad en la cámara de un banco',
  },
  pharma: {
    id: 'f106658402',
    widths: [500, 960, 1280],
    width: 1280,
    height: 853,
    alt: 'Viales con tapón verde avanzando por una línea de envasado',
  },
  warehouse: {
    id: 'f9436500',
    widths: [500, 960],
    largestSuffix: true,
    width: 960,
    height: 750,
    alt: 'Almacén logístico con estanterías de palés y carretillas',
  },
  aisle: {
    id: 'f110874437',
    widths: [500, 960, 1280],
    width: 1280,
    height: 808,
    alt: 'Pasillo de un centro de datos entre dos filas de armarios de servidores',
  },
  meeting: {
    id: 'f58414862',
    widths: [500, 960, 1280],
    width: 1280,
    height: 1628,
    alt: 'Sala de reuniones con una hoja de cálculo abierta en la pantalla',
  },
  racks: {
    id: 'f134195982',
    widths: [500, 960, 1280],
    largestSuffix: true,
    width: 1280,
    height: 921,
    alt: 'Armarios de servidores encendidos en una sala de datos',
  },
} satisfies Record<string, SitePhoto>

export function photoFile(photo: SitePhoto, width: number): string {
  const largest = photo.widths[photo.widths.length - 1]
  const suffix = width === largest && !photo.largestSuffix ? '' : `-${width}`
  return `/assets/img/photo-${photo.id}${suffix}.webp`
}

export function photoSrcSet(photo: SitePhoto): string {
  return photo.widths.map((width) => `${photoFile(photo, width)} ${width}w`).join(', ')
}
