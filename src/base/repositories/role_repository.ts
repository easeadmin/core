import Repository from '#extends/repository'
import { BaseModel } from '@adonisjs/lucid/orm'
import { QueryType } from '#types'

export default class RoleRepository extends Repository {
  protected model = BaseModel
  setModel(model: typeof BaseModel) {
    this.model = model
  }

  async paginate(qs: Record<string, string>, filters: Record<string, QueryType> = {}) {
    let result = await super.paginate(qs, filters)
    let items = result.all()
    for (let item of items) {
      await item.load('menus' as any)
      await item.load('permissions' as any)
    }
    return result
  }

  async create(data: Record<string, any>) {
    let menus = data.menus ? data.menus.map((res: { id: any }) => res.id) : undefined
    let permissions = data.permissions
      ? data.permissions.map((res: { id: any }) => res.id)
      : undefined
    delete data.menus
    delete data.permissions
    return await this.model.transaction(async (trx) => {
      let item = await this.model.create(data, { client: trx })
      if (menus.length > 0) {
        await item.related('menus' as any).attach(menus)
      }
      if (permissions.length > 0) {
        await item.related('permissions' as any).attach(permissions)
      }
      return item
    })
  }

  async update(ids: number[] | string[], data: Record<string, any>) {
    let menus = data.menus
    let permissions = data.permissions
    delete data.menus
    delete data.permissions
    return await this.model.transaction(async (trx) => {
      for (let id of ids) {
        let item = await this.model.query({ client: trx }).where(this.primaryKey, id).firstOrFail()
        item.merge(data)
        await item.save()
        if (menus !== undefined) {
          await item.related('menus' as any).sync(menus.map((res: { id: any }) => res.id))
        }
        if (permissions !== undefined) {
          await item
            .related('permissions' as any)
            .sync(permissions.map((res: { id: any }) => res.id))
        }
      }
      return await this.model.query({ client: trx }).whereIn(this.primaryKey, ids)
    })
  }

  async detail(id: number | string) {
    let result = await super.detail(id)
    await result.load('menus' as any)
    await result.load('permissions' as any)
    return result
  }
}
