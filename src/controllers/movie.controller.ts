import { Request, Response } from "express";
import * as movieRepository from "../repository/movie.repository";

export async function getMovies(req: Request, res: Response) {
    try {
        const movies = await movieRepository.findMovies(
            req.params.cinemaId ? parseInt(req.params.cinemaId) : null,
            req.params.categoryId ? parseInt(req.params.categoryId) : null,
            req.params.startDate ? new Date(req.params.startDate) : null,
            req.params.endDate ? new Date(req.params.endDate) : null
        );

        if (movies !== null) {
            res.status(200).json(movies);
        } else {
            res.status(404).json({error : `Movies not found.`});
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function getMovieById(req: Request, res: Response) {
    try {
        const movie = await movieRepository.findMovieById(
            parseInt(req.params.id)
        );

        if (movie !== null) {
            res.status(200).json(movie);
        } else {
            res.status(404).json({error : `Movie ${req.params.id} not found.`});
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function createMovie(req: Request, res: Response) {
    try {
        const movieToCreate = await movieRepository.insertMovie(
            req.body.title,
            req.body.description,
            req.body.minimumAge,
            req.body.favorite,
            req.body.imageURL,
            parseInt(req.body.categoryId)
        );

        res.status(201).json(movieToCreate);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function updateMovie(req: Request, res: Response) {
    try {
        const movieToUpdate = await movieRepository.updateMovie(
            parseInt(req.params.id),
            req.body.title,
            req.body.description,
            req.body.minimumAge,
            req.body.favorite,
            req.body.imageURL,
            req.body.categoryId ? parseInt(req.body.categoryId) : null
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
        const movieToDelete = await movieRepository.deleteMovie(
            parseInt(req.params.id)
        );

        res.status(200).json(movieToDelete);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}