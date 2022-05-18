import { prisma } from "../db.js";
import { CreateCategoryData } from "../services/categoryServices.js";

async function createCategories(data: CreateCategoryData[]) {
  await prisma.categories.createMany({
    data: data,
    skipDuplicates: true
  })
}

async function getCategoriesWithAwardId(id: number) {
  return prisma.categories.findMany({
    where: {
      awardId: id
    }
  })
}

async function createCategory(data: CreateCategoryData) {
  await prisma.categories.create({
    data: data
  })
}

async function findByNameAndAwardId(name: string, awardId: number) {
  return prisma.categories.findFirst({
    select: {
      id: true
    },
    where: {
      name: name,
      awardId: awardId
    }
  }) 
}

export default {
  createCategories,
  getCategoriesWithAwardId,
  createCategory,
  findByNameAndAwardId
}