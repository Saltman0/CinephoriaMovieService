import { Router } from 'express';
import passport from "../middleware/passport";
import * as ratingController from '../controllers/rating.controller';

const router: Router = Router();

router.get("/rating", ratingController.getRatings);
router.get("/rating/:ratingId", ratingController.getRatingById);
router.post(
    "/rating",
    passport.authenticate("jwt", { session: false }),
    ratingController.createRating
);
router.put(
    "/rating/:ratingId",
    passport.authenticate("jwt", { session: false }),
    ratingController.updateRating
);
router.delete(
    "/rating/:ratingId",
    passport.authenticate("jwt", { session: false }),
    ratingController.deleteRating
);

export default router;