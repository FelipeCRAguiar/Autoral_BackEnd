import { Users } from "@prisma/client"
import userRepository from "../repositories/userRepository.js";
import { conflictError, notFoundError, unauthorizedError } from "../utils/errorUtils";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { faker } from "@faker-js/faker";

dotenv.config()
export type CreateUserData = Omit<Users, "id">

export interface NewPasswordUser {
  email: string,
  password: string,
  newPassword: string
}

async function findById(id: number) {
  const user = await userRepository.findById(id)

  if(!user) {
    throw notFoundError("user not found");
  }

  return user
}

async function signIn(loginData: CreateUserData) {
  const user = await userRepository.findByEmail(loginData.email)
  if(!user) throw unauthorizedError("Invalid credentials");
  
  const passwordValidation = bcrypt.compareSync(loginData.password, user.password)
  if(!passwordValidation) throw unauthorizedError("Invalid credentials");

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET)

  return token
}

async function signUp(createUserData: CreateUserData) {
  const existingUser = await userRepository.findByEmail(createUserData.email)
  if(existingUser) throw conflictError("Email and username must be unique");

  const passwordHash = bcrypt.hashSync(createUserData.password, 15)

  await userRepository.createUser({...createUserData, password: passwordHash})
}

async function changePassword(userData: NewPasswordUser) {
  const user = await userRepository.findByEmail(userData.email)
  if(!user) throw notFoundError("This user does not exist")

  const passwordValidation = bcrypt.compareSync(userData.password, user.password)
  if(!passwordValidation) throw unauthorizedError("Invalid credentials");

  await userRepository.changePassword(userData.newPassword, userData.email)
}

async function retrievePassword(email: string) {
  const user = await userRepository.findByEmail(email)
  if(!user) throw notFoundError("This user does not exist")

  const newPassword = faker.random.numeric(8)

  await userRepository.changePassword(newPassword, email)
}

export default {
  findById,
  signIn,
  signUp,
  changePassword,
  retrievePassword
}