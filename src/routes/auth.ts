import { Router } from "express"
import { login, me, signup } from "../controllers/auths";
import authMiddleware from "../middleware/auth";

const authRoutes = Router();

authRoutes.post("/signup", signup)
authRoutes.post("/login", login)
authRoutes.get("/me", authMiddleware, me)

export default authRoutes;