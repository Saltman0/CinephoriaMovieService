import * as drizzle from "drizzle-orm/pg-core";
import { cinemasTable } from "./cinemas";

export const hallsTable = drizzle.pgTable("halls", {
    id: drizzle.integer().primaryKey().generatedAlwaysAsIdentity(),
    number: drizzle.integer().notNull(),
    projectionQuality: drizzle.varchar(),
    cinemaId: drizzle.integer().references(() => cinemasTable.id, {onDelete: "cascade"}).notNull()
});