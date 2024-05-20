import { z } from "zod";

export const SignUpSchema = z.object({
    name: z.string().min(4).max(16),
    email: z.string().email(),
    password: z.string().min(6).max(16)
})

export const AddressSchame = z.object({
    line1: z.string(),
    line2: z.string().nullable(),
    city: z.string(),
    country: z.string(),
    pincode: z.string().length(6),
    userId: z.number()
})


export const updateUserSchema = z.object({
    name: z.string(),
    defaultShippingAddress: z.number().nullable(),
    defaultBillingAddress: z.number().nullable()
})