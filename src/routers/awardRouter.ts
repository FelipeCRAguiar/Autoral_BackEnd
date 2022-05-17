import { Router } from "express";
import awardController from "../controllers/awardController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/validateTokenMiddleware.js";
import { awardSchema } from "../schemas/awardSchema.js";

const awardRouter = Router()

awardRouter.get("get-all-awards", awardController.getAwards)
awardRouter.get("get-new-awards", awardController.getNewAwards)
awardRouter.get("get-random-awards", awardController.getRandomAwards)
awardRouter.get("get-award/:id", ensureAuthenticatedMiddleware, awardController.getAwardsById)
awardRouter.post("create-award", validateSchemaMiddleware(awardSchema), awardController.createAwards)

export default awardRouter