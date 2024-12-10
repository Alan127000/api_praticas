const jwt = require('jsonwebtoken')

const { JWT_SECRET } = process.env

exports.encode = (body) => {
    return jwt.sign(body, JWT_SECRET, { expiresIn: '1 day' })
}

exports.decode = (token) => {
    return jwt.decode(token)
}

exports.verify = (token) => {
    try {
        jwt.verify(token, JWT_SECRET)

        return {
            success: true
        }
    } catch (error) {
        return {
            success: false
        }
    }
}