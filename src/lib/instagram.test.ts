import { describe, expect, it } from 'vitest'
import {
  createInstagramProjectDraft,
  instagramMediaItems,
  parseInstagramChildren,
  parseInstagramMedia,
  parseInstagramMediaPage,
  parseInstagramPermalink,
  parseInstagramUser,
  withInstagramChildren,
} from './instagram'

const imagePost = {
  id: '18000000000000001',
  caption: 'Mantenimiento integral de equipo\n\n#Oleohidraulica',
  media_type: 'IMAGE',
  media_url: 'https://cdn.example.com/image.jpg',
  permalink: 'https://www.instagram.com/p/ABC_123/?igsh=tracking',
  timestamp: '2026-07-30T15:00:00+0000',
  username: 'oleohidraulica_ead',
}

describe('Instagram import contracts', () => {
  it('normalizes selected Instagram post links without tracking parameters', () => {
    expect(parseInstagramPermalink('https://www.instagram.com/p/DF_XluwyhRv/?igsh=test')).toEqual({
      kind: 'p',
      shortcode: 'DF_XluwyhRv',
      url: 'https://www.instagram.com/p/DF_XluwyhRv/',
    })
    expect(parseInstagramPermalink('https://instagram.com/reel/REEL-01/').kind).toBe('reel')
  })

  it('rejects external and profile links', () => {
    expect(() => parseInstagramPermalink('https://example.com/p/ABC/')).toThrow(/instagram\.com/)
    expect(() => parseInstagramPermalink('https://www.instagram.com/oleohidraulica_ead/')).toThrow(/publicación o Reel/)
  })

  it('parses direct and wrapped user responses', () => {
    expect(parseInstagramUser({ user_id: '42', username: 'oleohidraulica_ead' })).toEqual({
      id: '42',
      username: 'oleohidraulica_ead',
    })
    expect(parseInstagramUser({ data: [{ id: '43', username: 'oleohidraulica_ead' }] }).id).toBe('43')
  })

  it('parses media pages and carousel children', () => {
    const page = parseInstagramMediaPage({
      data: [imagePost],
      paging: { cursors: { after: 'next-page' } },
    })
    expect(page.after).toBe('next-page')
    expect(page.data[0].permalink).toBe('https://www.instagram.com/p/ABC_123/')

    const carousel = parseInstagramMedia({
      ...imagePost,
      media_type: 'CAROUSEL_ALBUM',
      media_url: undefined,
    })
    const children = parseInstagramChildren({
      data: [
        { id: 'child-1', media_type: 'IMAGE', media_url: 'https://cdn.example.com/one.jpg' },
        { id: 'child-2', media_type: 'VIDEO', thumbnail_url: 'https://cdn.example.com/two.jpg' },
      ],
    })
    expect(instagramMediaItems(withInstagramChildren(carousel, children))).toHaveLength(2)
  })

  it('creates a non-publishable editorial draft', () => {
    const media = parseInstagramMedia(imagePost)
    const draft = createInstagramProjectDraft(media, [{
      kind: 'image',
      sourceMediaId: media.id,
      file: 'media/image-01.webp',
      width: 1200,
      height: 800,
      alt: 'Pendiente de revisión editorial.',
    }], '2026-07-30T16:00:00.000Z')

    expect(draft.source.shortcode).toBe('ABC_123')
    expect(draft.suggested.title).toBe('Mantenimiento integral de equipo')
    expect(draft.suggested.publicationApproved).toBe(false)
    expect(draft.review).toEqual({
      factsConfirmed: false,
      privacyChecked: false,
      altTextChecked: false,
    })
  })
})
