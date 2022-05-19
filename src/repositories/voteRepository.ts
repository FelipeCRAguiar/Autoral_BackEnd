import { prisma } from "../db.js";

async function postVote(userId: number, optionId: number) {
  await prisma.votes.create({
    data: {
      userId: userId,
      optionId: optionId
    }
  })
}

async function findByUserIdAndCategoryId(userId: number, categoryId: number) {
  return prisma.votes.findFirst({
    where: {
      userId: userId,
      option: {
        category: {
          id: categoryId
        }
      }
    },
    include: {
      option: {
        include: {
          category: true
        }
      }
    }
    }
  )
}

export default {
  postVote,
  findByUserIdAndCategoryId
}