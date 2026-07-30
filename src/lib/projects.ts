import type { MediaImage } from '../data/media'

export interface ProjectImage {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
  position?: string
}

const projectDateFormatter = new Intl.DateTimeFormat('es-AR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
})

export function formatProjectDate(date: string): string {
  return projectDateFormatter.format(new Date(`${date}T12:00:00Z`))
}

export function projectImageAsMedia(image: ProjectImage, id: string): MediaImage {
  return {
    id,
    src: image.src,
    alt: image.alt,
    width: image.width,
    height: image.height,
    orientation: image.width >= image.height ? 'landscape' : 'portrait',
    position: image.position,
  }
}
