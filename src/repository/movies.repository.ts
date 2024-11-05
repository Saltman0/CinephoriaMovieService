import * as moviesFactory from "../factory/movies.factory";
import { database } from "../config/database";
import { moviesTable } from "../schema/movies";
import { eq } from "drizzle-orm/sql/expressions/conditions";
import { logger } from "../app";

export async function findMovies(cinemaId: number|null, categoryId: number|null, startDate: Date|null, endDate: Date|null) {
    let findMoviesQuery = "SELECT * FROM movies";

    if (cinemaId !== null || (startDate !== null && endDate !== null)) {
        findMoviesQuery += " INNER JOIN showtimes ON showtimes.movieId = movies.id" +
            " INNER JOIN halls ON showtimes.hallId = halls.id";

        if (cinemaId !== null) {
            findMoviesQuery += ` WHERE halls.cinemaId = ${cinemaId}`;
        }

        if (startDate !== null && endDate != null) {
            findMoviesQuery += ` WHERE showtimes.startTime >= ${startDate} AND showtimes.endTime <= ${endDate}`;
        }
    }

    if (categoryId !== null) {
        findMoviesQuery += ` WHERE movies.categoryId = ${cinemaId}`;
    }

    try {
        let result = await database.execute(findMoviesQuery);

        if (result.rows.length === 0) {
            return null;
        }

        return result.rows;
    } catch (error) {
        logger.error("Find movies : " + error);
        throw error;
    }
}

export async function findMovieById(id: number) {
    try {
        const result = await database
            .select()
            .from(moviesTable)
            .where(eq(moviesTable.id, id))
            .prepare("findMovieById")
            .execute();

        if (result.length === 0) {
            return null;
        }

        return result;
    } catch (error) {
        logger.error("Find movie by ID : " + error);
        throw error;
    }
}

export async function insertMovie(title: string, description: string, minimumAge: number, favorite: boolean, imageURL: string, categoryId: number) {
    const preparedInsertMovie = database
        .insert(moviesTable)
        .values(moviesFactory.createMovie(title, description, minimumAge, favorite, imageURL, categoryId))
        .prepare("insertMovie");

    try {
        await preparedInsertMovie.execute();
    } catch (error) {
        logger.error("Insert movie : " + error);
        throw error;
    }
}

export async function updateMovie(id: number, title: string, description: string, minimumAge: number, favorite: boolean, imageURL: string, categoryId: number) {
    const preparedUpdateMovie = database
        .update(moviesTable)
        .set({
            title: title,
            description: description,
            minimumAge: minimumAge,
            favorite: favorite,
            imageURL: imageURL,
            categoryId: categoryId
        })
        .where(eq(moviesTable.id, id))
        .prepare("updateMovie");

    try {
        await preparedUpdateMovie.execute();
    } catch (error) {
        logger.error("Update movie : " + error);
        throw error;
    }
}

export async function deleteMovie(id: number) {
    const preparedDeleteMovie = database
        .delete(moviesTable)
        .where(eq(moviesTable.id, id))
        .prepare("deleteMovie");

    try {
        await preparedDeleteMovie.execute();
    } catch (error) {
        logger.error("Delete movie : " + error);
        throw error;
    }
}