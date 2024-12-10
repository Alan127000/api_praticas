const EnumHTTPCodes = require('../../../domain/enums/EnumHTTPCodes')
const TaskContract = require('./TasksSchema')
const CreateTaskOperation = require('../../../app/use-cases/tasks/CreateTask')
const DeleteTaskOperation = require('../../../app/use-cases/tasks/DeleteTask')
const GetAllTasksOperation = require('../../../app/use-cases/tasks/GetAllTasks')
const GetTaskOperation = require('../../../app/use-cases/tasks/GetTask')
const TaskStatusOperation = require('../../../app/use-cases/tasks/TaskStatus')

exports.createTask = async (req, res) => {
    const { body, params } = req

    const { error, value } = TaskContract.createTaskContract.validate({ body, params })
    
    if (error) {
        return res.status(EnumHTTPCodes.BAD_REQUEST).send(error.details)
    }

    await CreateTaskOperation.execute(value.params, value.body)

    return res.status(EnumHTTPCodes.CREATED).send(value.body)
}

exports.getTask = async (req, res) => {
    const { params } = req

    const { error, value } = TaskContract.taskIdContract.validate({ params })
    
    if (error) {
        return res.status(EnumHTTPCodes.BAD_REQUEST).send(error.details)
    }

    const task = await GetTaskOperation.execute(value.params)

    return res.status(EnumHTTPCodes.OK).send(task)
}

exports.getAllTasks = async (req, res) => {
    const { params } = req

    const { error, value } = TaskContract.getAllTasksContract.validate({ params })
    
    if (error) {
        return res.status(EnumHTTPCodes.BAD_REQUEST).send(error.details)
    }

    const tasks = await GetAllTasksOperation.execute(value.params)
    
    return res.status(EnumHTTPCodes.OK).send(tasks)
}

exports.taskStatus = async (req, res) => {
    const { body, params } = req

    const { error, value } = TaskContract.taskStatusContract.validate({ body, params })
    
    if (error) {
        return res.status(EnumHTTPCodes.BAD_REQUEST).send(error.details)
    }

    await TaskStatusOperation.execute(value.params, value.body)

    return res.status(EnumHTTPCodes.NO_CONTENT).send()
}

exports.deleteTask = async (req, res) => {
    const { params } = req

    const { error, value } = TaskContract.taskIdContract.validate({ params })
    
    if (error) {
        return res.status(EnumHTTPCodes.BAD_REQUEST).send(error.details)
    }

    await DeleteTaskOperation.execute(value.params)

    return res.status(EnumHTTPCodes.NO_CONTENT).send()
}