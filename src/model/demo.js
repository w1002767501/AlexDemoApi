import User from './User'

const user = {
  name: 'Jon',
  age: 23,
  email: '100@qq.com',
}

// 增
const insertMethods = async () => {
  const data = new User(user)
  const result = await data.save()
  console.log(result)
}

// 查
const findMethdos = async () => {
  const result = await User.find()
  console.log(result)
}

// 改
const updateMethods = async () => {
  const result = await User.updateOne(
    { name: 'Jon' },
    {
      email: '22@qq.com',
    }
  )
  console.log(result)
}

// 删
const deleteMethdos = async () => {
  const result = await User.deleteOne({ name: 'xz2' })
  console.log(result)
}

findMethdos()
