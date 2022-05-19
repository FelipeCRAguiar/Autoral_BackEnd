import { Router } from "express";
import voteController from "../controllers/voteController";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { ensureAuthenticatedMiddleware } from "../middlewares/validateTokenMiddleware";
import { voteSchema } from "../schemas/voteSchema";

const voteRouter = Router()

voteRouter.post("/vote", validateSchemaMiddleware(voteSchema), ensureAuthenticatedMiddleware, voteController.postVote)

export default voteRouter