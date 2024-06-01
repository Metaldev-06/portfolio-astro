---
layout: "../../../layouts/PostLayout.astro"
title: "Strapi Quick Start And Configuration Guide With Postgresql"
author: "Fernando Diaz"
description: "As frontend developers we sometimes find it tedious to create our backend, we prefer to leave this task to a developer specialized in the role."
tags: ["Javascript"]
date: 2025-05-31
update_at: 2025-05-31
img: "https://res.cloudinary.com/du04fnqqz/image/upload/v1699913484/3_27f1bee86d.jpg"
---

I bring you a very interesting tool, it's Strapi, the headless CMS that came to save frontends.

Strapi is a tool that, beyond offering a content manager, provides a powerful admin for REST and GraphQL APIs, offering a lot of flexibility. Whether you want to go fast and quickly see the end result or prefer to delve into the product, for this tutorial, we will choose to create a project and a data structure from scratch.


> Prerequisites
> Before installing Strapi, you need to install the following requirements on your computer:
> - **[Node.js](https://nodejs.org/en)**: Only `Active LTS or Maintenance LTS versions` are supported, such as v18 (currently) and v20. Odd versions of Node, known as "current" versions of Node.js, are not supported (e.g., v19, v21).
> - Your preferred Node.js package manager:
>    - **[npm](https://docs.npmjs.com/cli/v6/commands/npm-install)** ( v6 and higher)
>    - **[yarn](https://yarnpkg.com/getting-started/install)**
> - **[Python](https://www.python.org/downloads/)** (if using SQLite database)


## Step 1: Create a new project using the CLI

Run the following command in a terminal:

**Yarn:**
```typescript
yarn create strapi-app my-project

//'yarn create' Creates a new project
//'strapi-app' the strapi package
//'my-project' the name of your project
```

**npm:**
```typescript
npx create-strapi-app@latest my-project 

//'npx' runs a command from an npm package
//'create-strapi-app' the strapi package
//'@latest' indicates that the latest version of strapi is used
//'my-project' the name of your project
```

In this example, we'll use yarn, but if you use npm, it's basically the same process.

### CLI installation options

It also has some flags to choose installation options:

- `--quickstart`: Create the project directly in quickstart mode, which uses the default database (SQLite).
- `--template`:  Create a project with preconfigured Strapi settings (see [Templates](https://docs.strapi.io/dev-docs/templates) ).
- `--typescript / --ts`: Create a project in [TypeScript](https://docs.strapi.io/dev-docs/typescript).
- `--no-run`: Prevent Strapi from automatically starting the server (useful in combination with `--quickstart`)

For more information on available flags, see the [CLI documentation.](https://docs.strapi.io/dev-docs/cli)

## Project Creation Demonstration

In this case, I'll show how to use PostgreSQL, but you can follow the steps for any database like MySQL, MariaDB, SQLite. The only unsupported one in version 4 of Strapi is MongoDB.

## 1. Run the CLI installation command

```typescript
yarn create strapi-app my-project
```

## 2. Choose the installation type:

In this case, as we want to use PostgreSQL, we select the Custom option:

![paso1.png](https://res.cloudinary.com/du04fnqqz/image/upload/v1699909307/paso1_0a78b5ff26.png)

## 3. Choose whether to use Javascript or Typescript:

I will choose Typescript:

![paso2.png](https://res.cloudinary.com/du04fnqqz/image/upload/v1699909464/paso2_3c9498f179.png)

## 4. Choose the database to use:

We will choose PostgreSQL:

![paso3.png](https://res.cloudinary.com/du04fnqqz/image/upload/v1699909466/paso3_c03e041a0b.png)

## 5. Connect to the database you have:

Here is a matter of entering the connection details for our database (you can enter the connection details for the development database since this can be modified once in production):

- **Database name**: the name of our database.
- **Host**: where it is hosted, in this case, I have it locally.
- **Port**: the port, which by default in PostgreSQL is usually 5432, but in this case, I have it at 5433.
- **Password**:  if you have added a password.
- **Enable SSL connection**: to enable or not the SSL.

![paso9.png](https://res.cloudinary.com/du04fnqqz/image/upload/v1699909470/paso9_7bbb4f6169.png)

## 6. Create the project with the database connection:

![paso10.png](https://res.cloudinary.com/du04fnqqz/image/upload/v1699909471/paso10_0d0f0c0927.png)

Here, you just have to wait for the necessary dependencies to be downloaded and wait for the project to be created.

![paso11.png](https://res.cloudinary.com/du04fnqqz/image/upload/v1699909474/paso11_8089b4b277.png)


Once created, let's access the project through the terminal

```typescript
cd .\my-project\
```

Once inside, run the following command to run our backend:

**yarn**
```typescript
yarn develop
```

**npm**
```typescript
npm run develop
```

If the connection details were correct and it successfully connects to the database, it will look like this:

![paso13.png](https://res.cloudinary.com/du04fnqqz/image/upload/v1699909476/paso13_e70710d824.png)

Then, a tab will open in the browser, where the first time you will need to enter your data. This is to have access as a super admin and use the integrated dashboard provided by Strapi:

![2023-11-13 18_28_45-Strapi Admin y 10 páginas más - Personal_ Microsoft​ Edge Dev.png](https://res.cloudinary.com/du04fnqqz/image/upload/v1699911059/2023_11_13_18_28_45_Strapi_Admin_y_10_paginas_mas_Personal_Microsoft_Edge_Dev_3e4895a3b0.png)

Once you have entered your data, you will see this last view where you have to select what type of project you will work on. Here you can choose any since it does not affect anything.

![2023-11-13 18_29_10-Strapi Admin y 10 páginas más - Personal_ Microsoft​ Edge Dev.png](https://res.cloudinary.com/du04fnqqz/image/upload/v1699911059/2023_11_13_18_29_10_Strapi_Admin_y_10_paginas_mas_Personal_Microsoft_Edge_Dev_38e532432e.png)

With that, you have your Strapi backend ready to use. As you can see, you have a dashboard available to work more comfortably and visually, but if you wish, you can also write code, create plugins, and have an almost limitless range of options.

Your backend can be as simple or as robust as you need.

![localhost_1337_admin_.png](https://res.cloudinary.com/du04fnqqz/image/upload/v1699911022/localhost_1337_admin_cb8faee6fd.png)

Soon, in other publications, we will go more in-depth on how to create a REST API from scratch and make it more robust, as well as integrate it with Angular.

<style>
    img {
        width: 200px
    }
</style>