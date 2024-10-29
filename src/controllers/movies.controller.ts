import { Request, Response } from "express";
import * as moviesRepository from "../repository/movies.repository";

export async function getMovies(req: Request, res: Response) {
    try {
        const movies = await moviesRepository.findMovies(
            parseInt(req.params.cinemaId), parseInt(req.params.categoryId),
            new Date(req.params.startDate), new Date(req.params.endDate)
        );
        res.status(200).json(movies);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function getMovieById(req: Request, res: Response) {
    try {
        const movie = await moviesRepository.findMovieById(
            parseInt(req.params.id)
        );
        res.status(200).json(movie);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function createMovie(req: Request, res: Response) {
    try {
        const movieToCreate = await moviesRepository.insertMovie(
            req.body.title,
            req.body.description,
            req.body.minimumAge,
            req.body.favorite,
            req.body.imageURL,
            parseInt(req.params.categoryId)
        );
        res.status(200).json(movieToCreate);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function updateMovie(req: Request, res: Response) {
    try {
        const movieToUpdate = await moviesRepository.updateMovie(
            parseInt(req.params.id),
            req.body.title,
            req.body.description,
            req.body.minimumAge,
            req.body.favorite,
            req.body.imageURL,
            parseInt(req.params.categoryId)
        );
        res.status(200).json(movieToUpdate);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function deleteMovie(req: Request, res: Response) {
    try {
        const movieToDelete = await moviesRepository.deleteMovie(
            parseInt(req.params.id)
        );
        res.status(200).json(movieToDelete);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}