import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { validateEmail, validatePassword } from "../validators/usersValidator"
import User from "../models/user"

export const registerUser = async (req, res, next) => {
    try {
        validateEmail(req)
        validatePassword(req)

        const { email, password } = req.body
        const passwordHash = await bcrypt.hash(password, 6)
        const user = await User.create({ email: email.toLowerCase(), password: passwordHash })

        res.status(201).json(user)
    } catch (e) {
        return next(e)
    }
}

export const loginUser = async (req, res, next) => {
    try {
        validateEmail(req)
        validatePassword(req)

        const { email, password } = req.body
        const passwordHash = await bcrypt.hash(password, 6)
        const user = await User.findOne({ email: email.toLowerCase() })

        if (!user || (!await bcrypt.compare(password, user.password))) {
            throw new Error('Invalid login or password')
        }

        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_TOKEN_KEY,
            { expiresIn: "1h" }
        )

        user.token = token
        user.save()

        res.status(201).json(user)
    } catch (e) {
        return next(e)
    }
}

export const authenticate = async (req, res, next) => {
    try {
        const token = req.headers['x-access-token']

        if (!token) {
            res.status(403).json({ message: 'Access denied' })
        }

        const tokenContent = jwt.verify(token, process.env.JWT_TOKEN_KEY)

        req.user = tokenContent

        return next()
    } catch (e) {
        return next(e)
    }
}