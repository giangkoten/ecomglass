import { Router } from "express";
import {
  createOrder,
  getAllOrderByUser,
  updatePayment,
  getAllOrder,
} from "../controllers/order.controller";
const router = Router();

router.post("/", createOrder);
router.get("/:id", getAllOrderByUser);
router.put("/:id", updatePayment);
router.get("/", getAllOrder);

export default router;
