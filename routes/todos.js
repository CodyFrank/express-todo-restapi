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
    try{ 
        const todo = await Todo.findById(req.params.id)
        res.json(todo)
    }catch(err){
        res.json({message: err})
    }
})

router.delete('/:id', async (req, res) => {
    try{ 
        const todo = await Todo.deleteOne({_id: req.params.id})
    const todos = await Todo.find()
        res.json(todos)
    }catch(err){
        res.json({ message: err })
    }
})

router.patch('/:id', async (req, res) => {
    const todo = Todo.findById(req.params.id)
    if (Object.keys(req.body).includes("title")) {
        try{ 
            const updatedTodo = await Todo.updateOne({ _id: req.params.id },
            {
                $set : {
                    title: req.body.title
                }
            })
                res.json(updatedTodo)
            }catch(err){
                res.json({ message: err})
            }
    }

    if (Object.keys(req.body).includes("description")) {
        try{ 
            const updatedTodo = await Todo.updateOne({ _id: req.params.id},
            {
                $set : {
                    description: req.body.description
                }
            })
                res.json(updatedTodo)
            }catch(err){
                res.json({ message: err })
            }
    }
})


module.exports = router