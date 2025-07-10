import Repository from '#extends/repository'
import { BaseModel } from '@adonisjs/lucid/orm'

export default class MenuRepository extends Repository {
  protected model = BaseModel
  setModel(model: typeof BaseModel) {
    this.model = model
  }
}
