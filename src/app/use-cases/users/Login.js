const loginService = require('../../services/users/Login')

exports.execute = async (body) => {
    return loginService.execute(body)
}