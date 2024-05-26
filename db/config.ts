import { column, defineDb, defineTable } from "astro:db";

// https://astro.build/db/config

const Projects = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    description: column.text(),
    important: column.boolean(),
    primary: column.boolean(),
    technologys: column.json(),
    server_status: column.boolean({ optional: true }),
    client_status: column.boolean({ optional: true }),
    url: column.text(),
    url_image: column.text(),
    reviews: column.json(),
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

export default defineDb({
  tables: { Projects, Skills, Certifications },
});
