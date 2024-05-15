import { Router } from "express"
import { login } from "../controllers/auths";

const authRoutes = Router();

authRoutes.get("/login", login)

export default authRoutes;