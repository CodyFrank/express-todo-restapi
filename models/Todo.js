const mongoose = require('mongoose')

const todoSchema = mongoose.schema({
    title: {
        type: string,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: date,
        default: Date.now
    }
})

module.exports = mongoose.model('todos', todoSchema)