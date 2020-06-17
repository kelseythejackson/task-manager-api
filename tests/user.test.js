const request = require('supertest')
const app = require('../src/app')

test('Should signup a new user', async () => {
  await request(app).post('/users').send({
    name: 'Kelsey Jackson',
    email: 'kelseythej@gmail.com',
    password: 'fjsdfjsdflkjsadf'
  })
  .set('Accept', 'application/json')
  .expect(201)
})