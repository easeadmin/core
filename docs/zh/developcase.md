基于 EaseAdmin 的代码生成命令，你可以很快的创建出一个功能完善的 CRUD 页面，下面为你演示如何快速创建一个默认的用户管理面板。

# 1.创建模型和迁移文件

创建一个用户模型，并同时创建一个迁移文件。
实际以下代码文件是框架自带的，你可以根据需要修改或跳过该步骤。

```shell
node ace make:model user -m
```

生成的模型文件在 `app/models/user.ts`

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

生成的迁移文件在 `database/migrations/create_users_table.ts`

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

# 2.创建模型仓库

使用命令行创建一个用户模型仓库

```shell
node ace admin:repository user
```

生成的模型仓库文件在 `app/admin/repositories/user.ts`

```typescript
import Repository from '@easeadmin/core/extends/repository'
import User from '#models/user'

export default class UserRepository extends Repository {
    protected model = User
}
```

# 3.创建控制器

使用命令行创建一个后台控制器

```shell
node ace admin:controller user
```

生成的控制器文件在 `app/admin/controllers/users.ts`

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

# 4.注册路由

在 `app/admin/routes.ts` 的 `group` 方法中定义路由

```shell
router.resource('users', UsersController).as('users')
```

# 5.添加权限
使用管理员账号登录后台，进入权限管理页面新增并填入

一级权限为包含增、删、改、查：
```
权限名称：用户管理
权限标识：admin.users
权限排序：0
上级权限：按需选择
```
如需细分权限可按路由表配置权限标识
```
admin.users.index  主页权限
amdin.users.store  新增权限
admin.users.update 更新权限
admin.users.destroy  删除权限
admin.users.create  创建页面权限
admin.users.edit  编辑页面权限
admin.users.show  详情页面权限
```


# 6.添加菜单

使用管理员账号登录后台，进入菜单管理页面新增并填入
```
菜单名称：用户管理
菜单标识：/admin/users
```
# 完成开发
将权限和菜单赋值给管理员或目标角色，刷新后台即可