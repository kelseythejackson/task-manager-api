require('../src/db/mongoose')
const Task = require('../src/models/task')

// 5e4f439ef5097e54eedfb06e

// Task.findByIdAndDelete('5e4f439ef5097e54eedfb06e').then(() => {
//   return Task.countDocuments({ completed: false})
// }).then((result) => {
//   console.log(result)
// }).catch((e) => {
//   console.log(e)
// })


const deleteTaskAndCount = async(id) => {
  await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({ completed: false })
  return count
}

deleteTaskAndCount('5e57103bba51fcef7022ebc7').then((count) => {
  console.log(count)
}).catch(e => console.log(e))