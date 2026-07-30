import { access, mkdir, rm, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'
import {
  createInstagramProjectDraft,
  instagramApiVersion,
  instagramMediaItems,
  parseInstagramChildren,
  parseInstagramMediaPage,
  parseInstagramPermalink,
  parseInstagramUser,
  withInstagramChildren,
  type InstagramDraftAsset,
  type InstagramMedia,
  type InstagramMediaPage,
} from '../src/lib/instagram.ts'

const help = `Uso:
  npm run instagram:import -- <url-de-publicacion> [otra-url] [--refresh]

Variables requeridas en .env.local:
  INSTAGRAM_ACCESS_TOKEN
  INSTAGRAM_EXPECTED_USERNAME

Variable opcional:
  INSTAGRAM_API_VERSION=${instagramApiVersion}

El comando sólo crea borradores en .sync-temp/instagram-drafts/.
Nunca publica contenido ni modifica src/content/projects/ o public/assets/projects/.`

const args = process.argv.slice(2)
if (args.includes('--help') || args.includes('-h')) {
  console.log(help)
  process.exit(0)
}

const refresh = args.includes('--refresh')
const inputUrls = args.filter((argument) => !argument.startsWith('--'))
const token = process.env.INSTAGRAM_ACCESS_TOKEN?.trim()
const expectedUsername = process.env.INSTAGRAM_EXPECTED_USERNAME?.trim().replace(/^@/, '')
const version = process.env.INSTAGRAM_API_VERSION?.trim() || instagramApiVersion
const graphOrigin = 'https://graph.instagram.com'
const workspace = fileURLToPath(new URL('../', import.meta.url))
const draftRoot = join(workspace, '.sync-temp', 'instagram-drafts')
const maximumDownloadBytes = 30_000_000

function requireConfiguration() {
  if (inputUrls.length === 0) throw new Error('Indicá al menos una URL de publicación. Use --help para ver el formato.')
  if (!token) throw new Error('Falta INSTAGRAM_ACCESS_TOKEN en el entorno local.')
  if (!expectedUsername) throw new Error('Falta INSTAGRAM_EXPECTED_USERNAME en el entorno local.')
  if (!/^v\d+\.\d+$/.test(version)) throw new Error('INSTAGRAM_API_VERSION debe tener un formato como v25.0.')
}

async function graphRequest(path: string, parameters: Record<string, string>): Promise<unknown> {
  const url = new URL(`${graphOrigin}/${version}/${path.replace(/^\//, '')}`)
  for (const [key, value] of Object.entries(parameters)) url.searchParams.set(key, value)
  url.searchParams.set('access_token', token ?? '')

  const response = await fetch(url, {
    headers: { Accept: 'application/json' },
    signal: AbortSignal.timeout(30_000),
  })
  const payload: unknown = await response.json().catch(() => null)
  if (!response.ok) {
    const message = payload && typeof payload === 'object' && 'error' in payload
      ? String((payload as { error?: { message?: string } }).error?.message ?? `HTTP ${response.status}`)
      : `HTTP ${response.status}`
    throw new Error(`Instagram API rechazó la solicitud: ${message}`)
  }
  return payload
}

async function readSelectedMedia(shortcodes: Set<string>, userId: string): Promise<Map<string, InstagramMedia>> {
  const selected = new Map<string, InstagramMedia>()
  let after: string | undefined

  for (let pageNumber = 0; pageNumber < 50 && selected.size < shortcodes.size; pageNumber += 1) {
    const rawPage = await graphRequest(`${userId}/media`, {
      fields: 'id,caption,media_type,media_product_type,media_url,thumbnail_url,permalink,timestamp,username',
      limit: '100',
      ...(after ? { after } : {}),
    })
    const page: InstagramMediaPage = parseInstagramMediaPage(rawPage)
    for (const media of page.data) {
      const shortcode = parseInstagramPermalink(media.permalink).shortcode
      if (shortcodes.has(shortcode)) selected.set(shortcode, media)
    }
    after = page.after
    if (!after) break
  }

  return selected
}

async function addCarouselChildren(media: InstagramMedia): Promise<InstagramMedia> {
  if (media.mediaType !== 'CAROUSEL_ALBUM') return media
  const response = await graphRequest(`${media.id}/children`, {
    fields: 'id,media_type,media_url,thumbnail_url,timestamp',
    limit: '100',
  })
  return withInstagramChildren(media, parseInstagramChildren(response))
}

async function optimizeRemoteImage(url: string, destination: string): Promise<{ width: number; height: number }> {
  const response = await fetch(url, { signal: AbortSignal.timeout(45_000) })
  if (!response.ok) throw new Error(`No se pudo descargar un medio de Instagram: HTTP ${response.status}.`)
  const declaredSize = Number(response.headers.get('content-length') ?? 0)
  if (declaredSize > maximumDownloadBytes) throw new Error('Un medio supera el límite de descarga de 30 MB.')
  const input = Buffer.from(await response.arrayBuffer())
  if (input.byteLength > maximumDownloadBytes) throw new Error('Un medio supera el límite de descarga de 30 MB.')

  const result = await sharp(input)
    .rotate()
    .resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 60, effort: 6, smartSubsample: true })
    .toFile(destination)
  if (!result.width || !result.height) throw new Error('No se pudieron determinar las dimensiones del medio.')
  return { width: result.width, height: result.height }
}

async function createDraft(media: InstagramMedia, refreshExisting: boolean) {
  const source = parseInstagramPermalink(media.permalink)
  const directory = join(draftRoot, source.shortcode)
  try {
    await access(directory)
    if (!refreshExisting) throw new Error(`Ya existe un borrador para ${source.shortcode}. Use --refresh para regenerarlo.`)
    await rm(directory, { recursive: true, force: true })
  } catch (error) {
    if (error instanceof Error && !('code' in error && error.code === 'ENOENT')) throw error
  }

  const mediaDirectory = join(directory, 'media')
  await mkdir(mediaDirectory, { recursive: true })
  const assets: InstagramDraftAsset[] = []
  const items = instagramMediaItems(media)
  if (items.length === 0) throw new Error(`La publicación ${source.shortcode} no contiene medios importables.`)

  for (const [index, item] of items.entries()) {
    const isVideo = item.mediaType === 'VIDEO'
    const remoteUrl = isVideo ? item.thumbnailUrl : item.mediaUrl
    if (!remoteUrl) throw new Error(`El medio ${index + 1} de ${source.shortcode} no incluye una URL utilizable.`)
    const filename = `${isVideo ? 'video-cover' : 'image'}-${String(index + 1).padStart(2, '0')}.webp`
    const dimensions = await optimizeRemoteImage(remoteUrl, join(mediaDirectory, filename))
    assets.push({
      kind: isVideo ? 'video-cover' : 'image',
      sourceMediaId: item.id,
      file: `media/${filename}`,
      ...dimensions,
      alt: `Pendiente de revisión editorial para el medio ${index + 1}.`,
    })
  }

  const importedAt = new Date().toISOString()
  const draft = createInstagramProjectDraft(media, assets, importedAt)
  await writeFile(join(directory, 'source.json'), `${JSON.stringify(media, null, 2)}\n`, 'utf8')
  await writeFile(join(directory, 'draft.json'), `${JSON.stringify(draft, null, 2)}\n`, 'utf8')
  console.log(`Borrador creado: .sync-temp/instagram-drafts/${source.shortcode}/`)
}

async function main() {
  requireConfiguration()
  const links = inputUrls.map(parseInstagramPermalink)
  const uniqueShortcodes = new Set(links.map((link) => link.shortcode))
  if (uniqueShortcodes.size !== links.length) throw new Error('La lista contiene publicaciones duplicadas.')

  const user = parseInstagramUser(await graphRequest('me', { fields: 'user_id,username' }))
  if (user.username.toLowerCase() !== expectedUsername?.toLowerCase()) {
    throw new Error(`El token pertenece a @${user.username}, no a @${expectedUsername}.`)
  }

  const selected = await readSelectedMedia(uniqueShortcodes, user.id)
  const missing = [...uniqueShortcodes].filter((shortcode) => !selected.has(shortcode))
  if (missing.length > 0) throw new Error(`No se encontraron estas publicaciones en la cuenta autorizada: ${missing.join(', ')}.`)

  await mkdir(draftRoot, { recursive: true })
  for (const link of links) {
    const media = selected.get(link.shortcode)
    if (!media) continue
    await createDraft(await addCarouselChildren(media), refresh)
  }
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : 'Falló la importación de Instagram.'
  console.error(token ? message.replaceAll(token, '[REDACTED]') : message)
  process.exitCode = 1
})
