require ('dotenv').config()
require('./database/connection')

const express = require("express")
const path = require("path")

const app = express()


const sataticDir = path.join(__dirname, "../public")
app.use(express.static(sataticDir))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const userRoutes = require("../routes/user.api")
app.use(userRoutes)

module.exports = app