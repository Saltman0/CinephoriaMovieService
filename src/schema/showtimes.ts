import * as drizzle from "drizzle-orm/pg-core";
import { moviesTable } from "./movies";
import { hallsTable } from "./halls";

export const showtimesTable = drizzle.pgTable("showtimes", {
    id: drizzle.integer().primaryKey().generatedAlwaysAsIdentity(),
    startTime: drizzle.timestamp().notNull(),
    endTime: drizzle.timestamp().notNull(),
    price: drizzle.integer().notNull(),
    movieId: drizzle.integer().references(() => moviesTable.id, {onDelete: "cascade"}).notNull(),
    hallId: drizzle.integer().references(() => hallsTable.id, {onDelete: "cascade"}).notNull()
});