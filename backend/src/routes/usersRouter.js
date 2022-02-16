import express from "express"
import { createUser, getUserById } from "../controllers/usersController"

const usersRouter = express.Router({mergeParams: true})

usersRouter.post('/', createUser)
usersRouter.get('/:userId', getUserById)

export default usersRouter