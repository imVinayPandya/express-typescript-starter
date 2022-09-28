import express, { Request, Response } from "express";

const userRoutes = express.Router();

userRoutes.get("/",  (_req: Request, res: Response) => {
  return res.status(200).send("respond with a resource");
});

export default userRoutes;
