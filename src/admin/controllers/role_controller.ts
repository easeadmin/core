import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import ResourceController from '../../controllers/resource_controller.js'
import RoleRepository from '../repositories/role_repository.js'
import amis from '../../builder/amis.js'

@inject()
export default class RoleController extends ResourceController {
  protected showDetailButton = false
  constructor(
    protected ctx: HttpContext,
    protected repository: RoleRepository
  ) {
    super(ctx)
  }

  protected fields() {
    return [
      amis('column_item').name('id').label(this.ctx.admin.t('id')),
      amis('column_item').name('name').label(this.ctx.admin.t('name')),
      amis('column_item').name('slug').label(this.ctx.admin.t('slug')),
      amis('column_item').name('createdAt').type('datetime').label(this.ctx.admin.t('created_at')),
      amis('column_item').name('updatedAt').type('datetime').label(this.ctx.admin.t('updated_at')),
    ]
  }

  protected forms(isEdit: boolean): any[] {
    return [
      amis('input_text')
        .name('id')
        .label(this.ctx.admin.t('id'))
        .disabled(isEdit)
        .permission(isEdit),
      amis('input_text').name('name').label(this.ctx.admin.t('name')).required(true),
      amis('input_text')
        .name('slug')
        .label(this.ctx.admin.t('slug'))
        .validations('isUrlPath')
        .required(true),
      amis('input_tree')
        .cascade(true)
        .multiple(true)
        .searchable(true)
        .joinValues(false)
        .showIcon(false)
        .enableDefaultIcon(false)
        .valueField('id')
        .labelField('name')
        .name('menus')
        .label(this.ctx.admin.t('menu'))
        .source(this.ctx.admin.api('options', '?type=menus')),
      amis('input_tree')
        .multiple(true)
        .searchable(true)
        .joinValues(false)
        .showIcon(false)
        .enableDefaultIcon(false)
        .valueField('id')
        .labelField('name')
        .name('permissions')
        .label(this.ctx.admin.t('permission'))
        .source(this.ctx.admin.api('options', '?type=permissions')),
    ]
  }
}
