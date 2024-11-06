import * as drizzle from "drizzle-orm/pg-core";
import { movie } from "./movie";

export const rating = drizzle.pgTable("rating", {
    id: drizzle.integer().primaryKey().generatedAlwaysAsIdentity(),
    number: drizzle.integer().notNull(),
    description: drizzle.text().notNull(),
    movieId: drizzle.integer().references(() => movie.id, {onDelete: "cascade"}).notNull()
});