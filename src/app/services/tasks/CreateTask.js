const { connectionAndGetCollection } = require("../../../infra/database/mongo")
const { toObjectId } = require("../../../infra/helpers/objectIdHelper")

exports.execute = async (user_id, task) => {
    const Task = await connectionAndGetCollection('tasks')

    task.created_at = new Date()
    task.updated_at = new Date()
    task.user_id = toObjectId(user_id)

    return Task.insertOne(task)
}