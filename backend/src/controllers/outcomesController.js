import Budget from "../models/budget"
import Outcome from "../models/outcome"

export const createOutcome = async (req, res, next) => {
    try {
        // validateUserId(req)
        // validateBudgetId(req)
        // validateName(req)
        // validateValue(req)

        const { userId, budgetId } = req.params
        const { name, value } = req.body
        const budget = await Budget.findOne({ _id: budgetId, createdBy: userId })
        const outcome = await Outcome.create({ name, value, budget: budget.id })

        res.status(200).json(outcome)
    } catch (e) {
        return next(e)
    }
}

export const getAllOutcomes = async (req, res, next) => {
    try {
        // validateUserId(req)
        // validateUserId(req)

        const { userId, budgetId } = req.params
        const budget = await Budget.findOne({ _id: budgetId, createdBy: userId })
        const outcomes = await Outcome.find({ budget: budgetId })

        res.status(200).json(outcomes)
    } catch (e) {
        return next(e)
    }
}