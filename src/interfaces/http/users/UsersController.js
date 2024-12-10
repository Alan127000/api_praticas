const CreateUserOperation = require('../../../app/use-cases/users/CreateUser')
const CreateTokenOperation = require('../../../app/use-cases/auth/CreateToken')
const LoginOperation = require('../../../app/use-cases/users/Login')
const UserContracts = require('./UsersSchema')
const EnumHTTPCodes = require('../../../domain/enums/EnumHTTPCodes')

exports.createUser = async (req, res) => {
    const { body } = req
    
    const { value, error } = UserContracts.createUserContract.validate({ body })
    
    if (error) {
        return res.status(EnumHTTPCodes.BAD_REQUEST).send(error.details)
    }
    
    const user = await CreateUserOperation.execute(value.body)
    
    const token = CreateTokenOperation.execute(body)
    
    return res.status(EnumHTTPCodes.CREATED).send({ token, user_id: user.insertedId })
}

exports.login = async (req, res) => {
    const { body } = req
    
    const { value, error } = UserContracts.loginContract.validate({ body })
    
    if (error) {
        return res.status(EnumHTTPCodes.BAD_REQUEST).send(error.details)
    }
    
    const response = await LoginOperation.execute(value.body)
    
    if (!response.success) {
        return res.status(EnumHTTPCodes.BAD_REQUEST).send({ message: response.error })
    }
    
    const token = CreateTokenOperation.execute(value.body)
    
    return res.status(EnumHTTPCodes.OK).send({ token, user_id: response.user_id })
}