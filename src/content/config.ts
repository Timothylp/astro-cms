import { z, defineCollection } from "astro:content";

const pageCollection = defineCollection({
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    // author: z.string().default("Anonymous"),
    // publishDate: z.date(),
  }),
});

export const collections = {
  pages: pageCollection,
};