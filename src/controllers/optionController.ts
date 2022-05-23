import { Request, Response } from "express";
import optionServices from "../services/optionServices.js";

async function getOptionsWithCategoryId(req: Request, res: Response) {
  const { id } = req.params

  const options = await optionServices.getOptionsWithCategoryId(id)

  res.send(options)
}

async function createOption(req: Request, res: Response) {
  const option = req.body

  await optionServices.createOption(option)

  res.sendStatus(201)
}

export default {
  getOptionsWithCategoryId,
  createOption
}