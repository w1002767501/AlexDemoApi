import svgCaptcha from 'svg-captcha'
import { setValue } from '../config/RedisConfig'

class PublicController {
  constructor() {}
  async demo(ctx) {
    const body = ctx.request.query
    console.log(body.sid)
    const newCaptcha = svgCaptcha.create({
      size: 5,
      ignoreChars: '0o1il',
      color: true,
      noise: Math.floor(Math.random() * 5),
      width: 150,
      height: 50,
    })
    // 保存验证码数据 设置超时时间 单位：s
    setValue(body.sid, newCaptcha.text, 10 * 60)
    ctx.body = {
      code: 200,
      data: newCaptcha.data,
    }
  }
}

export default new PublicController()
