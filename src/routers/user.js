const express = require('express')
const multer = require('multer')
const upload = multer({
  limits: {
    fileSize: 1000000
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error('Please upload a jpg or png'))
    }
    cb(undefined, true)
  }
})
const auth = require('../middleware/auth')
const User = require('../models/user')

const router = new express.Router()

router.post('/', async (req, res) => {
  const user = new User(req.body)

  try {
    await user.save()
    const token = await user.generateAuthToken()
    res.status(201).send({
      user,
      token
    })
  } catch (e) {
    res.status(400).send(e)
  }
})


router.post('/login', async (req, res) => {
  const {
    email,
    password
  } = req.body
  try {
    const user = await User.findByCredentials(email, password)
    const token = await user.generateAuthToken()
    res.send({
      user,
      token
    });
  } catch (e) {
    res.status(400).send()
  }

})

router.post('/logout', auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((tokenObject) => {
      return tokenObject.token !== req.token
    })

    await req.user.save()

    res.send()
  } catch (e) {
    res.status(500).send()
  }
})

router.post('/logoutAll', auth, async (req, res) => {
  try {
    req.user.tokens = []

    await req.user.save()

    res.send()

  } catch (e) {
    res.status(500).send()
  }
})

router.get('/me', auth, async (req, res) => {
  res.send(req.user)
})

router.post('/me/avatar', auth, upload.single('avatar'), async (req, res) => {
  req.user.avatar = req.file.buffer
  await req.user.save()
  res.send()
}, (error, req, res, next) => {
  res.status(400).send({ error: error.message })
})

router.delete('/me/avatar', auth, async (req, res) => {
  req.user.avatar = undefined
  await req.user.save()
  res.send()
})


router.patch('/me', auth, async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'password', 'email', 'age']
  const isValidOperation = updates.every((update) => {
    return allowedUpdates.includes(update)
  })

  if (!isValidOperation) {
    return res.status(400).send({
      error: 'Invalid updates'
    })
  }

  try {
    updates.forEach(update => req.user[update] = req.body[update])
    await req.user.save()


    res.send(req.user)
  } catch (e) {
    res.status(400).send(e)
  }
})

router.delete('/me', auth, async (req, res) => {
  try {

    await req.user.remove()
    res.send(req.user)
  } catch (e) {
    res.status(500).send()
  }
})
module.exports = router