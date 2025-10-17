import { Router } from 'express';
import * as categoryController from '../controllers/category.controller';
import passport from "../middleware/passport";

const router: Router = Router();

router.get("/category", categoryController.getCategories);
router.get("/category/:categoryId", categoryController.getCategoryById);
router.post(
    "/category",
    passport.authenticate("jwt", { session: false }),
    categoryController.createCategory
);
router.put(
    "/category/:categoryId",
    passport.authenticate("jwt", { session: false }),
    categoryController.updateCategory
);
router.delete(
    "/category/:categoryId",
    passport.authenticate("jwt", { session: false }),
    categoryController.deleteCategory
);

export default router;
