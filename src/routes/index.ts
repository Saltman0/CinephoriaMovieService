import { Router } from "express";
import moviesRoutes from "./movies.routes";

const router: Router = Router();

router.use("/movies", moviesRoutes);