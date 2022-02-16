import express from "express"
import { createBudget, getAllBudgets, getBudgetById, updateBudgetById } from "../controllers/budgetsController"

const budgetsRouter = express.Router({mergeParams: true})

budgetsRouter.post('/', createBudget)
budgetsRouter.get('/', getAllBudgets)
budgetsRouter.get('/:budgetId', getBudgetById)
budgetsRouter.put('/:budgetId', updateBudgetById)

export default budgetsRouter