import { Router } from "express";
import {
  getAll,
  getOne,
  editOne,
  creatOne,
  createDetail,
  createMedia,
} from "../../controllers/admin/product.controller";

const router = Router();

router.get("/glasses", getAll);
router.get("/glasses/:id", getOne);
router.put("/glasses/:id", editOne);
router.post("/", creatOne);
router.post("/postDetail", createDetail);
router.post("/postMedia", createMedia);

//upload IMg

export default router;
