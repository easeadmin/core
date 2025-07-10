import string from '@adonisjs/core/helpers/string'
import router from '@adonisjs/core/services/router'
import app from '@adonisjs/core/services/app'
import { HttpContext } from '@adonisjs/core/http'
import { AdminConfig } from '#types'
import { LucidModel } from '@adonisjs/lucid/types/model'

export default class Admin {
  protected url = '/'
  protected lang: string = ''
  protected adminVersion = '1.0.0-alpha'
  constructor(
    protected ctx: HttpContext,
    protected models: Record<string, LucidModel>,
    protected name: string
  ) {
    if (this.ctx.route?.handler) {
      // parser current controller file name to lang
      let handler = this.ctx.route?.handler as any
      if (handler && handler.name && handler.name.indexOf('Controller') > 0) {
        this.lang = handler.name.split('Controller')[0].toLowerCase()
      }

      // parser current url
      let id = this.ctx.request.param('id')
      this.url = id ? this.ctx.request.url().replace(`/${id}`, '') : this.ctx.request.url()
    }
  }

  get current() {
    return this.lang
  }

  get version() {
    return this.adminVersion
  }

  get config(): AdminConfig {
    return app.config.get(this.name)
  }

  get locale() {
    if ('i18n' in this.ctx) {
      return (this.ctx.i18n as any).locale
    }
    return 'en'
  }

  get asname() {
    return this.name
  }

  get user() {
    if ('auth' in this.ctx) {
      return (this.ctx as any).auth.use(this.name)?.user
    }
  }

  get userinfo() {
    if ('auth' in this.ctx) {
      return this.user?.toJSON()
    }
  }

  t(key: string, data?: Record<string, any>, fallback?: string): string {
    if (!fallback) {
      fallback = string.sentenceCase(key)
    }
    const ctx = this.ctx as any
    if ('i18n' in ctx) {
      let commonKey = `${this.name}.common.${key}`
      if (this.lang !== '') {
        let currentKey = `${this.name}.${this.lang}.${key}`
        return ctx.i18n.t(currentKey, data, ctx.i18n.t(commonKey, data, fallback))
      } else {
        return ctx.i18n.t(commonKey, data, fallback)
      }
    }
    return fallback
  }

  api(
    url: string = '',
    action: 'ajax' | 'schema' | 'force' | 'restore' | 'export' = 'ajax',
    method: 'get' | 'post' | 'put' | 'delete' | 'patch' | 'head' | 'options' = 'get'
  ) {
    if (url === '') {
      url = this.url
    } else if (url.indexOf('${') === 0) {
      url = this.url + '/' + url
    } else if (url.indexOf('?') === 0) {
      url = this.url + url
    }
    let headers: Record<string, string> = {}
    if (action !== 'ajax') {
      headers['x-action'] = action
    }
    if (method !== 'get') {
      let csrfToken = 'csrfToken' in this.ctx.request ? (this.ctx.request.csrfToken as string) : ''
      headers['x-csrf-token'] = csrfToken
    }
    let api: Record<string, any> = { url: url, method: method }
    if (Object.keys(headers).length > 0) {
      api['headers'] = headers
    }
    return api
  }

  model(name: string): LucidModel {
    return this.models[name]
  }

  route(name: string, options?: { qs?: Record<string, any>; params?: Record<string, any> }) {
    let builder = router.builder()
    if (options) {
      if (options.qs) {
        builder = builder.qs(options.qs)
      }
      if (options.params) {
        builder = builder.params(options.params)
      }
    }
    return builder.make(`${this.asname}.${name}`)
  }

  identifier(name: string) {
    return `${this.asname}.${name}`
  }

  async authenticate() {
    if (this.config.auth.guard.length > 0) {
      const ctx = this.ctx as any
      if (this.isExcept()) {
        // slient auth
        await ctx.auth.use(this.config.auth.guard).check()
      } else {
        // login auth
        await ctx.auth.authenticateUsing(this.config.auth.guard, {
          loginRoute: router.builder().make(`${this.name}.auth_login.index`),
        })
      }
    }
  }

  async permission() {
    if (this.config.auth.permission) {
      if (!this.isExcept()) {
        let can = await this.can(this.ctx.route?.name)
        this.ctx.response.abortIf(can === false, this.t('permission_denied'), 403)
      }
    }
  }

  isExcept(): boolean {
    const excepts = [
      `${this.name}.auth_login.index`,
      `${this.name}.auth_login.store`,
      `${this.name}.auth_login.create`,
      `${this.name}.auth_login.update`,
      `${this.name}.auth_login.destroy`,
    ].concat(this.config.auth.excepts)
    return excepts.includes(this.ctx.route?.name ?? '')
  }

  async getRoles() {
    if (!this.user.roles) {
      await this.user.load('roles')
    }
    return this.user.roles
  }

  async getMenus() {
    let menus: any[] = []
    let roles = await this.getRoles()
    for (let role of roles) {
      if (!role.menus) {
        await role.load('menus')
      }
      menus = menus.concat(role.menus)
    }
    return menus
  }

  async getPermissions() {
    let permissions: any[] = []
    let roles = await this.getRoles()
    for (let role of roles) {
      if (!role.permissions) {
        await role.load('permissions')
      }
      permissions = permissions.concat(role.permissions)
    }
    return permissions
  }

  async isRole(slug: string) {
    let roles = await this.getRoles()
    for (let role of roles) {
      if (role.slug === slug) {
        return true
      }
    }
    return false
  }

  async isAllRoles(slugs: string[]) {
    for (let value of slugs) {
      if (!(await this.isRole(value))) {
        return false
      }
    }
    return true
  }

  async isAnyRoles(slugs: string[]) {
    for (let slug of slugs) {
      if (await this.isRole(slug)) {
        return true
      }
    }
    return false
  }

  async isAdministrator() {
    if (this.user.id === 1) {
      return true
    }
    return await this.isRole('administrator')
  }

  async can(slug?: string) {
    if (slug) {
      if (await this.isAdministrator()) {
        return true
      } else {
        let permissions = await this.getPermissions()
        for (let item of permissions) {
          if (item.slug === slug) {
            return true
          }
        }
      }
    }
    return false
  }
}
