import express from "express"
import { sendMail } from "../controllers/mailController.js"

const mailRouter = express.Router()

mailRouter.post("/sned-mail",sendMail)