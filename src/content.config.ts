import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'
import { glob } from 'astro/loaders'

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    date: z.string(),
    summary: z.string(),
    equipment: z.string(),
    problem: z.string(),
    intervention: z.string(),
    result: z.string(),
    images: z.array(z.object({
      src: z.string(),
      alt: z.string().min(1),
    })).default([]),
    relatedServices: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    publicationApproved: z.boolean().default(false),
  }),
})

export const collections = { projects }
