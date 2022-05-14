import joi from "joi";

export const changePasswordSchema = joi.object({
  email: joi.string().required(),
  password: joi.string().required(),
  newPassword: joi.string().required()
})