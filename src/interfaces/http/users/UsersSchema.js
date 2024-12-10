const joi = require('joi')

module.exports = {
    createUserContract: joi.object({
        body: joi.object({
            name: joi.string().required(),
            email: joi.string().email().required(),
            password: joi.string().required()
        })
    }),
    loginContract: joi.object({
        body: joi.object({
            email: joi.string().email().required(),
            password: joi.string().required()
        })
    })
}