import send from '../config/MailCongig'
import moment from 'moment'
import jsonwebtoken from 'jsonwebtoken'
import config from '../config'
import { checkCode } from '../common/Utils'
import User from '../model/User'

class LoginController {
  constructor() {}
  async forget(ctx) {
    const { body } = ctx.request
    try {
      let result = await send({
        code: '1234',
        expire: moment().add(30, 'minutes').format('YYYY-MM-DD'),
        email: body.username,
        user: 'Xz',
      })
      ctx.body = {
        code: 200,
        data: result,
        msg: '邮件发送成功',
      }
    } catch (e) {}
  }

  async login(ctx) {
    // 接收用户的数据
    const { body } = ctx.request
    let sid = body.sid
    let code = body.code
    // 验证图片验证码的时效性 正确性
    if (checkCode(sid, code)) {
      // 验证账号密码的正确性
      let checkUserPassword = false
      let user = await User.findOne({ username: body.username })
      if (user.password === body.password) {
        checkUserPassword = true
      }
      if (checkUserPassword) {
        // 验证通过 返回token
        console.log('hello login')
        let token = jsonwebtoken.sign({ _id: 'xz' }, config.JWT_SECRET, {
          expiresIn: '1d',
        })
        ctx.body = {
          code: 200,
          token: token,
        }
      } else {
        ctx.body = {
          code: 404,
          msg: '用户名或密码错误',
        }
      }
    } else {
      ctx.body = {
        code: 401,
        msg: '图片验证码不正确',
      }
    }
  }
}
export default new LoginController()
