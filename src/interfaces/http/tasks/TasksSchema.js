const joi = require('joi')

module.exports = {
    createTaskContract: joi.object({
        params: joi.object({
            user_id: joi.string().required()
        }),
        body: joi.object({
            name: joi.string().required(),
            done: joi.boolean().required(),
            scheduled_at: joi.date().optional()
        })
    }),
    taskStatusContract: joi.object({
        params: joi.object({
            task_id: joi.string().required()
        }),
        body: joi.object({
            done: joi.boolean().required()
        })
    }),
    taskIdContract: joi.object({
        params: joi.object({
            task_id: joi.string().required()
        })
    }),
    getAllTasksContract: joi.object({
        params: joi.object({
            user_id: joi.string().required()
        })
    }),
}