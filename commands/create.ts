import { CommandOptions } from '@adonisjs/core/types/ace'
import { BaseCommand, args, flags } from '@adonisjs/core/ace'
import { stubsRoot } from '../stubs/main.js'
import fs from 'node:fs'

export default class CreateCommand extends BaseCommand {
  static commandName = 'admin:create'
  static description = 'Create a resource page'
  static options: CommandOptions = {
    startApp: true,
  }

  @args.string({ description: 'Create controller name', required: true })
  declare controller: string

  @flags.string({ description: 'Create repository name', required: false })
  declare repository: string

  @flags.string({ description: 'Relation model Name', required: false })
  declare model: string

  @flags.boolean({ description: 'Create lang files', default: true })
  declare lang: boolean

  @flags.string({ description: 'Application Name', required: false, default: 'admin' })
  declare name: string

  @flags.boolean({ description: 'Force create', default: false })
  declare force: boolean

  async run() {
    const codemods = await this.createCodemods()
    codemods.overwriteExisting = this.force

    const repository = await this.getRepositoryData()
    await codemods.makeUsingStub(stubsRoot, '/make/repository.stub', repository)

    const controller = await this.getControllerData()
    await codemods.makeUsingStub(stubsRoot, '/make/controller.stub', controller)

    if (this.lang) {
      let languages: string[] = this.app.config.get(`${this.name}.languages`, ['en', 'zh'])
      let except = ['id', 'createdAt', 'updatedAt', 'deletedAt']
      for (let lang of languages) {
        await codemods.makeUsingStub(stubsRoot, '/make/lang.stub', {
          controller: this.controller,
          columns: controller.columns.filter((item) => !except.includes(item.name)),
          name: this.name,
          lang: lang,
        })
      }
    }
  }

  async getRepositoryData() {
    let repository = this.repository ? this.repository : this.controller
    let model = this.model ? this.model : repository
    if (!fs.existsSync(this.app.modelsPath(`${model}.ts`))) {
      throw new Error(`Model ${model} not found`)
    }
    return {
      repository: repository,
      model: model,
      name: this.name,
    }
  }

  async getModelColumns() {
    let columns: any[] = []
    let model = this.model ? this.model : this.controller
    let path = this.app.modelsPath(`${model}.ts`)
    if (!fs.existsSync(path)) {
      throw new Error(`Model ${model} not found`)
    }

    const Model: any = await this.app.importDefault(`file:///${path}`)
    let defineitions = Model.$columnsDefinitions
    defineitions.forEach((item: any, key: string) => {
      let type = 'text'
      if (item.meta) {
        if (item.meta.type === 'json') {
          type = 'json'
        } else if (item.meta.type === 'date') {
          type = 'date'
        } else if (item.meta.type === 'datetime') {
          type = 'datetime'
        } else if (item.meta.type === 'number') {
          type = 'number'
        }
      }
      columns.push({
        name: key,
        type: type,
        label: item.columnName,
      })
    })
    return columns
  }

  async getControllerData() {
    let controller = this.controller
    let repository = this.repository ? this.repository : controller
    let columns = await this.getModelColumns()
    return {
      controller: controller,
      repository: repository,
      columns: columns,
      name: this.name,
    }
  }
}
