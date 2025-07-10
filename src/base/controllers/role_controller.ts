import { HttpContext } from '@adonisjs/core/http'
import { amis } from '#amis/amis'
import Resource from '#extends/resource'
import RoleRepository from '#base/repositories/role_repository'
import app from '@adonisjs/core/services/app'
const { inject } = await app.import('@adonisjs/core')

@inject()
export default class RoleController extends Resource {
  protected repository = new RoleRepository()
  constructor(protected ctx: HttpContext) {
    super(ctx)
    this.repository.setModel(this.ctx.admin.model('Role'))
  }

  protected fields() {
    return [
      amis('column_item').name('id').label(this.ctx.admin.t('id')),
      amis('column_item').name('name').label(this.ctx.admin.t('role_name')),
      amis('column_item').name('slug').label(this.ctx.admin.t('role_slug')),
      amis('column_item').name('createdAt').type('datetime').label(this.ctx.admin.t('created_at')),
      amis('column_item').name('updatedAt').label(this.ctx.admin.t('updated_at')).type('datetime'),
    ]
  }

  protected forms(isEdit: boolean) {
    return [
      amis('input_text')
        .name('id')
        .label(this.ctx.admin.t('id'))
        .disabled(isEdit)
        .permission(isEdit),
      amis('input_text').name('name').label(this.ctx.admin.t('role_name')),
      amis('input_text').name('slug').label(this.ctx.admin.t('role_slug')),
      amis('select')
        .name('menus')
        .label(this.ctx.admin.t('menu'))
        .multiple(true)
        .joinValues(false)
        .valueField('id')
        .labelField('name')
        .source(this.ctx.admin.api(this.ctx.admin.route('auth_menu.index'), 'export')),
      amis('select')
        .name('permissions')
        .label(this.ctx.admin.t('permission'))
        .multiple(true)
        .joinValues(false)
        .valueField('id')
        .labelField('name')
        .source(this.ctx.admin.api(this.ctx.admin.route('auth_permission.index'), 'export')),
    ]
  }
}
