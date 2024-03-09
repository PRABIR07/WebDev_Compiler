import { Request, Response } from "express";
import { Code } from "../models/CodeSchema";

export const saveCode = async (req: Request, res: Response) => {
  const { fullCode } = req.body;

  try {
    const newCode = await Code.create({ fullCode: fullCode });
    return res.status(201).send(newCode);
  } catch (error) {
    res.status(500).send({ message: "Something is went wrong", error });
  }
};
