import joi from "joi";

export const voteSchema = joi.object({
  userId: joi.number().required(),
  categoryId: joi.number().required(),
  optionName: joi.string().required()
})