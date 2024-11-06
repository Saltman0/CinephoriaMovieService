import * as moviesFactory from "../factory/movies.factory";
import { database } from "../config/database";
import { moviesTable } from "../schema/movies";
import { eq } from "drizzle-orm/sql/expressions/conditions";

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

    findMoviesQuery += " ORDER BY movies.id ASC";

    try {
        let result = await database.execute(findMoviesQuery);

        if (result.rows.length === 0) {
            return null;
        }

        return result.rows;
    } catch (error) {
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
        throw error;
    }
}

export async function updateMovie(id: number, title: string|null, description: string|null, minimumAge: number|null, favorite: boolean|null, imageURL: string|null, categoryId: number|null) {
    const preparedUpdateMovie = database
        .update(moviesTable)
        .set({
            title: title ?? undefined,
            description: description ?? undefined,
            minimumAge: minimumAge ?? undefined,
            favorite: favorite ?? undefined,
            imageURL: imageURL ?? undefined,
            categoryId: categoryId ?? undefined,
        })
        .where(eq(moviesTable.id, id))
        .prepare("updateMovie");

    try {
        await preparedUpdateMovie.execute();
    } catch (error) {
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
        throw error;
    }
}