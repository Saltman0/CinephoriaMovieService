-- Category table
DROP TABLE IF EXISTS category;
CREATE TABLE IF NOT EXISTS category
(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR UNIQUE NOT NULL
);
-- Category table

-- Movie table
DROP TABLE IF EXISTS movie;
CREATE TABLE IF NOT EXISTS movie
(
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR NOT NULL,
    "description" TEXT NOT NULL,
    "minimumAge" INTEGER,
    "favorite" BOOLEAN,
    "imageURL" VARCHAR UNIQUE NOT NULL,
    "categoryId" INTEGER REFERENCES category(id) ON UPDATE NO ACTION ON DELETE CASCADE
);
-- Movie table

-- Rating table
DROP TABLE IF EXISTS rating;
CREATE TABLE IF NOT EXISTS rating
(
    "id" SERIAL PRIMARY KEY,
    "number" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "movieId" INTEGER REFERENCES movie(id) ON UPDATE NO ACTION ON DELETE CASCADE
);
-- Rating table