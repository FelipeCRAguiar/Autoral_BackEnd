import { Router } from "express";
import categoryController from "../controllers/categoryController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/validateTokenMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { categorySchema } from "../schemas/categorySchema.js";

const categoryRouter = Router()

categoryRouter.get('/categories/:id', ensureAuthenticatedMiddleware, categoryController.getCategoriesWithAwardId)
categoryRouter.post('/categories-options', validateSchemaMiddleware(categorySchema), categoryController.createCategoryWithOptions)
categoryRouter.post('/categories', categoryController.createCategoryWithoutOptions)

export default categoryRouter