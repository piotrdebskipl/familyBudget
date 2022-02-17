import Budget from "../models/budget"
import pagination from "../services/paginationService"

export const createBudget = async (req, res, next) => {
    try {
        // validateUserId(req)
        // validateName(req)

        const { userId } = req.params
        const { name } = req.body
        const budget = await Budget.create({ name, createdBy: userId })

        res.status(200).json(budget)
    } catch (e) {
        return next(e)
    }
}

export const getAllBudgets = async (req, res, next) => {
    try {
        // validateUserId(req)

        const { userId } = req.params
        const userBudgets = await Budget.find({ createdBy: userId })
        const sharedBudgets = await Budget.find({ shared: userId })
        const budgets = [...userBudgets, ...sharedBudgets]
        const paginatedBudgets = pagination(req, budgets)

        res.status(200).json(paginatedBudgets)
    } catch (e) {
        return next(e)
    }
}

export const getBudgetById = async (req, res, next) => {
    try {
        // validateUserId(req)
        // validateBudgetId(req)
        
        const { userId, budgetId } = req.params
        const budget = await Budget.findOne({ _id: budgetId, createdBy: userId })

        res.status(200).json(budget)
    } catch (e) {
        return next(e)
    }
}

export const updateBudgetById = async (req, res, next) => {
    try {
        // validateUserId(req)
        // validateBudgetId(req)
        
        const { userId, budgetId } = req.params
        const { name, shared, incomes, outcomes } = req.body
        const budget = await Budget.findOne({ _id: budgetId, createdBy: userId })

        budget.name = name

        if (Array.isArray(shared)) {
            shared.map(userId => {
                budget.shared.push(userId)
            })
        }

        budget.save()
 
        res.status(200).json(budget)
    } catch (e) {
        return next(e)
    }
}