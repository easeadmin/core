import Repository from '#extends/repository'
import { BaseModel } from '@adonisjs/lucid/orm'
import { QueryType } from '#types'

export default class RoleRepository extends Repository {
  protected model = BaseModel
  setModel(model: typeof BaseModel) {
    this.model = model
  }

  async paginate(qs: Record<string, string>, filters: Record<string, QueryType> = {}) {
    let query = this.queryBuilder(this.model.query(), qs, filters)
      .preload('menus' as any)
      .preload('permissions' as any)
    let result: any = await query.paginate(Number.parseInt(qs.page), Number.parseInt(qs.per_page))
    return result
  }

  async create(data: Record<string, any>) {
    return await this.model.transaction(async (trx) => {
      let result = await this.model.create(this.only(data, ['name', 'slug']), { client: trx })
      if (data.menus) {
        await result.related('menus' as any).attach(this.relations(data.menus))
      }
      if (data.permissions) {
        await result.related('permissions' as any).attach(this.relations(data.permissions))
      }
      return result
    })
  }

  async update(ids: number[] | string[], data: Record<string, any>) {
    let update = this.only(data, ['name', 'slug'])
    return await this.model.transaction(async (trx) => {
      ids.forEach(async (id) => {
        let item = await this.model.query({ client: trx }).where(this.primaryKey, id).firstOrFail()
        await item.merge(update).save()
        if (data.menus) {
          await item.related('menus' as any).sync(this.relations(data.menus))
        }
        if (data.permissions) {
          await item.related('permissions' as any).sync(this.relations(data.permissions))
        }
      })
      return await this.model.query({ client: trx }).whereIn(this.primaryKey, ids)
    })
  }

  async detail(id: number | string) {
    return await this.model
      .query()
      .where(this.primaryKey, id)
      .preload('menus' as any)
      .preload('permissions' as any)
      .firstOrFail()
  }
}
