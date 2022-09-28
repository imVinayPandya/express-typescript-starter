import express, { Request, Response } from "express";
import userRoutes from "./users";

const router = express.Router();

router.get("/",  (_req: Request, res: Response) => {
  return res.status(200).send({ title: "Express" });
});

router.use("/users", userRoutes);

export default router;
