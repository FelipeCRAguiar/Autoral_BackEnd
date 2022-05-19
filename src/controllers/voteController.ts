import { Request, Response } from "express";
import voteServices from "../services/voteServices";

async function postVote(req: Request, res: Response) {
  const data = req.body

  await voteServices.postVote(data)
}

export default {
  postVote
}