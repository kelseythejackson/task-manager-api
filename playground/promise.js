require('../src/db/mongoose')
const User = require('../src/models/user')

//5e5074dd2cabf969f1cd6240

// User.findByIdAndUpdate('5e5202a7e917fd72883aeef6', {
//   age: 1
// }).then((user) => {
//   console.log(user)
//   return User.countDocuments({ age: 1})
// }).then((result) => {
//   console.log(result)
// }).catch((e) => {
//   console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
  await User.findByIdAndUpdate(id, { age })
  const count = await User.countDocuments({ age })
  return count
}

updateAgeAndCount('5e5202a7e917fd72883aeef6', 2).then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})

