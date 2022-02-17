import Category from "../models/category"

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

        res.status(200).json(categories)
    } catch (e) {
        return next(e)
    }
}
