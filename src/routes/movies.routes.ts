import { Router } from 'express';
import * as moviesController from '../controllers/movies.controller';

const router: Router = Router();

router.get("/movies", moviesController.getMovies);
router.get("/movies/:id", moviesController.getMovieById);
router.post("/movies", moviesController.createMovie);
router.put("/movies/:id", moviesController.updateMovie);
router.delete("/movies/:id", moviesController.deleteMovie);

export default router;