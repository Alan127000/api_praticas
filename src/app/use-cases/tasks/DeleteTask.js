const deleteTaskService = require('../../services/tasks/DeleteTask')

exports.execute = async ({ task_id }) => {
    return deleteTaskService.execute(task_id)
}