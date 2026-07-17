// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  fonts: [
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
          ],
        },
      },
    },
  ],
  site: "https://www.joshuamclucas.com",
});
