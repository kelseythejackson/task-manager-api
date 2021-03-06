const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()
const port = process.env.PORT

app.use(express.json())

app.use('/users', userRouter)
app.use('/tasks', taskRouter)


app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});

const Task = require('./models/task')
const User = require('./models/user')

