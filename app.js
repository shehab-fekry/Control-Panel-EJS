const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const expressLayout = require('express-ejs-layouts')
const path = require('path')

const server = express()

const dashRoutes = require('./Routes/dashRoutes')

server.set('view engine', 'ejs')
server.set('views', 'Views')

server.use(expressLayout)
server.set('layout Sign', false)

server.use(cors())
server.use("/Public", express.static('public'))
//server.use(express.static(path.join(__dirname, 'Public')))
server.use(bodyParser.urlencoded({extended: false}))

server.use('/dash', dashRoutes)

server.listen(3000)