const mongoose = require('mongoose')
// const validator = require('validator')

const Task = mongoose.model('Task', {
  // model definitions
  description: {
    type: String,
    trim: true,
    required: true
  },
  completed: {
    type: Boolean, 
    default: false
  }
})

module.exports = Task