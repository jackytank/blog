import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    myblog: defineCollection({
      type: 'page',
      source: 'blogs/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.coerce.date(),
        tags: z.array(z.enum([
          'mdx', 
          'guide', 
          'seo', 
          'marketing',
          'nuxt',
          'tutorial',
        ])).optional(),
        cover: z.string().optional(),
        published: z.boolean().default(false),
        author: z.string().optional(),
      })
    })
  }
})
