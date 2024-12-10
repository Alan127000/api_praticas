const { connectionAndGetCollection } = require("../../../infra/database/mongo")
const { toObjectId } = require("../../../infra/helpers/objectIdHelper")

exports.execute = async (user_id) => {
    const Task = await connectionAndGetCollection('tasks')
    
    return Task.find({ user_id: toObjectId(user_id) }, { sort: { created_at: -1 } }).toArray()
}