import type { LucidRow, LucidModel, ModelQueryBuilderContract } from '@adonisjs/lucid/types/model'
import { QueryType } from '#types'

export default abstract class Repository {
  protected primaryKey: string = 'id'
  protected abstract model: LucidModel
  protected filters: Record<string, QueryType> = {
    id: QueryType.eq,
    orderBy: QueryType.orderBy,
  }

  getModel() {
    return this.model
  }

  protected queryBuilder(
    query: ModelQueryBuilderContract<LucidModel, LucidRow>,
    inputs: Record<string, string>,
    filters: Record<string, QueryType> = {}
  ) {
    filters = Object.assign(this.filters, filters)
    for (let key in inputs) {
      if (inputs[key] === '') {
        continue
      }
      switch (filters[key]) {
        case QueryType.eq:
          query = query.where(key, inputs[key])
          break
        case QueryType.gt:
          query = query.where(key, filters.gt, inputs[key])
          break
        case QueryType.lt:
          query = query.where(key, filters.lt, inputs[key])
          break
        case QueryType.like:
          query = query.whereLike(key, filters.like.replace('s', inputs[key]))
          break
        case QueryType.llike:
          query = query.whereLike(key, filters.llike.replace('s', inputs[key]))
          break
        case QueryType.rlike:
          query = query.whereLike(key, filters.rlike.replace('s', inputs[key]))
          break
        case QueryType.between:
          let value = inputs[key].split(',')
          if (value.length === 1) {
            query = query.where(key, '>', value[0])
          } else if (value.length === 2) {
            query = query.whereBetween(key, [value[0], value[1]])
          }
          break
        case QueryType.orderBy:
          query = query.orderBy(inputs[key], inputs['orderDir'] === 'desc' ? 'desc' : 'asc')
          break
        default:
          break
      }
    }
    return query
  }

  protected only(qs: Record<string, any>, keys: string[]) {
    let map: Record<string, any> = {}
    for (let key of keys) {
      map[key] = qs[key]
    }
    return map
  }

  protected except(qs: Record<string, any>, keys: string[]) {
    let map: Record<string, any> = {}
    for (let key in qs) {
      if (!keys.includes(key)) {
        map[key] = qs[key]
      }
    }
    return map
  }

  protected relations(items: Record<string, any>[] | string, key: string = 'id') {
    let ids = []
    if (typeof items === 'string') {
      ids = items.split(',')
    } else {
      for (let item of items) {
        ids.push(item[key])
      }
    }
    return ids
  }

  async paginate(qs: Record<string, any>, filters: Record<string, QueryType> = {}) {
    let query = this.queryBuilder(this.model.query(), qs, filters)
    return await query.paginate(Number.parseInt(qs.page ?? 1), Number.parseInt(qs.per_page ?? 10))
  }

  async export(qs: Record<string, string>, filters: Record<string, QueryType> = {}) {
    let query = this.queryBuilder(this.model.query(), qs, filters)
    return await query.limit(100000)
  }

  async detail(id: number | string) {
    return await this.model.query().where(this.primaryKey, id).firstOrFail()
  }

  async create(data: Record<string, any>) {
    return await this.model.transaction(async (trx) => {
      return await this.model.create(data, { client: trx })
    })
  }

  async update(ids: number[] | string[], data: Record<string, any>) {
    return await this.model.transaction(async (trx) => {
      for (let id of ids) {
        let item = await this.model.query({ client: trx }).where(this.primaryKey, id).firstOrFail()
        item.merge(data)
        await item.save()
      }
      return await this.model.query({ client: trx }).whereIn(this.primaryKey, ids)
    })
  }

  async delete(ids: string[] | number[]) {
    return await this.model.transaction(async (trx) => {
      for (let id of ids) {
        let item = await this.model.query({ client: trx }).where(this.primaryKey, id).firstOrFail()
        await item.delete()
      }
      return true
    })
  }

  async forceDelete(ids: string[] | number[]) {
    return await this.model.transaction(async (trx) => {
      for (let id of ids) {
        let item = await this.model.query({ client: trx }).where(this.primaryKey, id).firstOrFail()
        await (item as any).forceDelete()
      }
      return true
    })
  }

  async restore(ids: string[] | number[]) {
    return await this.model.transaction(async (trx) => {
      for (let id of ids) {
        let item = await this.model.query({ client: trx }).where(this.primaryKey, id).firstOrFail()
        await (item as any).restore()
      }
      return true
    })
  }
}
