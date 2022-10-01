import express, { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const userRoutes = express.Router();

userRoutes.get("/", async (_req: Request, res: Response) => {
  // await prisma.user.create({
  //   data: {first_name: 'vinay', last_name: "pandya"}
  // })
  const users = await prisma.user.findMany();
  return res.status(200).send(users);
});

export default userRoutes;
