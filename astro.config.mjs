import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), db()],
  output: "hybrid",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
