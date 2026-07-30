import { describe, expect, it } from 'vitest'
import { selectGalleryImages } from './gallery'

const images = Array.from({ length: 10 }, (_, index) => ({ id: `image-${index + 1}` }))

describe('selectGalleryImages', () => {
  it('returns a stable selection for the same seed', () => {
    expect(selectGalleryImages(images, 4, 'build-1')).toEqual(selectGalleryImages(images, 4, 'build-1'))
  })

  it('changes the selection when the seed changes', () => {
    expect(selectGalleryImages(images, 4, 'build-1')).not.toEqual(selectGalleryImages(images, 4, 'build-2'))
  })

  it('respects the requested count without mutating the source', () => {
    const original = [...images]
    expect(selectGalleryImages(images, 20, 'build-1')).toHaveLength(images.length)
    expect(images).toEqual(original)
  })
})
