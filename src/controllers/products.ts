import { Request, Response } from "express"
import { prismaClient } from ".."

export const createProduct = async (req: Request, res: Response) => {

    const product = await prismaClient.product.create({
        data: {
            ...req.body,
            tags: req.body.tags.join(",")
        }
    })
    res.send(product)

}

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const product = req.body
        if (product.tags) {
            product.tags = product.tags.join(",")
        }

        const updatedProduct = await prismaClient.product.update({
            where: {
                id: +req.params.id
            },
            data: product
        })
        res.send({ updatedProduct })
    }
    catch (err) {
        res.send({ err })
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const deleteProduct = await prismaClient.product.delete({ where: { id: +req.params.id } })
        res.send({ deleteProduct })
    }
    catch (err) {
        res.send({ err })
    }
}


export const listProducts = async (req: Request, res: Response) => {
    const count = await prismaClient.product.count()
    const products = await prismaClient.product.findMany({
        skip: 1,  // fixed for now
        take: 2
    })
    res.send({ count, products })
}


export const getProductById = async (req: Request, res: Response) => {
    try {
        const product = await prismaClient.product.findFirst({
            where: {
                id: + req.params.id
            }
        })
        res.send({ product })

    }
    catch (err) {
        res.send({ err })
    }
}