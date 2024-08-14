import express from "express"
import { login, signup } from "../controllers/auth.busAdmin.controllers.js"
const router = express.Router()

router.post("/login",login)
router.post("/updateDetails")

export default router