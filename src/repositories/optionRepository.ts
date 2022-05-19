import { prisma } from "../db.js";
import { CreateOptionData } from "../services/optionServices.js";

async function getOptionsWithCategoryId(id: number) {
  return prisma.options.findMany({
    where: {
      categoryId: id
    }
  })
}

async function createManyOptions(data: CreateOptionData[]) {
  await prisma.options.createMany({
    data: data,
    skipDuplicates: true
  })
}

async function createOption(data: CreateOptionData) {
  await prisma.options.create({
    data: data
  })
}

async function findByCategoryAndUserId(categoryId: number, userId: number) {
  return prisma.options.findFirst({
    where: {
      categoryId: categoryId,
      userId: userId
    }
  })
}

async function findByNameAndCategoryId(name: string, categoryId: number) {
  return prisma.options.findFirst({
    where: {
      name: name,
      categoryId: categoryId
    }
  })
}

export default {
  getOptionsWithCategoryId,
  createManyOptions,
  createOption,
  findByCategoryAndUserId,
  findByNameAndCategoryId
}