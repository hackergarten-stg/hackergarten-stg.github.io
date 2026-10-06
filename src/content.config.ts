import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * One markdown file per project in `src/content/projects/`. The filename is the
 * URL slug; `_`-prefixed files are ignored. The body is shown as written on both
 * `/projects` and `/en/projects` — only the page chrome around it is translated.
 */
export const collections = {
  projects: defineCollection({
    loader: glob({ pattern: ['*.md', '!_*.md'], base: './src/content/projects' }),
    schema: z.object({
      title: z.string(),
      date: z.coerce.date(),
      summary: z.string(),
      repo: z.string().url().optional(),
    }),
  }),
};
