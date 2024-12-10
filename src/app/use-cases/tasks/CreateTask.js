const createTaskService = require('../../services/tasks/CreateTask')

exports.execute = async ({ user_id }, task) => {
    return createTaskService.execute(user_id, task)
}