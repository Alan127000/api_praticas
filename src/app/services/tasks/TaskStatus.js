const { connectionAndGetCollection } = require("../../../infra/database/mongo")
const { toObjectId } = require("../../../infra/helpers/objectIdHelper")

exports.execute = async (task_id, done) => {
    const Task = await connectionAndGetCollection('tasks')
    
    return Task.updateOne({ _id: toObjectId(task_id) }, { $set: { done, updated_at: new Date() } })
}