import { Router } from "express";
import { getMedia } from "../controllers/media.controller";
import { upload } from "../utils/multer";
import { Request, Response } from "express";

import uploadToCloudinary from "../utils/cloudinary";
const router = Router();

router.get("/:id", getMedia);

router.post(
  "/",
  upload.array("image", 4),
  async (req: Request, res: Response) => {
    try {
      const pictureFiles: any = req.files;

      const result = pictureFiles?.map((picture: any) =>
        uploadToCloudinary(picture as any)
      );

      const imageRespone = await Promise.all(result);

      const imageList: any = imageRespone.reduce((acc: any, item: any) => {
        return acc.concat([item.url]);
      }, []);

      return res.status(201).json({
        imageList: imageList,
      });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
);

export default router;
