import { Router } from "express";
import { signUp } from "../controllers/auth.controller";
import { signIn } from "../controllers/auth.controller";

const router = Router();

router.post("/signup", signUp);

router.post("/signin", signIn);
export default router;
