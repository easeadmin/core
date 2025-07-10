import { HttpContext } from '@adonisjs/core/http'
import { amis } from '#amis/amis'
import Resource from '#extends/resource'
import PermissionRepository from '#base/repositories/permission_repository'
import app from '@adonisjs/core/services/app'
const { inject } = await app.import('@adonisjs/core')

@inject()
export default class PermissionController extends Resource {
  protected repository = new PermissionRepository()
  constructor(protected ctx: HttpContext) {
    super(ctx)
    this.repository.setModel(this.ctx.admin.model('Permission'))
  }

  protected columns() {
    return [
      amis('column_item').name('id').label(this.ctx.admin.t('id')),
      amis('column_item').name('name').label(this.ctx.admin.t('permission_name')),
      amis('column_item').name('slug').label(this.ctx.admin.t('permission_slug')),
      amis('column_item').name('createdAt').type('datetime').label(this.ctx.admin.t('created_at')),
      amis('column_item').name('updatedAt').type('datetime').label(this.ctx.admin.t('updated_at')),
    ]
  }

  protected forms(isEdit: boolean) {
    return [
      amis('input_text')
        .name('id')
        .label(this.ctx.admin.t('id'))
        .disabled(isEdit)
        .permission(isEdit),
      amis('input_text').name('name').label(this.ctx.admin.t('permission_name')),
      amis('input_text').name('slug').label(this.ctx.admin.t('permission_slug')),
    ]
  }
}
