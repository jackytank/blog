import { defineContentConfig, defineCollection, z } from '@nuxt/content' // Removed inferCollection

// Define the schema object separately
const myblogSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.coerce.date(), // This will infer as Date in the TypeScript type
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

// Define the collection using the schema
const myblogCollection = defineCollection({
  type: 'page',
  source: 'blogs/**/*.md',
  schema: myblogSchema
});

export default defineContentConfig({
  collections: {
    myblog: myblogCollection
  }
});

// Export the inferred type of the collection for use in other files using z.infer
export type MyblogCollectionItem = z.infer<typeof myblogSchema>;
