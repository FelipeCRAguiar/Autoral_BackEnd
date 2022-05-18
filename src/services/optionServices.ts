import { Options } from "@prisma/client";
import optionRepository from "../repositories/optionRepository";
import { conflictError } from "../utils/errorUtils";


export type CreateOptionData = Omit<Options, "id">

async function getOptionsWithCategoryId(id: string) {
  const numberId = parseInt(id)

  const options = await optionRepository.getOptionsWithCategoryId(numberId)

  return options
}

async function createOption(data: CreateOptionData) {
  const option = await optionRepository.findByCategoryAndUserId(data.categoryId, data.userId)

  if(option) throw conflictError("Esse usuario já fez uma indicação")
}