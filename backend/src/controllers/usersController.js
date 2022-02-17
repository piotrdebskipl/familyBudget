import { validateEmail, validatePassword, validateUserId } from "../validators/usersValidator"
import User from "../models/user"

export const createUser = async (req, res, next) => {
    try {
        validateEmail(req)
        validatePassword(req)

        const { email, password } = req.body
        const user = await User.create({ email, password })

        res.status(200).json({ id: user.id, email: user.email })
    } catch (e) {
        return next(e)
    }
}

export const getUserById = async (req, res, next) => {
    try {
        validateUserId(req)
        
        const { userId } = req.params
        const user = await User.findById(userId).populate('budgets')

        res.status(200).json({ id: user.id, email: user.email })
    } catch (e) {
        return next(e)
    }
}

