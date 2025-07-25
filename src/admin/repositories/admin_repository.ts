import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import app from '@adonisjs/core/services/app'
import Repository from '../../repositories/repository.js'
import {
  E_ADMIN_INVALID_USER,
  E_ADMIN_INVALID_PASSWORD,
  E_ADMIN_INVALID_UPLOAD_FILE,
} from '../../errors.js'

@inject()
export default class AdminRepository extends Repository<AdminRepository> {
  constructor(protected ctx: HttpContext) {
    super()
  }

  protected makeMenuItem(item: any) {
    let menu: Record<string, any> = {
      id: item.id,
      label: this.ctx.admin.t(item.name),
      parentId: item.parentId,
    }
    if (item.icon) {
      menu['icon'] = `fa ${item.icon}`
    }
    if (item.slug) {
      menu['url'] = item.slug
      menu['schemaApi'] = this.ctx.admin.api('schema', item.slug)
    }
    if (item.visible !== 1) {
      menu['visible'] = false
    }
    if (item.id === 2) {
      menu['isDefaultPage'] = true
    }
    return menu
  }

  /**
   * menus tree
   */
  async trees(_qs: Record<string, any>, _filters: Record<string, any>) {
    let result = await this.ctx.admin.getMenus()
    let menus = result.map((item) => this.makeMenuItem(item))
    return { pages: this.ctx.admin.makeTree(menus, true) }
  }

  /**
   * update profile
   */
  async update(id: string, data: Record<string, any>) {
    const update: Record<string, string> = { nickname: data.nickname, avatar: data.avatar }
    if (`${this.ctx.admin.user.id}` !== `${id}`) {
      throw E_ADMIN_INVALID_USER
    } else if (data.new_password) {
      if (!data.old_password || data.old_password.length < 5) {
        throw E_ADMIN_INVALID_PASSWORD
      }
      if (!data.new_password || data.new_password.length < 5) {
        throw E_ADMIN_INVALID_PASSWORD
      }
      if ((await this.ctx.admin.user.verifyPassword(data.old_password)) === false) {
        throw E_ADMIN_INVALID_PASSWORD
      }
      update.password = data.new_password
    }
    this.ctx.admin.user.merge(update)
    await this.ctx.admin.user.save()
    return this.ctx.admin.user
  }

  /**
   * upload avatar
   */
  async store() {
    const file = this.ctx.request.file('file', {
      size: this.ctx.admin.config.upload.maxsize,
      extnames: this.ctx.admin.config.upload.extnames,
    })

    if (!file) {
      throw E_ADMIN_INVALID_UPLOAD_FILE
    }

    let name = `${Date.now()}.${file.extname}`
    let path = `/uploads/avatars`
    let url = `${path}/${name}`

    if ('moveToDisk' in file) {
      await (file as any).moveToDisk(name, this.ctx.admin.config.upload.driver)
      url = file.meta.url
    } else {
      await file.move(app.publicPath(path), { name: name })
    }

    return { value: url }
  }

  async delete() {
    let result = [this.ctx.admin.user.id]
    this.ctx.admin.logout()
    return result
  }
}
