import { test } from '@japa/runner'
import { fileURLToPath } from 'node:url'
import { HttpContextFactory } from '@adonisjs/core/factories/http'
import Configure from '@adonisjs/core/commands/configure'
import RepositoryCommand from '../commands/repository.js'
import ControllerCommand from '../commands/controller.js'
import CreateCommand from '../commands/create.js'
import {
  BASE_URL,
  User,
  createApp,
  createDatabase,
  createTables,
  TestRepository,
} from './helper.js'

test.group('Admin', async (group) => {
  group.each.setup(({ context }) => {
    context.fs.baseUrl = BASE_URL
    context.fs.basePath = fileURLToPath(BASE_URL)
  })

  //fix windows test timeout
  group.each.disableTimeout()

  test('commands', async ({ assert }) => {
    //init
    const app = await createApp()
    const ace = await app.container.make('ace')

    //configure
    const configureCommand = await ace.create(Configure, ['../../index.js'])
    await configureCommand.exec()
    configureCommand.assertSucceeded()
    await assert.fileExists('adonisrc.ts')
    await assert.fileContains('adonisrc.ts', 'easeadmin/commands')
    await assert.fileExists('public/ease/images')
    await assert.fileExists('public/ease/jssdk')
    await assert.fileExists('public/ease/ease.js')
    await assert.fileExists('public/ease/history.js')

    // create
    const createCommand = await ace.create(CreateCommand, ['admin', '--force'])
    await createCommand.exec()
    createCommand.assertSucceeded()
    await assert.fileExists('app/admin')
    await assert.fileExists('config/admin.ts')
    await assert.fileExists('app/models/admin.ts')
    await assert.fileExists('database/migrations/1744446870487_create_admin_users_table.ts')
    await assert.fileExists('database/seeders/create_admin_seed.ts')
    await assert.fileContains('config/auth.ts', `#models/admin`)
    await assert.fileContains('start/routes.ts', `await import('../app/admin/routes.js')`)

    //controller
    const controllerCommand = await ace.create(ControllerCommand, ['user'])
    await controllerCommand.exec()
    controllerCommand.assertSucceeded()
    assert.fileExists('app/admin/controllers/user_controller.ts')

    // repository
    const repositoryCommand = await ace.create(RepositoryCommand, ['user'])
    await repositoryCommand.exec()
    repositoryCommand.assertSucceeded()
    assert.fileExists('app/admin/repositories/user_repository.ts')
  })

  test('start', async ({ assert }) => {
    //init
    const app = await createApp()
    const db = await createDatabase(app)
    await createTables(db)

    //start test
    const { Start } = await import('../index.js')
    const router = Start.make('admin').group((res: any) => {
      console.log(res)
    })
    assert.isNotEmpty(router.routes)

    //admin context
    const Admin = await import('../src/admin/admin.js')
    const ctx = new HttpContextFactory().create()
    const admin = new Admin.default(ctx, 'admin', { User })

    //admin test
    assert.isString(admin.lang)
    assert.equal(admin.model('User'), User)
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

    //repostory test
    let repo = new TestRepository()
    await repo.store({ username: 'test1', nickname: 'test1', password: '123456' })
    await repo.store({ username: 'test2', nickname: 'test2', password: '123456' })
    await repo.store({ username: 'test3', nickname: 'test3', password: '123456' })

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
  })
})
