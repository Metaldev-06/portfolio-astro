import { db, Projects, Skills } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  // TODO

  await db.insert(Skills).values([
    {
      name: "html",
      stack: "frontend",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699565996/icons8_html_5_42634cfec8_2bd9373223.svg",
    },
    {
      name: "angular",
      stack: "frontend",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699565997/angular_665eced4bb_c3eb318b0f.svg",
    },
    {
      name: "boostrap",
      stack: "frontend",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699565997/icons8_oreja_7116b5398f_ff6b5bb670.svg",
    },
    {
      name: "css",
      stack: "frontend",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699565997/icons8_css3_9aeb779972_b96ee7ee10.svg",
    },
    {
      name: "javascript",
      stack: "frontend",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699565996/icons8_javascript_5c41930901_142fd9d40f.svg",
    },
    {
      name: "material",
      stack: "frontend",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699569744/4fb3f2d6_9ac7_4633_8926_f6cd109214d3_c5f1252154_e13cc18be2.png",
    },
    {
      name: "primeng",
      stack: "frontend",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699565996/primeng_logo_b8a185f2c0_c6206468b2.png",
    },
    {
      name: "sass",
      stack: "frontend",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699565997/icons8_sass_0f4917bbad_0201b687f2.svg",
    },
    {
      name: "typescript",
      stack: "frontend",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699565997/icons8_typescript_a93913570e_d158812f4d.svg",
    },
    {
      name: "electron",
      stack: "frontend",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1705446517/logo_926b1312c5.svg",
    },
    {
      name: "ionic",
      stack: "frontend",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1705446469/ionicframework_icon_84efb4ebe7.svg",
    },
    {
      name: "astrojs",
      stack: "frontend",
      url_image:
        "https://res.cloudinary.com/dw24usdw9/image/upload/v1716694728/Dise%C3%B1o_sin_t%C3%ADtulo_zjlgt6.webp",
    },
    {
      name: "deno",
      stack: "backend",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699565997/deno_d340e685d2_288d1e2cc5.svg",
    },
    {
      name: "express",
      stack: "backend",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699565997/icons8_express_js_54c3d9f3f5_dd42ce1af6.svg",
    },
    {
      name: "firebase",
      stack: "backend",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699565997/firebase_ede3547fb8_3881276731.svg",
    },
    {
      name: "nestjs",
      stack: "backend",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699565995/nestjs_icon_a862cbde61_4658e5cccd.svg",
    },
    {
      name: "nodejs",
      stack: "backend",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699565997/icons8_node_js_9939740c10_d258916783.svg",
    },
    {
      name: "strapi",
      stack: "backend",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699567890/strapi_2_18e6f0c6c1_69dc4c3880.svg",
    },
    {
      name: "astrodb",
      stack: "backend",
      url_image:
        "https://res.cloudinary.com/dw24usdw9/image/upload/v1716694728/Dise%C3%B1o_sin_t%C3%ADtulo_zjlgt6.webp",
    },
    {
      name: "mongodb",
      stack: "database",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699565995/mongodb_icon_f6bce347a3_ea4b32e31d.svg",
    },
    {
      name: "mysql",
      stack: "database",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699565996/icons8_logo_de_mysql_abe9310993_ba541e852e.svg",
    },
    {
      name: "postgressql",
      stack: "database",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699565997/icons8_postgresql_f09c7279d7_b38051d989.svg",
    },
    {
      name: "rxjs",
      stack: "library",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699565996/rxjs_bd1e64b62a_660cee7977.svg",
    },
    {
      name: "atroposjs",
      stack: "library",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1705446248/logo_inner_8c03a58de5.svg",
    },
  ]);

  await db.insert(Projects).values([
    {
      name: "delidrinks - ecommerce",
      description:
        "Es un proyecto que realice para la práctica profesional de Teclab, tenía que buscar un emprendimiento y resolver sus necesidades",
      important: true,
      primary: true,
      technologys: [
        "html",
        "sass",
        "primeng",
        "keen-slider",
        "typescript",
        "angular",
        "rxjs",
        "strapi",
        "postgresSQL",
        "swagger",
        "express",
        "axios",
        "mercado pago API",
      ],
      server_status: false,
      client_status: true,
      url: "https://delidrinks.com.ar/",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699565998/209shots_so_1_52a71d4f0b_6f91396d56.jpg",
      reviews: [],
    },
    {
      name: "delatinos - ecommerce",
      description:
        "Proyecto realizado para NoCountry en conjunto de un gran equipo, la realización de este ecommerce para gente latina en el exterior",
      important: true,
      primary: false,
      technologys: [
        "html",
        "scss",
        "keen-slider",
        "primeng",
        "angular material",
        "typescript",
        "angular",
        "rxjs",
        "mysql",
        "java",
        "spring boot",
        "swagger",
      ],
      server_status: true,
      client_status: true,
      url: "https://delidrinks.com.ar/",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699565998/300shots_so_1_747abe463a_f4d1a02ea4.jpg",
      reviews: [],
    },
    {
      name: "tango viajes - ecommerce",
      description:
        "Se trata de un proyecto 'noCountry', en el que trabajamos con un equipo en un entorno real para adquirir experiencia laboral. ",
      important: true,
      primary: false,
      technologys: [
        "html",
        "css",
        "primeng",
        "keen-slider",
        "typescript",
        "nodejs",
        "nodemailer",
        "notiflix",
        "express",
        "java",
        "spring boot",
        "mysql",
      ],
      server_status: false,
      client_status: true,
      url: "https://delidrinks.com.ar/",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699565995/tango_viajes_38251e36e3_8559ed1835.jpg",
      reviews: [],
    },
    {
      name: "giftify",
      description:
        "Es una página web para buscar gifs, utilizando la API de Giphy.",
      important: true,
      primary: false,
      technologys: [
        "html",
        "sass",
        "typescript",
        "angular",
        "primeng",
        "rxjs",
        "strapi",
      ],
      server_status: false,
      client_status: true,
      url: "https://delidrinks.com.ar/",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699566000/giftify_v2_eabe435ea6_d489929737.jpg",
      reviews: [],
    },
    {
      name: "Landing Page YPF ACA",
      description:
        "Landing page desarrollada para una estación de servicio YPF, incluye una sección de registro de hotel, sección de menu y productos.",
      important: true,
      primary: false,
      technologys: [
        "html",
        "sass",
        "typescript",
        "astroJs",
        "astroDB",
        "keen-slider",
        "atroposJs",
      ],
      server_status: true,
      client_status: true,
      url: "https://delidrinks.com.ar/",
      url_image:
        "https://res.cloudinary.com/dw24usdw9/image/upload/v1716689027/352shots_so_gpccj6.webp",
      reviews: [],
    },
    {
      name: "juego del ahorcado",
      description:
        "Es el clásico juego del ahorcado, este es un proyecto de Oracle Next Education.",
      important: true,
      primary: true,
      technologys: ["html", "css", "javascript"],
      // server_status: true,
      client_status: true,
      url: "https://delidrinks.com.ar/",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699565998/juego_ahorcado_715817aab2_76ed799ed5.jpg",
      reviews: [],
    },
    {
      name: "encriptador de texto",
      description:
        "Es un simple encriptador y desencriptador de texto, este es un proyecto de Oracle Next Education",
      important: true,
      primary: true,
      technologys: ["html", "css", "javascript"],
      // server_status: true,
      client_status: true,
      url: "https://delidrinks.com.ar/",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699565997/encriptador_alura_622f020dd1_8993930b17.jpg",
      reviews: [],
    },
    {
      name: "blog",
      description:
        "Este en mi blog personal, donde voy subiendo tecnologías que voy aprendiendo",
      important: true,
      primary: true,
      technologys: [
        "html",
        "sass",
        "typescript",
        "angular",
        "rxjs",
        "strapi",
        "postgresSQL",
        "angular material",
      ],
      // server_status: true,
      client_status: true,
      url: "https://delidrinks.com.ar/",
      url_image:
        "https://res.cloudinary.com/dw24usdw9/image/upload/v1716693608/211shots_so_wxjbqg.webp",
      reviews: [],
    },
  ]);
}
