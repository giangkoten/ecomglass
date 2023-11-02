import { Router } from "express";

import { getOne } from "../controllers/user.controller";

const router = Router();

router.get("/:id", getOne);

export default router;
