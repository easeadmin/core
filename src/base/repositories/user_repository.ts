import Repository from '#extends/repository'
import { BaseModel } from '@adonisjs/lucid/orm'
import { QueryType } from '#types'

export default class UserRepository extends Repository {
  protected model = BaseModel
  setModel(model: typeof BaseModel) {
    this.model = model
  }

  async paginate(qs: Record<string, any>, filters: Record<string, QueryType> = {}) {
    let query = this.queryBuilder(this.model.query(), qs, filters).preload('roles' as any)
    let result: any = await query.paginate(
      Number.parseInt(qs.page ?? 1),
      Number.parseInt(qs.per_page ?? 10)
    )
    return result
  }

  async create(data: Record<string, any>) {
    return await this.model.transaction(async (trx) => {
      let result = await this.model.create(
        this.only(data, ['username', 'nickname', 'password', 'avatar']),
        { client: trx }
      )
      if (data.roles) {
        await result.related('roles' as any).attach(this.relations(data.roles))
      }
      return result
    })
  }

  async update(ids: number[] | string[], data: Record<string, any>) {
    let update = this.only(data, ['username', 'nickname', 'password', 'avatar'])
    return await this.model.transaction(async (trx) => {
      for (let id of ids) {
        let item = await this.model.query({ client: trx }).where(this.primaryKey, id).firstOrFail()
        await item.merge(update).save()
        if (data.roles) {
          await item.related('roles' as any).sync(this.relations(data.roles))
        }
      }
      return await this.model.query({ client: trx }).whereIn(this.primaryKey, ids)
    })
  }

  async detail(id: number | string) {
    return await this.model
      .query()
      .where(this.primaryKey, id)
      .preload('roles' as any)
      .firstOrFail()
  }

  async delete(ids: string[] | number[]) {
    ids.forEach((id) => {
      if (`${id}` === '1') {
        throw new Error('deleting superadmin is not allowed')
      }
    })
    return await super.delete(ids)
  }
}
