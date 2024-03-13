import { Request, Response } from "express";
import { Code } from "../models/CodeSchema";

export const saveCode = async (req: Request, res: Response) => {
  const { fullCode } = req.body;

  try {
    const newCode = await Code.create({ fullCode: fullCode });
    console.log(fullCode);
    return res.status(201).send({ url: newCode._id, status: "saved" });
  } catch (error) {
    res.status(500).send({ message: "Something is went wrong in save", error });
  }
};

export const loadCode = async (req: Request, res: Response) => {
  const { urlId } = req.body;
  console.log(urlId);
  try {
    const existingCode = await Code.findById(urlId);

    if (!existingCode) {
      return res.status(404).send({ message: "Code not found" });
    }
    return res.status(200).send({ fullCode: existingCode.fullCode });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Something is went wrong in loading", error });
  }
};
