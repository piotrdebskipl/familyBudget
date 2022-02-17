import express from "express"
import { createCategory, getAllCategories } from "../controllers/categoriesController"

const categoriesRouter = express.Router({mergeParams: true})

categoriesRouter.post('/', createCategory)
categoriesRouter.get('/', getAllCategories)

export default categoriesRouter