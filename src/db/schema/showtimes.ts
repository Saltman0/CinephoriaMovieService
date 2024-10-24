import * as drizzle from "drizzle-orm/pg-core";

export const showtimesTable = drizzle.pgTable("showtimes", {
    id: drizzle.integer().primaryKey().generatedAlwaysAsIdentity(),
    startTime: drizzle.date().notNull(),
    endTime: drizzle.date().notNull(),
    price: drizzle.integer().notNull()
});