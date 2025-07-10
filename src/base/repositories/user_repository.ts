import Repository from '#extends/repository'
import { BaseModel } from '@adonisjs/lucid/orm'
import { QueryType } from '#types'

export default class UserRepository extends Repository {
  protected model = BaseModel
  setModel(model: typeof BaseModel) {
    this.model = model
  }

  async paginate(qs: Record<string, string>, filters: Record<string, QueryType> = {}) {
    let result = await super.paginate(qs, filters)
    let items = result.all()
    for (let item of items) {
      await item.load('roles' as any)
    }
    return result
  }

  async create(data: Record<string, any>) {
    let roles = data.roles.map((res: { id: any }) => res.id)
    delete data.roles
    return await this.model.transaction(async (trx) => {
      let item = await this.model.create(data, { client: trx })
      if (roles) {
        await item.related('roles' as any).attach(roles)
      }
      return item
    })
  }

  async update(ids: number[] | string[], data: Record<string, any>) {
    let roles = data.roles ? data.roles.map((res: { id: any }) => res.id) : undefined
    delete data.roles
    return await this.model.transaction(async (trx) => {
      for (let id of ids) {
        let item = await this.model.query({ client: trx }).where(this.primaryKey, id).firstOrFail()
        item.merge(data)
        await item.save()
        if (roles !== undefined) {
          await item.related('roles' as any).sync(roles)
        }
      }
      return await this.model.query({ client: trx }).whereIn(this.primaryKey, ids)
    })
  }

  async detail(id: number | string) {
    let result = await super.detail(id)
    await result.load('roles' as any)
    return result
  }

  async delete(ids: string[] | number[]) {
    for (let id of ids) {
      if (`${id}` === '1') {
        throw new Error('deleting superadmin is not allowed')
      }
    }
    return await super.delete(ids)
  }
}
