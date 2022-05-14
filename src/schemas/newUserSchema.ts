import joi from "joi";

export const newUserSchema = joi.object({
  username: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required()
})