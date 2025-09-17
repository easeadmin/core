import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import app from '@adonisjs/core/services/app'
import router from '@adonisjs/core/services/router'
import routes from '#core/src/admin/routes'
import Admin from '#core/src/admin/admin'

export class Start {
  protected registed: Record<string, Function> = {}
  constructor(protected appname: string) {
    this.registed = routes()
  }

  static make(appname: string) {
    return new Start(appname)
  }

  override(override: Record<string, Function>) {
    this.registed = Object.assign(this.registed, override)
    return this
  }

  group(callback: Function) {
    const middleware = async (ctx: HttpContext, next: NextFn) => {
      const models = await app.import(`#models/${this.appname}`)
      ctx.admin = new Admin(ctx, this.appname, models)
      ctx.admin.switchLocale(ctx.admin.settings().lang)
      if (ctx.admin.config.auth.guard.length > 0) {
        if (ctx.admin.isExcept()) {
          // slient auth
          await (ctx as any).auth.use(ctx.admin.config.auth.guard).check()
        } else {
          // login auth
          await (ctx as any).auth.authenticateUsing(ctx.admin.config.auth.guard, {
            loginRoute: ctx.admin.url('auth_login.index'),
          })
        }
        if (ctx.admin.user) {
          await ctx.admin.user.load('roles')
          for (let role of ctx.admin.user.roles) {
            await role.load('menus')
            await role.load('permissions')
          }
        }
      }
      ctx.admin.permission()
      return next()
    }

    return router
      .group(() => {
        for (let i in this.registed) {
          this.registed[i](router, this.appname)
        }
        callback(router)
      })
      .as(this.appname)
      .prefix(this.appname)
      .use(middleware)
  }
}

declare module '@adonisjs/core/http' {
  export interface HttpContext {
    admin: Admin
  }
}
