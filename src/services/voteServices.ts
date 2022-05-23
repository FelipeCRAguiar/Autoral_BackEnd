import optionRepository from "../repositories/optionRepository.js";
import voteRepository from "../repositories/voteRepository.js";
import { conflictError, notFoundError } from "../utils/errorUtils.js";


type VoteBody = {
  userId: number,
  categoryId: number,
  optionName: string
}

async function postVote(data: VoteBody) {
  const vote = await voteRepository.findByUserIdAndCategoryId(data.userId, data.categoryId)

  if(vote) throw conflictError("Esse usuario já votou")

  const option = await optionRepository.findByNameAndCategoryId(data.optionName, data.categoryId)

  if(!option) throw notFoundError("Essa opção não existe")

  await voteRepository.postVote(data.userId, option.id)
}

export default {
  postVote
}