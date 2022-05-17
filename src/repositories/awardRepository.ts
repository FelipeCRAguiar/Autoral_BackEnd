import { prisma } from "../db.js";
import { CreateAwardData } from "../services/awardServices.js"

async function getNewAwards() {
  return prisma.awards.findMany({
    take: 6,
    where: {
      isPrivate: false
    },
    orderBy: {
      id: "desc"
    }
  })
}

async function getRandomAwards() {
  return prisma.$executeRaw`SELECT * FROM "Awards" WHERE "isPrivate" = false ORDER BY RANDOM() LIMIT 6`
}

async function getAwardById(id: number) {
  return prisma.awards.findUnique({
    where: {
      id: id
    }
  })
}

async function getAwards() {
  return prisma.awards.findMany({
    where: {
      isPrivate: false
    }
  })
}

async function getAwardByName(name: string) {
  return prisma.awards.findUnique({
    where: {
      name: name
    }
  })
}

async function createAward(data: CreateAwardData) {
  await prisma.awards.create({
    data: data
  })
}

export default {
  getNewAwards,
  getAwardById,
  getAwardByName,
  getAwards,
  getRandomAwards,
  createAward
}