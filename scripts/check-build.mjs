import { readdir, stat } from 'node:fs/promises'
import { extname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const dist = fileURLToPath(new URL('../dist/', import.meta.url))
const files = []

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) await walk(path)
    else files.push({ path, size: (await stat(path)).size })
  }
}

await walk(dist)

const normalizedRelativePath = (file) => relative(dist, file.path).replaceAll('\\', '/')
const projectSlug = (file) => {
  const path = normalizedRelativePath(file)
  const assetMatch = path.match(/^assets\/projects\/([^/]+)\//)
  if (assetMatch) return assetMatch[1]
  const pageMatch = path.match(/^trabajos\/([^/]+)\/index\.html$/)
  return pageMatch?.[1]
}

const budgets = {
  '.js': { perFile: 100_000, total: 150_000 },
  '.css': { perFile: 100_000, total: 120_000 },
  '.html': { perFile: 200_000, total: 700_000 },
  '.png': { perFile: 400_000, total: 1_000_000 },
  '.webp': { perFile: 320_000, total: 8_500_000 },
}

const errors = []
for (const [extension, budget] of Object.entries(budgets)) {
  const matching = files.filter((file) => extname(file.path) === extension)
  const shared = matching.filter((file) => !projectSlug(file))
  const total = shared.reduce((sum, file) => sum + file.size, 0)
  if (total > budget.total) errors.push(`${extension} total ${total} exceeds ${budget.total} bytes`)
  for (const file of matching) {
    if (file.size > budget.perFile) {
      errors.push(`${relative(dist, file.path)} is ${file.size} bytes; limit is ${budget.perFile}`)
    }
  }
  console.log(`${extension}: ${matching.length} files, ${total} shared bytes`)
}

const totalSize = files.reduce((sum, file) => sum + file.size, 0)
const projectFiles = files.filter(projectSlug)
const sharedSize = files.filter((file) => !projectSlug(file)).reduce((sum, file) => sum + file.size, 0)
const totalLimit = 10_000_000
const projectArchiveLimit = 20_000_000
const projectLimit = 1_400_000
console.log(`dist: ${files.length} files, ${totalSize} bytes`)
console.log(`shared: ${sharedSize} bytes; project archive: ${projectFiles.reduce((sum, file) => sum + file.size, 0)} bytes`)
if (sharedSize > totalLimit) errors.push(`shared dist ${sharedSize} exceeds ${totalLimit} bytes`)
if (projectFiles.reduce((sum, file) => sum + file.size, 0) > projectArchiveLimit) {
  errors.push(`project archive exceeds ${projectArchiveLimit} bytes`)
}

const projects = new Map()
for (const file of projectFiles) {
  const slug = projectSlug(file)
  if (!slug) continue
  projects.set(slug, (projects.get(slug) ?? 0) + file.size)
}
for (const [slug, size] of projects) {
  if (size > projectLimit) errors.push(`project ${slug} is ${size} bytes; limit is ${projectLimit}`)
}

if (errors.length > 0) {
  console.error(errors.join('\n'))
  process.exitCode = 1
}
