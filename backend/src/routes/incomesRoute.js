import express from "express"
import { createIncome, getAllIncomes } from "../controllers/incomesController"

const incomesRouter = express.Router({mergeParams: true})

incomesRouter.post('/', createIncome)
incomesRouter.get('/', getAllIncomes)

export default incomesRouter