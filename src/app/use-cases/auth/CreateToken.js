const createTokenService = require('../../services/auth/CreateToken')

exports.execute = (data) => {
    return createTokenService.execute(data)
}