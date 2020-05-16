const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// require multer
const multer = require('multer')
// configure multer
const upload = multer({
  dest: 'images',
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if(!file.originalname.match(/\.(doc|docx)$/)) {
      return cb(new Error('Please upload a word document'))
    }
    cb(undefined, true)
    // cb(new Error('File must be a pdf'))
    // cb(undefined, )
  }
})

app.post('/upload', upload.single('upload'), (req, res) => {
  res.send()
}, (error, req, res, next) => {
  res.status(400).send({error: error.message})
})

app.use(express.json())


app.use('/users', userRouter)
app.use('/tasks', taskRouter)



app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});

const Task = require('./models/task')
const User = require('./models/user')

