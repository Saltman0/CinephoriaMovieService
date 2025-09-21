DROP TABLE IF EXISTS rating;
DROP TABLE IF EXISTS movie;
DROP TABLE IF EXISTS category;

-- Category table
CREATE TABLE IF NOT EXISTS category
(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR UNIQUE NOT NULL
);
-- Category table

-- Movie table
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
CREATE TABLE IF NOT EXISTS rating
(
    "id" SERIAL PRIMARY KEY,
    "number" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "validated" BOOLEAN NOT NULL,
    "movieId" INTEGER REFERENCES movie(id) ON UPDATE NO ACTION ON DELETE CASCADE,
    "userId" INTEGER NOT NULL
);
-- Rating table