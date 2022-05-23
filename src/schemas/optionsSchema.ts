import joi from "joi";

export const optionsSchema = joi.object({
  name: joi.string().required(),
  image: joi.string().required(),
  categoryId: joi.number().required(),
  userId: joi.number()
})