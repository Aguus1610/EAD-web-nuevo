import { siteConfig } from '../data/site'

export interface SeoMeta {
  title: string
  description: string
  canonical?: string
  image?: string
  noindex?: boolean
}

export function resolveCanonical(path: string): string {
  if (siteConfig.siteUrl === 'PENDING_CONFIRMATION') return ''
  const base = siteConfig.siteUrl.replace(/\/$/, '')
  return `${base}${path}`
}

export function defaultSocialImage(): string {
  return resolveCanonical('/assets/brand/ead-logo-on-light.png')
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.locality,
      addressProvince: siteConfig.province,
      addressCountry: siteConfig.country,
    },
    telephone: siteConfig.phone,
    email: siteConfig.email,
    openingHours: 'Mo-Fr 08:00-12:00,15:00-19:00',
    url: siteConfig.siteUrl,
    image: defaultSocialImage(),
    sameAs: [siteConfig.instagram, siteConfig.mapUrl],
    areaServed: siteConfig.areaServed,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.latitude,
      longitude: siteConfig.longitude,
    },
  }
}

interface BreadcrumbItem {
  label: string
  href?: string
}

export function breadcrumbJsonLd(crumbs: BreadcrumbItem[], currentPath: string) {
  const items = [{ label: 'Inicio', href: '/' }, ...crumbs]

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: resolveCanonical(item.href ?? currentPath),
    })),
  }
}

interface ServiceSchemaInput {
  title: string
  summary: string
  slug: string
}

export function serviceJsonLd(service: ServiceSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.summary,
    url: resolveCanonical(`/servicios/${service.slug}`),
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    areaServed: siteConfig.areaServed,
  }
}
