import { Categories } from "@prisma/client";
import awardRepository from "../repositories/awardRepository.js";
import categoryRepository from "../repositories/categoryRepository.js";
import optionRepository from "../repositories/optionRepository.js";
import { notFoundError } from "../utils/errorUtils.js";


export type CreateCategoryData = Omit<Categories, "id">

async function getCategoriesWithAwardId(id: string) {
  const numberId = parseInt(id)

  const categories = await categoryRepository.getCategoriesWithAwardId(numberId)

  return categories
}

async function createCategoryWithoutOptions(data: CreateCategoryData[]) {
  const awardId = data[0].awardId

  const award = await awardRepository.getAwardById(awardId)

  if(!award) throw notFoundError("This award does not exist")

  await categoryRepository.createCategories(data)
}

async function createCategoryWithOptions(data: any[]) {
  const awardId = data[0].awardId

  const award = await awardRepository.getAwardById(awardId)

  if(!award) throw notFoundError("This award does not exist")

  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    const category = {
      name: element.name,
      awardId: element.awardId
    }

    await categoryRepository.createCategory(category)

    const categoryId = await categoryRepository.findByNameAndAwardId(category.name, category.awardId)

    const options = element.options

    for (let o = 0; o < options.length; o++) {
      options[o] = {...options[o], categoryId: categoryId}
    }

    await optionRepository.createManyOptions(options)
  }
}

export default {
  getCategoriesWithAwardId,
  createCategoryWithoutOptions,
  createCategoryWithOptions
}