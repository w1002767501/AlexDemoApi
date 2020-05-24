import svgCaptcha from 'svg-captcha'

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
    console.log(newCaptcha)
    ctx.body = {
      code: 200,
      data: newCaptcha.data,
    }
  }
}

export default new PublicController()
