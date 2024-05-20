import { NextFunction, Request, Response } from "express"
import * as jwt from "jsonwebtoken"
import { JWTSECRET } from "../secrets"
import { prismaClient } from ".."
import { User } from "@prisma/client"

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    // try {
    // 1. extract the token from the header
    const token = req.headers.authorization
    // console.log(req.headers)
    // 2. id token is not present then throw error
    if (!token) {
        return res.json({ message: "Not Authorized" })
    }

    // 3. if token is present , verify that token and extract the payload
    const payload = jwt.verify(token, JWTSECRET) as any

    // 4. to get user from the payload
    const user = await prismaClient.user.findFirst({ where: { id: payload['user_id']['id'] } })

    if (!user) {
        return res.json({ message: "User not found" })
    }
    // 5. to attach the user to the current request object  
    next()
}

export default authMiddleware;