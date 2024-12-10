const router = require('express').Router()
const TaskController = require('./TasksController')
const authMiddleware = require('../middlewares/auth')

router.post('/users/:user_id/tasks', authMiddleware.execute, TaskController.createTask)

router.get('/users/:user_id/tasks', authMiddleware.execute, TaskController.getAllTasks)

router.get('/tasks/:task_id', authMiddleware.execute, TaskController.getTask)

router.put('/tasks/:task_id', authMiddleware.execute, TaskController.taskStatus)

router.delete('/tasks/:task_id', authMiddleware.execute, TaskController.deleteTask)

module.exports = router