const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

const User = mongoose.model('User', {
  name: {
    type: String
  },
  age: {
    type: Number
  }
})

// const me = new User({
//   name: 'Kelsey',
//   age: 31
// })

// me.save().then(() => {
//   console.log(me)
// }).catch((error) => {
//   console.log('Error!', error)
// })

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
const task = new Task({
  description: 'Clean Apartment',
  completed: true
})

task.save().then(() => {
  console.log(task)
}).catch((error) => {
  console.log('Error!', error)
})