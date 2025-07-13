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
        .treeContainerClassName('h-80')
        .label(this.ctx.admin.t('menu'))
        .source(this.ctx.admin.api(this.ctx.admin.route('auth_menu.index'), 'export')),
      amis('input_tree')
        .cascade(true)
        .multiple(true)
        .searchable(true)
        .joinValues(false)
        .showIcon(false)
        .enableDefaultIcon(false)
        .valueField('id')
        .labelField('name')
        .name('permissions')
        .treeContainerClassName('h-80')
        .label(this.ctx.admin.t('permission'))
        .source(this.ctx.admin.api(this.ctx.admin.route('auth_permission.index'), 'export')),
    ]
  }

  protected actions() {
    return [
      amis('action')
        .label(this.ctx.admin.t('edit'))
        .dialog(amis('dialog').title(this.ctx.admin.t('edit')).body(this.editor())),
      amis('action')
        .label(this.ctx.admin.t('delete'))
        .actionType('ajax')
        .api(this.ctx.admin.api('${id}', 'ajax', 'delete'))
        .confirmText(this.ctx.admin.t('are_you_sure_delete')),
    ]
  }

  /**
   * crud schema or api data
   */
  async index(): Promise<any> {
    // paginate data
    if (this.ctx.request.header('x-action') === 'export') {
      let result: any = await this.repository.export(this.ctx.request.qs())
      return this.success(result)
    }

    // paginate data
    if (this.ctx.request.header('x-action') === 'ajax') {
      let result = await this.repository.paginate(this.ctx.request.qs())
      return this.success({ total: result.total, items: result.all() })
    }

    return await super.index()
  }
}
