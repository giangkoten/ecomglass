import * as userService from "../services/user.service";
import { Request, Response } from "express";

export const getOne = async (req: Request, res: Response) => {
  try {
    let { id } = req.params;
    let [data] = await userService.getOne(+id);
    if (!Array.isArray(data)) {
      throw new Error("is valid");
    }
    res.json({
      message: "Get user",
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};
