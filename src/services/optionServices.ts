import { Options } from "@prisma/client";
import optionRepository from "../repositories/optionRepository.js";
import { conflictError } from "../utils/errorUtils.js";


export type CreateOptionData = Omit<Options, "id">

async function getOptionsWithCategoryId(id: string) {
  const numberId = parseInt(id)

  const options = await optionRepository.getOptionsWithCategoryId(numberId)

  return options
}

async function createOption(data: CreateOptionData) {
  if(data.userId) {
    const optionUser = await optionRepository.findByCategoryAndUserId(data.categoryId, data.userId)
  
    if(optionUser) throw conflictError("Esse usuario já fez uma indicação")
  }

  const optionName = await optionRepository.findByNameAndCategoryId(data.name, data.categoryId)

  if (optionName) throw conflictError("Essa opção já foi indicada")

  await optionRepository.createOption(data)
}

export default {
  getOptionsWithCategoryId,
  createOption
}