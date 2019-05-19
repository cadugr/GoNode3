const express = require('express')

const routes = express.Router()
const UserController = require('./src/app/controllers/UserController')
const SessionController = require('./src/app/controllers/SessionController')
const authMiddleware = require('./src/app/middlewares/auth')

routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)

routes.get('/teste', authMiddleware, (req, res) => {
  res.json({ ok: true })
})

module.exports = routes
