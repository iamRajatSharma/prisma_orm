import { Router } from "express";
import authRoutes from "./auth";
import productsRoutes from "../routes/product";
import addressRoutes from "./address";

const rootRouter: Router = Router();

rootRouter.use("/auth", authRoutes)
rootRouter.use("/product", productsRoutes)
rootRouter.use("/address", addressRoutes)

export default rootRouter;