import { Router } from 'express';
import * as moviesController from '../controllers/movies.controller';

const router: Router = Router();

router.get("/", moviesController.getMovies);
router.get("/:id", moviesController.getMovieById);
router.post("/", moviesController.createMovie);
router.put("/:id", moviesController.updateMovie);
router.delete("/:id", moviesController.deleteMovie);

export default router;