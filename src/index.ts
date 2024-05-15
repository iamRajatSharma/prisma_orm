import express, { Express, Request, Response } from "express";
import { PORT } from "./secrets";
import rootRouter from "./routes";
const app: Express = express();
import { PrismaClient } from "@prisma/client";
var bodyParser = require('body-parser')

app.use(express.json())
app.use("/api", rootRouter)
app.use(bodyParser.urlencoded({ extended: false }))
app.get("/", (req, res) => {
    res.send({ message: "Home Route" })
})

export const prismaClient = new PrismaClient({
    log: ['query']
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})