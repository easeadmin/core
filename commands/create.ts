import { BaseCommand, flags } from '@adonisjs/core/ace'
import { resolve } from 'node:path'
import fs from 'node:fs'

export default class CreateCommand extends BaseCommand {
  static commandName = 'admin:create'
  static description = 'Create a admin application'

  @flags.string({ description: 'Application Name', default: 'admin' })
  declare name: string

  @flags.boolean({ description: 'Force create', default: false })
  declare force: boolean

  async run() {
    const stubsRoot = resolve(import.meta.dirname, '../stubs')
    const codemods = await this.createCodemods()
    codemods.overwriteExisting = this.force

    // app
    await codemods.makeUsingStub(stubsRoot, '/create/admin/controllers/admin_controller.stub', {
      name: this.name,
    })
    await codemods.makeUsingStub(stubsRoot, '/create/admin/routes.stub', {
      name: this.name,
    })

    // models
    await codemods.makeUsingStub(stubsRoot, 'create/model/admin.stub', {
      name: this.name,
    })

    // database
    await codemods.makeUsingStub(stubsRoot, 'create/database/migrations/create_admin_table.stub', {
      name: this.name,
    })
    await codemods.makeUsingStub(stubsRoot, 'create/database/seeders/create_admin_user.stub', {
      name: this.name,
    })

    // language
    await codemods.makeUsingStub(stubsRoot, 'create/language/en/common.stub', {
      name: this.name,
    })
    await codemods.makeUsingStub(stubsRoot, 'create/language/zh/common.stub', {
      name: this.name,
    })

    // config
    let database: any = await this.app.importDefault('#config/database')
    await codemods.makeUsingStub(stubsRoot, 'create/config/admin.stub', {
      name: this.name,
      connection: database.connection,
    })
    codemods.overwriteExisting = true
    await codemods.makeUsingStub(stubsRoot, 'create/config/auth.stub', {
      config: await this.makeAuthConfig(),
    })

    await this.updateRoutes()
  }

  // merge auth config
  async makeAuthConfig() {
    let keys: string[] = []
    let configModule = await this.app.import('#config/auth')
    let config: Record<string, any> = configModule.default.guards ?? {}
    for (let key in config) {
      if (key !== 'web') {
        keys.push(key)
      }
    }
    if (!keys.includes(this.name)) {
      keys.push(this.name)
    }
    return keys
  }

  async updateRoutes() {
    let append = `await import ('../app/${this.name}/routes.js')`
    let file = fs.readFileSync(this.app.startPath('routes.ts'), { encoding: 'utf-8' })
    let lines = file.split('\n')
    if (file.indexOf(append) < 0) {
      for (let i in lines) {
        if (lines[i].indexOf('import ') === 0) {
          lines[i] = append + '\n' + lines[i]
        }
      }
    }
    fs.writeFileSync(this.app.startPath('routes.ts'), lines.join('\n'), { encoding: 'utf-8' })
  }
}
