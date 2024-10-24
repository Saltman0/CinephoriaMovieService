import * as drizzle from "drizzle-orm/pg-core";
import { categoriesTable } from "./categories";

export const moviesTable = drizzle.pgTable("movies", {
    id: drizzle.integer().primaryKey().generatedAlwaysAsIdentity(),
    title: drizzle.varchar().notNull(),
    description: drizzle.text().notNull(),
    minimumAge: drizzle.integer(),
    favorite: drizzle.boolean(),
    imageURL: drizzle.varchar().unique().notNull(),
    categoryId: drizzle.integer().references(() => categoriesTable.id)
});