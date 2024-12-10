const getTaskService = require('../../services/tasks/GetTask')

exports.execute = async ({ task_id }) => {
    return getTaskService.execute(task_id)
}