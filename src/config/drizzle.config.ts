import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    out: './migrations',
    schema: './src/db/schema',
    dialect: 'postgresql',
    verbose: process.env["IS_VERBOSE_ENABLED"] === "true",
    dbCredentials: {
        host: process.env["POSTGRES_HOST"] as string,
        port: 5432,
        user: process.env["POSTGRES_USER"] as string,
        password: process.env["POSTGRES_PASSWORD"] as string,
        database: process.env["POSTGRES_DB"] as string,
        ssl: process.env["IS_SSL_ENABLED"] === "true"
    }
});