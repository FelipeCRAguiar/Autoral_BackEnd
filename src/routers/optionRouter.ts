import { Router } from "express";
import optionController from "../controllers/optionController";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { ensureAuthenticatedMiddleware } from "../middlewares/validateTokenMiddleware";
import { optionsSchema } from "../schemas/optionsSchema";

const optionRouter = Router()

optionRouter.get('/options/:id', ensureAuthenticatedMiddleware, optionController.getOptionsWithCategoryId)
optionRouter.post('/options', validateSchemaMiddleware(optionsSchema), optionController.createOption)

export default optionRouter