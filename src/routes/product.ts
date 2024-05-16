import { Router } from "express"
import authMiddleware from "../middleware/auth";
import { createProduct, deleteProduct, getProductById, listProducts, updateProduct } from "../controllers/products";
import adminMiddleware from "../middleware/admin";

const productsRoutes = Router();

productsRoutes.post("/", [authMiddleware, adminMiddleware], createProduct)
productsRoutes.put("/:id", [authMiddleware, adminMiddleware], updateProduct)
productsRoutes.get("/", [authMiddleware, adminMiddleware], listProducts)
productsRoutes.get("/:id", [authMiddleware, adminMiddleware], getProductById)
productsRoutes.delete("/:id", [authMiddleware, adminMiddleware], deleteProduct)

export default productsRoutes;