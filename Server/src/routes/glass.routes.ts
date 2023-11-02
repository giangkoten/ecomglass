import { Router } from "express";
import { getAll } from "../controllers/glass.controller";
import { searchOption } from "../middlewares/shop.middleware";

const router = Router();

router.get("/glasses", searchOption, getAll);

export default router;
