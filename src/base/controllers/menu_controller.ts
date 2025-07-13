import { HttpContext } from '@adonisjs/core/http'
import { amis } from '#amis/amis'
import Resource from '#extends/resource'
import MenuRepository from '#base/repositories/menu_repository'
import app from '@adonisjs/core/services/app'
const { inject } = await app.import('@adonisjs/core')

@inject()
export default class MenuController extends Resource {
  protected repository = new MenuRepository()
  constructor(protected ctx: HttpContext) {
    super(ctx)
    this.repository.setModel(this.ctx.admin.model('Menu'))
  }

  protected fields() {
    return [
      amis('column_item').name('id').label(this.ctx.admin.t('id')),
      amis('column_item').name('name').label(this.ctx.admin.t('menu_name')),
      amis('column_item').name('slug').label(this.ctx.admin.t('menu_slug')),
      amis('column_item').name('icon').label(this.ctx.admin.t('menu_icon')).type('icon'),
      amis('column_item')
        .name('hidden')
        .label(this.ctx.admin.t('menu_hidden'))
        .type('mapping')
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
      amis('input_text').name('name').label(this.ctx.admin.t('menu_name')),
      amis('input_text').name('slug').label(this.ctx.admin.t('menu_slug')),
      amis('input_text').name('order').label(this.ctx.admin.t('menu_order')),
      amis('tree_select')
        .name('parentId')
        .showIcon(false)
        .label(this.ctx.admin.t('menu_parent'))
        .source(this.ctx.admin.api('', 'export'))
        .valueField('id')
        .labelField('name')
        .searchable(true),
      amis('input_text')
        .name('icon')
        .label(this.ctx.admin.t('menu_icon'))
        .prefix('fa-')
        .description(this.ctx.admin.t('fontawesome_name')),
      amis('input_switch')
        .name('hidden')
        .label(this.ctx.admin.t('menu_hidden'))
        .trueValue(1)
        .falseValue(0),
    ]
  }

  async index(): Promise<any> {
    // export data
    if (this.ctx.request.header('x-action') === 'export') {
      let exports = await this.repository.export(this.ctx.request.qs())
      let jsons = exports.map((item: any) => item.toJSON())
      jsons.sort((a, b) => a.order - b.order)
      let items = this.ctx.admin.makeTrees(jsons)
      return this.success(items)
    }

    // paginate data
    if (this.ctx.request.header('x-action') === 'ajax') {
      let exports = await this.repository.export(this.ctx.request.qs())
      let jsons = exports.map((item: any) => item.toJSON())
      jsons.sort((a, b) => a.order - b.order)
      let items = this.ctx.admin.makeTrees(jsons)
      return this.success({ total: items.length, items: items })
    }

    return await super.index()
  }
}
