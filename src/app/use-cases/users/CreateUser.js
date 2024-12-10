const createUserService = require('../../services/users/CreateUser')

exports.execute = async (payload) => {
    return createUserService.execute(payload)
}