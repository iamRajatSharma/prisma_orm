import { NextFunction, Request, Response } from "express"
import * as jwt from "jsonwebtoken"
import { JWTSECRET } from "../secrets";


const adminMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const auth_token = req.headers.authorization as any
    const auth_payload = jwt.verify(auth_token, JWTSECRET) as any;

    const admin_role = auth_payload['user_id']['role']

    if (admin_role == "ADMIN") {
        next()
    }
    else {
        return res.json({ message: "You are not authorized" })
    }
}

export default adminMiddleware;