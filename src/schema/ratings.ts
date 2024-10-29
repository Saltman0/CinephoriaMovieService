import * as drizzle from "drizzle-orm/pg-core";
import { moviesTable } from "./movies";

export const ratingsTable = drizzle.pgTable("ratings", {
    id: drizzle.integer().primaryKey().generatedAlwaysAsIdentity(),
    number: drizzle.integer().notNull(),
    description: drizzle.text().notNull(),
    movieId: drizzle.integer().references(() => moviesTable.id, {onDelete: "cascade"}).notNull()
});