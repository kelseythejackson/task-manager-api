const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET request are disabled')
//   } else {
//     next()
//   }
// })

app.use((req, res, next) => {
  res.status(503).send(`We're currently down for maintenence`)
})

app.use(express.json())


app.use('/users', userRouter)
app.use('/tasks', taskRouter)



app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});

const jwt = require('jsonwebtoken')

const myFunction = async () => {
  const token = jwt.sign({ _id: 'abc123'}, 'thisisastring', { expiresIn: '7 days' })
  console.log(token)

  const data = jwt.verify(token, 'thisisastring')
  console.log(data)
}


myFunction()