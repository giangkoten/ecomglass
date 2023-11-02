import * as authService from "../services/auth.service";
import { Request, Response } from "express";

export const signUp = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    await authService.signUp(name, email, password);
    res.json({
      message: "Sign up success",
    });
  } catch (error) {
    console.log(error);
  }
};

export const signIn = async (req: Request, res: Response) => {
  let { email, password } = req.body;
  try {
    let result = await authService.signIn(email, password);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};
