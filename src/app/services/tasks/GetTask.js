const { connectionAndGetCollection } = require("../../../infra/database/mongo")
const { toObjectId } = require("../../../infra/helpers/objectIdHelper")

exports.execute = async (task_id) => {
    const Task = await connectionAndGetCollection('tasks')
    
    return Task.findOne({ _id: toObjectId(task_id) })
}