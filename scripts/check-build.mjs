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

const budgets = {
  '.js': { perFile: 100_000, total: 150_000 },
  '.css': { perFile: 100_000, total: 120_000 },
  '.html': { perFile: 200_000, total: 700_000 },
  '.png': { perFile: 400_000, total: 1_000_000 },
  '.webp': { perFile: 300_000, total: 1_500_000 },
}

const errors = []
for (const [extension, budget] of Object.entries(budgets)) {
  const matching = files.filter((file) => extname(file.path) === extension)
  const total = matching.reduce((sum, file) => sum + file.size, 0)
  if (total > budget.total) errors.push(`${extension} total ${total} exceeds ${budget.total} bytes`)
  for (const file of matching) {
    if (file.size > budget.perFile) {
      errors.push(`${relative(dist, file.path)} is ${file.size} bytes; limit is ${budget.perFile}`)
    }
  }
  console.log(`${extension}: ${matching.length} files, ${total} bytes`)
}

const totalSize = files.reduce((sum, file) => sum + file.size, 0)
const totalLimit = 2_500_000
console.log(`dist: ${files.length} files, ${totalSize} bytes`)
if (totalSize > totalLimit) errors.push(`dist total ${totalSize} exceeds ${totalLimit} bytes`)

if (errors.length > 0) {
  console.error(errors.join('\n'))
  process.exitCode = 1
}
