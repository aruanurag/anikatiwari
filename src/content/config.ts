import { defineCollection, z } from "astro:content";

const baseFields = {
  title: z.string(),
  summary: z.string(),
  date: z.coerce.date(),
  accent: z.string().optional(),
  featured: z.boolean().default(false)
};

const stories = defineCollection({
  type: "content",
  schema: z.object({
    ...baseFields,
    readingTime: z.string(),
    ageRange: z.string(),
    genre: z.string()
  })
});

const artworks = defineCollection({
  type: "content",
  schema: z.object({
    ...baseFields,
    medium: z.string(),
    palette: z.array(z.string()),
    dimensions: z.string().optional()
  })
});

const recipes = defineCollection({
  type: "content",
  schema: z.object({
    ...baseFields,
    prepTime: z.string(),
    cookTime: z.string().optional(),
    servings: z.string(),
    favoriteFor: z.string()
  })
});

const posts = defineCollection({
  type: "content",
  schema: z.object({
    ...baseFields,
    readingTime: z.string(),
    category: z.string(),
    tags: z.array(z.string())
  })
});

export const collections = { stories, artworks, recipes, posts };
