import { Request, Response } from "express";
import userService from "../services/userServices.js";
import { NewPasswordUser } from "../services/userServices.js";

async function signIn(req: Request, res: Response) {
  const user = req.body

  const token = await userService.signIn(user)

  res.send({ token })
}

async function signUp(req: Request, res: Response) {
  const user = req.body

  await userService.signUp(user)

  res.sendStatus(201)
}

async function changePassword(req: Request, res: Response) {
  const user = req.body as NewPasswordUser

  await userService.changePassword(user)

  res.sendStatus(201)
}

async function retrievePassword(req: Request, res: Response) {
  const { email } = req.body

  await userService.retrievePassword(email)

  res.sendStatus(201)
}

export default {
  signIn,
  signUp,
  changePassword,
  retrievePassword
}