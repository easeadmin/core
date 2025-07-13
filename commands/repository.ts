import { BaseCommand, args, flags } from '@adonisjs/core/ace'
import { resolve } from 'node:path'

export default class CreateCommand extends BaseCommand {
  static commandName = 'admin:repository'
  static description = 'Create a admin application'

  @args.string({ description: 'Repository Name' })
  declare repository: string

  @flags.string({ description: 'Model Name', required: false })
  declare model: string

  @flags.string({ description: 'Application Name', required: false, default: 'admin' })
  declare name: string

  async run() {
    let repository = this.repository
    let model = this.model ? this.model : repository
    const stubsRoot = resolve(import.meta.dirname, '../stubs')
    const codemods = await this.createCodemods()
    await codemods.makeUsingStub(stubsRoot, '/make/repository.stub', {
      repository: repository,
      model: model,
      name: this.name,
    })
  }
}
