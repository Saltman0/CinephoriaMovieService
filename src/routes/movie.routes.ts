import { Router } from 'express';
import * as movieController from '../controllers/movie.controller';
import passport from "../middleware/passport";
import {getFavoriteMovies, getLastMovies} from "../controllers/movie.controller";

const router: Router = Router();

router.get("/movie", passport.authenticate("jwt", { session: false }), movieController.getMovies);
router.get("/movie/last-movies", passport.authenticate("jwt", { session: false }), movieController.getLastMovies);
router.get("/movie/favorite-movies", passport.authenticate("jwt", { session: false }), movieController.getFavoriteMovies);
router.get("/movie/:id", passport.authenticate("jwt", { session: false }), movieController.getMovieById);
router.post("/movie", passport.authenticate("jwt", { session: false }), movieController.createMovie);
router.put("/movie/:id", passport.authenticate("jwt", { session: false }), movieController.updateMovie);
router.delete("/movie/:id", passport.authenticate("jwt", { session: false }), movieController.deleteMovie);

export default router;