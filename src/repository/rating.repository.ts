import {database} from "../config/database";
import {eq} from "drizzle-orm/sql/expressions/conditions";
import {asc} from "drizzle-orm/sql/expressions/select";
import {rating} from "../schema/rating";
import * as ratingFactory from "../factory/rating.factory";

export async function findRatings(movieId: number|null) {
    try {
        if (movieId === null) {
            return await database
                .select()
                .from(rating)
                .orderBy(asc(rating.id));
        }

        return await database
            .select()
            .from(rating)
            .where(eq(rating.movieId, movieId))
            .orderBy(asc(rating.id));
    } catch (error) {
        throw error;
    }
}

export async function findRatingById(id: number) {
    try {
        const result = await database
            .select()
            .from(rating)
            .where(eq(rating.id, id));

        if (result.length === 0) {
            return null;
        }

        return result[0];
    } catch (error) {
        throw error;
    }
}

export async function insertRating(
    number: number,
    description: string,
    validated: boolean,
    movieId: number,
    userId: number
) {
    try {
        const preparedInsertRating = await database
            .insert(rating)
            .values(ratingFactory.createRating(number, description, validated, movieId, userId))
            .returning();

        return preparedInsertRating[0];
    } catch (error) {
        throw error;
    }
}

export async function updateRating(
    id: number,
    number: number,
    description: string,
    validated: boolean,
    movieId: number,
    userId: number
) {
    try {
        const preparedUpdateRating = await database
            .update(rating)
            .set(ratingFactory.createRating(number, description, validated, movieId, userId))
            .where(eq(rating.id, id))
            .returning();

        return preparedUpdateRating[0];
    } catch (error) {
        throw error;
    }
}

export async function deleteRating(id: number) {
    try {
        const preparedDeleteRating = await database
            .delete(rating)
            .where(eq(rating.id, id))
            .returning({id: rating.id});

        return preparedDeleteRating[0];
    } catch (error) {
        throw error;
    }
}