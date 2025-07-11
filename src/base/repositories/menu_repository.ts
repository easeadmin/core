import Repository from '#extends/repository'
import { BaseModel } from '@adonisjs/lucid/orm'

export default class MenuRepository extends Repository {
  protected maxExportLimit = 100000
  protected model = BaseModel
  setModel(model: typeof BaseModel) {
    this.model = model
  }
}
