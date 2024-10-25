CREATE TABLE IF NOT EXISTS "categories" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "categories_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar NOT NULL,
	CONSTRAINT "categories_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "movies" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "movies_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"title" varchar NOT NULL,
	"description" text NOT NULL,
	"minimumAge" integer,
	"favorite" boolean,
	"imageURL" varchar NOT NULL,
	"categoryId" integer,
	CONSTRAINT "movies_imageURL_unique" UNIQUE("imageURL")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ratings" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "ratings_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"number" integer NOT NULL,
	"description" text NOT NULL,
	"movieId" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "showtimes" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "showtimes_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"startTime" date NOT NULL,
	"endTime" date NOT NULL,
	"price" integer NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "movies" ADD CONSTRAINT "movies_categoryId_categories_id_fk" FOREIGN KEY ("categoryId") REFERENCES "public"."categories"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ratings" ADD CONSTRAINT "ratings_movieId_movies_id_fk" FOREIGN KEY ("movieId") REFERENCES "public"."movies"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
