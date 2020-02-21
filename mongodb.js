// CRUD create read update delete
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if(error) {
    return console.log('Unable to connect to database')
  }

  const db = client.db(databaseName)

  // const updatePromise = db.collection('users').updateOne({
  //   _id: new ObjectID('5e48467c5150101b1b9cfd90')
  // }, {
  //   $inc: {
  //     age: 1
  //   }
  // })

  // updatePromise.then((result) => {
  //   console.log(result)
  // }).catch((errror) => {
  //   console.log(error)
  // })

  // db.collection('tasks').updateMany({
  //   completed: false
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })
  // db.collection('users').deleteMany({
  //     age: 27
  // }).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })

  db.collection('tasks').deleteOne({
    description: 'Resolve budget overages'
  }).then( result => console.log(result)).catch(error => console.log(error))
})