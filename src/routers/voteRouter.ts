import { Router } from "express";
import voteController from "../controllers/voteController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/validateTokenMiddleware.js";
import { voteSchema } from "../schemas/voteSchema.js";

const voteRouter = Router()

voteRouter.post("/vote", validateSchemaMiddleware(voteSchema), ensureAuthenticatedMiddleware, voteController.postVote)

export default voteRouter