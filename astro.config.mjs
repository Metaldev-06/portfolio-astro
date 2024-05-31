import { defineConfig } from "astro/config";
import icon from "astro-icon";
import db from "@astrojs/db";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), db()],
  output: "static",
  adapter: vercel(),
});
