const express = require('express')
const routes = express.Router()

const dashControllers = require('../Controllers/dashCTRLS')

routes.get('/', dashControllers.getdash)

routes.get('/tracking', dashControllers.getTracking)

routes.get('/drivers', dashControllers.getDrivers)

routes.get('/parents', dashControllers.getParents)

routes.get('/addPickPoint', dashControllers.getAddPickPoint)

routes.get('/signin', dashControllers.getSignIn)

routes.get('/signup', dashControllers.getSignUp)

module.exports = routes;