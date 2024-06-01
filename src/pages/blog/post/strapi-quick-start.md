---
layout: "../../../layouts/PostLayout.astro"
title: "Guía Rápida y de Configuración de Strapi con PostgreSQL"
author: "Fernando Diaz"
description: "Como desarrolladores frontend, a veces nos resulta tedioso crear nuestro backend, preferimos dejar esta tarea a un desarrollador especializado en el rol."
tags: ["Strapi"]
date: 2025-05-31
update_at: 2025-05-31
img: "https://res.cloudinary.com/du04fnqqz/image/upload/v1699903545/17_500_x_414_px_1_145c9f2dd7.jpg"
---

Les traigo una herramienta muy interesante, es Strapi, el CMS sin cabeza que vino a salvar a los frontends.

Strapi es una herramienta que, más allá de ofrecer un gestor de contenido, proporciona un potente administrador para APIs REST y GraphQL, ofreciendo mucha flexibilidad. Ya sea que quieras avanzar rápido y ver rápidamente el resultado final o prefieras profundizar en el producto, para este tutorial, elegiremos crear un proyecto y una estructura de datos desde cero.


> Requisitos previos.
> Antes de instalar Strapi, necesitas instalar los siguientes requisitos en tu computadora:
> - **[Node.js](https://nodejs.org/en)**: Solo se admiten las versiones `Active LTS or Maintenance LTS versions` como v18 (actualmente) y v20. Las versiones impares de Node, conocidas como versiones "current" de Node.js, no son compatibles (por ejemplo, v19, v21).
> - Tu gestor de paquetes de Node.js preferido:
>    - **[npm](https://docs.npmjs.com/cli/v6/commands/npm-install)** ( v6 y superior)
>    - **[yarn](https://yarnpkg.com/getting-started/install)**
> - **[Python](https://www.python.org/downloads/)** (si usas la base de datos SQLite)


## Paso 1: Crear un nuevo proyecto usando la CLI

Ejecuta el siguiente comando en una terminal:

**Yarn:**
```powershell
yarn create strapi-app my-project

//'yarn create' crea un nuevo proyecto
//'strapi-app' el paquete de strapi
//'my-project' el nombre de tu proyecto
```

**npm:**
```powershell
npx create-strapi-app@latest my-project 

//'npx' ejecuta un comando de un paquete npm
//'create-strapi-app' el paquete de strapi
//'@latest' indica que se usa la última versión de strapi
//'my-project' el nombre de tu proyecto
```

En este ejemplo, usaremos yarn, pero si usas npm, es básicamente el mismo proceso.

### Opciones de instalación de la CLI

It also has some flags to choose installation options:

- `--quickstart`: Crea el proyecto directamente en modo quickstart, que usa la base de datos predeterminada (SQLite).
- `--template`:  Crea un proyecto con configuraciones preconfiguradas de Strapi (Ver [Templates](https://docs.strapi.io/dev-docs/templates) ).
- `--typescript / --ts`: Crea un proyecto en [TypeScript](https://docs.strapi.io/dev-docs/typescript).
- `--no-run`: Evita que Strapi inicie automáticamente el servidor (útil en combinación con `--quickstart`).

Para más información sobre las banderas disponibles, consulta la [Documentación del CLI.](https://docs.strapi.io/dev-docs/cli)

## Demostración de Creación del Proyecto

En este caso, mostraré cómo usar PostgreSQL, pero puedes seguir los pasos para cualquier base de datos como MySQL, MariaDB, SQLite. La única no soportada en la versión 4 de Strapi es MongoDB.

## 1. Ejecutar el comando de instalación del CLI

```powershell
yarn create strapi-app my-project
```

## 2. Elegir el tipo de instalación:

En este caso, como queremos usar PostgreSQL, seleccionamos la opción Custom:

![paso1.png](https://res.cloudinary.com/du04fnqqz/image/upload/v1699909307/paso1_0a78b5ff26.png)

## 3. Elegir si usar Javascript o Typescript:

Voy a elegir Typescript:

![paso2.png](https://res.cloudinary.com/du04fnqqz/image/upload/v1699909464/paso2_3c9498f179.png)

## 4. Elegir la base de datos a usar:

Elegiremos PostgreSQL:

![paso3.png](https://res.cloudinary.com/du04fnqqz/image/upload/v1699909466/paso3_c03e041a0b.png)

## 5. Conectar a la base de datos que tienes:

Aquí se trata de ingresar los detalles de conexión para nuestra base de datos (puedes ingresar los detalles de conexión para la base de datos de desarrollo ya que esto puede ser modificado una vez en producción):

- **Nombre de la base de datos**: el nombre de nuestra base de datos.
- **Host**: dónde está alojada, en este caso, la tengo localmente.
- **Puerto**: el puerto, que por defecto en PostgreSQL suele ser 5432, pero en este caso, lo tengo en 5433.
- **Contraseña**:  si has añadido una contraseña.
- **Habilitar conexión SSL**: para habilitar o no el SSL.

![paso9.png](https://res.cloudinary.com/du04fnqqz/image/upload/v1699909470/paso9_7bbb4f6169.png)

## 6. Crear el proyecto con la conexión a la base de datos:

![paso10.png](https://res.cloudinary.com/du04fnqqz/image/upload/v1699909471/paso10_0d0f0c0927.png)

Aquí solo tienes que esperar a que se descarguen las dependencias necesarias y esperar a que se cree el proyecto.

![paso11.png](https://res.cloudinary.com/du04fnqqz/image/upload/v1699909474/paso11_8089b4b277.png)


Una vez creado, accedamos al proyecto a través de la terminal:

```powershell
cd .\my-project\
```

Una vez dentro, ejecuta el siguiente comando para ejecutar nuestro backend:

**yarn**
```powershell
yarn develop
```

**npm**
```powershell
npm run develop
```

Si los detalles de la conexión fueron correctos y se conecta exitosamente a la base de datos, se verá así:

![paso13.png](https://res.cloudinary.com/du04fnqqz/image/upload/v1699909476/paso13_e70710d824.png)

Luego, se abrirá una pestaña en el navegador, donde por primera vez necesitarás ingresar tus datos. Esto es para tener acceso como super administrador y usar el panel integrado que proporciona Strapi:

![2023-11-13 18_28_45-Strapi Admin y 10 páginas más - Personal_ Microsoft​ Edge Dev.png](https://res.cloudinary.com/du04fnqqz/image/upload/v1699911059/2023_11_13_18_28_45_Strapi_Admin_y_10_paginas_mas_Personal_Microsoft_Edge_Dev_3e4895a3b0.png)

Una vez que hayas ingresado tus datos, verás esta última vista donde tienes que seleccionar qué tipo de proyecto trabajarás. Aquí puedes elegir cualquiera, ya que no afecta en nada.

![2023-11-13 18_29_10-Strapi Admin y 10 páginas más - Personal_ Microsoft​ Edge Dev.png](https://res.cloudinary.com/du04fnqqz/image/upload/v1699911059/2023_11_13_18_29_10_Strapi_Admin_y_10_paginas_mas_Personal_Microsoft_Edge_Dev_38e532432e.png)

Con eso, tienes tu backend de Strapi listo para usar. Como puedes ver, tienes un panel disponible para trabajar de manera más cómoda y visual, pero si lo deseas, también puedes escribir código, crear plugins y tener un rango casi ilimitado de opciones.

Tu backend puede ser tan simple o tan robusto como necesites.

![localhost_1337_admin_.png](https://res.cloudinary.com/du04fnqqz/image/upload/v1699911022/localhost_1337_admin_cb8faee6fd.png)

Pronto, en otras publicaciones, profundizaremos en cómo crear una API REST desde cero y hacerla más robusta, así como integrarla con Angular.
