const pagination = (req, items = []) => {
    if (items.length === 0) {
        return []
    }

    const page = req.query.page ?? 1
    const limit = req.query.limit ?? 1
    const start = (page - 1) * limit
    const end = (page * limit) <= items.length ? (page * limit) : items.length

    console.log(end)

    const slicedItems = items.slice(start, end)

    if (slicedItems < 0) {
        return []
    }

    return slicedItems
}

export default pagination