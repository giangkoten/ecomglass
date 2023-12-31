import { Router } from "express";
import {
  getAll,
  getOne,
  editOne,
  creatOne,
  createDetail,
  createMedia,
  updateOrder,
  deleteQuantity,
  deleteOne,
} from "../../controllers/admin/product.controller";

const router = Router();

router.get("/glasses", getAll);
router.get("/glasses/:id", getOne);
router.put("/glasses/:id", editOne);
router.post("/", creatOne);
router.post("/postDetail", createDetail);
router.post("/postMedia", createMedia);
router.put("/order/:id", updateOrder);
router.put("/deleteQuantity/:id", deleteQuantity);
router.delete("/deleteGlass/:id", deleteOne);

//upload IMg

export default router;
