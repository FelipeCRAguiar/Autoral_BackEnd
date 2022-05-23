import { Router } from "express";
import optionController from "../controllers/optionController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/validateTokenMiddleware.js";
import { optionsSchema } from "../schemas/optionsSchema.js";

const optionRouter = Router()

optionRouter.get('/options/:id', ensureAuthenticatedMiddleware, optionController.getOptionsWithCategoryId)
optionRouter.post('/options', validateSchemaMiddleware(optionsSchema), optionController.createOption)

export default optionRouter