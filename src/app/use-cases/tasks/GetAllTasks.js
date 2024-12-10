const getAllTasksService = require('../../services/tasks/GetAllTasks')

exports.execute = async ({ user_id }) => {
    return getAllTasksService.execute(user_id)
}