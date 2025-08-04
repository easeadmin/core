import { LucidModel, LucidRow, ModelQueryBuilderContract } from '@adonisjs/lucid/types/model'
import { BaseModel } from '@adonisjs/lucid/orm'
import { QueryType } from '../types.js'
import Repository from './repository.js'

export default class ResourceRepository extends Repository<ResourceRepository> {
  protected pk = 'id'
  protected fields: string[] = []
  protected model: LucidModel = BaseModel
  protected filters: Record<string, QueryType> = {
    id: QueryType.eq,
    orderBy: QueryType.orderBy,
  }

  /**
   * global query scope
   */
  protected scope(query: ModelQueryBuilderContract<LucidModel, LucidRow>) {
    return query
  }

  /**
   * get safe data only the fields input
   */
  protected only(data: Record<string, any>) {
    if (this.fields.length < 1) {
      return data
    }
    let result: Record<string, any> = {}
    for (let key in data) {
      if (this.fields.includes(key)) {
        result[key] = data[key]
      }
    }
    return result
  }

  /**
   * get options value
   */
  protected getOptionsValue(data: any, key: string = 'id') {
    let relations: any[] = []
    if (typeof data === 'string') {
      relations = data.split(',')
    } else if (Array.isArray(data)) {
      for (let item of data) {
        switch (typeof item) {
          case 'object':
            relations.push(item[key])
            break
          case 'string':
            relations.push(item)
            break
          case 'number':
            relations.push(item)
            break
        }
      }
    }
    return relations
  }

  /**
   * get input relation values
   */
  protected getRelationValues(data: Record<string, any>, key: string = 'id') {
    let fields = Object.keys(data)
    let relations: Record<string, any[]> = {}
    this.model.$relationsDefinitions.forEach((item) => {
      if (fields.length < 1 || fields.includes(item.relationName)) {
        if (data[item.relationName]) {
          relations[item.relationName] = this.getOptionsValue(data[item.relationName], key)
        }
      }
    })
    return relations
  }

  protected queryBuilder(
    query: ModelQueryBuilderContract<LucidModel, LucidRow>,
    params: Record<string, string>,
    filters: Record<string, QueryType> = {}
  ) {
    filters = Object.assign(this.filters, filters)
    const types: Record<string, string> = { ...QueryType }
    for (let key in params) {
      if (params[key] === '') {
        continue
      }
      switch (types[filters[key]]) {
        case QueryType.eq:
          query = query.where(key, params[key])
          break
        case QueryType.gt:
          query = query.where(key, QueryType.gt, params[key])
          break
        case QueryType.lt:
          query = query.where(key, QueryType.lt, params[key])
          break
        case QueryType.like:
          query = query.whereLike(key, QueryType.like.replace('s', params[key]))
          break
        case QueryType.llike:
          query = query.whereLike(key, QueryType.llike.replace('s', params[key]))
          break
        case QueryType.rlike:
          query = query.whereLike(key, QueryType.rlike.replace('s', params[key]))
          break
        case QueryType.between:
          let value = params[key].split(',')
          if (value.length === 1) {
            query = query.where(key, '>', value[0])
          } else if (value.length === 2) {
            query = query.whereBetween(key, [value[0], value[1]])
          }
          break
        case QueryType.orderBy:
          query = query.orderBy(params[key], params['orderDir'] === 'desc' ? 'desc' : 'asc')
          break
        default:
          break
      }
    }
    return query
  }

  getModel() {
    return this.model
  }

  setModel(model: LucidModel) {
    this.model = model
  }

  async options(qs: Record<string, string> = {}, filters: Record<string, QueryType> = {}) {
    let query = this.queryBuilder(this.model.query(), qs, filters)
    return await query.select()
  }

  async paginate(qs: Record<string, string> = {}, filters: Record<string, QueryType> = {}) {
    let builder = this.scope(this.queryBuilder(this.model.query(), qs, filters))
    let result = await builder.paginate(
      Number.parseInt(qs.page ?? 1),
      Number.parseInt(qs.perPage ?? 10)
    )
    return { total: result.total, items: result.all() }
  }

  async export(qs: Record<string, string> = {}, filters: Record<string, QueryType> = {}) {
    let builder = this.scope(this.queryBuilder(this.model.query(), qs, filters))
    return await builder.select()
  }

  async edit(id: string | number = 0) {
    return await this.scope(this.model.query()).where(this.pk, id).firstOrFail()
  }

  async show(id: string | number = 0) {
    return await this.scope(this.model.query()).where(this.pk, id).firstOrFail()
  }

  async store(data: Record<string, any> = {}) {
    let record = this.only(data)
    let relations = this.getRelationValues(record)
    return await this.model.transaction(async (trx) => {
      let item = await this.model.create(record, { client: trx })
      for (let key in relations) {
        await item.related(key as any).attach(relations[key])
      }
      return item
    })
  }

  async update(id: string = '', data: Record<string, any> = {}) {
    let result = []
    let ids = id.split(',')
    let record = this.only(data)
    let relations = this.getRelationValues(record)
    return await this.model.transaction(async (trx) => {
      for (let pk of ids) {
        let item = await this.scope(this.model.query({ client: trx }))
          .where(this.pk, pk)
          .firstOrFail()
        item.merge(record)
        await item.save()
        for (let key in relations) {
          await item.related(key as any).sync(relations[key])
        }
        result.push(item)
      }
      return result
    })
  }

  async delete(id: string = '') {
    let ids = id.split(',')
    return await this.model.transaction(async (trx) => {
      for (let pk of ids) {
        let item = await this.scope(this.model.query({ client: trx }))
          .where(this.pk, pk)
          .firstOrFail()
        await item.delete()
      }
      return ids
    })
  }
}
