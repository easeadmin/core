import type { LucidRow, LucidModel, ModelQueryBuilderContract } from '@adonisjs/lucid/types/model'
import { QueryType } from '#types'

export default abstract class Repository {
  protected primaryKey = 'id'
  protected maxPageLimit = 100
  protected maxExportLimit = 1000
  protected abstract model: LucidModel
  protected filters: Record<string, QueryType> = {
    id: QueryType.eq,
    orderBy: QueryType.orderBy,
  }

  getModel() {
    return this.model
  }

  /**
   * get tree all key value
   */
  // protected getAttachValues(items: any[], key: string, values: any[]) {
  //   items.forEach((item) => {
  //     values.push(item[key])
  //     if (item.children && item.children.length > 0) {
  //       values = this.getAttachValues(item.children, key, values)
  //     }
  //   })
  //   return values
  // }

  protected queryBuilder(
    query: ModelQueryBuilderContract<LucidModel, LucidRow>,
    inputs: Record<string, string>,
    filters: Record<string, QueryType> = {}
  ) {
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

  async paginate(qs: Record<string, string>, filters: Record<string, QueryType> = {}) {
    let perPage = Number.parseInt(qs.per_page ?? '10')
    perPage = perPage > this.maxPageLimit ? this.maxPageLimit : perPage
    let query = this.queryBuilder(this.model.query(), qs, Object.assign(this.filters, filters))
    let result = await query.paginate(Number.parseInt(qs.page ?? '1'), perPage)
    return result
  }

  async export(qs: Record<string, string>, filters: Record<string, QueryType> = {}) {
    let query = this.queryBuilder(this.model.query(), qs, Object.assign(this.filters, filters))
    let result = query.limit(this.maxExportLimit)
    return result
  }

  async detail(id: number | string) {
    let result = await this.model.findByOrFail(this.primaryKey, id)
    return result
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
      return this.model.query({ client: trx }).whereIn(this.primaryKey, ids)
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
