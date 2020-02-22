const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid')
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number')
      }
    }
  }
})

const me = new User({
  name: '    Kelsey    ',
  email: 'lamar@jackson.com'
})

me.save().then(() => {
  console.log(me)
}).catch((error) => {
  console.log('Error!', error.message)
})

// Define the Task Model

const Task = mongoose.model('Task', {
  // model definitions
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
})

// an Instance of the Task Model
// const task = new Task({
//   description: 'Clean Apartment',
//   completed: true
// })

// task.save().then(() => {
//   console.log(task)
// }).catch((error) => {
//   console.log('Error!', error)
// })