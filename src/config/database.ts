import { drizzle } from 'drizzle-orm/node-postgres';

export const database = drizzle("postgres://"+process.env.POSTGRES_USER+":"+process.env.POSTGRES_PASSWORD+"@"+process.env.POSTGRES_HOST+"/"+process.env.POSTGRES_DB+"?sslmode=require");