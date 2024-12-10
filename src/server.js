const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

const UsersRoutes = require('./interfaces/http/users/UsersRoutes')
const TasksRoutes = require('./interfaces/http/tasks/TasksRoutes')
const HealthRoutes = require('./interfaces/http/health/HealthRoutes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(TasksRoutes, UsersRoutes, HealthRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server running at localhost:${process.env.PORT}`)
})