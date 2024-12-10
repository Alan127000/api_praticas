const { connectionAndGetCollection } = require("../../../infra/database/mongo")

exports.execute = async (payload) => {
    const User = await connectionAndGetCollection('users')

    return User.insertOne(payload)
}