import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://plazaleon.tech",
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
    fallback: {
      en: "es",
    },
  },
  integrations: [
    tailwind(),
    react(),
    icon({
      iconDir: "src/icons",
    }),
    sitemap(),
  ],
});
