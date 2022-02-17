import Category from "../models/category"
import pagination from "../services/paginationService"

export const createCategory = async (req, res, next) => {
    try {
        // validateName(req)

        const { name } = req.body
        const category = await Category.create({ name })

        res.status(200).json(category)
    } catch (e) {
        return next(e)
    }
}

export const getAllCategories = async (req, res, next) => {
    try {
        const categories = await Category.find()
        const paginatedCategories = pagination(req, categories)

        res.status(200).json(paginatedCategories)
    } catch (e) {
        return next(e)
    }
}
