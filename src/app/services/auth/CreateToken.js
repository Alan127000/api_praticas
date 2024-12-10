const jwtHelper = require('../../../infra/helpers/jwtHelper')

exports.execute = (data) => {
    return jwtHelper.encode(data)
}