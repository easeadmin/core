import app from '@adonisjs/core/services/app'
import router from '@adonisjs/core/services/router'
import { NextFn } from '@adonisjs/core/types/http'
import { HttpContext } from '@adonisjs/core/http'
import routes from '#base/routes'
import Admin from '#admin'
let baseRoutes = routes()

export default class Start {
  protected registed?: Record<string, Function>
  constructor(protected appname: string) {}

  static make(appname: string) {
    return new Start(appname)
  }

  override(override: Record<string, Function>) {
    this.registed = Object.assign(baseRoutes, override)
    return this
  }

  group(callback: Function) {
    if (this.registed === undefined) {
      this.registed = baseRoutes
    }
    return router
      .group(() => {
        for (let i in this.registed) {
          this.registed[i](this.appname)
        }
        callback()
      })
      .as(this.appname)
      .prefix(this.appname)
      .use(async (ctx: HttpContext, next: NextFn) => {
        let model = await app.import(`#models/${this.appname}`)
        ctx.admin = new Admin(ctx, model, this.appname)
        await ctx.admin.authenticate()
        await ctx.admin.permission()
        return next()
      })
  }
}

declare module '@adonisjs/core/http' {
  export interface HttpContext {
    admin: Admin
  }
}
