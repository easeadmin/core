import 'reflect-metadata'
import { fileURLToPath } from 'node:url'
import { getActiveTest } from '@japa/runner'
import { IgnitorFactory } from '@adonisjs/core/factories'
import { LoggerFactory } from '@adonisjs/core/factories/logger'
import { HttpContextFactory } from '@adonisjs/core/factories/http'
import { Emitter } from '@adonisjs/core/events'
import { Database } from '@adonisjs/lucid/database'
import { BaseModel } from '@adonisjs/lucid/orm'
export const BASE_URL = new URL('./tmp/', import.meta.url)

export async function createApp() {
  const test = getActiveTest()
  if (!test) throw new Error('Cannot use "createApp" outside of a Japa test')
  test.context.fs.baseUrl = BASE_URL
  test.context.fs.basePath = fileURLToPath(BASE_URL)

  const ignitor = new IgnitorFactory()
    .withCoreProviders()
    .withCoreConfig()
    .create(BASE_URL, {
      importer: (filePath) => {
        if (filePath.startsWith('./') || filePath.startsWith('../')) {
          return import(new URL(filePath, BASE_URL).href)
        }
        return import(filePath)
      },
    })
  const app = ignitor.createApp('web')
  await app.init()
  await app.boot()
  return app
}

export async function createDb(app: any) {
  const test = getActiveTest()
  if (!test) throw new Error('Cannot use "createDb" outside of a Japa test')

  const logger = new LoggerFactory().create()
  const emitter = new Emitter(app)
  const db = new Database(
    {
      connection: 'sqlite',
      connections: {
        sqlite: {
          client: 'sqlite3',
          connection: {
            filename: app.makePath('db.sqlite3'),
          },
          useNullAsDefault: true,
        },
      },
    },
    logger,
    emitter
  )

  test.cleanup(() => db.manager.closeAll())
  BaseModel.useAdapter(db.modelAdapter())
  app.container.bindValue('lucid.db' as any, db)
  return db
}

export async function createBaseFiles() {
  const test = getActiveTest()
  if (!test) throw new Error('Cannot use "createBaseFiles" outside of a Japa test')

  await test.context.fs.create('start/routes.ts', '')
  await test.context.fs.createJson('tsconfig.json', {})
  await test.context.fs.create('adonisrc.ts', `export default defineConfig({})`)
  await test.context.fs.create(
    'app/models/user.ts',
    `import { BaseModel, column } from '@adonisjs/lucid/orm'
        export default class User extends BaseModel {
        static table = 'admin_users'
        @column({ isPrimary: true })
        declare id: number

        @column()
        declare username: string

        @column()
        declare nickname: string

        @column({ serializeAs: null })
        declare password: string

        @column()
        declare avatar: string | null
        }`
  )
}

export async function createAdminContext(app: any) {
  const ctx = new HttpContextFactory().create()
  const Admin = await import('../src/admin/admin.js')
  const models = await app.import(`./app/models/admin.js`)
  ctx.admin = new Admin.default(ctx, 'admin', models)
  return ctx
}
