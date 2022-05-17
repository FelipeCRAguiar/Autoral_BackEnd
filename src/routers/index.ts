import { Router } from "express";
import awardRouter from "./awardRouter.js";
import userRouter from "./userRouter.js";

const router = Router()

router.use(userRouter)
router.use(awardRouter)

export default router