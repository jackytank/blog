import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        description: z.string().optional(),
        tags: z.array(z.enum([
          'mdx', 
          'guide', 
          'seo', 
          'marketing',
          'nuxt',
          'tutorial',
        ])).optional(),
      })
    })
  }
})
