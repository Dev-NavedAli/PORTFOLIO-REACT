import express from "express"
import { sendMail } from "../controllers/mailController.js"

const mailRouter = express.Router()

mailRouter.post("/send-mail",sendMail)

export default mailRouter;