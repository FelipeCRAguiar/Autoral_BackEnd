import { prisma } from "../db.js";
import { CreateUserData } from "../services/userServices.js";

async function findById(id: number) {
  return prisma.users.findUnique({
    where: {
      id
    }
  })
}

async function createUser(user: CreateUserData) {
  await prisma.users.create({
    data: user
  })
}

async function findByEmail(email: string) {
  return prisma.users.findUnique({
    where: {
      email
    }
  })
}

async function changePassword(password: string, email: string) {
  return prisma.users.update({
    where: {
      email
    },
    data: {
      password
    }
  })
}

export default {
  findById,
  findByEmail,
  createUser,
  changePassword
}