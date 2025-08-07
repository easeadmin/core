import { E_ADMIN_INVALID_CAPTCHA, E_ADMIN_LOGIN_FAILED } from '../../errors.js'
import Repository from '../../repositories/repository.js'
import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import svgCaptcha from 'svg-captcha'

@inject()
export default class LoginRepository extends Repository<LoginRepository> {
  protected sessionName = 'captcha'
  constructor(protected ctx: HttpContext) {
    super()
  }

  async store(data: Record<string, any>) {
    const ctx: any = this.ctx
    const captcha = data.captcha.toLowerCase()
    const session = ctx.session.get(this.sessionName).toLowerCase()
    if (captcha !== session) {
      throw E_ADMIN_INVALID_CAPTCHA
    }
    try {
      const model = ctx.admin.model('User')
      const user = await model.verifyCredentials(data.username, data.password)
      await ctx.auth.use(ctx.admin.name).login(user, !!data.remember)
      return user
    } catch (error) {
      throw E_ADMIN_LOGIN_FAILED
    }
  }

  async show() {
    const ctx: any = this.ctx
    const svg = svgCaptcha.create({ color: true, height: 64 })
    ctx.session.put(this.sessionName, svg.text)
    ctx.response.type('.svg')
    return svg.data
  }
}
