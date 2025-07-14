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

  /**
   * get current controller name prefix
   */
  get current() {
    return this.lang
  }

  /**
   * get admin version
   */
  get version() {
    return this.adminVersion
  }

  /**
   * get admin config
   */
  get config(): AdminConfig {
    return app.config.get(this.name)
  }

  /**
   * get locale language file name
   */
  get locale() {
    if ('i18n' in this.ctx) {
      return (this.ctx.i18n as any).locale
    }
    return 'en'
  }

  /**
   * get admin router prefix
   */
  get asname() {
    return this.name
  }

  /**
   * get current user lucidRow
   */
  get user() {
    if ('auth' in this.ctx) {
      return (this.ctx as any).auth.use(this.name)?.user
    }
  }

  /**
   * get current user json
   */
  get userinfo() {
    if ('auth' in this.ctx) {
      return this.user?.toJSON()
    }
  }

  /**
   * admin i18n helper
   */
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

  /**
   * make admin api
   */
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
    } else if (url.indexOf('#') === 0) {
      url = this.url + url.replace('#', '/')
    }
    let headers: Record<string, string> = { 'x-action': action }
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

  /**
   * get admin model by name
   */
  model(name: string): LucidModel {
    return this.models[name]
  }

  /**
   * admin router builder helper
   */
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

  /**
   * make tree by parentId
   */
  makeTrees(items: any[]) {
    let trees: any[] = []
    let flats: Record<string, any> = {}
    items.forEach((item) => {
      flats[item.id] = { ...item, children: [] }
    })

    items.forEach((item) => {
      if (item.parentId < 1) {
        trees.push(flats[item.id])
      } else {
        let parent = flats[item.parentId]
        parent.children.push(flats[item.id])
      }
    })

    return trees
  }

  /**
   * make admin route identifier
   */
  identifier(name: string) {
    return `${this.asname}.${name}`
  }

  /**
   * check current route is except
   */
  isExcept(): boolean {
    const excepts = [`${this.name}.auth_login`].concat(this.config.auth.excepts)
    let now = this.ctx.route?.name ?? ''
    for (let item of excepts) {
      if (now.indexOf(item) === 0) {
        return true
      }
    }
    return false
  }

  /**
   * admin user authenticate
   */
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

  /**
   * admin current request permission
   */
  async permission() {
    if (this.config.auth.permission) {
      if (!this.isExcept()) {
        let can = await this.can(this.ctx.route?.name)
        this.ctx.response.abortIf(can === false, this.t('permission_denied'), 403)
      }
    }
  }

  /**
   * get current user roles
   */
  async getRoles() {
    if (!this.user.roles) {
      await this.user.load('roles')
    }
    return this.user.roles
  }

  /**
   * get current user menus
   */
  async getMenus() {
    let menus: any[] = []
    let roles = await this.getRoles()
    for (let role of roles) {
      if (!role.menus) {
        await role.load('menus')
      }
      menus = menus.concat(role.menus)
    }
    menus.sort((a, b) => a.order - b.order)
    return menus
  }

  /**
   * get current user permissions
   */
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

  /**
   * check current user is a role
   */
  async isRole(slug: string) {
    let roles = await this.getRoles()
    for (let role of roles) {
      if (role.slug === slug) {
        return true
      }
    }
    return false
  }

  /**
   * check current user is roles
   */
  async isAllRoles(slugs: string[]) {
    for (let value of slugs) {
      if (!(await this.isRole(value))) {
        return false
      }
    }
    return true
  }

  /**
   * check current user has role
   */
  async isAnyRoles(slugs: string[]) {
    for (let slug of slugs) {
      if (await this.isRole(slug)) {
        return true
      }
    }
    return false
  }

  /**
   * check current user is administrator
   */
  async isAdministrator() {
    if (this.user.id === 1) {
      return true
    }
    return await this.isRole('administrator')
  }

  /**
   * check permission
   */
  async can(slug?: string) {
    if (slug) {
      if (await this.isAdministrator()) {
        return true
      } else {
        let home = this.identifier('auth_home.index')
        if (slug === home) {
          return true
        }
        let permissions = await this.getPermissions()
        for (let item of permissions) {
          if (slug.indexOf(item.slug) === 0) {
            return true
          }
        }
      }
    }
    return false
  }
}
