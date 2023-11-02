import { Router } from "express";
import { getOne } from "../controllers/detail.controller";
const router = Router();

router.get("/:id", getOne);

export default router;
