import { getValue, setValue, getHValue, delValue } from './RedisConfig'

setValue('xiezhe', 'xiezhe VsCode')
getValue('xiezhe').then((res) => {
  console.log(res)
})

setValue('xzObj', {
  name: 'xz',
  age: 30,
  email: '100@qq.com',
})
getHValue('xzObj').then((res) => {
  console.log(res)
})
delValue('xiezhe')
