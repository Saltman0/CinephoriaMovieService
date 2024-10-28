import * as drizzle from "drizzle-orm/pg-core";

export const cinemasTable = drizzle.pgTable("cinemas", {
    id: drizzle.integer().primaryKey().generatedAlwaysAsIdentity(),
    name: drizzle.varchar().notNull(),
    adress: drizzle.varchar().notNull(),
    phoneNumber: drizzle.varchar().notNull(),
    openHour: drizzle.time().notNull(),
    closeHour: drizzle.time().notNull()
});