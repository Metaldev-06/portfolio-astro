import { Certifications, db, Projects, Skills } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  // TODO

  await db.insert(Certifications).values([
    {
      name: "Técnico Superior en Programación",
      url_image:
        "https://res.cloudinary.com/dw24usdw9/image/upload/v1716753443/titulo-programacion_t20ciy.png",
      className: "tecnico-superior-programacion",
    },
    {
      name: "Angular Intermedio",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699565995/medium_udemy_angular_intermedio_3b5b21b1a1_6a731e4ae9.png",
      className: "angular-intermedio",
    },
    {
      name: "Angular de cero a experto",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699565995/medium_udemy_angular_f6fc52c060_35b108336b.jpg",
      className: "angular-de-cero-a-experto",
    },
    {
      name: "Desarrollo Frontend con Angular",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1705509384/medium_Captura_de_pantalla_2024_01_17_133418_944bc88b99.png",
      className: "desarrollo-frontend-con-angular",
    },
    {
      name: "Certificado de Nocountry",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699566005/medium_no_country_a0d794d043_258aad7bca.jpg",
      className: "certificado-de-nocountry",
    },
    {
      name: "Desarrollo Personal Oracle Next Education",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699566002/medium_one_oracle_next_education_desarrollo_profesional_c8eddc36ca_6a21cc41e0.png",
      className: "desarrollo-personal-oracle-next-education",
    },
    {
      name: "Frontend G3 Oracle Next Education",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699566002/medium_one_oracle_next_education_front_end_d23cc73b04_ddd67ed2b5.png",
      className: "frontend-g3-oracle-next-education",
    },
    {
      name: "Java Orientado a Objetos Oracle Next Education",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699566002/medium_one_oracle_next_education_java_91d16e6158_905d4be0be.png",
      className: "java-orientado-a-objetos-oracle-next-education",
    },
    {
      name: "Finalización del Programa Oracle Next Education",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699566000/medium_one_oracle_next_education_07a25afce9_6cd6166af0.png",
      className: "finalizacion-del-programa-oracle-next-education",
    },
    {
      name: "Principiante en Programación Oracle Next Education",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699566002/medium_one_oracle_next_education_principiante_en_programacion_54aae48286_16934c5d9f.png",
      className: "principiante-en-programacion-oracle-next-education",
    },
    {
      name: "Diseño Web NUCBA",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699566000/medium_nucba_diseno_web_f7934eef7d_cc9da732ca.png",
      className: "diseño-web-nucba",
    },
    {
      name: "Desarrollador JavaScript NUCBA",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699565999/medium_nucba_javascript_8a169ab2ff_6564bf3e2a.png",
      className: "desarrollador-javascript-nucba",
    },
    {
      name: "Master en Typescript Javascript moderno",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699565995/medium_udemy_master_en_typescript_3f1315dc9b_c4962ccc23.jpg",
      className: "master-en-typescript-javascript-moderno",
    },
    {
      name: "Master en Webs Full Stack",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699565995/medium_udemy_master_en_webs_full_stack_15b27dea3e_041c280049.jpg",
      className: "master-en-webs-full-stack",
    },
    {
      name: "Node de Cero a Experto",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1700056883/medium_2023_11_14_13_04_38_Certificado_de_finalizacion_del_curso_de_Udemy_Udemy_y_13_paginas_mas_Person_8190a9c3a2.png",
      className: "node-de-cero-a-experto",
    },
    {
      name: "Bootstrap 5 Desde Cero a Experto",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699565995/medium_udemy_angular_bootstrap_desde_0_476fa5f82f_d8380fddf7.jpg",
      className: "bootstrap-5-desde-cero-a-experto",
    },
    {
      name: "FreecodeCamp Responsive Web Design",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699566000/medium_free_code_camp_1915b84db3_ebc4bfc06e.png",
      className: "freecodecamp-responsive-web-design",
    },
  ]);

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
      name: "Delidrinks - Ecommerce",
      slug: "delidrinks",
      description:
        "Es un proyecto que realice para la práctica profesional de Teclab, tenía que buscar un emprendimiento y resolver sus necesidades",
      important: true,
      primary: true,
      technologies: [
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
    },
    {
      name: "Delatinos - Ecommerce",
      slug: "delatinos",
      description:
        "Proyecto realizado para NoCountry en conjunto de un gran equipo, la realización de este ecommerce para gente latina en el exterior",
      important: true,
      primary: true,
      technologies: [
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
    },
    {
      name: "Tango Viajes - Ecommerce",
      slug: "tango-viajes",
      description:
        "Se trata de un proyecto 'noCountry', en el que trabajamos con un equipo en un entorno real para adquirir experiencia laboral. ",
      important: true,
      primary: false,
      technologies: [
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
    },
    {
      name: "Giftify",
      slug: "giftify",
      description:
        "Es una página web para buscar gifs, utilizando la API de Giphy.",
      important: true,
      primary: true,
      technologies: [
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
    },
    {
      name: "Landing Page YPF ACA",
      slug: "ypf",
      description:
        "Landing page desarrollada para una estación de servicio YPF, incluye una sección de registro de hotel, sección de menu y productos.",
      important: true,
      primary: false,
      technologies: [
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
    },
    {
      name: "Blog",
      slug: "blog",
      description:
        "Este en mi blog personal, donde voy subiendo tecnologías que voy aprendiendo",
      important: true,
      primary: true,
      technologies: [
        "html",
        "sass",
        "typescript",
        "angular",
        "rxjs",
        "strapi",
        "postgresSQL",
        "angular material",
      ],
      server_status: true,
      client_status: true,
      url: "https://delidrinks.com.ar/",
      url_image:
        "https://res.cloudinary.com/dw24usdw9/image/upload/v1716693608/211shots_so_wxjbqg.webp",
    },
    {
      name: "juego del ahorcado",
      slug: "juego-ahorcado",
      description:
        "Es el clásico juego del ahorcado, este es un proyecto de Oracle Next Education.",
      important: true,
      primary: false,
      technologies: ["html", "css", "javascript"],
      // server_status: true,
      client_status: true,
      url: "https://delidrinks.com.ar/",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699565998/juego_ahorcado_715817aab2_76ed799ed5.jpg",
    },
    {
      name: "encriptador de texto",
      slug: "encriptador-de-texto",
      description:
        "Es un simple encriptador y desencriptador de texto, este es un proyecto de Oracle Next Education",
      important: true,
      primary: false,
      technologies: ["html", "css", "javascript"],
      // server_status: true,
      client_status: true,
      url: "https://delidrinks.com.ar/",
      url_image:
        "https://res.cloudinary.com/du04fnqqz/image/upload/v1699565997/encriptador_alura_622f020dd1_8993930b17.jpg",
    },
  ]);
}
