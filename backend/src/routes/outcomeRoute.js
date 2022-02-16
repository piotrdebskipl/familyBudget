import express from "express"
import { createOutcome, getAllOutcomes } from "../controllers/outcomesController"

const outcomesRouter = express.Router({mergeParams: true})

outcomesRouter.post('/', createOutcome)
outcomesRouter.get('/', getAllOutcomes)

export default outcomesRouter