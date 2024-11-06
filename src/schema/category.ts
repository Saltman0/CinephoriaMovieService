import * as drizzle from "drizzle-orm/pg-core";

export const category = drizzle.pgTable("category", {
    id: drizzle.integer().primaryKey().generatedAlwaysAsIdentity(),
    name: drizzle.varchar().unique().notNull()
});