import { Request, Response } from "express";
import categoryServices from "../services/categoryServices";

async function getCategoriesWithAwardId(req: Request, res: Response) {
  const { id } = req.params

  const categories = await categoryServices.getCategoriesWithAwardId(id)

  res.send(categories)
}

async function createCategoryWithoutOptions(req: Request, res: Response) {
  const categories = req.body

  await categoryServices.createCategoryWithoutOptions(categories)

  res.sendStatus(201)
}

async function createCategoryWithOptions(req: Request, res: Response) {
  const categories = req.body

  await categoryServices.createCategoryWithOptions(categories)

  res.sendStatus(201)
}

export default {
  getCategoriesWithAwardId,
  createCategoryWithoutOptions,
  createCategoryWithOptions
}