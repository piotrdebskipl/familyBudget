import express from "express"
import budgetsRouter from "./budgetsRoute"
import categoriesRouter from "./categoriesRoute"
import incomesRouter from "./incomesRoute"
import outcomesRouter from "./outcomeRoute"
import usersRouter from "./usersRouter"

const baseRouter = express()
const router = express.Router()

router.use('/users', usersRouter)
router.use('/users/:userId/budgets', budgetsRouter)
router.use('/users/:userId/budgets/:budgetId/incomes', incomesRouter)
router.use('/users/:userId/budgets/:budgetId/outcomes', outcomesRouter)
router.use('/users/:userId/budgets/:budgetId/categories', categoriesRouter)

baseRouter.use('/api', router)

export default baseRouter