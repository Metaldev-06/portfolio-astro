import { defineConfig } from "astro/config";
import icon from "astro-icon";
import db from "@astrojs/db";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), db()],
  output: "server",
  adapter: cloudflare(),
});
