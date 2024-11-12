import * as moviesFactory from "../factory/movies.factory";
import { database } from "../config/database";
import { movie } from "../schema/movie";
import { eq } from "drizzle-orm/sql/expressions/conditions";

export async function findMovies(cinemaId: number|null, categoryId: number|null, startDate: Date|null, endDate: Date|null) {
    let findMoviesQuery = 'SELECT * FROM "movie"';

    if (cinemaId !== null || (startDate !== null && endDate !== null)) {
        findMoviesQuery += ' INNER JOIN "showtime" ON "showtime"."movieId" = "movie"."id"' +
            ' INNER JOIN "hall" ON "showtime"."hallId" = "hall"."id"';

        if (cinemaId !== null) {
            findMoviesQuery += ` WHERE "hall"."cinemaId" = ${cinemaId}`;
        }

        if (startDate !== null && endDate != null) {
            findMoviesQuery += ` WHERE "showtime"."startTime" >= ${startDate} AND "showtime"."endTime" <= ${endDate}`;
        }
    }

    if (categoryId !== null) {
        findMoviesQuery += ` WHERE "movie"."categoryId" = ${categoryId}`;
    }

    findMoviesQuery += ' ORDER BY "movie"."id" ASC';

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
            .from(movie)
            .where(eq(movie.id, id))
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
        .insert(movie)
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
        .update(movie)
        .set({
            title: title ?? undefined,
            description: description ?? undefined,
            minimumAge: minimumAge ?? undefined,
            favorite: favorite ?? undefined,
            imageURL: imageURL ?? undefined,
            categoryId: categoryId ?? undefined,
        })
        .where(eq(movie.id, id))
        .prepare("updateMovie");

    try {
        await preparedUpdateMovie.execute();
    } catch (error) {
        throw error;
    }
}

export async function deleteMovie(id: number) {
    const preparedDeleteMovie = database
        .delete(movie)
        .where(eq(movie.id, id))
        .prepare("deleteMovie");

    try {
        await preparedDeleteMovie.execute();
    } catch (error) {
        throw error;
    }
}