import express from "express"
import { createCategory, getAllCategories, getCategoryById } from "../controllers/categoriesController"

const categoriesRouter = express.Router({mergeParams: true})

categoriesRouter.post('/', createCategory)
categoriesRouter.get('/', getAllCategories)
categoriesRouter.get('/:categoryId', getCategoryById)

export default categoriesRouter