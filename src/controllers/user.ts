import { Request, Response } from "express";
import { AddressSchame, updateUserSchema } from "../schema/Users";
import { prismaClient } from "..";
import { Address, User } from "@prisma/client";

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
            ...req.body
        }
    })
    res.send({ address })

}


export const deleteAddress = async (req: Request, res: Response) => {
    try {
        const resp = await prismaClient.address.delete({
            where: {
                id: +req.params.id
            }
        })
        res.send({ resp })
    }
    catch (err) {
        res.send({ err })
    }
}


export const listAddress = async (req: Request, res: Response) => {
    const resp = await prismaClient.address.findMany({})
    res.send({ resp })
}


// export const updateUser = async (req: Request, res: Response) => {
//     const validate = updateUserSchema.safeParse(req.body)
//     let ShippingAddress : Address;
//     let BillingAddress : Address;


// }