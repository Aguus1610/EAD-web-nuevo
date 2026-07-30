import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'
import { glob } from 'astro/loaders'
import { serviceSlugs } from './data/services'

const projectImage = z.object({
  src: z.string().regex(/^\/assets\/projects\/[a-z0-9-]+\/[a-z0-9-]+\.webp$/),
  alt: z.string().trim().min(10),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  caption: z.string().trim().min(1).optional(),
  position: z.string().regex(/^\d{1,3}% \d{1,3}%$/).optional(),
})

const instagramPostUrl = z.url({
  protocol: /^https$/,
  hostname: /^(?:www\.)?instagram\.com$/,
}).refine((value) => /^https:\/\/(?:www\.)?instagram\.com\/(?:p|reel|tv)\/[A-Za-z0-9_-]+\/$/.test(value), {
  message: 'Debe ser el enlace canónico de una publicación de Instagram.',
})

const instagramReelUrl = z.url({
  protocol: /^https$/,
  hostname: /^(?:www\.)?instagram\.com$/,
}).refine((value) => /^https:\/\/(?:www\.)?instagram\.com\/(?:reel|tv)\/[A-Za-z0-9_-]+\/$/.test(value), {
  message: 'Debe ser el enlace canónico de un Reel de Instagram.',
})

const instagramSource = z.object({
  platform: z.literal('instagram'),
  mediaId: z.string().trim().min(1),
  shortcode: z.string().regex(/^[A-Za-z0-9_-]+$/),
  permalink: instagramPostUrl,
  publishedAt: z.iso.datetime({ offset: true }),
  mediaType: z.enum(['IMAGE', 'VIDEO', 'CAROUSEL_ALBUM']),
  caption: z.string(),
})

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string().trim().min(1),
    category: z.string().trim().min(1),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    summary: z.string().trim().min(1),
    equipment: z.string().trim().min(1),
    problem: z.string().trim().min(1),
    intervention: z.string().trim().min(1),
    result: z.string().trim().min(1),
    images: z.array(projectImage).default([]),
    reel: z.object({
      permalink: instagramReelUrl,
      cover: projectImage,
    }).optional(),
    source: instagramSource.optional(),
    relatedServices: z.array(z.enum(serviceSlugs)).default([]),
    featured: z.boolean().default(false),
    publicationApproved: z.boolean().default(false),
  }).superRefine((project, context) => {
    if (project.publicationApproved && project.images.length === 0 && !project.reel) {
      context.addIssue({
        code: 'custom',
        path: ['images'],
        message: 'Un proyecto aprobado debe incluir al menos una imagen o portada de Reel.',
      })
    }
  }),
})

export const collections = { projects }
