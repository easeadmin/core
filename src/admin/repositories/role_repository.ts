import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { QueryType } from '../../types.js'
import ResourceRepository from '../../repositories/resource_repository.js'

@inject()
export default class RoleRepository extends ResourceRepository {
  protected fields = ['name', 'slug', 'menus', 'permissions']
  constructor(protected ctx: HttpContext) {
    super()
    this.model = ctx.admin.model('Role')
  }

  protected scope(query: any) {
    return query.preload('menus').preload('permissions')
  }

  async options(qs: Record<string, string> = {}, filters: Record<string, QueryType> = {}) {
    const model =
      qs.type === 'menus' ? this.ctx.admin.model('Menu') : this.ctx.admin.model('Permission')
    const builder = this.queryBuilder(model.query(), qs, filters)
    let result = await builder.select('id', 'name', 'parentId')
    return this.ctx.admin.makeTree(result)
  }
}
