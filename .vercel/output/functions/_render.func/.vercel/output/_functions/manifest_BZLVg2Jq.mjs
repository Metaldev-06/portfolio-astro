import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import './chunks/astro_CtATVphq.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"education/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/education","isIndex":false,"type":"page","pattern":"^\\/education\\/?$","segments":[[{"content":"education","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/education.astro","pathname":"/education","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"skills/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/skills","isIndex":false,"type":"page","pattern":"^\\/skills\\/?$","segments":[[{"content":"skills","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/skills.astro","pathname":"/skills","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.C5X8UGSx.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"inline","content":".project__section[data-astro-cid-c72mq5xm]{width:var(--full-width);max-width:var(--max-width);margin:6rem auto;.project__container{width:100%;display:flex;gap:1rem;.img__container{width:100%;max-width:600px;overflow:hidden;border-radius:8px;img{width:100%;height:100%;object-fit:cover;border-radius:8px}}.text__container{display:flex;flex-direction:column;justify-content:space-between;gap:1rem;.header__container{display:flex;flex-direction:column;gap:1rem;h1{font-size:clamp(1.5rem,5vw,2.5rem);font-weight:700}.status__deploy{display:flex;gap:1rem;font-weight:700;span{font-weight:400}}}.info__container{display:flex;flex-direction:column;gap:1rem;.info__cards--container{display:flex;flex-wrap:wrap;gap:1rem;.info__card{background-color:var(--color-text);color:var(--color-bg);padding:.5rem 1rem;border-radius:8px;font-weight:700}}}}}}@media (width < 800px){.project__container[data-astro-cid-c72mq5xm]{flex-direction:column}.project__section[data-astro-cid-c72mq5xm] .project__container[data-astro-cid-c72mq5xm] .img__container[data-astro-cid-c72mq5xm]{max-width:none}}\n"},{"type":"external","src":"/_astro/blog.BB4WCRR-.css"}],"routeData":{"route":"/project/[slug]","isIndex":false,"type":"page","pattern":"^\\/project\\/([^/]+?)\\/?$","segments":[[{"content":"project","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/project/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/ferny/OneDrive/Escritorio/proyects/astro/portfolio/src/common/components/Header.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/ferny/OneDrive/Escritorio/proyects/astro/portfolio/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/ferny/OneDrive/Escritorio/proyects/astro/portfolio/src/pages/blog.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/ferny/OneDrive/Escritorio/proyects/astro/portfolio/src/pages/contact.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/contact@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/ferny/OneDrive/Escritorio/proyects/astro/portfolio/src/pages/education.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/education@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/ferny/OneDrive/Escritorio/proyects/astro/portfolio/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/ferny/OneDrive/Escritorio/proyects/astro/portfolio/src/pages/project/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/project/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/ferny/OneDrive/Escritorio/proyects/astro/portfolio/src/pages/projects.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/ferny/OneDrive/Escritorio/proyects/astro/portfolio/src/pages/skills.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/skills@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/ferny/OneDrive/Escritorio/proyects/astro/portfolio/src/common/components/SmokeBackground.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_BCVj5wbn.mjs","\u0000@astrojs-manifest":"manifest_BZLVg2Jq.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_CClQ3V1f.mjs","\u0000@astro-page:src/pages/blog@_@astro":"chunks/blog_Dak-LUVZ.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_BNAlf_2J.mjs","\u0000@astro-page:src/pages/education@_@astro":"chunks/education_VCbt1d6v.mjs","\u0000@astro-page:src/pages/project/[slug]@_@astro":"chunks/_slug__65V3oU1J.mjs","\u0000@astro-page:src/pages/projects@_@astro":"chunks/projects_Dvph7Pdy.mjs","\u0000@astro-page:src/pages/skills@_@astro":"chunks/skills_CnTuDG9I.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_OqTWCQJn.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.BVKXRpTI.js","/astro/hoisted.js?q=2":"_astro/hoisted.CcwCfU4e.js","/astro/hoisted.js?q=1":"_astro/hoisted.C5X8UGSx.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/blog.BB4WCRR-.css","/_astro/index.BXzFNUhe.css","/favicon.svg","/robots.txt","/fonts/Inter-Bold.woff2","/fonts/Inter-ExtraBold.woff2","/fonts/Inter-Medium.woff2","/fonts/Inter-Regular.woff2","/fonts/Inter-SemiBold.woff2","/img/apple-touch-icon-114x114.png","/img/apple-touch-icon-120x120.png","/img/apple-touch-icon-144x144.png","/img/apple-touch-icon-152x152.png","/img/apple-touch-icon-180x180.png","/img/apple-touch-icon-57x57.png","/img/apple-touch-icon-72x72.png","/img/apple-touch-icon-76x76.png","/img/apple-touch-icon.png","/img/background_second.jpg","/img/background_white.jpg","/img/concrete-dark.png","/img/concrete.png","/img/favicon.ico","/img/logo.svg","/img/logo_hero.svg","/img/logo_hero_2.svg","/img/logo_solo_nuevo.svg","/img/me-image.png","/img/medium_209shots_so_1_52a71d4f0b_6f91396d56.jpg","/img/medium_300shots_so_1_747abe463a_f4d1a02ea4.jpg","/img/medium_cande_fest_8fb06d4c19_5c973326ca.jpg","/img/medium_encriptador_alura_622f020dd1_8993930b17.jpg","/img/medium_giftify_v2_eabe435ea6_d489929737.jpg","/img/medium_juego_ahorcado_715817aab2_76ed799ed5.jpg","/img/medium_marvel_app_d198d551f5_53f920c345.jpg","/img/medium_tango_viajes_38251e36e3_8559ed1835.jpg","/img/noise.png","/img/post-angular.jpg","/img/post-javascript.jpg","/img/post-stackoverflow.jpg","/img/post-strapi.jpg","/img/smoke.webp","/_astro/atropos.DZR9lnpr.js","/_astro/hoisted.BVKXRpTI.js","/_astro/hoisted.C5X8UGSx.js","/_astro/hoisted.CcwCfU4e.js","/img/skills/1.svg","/img/skills/2.svg","/img/skills/3.svg","/img/skills/4.svg","/img/skills/5.svg","/img/skills/6.svg","/img/skills/7.svg","/img/skills/8.svg","/img/skills/9.svg","/blog/index.html","/contact/index.html","/education/index.html","/projects/index.html","/skills/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
