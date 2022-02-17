import express from "express"
import { authenticate, registerUser } from "../middlewares/authMiddleware"
import authRouter from "./authRouter"
import budgetsRouter from "./budgetsRoute"
import categoriesRouter from "./categoriesRoute"
import incomesRouter from "./incomesRoute"
import outcomesRouter from "./outcomeRoute"
import usersRouter from "./usersRouter"

const baseRouter = express()
const router = express.Router()

router.use('/', authRouter)
router.use('/users', authenticate, usersRouter)
router.use('/budgets', authenticate,  budgetsRouter)
router.use('/budgets/:budgetId/incomes', authenticate, incomesRouter)
router.use('/budgets/:budgetId/outcomes', authenticate, outcomesRouter)
router.use('/categories', authenticate, categoriesRouter)

baseRouter.use('/api', router)

export default baseRouter