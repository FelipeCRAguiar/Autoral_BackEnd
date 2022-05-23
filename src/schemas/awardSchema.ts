import joi from "joi";

export const awardSchema = joi.object({
  name: joi.string().required(),
  image: joi.string().required(),
  isPrivate: joi.boolean().required(),
  stage: joi.string().required(),
  nominateEndDate: joi.string().required(),
  voteEndDate: joi.string().required(),
  userId: joi.number().required()
})