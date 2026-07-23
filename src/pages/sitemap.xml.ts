import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import { services } from '../data/services'
import { resolveCanonical } from '../lib/seo'

export const prerender = true

export const GET: APIRoute = async () => {
  const projects = await getCollection('projects', ({ data }) => data.publicationApproved)
  const paths = [
    '/',
    '/empresa',
    '/servicios',
    ...services.map((service) => `/servicios/${service.slug}`),
    '/productos',
    '/trabajos',
    ...projects.map((project) => `/trabajos/${project.id}`),
    '/contacto',
  ]

  const urls = paths
    .map((path) => `  <url><loc>${resolveCanonical(path)}</loc></url>`)
    .join('\n')

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  })
}
