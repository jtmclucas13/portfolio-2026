// @ts-check
import { defineConfig, fontProviders } from "astro/config";

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
          ],
        },
      },
    },
  ],
  site: "https://www.joshuamclucas.com",
});
