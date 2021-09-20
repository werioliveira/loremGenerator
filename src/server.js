require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT | 3333
const routes = require('./routes')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.use(express.json())
app.use(routes)
app.listen(port, ()=>console.log(`Server Running on ${port}`))
