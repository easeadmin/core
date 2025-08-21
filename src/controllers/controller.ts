import { E_ADMIN_HTTP_NOT_SUPPORT_METHOD } from '../errors.js'
import { HttpContext } from '@adonisjs/core/http'
import { schema } from '../builder/index.js'
import { inject } from '@adonisjs/core'
import html from '../builder/html.js'

@inject()
export default abstract class Controller {
  protected abstract builder(): schema<any>
  constructor(protected ctx: HttpContext) {}

  protected render(options: Record<string, any> = {}): string {
    let config = {
      title: this.ctx.admin.t(this.ctx.admin.title),
      props: { context: this.ctx.admin.settings() },
      env: { enableAMISDebug: this.ctx.admin.config.client.debug },
      definitions: {
        urlmode: this.ctx.admin.config.client.url_mode,
        host: this.ctx.admin.config.client.static_host,
        homepage: this.ctx.admin.url('auth_home.index'),
        logged: !!this.ctx.admin.user,
      },
    }
    if (options.props) {
      config.props = Object.assign(config.props, options.props)
    }
    if (options.env) {
      config.env = Object.assign(config.env, options.env)
    }
    config = Object.assign(options, config)
    return html(this.builder().toJSON(), config)
  }

  protected ok(data: any, msg: string = ''): Record<string, any> {
    return { code: 0, msg: msg, data: data }
  }

  protected fail(msg: string = '', code: number = 1): Record<string, any> {
    return { status: 1, code: code, msg: msg }
  }

  async index(): Promise<any> {
    if (this.ctx.admin.isApiAction('schema')) {
      return this.ok(this.builder().toJSON())
    }

    return this.render()
  }

  async create(): Promise<any> {
    throw E_ADMIN_HTTP_NOT_SUPPORT_METHOD
  }

  async edit(): Promise<any> {
    throw E_ADMIN_HTTP_NOT_SUPPORT_METHOD
  }

  async show(): Promise<any> {
    throw E_ADMIN_HTTP_NOT_SUPPORT_METHOD
  }

  async store(): Promise<any> {
    throw E_ADMIN_HTTP_NOT_SUPPORT_METHOD
  }

  async update(): Promise<any> {
    throw E_ADMIN_HTTP_NOT_SUPPORT_METHOD
  }

  async destroy(): Promise<any> {
    throw E_ADMIN_HTTP_NOT_SUPPORT_METHOD
  }
}
