const EnumHTTPCodes = require("../../../domain/enums/EnumHTTPCodes")
const jwtHelper = require('../../../infra/helpers/jwtHelper')

exports.execute = async (req, res, next) => {
    const { headers } = req

    const auth = headers['authorization']

    if (!auth) {
        return res.status(EnumHTTPCodes.UNAUTHORIZED).send()
    }

    const token = auth.split('Bearer ')[1]

    if (!token) {
        return res.status(EnumHTTPCodes.UNAUTHORIZED).send()
    }

    const verification = jwtHelper.verify(token)

    if (!verification.success) {
        return res.status(EnumHTTPCodes.FORBIDDEN).send()
    }

    next()
} 