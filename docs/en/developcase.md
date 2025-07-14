Based on EaseAdmin's code generation commands, you can quickly create a fully functional CRUD page. Below is a demonstration of how to quickly create a default user management panel.

# 1. Create Model and Migration File

Create a user model and a migration file at the same time.
Actually, the following code files are included with the framework; you can modify them as needed or skip this step.

```shell
node ace make:model user -m
```

The generated model file is located at `app/models/user.ts`

```typescript
import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare fullName: string | null

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}

```

The generated migration file is located at `database/migrations/create_users_table.ts`

```typescript
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('full_name').nullable()
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

```

# 2. Create Model Repository

Use the command line to create a user model repository

```shell
node ace admin:repository user
```

The generated model repository file is located at `app/admin/repositories/user.ts`

```typescript
import Repository from '@easeadmin/core/extends/repository'
import User from '#models/user'

export default class UserRepository extends Repository {
    protected model = User
}
```

# 3. Create Controller

Use the command line to create a backend controller

```shell
node ace admin:controller user
```

The generated controller file is located at `app/admin/controllers/users.ts`

```typescript
import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { amis } from '@easeadmin/core/amis/amis'
import Resource from '@easeadmin/core/extends/resource'
import UserRepository from '../repositories/user_repository.js'

@inject()
export default class UsersController extends Resource {
  protected repository = new UserRepository
  constructor(ctx: HttpContext) {
    super(ctx)
  }

  protected fields() {
    return [
      amis('column_item').name('id').label(this.ctx.admin.t('id')),
      amis('column_item').name('fullName').label(this.ctx.admin.t('full_name')),
      amis('column_item').name('email').label(this.ctx.admin.t('email')),
      amis('column_item').name('password').label(this.ctx.admin.t('password')),
      amis('column_item').name('createdAt').label(this.ctx.admin.t('created_at')),
      amis('column_item').name('updatedAt').label(this.ctx.admin.t('updated_at')),
    ]
  }

  protected forms(isEdit: boolean) {
    return [
      amis('input_text').name('id').label(this.ctx.admin.t('id')).disabled(isEdit).permission(isEdit),
      amis('input_text').name('fullName').label(this.ctx.admin.t('full_name')),
      amis('input_text').name('email').label(this.ctx.admin.t('email')),
      amis('input_text').name('password').label(this.ctx.admin.t('password')),
      amis('input_datetime').name('createdAt').label(this.ctx.admin.t('created_at')).disabled(isEdit).permission(isEdit),
      amis('input_datetime').name('updatedAt').label(this.ctx.admin.t('updated_at')).disabled(isEdit).permission(isEdit),
    ]
  }
}
```

# 4. Register Route

Define the route in the `group` method of `app/admin/routes.ts`

```shell
router.resource('users', UsersController).as('users')
```

# 5. Add Permission
Log in to the backend with an administrator account, go to the permission management page and add the following

First-level permission including create, delete, update, query:
```
Permission Name: User Management
Permission Identifier: admin.users
Permission Sort: 0
Parent Permission: Select as needed
```
If you need to subdivide permissions, you can configure permission identifiers according to the routing table
```
admin.users.index  Home page permission
amdin.users.store  Create permission
admin.users.update Update permission
admin.users.destroy  Delete permission
admin.users.create  Create page permission
admin.users.edit  Edit page permission
admin.users.show  Detail page permission
```


# 6. Add Menu

Log in to the backend with an administrator account, go to the menu management page and add the following
```
Menu Name: User Management
Menu Identifier: /admin/users
```
# Complete Development
Assign permissions and menus to administrators or target roles, then refresh the backend interface