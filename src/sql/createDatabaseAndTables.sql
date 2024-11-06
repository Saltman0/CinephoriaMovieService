-- Cinéphoria movie service database
DROP DATABASE IF EXISTS "cinephoriaMovieServiceDatabase";
CREATE DATABASE "cinephoriaMovieServiceDatabase";
-- Cinéphoria movie service database

-- Cinemas table
DROP TABLE IF EXISTS cinemas;
CREATE TABLE IF NOT EXISTS cinemas
(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR NOT NULL,
    "address" VARCHAR NOT NULL,
    "postalCode" INTEGER NOT NULL,
    "city" VARCHAR NOT NULL,
    "phoneNumber" VARCHAR NOT NULL,
    "openHour" TIME WITHOUT TIME ZONE NOT NULL,
    "closeHour" TIME WITHOUT TIME ZONE NOT NULL
);
-- Cinemas table

-- Categories table
DROP TABLE IF EXISTS categories;
CREATE TABLE IF NOT EXISTS categories
(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR UNIQUE NOT NULL
);
-- Categories table

-- Movies table
DROP TABLE IF EXISTS movies;
CREATE TABLE IF NOT EXISTS movies
(
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR NOT NULL,
    "description" TEXT NOT NULL,
    "minimumAge" INTEGER,
    "favorite" BOOLEAN,
    "imageURL" VARCHAR UNIQUE NOT NULL,
    "categoryId" INTEGER REFERENCES categories(id) ON UPDATE NO ACTION ON DELETE CASCADE
);
-- Movies table

-- Ratings table
DROP TABLE IF EXISTS ratings;
CREATE TABLE IF NOT EXISTS ratings
(
    "id" SERIAL PRIMARY KEY,
    "number" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "movieId" INTEGER REFERENCES movies(id) ON UPDATE NO ACTION ON DELETE CASCADE
);
-- Ratings table

-- Halls table
DROP TABLE IF EXISTS halls;
CREATE TABLE IF NOT EXISTS halls
(
    "id" SERIAL PRIMARY KEY,
    "number" INTEGER NOT NULL,
    "projectionQuality" VARCHAR,
    "cinemaId" INTEGER REFERENCES cinemas(id) ON UPDATE NO ACTION ON DELETE CASCADE
);
-- Halls table

-- Showtimes table
DROP TABLE IF EXISTS showtimes;
CREATE TABLE IF NOT EXISTS showtimes
(
    "id" SERIAL PRIMARY KEY,
    "startTime" TIMESTAMP NOT NULL,
    "endTime" TIMESTAMP NOT NULL,
    "price" INTEGER NOT NULL,
    "movieId" INTEGER REFERENCES movies(id) ON UPDATE NO ACTION ON DELETE CASCADE,
    "hallId" INTEGER REFERENCES halls(id) ON UPDATE NO ACTION ON DELETE CASCADE
);
-- Showtimes table