const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv/config')

const todosRoute = require('./routes/todos')

app.use(bodyParser.json())
app.use('/todos', todosRoute)

app.get('/', (req, res)=>{
    res.send("<h1>Welcome to Todo's app</h1>")
})

mongoose.connect(process.env.DB_CONNECTION, 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true 
    }, console.log("connected to db")
)


app.listen(3000, ()=>console.log("The server is running..."))