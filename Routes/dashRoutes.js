const express = require('express')
const routes = express.Router()

const dashControllers = require('../Controllers/dashCTRLS')

routes.get('/', dashControllers.getdash)

routes.get('/tracking', dashControllers.getTracking)

routes.get('/driversInfo', dashControllers.getDriversInfo)

module.exports = routes;