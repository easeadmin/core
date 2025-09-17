import { configProvider } from '@adonisjs/core'
import { CommandOptions } from '@adonisjs/core/types/ace'
import { BaseCommand, args, flags } from '@adonisjs/core/ace'
import { stubsRoot } from '#core/stubs/main'
import fs from 'node:fs'

export default class InstallCommand extends BaseCommand {
  static commandName = 'admin:install'
  static description = 'Install admin application'
  static options: CommandOptions = {
    startApp: true,
  }

  @args.string({ description: 'Admin Name', default: 'admin' })
  declare name: string

  @flags.boolean({ description: 'Force install', default: false })
  declare force: boolean

  @flags.boolean({ description: 'Execute migrations concurrently', default: false })
  declare migrate: boolean

  async run() {
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
    await codemods.makeUsingStub(stubsRoot, 'create/language/en/admin.stub', {
      name: this.name,
    })
    await codemods.makeUsingStub(stubsRoot, 'create/language/zh/admin.stub', {
      name: this.name,
    })

    // config
    let connection: string = this.app.config.get('database.connection', 'sqlite')
    await codemods.makeUsingStub(stubsRoot, 'create/config/admin.stub', {
      name: this.name,
      connection: connection,
    })
    codemods.overwriteExisting = true
    await codemods.makeUsingStub(stubsRoot, 'create/config/auth.stub', {
      config: await this.updateAuthConfig(),
    })

    // routes
    await this.updateRoutes()

    // migration
    if (this.migrate) {
      await this.kernel.exec('migration:run', [])
      await this.kernel.exec('db:seed', [])
    } else {
      this.logger.info('You also need to run `node ace migration:run` and `node ace db:seed`')
    }
  }

  // merge auth config
  async updateAuthConfig() {
    let keys: string[] = []
    const authConfigProvider = this.app.config.get('auth')
    const config: any = await configProvider.resolve(this.app, authConfigProvider)
    if (config) {
      for (let key in config.guards) {
        if (key !== 'web') {
          keys.push(key)
        }
      }
    }
    if (!keys.includes(this.name)) {
      keys.push(this.name)
    }
    return keys
  }

  async updateRoutes() {
    let path = this.app.startPath('routes.ts')
    if (fs.existsSync(path)) {
      let append = `import '../app/${this.name}/routes.js'`
      let file = fs.readFileSync(path, { encoding: 'utf-8' })
      if (file.indexOf(append) < 0) {
        let lines = file.split(`\n`)
        for (let i in lines) {
          if (lines[i].indexOf('@adonisjs/core/services/router') > 0) {
            lines[i] = append + `\n` + lines[i]
            break
          }
        }
        let content = lines.join(`\n`)
        if (content.indexOf(append) < 0) {
          content = append + `\n` + content
        }
        fs.writeFileSync(path, content, { encoding: 'utf-8' })
      }
    } else {
      this.logger.warning(
        'start/routes.ts not found, please add `import "../app/' +
          this.name +
          '/routes.js"` in preloads'
      )
    }
  }
}
