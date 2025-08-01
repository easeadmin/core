import Repository from '../repositories/repository.js'
import Controller from '../controllers/controller.js'
import { schema } from '../builder/index.js'
import amis from '../builder/amis.js'

export default abstract class ResourceController extends Controller {
  protected showOperations = true
  protected showCreateButton = true
  protected showDetailButton = true
  protected showEditButton = true
  protected showDeleteButton = true
  protected showBulkDeleteButton = true
  protected showFilterToggler = true
  protected showBulkActions = true
  protected abstract repository: Repository<any>
  protected abstract forms(isEdit: boolean): schema<any>[]
  protected abstract fields(): schema<any>[]
  protected defaultParams: Record<string, string> = { orderBy: 'id', orderDir: 'desc' }

  /**
   * get filter keys
   */
  protected getFilters() {
    let keys: Record<string, any> = {}
    let filters = this.filters()
    for (let filter of filters) {
      let json = filter.toJSON()
      if (json) {
        keys[json.name] = json.filter
      }
    }
    return keys
  }

  /**
   * get form keys
   */
  protected getForms(isEdit = false) {
    let keys: string[] = []
    let forms = this.forms(isEdit)
    for (let form of forms) {
      let json = form.toJSON()
      if (json && json.name) {
        keys.push(json.name)
      }
    }
    return keys
  }

  /**
   * build layout schema
   */
  protected builder(): schema<any> {
    let columns = this.fields()
    let operations = this.operations()
    if (operations) {
      columns.push(operations)
    }
    return amis('page').body(
      amis('crud')
        .id('list')
        .api(this.ctx.admin.api('paginate'))
        .syncLocation(false)
        .filterTogglable(true)
        .filterDefaultVisible(false)
        .defaultParams(this.defaultParams)
        .footerToolbar(['statistics', 'switch-per-page', 'pagination'])
        .bulkActions(this.bulkActions())
        .headerToolbar(this.headerToolbar())
        .filter(this.filter())
        .columns(columns)
    )
  }

  /**
   * global filter fields
   */
  protected filters(): schema<any>[] {
    return [amis('input_text').name('id').label('ID').filter('eq')]
  }

  /**
   * detail form
   */
  protected detail(): schema<any> {
    return amis('form')
      .id('detail-form')
      .static(true)
      .initApi(this.ctx.admin.api('show'))
      .body(this.forms(true))
  }

  /**
   * create form
   */
  protected creator(): schema<any> {
    return amis('form').id('create-form').api(this.ctx.admin.api('store')).body(this.forms(false))
  }

  /**
   * edit form
   */
  protected editor(): schema<any> {
    return amis('form')
      .id('edit-form')
      .initApi(this.ctx.admin.api('edit'))
      .api(this.ctx.admin.api('update'))
      .body(this.forms(true))
  }

  /**
   * table filter
   */
  protected filter(): schema<any> {
    return amis('form')
      .id('filter-form')
      .api(this.ctx.admin.api('paginate'))
      .body(this.filters())
      .actions([
        amis('action').actionType('reset').label(this.ctx.admin.t('reset')),
        amis('action')
          .actionType('submit')
          .label(this.ctx.admin.t('filter'))
          .icon('search')
          .active(true),
      ])
  }

  /**
   * bulk actions button
   */
  protected bulkActions(): schema<any>[] {
    return [
      amis('action')
        .api(this.ctx.admin.api('delete'))
        .permission(this.showBulkDeleteButton)
        .label(this.ctx.admin.t('bulk_delete'))
        .confirmText(this.ctx.admin.t('are_you_sure_delete'))
        .level('danger'),
    ]
  }

  /**
   * table header show buttons
   */
  protected headerToolbar(): schema<any>[] {
    return [
      amis('schema').type('filter-toggler').permission(this.showFilterToggler),
      amis('schema').type('bulkActions').permission(this.showBulkActions),
      amis('button')
        .label(this.ctx.admin.t('create'))
        .dialog(
          amis('dialog').closeOnEsc(true).title(this.ctx.admin.t('create')).body(this.creator())
        )
        .align('right')
        .level('primary'),
    ]
  }

  /**
   * operation actions
   */
  protected actions(): schema<any>[] {
    return [
      amis('action')
        .label(this.ctx.admin.t('show'))
        .permission(this.showDetailButton)
        .dialog(
          amis('dialog').closeOnEsc(true).title(this.ctx.admin.t('show')).body(this.detail())
        ),
      amis('action')
        .label(this.ctx.admin.t('edit'))
        .permission(this.showEditButton)
        .dialog(
          amis('dialog').closeOnEsc(true).title(this.ctx.admin.t('edit')).body(this.editor())
        ),
      amis('action')
        .label(this.ctx.admin.t('delete'))
        .permission(this.showDeleteButton)
        .api(this.ctx.admin.api('delete'))
        .confirmText(this.ctx.admin.t('are_you_sure_delete')),
    ]
  }

  /**
   * table operations
   */
  protected operations(): schema<any> {
    return amis('column_item')
      .type('operation')
      .align('right')
      .width('50')
      .permission(this.showOperations)
      .label(this.ctx.admin.t('operation'))
      .buttons([
        amis('dropdown_button')
          .icon('ellipsis-h')
          .level('link')
          .hideCaret(true)
          .buttons(this.actions()),
      ])
  }

  async index(): Promise<any> {
    if (this.ctx.admin.isApiAction('schema')) {
      return this.ok(this.builder().toJSON())
    }

    const qs = this.ctx.request.qs()
    const filters = this.getFilters()
    if (this.ctx.admin.isApiAction('paginate')) {
      if ('trees' in this.repository) {
        return this.ok(await (this.repository as any).trees(qs, filters))
      }
      return this.ok(await this.repository.paginate(qs, filters))
    }

    if (this.ctx.admin.isApiAction('export')) {
      return this.ok(await this.repository.export(qs, filters))
    }

    if (this.ctx.admin.isApiAction('options')) {
      return this.ok(await this.repository.options(qs, filters))
    }

    return await this.create()
  }

  async create(): Promise<any> {
    return this.render(this.builder().toJSON())
  }

  async edit(): Promise<any> {
    return this.ok(await this.repository.edit(this.ctx.request.param('id')))
  }

  async show(): Promise<any> {
    return this.ok(await this.repository.show(this.ctx.request.param('id')))
  }

  async store(): Promise<any> {
    let data = this.ctx.request.only(this.getForms())
    return this.ok(await this.repository.store(data))
  }

  async update(): Promise<any> {
    let id = this.ctx.request.param('id')
    let data = this.ctx.request.only(this.getForms(true))
    return this.ok(await this.repository.update(id, data))
  }

  async destroy(): Promise<any> {
    let id = this.ctx.request.param('id')
    if (this.ctx.admin.isApiAction('forceDelete')) {
      return this.ok(await this.repository.forceDelete(id))
    }
    if (this.ctx.admin.isApiAction('restore')) {
      return this.ok(await this.repository.restore(id))
    }

    return this.ok(await this.repository.delete(id))
  }
}
