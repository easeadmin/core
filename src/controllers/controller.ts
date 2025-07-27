import { E_ADMIN_HTTP_NOT_SUPPORT_METHOD } from '../errors.js'
import { HttpContext } from '@adonisjs/core/http'
import { schema } from '../builder/index.js'
import { inject } from '@adonisjs/core'
import html from '../builder/html.js'

@inject()
export default abstract class Controller {
  protected abstract builder(): schema<any>
  constructor(protected ctx: HttpContext) {}

  /**
   * render to html
   */
  protected render(data: Record<string, any>, options: Record<string, any> = {}) {
    return html(data, {
      title: this.ctx.admin.t(this.ctx.admin.title),
      props: { context: this.ctx.admin.settings() },
      env: { enableAMISDebug: this.ctx.admin.config.client.debug },
      ...options,
    })
  }

  protected ok(data: any, msg: string = '') {
    return { code: 0, msg: msg, data: data }
  }

  protected fail(msg: string = '', code: number = 1) {
    return { status: 1, code: code, msg: msg }
  }

  async index() {
    throw E_ADMIN_HTTP_NOT_SUPPORT_METHOD
  }

  async create() {
    throw E_ADMIN_HTTP_NOT_SUPPORT_METHOD
  }

  async edit() {
    throw E_ADMIN_HTTP_NOT_SUPPORT_METHOD
  }

  async show() {
    throw E_ADMIN_HTTP_NOT_SUPPORT_METHOD
  }

  async store() {
    throw E_ADMIN_HTTP_NOT_SUPPORT_METHOD
  }

  async update() {
    throw E_ADMIN_HTTP_NOT_SUPPORT_METHOD
  }

  async destroy() {
    throw E_ADMIN_HTTP_NOT_SUPPORT_METHOD
  }
}
