import 'reflect-metadata'
import { getActiveTest } from '@japa/runner'
import { join } from 'node:path'
import { LoggerFactory } from '@adonisjs/core/factories/logger'
import { Emitter } from '@adonisjs/core/events'
import { Database } from '@adonisjs/lucid/database'
import { BaseModel } from '@adonisjs/lucid/orm'
import { IgnitorFactory } from '@adonisjs/core/factories'
export const BASE_URL = new URL('./tmp/', import.meta.url)

/**
 * Create an application instance for the test
 */
export async function createApp() {
  const test = getActiveTest()
  if (!test) throw new Error('Cannot use "createApp" outside of a Japa test')

  // init files
  await test.context.fs.mkdir('tmp')
  await test.context.fs.createJson('tsconfig.json', {})
  await test.context.fs.create('adonisrc.ts', `export default defineConfig({})`)
  await test.context.fs.create(
    'start/routes.ts',
    `import router from '@adonisjs/core/services/router'`
  )
  await test.context.fs.create(
    'app/models/user.ts',
    `import { BaseModel, column } from '@adonisjs/lucid/orm'
      export default class User extends BaseModel {
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

  //make app
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

  // make db
  const logger = new LoggerFactory().create()
  const emitter = new Emitter(app)
  const db = new Database(
    {
      connection: 'sqlite',
      connections: {
        sqlite: {
          client: 'sqlite3',
          connection: {
            filename: join(app.makePath('tmp'), 'db.sqlite3'),
          },
        },
      },
    },
    logger,
    emitter
  )

  // finish
  test.cleanup(() => db.manager.closeAll())
  BaseModel.useAdapter(db.modelAdapter())
  app.container.bindValue('lucid.db' as any, db)
  return app
}
