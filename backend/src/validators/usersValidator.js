export const validateUserId = (req) => {
    if (!req.params.userId || typeof req.params.userId !== 'string' ) {
        throw new Error('Invalid parameter')
    }
}

export const validateEmail = (req) => {
    if (!req.body.email || !req.body.email.match(/\S+@\S+\.\S+/)) {
        throw new Error('Invalid parameter')
    }
}

export const validatePassword = (req) => {
    if (!req.body.password || req.body.password.length < 8) {
        throw new Error('Invalid parameter')
    }
}