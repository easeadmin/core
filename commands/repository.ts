import { BaseCommand, args, flags } from '@adonisjs/core/ace'
import { resolve } from 'node:path'

export default class RepositoryCommand extends BaseCommand {
  static commandName = 'admin:repository'
  static description = 'Create a admin application'

  @args.string({ description: 'Repository Name' })
  declare repository: string

  @flags.string({ description: 'Model Name', required: false })
  declare model: string

  @flags.string({ description: 'Application Name', required: false, default: 'admin' })
  declare name: string

  @flags.boolean({ description: 'Force create', default: false })
  declare force: boolean

  async run() {
    let repository = this.repository
    let model = this.model ? this.model : repository
    const stubsRoot = resolve(import.meta.dirname, '../stubs')
    const codemods = await this.createCodemods()
    codemods.overwriteExisting = this.force
    await codemods.makeUsingStub(stubsRoot, '/make/repository.stub', {
      repository: repository,
      model: model,
      name: this.name,
    })
  }
}
