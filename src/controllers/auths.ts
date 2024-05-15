import { Request, Response } from "express"
import { prismaClient } from "..";
import { compareSync, hashSync } from "bcrypt";
import * as jwt from "jsonwebtoken"
import { JWTSECRET } from "../secrets";
import { SignUpSchema } from "../schema/Users";

export const signup = async (req: Request, res: Response) => {

    const validator = SignUpSchema.safeParse(req.body)
    if (!validator.success) {
        return res.json({ error: 1, details: validator.error })
    }

    const { name, email, password } = req.body;

    let user = await prismaClient.user.findFirst({ where: { email } })
    if (user) {
        return res.json({ error: 1, message: "User already exists" })
    }

    user = await prismaClient.user.create({
        data: {
            name, email, password: hashSync(password, 10)
        }
    })

    return res.json(user)
}


export const login = async (req: Request, res: Response) => {

    const { email, password } = req.body;

    let user = await prismaClient.user.findFirst({ where: { email } })
    if (!user) {
        return res.json({ error: 1, message: "User does not exists" })
    }

    if (!compareSync(password, user.password)) {
        return res.json({ error: 1, message: "Incorrect password" })
    }

    const token = jwt.sign({ user_id: user }, JWTSECRET)

    return res.json({ user, token })
}

export const me = async (req: Request, res: Response) => {
    return res.json({ "message": "Welcome " })
}