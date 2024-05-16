import { Request, Response } from "express";
import { AddressSchame } from "../schema/Users";
import { prismaClient } from "..";
import { User } from "@prisma/client";

let user: User;

export const addAddress = async (req: Request, res: Response) => {

    try {
        const validate = AddressSchame.safeParse(req.body)
        if (!validate.success) {
            return res.json({ error: 1, details: validate.error })
        }

        user = await prismaClient.user.findFirstOrThrow({
            where: {
                id: req.body.userId
            }
        })
    }
    catch (err) {
        res.send({ err })
    }

    const address = await prismaClient.address.create({
        data: {
            ...req.body,
            userId: user.id
        }
    })
    res.send({ address })

}


export const deleteAddress = async (req: Request, res: Response) => {

}


export const listAddress = async (req: Request, res: Response) => {

}