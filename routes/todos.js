const express = require('express')
const router = express.Router()
const Todo = require('../models/Todo')

// todo index
router.get('/', async (req, res) => {
    try{
        const todos = await Todo.find()
        res.json(todos)
    }catch(err){
        res.json({ message: err})
    }
})

router.post('/', async (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        description: req.body.description,   
    })
    try{
        const savedTodo = await todo.save()
        res.json(savedTodo)
    }catch(err){
        res.json({message: err})
    }
})

module.exports = router