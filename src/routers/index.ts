import { Router } from "express";
import awardRouter from "./awardRouter.js";
import categoryRouter from "./categoryRouter.js";
import optionRouter from "./optionRouter.js";
import userRouter from "./userRouter.js";

const router = Router()

router.use(userRouter)
router.use(awardRouter)
router.use(categoryRouter)
router.use(optionRouter)

export default router