import { Awards } from "@prisma/client";
import awardRepository from "../repositories/awardRepository";
import { conflictError, notFoundError } from "../utils/errorUtils";


export type CreateAwardData = Omit<Awards, "id">

async function getAwards() {
  const awards = await awardRepository.getAwards()

  return awards
}

async function getAwardById(id: string) {
  const numberId = parseInt(id)

  const award = await awardRepository.getAwardById(numberId)

  if(!award) throw notFoundError("award not found")

  return award
}

async function getNewAwards() {
  const awards = await awardRepository.getNewAwards()

  return awards
}

async function getRandomAwards() {
  const awards = await awardRepository.getRandomAwards()

  return awards
}

async function createAward(data: CreateAwardData) {
  const award = await awardRepository.getAwardByName(data.name)

  if(award) throw conflictError("Uma award com esse nome já existe")

  await awardRepository.createAward(data)
}

export default {
  getAwards,
  getAwardById,
  getNewAwards,
  getRandomAwards,
  createAward
}