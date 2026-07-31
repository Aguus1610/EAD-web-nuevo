import { describe, expect, it } from 'vitest'
import { media, productMedia, routeMedia, serviceMedia, workshopGalleryPool } from './media'

describe('workshop media catalog', () => {
  it('contains unique, dimensioned WebP images', () => {
    expect(workshopGalleryPool.length).toBeGreaterThanOrEqual(30)
    expect(new Set(workshopGalleryPool.map((image) => image.id))).toHaveLength(workshopGalleryPool.length)
    expect(new Set(workshopGalleryPool.map((image) => image.src))).toHaveLength(workshopGalleryPool.length)

    for (const image of workshopGalleryPool) {
      expect(image.src).toMatch(/^\/assets\/workshop\/.+\.webp$/)
      expect(image.alt.trim().length).toBeGreaterThan(20)
      expect(image.width).toBeGreaterThan(0)
      expect(image.height).toBeGreaterThan(0)
    }
  })

  it('provides enough orientations for the rotating company gallery', () => {
    expect(workshopGalleryPool.filter((image) => image.orientation === 'landscape').length).toBeGreaterThanOrEqual(4)
    expect(workshopGalleryPool.filter((image) => image.orientation === 'portrait').length).toBeGreaterThanOrEqual(2)
  })

  it('assigns catalogued images to every commercial context', () => {
    const catalogSources = new Set(Object.values(media).map((image) => image.src))
    const assigned = [
      ...Object.values(routeMedia),
      ...Object.values(productMedia),
      ...Object.values(serviceMedia).flatMap(({ hero, card, supporting }) => [hero, card, ...supporting]),
    ]

    expect(assigned.every((image) => catalogSources.has(image.src))).toBe(true)
  })
})
