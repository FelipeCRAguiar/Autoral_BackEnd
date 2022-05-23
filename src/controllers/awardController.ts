import { Request, Response } from "express";
import awardServices from "../services/awardServices.js";

async function getAwards(req: Request, res: Response) {
  const awards = await awardServices.getAwards()

  res.send(awards)
}

async function getAwardsById(req: Request, res: Response) {
  const { id } = req.params

  const award = await awardServices.getAwardById(id)

  res.send(award)
}

async function getRandomAwards(req: Request, res: Response) {
  const awards = await awardServices.getRandomAwards()

  res.send(awards)
}

async function getNewAwards(req: Request, res: Response) {
  const awards = await awardServices.getNewAwards()

  res.send(awards)
}

async function createAwards(req: Request, res: Response) {
  const data = req.body

  await awardServices.createAward(data)

  res.sendStatus(201)
}

export default ({
  getAwards,
  getAwardsById,
  getRandomAwards,
  getNewAwards,
  createAwards
})