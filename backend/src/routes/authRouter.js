import express from "express"
import { loginUser, registerUser } from "../middlewares/authMiddleware"

const authRouter = express.Router({mergeParams: true})

authRouter.post('/register', registerUser)
authRouter.post('/login', loginUser)

export default authRouter