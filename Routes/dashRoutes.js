const express = require('express')
const routes = express.Router()

const dashControllers = require('../Controllers/dashCTRLS')

routes.get('/', dashControllers.getdash)

routes.get('/landing', dashControllers.getlanding)

routes.get('/tracking', dashControllers.getTracking)

routes.get('/drivers', dashControllers.getDrivers)

routes.get('/parents', dashControllers.getParents)

routes.get('/addPickPoint', dashControllers.getAddPickPoint)

routes.get('/signin', dashControllers.getSignIn)

routes.get('/signup', dashControllers.getSignUp)

routes.get('/forgetPassword', dashControllers.getForgetPassword)

routes.get('/newPassword', dashControllers.getnewPassword)

routes.get('/updateDriver', dashControllers.getupdateDriver)

routes.get('/addDriver', dashControllers.getaddDriver)

routes.get('/updateParent', dashControllers.getupdateParent)

routes.get('/addParent', dashControllers.getaddParent)

routes.get('/confirmEmail', dashControllers.getconfirmEmail)

routes.get('/adminProfile', dashControllers.adminProfile)

routes.get('/school', dashControllers.getSchool)

routes.post('/data', dashControllers.postData)


module.exports = routes;