import * as drizzle from "drizzle-orm/pg-core";

export const categoriesTable = drizzle.pgTable("categories", {
    id: drizzle.integer().primaryKey().generatedAlwaysAsIdentity(),
    name: drizzle.varchar().unique().notNull()
});