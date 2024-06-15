import { defineConfig } from "astro/config";
import icon from "astro-icon";
import db from "@astrojs/db";
import vercel from "@astrojs/vercel/serverless";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), db(), svelte()],
  output: "server",
  adapter: vercel(),
  // shikiConfig: {
  //   // Escoge entre los temas integrados de Shiki (o agrega los tuyos propios)
  //   // https://shiki.style/themes
  //   // theme: "dracula",
  //   // Alternativamente, proporciona múltiples temas.
  //   // https://shiki.style/guide/dual-themes
  //   themes: {
  //     light: "dracula",
  //     dark: "dracula",
  //   },
  //   // Agrega lenguajes de programación personalizados
  //   // Nota: Shiki tiene innumerables lenguajes de programación incorporados, ¡incluido .astro!
  //   // https://shiki.style/languages
  //   langs: [],
  //   // Habilita word wrap para evitar el desplazamiento horizontal
  //   wrap: true,
  //   // Agrega transformadores personalizados: https://shiki.style/guide/transformers
  //   // Encuentra transformadores comunes: https://shiki.style/packages/transformers
  //   transformers: [],
  // },
  markdown: {
    // Ejemplo: Cambia el resaltado de sintaxis a prism en Markdown
    syntaxHighlight: "shiki",
    shikiConfig: {
      // Escoge entre los temas integrados de Shiki (o agrega los tuyos propios)
      // https://shiki.style/themes
      theme: "one-dark-pro",
      // Alternativamente, proporciona múltiples temas.
      // https://shiki.style/guide/dual-themes
      // themes: {
      //   light: "dracula",
      //   dark: "dracula",
      // },
      // Agrega lenguajes de programación personalizados
      // Nota: Shiki tiene innumerables lenguajes de programación incorporados, ¡incluido .astro!
      // https://shiki.style/languages
      langs: [
        "typescript",
        "javascript",
        "astro",
        "text",
        "shellscript",
        "powershell",
      ],
      // Habilita word wrap para evitar el desplazamiento horizontal
      wrap: true,
      // Agrega transformadores personalizados: https://shiki.style/guide/transformers
      // Encuentra transformadores comunes: https://shiki.style/packages/transformers
      transformers: [],
    },
  },
});
