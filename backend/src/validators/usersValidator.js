export const validateUserId = (req) => {
    if (!req.params.userId || isNaN(req.params.userId)) {
        throw new Error('Invalid parameter')
    }
}

export const validateEmail = (req) => {
    if (!req.params.email || !req.params.email.match(/\S+@\S+\.\S+/)) {
        throw new Error('Invalid parameter')
    }
}