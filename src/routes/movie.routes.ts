import { Router } from 'express';
import * as movieController from '../controllers/movie.controller';

const router: Router = Router();

router.get("/movie", movieController.getMovies);
router.get("/movie/:id", movieController.getMovieById);
router.post("/movie", movieController.createMovie);
router.put("/movie/:id", movieController.updateMovie);
router.delete("/movie/:id", movieController.deleteMovie);

export default router;