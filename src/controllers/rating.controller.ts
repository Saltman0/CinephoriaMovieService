import { Request, Response } from "express";
import * as ratingRepository from "../repository/rating.repository";

export async function getRatings(req: Request, res: Response) {
    try {
        let movieId: string|null = <string>req.query.movieId ?? null;

        const ratings = await ratingRepository.findRatings(
            movieId !== null ? parseInt(movieId) : null
        );

        res.status(200).json(ratings);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function getRatingById(req: Request, res: Response) {
    try {
        const rating = await ratingRepository.findRatingById(
            parseInt(req.params.ratingId)
        );

        res.status(200).json(rating);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function createRating(req: Request, res: Response) {
    try {
        const ratingToCreate = await ratingRepository.insertRating(
            req.body.number,
            req.body.description,
            req.body.validated,
            parseInt(req.body.movieId),
            parseInt(req.body.userId)
        );

        res.status(201).json(ratingToCreate);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function updateRating(req: Request, res: Response) {
    try {
        const ratingToUpdate = await ratingRepository.updateRating(
            parseInt(req.params.ratingId),
            req.body.number,
            req.body.description,
            req.body.validated,
            parseInt(req.body.movieId),
            parseInt(req.body.userId)
        );

        res.status(200).json(ratingToUpdate);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function deleteRating(req: Request, res: Response) {
    try {
        await ratingRepository.deleteRating(parseInt(req.params.ratingId));

        res.status(200).json({ message: "Rating deleted successfully." });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}