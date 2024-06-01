import { NOW, column, defineDb, defineTable } from "astro:db";

// https://astro.build/db/config

const Projects = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    slug: column.text(),
    description: column.text(),
    important: column.boolean(),
    primary: column.boolean(),
    technologies: column.json(),
    server_status: column.boolean({ optional: true }),
    client_status: column.boolean({ optional: true }),
    url: column.text(),
    url_image: column.text(),
  },
});

const Skills = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    stack: column.text(),
    url_image: column.text(),
  },
});

const Certifications = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    url_image: column.text(),
    className: column.text(),
  },
});

const Posts = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text({ optional: false }),
    description: column.text({ optional: false }),
    url_image: column.text({ optional: false }),
    date: column.date({ default: NOW }),
    updated_at: column.date({ optional: true }),
    body: column.text({ optional: false }),
  },
});

export default defineDb({
  tables: { Projects, Skills, Certifications, Posts },
});
