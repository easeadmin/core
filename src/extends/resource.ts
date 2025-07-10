import { HttpContext } from '@adonisjs/core/http'
import { amis } from '#amis/amis'
import { inject } from '@adonisjs/core'
import { ApiResponse } from '#types'
import Repository from '#extends/repository'

@inject()
export default abstract class Resource {
  protected abstract repository: Repository
  constructor(protected ctx: HttpContext) {}

  protected success(data: any, msg: string = ''): ApiResponse {
    return { status: 0, data: data, msg: msg }
  }

  protected error(msg: string, code: number = 1): ApiResponse {
    return { status: code, msg: msg }
  }

  /**
   * global show fields
   */
  protected fields(): any {
    return [amis('column_item').name('id').label('ID')]
  }

  /**
   * global filter fields
   */
  protected filters(): any {
    return [amis('input_text').name('id').label('ID').filter('eq')]
  }

  /**
   * global form fields
   */
  protected forms(isEdit: boolean): any {
    return [amis('input_text').name('id').label('ID').disabled(isEdit).permission(isEdit)]
  }

  /**
   * detail form
   */
  protected detail(): any {
    return amis('form').initApi(this.ctx.admin.api('${id}')).body(this.forms(true)).static(true)
  }

  /**
   * create form
   */
  protected creator(): any {
    return amis('form')
      .api(this.ctx.admin.api('', 'ajax', 'post'))
      .body(this.forms(false))
  }

  /**
   * edit form
   */
  protected editor(): any {
    return amis('form')
      .api(this.ctx.admin.api('${id}', 'ajax', 'put'))
      .body(this.forms(true))
  }

  /**
   * operation actions
   */
  protected actions(): any {
    return [
      amis('action')
        .label(this.ctx.admin.t('show'))
        .dialog(amis('dialog').title(this.ctx.admin.t('show')).body(this.detail())),
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
   * bulk actions button
   */
  protected bulkActions(): any {
    return [
      amis('action')
        .actionType('ajax')
        .api(this.ctx.admin.api('${ids}', 'ajax', 'delete'))
        .label(this.ctx.admin.t('bulk_delete'))
        .level('danger')
        .confirmText(this.ctx.admin.t('are_you_sure_delete')),
    ]
  }

  /**
   * table header show buttons
   */
  protected headerToolbar(): any {
    return [
      amis('schema').type('filter-toggler'),
      amis('schema').type('bulkActions'),
      amis('button')
        .label(this.ctx.admin.t('create'))
        .dialog(amis('dialog').title(this.ctx.admin.t('create')).body(this.creator()))
        .align('right')
        .level('primary'),
    ]
  }

  protected columns(): any {
    return [
      ...this.fields(),
      amis('column_item')
        .type('operation')
        .align('right')
        .width('50')
        .label(this.ctx.admin.t('operation'))
        .buttons([
          amis('dropdown_button')
            .icon('ellipsis-h')
            .level('link')
            .hideCaret(true)
            .buttons(this.actions()),
        ]),
    ]
  }

  /**
   * table filter
   */
  protected filter(): any {
    return amis('form')
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
   * render amis schema
   */
  protected schema(): any {
    return amis('page').body(
      amis('crud')
        .api(this.ctx.admin.api())
        .syncLocation(false)
        .filterTogglable(true)
        .filterDefaultVisible(false)
        .defaultParams({ orderBy: 'id', orderDir: 'desc' })
        .footerToolbar(['statistics', 'switch-per-page', 'pagination'])
        .bulkActions(this.bulkActions())
        .headerToolbar(this.headerToolbar())
        .filter(this.filter())
        .columns(this.columns())
    )
  }

  /**
   * crud schema or api data
   */
  async index(): Promise<any> {
    // schema render
    if (this.ctx.request.header('x-action') === 'schema') {
      return this.success(this.schema().toJSON())
    }

    // export data
    if (this.ctx.request.header('x-action') === 'export') {
      return this.success(await this.repository.export(this.ctx.request.qs()))
    }

    // paginate data
    let result = await this.repository.paginate(this.ctx.request.qs())
    return this.success({ total: result.total, items: result.all() })
  }

  /**
   * create api
   */
  async create(): Promise<any> {
    return this.success(amis('page').body(this.creator()).toJSON())
  }

  /**
   * edit api
   */
  async edit(): Promise<any> {
    // schema render
    return this.success(amis('page').body(this.editor()).toJSON())
  }

  /**
   * detail api
   */
  async show(): Promise<any> {
    // schema render
    return this.success(amis('page').body(this.detail()).toJSON())
  }

  /**
   * store api
   */
  async store(): Promise<any> {
    return this.success(await this.repository.create(this.ctx.request.body()))
  }

  /**
   * update api
   */
  async update(): Promise<any> {
    let ids: any[] = this.ctx.request.param('id').split(',')
    return this.success(await this.repository.update(ids, this.ctx.request.body()))
  }

  /**
   * delete api
   */
  async destroy(): Promise<any> {
    let ids: any[] = this.ctx.request.param('id').split(',')

    // restore
    if (this.ctx.request.header('x-action') === 'restore') {
      return this.success(await this.repository.restore(ids))
    }

    // force delete
    if (this.ctx.request.header('x-action') === 'force') {
      return this.success(await this.repository.forceDelete(ids))
    }

    // delete
    return this.success(await this.repository.delete(ids))
  }
}
