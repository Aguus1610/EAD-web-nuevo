import { access, readdir, readFile } from 'node:fs/promises'
import { extname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const dist = fileURLToPath(new URL('../dist/', import.meta.url))
const requiredFiles = [
  'index.html',
  '404.html',
  'sitemap.xml',
  'robots.txt',
  'assets/brand/ead-logo-on-light.png',
  'assets/brand/ead-logo-on-dark.png',
  'assets/brand/hidro-grubert-logo.png',
  'assets/brand/palfinger-logo.png',
]

const errors = []
for (const file of requiredFiles) {
  try {
    await access(join(dist, file))
  } catch {
    errors.push(`Missing production file: ${file}`)
  }
}

const htmlFiles = []
async function collectHtml(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) await collectHtml(path)
    else if (extname(entry.name) === '.html') htmlFiles.push(path)
  }
}
await collectHtml(dist)

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8')
  if (html.includes('PENDING_CONFIRMATION')) errors.push(`${file} contains pending launch data`)
  if (!html.includes('rel="canonical"')) errors.push(`${file} has no canonical URL`)
  if ((html.match(/<main\b/g) ?? []).length !== 1) errors.push(`${file} must contain one main landmark`)
  if ((html.match(/<h1\b/g) ?? []).length !== 1) errors.push(`${file} must contain one h1`)
  if (/(?:href|src)="\/(?!EAD-web-nuevo(?:\/|"))/.test(html)) errors.push(`${file} contains a root link outside /EAD-web-nuevo`)
}

const siteConfig = await readFile(new URL('../src/data/site.ts', import.meta.url), 'utf8')
if (siteConfig.includes("siteUrl: 'PENDING_CONFIRMATION'")) errors.push('Canonical site URL is not confirmed')
if (siteConfig.includes("mapUrl: 'PENDING_CONFIRMATION'")) errors.push('Map URL is not confirmed')

const projectDirectory = new URL('../src/content/projects/', import.meta.url)
const projectAssets = fileURLToPath(new URL('../public/', import.meta.url))
const instagramMediaIds = new Map()
for (const entry of await readdir(projectDirectory)) {
  if (entry.startsWith('_') || !/\.mdx?$/.test(entry)) continue
  const content = await readFile(new URL(entry, projectDirectory), 'utf8')
  if (!/publicationApproved:\s*true/.test(content)) {
    errors.push(`Project ${entry} is not approved for publication`)
  }
  if (/https:\/\/[^\s"']*(?:cdninstagram|fbcdn)[^\s"']*/i.test(content)) {
    errors.push(`Project ${entry} references an external Instagram CDN asset`)
  }

  const mediaId = content.match(/^\s*mediaId:\s*["']?([^\s"']+)/m)?.[1]
  if (mediaId) {
    const previous = instagramMediaIds.get(mediaId)
    if (previous) errors.push(`Projects ${previous} and ${entry} reuse Instagram mediaId ${mediaId}`)
    else instagramMediaIds.set(mediaId, entry)
  }

  for (const match of content.matchAll(/^\s*src:\s*["']?(\/assets\/projects\/[^\s"']+)/gm)) {
    try {
      await access(join(projectAssets, match[1].replace(/^\//, '')))
    } catch {
      errors.push(`Project ${entry} references missing asset ${match[1]}`)
    }
  }
}

if (errors.length > 0) {
  console.error(errors.join('\n'))
  process.exitCode = 1
} else {
  console.log(`Launch validation passed for ${htmlFiles.length} HTML files.`)
}
