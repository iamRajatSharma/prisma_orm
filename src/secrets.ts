import exp from "constants"
import dotenv from "dotenv"

dotenv.config({path:".env"})

export const PORT = process.env.PORT
export const JWTSECRET = process.env.JWTSECRET!