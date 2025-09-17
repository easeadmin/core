import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import ResourceController from '#core/src/controllers/resource_controller'
import MenuRepository from '#core/src/admin/repositories/menu_repository'
import amis from '#core/src/builder/amis'

@inject()
export default class MenuController extends ResourceController {
  protected showFilterToggler = false
  protected defaultParams: Record<string, string> = {}
  constructor(
    protected ctx: HttpContext,
    protected repository: MenuRepository
  ) {
    super(ctx)
  }

  protected fields() {
    return [
      amis('column_item').name('id').label(this.ctx.admin.t('id')),
      amis('column_item').name('name').label(this.ctx.admin.t('name')),
      amis('column_item').name('slug').label(this.ctx.admin.t('slug')),
      amis('column_item').name('icon').label(this.ctx.admin.t('icon')),
      amis('column_item')
        .name('visible')
        .type('mapping')
        .label(this.ctx.admin.t('visible'))
        .attr('map', { '0': this.ctx.admin.t('no'), '1': this.ctx.admin.t('yes') }),
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
      amis('input_text').name('name').label(this.ctx.admin.t('name')).required(true),
      amis('input_text')
        .name('slug')
        .label(this.ctx.admin.t('slug'))
        .placeholder(this.ctx.admin.t('resource_router_url'))
        .autoComplete(this.ctx.admin.api('options', '?type=routes&term=$term'))
        .validations('minLength:2'),
      amis('input_number')
        .name('order')
        .label(this.ctx.admin.t('order'))
        .placeholder(this.ctx.admin.t('order_by_asc'))
        .validations('isInt'),
      amis('tree_select')
        .name('parentId')
        .showIcon(false)
        .label(this.ctx.admin.t('parent_id'))
        .source(this.ctx.admin.api('options'))
        .valueField('id')
        .labelField('name')
        .searchable(true),
      amis('input_text')
        .name('icon')
        .label(this.ctx.admin.t('icon'))
        .placeholder('fa-folder')
        .description(this.ctx.admin.t('fontawesome_name')),
      amis('input_switch')
        .name('visible')
        .label(this.ctx.admin.t('visible'))
        .trueValue(1)
        .falseValue(0)
        .value(1),
    ]
  }

  protected footerToolbar() {
    return []
  }
}
