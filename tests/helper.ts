import 'reflect-metadata'
import { getActiveTest } from '@japa/runner'
import { join } from 'node:path'
import { LoggerFactory } from '@adonisjs/core/factories/logger'
import { Emitter } from '@adonisjs/core/events'
import { Database } from '@adonisjs/lucid/database'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { IgnitorFactory } from '@adonisjs/core/factories'
import { ApplicationService } from '@adonisjs/core/types'
import ResourceRepository from '../src/repositories/resource_repository.js'
import ResourceController from '../src/controllers/resource_controller.js'

export const BASE_URL = new URL('./tmp/', import.meta.url)

/**
 * Create an application instance for the test
 */
export async function createApp() {
  const test = getActiveTest()
  if (!test) throw new Error('Cannot use "createApp" outside of a Japa test')

  await test.context.fs.mkdir('tmp')
  await test.context.fs.createJson('tsconfig.json', {})
  await test.context.fs.create('adonisrc.ts', `export default defineConfig({})`)
  await test.context.fs.create(
    'start/routes.ts',
    `import router from '@adonisjs/core/services/router'`
  )
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

/**
 * Creates an instance of the database class for making queries
 */
export async function createDatabase(app: ApplicationService) {
  const test = getActiveTest()
  if (!test) throw new Error('Cannot use "createDatabase" outside of a Japa test')

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

  test.cleanup(() => db.manager.closeAll())
  BaseModel.useAdapter(db.modelAdapter())

  return db
}

/**
 * Create tables for the test
 */
export async function createTables(db: Database) {
  const test = getActiveTest()
  if (!test) throw new Error('Cannot use "createTables" outside of a Japa test')

  test.cleanup(async () => {
    await db.connection().schema.dropTableIfExists('users')
  })

  await db.connection().schema.createTable('users', (table) => {
    table.increments('id').notNullable()
    table.string('username').unique()
    table.string('nickname', 254).notNullable()
    table.string('password').notNullable()
    table.string('avatar').nullable()
    table.timestamp('created_at').nullable()
    table.timestamp('updated_at').nullable()
  })
}

export class User extends BaseModel {
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
}

export class TestRepository extends ResourceRepository {
  protected model = User
}

export class TestController extends ResourceController {
  protected repository = new TestRepository()
  protected fields() {
    return []
  }
  protected forms() {
    return []
  }
}
