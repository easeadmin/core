import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import ResourceController from '../../controllers/resource_controller.js'
import PermissionRepository from '../repositories/permission_repository.js'
import amis from '../../builder/amis.js'

@inject()
export default class PermissionController extends ResourceController {
  protected showFilterToggler = false
  protected defaultParams: Record<string, string> = {}
  constructor(
    protected ctx: HttpContext,
    protected repository: PermissionRepository
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

  protected forms(isEdit: boolean) {
    return [
      amis('input_text')
        .name('id')
        .disabled(isEdit)
        .permission(isEdit)
        .label(this.ctx.admin.t('id')),
      amis('input_text').name('name').label(this.ctx.admin.t('name')).required(true),
      amis('input_text')
        .name('slug')
        .label(this.ctx.admin.t('slug'))
        .placeholder(this.ctx.admin.t('resource_router_name'))
        .autoComplete(this.ctx.admin.api('options', '?type=routes&term=$term'))
        .validations('minLength:2')
        .required(true),
      amis('input_number')
        .name('order')
        .label(this.ctx.admin.t('order'))
        .placeholder(this.ctx.admin.t('order_by_asc'))
        .validations('isInt'),
      amis('tree_select')
        .name('parentId')
        .valueField('id')
        .labelField('name')
        .showIcon(false)
        .searchable(true)
        .label(this.ctx.admin.t('parent_id'))
        .source(this.ctx.admin.api('options')),
    ]
  }

  protected footerToolbar() {
    return []
  }
}
