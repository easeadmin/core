import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import ResourceController from '../../controllers/resource_controller.js'
import UserRepository from '../repositories/user_repository.js'
import amis from '../../builder/amis.js'

@inject()
export default class UserController extends ResourceController {
  constructor(
    protected ctx: HttpContext,
    protected repository: UserRepository
  ) {
    super(ctx)
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
      amis('column_item').name('createdAt').type('datetime').label(this.ctx.admin.t('created_at')),
      amis('column_item').name('updatedAt').type('datetime').label(this.ctx.admin.t('updated_at')),
    ]
  }

  protected forms(edit: boolean) {
    return [
      amis('input_text').name('id').label(this.ctx.admin.t('id')).disabled(edit).permission(edit),
      amis('input_text')
        .name('username')
        .label(this.ctx.admin.t('username'))
        .required(true)
        .validations('minLength:5'),
      amis('input_text')
        .name('nickname')
        .label(this.ctx.admin.t('nickname'))
        .required(true)
        .validations('minLength:1'),
      amis('input_password')
        .name('password')
        .label(this.ctx.admin.t('password'))
        .required(!edit)
        .validations('minLength:5'),
      amis('select')
        .name('roles')
        .label(this.ctx.admin.t('roles'))
        .multiple(true)
        .joinValues(false)
        .valueField('id')
        .labelField('name')
        .source(this.ctx.admin.api('options')),
      amis('input_image')
        .name('avatar')
        .label(this.ctx.admin.t('avatar'))
        .crop({ aspectRatio: 1 })
        .cropQuality(0.5)
        .maxSize(2048000)
        .receiver(this.ctx.admin.api('store', this.ctx.admin.url('auth_home.store'))),
    ]
  }
}
