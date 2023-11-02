import { NextFunction, Request, Response } from "express";
export const searchOption = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const query = req.query;
  if (!query) {
    console.log(query);
    res.json({
      message: "test",
    });
  } else {
    next();
  }
};
