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

router.get('/:id', async (req, res) => {
    const todo = await Todo.findById(req.params.id)
    try{
        res.json(todo)
    }catch(err){
        res.json({message: err})
    }
})

router.delete('/:id', async (req, res) => {
    const todo = await Todo.deleteOne({_id: req.params.id})
    const todos = await Todo.find()
    try {
        res.json(todos)
    }catch(err){
        res.json({ message: err })
    }
})


module.exports = router