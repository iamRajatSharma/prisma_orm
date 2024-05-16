import { Router } from "express";
import authRoutes from "./auth";
import productsRoutes from "../routes/product";

const rootRouter: Router = Router();

rootRouter.use("/auth", authRoutes)
rootRouter.use("/product", productsRoutes)

export default rootRouter;