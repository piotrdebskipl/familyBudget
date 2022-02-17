import Budget from "../models/budget"
import Category from "../models/category"
import Income from "../models/income"

export const createIncome = async (req, res, next) => {
    try {
        // validateUserId(req)
        // validateBudgetId(req)
        // validateName(req)
        // validateValue(req)

        const { userId, budgetId } = req.params
        const { name, value, categoryId } = req.body
        const budget = await Budget.findOne({ _id: budgetId, createdBy: userId })
        const income = await Income.create({ name, value, budget: budget.id })

        if (categoryId && categoryId !== '') {
            const category = await Category.findById(categoryId)
            
            income.category = category.id
            income.save()
        }

        res.status(200).json(income)
    } catch (e) {
        return next(e)
    }
}

export const getAllIncomes = async (req, res, next) => {
    try {
        // validateUserId(req)
        // validateUserId(req)

        const { userId, budgetId } = req.params
        const budget = await Budget.findOne({ _id: budgetId, createdBy: userId })
        const incomes = await Income.find({ budget: budget.id }).populate('category')

        res.status(200).json(incomes)
    } catch (e) {
        return next(e)
    }
}