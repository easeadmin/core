import { CommandOptions } from '@adonisjs/core/types/ace'
import { BaseCommand, args, flags } from '@adonisjs/core/ace'
import { resolve } from 'node:path'
import fs from 'node:fs'

export default class ControllerCommand extends BaseCommand {
  static commandName = 'admin:controller'
  static description = 'Create a admin application'
  static options: CommandOptions = {
    startApp: true,
  }

  @args.string({ description: 'Controller Name' })
  declare controller: string

  @flags.string({ description: 'Repository Name', required: false })
  declare repository: string

  @flags.string({ description: 'Application Name', required: false, default: 'admin' })
  declare name: string

  @flags.boolean({ description: 'Force create', default: false })
  declare force: boolean

  async run() {
    let columns: any[] = []
    let controller = this.controller
    let repository = this.repository ? this.repository : controller
    let path = this.app.makePath(`app/${this.name}/repositories/${repository}_repository.ts`)
    if (fs.existsSync(path)) {
      const repo: any = await this.app.importDefault(path)
      const repos = new repo()
      let defineitions = repos.getModel().$columnsDefinitions
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
    }
    const stubsRoot = resolve(import.meta.dirname, '../stubs')
    const codemods = await this.createCodemods()
    codemods.overwriteExisting = this.force
    await codemods.makeUsingStub(stubsRoot, '/make/controller.stub', {
      controller: controller,
      repository: repository,
      columns: columns,
      name: this.name,
    })
    let languages: string[] = this.app.config.get(this.name + '.languages', [])
    let except = ['id', 'createdAt', 'updatedAt', 'deletedAt']
    for (let lang of languages) {
      await codemods.makeUsingStub(stubsRoot, '/make/lang.stub', {
        controller: controller,
        columns: columns.filter((item) => !except.includes(item.name)),
        name: this.name,
        lang: lang,
      })
    }
  }
}
