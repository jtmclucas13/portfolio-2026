import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

const writing = defineCollection({
  loader: glob({ base: "./src/content/writing", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
  }),
});

const software = defineCollection({
  loader: file("./src/content/software.json"),
  schema: ({ image }) =>
    z.object({
      description: z.string(),
      endDate: z.string(),
      id: z.string(),
      isProject: z.boolean().optional(),
      link: z.string().nullable(),
      logo: image(),
      repoLink: z.string().nullable(),
      subtitle: z.string(),
      startDate: z.string(),
      technologies: z.array(
        z.object({
          name: z.string(),
          logo: image(),
        }),
      ),
      title: z.string(),
    }),
});

export const collections = { software, writing };
