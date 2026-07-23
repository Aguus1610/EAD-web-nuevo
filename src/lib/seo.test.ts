import { describe, expect, it } from 'vitest'
import { breadcrumbJsonLd, defaultSocialImage, localBusinessJsonLd, resolveCanonical, serviceJsonLd } from './seo'

describe('SEO utilities', () => {
  it('resolves canonical URLs under the GitHub Pages base path', () => {
    expect(resolveCanonical('/contacto')).toBe('https://aguus1610.github.io/EAD-web-nuevo/contacto')
    expect(defaultSocialImage()).toBe('https://aguus1610.github.io/EAD-web-nuevo/assets/brand/ead-logo-on-light.png')
  })

  it('uses only confirmed business data', () => {
    const schema = localBusinessJsonLd()
    expect(schema.url).toBe('https://aguus1610.github.io/EAD-web-nuevo')
    expect(schema.geo).toEqual({
      '@type': 'GeoCoordinates',
      latitude: -36.1515528,
      longitude: -63.8516893,
    })
    expect(schema.areaServed).toBe('La Pampa y la región')
  })

  it('builds breadcrumb and service schemas with absolute URLs', () => {
    const breadcrumbs = breadcrumbJsonLd([
      { label: 'Servicios', href: '/servicios' },
      { label: 'Reparación' },
    ], '/servicios/reparacion-integral')
    const service = serviceJsonLd({
      title: 'Reparación integral',
      summary: 'Servicio de reparación.',
      slug: 'reparacion-integral',
    })

    expect(breadcrumbs.itemListElement[2].item).toContain('/EAD-web-nuevo/servicios/reparacion-integral')
    expect(service.url).toBe('https://aguus1610.github.io/EAD-web-nuevo/servicios/reparacion-integral')
  })
})
