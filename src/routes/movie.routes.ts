import { Router } from 'express';
import * as movieController from '../controllers/movie.controller';
import passport from "../middleware/passport";

const router: Router = Router();

router.get("/movie", movieController.getMovies);
router.get("/movie/last-movies", movieController.getLastMovies);
router.get("/movie/favorite-movies", movieController.getFavoriteMovies);
router.get("/movie/:movieId", movieController.getMovieById);
router.post("/movie", passport.authenticate("jwt", { session: false }), movieController.createMovie);
router.put("/movie/:movieId", passport.authenticate("jwt", { session: false }), movieController.updateMovie);
router.delete("/movie/:movieId", passport.authenticate("jwt", { session: false }), movieController.deleteMovie);

export default router;