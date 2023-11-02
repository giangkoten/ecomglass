import * as glassService from "../services/glass.service";
import { Request, Response } from "express";

export const getAll = async (req: Request, res: Response) => {
  try {
    const keyStyle = Number(req.query.keyStyle);
    const keyMaterial = Number(req.query.keyMaterial);

    let [data] = await glassService.getAll(keyStyle, keyMaterial);
    if (!Array.isArray(data)) {
      throw new Error("is valid");
    }
    res.json({
      message: "Get all glasses",
      data: data[0],
    });
  } catch (error) {
    console.log(error);
  }
};
