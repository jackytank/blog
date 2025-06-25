import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod' // Import z from zod directly

const blogSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.coerce.date(),
  updatedAt: z.coerce.date().optional(), // Add this line for updated time
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
});

export type BlogPost = z.infer<typeof blogSchema>;

export const myblogCollection = defineCollection({
  type: 'page',
  source: 'blogs/**/*.md',
  schema: blogSchema // Use the raw Zod schema here
});

export default defineContentConfig({
  collections: {
    myblog: myblogCollection
  }
})
