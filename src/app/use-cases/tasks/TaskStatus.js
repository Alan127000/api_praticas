const taskStatusService = require('../../services/tasks/TaskStatus')

exports.execute = async ({ task_id }, { done }) => {
    return taskStatusService.execute(task_id, done)
}