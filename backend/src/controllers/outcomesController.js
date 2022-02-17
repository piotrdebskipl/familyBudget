import Budget from "../models/budget"
import Outcome from "../models/outcome"
import pagination from "../services/paginationService"
import queryFilter from "../services/queryFilterService"

export const createOutcome = async (req, res, next) => {
    try {
        // validateUserId(req)
        // validateBudgetId(req)
        // validateName(req)
        // validateValue(req)

        const { userId } = req.user
        const { budgetId } = req.params
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

        const { userId } = req.user
        const { budgetId } = req.params
        const budget = await Budget.findOne({ _id: budgetId, createdBy: userId })
        const filter = await queryFilter(req)
        const outcomes = await Outcome.find({ budget: budget.id, ...filter })
        const paginatedOutcomes = pagination(req, outcomes)

        res.status(200).json(paginatedOutcomes)
    } catch (e) {
        return next(e)
    }
}