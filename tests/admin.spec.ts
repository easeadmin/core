import { test } from '@japa/runner'
import { fileURLToPath } from 'node:url'
import { HttpContextFactory } from '@adonisjs/core/factories/http'
import Configure from '@adonisjs/core/commands/configure'
import CreateCommand from '../commands/create.js'
import InstallCommand from '../commands/install.js'
import UninstallCommand from '../commands/uninstall.js'
import Migrate from '@adonisjs/lucid/commands/migration/run'

import { BASE_URL, createApp } from './helper.js'

test.group('Admin', async (group) => {
  group.each.setup(({ context }) => {
    context.fs.baseUrl = BASE_URL
    context.fs.basePath = fileURLToPath(BASE_URL)
  })

  // fix windows test timeout
  group.each.disableTimeout()

  test('commands', async ({ assert }) => {
    // init
    const app = await createApp()
    const ace = await app.container.make('ace')
    await assert.fileExists('adonisrc.ts')
    await assert.fileExists('start/routes.ts')

    // configure
    const path = new URL('../index.js', import.meta.url)
    const configureCommand = await ace.create(Configure, [path.href])
    await configureCommand.exec()
    configureCommand.assertSucceeded()

    await assert.fileContains('adonisrc.ts', 'easeadmin/commands')
    await assert.fileExists('public/ease/images')
    await assert.fileExists('public/ease/jssdk')
    await assert.fileExists('public/ease/ease.js')
    await assert.fileExists('public/ease/history.js')

    // install
    const installCommand = await ace.create(InstallCommand, ['admin'])
    await installCommand.exec()
    installCommand.assertSucceeded()
    await assert.fileExists('app/admin')
    await assert.fileExists('config/admin.ts')
    await assert.fileExists('app/models/admin.ts')
    await assert.fileExists('database/migrations/1744446870487_create_admin_users_table.ts')
    await assert.fileExists('database/seeders/create_admin_seed.ts')
    await assert.fileContains('config/auth.ts', 'admin')
    await assert.fileContains('start/routes.ts', `await import('../app/admin/routes.js')`)

    // migrate
    const migrateCommand = await ace.create(Migrate, [])
    await migrateCommand.exec()
    migrateCommand.assertSucceeded()

    // resource
    const createCommand = await ace.create(CreateCommand, ['user'])
    await createCommand.exec()
    createCommand.assertSucceeded()
    assert.fileExists('app/admin/controllers/user_controller.ts')
    assert.fileExists('app/admin/repositories/user_repository.ts')

    // routes
    const { Start } = await import('../index.js')
    const router = Start.make('admin').group((res: any) => {
      console.log(res)
    })
    assert.isNotEmpty(router.routes)

    // context
    const ctx = new HttpContextFactory().create()
    const Admin = await import('../src/admin/admin.js')
    const models = await app.import(`./app/models/admin.js`)
    const admin = (ctx.admin = new Admin.default(ctx, 'admin', models))

    //admin test
    assert.isString(admin.lang)
    assert.isDefined(admin.model('User'))
    assert.deepEqual(
      admin.flatArray([
        { id: 1, name: 'a' },
        { id: 2, name: 'b' },
      ]),
      { 1: { id: 1, name: 'a' }, 2: { id: 2, name: 'b' } }
    )
    assert.deepEqual(
      admin.makeTree([
        { id: 1, name: 'a', parentId: 0 },
        { id: 2, name: 'b', parentId: 1 },
      ]),
      [{ id: 1, name: 'a', parentId: 0, children: [{ id: 2, name: 'b', parentId: 1 }] }]
    )

    //admin make api test
    assert.equal(admin.t('welcome_back'), 'Welcome back')
    assert.equal(admin.identifier('test'), 'admin.test')
    assert.isObject(admin.api('paginate', '/admin/auth/user'))
    assert.equal(admin.api('show').url, '/${id}')
    assert.equal(admin.api('edit').url, '/${id}/edit')

    // controller
    const controlelrs = await app.import(`./app/admin/controllers/admin_controller.js`)
    const adminController = new controlelrs.default(ctx)
    const index = await adminController.index()
    assert.isTrue(index.indexOf('ease.render') > 0)

    // repository
    const UserRepository = await import('../src/admin/repositories/user_repository.js')
    const repo = new UserRepository.default(ctx)

    // create
    await repo.store({
      username: 'test1',
      password: '123456',
      nickname: 'test',
      avatar: 'test',
      roles: '1',
    })
    await repo.store({
      username: 'test2',
      password: '123456',
      nickname: 'test',
      avatar: 'test',
      roles: '1',
    })
    await repo.store({
      username: 'test3',
      password: '123456',
      nickname: 'test',
      avatar: 'test',
      roles: '1',
    })

    // default query
    let users = await repo.paginate()
    assert.isObject(users)
    assert.equal(users.total, 3)

    // search query
    let search = await repo.paginate({ id: '1' }, { id: 'eq' } as any)
    assert.isObject(search)
    assert.equal(search.total, 1)

    // update and show
    await repo.update('1', { username: 'testEdited' })
    let first: any = await repo.show('1')
    assert.isObject(first)
    assert.equal(first.username, 'testEdited')

    // delete and export
    await repo.delete('1')
    let exported = await repo.export()
    assert.equal(exported.length, 2)

    //bulk delete and options
    await repo.delete('2,3')
    let options = await repo.options()
    assert.equal(options.length, 0)

    // uninstall
    const uninstallCommand = await ace.create(UninstallCommand, ['admin'])
    await uninstallCommand.exec()
    uninstallCommand.assertSucceeded()
    await assert.fileNotExists('app/admin')
    await assert.fileNotExists('config/admin.ts')
    await assert.fileNotExists('app/models/admin.ts')
    await assert.fileNotContains('config/auth.ts', 'admin')
    await assert.fileNotContains('start/routes.ts', `await import('../app/admin/routes.js')`)
  })
})
