import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import { LucidModel } from '@adonisjs/lucid/types/model'
import logger from '@adonisjs/core/services/logger'
import string from '@adonisjs/core/helpers/string'
import router from '@adonisjs/core/services/router'
import app from '@adonisjs/core/services/app'
import { E_ADMIN_PERMISSION_DENIED } from '#core/src/errors'
import { defineConfig } from '#core/define_config'
import { AdminConfig } from '#core/src/types'

@inject()
export default class Admin {
  protected controller: string = ''
  static SUPER_ADMIN_SLUG = 'administrator'
  constructor(
    protected ctx: HttpContext,
    protected name: string,
    protected models: Record<string, LucidModel>
  ) {
    if (this.ctx.route && this.ctx.route.handler) {
      let handlerName = (this.ctx.route.handler as any)?.name ?? ''
      this.controller = string.snakeCase(handlerName.split('Controller')[0])
    }
  }

  get title() {
    return this.controller === '' ? 'untitled' : this.controller
  }

  /**
   * get login user
   */
  get user() {
    if ('auth' in this.ctx) {
      return (this.ctx as any).auth.use(this.name)?.user
    }
    return null
  }

  get prefix() {
    return this.name
  }

  /**
   * get login user to json
   */
  get userinfo() {
    return this.user ? this.user.toJSON() : null
  }

  /**
   * get i18n lang
   */
  get lang() {
    let ctx = this.ctx as any
    if ('i18n' in ctx) {
      return ctx.i18n.locale as string
    } else {
      if (app.inDev) {
        logger.info('please run `node ace add @adonisjs/i18n`')
      }
    }
    return 'en'
  }

  /**
   * get admin config
   */
  get config() {
    return app.config.get(this.name, defineConfig()) as AdminConfig
  }

  model(name: string) {
    return this.models[name]
  }

  /**
   * array to flat object
   *
   * @example
   * flatArray([{id:1,name:'a'},{id:2,name:'b'}]) => {1:{id:1,name:'a'},2:{id:2,name:'b'}}
   */
  flatArray(items: any[], pk: string = 'id') {
    let flats: Record<string, any> = {}
    items.forEach((row) => {
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
  makeTree(items: any[], clean: boolean = false, pk: string = 'id', parentKey = 'parentId') {
    let trees: any[] = []
    let flats = this.flatArray(items, pk)
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

  settings(data?: { lang?: string; theme?: string; darkness?: boolean }) {
    let settings = {
      lang: this.lang,
      theme: this.config.client.theme,
      darkness: this.config.client.darkness,
    }
    let result = this.ctx.request.plainCookie('settings')
    if (result && typeof result === 'object') {
      settings = { ...settings, ...result }
    }
    if (data) {
      settings = { ...settings, ...data }
      this.ctx.response.plainCookie('settings', settings)
    }
    return settings
  }

  /**
   * switch i18n locale
   */
  switchLocale(lang: string) {
    if (lang) {
      let ctx = this.ctx as any
      if ('i18n' in ctx && lang !== this.lang) {
        ctx.i18n.switchLocale(lang)
      }
    }
  }

  /**
   * admin i18n translate
   */
  t(key: string, data?: Record<string, any>, fallback?: string): string {
    let translate = ''
    let ctx = this.ctx as any
    if ('i18n' in ctx) {
      let commonKey = `${this.name}.common.${key}`
      let currentKey = `${this.name}.${this.controller}.${key}`
      if (this.controller !== '') {
        translate = ctx.i18n.t(currentKey, data, key)
        if (translate === key) {
          translate = ctx.i18n.t(commonKey, data, key)
        }
      } else {
        translate = ctx.i18n.t(commonKey, data, key)
      }
      if (translate === key) {
        translate = fallback ?? string.sentenceCase(key)
        if (app.inDev) {
          logger.info(`translation missing: ${key} in ${this.controller}`)
        }
      }
    } else {
      translate = string.sentenceCase(key)
    }
    if (translate === '') {
      translate = key
    }
    return translate
  }

  /**
   * admin router builder helper
   */
  url(name: string, options?: { qs?: Record<string, any>; params?: Record<string, any> }) {
    let builder = router.builder()
    if (options) {
      if (options.qs) {
        builder = builder.qs(options.qs)
      }
      if (options.params) {
        builder = builder.params(options.params)
      }
    }
    try {
      return builder.make(this.identifier(name))
    } catch (e) {
      return name
    }
  }

  /**
   * make admin route identifier
   */
  identifier(name: string) {
    return `${this.name}.${name}`
  }

  /**
   * make action api
   */
  api(
    action:
      | 'paginate'
      | 'options'
      | 'export'
      | 'create'
      | 'edit'
      | 'show'
      | 'store'
      | 'update'
      | 'delete'
      | 'schema',
    url: string = '',
    paramKey = 'id'
  ) {
    let methods: Record<string, string> = {
      paginate: 'get',
      options: 'get',
      export: 'get',
      create: 'get',
      edit: 'get',
      show: 'get',
      store: 'post',
      update: 'put',
      delete: 'delete',
      schema: 'get',
    }
    let method = methods[action]
    let headers: Record<string, string> = { 'x-action': action }
    if (method !== 'get' && 'csrfToken' in this.ctx.request) {
      headers['x-csrf-token'] = this.ctx.request.csrfToken as string
    }
    let first = url.substring(0, 1)
    let idmethods = ['show', 'edit', 'update', 'delete']
    if (url === '' || first === '?' || first === '$') {
      let id = this.ctx.request.param(paramKey)
      let now = this.ctx.request.url() ?? ''
      let current = (id ? now.replace(`/${id}`, '') : now).replace(new RegExp('[/ ]+$'), '')
      if (first === '$') {
        url = current + '/' + url
      } else if (idmethods.includes(action)) {
        url = current + '/${id}' + url
      } else {
        url = current + url
      }
      if (action === 'edit') {
        url = url + '/edit'
      }
    }
    return { url: url, method: method, headers: headers }
  }

  /**
   * is action
   */
  isApiAction(
    action:
      | 'paginate'
      | 'options'
      | 'export'
      | 'create'
      | 'edit'
      | 'show'
      | 'store'
      | 'update'
      | 'delete'
      | 'forceDelete'
      | 'restore'
      | 'schema'
  ) {
    return this.ctx.request.header('x-action', '') === action
  }

  /**
   * logout the user
   */
  logout() {
    if ('auth' in this.ctx) {
      ;(this.ctx as any).auth.use(this.name)?.logout()
    }
  }

  /**
   * check current route is except
   */
  isExcept(): boolean {
    let now = this.ctx.request.url()
    for (let item of this.config.auth.excepts) {
      if (now.indexOf(item) === 0) {
        return true
      }
    }
    return false
  }

  /**
   * admin current request permission
   */
  permission() {
    if (this.config.auth.permission) {
      if (!this.isExcept()) {
        if (this.can(this.ctx.route?.name) === false) {
          throw E_ADMIN_PERMISSION_DENIED
        }
      }
    }
  }

  /**
   * check current user is a role
   */
  isRole(slug: string) {
    let roles = this.user.roles
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
  isAllRoles(slugs: string[]) {
    for (let value of slugs) {
      if (!this.isRole(value)) {
        return false
      }
    }
    return true
  }

  /**
   * check current user has role
   */
  isAnyRoles(slugs: string[]) {
    for (let slug of slugs) {
      if (this.isRole(slug)) {
        return true
      }
    }
    return false
  }

  /**
   * check current user is administrator
   */
  isAdministrator() {
    if (this.user.id === 1) {
      return true
    }
    return this.isRole(Admin.SUPER_ADMIN_SLUG)
  }

  /**
   * check permission
   */
  can(slug?: string) {
    if (slug) {
      if (this.isAdministrator()) {
        return true
      } else {
        let permissions: Record<number, any> = {}
        let roles = this.user.roles
        for (let role of roles) {
          for (let permission of role.permissions) {
            permissions[permission.id] = permission
          }
        }
        let values = Object.values(permissions)
        for (let item of values) {
          if (slug.indexOf(item.slug) === 0) {
            return true
          }
        }
      }
    }
    return false
  }
}
