import { Router } from "express"
import authMiddleware from "../middleware/auth";
import { createProduct } from "../controllers/products";
import adminMiddleware from "../middleware/admin";

const productsRoutes = Router();

productsRoutes.post("/", [authMiddleware, adminMiddleware], createProduct)

export default productsRoutes;