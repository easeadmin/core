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
    /**
     * array to flat object
     *
     * @example
     * flatArray([{id:1,name:'a'},{id:2,name:'b'}]) => {1:{id:1,name:'a'},2:{id:2,name:'b'}}
     */
    Array.prototype.flatKey = function (pk: string = 'id') {
      let flats: Record<string, any> = {}
      this.forEach((row) => {
        let item = row.toJSON ? row.toJSON() : row
        flats[item[pk]] = { ...item }
      })
      return flats
    }

    /**
     * make to tree
     *
     * @example
     * makeTree([{id:1,name:'a',parentId:0},{id:2,name:'b',parentId:1}]) => [{id:1,name:'a',children:[{id:2,name:'b'}]}]
     */
    Array.prototype.makeTree = function (
      clean: boolean = false,
      pk: string = 'id',
      parentKey = 'parentId'
    ) {
      let trees: any[] = []
      let flats = this.flatKey(pk)
      for (let i in flats) {
        if (flats[i][parentKey] < 1) {
          trees.push(flats[i])
        } else {
          let parent = flats[flats[i][parentKey]]
          if (parent) {
            if (!parent.children) {
              parent.children = []
            }
            parent.children.push(flats[i])
          }
        }
      }
      if (clean) {
        for (let i in flats) {
          delete flats[i][pk]
          delete flats[i][parentKey]
        }
      }
      return trees
    }
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

declare global {
  interface Array<T> {
    flatKey(pk: string): Record<any, any>
    makeTree(clean?: boolean, pk?: string, parentKey?: string): any[]
  }
}
