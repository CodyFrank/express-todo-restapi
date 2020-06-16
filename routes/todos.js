const express = require('express')
const router = express.Router()
const Todo = require('../models/Todo')

// todo index
router.get('/', (req, res) => {
    res.send("todo index")
})

module.exports = router