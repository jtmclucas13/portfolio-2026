// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.googleicons(),
      name: "Material Icons",
      cssVariable: "--font-icon",
      options: {
        experimental: {
          glyphs: ["arrow-back", "arrow-forward"],
        },
      },
    },
  ],
  site: "https://www.joshuamclucas.com",
});
