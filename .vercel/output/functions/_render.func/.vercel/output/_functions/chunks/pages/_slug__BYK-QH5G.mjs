import { c as createComponent, r as renderTemplate, d as addAttribute, e as createAstro, s as spreadAttributes, u as unescapeHTML, f as renderComponent, m as maybeRenderHead, g as createTransitionScope, F as Fragment, h as renderSlot, i as renderHead } from '../astro_CtATVphq.mjs';
import 'kleur/colors';
import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
import 'clsx';
/* empty css                         */
import { getIconData, iconToSVG } from '@iconify/utils';
/* empty css                           */

const $$Astro$d = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/ferny/OneDrive/Escritorio/proyects/astro/portfolio/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$c = createAstro();
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "C:/Users/ferny/OneDrive/Escritorio/proyects/astro/portfolio/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$b = createAstro();
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "C:/Users/ferny/OneDrive/Escritorio/proyects/astro/portfolio/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$a = createAstro();
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "C:/Users/ferny/OneDrive/Escritorio/proyects/astro/portfolio/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$9 = createAstro();
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "C:/Users/ferny/OneDrive/Escritorio/proyects/astro/portfolio/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$8 = createAstro();
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "C:/Users/ferny/OneDrive/Escritorio/proyects/astro/portfolio/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$7 = createAstro();
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "C:/Users/ferny/OneDrive/Escritorio/proyects/astro/portfolio/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$6 = createAstro();
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "C:/Users/ferny/OneDrive/Escritorio/proyects/astro/portfolio/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$5 = createAstro();
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || Astro2.url.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "C:/Users/ferny/OneDrive/Escritorio/proyects/astro/portfolio/node_modules/astro-seo/src/SEO.astro", void 0);

const seoAstro = {
  title: "Portfolio MetalDev - Web Developer Jr.",
  description: "No hago milagros, trabajo duro hasta que ocurren 😎| Mi trabajo es hacer que el resultado sea idéntico a lo que tienes en la cabeza ✅.",
  ogImage: "https://cdn.discordapp.com/attachments/442011718235848707/1096505752543297596/MetalDev_1.png",
  ogUrl: "https://metaldev.com.ar",
  twitterUrl: "https://metaldev.com.ar",
  twitterHandle: "@MetalDev_06",
  twitterCard: "summary_large_image",
  twitterImage: "https://cdn.discordapp.com/attachments/442011718235848707/1096505752543297596/MetalDev_1.png",
  twitterCreator: "@MetalDev_06",
  twitterSite: "@MetalDev_06",
  twitterTitle: "MetalDev - Web Developer Jr.",
  twitterDescription: "No hago milagros, trabajo duro hasta que ocurren 😎"
};

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$ButtonTheme = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", `<div class="theme-switch-wrapper" data-astro-cid-f26rr26r> <label class="theme-switch" for="checkbox" data-astro-cid-f26rr26r> <input type="checkbox" id="checkbox" data-astro-cid-f26rr26r> <div class="slider" data-astro-cid-f26rr26r> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FCD53F" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun" data-astro-cid-f26rr26r> <circle cx="12" cy="12" r="5" data-astro-cid-f26rr26r></circle> <line x1="12" y1="1" x2="12" y2="3" data-astro-cid-f26rr26r></line> <line x1="12" y1="21" x2="12" y2="23" data-astro-cid-f26rr26r></line> <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-astro-cid-f26rr26r></line> <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-astro-cid-f26rr26r></line> <line x1="1" y1="12" x2="3" y2="12" data-astro-cid-f26rr26r></line> <line x1="21" y1="12" x2="23" y2="12" data-astro-cid-f26rr26r></line> <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-astro-cid-f26rr26r></line> <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-astro-cid-f26rr26r></line> </svg> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FCD53F" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon" data-astro-cid-f26rr26r> <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" data-astro-cid-f26rr26r></path> </svg> </div> </label> </div>  <script>
  // Obtener el input de cambio de tema
  const themeToggle = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );

  // Obtener el tema actual del almacenamiento local
  const currentTheme = localStorage.getItem("theme");

  // Aplicar el tema en base al almacenamiento local (estado inicial)
  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === "dark") {
      themeToggle.checked = true;
    }
  }

  // Funci\xF3n para cambiar el tema
  function switchTheme() {
    const newTheme = themeToggle.checked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    window.dispatchEvent(new Event("themeChanged"));
  }

  // Agregar detectores de eventos
  themeToggle?.addEventListener("change", switchTheme);
  document.addEventListener("astro:after-swap", switchTheme);
<\/script>`])), maybeRenderHead());
}, "C:/Users/ferny/OneDrive/Escritorio/proyects/astro/portfolio/src/common/components/ButtonTheme.astro", void 0);

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-name="Capa 1" viewBox="0 0 983.6 1001.82" data-astro-cid-a23khclq> <defs data-astro-cid-a23khclq> <style>
      .cls-1 {
        fill: currentColor;
      }

      .cls-2 {
        fill: none;
      }
    </style> </defs> <path class="cls-2" d="m0,1001.82C0,667.88,0,333.94,0,0c327.87,0,655.73,0,983.6,0m0,1001.82-686.65-120.98c1.54-.68,3.08-1.36,5.03-2.22-5.62-7.34-13.25-12.49-15.15-21.45.48-.61.96-1.23,1.44-1.84,9.61,6.01,19.22,12.02,28.83,18.03.17-1.49-.18-2.22-.69-2.81-9.57-11.09-19.2-22.13-28.7-33.29-1.38-1.62-2.17-3.76-3.24-5.67.41-.26.81-.51,1.22-.77,15.78,9.1,31.57,18.19,47.35,27.29.48-.68.97-1.37,1.45-2.05-12.3-13.69-24.59-27.39-37.06-41.27,5.13-3.16,4.76-7.58,2.68-12.43-2.12-4.95-3.9-10.06-6.24-14.9-1.75-3.6-1.92-6.61.82-9.72,1.35-1.53,2.18-3.52,3.42-5.17,2.48-3.31,2.24-5.92-.52-9.32-7.81-9.63-15.13-19.67-22.61-29.58-1.01-1.34-1.77-2.87-2.65-4.31.43-.56.86-1.13,1.29-1.69,4.82,2.4,9.63,4.79,15.39,7.66-2.66-4.01-4.63-6.98-6.6-9.95.39-.55.79-1.1,1.18-1.65,5.08,2.45,10.17,4.89,16.3,7.84-1.09-3.43-1.8-5.64-2.65-8.32,3.92.75,7.32,1.39,10.71,2.04.4-.5.8-1,1.19-1.51-3.14-4.99-6.64-9.78-9.29-15.02-1.97-3.89-4-8.34-4.03-12.55-.23-32.29.17-64.58.11-96.87-.13-75.62-.4-151.24-.58-226.86,0-3.36.29-6.72.45-10.07.61-.08,1.22-.17,1.84-.25.68,2.04,1.49,4.04,2.01,6.12,3.45,13.68,6.69,27.43,10.28,41.07,13.05,49.58,26.3,99.1,39.3,148.69,16.47,62.85,32.7,125.76,49.15,188.62,10.98,41.97,22.11,83.89,33.39,125.78.38,1.42,3.07,3.07,4.71,3.11,11.66.27,23.33.16,35,.15,26.2-.02,52.41-.16,78.61,0,5.43.03,8.34-2.11,9.61-7.35,2.1-8.66,4.38-17.28,6.66-25.9,8.95-33.91,17.84-67.83,26.92-101.71,12.03-44.9,24.24-89.75,36.34-134.63,9.89-36.67,19.8-73.33,29.56-110.03,7.58-28.48,14.13-57.27,22.83-85.38,3.5-11.31,1.6-20.6-2.17-30.52-1.03-2.7-2.64-5.17-3.79-7.83-.59-1.37-.74-2.93-1.2-4.89,1.56,0,2.43-.24,3.1.04,6,2.44,12.02,4.83,17.91,7.54,3.81,1.75,9.5,12.27,7.65,14.35-7.22,8.08-5.69,17.91-5.69,27.34-.09,148.96-.1,297.93-.12,446.89,0,4.07,0,8.13,0,12.17,9.99,0,19.58.01,29.17,0,44.63-.06,89.27-.2,133.9-.1,5.34.01,7.04-1.57,6.91-7.12-.32-13.74.12-27.5.12-41.25.02-175.42-.02-350.85.02-526.27.01-57.08.18-114.16.4-171.23.01-3.61-1.36-4.04-4.37-4.02-47.49.17-94.99.41-142.48.15-8.47-.05-16.92-2.25-25.38-3.51-2.34-.35-4.66-.86-7.31-1.35-.45,3.29-.81,5.91-1.37,9.98-13.05-5.71-25.58-11.2-39.68-17.38,2.19,5.97,3.86,10.49,5.77,15.7-2.7-.13-4.21-.2-6.15-.3,2.51,4.38,4.75,8.31,6.99,12.23-.73.57-1.46,1.15-2.18,1.72-20.56-17.89-41.13-35.79-61.69-53.68,7.65,21.15,24.2,35.5,36.5,52.9-.43.49-.85.97-1.28,1.46-7.82-4.98-15.63-9.96-25.01-15.94,1.95,4.02,3.09,6.56,4.4,9.01,3.69,6.95,9.14,13.47,10.77,20.87,2.12,9.61,8.04,16.03,13.13,23.44,5.72,8.32,10.98,16.98,16.2,25.64,1.15,1.91,1.29,4.44,2.15,7.6-17.78-2.12-28.31-18.23-46.56-20.69,2.93,6.1,5.18,10.8,7.61,15.86-4.67,1.21-4.05,3.66-1.87,6.8,2.94,4.23,5.78,8.57,8.27,13.09.94,1.72.77,4.07,1.11,6.13-2.26-.25-4.84.14-6.7-.87-5.27-2.84-10.24-6.26-16.16-9.97.47,2.59.4,4.36,1.11,5.7,5.76,10.94,11.66,21.81,17.53,32.7,1.34,2.49,2.7,4.96,4.06,7.44-.53.58-1.06,1.16-1.59,1.74-7.88-2.65-15.76-5.29-23.64-7.94.69,2.96,2.13,4.84,3.6,6.69,7.56,9.54,15.23,19,22.59,28.7,1.15,1.52.92,4.14,1.32,6.25-2.3-.07-4.88.52-6.85-.33-6.95-3-13.73-6.44-20.51-9.84-5.04-2.53-7.65-1.25-9.4,4.4-15.46,49.93-31.28,99.75-46.7,149.7-11.33,36.67-22.2,73.47-33.35,110.19-1.33,4.37-3.18,8.58-4.79,12.86-3.37-6.92-5.17-13.68-7.25-20.36-9.25-29.71-18.79-59.32-27.82-89.1-8.13-26.78-15.5-53.81-23.61-80.59-11.36-37.52-23.2-74.89-34.67-112.37-13.23-43.25-26.53-86.47-39.25-129.87-4.73-16.12-1.9-14.5-19.37-14.56-71.45-.25-142.91-.1-214.36-.06-2.15,0-4.31.36-6.9.59v8.03c0,82.92-.05,165.84.06,248.76.01,10.19.2,20.47,1.54,30.54,1.34,10.03-1.69,21.02,5.6,30.04.53.66-.81,4.29-1.92,4.68-5.25,1.85-4.92,5.59-3.52,9.52,1.59,4.46,3.68,8.74,5.58,13.08.74,1.69,1.94,3.27,2.26,5.03.27,1.48.03,4.08-.81,4.52-1.28.67-3.53.37-4.94-.36-4.92-2.53-9.59-5.58-14.51-8.1-2.19-1.12-4.77-1.46-8.18-2.45,4.29,11.86,10.9,20.44,18.03,28.81,17.54,20.61,34.89,41.41,52.21,62.21,1.4,1.69,2.05,4.02,3.05,6.06-.46.34-.92.67-1.38,1.01-16.58-9.95-30.69-23.03-44.58-36.7,2.06,3.04,4.12,6.08,7,10.31-11.88,1.87-19.47-5.83-29.74-9.17,8.25,9.42,17.07,16.31,23.67,25.13l-1.34,1.64c-6.26-1.04-12.52-2.09-18.78-3.13-.24.44-.48.88-.71,1.32,3.45,4.21,6.9,8.42,10.35,12.63-.37.24-.75.48-1.12.72-10.61-8.54-21.22-17.08-31.84-25.62-.41.36-.82.72-1.24,1.08.95,1.65,1.71,3.45,2.87,4.93,8.13,10.43,16.05,21.07,24.6,31.14,14.99,17.64,30.43,34.9,45.57,52.4,2.16,2.5,3.75,5.51,5.61,8.28-.5.5-1,.99-1.5,1.49-23.09-11.71-41.41-30.9-63.23-44.61-.51.53-1.02,1.07-1.54,1.6,15.98,25.91,31.95,51.81,47.93,77.72-.83.76-1.65,1.52-2.48,2.27-28.82-24.21-60.54-44.5-88.53-69.94,21.28,22.82,42.56,45.65,63.84,68.47-.45.55-.91,1.1-1.36,1.65-2.08-.62-4.13-1.53-6.25-1.78-1.84-.22-3.77.28-5.66.46.39,1.92.54,3.95,1.26,5.74.52,1.27,1.76,2.26,2.78,3.28,19.39,19.44,38.82,38.84,58.18,58.3,2.91,2.93,5.54,6.14,8.3,9.22-.59.74-1.18,1.49-1.77,2.23-30.88-18.15-58.06-42.12-88.94-60.54,5.98,8,12.75,15.31,18.73,23.23,5.83,7.72,14.61,13.08,18.95,21.98-.47.45-.94.91-1.41,1.36-3.9-2.83-7.8-5.67-11.69-8.5,1.22,8.23,8.6,13.12,8.77,21.67-11.89-10.08-23.07-19.57-34.26-29.07,9.55,12.49,19.71,24.41,29.74,36.44,1.58,1.89,2.58,4.27,3.85,6.43-.48.28-.96.55-1.44.83-21.55-16.99-43.1-33.97-64.65-50.96-.38.41-.77.81-1.15,1.22,1.26,1.35,2.47,2.76,3.8,4.04,15.61,15.03,30.86,30.46,46.94,44.93,19.19,17.26,34.55,37.73,49.78,58.39,2.65,3.59,5.34,7.44,2.79,13.61-15.26-5.64-25.31-19.49-39.97-25.44,2.42,6.92,4.85,13.86,7.28,20.79-.89.65-1.78,1.29-2.68,1.94-15.57-12.33-31.14-24.65-46.72-36.98-.32.43-.63.85-.95,1.28,16.47,18.22,33.01,36.38,49.34,54.73,3.39,3.8,6.01,8.32,8.98,12.5-.56.51-1.11,1.01-1.67,1.52-12.16-9.28-24.32-18.57-36.48-27.85-.36.51-.72,1.01-1.08,1.52,23.46,20.58,46.93,41.15,70.39,61.73l.72-.75c-9.69-11.14-19.38-22.28-29.07-33.42.56-.74,1.11-1.48,1.67-2.23,5.02,2.19,10.05,4.39,15.07,6.58.35-.42.71-.84,1.06-1.25-4.37-4.58-8.73-9.17-13.1-13.75.19-.28.39-.56.58-.84,14.34,10.21,28.69,20.43,43.03,30.65.42-.58.84-1.16,1.26-1.73-8.92-10.15-19.59-18.83-27.43-32.26,2.58.86,3.39.96,4.01,1.36,8.38,5.43,16.07,12.25,26.81,12.65,1.63.06,3.33,1.52,4.8,2.6,18.57,13.65,37.12,27.32,55.62,41.05,4.8,3.56,9.43,7.34,14.13,11.03-12.77-18.68-34.39-28.62-44.83-49.38,5.25,5.07,10.5,10.14,15.76,15.21.43-.42.85-.84,1.28-1.27-6.51-8.78-14.24-16.8-18.17-27.17.7-.63,1.39-1.27,2.09-1.9,29.29,24.16,58.57,48.31,87.86,72.47.56-.62,1.12-1.25,1.69-1.87-31-32.23-62-64.46-94.05-97.77,4.02,1.8,7.58,2.65,10.24,4.72,9.91,7.69,19.44,15.88,29.27,23.68,13.52,10.73,27.51,20.88,40.69,32.03,11.31,9.56,21.71,20.25,32.67,30.25,2.45,2.23,5.6,3.68,9.44,6.14-.58-1.98-.59-2.67-.93-3.04-9.54-10.29-19.19-20.47-28.64-30.84-4.93-5.41-9.51-11.14-14.25-16.72l1.09-.82c7.77,6.41,15.55,12.83,23.32,19.25l1.72-1.98c-7.02-6.61-14.05-13.22-21.07-19.83l-.13.15ZM199.38,100.1c15.47,0,30.95-.42,46.39.14,10.78.4,20.49-1.69,29.87-7.21,25.21-14.85,52.09-26.29,79.83-34.74,36.01-10.97,72.86-18.31,110.72-19.99,50.45-2.24,100.06,2.22,148.75,16.07,30.61,8.71,59.88,20.77,88.08,35.75,6.5,3.45,14.12,5.6,21.42,6.4,16.66,1.83,33.45,2.49,50.19,3.53,3.5.22,7.03.03,12.26.03C684.37,24.63,572.1-8.8,447.81,1.97c-91.95,7.97-174.33,41.99-248.44,98.12Zm694.63,112.14c-.23,3.5-.5,5.5-.48,7.5.18,16.02.87,32.05.49,48.05-.25,10.34,1.82,19.61,6.63,28.68,12.97,24.44,21.65,50.62,29.13,77.23,11.54,41.06,17.37,82.97,17.39,125.66,0,26.45-1.11,52.91-6.4,78.89-4.39,21.54-8.32,43.35-15.06,64.17-7.26,22.42-17.87,43.7-26.33,65.75-2.83,7.37-4.36,15.5-5.05,23.41-.97,10.96-.65,22.04-.78,33.07-.09,7.77-.02,15.54-.02,24.63,114.49-160.91,125.4-395.65.48-577.04ZM312.3,966.36c.11.76.22,1.51.33,2.27,168.14,59.4,325.67,39.98,471.62-65.74-19.04-.92-37.99-1.14-56.93-.75-4.3.09-8.8,1.79-12.81,3.64-19.5,9.02-38.45,19.42-58.39,27.26-20.13,7.92-40.89,14.67-61.9,19.7-42.63,10.2-85.92,13.42-129.78,10.26-33.4-2.41-66.04-8.46-98.33-16.97-3.7-.98-5.25.27-6.92,2.93-5.09,8.09-12.33,12.13-21.81,13.08-8.42.84-16.72,2.83-25.08,4.31ZM98.05,201.03C47.13,272.5,14.6,349.66,4.05,435.98c-10.54,86.22-.63,169.75,31.38,251.43,0-2.65.12-4.32-.02-5.97-1.44-16.79-2.61-33.6-4.48-50.34-1.93-17.26-1.68-33.75,7.7-49.35,2.58-4.28,2.42-10.75,2.21-16.16-.29-7.66-2.11-15.24-2.74-22.9-4.91-59.98,1.36-118.87,17.78-176.6,8.21-28.85,20.17-56.21,34.5-82.45,5.3-9.71,8.09-19.73,7.8-30.95-.43-16.61-.11-33.24-.11-51.67Z" data-astro-cid-a23khclq></path> <g data-astro-cid-a23khclq> <path class="cls-1" d="m297.08,880.68c7.02,6.61,14.05,13.22,21.07,19.83l-1.72,1.98c-7.77-6.41-15.55-12.83-23.32-19.25l-1.09.82c4.74,5.58,9.32,11.31,14.25,16.72,9.45,10.37,19.1,20.55,28.64,30.84.34.37.34,1.06.93,3.04-3.84-2.46-6.99-3.9-9.44-6.14-10.97-10-21.36-20.69-32.67-30.25-13.18-11.14-27.17-21.29-40.69-32.03-9.83-7.8-19.36-15.99-29.27-23.68-2.66-2.06-6.22-2.92-10.24-4.72,32.05,33.31,63.05,65.54,94.05,97.77-.56.62-1.12,1.25-1.69,1.87-29.29-24.16-58.57-48.31-87.86-72.47-.7.64-1.39,1.27-2.09,1.9,3.92,10.37,11.66,18.39,18.17,27.17-.43.42-.85.84-1.28,1.27-5.25-5.07-10.5-10.14-15.76-15.21,10.44,20.76,32.06,30.7,44.83,49.38-4.71-3.68-9.34-7.47-14.13-11.03-18.51-13.73-37.06-27.4-55.62-41.05-1.47-1.08-3.16-2.54-4.8-2.6-10.74-.4-18.44-7.22-26.81-12.65-.62-.4-1.43-.5-4.01-1.36,7.84,13.42,18.51,22.11,27.43,32.26-.42.58-.84,1.16-1.26,1.73-14.34-10.22-28.69-20.43-43.03-30.65-.19.28-.39.56-.58.84,4.37,4.58,8.73,9.17,13.1,13.75-.35.42-.71.84-1.06,1.25-5.02-2.19-10.05-4.39-15.07-6.58-.56.74-1.11,1.48-1.67,2.23,9.69,11.14,19.38,22.28,29.07,33.42l-.72.75c-23.46-20.58-46.93-41.15-70.39-61.73.36-.51.72-1.01,1.08-1.52,12.16,9.28,24.32,18.57,36.48,27.85.56-.51,1.11-1.01,1.67-1.52-2.97-4.19-5.59-8.7-8.98-12.5-16.33-18.35-32.87-36.5-49.34-54.73.32-.43.63-.85.95-1.28,15.57,12.33,31.14,24.65,46.72,36.98.89-.65,1.78-1.29,2.68-1.94-2.43-6.93-4.86-13.87-7.28-20.79,14.66,5.95,24.72,19.79,39.97,25.44,2.54-6.17-.15-10.01-2.79-13.61-15.23-20.65-30.59-41.12-49.78-58.39-16.09-14.47-31.34-29.91-46.94-44.93-1.33-1.28-2.54-2.69-3.8-4.04.38-.41.77-.81,1.15-1.22,21.55,16.99,43.1,33.97,64.65,50.96.48-.28.96-.55,1.44-.83-1.27-2.16-2.28-4.54-3.85-6.43-10.03-12.03-20.19-23.96-29.74-36.44,11.19,9.49,22.38,18.98,34.26,29.07-.16-8.55-7.54-13.44-8.77-21.67,3.9,2.83,7.8,5.67,11.69,8.5.47-.45.94-.91,1.41-1.36-4.34-8.9-13.12-14.26-18.95-21.98-5.98-7.92-12.74-15.23-18.73-23.23,30.88,18.42,58.06,42.39,88.94,60.54.59-.74,1.18-1.49,1.77-2.23-2.76-3.08-5.39-6.3-8.3-9.22-19.36-19.47-38.79-38.87-58.18-58.3-1.02-1.02-2.26-2.01-2.78-3.28-.73-1.78-.87-3.81-1.26-5.74,1.89-.18,3.82-.69,5.66-.46,2.12.26,4.17,1.16,6.25,1.78.45-.55.91-1.1,1.36-1.65-21.28-22.82-42.56-45.65-63.84-68.47,27.99,25.44,59.71,45.73,88.53,69.94.83-.76,1.65-1.52,2.48-2.27-15.98-25.91-31.95-51.81-47.93-77.72.51-.53,1.02-1.07,1.54-1.6,21.82,13.71,40.14,32.9,63.23,44.61.5-.5,1-.99,1.5-1.49-1.85-2.77-3.44-5.78-5.61-8.28-15.15-17.51-30.58-34.76-45.57-52.4-8.55-10.07-16.47-20.7-24.6-31.14-1.16-1.48-1.92-3.28-2.87-4.93.41-.36.82-.72,1.24-1.08,10.61,8.54,21.22,17.08,31.84,25.62.37-.24.75-.48,1.12-.72-3.45-4.21-6.9-8.42-10.35-12.63.24-.44.48-.88.71-1.32,6.26,1.04,12.52,2.09,18.78,3.13l1.34-1.64c-6.6-8.81-15.42-15.71-23.67-25.13,10.26,3.34,17.86,11.04,29.74,9.17-2.87-4.23-4.94-7.27-7-10.31,13.89,13.67,28,26.75,44.58,36.7.46-.34.92-.67,1.38-1.01-1-2.03-1.65-4.37-3.05-6.06-17.33-20.81-34.67-41.6-52.21-62.21-7.12-8.37-13.74-16.95-18.03-28.81,3.41.99,5.98,1.33,8.18,2.45,4.92,2.52,9.59,5.57,14.51,8.1,1.42.73,3.66,1.03,4.94.36.85-.44,1.08-3.03.81-4.52-.32-1.76-1.52-3.34-2.26-5.03-1.91-4.34-3.99-8.62-5.58-13.08-1.4-3.93-1.72-7.67,3.52-9.52,1.11-.39,2.45-4.02,1.92-4.68-7.29-9.01-4.27-20-5.6-30.04-1.34-10.07-1.53-20.35-1.54-30.54-.11-82.92-.06-165.84-.06-248.76v-8.03c2.59-.23,4.75-.59,6.9-.59,71.45-.04,142.91-.19,214.36.06,17.48.06,14.65-1.56,19.37,14.56,12.72,43.4,26.02,86.63,39.25,129.87,11.46,37.49,23.3,74.86,34.67,112.37,8.11,26.79,15.49,53.81,23.61,80.59,9.03,29.78,18.57,59.39,27.82,89.1,2.08,6.67,3.87,13.44,7.25,20.36,1.61-4.28,3.46-8.49,4.79-12.86,11.16-36.72,22.03-73.53,33.35-110.19,15.43-49.94,31.24-99.76,46.7-149.7,1.75-5.65,4.36-6.93,9.4-4.4,6.78,3.41,13.55,6.84,20.51,9.84,1.97.85,4.55.26,6.85.33-.41-2.11-.17-4.72-1.32-6.25-7.36-9.7-15.03-19.16-22.59-28.7-1.47-1.85-2.91-3.73-3.6-6.69,7.88,2.65,15.76,5.29,23.64,7.94.53-.58,1.06-1.16,1.59-1.74-1.35-2.48-2.72-4.95-4.06-7.44-5.86-10.89-11.77-21.75-17.53-32.7-.71-1.34-.63-3.11-1.11-5.7,5.92,3.71,10.89,7.12,16.16,9.97,1.86,1,4.45.62,6.7.87-.34-2.06-.16-4.41-1.11-6.13-2.48-4.52-5.32-8.86-8.27-13.09-2.19-3.15-2.81-5.59,1.87-6.8-2.43-5.06-4.69-9.76-7.61-15.86,18.25,2.46,28.78,18.57,46.56,20.69-.85-3.15-1-5.69-2.15-7.6-5.22-8.66-10.48-17.32-16.2-25.64-5.09-7.41-11.01-13.83-13.13-23.44-1.63-7.4-7.08-13.93-10.77-20.87-1.31-2.45-2.45-5-4.4-9.01,9.37,5.97,17.19,10.96,25.01,15.94.43-.49.85-.97,1.28-1.46-12.29-17.41-28.84-31.75-36.5-52.9,20.56,17.89,41.13,35.79,61.69,53.68.73-.57,1.46-1.15,2.18-1.72-2.24-3.92-4.49-7.85-6.99-12.23,1.94.09,3.44.17,6.15.3-1.91-5.2-3.58-9.73-5.77-15.7,14.1,6.18,26.64,11.67,39.68,17.38.56-4.07.92-6.7,1.37-9.98,2.65.49,4.97,1,7.31,1.35,8.45,1.25,16.91,3.46,25.38,3.51,47.49.26,94.99.02,142.48-.15,3.01-.01,4.38.42,4.37,4.02-.22,57.08-.39,114.15-.4,171.23-.04,175.42,0,350.85-.02,526.27,0,13.75-.43,27.51-.12,41.25.13,5.55-1.58,7.13-6.91,7.12-44.63-.11-89.27.04-133.9.1-9.59.01-19.18,0-29.17,0,0-4.04,0-8.11,0-12.17.02-148.96.03-297.93.12-446.89,0-9.43-1.53-19.25,5.69-27.34,1.85-2.07-3.84-12.6-7.65-14.35-5.89-2.7-11.91-5.09-17.91-7.54-.67-.27-1.54-.04-3.1-.04.46,1.95.61,3.52,1.2,4.89,1.15,2.66,2.76,5.13,3.79,7.83,3.77,9.91,5.67,19.21,2.17,30.52-8.7,28.11-15.25,56.91-22.83,85.38-9.77,36.7-19.68,73.36-29.56,110.03-12.1,44.88-24.3,89.73-36.34,134.63-9.08,33.87-17.97,67.8-26.92,101.71-2.28,8.62-4.55,17.24-6.66,25.9-1.27,5.24-4.18,7.39-9.61,7.35-26.2-.16-52.41-.03-78.61,0-11.67,0-23.34.12-35-.15-1.64-.04-4.33-1.69-4.71-3.11-11.28-41.88-22.41-83.81-33.39-125.78-16.44-62.86-32.68-125.77-49.15-188.62-13-49.59-26.25-99.11-39.3-148.69-3.59-13.65-6.83-27.39-10.28-41.07-.52-2.08-1.33-4.08-2.01-6.12-.61.08-1.22.17-1.84.25-.16,3.36-.45,6.72-.45,10.07.18,75.62.46,151.24.58,226.86.05,32.29-.34,64.58-.11,96.87.03,4.22,2.06,8.67,4.03,12.55,2.66,5.24,6.16,10.04,9.29,15.02-.4.5-.8,1-1.19,1.51-3.4-.65-6.79-1.29-10.71-2.04.85,2.68,1.56,4.88,2.65,8.32-6.13-2.95-11.22-5.4-16.3-7.84-.39.55-.79,1.1-1.18,1.65,1.97,2.97,3.94,5.94,6.6,9.95-5.76-2.87-10.58-5.27-15.39-7.66-.43.56-.86,1.13-1.29,1.69.88,1.44,1.64,2.97,2.65,4.31,7.47,9.91,14.8,19.94,22.61,29.58,2.76,3.4,3,6.01.52,9.32-1.24,1.65-2.07,3.64-3.42,5.17-2.74,3.12-2.57,6.12-.82,9.72,2.34,4.83,4.12,9.95,6.24,14.9,2.08,4.85,2.45,9.27-2.68,12.43,12.47,13.88,24.76,27.58,37.06,41.27-.48.68-.97,1.37-1.45,2.05-15.78-9.1-31.57-18.19-47.35-27.29-.41.26-.81.51-1.22.77,1.06,1.9,1.85,4.05,3.24,5.67,9.5,11.15,19.13,22.19,28.7,33.29.51.59.86,1.32.69,2.81-9.61-6.01-19.22-12.02-28.83-18.03-.48.61-.96,1.23-1.44,1.84,1.9,8.96,9.53,14.11,15.15,21.45-1.95.86-3.49,1.54-5.02,2.21-.76-9.06-9.14-12.1-13.01-18.71-.67.57-1.33,1.14-2,1.7,5.04,5.62,10.08,11.24,15.13,16.87Zm410.68-511.83c-9.82-9.65-19.22-18.89-29.45-28.94,1.93,14.59,14.5,30.6,29.45,28.94Z" data-astro-cid-a23khclq></path> <path class="cls-1" d="m199.38,100.1C273.49,43.96,355.86,9.94,447.81,1.97c124.28-10.77,236.55,22.65,339.09,98.11-5.24,0-8.76.19-12.26-.03-16.74-1.04-33.53-1.7-50.19-3.53-7.31-.8-14.93-2.95-21.42-6.4-28.2-14.97-57.47-27.04-88.08-35.75-48.69-13.86-98.3-18.31-148.75-16.07-37.86,1.68-74.71,9.02-110.72,19.99-27.74,8.45-54.62,19.89-79.83,34.74-9.38,5.52-19.08,7.61-29.87,7.21-15.45-.57-30.93-.14-46.39-.14Z" data-astro-cid-a23khclq></path> <path class="cls-1" d="m894.01,212.24c124.92,181.39,114.02,416.12-.48,577.04,0-9.09-.07-16.86.02-24.63.13-11.03-.19-22.11.78-33.07.7-7.91,2.23-16.04,5.05-23.41,8.47-22.05,19.08-43.33,26.33-65.75,6.74-20.82,10.67-42.63,15.06-64.17,5.29-25.98,6.41-52.44,6.4-78.89-.01-42.69-5.85-84.6-17.39-125.66-7.48-26.61-16.16-52.79-29.13-77.23-4.82-9.08-6.88-18.34-6.63-28.68.38-16-.3-32.03-.49-48.05-.02-2,.24-4,.48-7.5Z" data-astro-cid-a23khclq></path> <path class="cls-1" d="m312.3,966.36c8.36-1.48,16.66-3.47,25.08-4.31,9.48-.94,16.72-4.98,21.81-13.08,1.68-2.67,3.22-3.91,6.92-2.93,32.29,8.5,64.93,14.56,98.33,16.97,43.86,3.16,87.15-.06,129.78-10.26,21-5.03,41.77-11.78,61.9-19.7,19.93-7.84,38.89-18.24,58.39-27.26,4.01-1.85,8.5-3.55,12.81-3.64,18.94-.39,37.89-.17,56.93.75-145.95,105.71-303.48,125.14-471.62,65.74-.11-.76-.22-1.51-.33-2.27Z" data-astro-cid-a23khclq></path> <path class="cls-1" d="m98.05,201.03c0,18.43-.32,35.06.11,51.67.29,11.22-2.49,21.24-7.8,30.95-14.32,26.24-26.29,53.59-34.5,82.45-16.42,57.73-22.69,116.61-17.78,176.6.63,7.66,2.45,15.24,2.74,22.9.21,5.41.36,11.88-2.21,16.16-9.38,15.59-9.63,32.09-7.7,49.35,1.87,16.74,3.04,33.56,4.48,50.34.14,1.65.02,3.32.02,5.97C3.42,605.73-6.49,522.2,4.05,435.98c10.55-86.32,43.08-163.48,94.01-234.95Z" data-astro-cid-a23khclq></path> </g> <path class="cls-2" d="m707.76,368.85c-14.95,1.65-27.52-14.36-29.45-28.94,10.23,10.06,19.63,19.29,29.45,28.94Z" data-astro-cid-a23khclq></path> <path class="cls-2" d="m297.08,880.68c-5.04-5.62-10.08-11.24-15.13-16.87.67-.57,1.33-1.14,2-1.7,3.87,6.6,12.25,9.65,13.01,18.71-.01.01.12-.14.12-.14Z" data-astro-cid-a23khclq></path> </svg> `;
}, "C:/Users/ferny/OneDrive/Escritorio/proyects/astro/portfolio/src/common/components/Logo.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$4 = createAstro();
const $$NavMobile = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$NavMobile;
  const { pathname } = Astro2.url;
  const normalizedPathName = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<div class="hamburger" data-astro-cid-d3jxelxt> <div class="_layer -top" data-astro-cid-d3jxelxt></div> <div class="_layer -mid" data-astro-cid-d3jxelxt></div> <div class="_layer -bottom" data-astro-cid-d3jxelxt></div> </div> <nav class="menuppal" data-astro-cid-d3jxelxt> <ul data-astro-cid-d3jxelxt> <li data-astro-cid-d3jxelxt> <a class="nav__link" href="/"', ' onclick="closeMenu()" data-astro-cid-d3jxelxt>INICIO</a> </li> <li data-astro-cid-d3jxelxt> <a class="nav__link" href="/projects"', ' onclick="closeMenu()" data-astro-cid-d3jxelxt>PROYECTOS</a> </li> <li data-astro-cid-d3jxelxt> <a class="nav__link" href="/skills"', ' onclick="closeMenu()" data-astro-cid-d3jxelxt>HABILIDADES</a> </li> <li data-astro-cid-d3jxelxt> <a class="nav__link" href="/education"', ' onclick="closeMenu()" data-astro-cid-d3jxelxt>EDUCACI\xD3N</a> </li> </ul> <div class="button__container" data-astro-cid-d3jxelxt> <div class="theme__button" data-astro-cid-d3jxelxt> ', ' </div> </div> </nav>  <script>\n  const $ = (selector) => document.querySelector(selector);\n  const $all = (selector) => document.querySelectorAll(selector);\n\n  const menu = $(".hamburger");\n  const navMenu = $(".menuppal");\n  const navLink = $all(".nav__link");\n\n  function toggleMenu(event) {\n    this.classList.toggle("is-active");\n    navMenu.classList.toggle("is_active");\n    event.preventDefault();\n  }\n\n  function closeMenu() {\n    menu.classList.remove("is-active");\n    navMenu.classList.remove("is_active");\n  }\n\n  //   navLink.forEach((link) => {\n  //     link.addEventListener("click", toggleMenu, false);\n  //   });\n\n  menu.addEventListener("click", toggleMenu, false);\n<\/script>'])), maybeRenderHead(), addAttribute(normalizedPathName === "/" ? "active" : "", "class"), addAttribute(normalizedPathName === "/projects" ? "active" : "", "class"), addAttribute(normalizedPathName === "/skills" ? "active" : "", "class"), addAttribute(normalizedPathName === "/education" ? "active" : "", "class"), renderComponent($$result, "ButtonTheme", $$ButtonTheme, { "data-astro-cid-d3jxelxt": true }));
}, "C:/Users/ferny/OneDrive/Escritorio/proyects/astro/portfolio/src/common/components/NavMobile.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$3 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  const { pathname } = Astro2.url;
  const normalizedPathName = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<header class="header__container" data-astro-cid-ac7kg75o', '> <div class="header" data-astro-cid-ac7kg75o> <picture data-astro-cid-ac7kg75o> ', ' </picture> <nav class="nav__menu" data-astro-cid-ac7kg75o> <a href="/"', ' data-astro-cid-ac7kg75o>INICIO</a> <a href="/projects"', ' data-astro-cid-ac7kg75o>PROYECTOS</a> <a href="/skills"', ' data-astro-cid-ac7kg75o>HABILIDADES</a> <a href="/education"', ' data-astro-cid-ac7kg75o>EDUCACI\xD3N</a> <!-- <a href="/blog" class={normalizedPathName === "/blog" ? "active" : ""}\n        >BLOG</a\n      > --> </nav> <div class="button__container" data-astro-cid-ac7kg75o> ', ' </div> <div class="nav__mobile" data-astro-cid-ac7kg75o> ', ' </div> </div> </header>  <script>\n  const header = document.querySelector(".header__container");\n\n  let isFixed = false;\n\n  const activedFixedScroll = () => {\n    const scrollY = window.scrollY;\n\n    if (!header) return;\n\n    if (scrollY > 0 && !isFixed) {\n      header.classList.add("header-sticky");\n      isFixed = true;\n    } else if (scrollY === 0 && isFixed) {\n      header.classList.remove("header-sticky");\n      isFixed = false;\n    }\n  };\n\n  document.addEventListener("scroll", activedFixedScroll);\n\n  const navLinks = document.querySelectorAll("nav a");\n\n  document.addEventListener("astro:after-swap", () => {\n    navLinks.forEach((link) => {\n      link.classList.remove("active");\n\n      const currentPath = window.location.pathname.slice(1);\n\n      const hrefArray = link.href.split("/");\n      const thisPath = hrefArray[hrefArray.length - 1];\n\n      if (currentPath === thisPath) {\n        link.classList.add("active");\n      }\n    });\n  });\n<\/script>'])), maybeRenderHead(), addAttribute(createTransitionScope($$result, "ugohayzj"), "data-astro-transition-persist"), renderComponent($$result, "Logo", $$Logo, { "data-astro-cid-ac7kg75o": true }), addAttribute(normalizedPathName === "/" ? "active" : "", "class"), addAttribute(normalizedPathName === "/projects" ? "active" : "", "class"), addAttribute(normalizedPathName === "/skills" ? "active" : "", "class"), addAttribute(normalizedPathName === "/education" ? "active" : "", "class"), renderComponent($$result, "ButtonTheme", $$ButtonTheme, { "data-astro-cid-ac7kg75o": true }), renderComponent($$result, "NavMobile", $$NavMobile, { "data-astro-cid-ac7kg75o": true }));
}, "C:/Users/ferny/OneDrive/Escritorio/proyects/astro/portfolio/src/common/components/Header.astro", "self");

const icons = {"local":{"prefix":"local","lastModified":1716839010,"icons":{"computer":{"body":"<g fill=\"none\" stroke=\"currentcolor\" stroke-width=\"3\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2 92h75m20 0h5\"/><path d=\"M2 69V5a3 3 0 0 1 3-3h94a3 3 0 0 1 3 3v64a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Z\"/></g>","width":104,"height":94},"github":{"body":"<g fill=\"currentColor\"><path fill=\"none\" d=\"M0 0h24v24H0z\"/><path d=\"M5.315 2.1c.791-.113 1.9.145 3.333.966l.272.161.16.1.397-.083a13.3 13.3 0 0 1 4.59-.08l.456.08.396.083.161-.1c1.385-.84 2.487-1.17 3.322-1.148l.164.008.147.017.076.014.05.011.144.047a1 1 0 0 1 .53.514 5.2 5.2 0 0 1 .397 2.91l-.047.267-.046.196.123.163c.574.795.93 1.728 1.03 2.707l.023.295L21 9.5c0 3.855-1.659 5.883-4.644 6.68l-.245.061-.132.029.014.161.008.157.004.365-.002.213L16 21a1 1 0 0 1-.883.993L15 22H9a1 1 0 0 1-.993-.883L8 21v-.734c-1.818.26-3.03-.424-4.11-1.878l-.535-.766c-.28-.396-.455-.579-.589-.644l-.048-.019a1 1 0 0 1 .564-1.918c.642.188 1.074.568 1.57 1.239l.538.769c.76 1.079 1.36 1.459 2.609 1.191L8 17.562l-.018-.168a5.03 5.03 0 0 1-.021-.824l.017-.185.019-.12-.108-.024c-2.976-.71-4.703-2.573-4.875-6.139l-.01-.31L3 9.5a5.6 5.6 0 0 1 .908-3.051l.152-.222.122-.163-.045-.196a5.2 5.2 0 0 1 .145-2.642l.1-.282.106-.253a1 1 0 0 1 .529-.514l.144-.047.154-.03z\"/></g>"},"instagram":{"body":"<path fill=\"currentcolor\" d=\"M12 9.52A2.48 2.48 0 1 0 14.48 12 2.48 2.48 0 0 0 12 9.52Zm9.93-2.45a6.53 6.53 0 0 0-.42-2.26 4 4 0 0 0-2.32-2.32 6.53 6.53 0 0 0-2.26-.42C15.64 2 15.26 2 12 2s-3.64 0-4.93.07a6.53 6.53 0 0 0-2.26.42 4 4 0 0 0-2.32 2.32 6.53 6.53 0 0 0-.42 2.26C2 8.36 2 8.74 2 12s0 3.64.07 4.93a6.86 6.86 0 0 0 .42 2.27 3.94 3.94 0 0 0 .91 1.4 3.89 3.89 0 0 0 1.41.91 6.53 6.53 0 0 0 2.26.42C8.36 22 8.74 22 12 22s3.64 0 4.93-.07a6.53 6.53 0 0 0 2.26-.42 3.89 3.89 0 0 0 1.41-.91 3.94 3.94 0 0 0 .91-1.4 6.6 6.6 0 0 0 .42-2.27C22 15.64 22 15.26 22 12s0-3.64-.07-4.93Zm-2.54 8a5.73 5.73 0 0 1-.39 1.8A3.86 3.86 0 0 1 16.87 19a5.73 5.73 0 0 1-1.81.35H8.94A5.73 5.73 0 0 1 7.13 19a3.51 3.51 0 0 1-1.31-.86A3.51 3.51 0 0 1 5 16.87a5.49 5.49 0 0 1-.34-1.81V8.94A5.49 5.49 0 0 1 5 7.13a3.51 3.51 0 0 1 .86-1.31A3.59 3.59 0 0 1 7.13 5a5.73 5.73 0 0 1 1.81-.35h6.12a5.73 5.73 0 0 1 1.81.35 3.51 3.51 0 0 1 1.31.86A3.51 3.51 0 0 1 19 7.13a5.73 5.73 0 0 1 .35 1.81V12c0 2.06.07 2.27.04 3.06Zm-1.6-7.44a2.38 2.38 0 0 0-1.41-1.41A4 4 0 0 0 15 6H9a4 4 0 0 0-1.38.26 2.38 2.38 0 0 0-1.41 1.36A4.27 4.27 0 0 0 6 9v6a4.27 4.27 0 0 0 .26 1.38 2.38 2.38 0 0 0 1.41 1.41 4.27 4.27 0 0 0 1.33.26h6a4 4 0 0 0 1.38-.26 2.38 2.38 0 0 0 1.41-1.41 4 4 0 0 0 .26-1.38V9a3.78 3.78 0 0 0-.26-1.38ZM12 15.82A3.81 3.81 0 0 1 8.19 12 3.82 3.82 0 1 1 12 15.82Zm4-6.89a.9.9 0 0 1 0-1.79.9.9 0 0 1 0 1.79Z\"/>"},"linkedin":{"body":"<path fill=\"currentcolor\" d=\"M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2ZM8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12 1.57 1.57 0 1 1 0 3.12Zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z\"/>"},"pencil":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\"/><path d=\"M19 8v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zM7 22v-1a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1m0-20v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V2\"/></g>"},"twitter":{"body":"<g fill=\"currentcolor\"><path fill=\"none\" d=\"M0 0h24v24H0z\"/><path d=\"M14.058 3.41c-1.807.767-2.995 2.453-3.056 4.38L11 7.972l-.243-.023C8.365 7.68 6.259 6.437 4.813 4.418a1 1 0 0 0-1.685.092l-.097.186-.049.099c-.719 1.485-1.19 3.29-1.017 5.203l.03.273c.283 2.263 1.5 4.215 3.779 5.679l.173.107-.081.043c-1.315.663-2.518.952-3.827.9-1.056-.04-1.446 1.372-.518 1.878 3.598 1.961 7.461 2.566 10.792 1.6 4.06-1.18 7.152-4.223 8.335-8.433l.127-.495c.238-.993.372-2.006.401-3.024l.003-.332.393-.779.44-.862.214-.434.118-.247c.265-.565.456-1.033.574-1.43l.014-.056.008-.018c.22-.593-.166-1.358-.941-1.358l-.122.007a.997.997 0 0 0-.231.057l-.086.038a7.46 7.46 0 0 1-.88.36l-.356.115-.271.08-.772.214c-1.336-1.118-3.144-1.254-5.012-.554l-.211.084z\"/></g>"},"web":{"body":"<g fill=\"none\" stroke=\"currentcolor\" stroke-linecap=\"round\" stroke-width=\"3\"><path d=\"M44.56 71.645H9.739A7.738 7.738 0 0 1 2 63.907V9.738A7.738 7.738 0 0 1 9.738 2h61.907a7.738 7.738 0 0 1 7.739 7.738v34.823\"/><path stroke-linejoin=\"round\" d=\"M2 17.477h77.384m-65.776-7.7.038-.043m11.569.043.039-.043m11.569.043.038-.043m35.264 58.5a11.57 11.57 0 0 0 3.39-8.196c0-6.411-5.197-11.608-11.608-11.608-6.411 0-11.608 5.197-11.608 11.608 0 6.41 5.197 11.607 11.608 11.607 3.21 0 6.117-1.304 8.218-3.41Zm0 0 7.258 7.28\"/></g>","width":81,"height":78}},"width":24,"height":24}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$2 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "C:/Users/ferny/OneDrive/Escritorio/proyects/astro/portfolio/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const date = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="footer__container" data-astro-cid-arfngj5l> <article class="footer__info" data-astro-cid-arfngj5l> <div class="social__container" data-astro-cid-arfngj5l> <a href="https://github.com/Metaldev-06/" target="_blank" rel="noopener noreferrer" data-astro-cid-arfngj5l> ${renderComponent($$result, "Icon", $$Icon, { "name": "github", "size": 24, "data-astro-cid-arfngj5l": true })} </a> <a href="https://www.linkedin.com/in/fernandodiaz62/" target="_blank" rel="noopener noreferrer" data-astro-cid-arfngj5l> ${renderComponent($$result, "Icon", $$Icon, { "name": "linkedin", "size": 24, "data-astro-cid-arfngj5l": true })} </a> <a href="https://twitter.com/MetalDev_06" target="_blank" rel="noopener noreferrer" data-astro-cid-arfngj5l> ${renderComponent($$result, "Icon", $$Icon, { "name": "twitter", "size": 24, "data-astro-cid-arfngj5l": true })} </a> </div> <div class="copyright" data-astro-cid-arfngj5l>&copy; Diseñado por MetalDev - ${date}</div> <div class="contact" data-astro-cid-arfngj5l><a href="/contact" data-astro-cid-arfngj5l>Contacto</a></div> </article> </footer> `;
}, "C:/Users/ferny/OneDrive/Escritorio/proyects/astro/portfolio/src/common/components/Footer.astro", void 0);

const $$SmokeBackground = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="smoke-bgk" class="smoke-bgk" data-astro-cid-qbjurorn${addAttribute(createTransitionScope($$result, "n24tejz6"), "data-astro-transition-persist")}></div>  `;
}, "C:/Users/ferny/OneDrive/Escritorio/proyects/astro/portfolio/src/common/components/SmokeBackground.astro", "self");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width">', '<link rel="preconnect" href="/fonts/Inter-Regular.woff2" crossorigin type="font/woff2"><link rel="preconnect" href="/fonts/Inter-Medium.woff2" crossorigin type="font/woff2"><link rel="preconnect" href="/fonts/Inter-Bold.woff2" crossorigin type="font/woff2"><meta name="generator"', ">", '<script>\n      window.getThemePreference = () => {\n        const localItem =\n          typeof localStorage !== "undefined" && localStorage.getItem("theme");\n\n        if (localItem) return localItem;\n\n        return window.matchMedia("(prefers-color-scheme: dark)").matches\n          ? "dark"\n          : "light";\n      };\n\n      const isDark = getThemePreference() === "dark";\n      document.documentElement.classList.toggle("dark", isDark);\n    <\/script>', "</head> <body> ", ' <!-- <div class="background"></div> --> ', " ", " ", "  </body> </html>"])), renderComponent($$result, "SEO", $$SEO, { "title": seoAstro.title, "description": seoAstro.description, "openGraph": {
    basic: {
      title: `${seoAstro.title}`,
      type: "A type.",
      image: `${seoAstro.ogImage}`
    }
  }, "twitter": {
    creator: `${seoAstro.twitterCreator}`
  }, "extend": {
    // extending the default link tags
    link: [
      { rel: "icon", href: "/img/favicon.ico" },
      { rel: "apple-touch-icon", href: "/img/apple-touch-icon.png" },
      {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/img/apple-touch-icon-72x72.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/img/apple-touch-icon-76x76.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/img/apple-touch-icon-114x114.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/img/apple-touch-icon-120x120.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/img/apple-touch-icon-152x152.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/img/apple-touch-icon-180x180.png"
      }
    ],
    // extending the default meta tags
    meta: [
      {
        name: "twitter:image",
        content: `${seoAstro.ogImage}`
      },
      { name: "twitter:title", content: `${seoAstro.title}` },
      { name: "twitter:description", content: `${seoAstro.description}` }
    ]
  } }), addAttribute(Astro2.generator, "content"), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderComponent($$result, "SmokeBackground", $$SmokeBackground, {}), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/ferny/OneDrive/Escritorio/proyects/astro/portfolio/src/layouts/Layout.astro", void 0);

const db = await createRemoteDatabaseClient(process.env.ASTRO_STUDIO_APP_TOKEN ?? "f1b6863b1bad3d01ce5a8b4eb8ceb267d76345e0:mgmyp5bcjp62gx9wqa3lauciw99p", {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.ASTRO_STUDIO_REMOTE_DB_URL ?? "https://db.services.astro.build");
const Projects = asDrizzleTable("Projects", { "columns": { "id": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Projects", "primaryKey": true } }, "name": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "name", "collection": "Projects", "primaryKey": false, "optional": false } }, "slug": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "slug", "collection": "Projects", "primaryKey": false, "optional": false } }, "description": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "description", "collection": "Projects", "primaryKey": false, "optional": false } }, "important": { "type": "boolean", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "important", "collection": "Projects" } }, "primary": { "type": "boolean", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "primary", "collection": "Projects" } }, "technologies": { "type": "json", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "technologies", "collection": "Projects" } }, "server_status": { "type": "boolean", "schema": { "optional": true, "unique": false, "deprecated": false, "name": "server_status", "collection": "Projects" } }, "client_status": { "type": "boolean", "schema": { "optional": true, "unique": false, "deprecated": false, "name": "client_status", "collection": "Projects" } }, "url": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "url", "collection": "Projects", "primaryKey": false, "optional": false } }, "url_image": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "url_image", "collection": "Projects", "primaryKey": false, "optional": false } } }, "deprecated": false, "indexes": {} }, false);
const Skills = asDrizzleTable("Skills", { "columns": { "id": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Skills", "primaryKey": true } }, "name": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "name", "collection": "Skills", "primaryKey": false, "optional": false } }, "stack": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "stack", "collection": "Skills", "primaryKey": false, "optional": false } }, "url_image": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "url_image", "collection": "Skills", "primaryKey": false, "optional": false } } }, "deprecated": false, "indexes": {} }, false);
const Certifications = asDrizzleTable("Certifications", { "columns": { "id": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Certifications", "primaryKey": true } }, "name": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "name", "collection": "Certifications", "primaryKey": false, "optional": false } }, "url_image": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "url_image", "collection": "Certifications", "primaryKey": false, "optional": false } }, "className": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "className", "collection": "Certifications", "primaryKey": false, "optional": false } } }, "deprecated": false, "indexes": {} }, false);

const $$Astro = createAstro();
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { pathname } = Astro2.url;
  const normalizedPathName = pathname.split("/")[2];
  const projects = await db.select().from(Projects).where(eq(Projects.slug, normalizedPathName));
  const project = projects[0];
  if (project === void 0) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Project", "data-astro-cid-c72mq5xm": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="project__section" data-astro-cid-c72mq5xm> <article class="project__container" data-astro-cid-c72mq5xm> <div class="img__container" data-astro-cid-c72mq5xm> <img${addAttribute(project.url_image, "src")}${addAttribute(project.name, "alt")} width="300" data-astro-cid-c72mq5xm> </div> <div class="text__container" data-astro-cid-c72mq5xm> <div class="header__container" data-astro-cid-c72mq5xm> <h1 data-astro-cid-c72mq5xm>${project.name}</h1> <p data-astro-cid-c72mq5xm>${project.description}</p> <div class="status__deploy" data-astro-cid-c72mq5xm> <div class="client__deploy" data-astro-cid-c72mq5xm>
Estado del front:
<span data-astro-cid-c72mq5xm> ${project.client_status ? "Activo" : "Inactivo"} </span> </div> <div class="server__deploy" data-astro-cid-c72mq5xm>
Estado del back:
<span data-astro-cid-c72mq5xm> ${project.server_status ? "Activo" : "Inactivo"} </span> </div> </div> </div> <div class="info__container" data-astro-cid-c72mq5xm> <h2 data-astro-cid-c72mq5xm>Tecnologías</h2> <div class="info__cards--container" data-astro-cid-c72mq5xm> ${project.technologies.map((name) => {
    return renderTemplate`<div class="info__card" data-astro-cid-c72mq5xm> <p data-astro-cid-c72mq5xm>${name}</p> </div>`;
  })} </div> </div> </div> </article> </section> ` })} `;
}, "C:/Users/ferny/OneDrive/Escritorio/proyects/astro/portfolio/src/pages/project/[slug].astro", void 0);

const $$file = "C:/Users/ferny/OneDrive/Escritorio/proyects/astro/portfolio/src/pages/project/[slug].astro";
const $$url = "/project/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, Certifications as C, Projects as P, Skills as S, _slug_ as _, $$Icon as a, db as d };
