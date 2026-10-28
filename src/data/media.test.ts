import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { media, productMedia, routeMedia, serviceMedia, workshopGalleryPool } from './media'

const publicAssetPath = (src: string) => fileURLToPath(new URL(`../../public${src}`, import.meta.url))

describe('workshop media catalog', () => {
  it('contains unique, dimensioned WebP images', () => {
    expect(workshopGalleryPool.length).toBeGreaterThanOrEqual(40)
    expect(new Set(workshopGalleryPool.map((image) => image.id))).toHaveLength(workshopGalleryPool.length)
    expect(new Set(workshopGalleryPool.map((image) => image.src))).toHaveLength(workshopGalleryPool.length)

    for (const image of workshopGalleryPool) {
      expect(image.src).toMatch(/^\/assets\/workshop\/.+\.webp$/)
      expect(image.alt.trim().length).toBeGreaterThan(20)
      expect(image.width).toBeGreaterThan(0)
      expect(image.height).toBeGreaterThan(0)
      expect(image.orientation).toBe(image.width >= image.height ? 'landscape' : 'portrait')
      expect(existsSync(publicAssetPath(image.src))).toBe(true)
    }
  })

  it('includes the field service image used by the company hero', () => {
    const image = media.servicioACampo
    expect(image.src).toMatch(/^\/assets\/workshop\/.+\.webp$/)
    expect(image.alt.trim().length).toBeGreaterThan(20)
    expect(image.orientation).toBe('portrait')
    expect(image.width).toBe(900)
    expect(image.height).toBe(1600)
    expect(existsSync(publicAssetPath(image.src))).toBe(true)
  })

  it('includes the curated October 2026 photo batch', () => {
    const batch = [
      media.tallerGruaPalfingerAtardecer,
      media.tallerAtardecerCamiones,
      media.tallerFachadaEad,
      media.servicioCampoHidrogrubert,
      media.gruaElevandoBatea,
      media.gruaHidroGrubertN15000Detalle,
      media.gruaHidroGrubertTaller,
      media.gruaHidroGrubertN25000Taller,
      media.tallerInteriorPalfinger,
    ]

    expect(batch).toHaveLength(9)
    expect(batch.filter((image) => image.orientation === 'landscape')).toHaveLength(2)
    expect(batch.filter((image) => image.orientation === 'portrait')).toHaveLength(7)

    for (const image of batch) {
      expect(image.src).toMatch(/^\/assets\/workshop\/.+\.webp$/)
      expect(image.alt.trim().length).toBeGreaterThan(20)
      expect(image.width).toBeGreaterThan(0)
      expect(image.height).toBeGreaterThan(0)
      expect(existsSync(publicAssetPath(image.src))).toBe(true)
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
