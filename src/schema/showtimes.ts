import * as drizzle from "drizzle-orm/pg-core";
import { moviesTable } from "./movies";

export const showtimesTable = drizzle.pgTable("showtimes", {
    id: drizzle.integer().primaryKey().generatedAlwaysAsIdentity(),
    startTime: drizzle.date().notNull(),
    endTime: drizzle.date().notNull(),
    price: drizzle.integer().notNull(),
    movieId: drizzle.integer().references(() => moviesTable.id, {onDelete: "cascade"}).notNull()
});