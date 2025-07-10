import { amis } from '#amis/amis'
import { HttpContext } from '@adonisjs/core/http'
import UserRepository from '#base/repositories/user_repository'
import Resource from '#extends/resource'
import app from '@adonisjs/core/services/app'
const { inject } = await app.import('@adonisjs/core')

@inject()
export default class UserController extends Resource {
  protected repository = new UserRepository()
  constructor(protected ctx: HttpContext) {
    super(ctx)
    this.repository.setModel(this.ctx.admin.model('User'))
  }

  protected fields() {
    return [
      amis('column_item').name('id').label(this.ctx.admin.t('id')),
      amis('column_item').name('username').label(this.ctx.admin.t('username')),
      amis('column_item').name('nickname').label(this.ctx.admin.t('nickname')),
      amis('column_item')
        .name('roles')
        .label(this.ctx.admin.t('roles'))
        .type('each')
        .attr('items', amis('tag').label('${name}').displayMode('rounded').color('#4096ff')),
      amis('column_item').name('createdAt').label(this.ctx.admin.t('created_at')).type('datetime'),
      amis('column_item').name('updatedAt').label(this.ctx.admin.t('updated_at')).type('datetime'),
    ]
  }

  protected forms(isEdit: boolean) {
    return [
      amis('input_text')
        .name('id')
        .label(this.ctx.admin.t('id'))
        .disabled(isEdit)
        .permission(isEdit),
      amis('input_text').name('username').label(this.ctx.admin.t('username')),
      amis('input_text').name('nickname').label(this.ctx.admin.t('nickname')),
      amis('input_password').name('password').label(this.ctx.admin.t('password')),
      amis('select')
        .name('roles')
        .label(this.ctx.admin.t('roles'))
        .multiple(true)
        .joinValues(false)
        .valueField('id')
        .labelField('name')
        .source(this.ctx.admin.api(this.ctx.admin.route('auth_role.index'), 'export')),
      amis('input_image')
        .name('avatar')
        .label(this.ctx.admin.t('avatar'))
        .receiver(this.ctx.admin.api(this.ctx.admin.route('auth_home.store'), 'ajax', 'post')),
    ]
  }
}
