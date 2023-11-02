import { Router } from "express";
import {
  createOrder,
  getAllOrderByUser,
} from "../controllers/order.controller";
const router = Router();

router.post("/", createOrder);
router.get("/:id", getAllOrderByUser);

export default router;
