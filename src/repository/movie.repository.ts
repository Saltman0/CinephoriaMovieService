import * as movieFactory from "../factory/movie.factory";
import { database } from "../config/database";
import { movie } from "../schema/movie";
import { eq } from "drizzle-orm/sql/expressions/conditions";
import { asc, desc } from "drizzle-orm/sql/expressions/select";

export async function findMovies(categoryId: number|null) {
    try {
        if (categoryId !== null) {
            return await database
                .select()
                .from(movie)
                .where(eq(movie.categoryId, categoryId))
                .orderBy(asc(movie.id));
        }

        return await database
            .select()
            .from(movie)
            .orderBy(asc(movie.id));
    } catch (error) {
        throw error;
    }
}

export async function findLastMovies(limit: number = 7) {
    try {
        return await database
            .select()
            .from(movie)
            .limit(limit)
            .orderBy(desc(movie.id));
    } catch (error) {
        throw error;
    }
}

export async function findFavoriteMovies(limit: number = 7) {
    try {
        return await database
            .select()
            .from(movie)
            .where(eq(movie.favorite, true))
            .limit(limit)
            .orderBy(desc(movie.id));
    } catch (error) {
        throw error;
    }
}

export async function findMovieById(id: number) {
    try {
        const result = await database
            .select()
            .from(movie)
            .where(eq(movie.id, id));

        if (result.length === 0) {
            return null;
        }

        return result[0];
    } catch (error) {
        throw error;
    }
}

export async function insertMovie(title: string, description: string, minimumAge: number, favorite: boolean, imageURL: string, categoryId: number) {
    try {
        const preparedInsertMovie = await database
            .insert(movie)
            .values(movieFactory.createMovie(title, description, minimumAge, favorite, imageURL, categoryId))
            .returning();

        return preparedInsertMovie[0];
    } catch (error) {
        throw error;
    }
}

export async function updateMovie(id: number, title: string|null, description: string|null, minimumAge: number|null, favorite: boolean|null, imageURL: string|null, categoryId: number|null) {
    try {
        const preparedUpdateMovie = await database
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
            .returning();

        return preparedUpdateMovie[0];
    } catch (error) {
        throw error;
    }
}

export async function deleteMovie(id: number) {
    try {
        const preparedDeleteMovie = await database
            .delete(movie)
            .where(eq(movie.id, id))
            .returning({ id: movie.id });

        return preparedDeleteMovie[0];
    } catch (error) {
        throw error;
    }
}