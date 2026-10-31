import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { pages, blog };