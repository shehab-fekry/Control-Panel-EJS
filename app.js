const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const expressLayout = require('express-ejs-layouts')
const path = require('path')

const server = express()

const dashRoutes = require('./Routes/dashRoutes')

// Seyying templating Engine
server.set('view engine', 'ejs')
server.set('views', 'Views')

// Dashboard Layout
server.use(expressLayout)
server.set('layout SignIn', false)
server.set('layout home', false)
server.set('layout SignUp', false)
server.set('layout forgetPassword', false)
server.set('layout newPassword', false)
server.set('layout confirmEmail', false)

server.use(cors())
server.use("/Public", express.static('public'))
//server.use(express.static(path.join(__dirname, 'Public')))
server.use(bodyParser.urlencoded({extended: false}))

server.use('/dash', dashRoutes)

server.listen(3000)