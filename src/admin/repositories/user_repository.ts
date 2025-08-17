import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { QueryType } from '../../types.js'
import ResourceRepository from '../../repositories/resource_repository.js'

@inject()
export default class UserRepository extends ResourceRepository {
  protected fields = ['username', 'password', 'nickname', 'avatar', 'roles']
  constructor(protected ctx: HttpContext) {
    super()
    this.model = ctx.admin.model('User')
  }

  protected scope(query: any) {
    return query.preload('roles')
  }

  async options(qs: Record<string, string> = {}, filters: Record<string, QueryType> = {}) {
    const role = this.ctx.admin.model('Role')
    const builder = this.queryBuilder(role.query(), qs, filters)
    return await builder.select('id', 'name')
  }

  async update(id: string, data: Record<string, any>) {
    if (data.password && data.password.length < 5) {
      delete data.password
    }
    return await super.update(id, data)
  }
}
