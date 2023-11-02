import * as mediaService from "../services/media.service";
import { Request, Response } from "express";

export const getMedia = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    let [data] = await mediaService.getMedia(+id);
    if (!Array.isArray(data)) {
      throw new Error("is valid");
    }

    res.json({
      message: "Get all media",
      data: data[0],
    });
  } catch (error) {
    console.log(error);
  }
};
