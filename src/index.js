const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())


app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});

const bcrypt = require('bcrypt')

const myFunction = async () => {
  const password = 'red12345!'
  const hashPassword = await bcrypt.hash(password, 8)

  console.log(password)
  console.log(hashPassword)

  const isMatch = await bcrypt.compare('red12345!', hashPassword)
  console.log(isMatch)
}

myFunction()