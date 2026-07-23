// @ts-check
import { unified } from "@astrojs/markdown-remark";
import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";

import { remarkReadingTime } from "./remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Zen Dots",
      cssVariable: "--font-display",
    },
    {
      provider: fontProviders.google(),
      name: "Tangerine",
      cssVariable: "--font-cursive",
    },
    {
      provider: fontProviders.google(),
      name: "Outfit",
      cssVariable: "--font-body",
      weights: ["300"],
    },
    {
      provider: fontProviders.googleicons(),
      name: "Material Icons Outlined",
      cssVariable: "--font-icon",
      options: {
        experimental: {
          glyphs: [
            "arrow_back",
            "arrow_forward",
            "forum",
            "check_circle",
            "diversity_1",
            "workspace_premium",
            "check_circle",
            "error",
            "send",
            "download",
            "home",
            "computer",
            "comedy_mask",
            "drafts",
            "edit_document",
            "open_in_new",
          ],
        },
      },
    },
  ],

  site: "https://www.joshuamclucas.com",
  integrations: [mdx()],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkReadingTime],
    }),
  },
});
