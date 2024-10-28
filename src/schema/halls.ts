import * as drizzle from "drizzle-orm/pg-core";
import { showtimesTable } from "./showtimes";
import { cinemasTable } from "./cinemas";

export const hallsTable = drizzle.pgTable("halls", {
    id: drizzle.integer().primaryKey().generatedAlwaysAsIdentity(),
    number: drizzle.integer().notNull(),
    projectionQuality: drizzle.varchar(),
    showId: drizzle.integer().references(() => showtimesTable.id),
    cinemaId: drizzle.integer().references(() => cinemasTable.id)
});