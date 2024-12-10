const EnumErrors = require("../../../domain/enums/EnumErrors")
const { connectionAndGetCollection } = require("../../../infra/database/mongo")

exports.execute = async (body) => {
    const User = await connectionAndGetCollection('users')
    
    const { email, password } = body
    
    const user = await User.findOne({ email }, { projection: { password: 1 } })
    
    const response = {
        success: true
    }
    
    if (!user) {
        response.success = false
        response.error = EnumErrors.USER_NOT_FOUND

        return response
    }
    
    if (user.password !== password) {
        response.success = false
        response.error = EnumErrors.INVALID_CREDENTIALS

        return response
    }

    response.user_id = user._id
    
    return response
}