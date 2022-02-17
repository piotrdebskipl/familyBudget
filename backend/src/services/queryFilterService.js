import Category from "../models/category"

let query = {}

const categoryFilter = async () => {
    if (!query.category) {
        return {}
    }

    const categoryName = query.category
    const category = await Category.findOne({ name: categoryName })

    if (!category) {
        return
    }

    return { category: category.id }
}

const valueRangeFilter = () => {
    if (!query.gt && !query.lt) {
        return {}
    }

    const greaterThan = query.gt ? { $gt: parseInt(query.gt) } : {}
    const lessThan = query.lt ? { $lt: parseInt(query.lt) } : {}

    return { value: { ...greaterThan, ...lessThan } }
}

const queryFilter = async (req) => {
    query = req.query

    const category = await categoryFilter()
    const valueRange = valueRangeFilter()

    return {
        ...category,
        ...valueRange
    }
}

export default queryFilter