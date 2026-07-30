interface SelectableImage {
  id: string
}

function hashString(value: string): number {
  let hash = 2166136261
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index)
    hash = Math.imul(hash, 16777619)
  }
  return hash >>> 0
}

export function selectGalleryImages<T extends SelectableImage>(
  images: readonly T[],
  count: number,
  seed: string,
): T[] {
  if (count <= 0 || images.length === 0) return []

  return [...images]
    .sort((left, right) => {
      const rankDifference = hashString(`${seed}:${left.id}`) - hashString(`${seed}:${right.id}`)
      return rankDifference || left.id.localeCompare(right.id)
    })
    .slice(0, Math.min(count, images.length))
}
