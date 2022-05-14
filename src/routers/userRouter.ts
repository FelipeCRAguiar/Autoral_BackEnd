import { Router } from "express";
import userController from "../controllers/userController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { userSchema } from "../schemas/userSchema.js";
import { newUserSchema } from "../schemas/newUserSchema.js";
import { changePasswordSchema } from "../schemas/changePasswordSchema.js";

const userRouter = Router()

userRouter.post("/sign-in", validateSchemaMiddleware(userSchema), userController.signIn)
userRouter.post("/sign-up", validateSchemaMiddleware(newUserSchema), userController.signUp)
userRouter.patch("/change-password", validateSchemaMiddleware(changePasswordSchema), userController.changePassword)
userRouter.patch("/retrieve-password", userController.retrievePassword)

export default userRouter