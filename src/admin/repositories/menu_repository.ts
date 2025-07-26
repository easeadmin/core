import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { QueryType } from '../../types.js'
import ResourceRepository from '../../repositories/resource_repository.js'

@inject()
export default class MenuRepository extends ResourceRepository {
  protected fields = ['name', 'slug', 'icon', 'order', 'visible', 'parentId']
  constructor(protected ctx: HttpContext) {
    super()
    this.model = ctx.admin.model('Menu')
  }

  async trees(qs: Record<string, string> = {}, filters: Record<string, QueryType> = {}) {
    let builder = this.queryBuilder(this.model.query(), qs, filters)
    let result = await builder.orderBy('order', 'asc').select()
    return this.ctx.admin.makeTree(result)
  }

  async options(qs: Record<string, string> = {}, filters: Record<string, QueryType> = {}) {
    let builder = this.queryBuilder(this.model.query(), qs, filters)
    let result = await builder.orderBy('order', 'asc').select('id', 'name', 'parentId')
    return this.ctx.admin.makeTree(result)
  }
}
