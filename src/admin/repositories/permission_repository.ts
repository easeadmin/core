import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { QueryType } from '#core/src/types'
import router from '@adonisjs/core/services/router'
import ResourceRepository from '#core/src/repositories/resource_repository'

@inject()
export default class PermissionRepository extends ResourceRepository {
  protected fields = ['name', 'slug', 'order', 'parentId']
  constructor(protected ctx: HttpContext) {
    super()
    this.model = ctx.admin.model('Permission')
  }

  async trees(qs: Record<string, string> = {}, filters: Record<string, QueryType> = {}) {
    let builder = this.queryBuilder(this.model.query(), qs, filters)
    let result = await builder.orderBy('order', 'asc').select()
    return this.ctx.admin.makeTree(result)
  }

  async options(qs: Record<string, string> = {}, filters: Record<string, QueryType> = {}) {
    if (qs.type === 'routes') {
      let path: Record<string, any> = {}
      let routes = router.toJSON()
      routes.root.forEach((item) => {
        let name = item.name ?? ''
        if (name.indexOf(qs.term) > -1) {
          path[name] = { label: name, value: name }
        }
      })
      return Object.values(path)
    }
    let builder = this.queryBuilder(this.model.query(), qs, filters)
    let result = await builder.orderBy('order', 'asc').select('id', 'name', 'parentId')
    return this.ctx.admin.makeTree(result)
  }
}
