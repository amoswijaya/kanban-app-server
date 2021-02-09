require('dotenv').config({path: __dirname + '/.env'})
const express = require('express')
const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler')
const app = express()
const PORT = 3000


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(routes)
app.use(errorHandler)
app.listen(PORT , () => console.log(`server running on port:${PORT}`))