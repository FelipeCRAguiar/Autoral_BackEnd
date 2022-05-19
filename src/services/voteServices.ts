import optionRepository from "../repositories/optionRepository"
import voteRepository from "../repositories/voteRepository"
import { conflictError, notFoundError } from "../utils/errorUtils"


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