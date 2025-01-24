import { Request, Response } from "express";
import * as movieRepository from "../repository/movie.repository";
import { publishMessage } from "../rabbitmq";

export async function getMovies(req: Request, res: Response) {
    try {
        const movies = await movieRepository.findMovies();

        res.status(200).json(movies);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function getLastMovies(req: Request, res: Response) {
    try {
        const lastMovies = await movieRepository.findLastMovies(
            parseInt(<string>req.query.limit)
        );

        res.status(200).json(lastMovies);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function getFavoriteMovies(req: Request, res: Response) {
    try {
        const favoriteMovies = await movieRepository.findFavoriteMovies(
            parseInt(<string>req.query.limit)
        );

        res.status(200).json(favoriteMovies);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function getMovieById(req: Request, res: Response) {
    try {
        const movie = await movieRepository.findMovieById(
            parseInt(req.params.movieId)
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
        const movieToCreate = await movieRepository.insertMovie(
            req.body.title,
            req.body.description,
            req.body.minimumAge,
            req.body.favorite,
            req.body.imageURL,
            parseInt(req.body.categoryId)
        );

        await publishMessage("movie", JSON.stringify({ type: "movie", event: "create", body: movieToCreate }));

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
            parseInt(req.params.movieId),
            req.body.title,
            req.body.description,
            req.body.minimumAge,
            req.body.favorite,
            req.body.imageURL,
            req.body.categoryId ? parseInt(req.body.categoryId) : null
        );

        await publishMessage("movie", JSON.stringify({ type: "movie", event: "update", body: movieToUpdate }));

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
            parseInt(req.params.movieId)
        );

        await publishMessage("movie", JSON.stringify({ type: "movie", event: "delete", body: movieToDelete }));

        res.status(200).json({ message: "Movie deleted successfully." });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}