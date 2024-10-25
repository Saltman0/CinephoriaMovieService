import { defineConfig } from 'drizzle-kit';

const host: string = process.env["POSTGRES_HOST"] as string;
const user: string = process.env["POSTGRES_USER"] as string;
const password: string = process.env["POSTGRES_PASSWORD"] as string;
const database: string = process.env["POSTGRES_DB"] as string;
const isVerboseEnabled: boolean = process.env["IS_VERBOSE_ENABLED"] === "true";
const isSslEnabled: boolean = process.env["IS_SSL_ENABLED"] === "true";

export default defineConfig({
    out: './migrations',
    schema: './src/db/schema',
    dialect: 'postgresql',
    verbose: isVerboseEnabled,
    dbCredentials: {
        host: host,
        port: 5432,
        user: user,
        password: password,
        database: database,
        ssl: isSslEnabled
    },
    migrations: {
        table: "migrations",
        schema: "public"
    },
    strict: true
});