import { Router } from "express"
import { addAddress, deleteAddress, listAddress } from "../controllers/user";

const addressRoutes = Router();

addressRoutes.post("/", addAddress)
addressRoutes.get("/", listAddress)
addressRoutes.delete("/", deleteAddress)

export default addressRoutes;