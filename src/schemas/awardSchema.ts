import joi from "joi";

export const awardSchema = joi.object({
  name: joi.string().required(),
  image: joi.string().required(),
  isPrivate: joi.boolean().required(),
  stage: joi.string().required(),
  nominateEndDate: joi.date().required(),
  voteEndDate: joi.date().required(),
  userId: joi.number().required()
})