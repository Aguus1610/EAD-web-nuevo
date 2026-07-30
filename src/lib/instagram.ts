export const instagramApiVersion = 'v25.0'

export type InstagramMediaType = 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
export type InstagramPostKind = 'p' | 'reel' | 'tv'

export interface InstagramPermalink {
  shortcode: string
  kind: InstagramPostKind
  url: string
}

export interface InstagramUser {
  id: string
  username: string
}

export interface InstagramMediaChild {
  id: string
  mediaType: Exclude<InstagramMediaType, 'CAROUSEL_ALBUM'>
  mediaUrl?: string
  thumbnailUrl?: string
  timestamp?: string
}

export interface InstagramMedia {
  id: string
  caption: string
  mediaType: InstagramMediaType
  mediaProductType?: string
  mediaUrl?: string
  thumbnailUrl?: string
  permalink: string
  timestamp: string
  username?: string
  children: InstagramMediaChild[]
}

export interface InstagramMediaPage {
  data: InstagramMedia[]
  after?: string
}

export interface InstagramDraftAsset {
  kind: 'image' | 'video-cover'
  sourceMediaId: string
  file: string
  width: number
  height: number
  alt: string
}

export interface InstagramProjectDraft {
  version: 1
  status: 'requires-editorial-review'
  importedAt: string
  source: {
    platform: 'instagram'
    mediaId: string
    shortcode: string
    permalink: string
    publishedAt: string
    mediaType: InstagramMediaType
    caption: string
  }
  suggested: {
    title: string
    date: string
    category: string
    summary: string
    equipment: string
    problem: string
    intervention: string
    result: string
    relatedServices: string[]
    featured: boolean
    publicationApproved: false
  }
  assets: InstagramDraftAsset[]
  review: {
    factsConfirmed: false
    privacyChecked: false
    altTextChecked: false
  }
}

type UnknownRecord = Record<string, unknown>

function asRecord(value: unknown, label: string): UnknownRecord {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error(`${label} no tiene el formato esperado.`)
  }
  return value as UnknownRecord
}

function requiredString(record: UnknownRecord, key: string, label: string): string {
  const value = record[key]
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(`${label} no incluye ${key}.`)
  }
  return value.trim()
}

function optionalString(record: UnknownRecord, key: string): string | undefined {
  const value = record[key]
  return typeof value === 'string' && value.trim() !== '' ? value.trim() : undefined
}

function mediaType(value: unknown, allowCarousel: boolean): InstagramMediaType {
  if (value === 'IMAGE' || value === 'VIDEO' || (allowCarousel && value === 'CAROUSEL_ALBUM')) return value
  throw new Error('Instagram devolvió un tipo de medio no compatible.')
}

function httpsUrl(value: string, label: string): string {
  const url = new URL(value)
  if (url.protocol !== 'https:') throw new Error(`${label} debe usar HTTPS.`)
  return url.toString()
}

function normalizeTimestamp(value: string, label: string): string {
  const withColonOffset = value.replace(/([+-]\d{2})(\d{2})$/, '$1:$2')
  const timestamp = new Date(withColonOffset)
  if (Number.isNaN(timestamp.getTime())) throw new Error(`${label} no es una fecha válida.`)
  return timestamp.toISOString()
}

export function parseInstagramPermalink(input: string): InstagramPermalink {
  let url: URL
  try {
    url = new URL(input.trim())
  } catch {
    throw new Error('El enlace de Instagram no es una URL válida.')
  }

  const hostname = url.hostname.toLowerCase()
  if (!['instagram.com', 'www.instagram.com', 'm.instagram.com'].includes(hostname)) {
    throw new Error('El enlace debe pertenecer a instagram.com.')
  }

  const segments = url.pathname.split('/').filter(Boolean)
  const kind = segments[0]
  const shortcode = segments[1]
  if (!['p', 'reel', 'tv'].includes(kind) || !shortcode || !/^[A-Za-z0-9_-]+$/.test(shortcode)) {
    throw new Error('El enlace debe apuntar a una publicación o Reel de Instagram.')
  }

  return {
    kind: kind as InstagramPostKind,
    shortcode,
    url: `https://www.instagram.com/${kind}/${shortcode}/`,
  }
}

export function parseInstagramUser(value: unknown): InstagramUser {
  const root = asRecord(value, 'La respuesta de usuario')
  const candidate = Array.isArray(root.data) ? root.data[0] : root
  const user = asRecord(candidate, 'La respuesta de usuario')
  const id = optionalString(user, 'user_id') ?? requiredString(user, 'id', 'La respuesta de usuario')
  return { id, username: requiredString(user, 'username', 'La respuesta de usuario') }
}

function parseInstagramChild(value: unknown): InstagramMediaChild {
  const child = asRecord(value, 'El medio del carrusel')
  const type = mediaType(child.media_type, false)
  const mediaUrl = optionalString(child, 'media_url')
  const thumbnailUrl = optionalString(child, 'thumbnail_url')
  return {
    id: requiredString(child, 'id', 'El medio del carrusel'),
    mediaType: type as Exclude<InstagramMediaType, 'CAROUSEL_ALBUM'>,
    mediaUrl: mediaUrl ? httpsUrl(mediaUrl, 'La URL del medio') : undefined,
    thumbnailUrl: thumbnailUrl ? httpsUrl(thumbnailUrl, 'La miniatura') : undefined,
    timestamp: optionalString(child, 'timestamp')
      ? normalizeTimestamp(requiredString(child, 'timestamp', 'El medio del carrusel'), 'La fecha del medio')
      : undefined,
  }
}

export function parseInstagramChildren(value: unknown): InstagramMediaChild[] {
  const page = asRecord(value, 'La respuesta del carrusel')
  if (!Array.isArray(page.data)) throw new Error('La respuesta del carrusel no incluye medios.')
  return page.data.map(parseInstagramChild)
}

export function parseInstagramMedia(value: unknown): InstagramMedia {
  const item = asRecord(value, 'La publicación')
  const type = mediaType(item.media_type, true)
  const mediaUrl = optionalString(item, 'media_url')
  const thumbnailUrl = optionalString(item, 'thumbnail_url')
  const childrenRecord = item.children ? asRecord(item.children, 'Los medios del carrusel') : undefined
  const children = childrenRecord?.data

  return {
    id: requiredString(item, 'id', 'La publicación'),
    caption: optionalString(item, 'caption') ?? '',
    mediaType: type,
    mediaProductType: optionalString(item, 'media_product_type'),
    mediaUrl: mediaUrl ? httpsUrl(mediaUrl, 'La URL del medio') : undefined,
    thumbnailUrl: thumbnailUrl ? httpsUrl(thumbnailUrl, 'La miniatura') : undefined,
    permalink: parseInstagramPermalink(requiredString(item, 'permalink', 'La publicación')).url,
    timestamp: normalizeTimestamp(requiredString(item, 'timestamp', 'La publicación'), 'La fecha de publicación'),
    username: optionalString(item, 'username'),
    children: Array.isArray(children) ? children.map(parseInstagramChild) : [],
  }
}

export function parseInstagramMediaPage(value: unknown): InstagramMediaPage {
  const page = asRecord(value, 'La respuesta de publicaciones')
  if (!Array.isArray(page.data)) throw new Error('La respuesta no incluye una lista de publicaciones.')
  const paging = page.paging ? asRecord(page.paging, 'La paginación') : undefined
  const cursors = paging?.cursors ? asRecord(paging.cursors, 'Los cursores de paginación') : undefined
  return {
    data: page.data.map(parseInstagramMedia),
    after: cursors ? optionalString(cursors, 'after') : undefined,
  }
}

export function withInstagramChildren(media: InstagramMedia, children: InstagramMediaChild[]): InstagramMedia {
  return { ...media, children }
}

export function instagramMediaItems(media: InstagramMedia): InstagramMediaChild[] {
  if (media.mediaType === 'CAROUSEL_ALBUM') return media.children
  return [{
    id: media.id,
    mediaType: media.mediaType,
    mediaUrl: media.mediaUrl,
    thumbnailUrl: media.thumbnailUrl,
    timestamp: media.timestamp,
  }]
}

function suggestedTitle(caption: string, shortcode: string): string {
  const firstMeaningfulLine = caption
    .split(/\r?\n/)
    .map((line) => line.trim())
    .find((line) => line !== '' && !line.startsWith('#'))
  const fallback = `Trabajo de Instagram ${shortcode}`
  const title = firstMeaningfulLine ?? fallback
  return title.length <= 90 ? title : `${title.slice(0, 87).trimEnd()}...`
}

export function createInstagramProjectDraft(
  media: InstagramMedia,
  assets: InstagramDraftAsset[],
  importedAt: string,
): InstagramProjectDraft {
  const permalink = parseInstagramPermalink(media.permalink)
  return {
    version: 1,
    status: 'requires-editorial-review',
    importedAt,
    source: {
      platform: 'instagram',
      mediaId: media.id,
      shortcode: permalink.shortcode,
      permalink: permalink.url,
      publishedAt: media.timestamp,
      mediaType: media.mediaType,
      caption: media.caption,
    },
    suggested: {
      title: suggestedTitle(media.caption, permalink.shortcode),
      date: media.timestamp.slice(0, 10),
      category: '',
      summary: '',
      equipment: '',
      problem: '',
      intervention: '',
      result: '',
      relatedServices: [],
      featured: false,
      publicationApproved: false,
    },
    assets,
    review: {
      factsConfirmed: false,
      privacyChecked: false,
      altTextChecked: false,
    },
  }
}
