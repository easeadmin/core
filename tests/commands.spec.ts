import { test } from '@japa/runner'
import DbSeed from '@adonisjs/lucid/commands/db_seed'
import Migrate from '@adonisjs/lucid/commands/migration/run'
import Configure from '@adonisjs/core/commands/configure'
import CreateCommand from '#core/commands/create'
import InstallCommand from '#core/commands/install'
import UninstallCommand from '#core/commands/uninstall'
import { createApp, createDb, createAdminContext, createBaseFiles } from '#core/tests/utils'

test.group('Commands', async (group) => {
  group.each.disableTimeout()

  test('Configure', async ({ assert }) => {
    const app = await createApp()
    await createBaseFiles()

    const ace = await app.container.make('ace')
    const configureCommand = await ace.create(Configure, ['#core/index', '--force'])
    await configureCommand.exec()
    configureCommand.assertSucceeded()

    await assert.fileContains('adonisrc.ts', 'easeadmin/commands')
    await assert.fileExists('public/ease/images')
    await assert.fileExists('public/ease/jssdk')
    await assert.fileExists('public/ease/ease.js')
    await assert.fileExists('public/ease/history.js')
  })

  test('Install', async ({ assert, fs }) => {
    const app = await createApp()

    const ace = await app.container.make('ace')
    const installCommand = await ace.create(InstallCommand, ['admin', '--force'])
    await installCommand.exec()
    installCommand.assertSucceeded()

    await assert.fileExists('app/admin')
    await assert.fileExists('config/admin.ts')
    await assert.fileExists('app/models/admin.ts')
    await assert.fileExists('database/migrations/1744446870487_create_admin_users_table.ts')
    await assert.fileExists('database/seeders/create_admin_seed.ts')
    await assert.fileContains('config/auth.ts', 'admin')
    await assert.fileContains('start/routes.ts', '../app/admin/routes.js')

    const admin = await fs.contents('app/models/admin.ts')
    await fs.create('app/models/admin.ts', admin.replace('#config/admin', '../../config/admin.js'))
    const config = await fs.contents('config/admin.ts')
    await fs.create('config/admin.ts', config.replace('easeadmin', '../../../index.js'))
    const table = await fs.contents('database/migrations/1744446870487_create_admin_users_table.ts')
    await fs.create(
      'database/migrations/1744446870487_create_admin_users_table.ts',
      table.replace('#config/admin', '../../config/admin.js')
    )
    const seed = await fs.contents('database/seeders/create_admin_seed.ts')
    await fs.create(
      'database/seeders/create_admin_seed.ts',
      seed.replace('#config/admin', '../../config/admin.js')
    )

    await createDb(app)
    const migrateCommand = await ace.create(Migrate, [])
    await migrateCommand.exec()
    migrateCommand.assertSucceeded()

    const seederCommand = await ace.create(DbSeed, [])
    await seederCommand.exec()
    seederCommand.assertSucceeded()
  })

  test('Create', async ({ assert, fs }) => {
    const app = await createApp()

    const ace = await app.container.make('ace')
    const createCommand = await ace.create(CreateCommand, ['user'])
    await createCommand.exec()
    createCommand.assertSucceeded()

    await assert.fileExists('app/admin/controllers/user_controller.ts')
    await assert.fileExists('app/admin/repositories/user_repository.ts')

    const ctrl = await fs.contents('app/admin/controllers/user_controller.ts')
    await fs.create('app/admin/controllers/user_controller.ts', ctrl)
    const repo = await fs.contents('app/admin/repositories/user_repository.ts')
    await fs.create(
      'app/admin/repositories/user_repository.ts',
      repo.replace('#models/user', '../../models/user.js')
    )
  })

  test('Controller', async ({ assert }) => {
    const app = await createApp()
    const ctx = await createAdminContext(app)
    await createDb(app)

    const controlelrs = await app.import(`./app/admin/controllers/user_controller.js`)
    const adminController = new controlelrs.default(ctx)
    const result = await adminController.index()
    assert.isString(result)
  })

  test('Repository', async ({ assert }) => {
    const app = await createApp()
    const ctx = await createAdminContext(app)
    const UserRepository = await app.import('./app/admin/repositories/user_repository.js')
    const repo = new UserRepository.default(ctx)

    // create
    await createDb(app)
    await repo.store({
      username: 'test1',
      password: '123456',
      nickname: 'test',
      avatar: 'test',
    })
    await repo.store({
      username: 'test2',
      password: '123456',
      nickname: 'test',
      avatar: 'test',
    })
    await repo.store({
      username: 'test3',
      password: '123456',
      nickname: 'test',
      avatar: 'test',
    })

    // default query
    let users = await repo.paginate()
    assert.isObject(users)
    assert.equal(users.total, 4)

    // search query
    let search = await repo.paginate({ id: '1' }, { id: 'eq' } as any)
    assert.isObject(search)
    assert.equal(search.total, 1)

    // update and show
    await repo.update('2', { username: 'testEdited' })
    let first: any = await repo.show('2')
    assert.isObject(first)
    assert.equal(first.username, 'testEdited')

    // delete and export
    await repo.delete('2')
    let exported = await repo.export()
    assert.equal(exported.length, 3)

    //bulk delete and options
    await repo.delete('3,4')
    let options = await repo.options()
    assert.equal(options.length, 1)
  })

  test('Uninstall', async ({ assert, fs }) => {
    const app = await createApp()

    const ace = await app.container.make('ace')
    const uninstallCommand = await ace.create(UninstallCommand, ['admin'])
    await uninstallCommand.exec()
    uninstallCommand.assertSucceeded()

    await assert.fileNotExists('app/admin')
    await assert.fileNotExists('config/admin.ts')
    await assert.fileNotExists('app/models/admin.ts')
    await assert.fileNotContains('config/auth.ts', 'admin')
    await assert.fileNotContains('start/routes.ts', `await import('../app/admin/routes.js')`)

    await fs.cleanup()
  })
})
