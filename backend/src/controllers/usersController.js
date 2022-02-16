import { validateEmail, validateUserId } from "../validators/usersValidator"

export const createUser = async (req, res, next) => {
    try {
        validateUserId(req)
        validateEmail(req)

        res.status(200).json({ id: 10, email: 'test@test.com' })
    } catch (e) {
        return next(e)
    }
}

export const getUserById = async (req, res, next) => {
    try {
        validateUserId(req)

        res.status(200).json({ id: 10, email: 'test@test.com' })
    } catch (e) {
        return next(e)
    }
}

