import { configProvider } from '@adonisjs/core'
import { CommandOptions } from '@adonisjs/core/types/ace'
import { BaseCommand, args } from '@adonisjs/core/ace'
import { stubsRoot } from '#core/stubs/main'
import fs from 'node:fs'

export default class UninstallCommand extends BaseCommand {
  static commandName = 'admin:uninstall'
  static description = 'Uninstall admin application'
  static options: CommandOptions = {
    startApp: true,
  }

  @args.string({ description: 'Application Name', default: 'admin' })
  declare name: string

  async run() {
    this.updateRoutes()
    this.logger.action(`remove start/routes.ts`).succeeded()

    // remove lang
    let languages: string[] = this.app.config.get(`${this.name}.languages`, ['en', 'zh'])
    for (let lang of languages) {
      fs.rmSync(this.app.languageFilesPath(`${lang}/${this.name}`), { recursive: true })
      this.logger.action(`remove lang/${lang}/${this.name}`).succeeded()
    }

    // remove app
    fs.rmSync(this.app.makePath(`app/${this.name}`), { recursive: true })
    this.logger.action(`remove app/${this.name}`).succeeded()
    fs.rmSync(this.app.configPath(`${this.name}.ts`))
    this.logger.action(`remove config/${this.name}.ts`).succeeded()
    fs.rmSync(this.app.modelsPath(`${this.name}.ts`))
    this.logger.action(`remove app/models/${this.name}.ts`).succeeded()
    fs.rmSync(this.app.migrationsPath(`1744446870487_create_${this.name}_users_table.ts`))
    this.logger.action(`remove migrations/create_${this.name}_users_table.ts`).succeeded()
    fs.rmSync(this.app.seedersPath(`create_${this.name}_seed.ts`))
    this.logger.action(`remove seeders/create_${this.name}_seed.ts`).succeeded()

    // remove auth config
    const codemods = await this.createCodemods()
    codemods.overwriteExisting = true
    await codemods.makeUsingStub(stubsRoot, 'create/config/auth.stub', {
      config: await this.updateAuthConfig(),
    })
  }

  // remove auth
  async updateAuthConfig() {
    let keys: string[] = []
    const authConfigProvider = this.app.config.get('auth')
    const config: any = await configProvider.resolve(this.app, authConfigProvider)
    if (config) {
      for (let key in config.guards) {
        if (key !== 'web' && key !== this.name) {
          keys.push(key)
        }
      }
    }
    return keys
  }

  async updateRoutes() {
    let path = this.app.startPath('routes.ts')
    if (fs.existsSync(path)) {
      let append = `import '../app/${this.name}/routes.js'`
      let file = fs.readFileSync(path, { encoding: 'utf-8' })
      let lines = file.split(`\n`)
      let newlines: string[] = []
      for (let i in lines) {
        if (lines[i].indexOf(append) < 0) {
          newlines.push(lines[i])
        }
      }
      fs.writeFileSync(path, newlines.join(`\n`), { encoding: 'utf-8' })
    }
  }
}
