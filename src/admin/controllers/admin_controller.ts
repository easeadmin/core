import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import ResourceController from '../../controllers/resource_controller.js'
import AdminRepository from '../repositories/admin_repository.js'
import amis from '../../builder/amis.js'

@inject()
export default class AdminController extends ResourceController {
  protected showCustomButton = true
  protected showRefreshButton = true
  protected showFullscreenButton = true
  protected showNotificationButton = true
  protected notificationBadge = 1

  constructor(
    protected ctx: HttpContext,
    protected repository: AdminRepository
  ) {
    super(ctx)
  }

  protected dashboard() {
    return amis('page').body('dashboard')
  }

  protected fields() {
    return [amis('column_item').name('message')]
  }

  protected forms() {
    return [
      amis('input_text')
        .name('nickname')
        .label(this.ctx.admin.t('nickname'))
        .validations('minLength:1')
        .required(true),
      amis('input_password')
        .name('old_password')
        .label(this.ctx.admin.t('old_password'))
        .validations('minLength:5'),
      amis('input_password')
        .name('new_password')
        .label(this.ctx.admin.t('new_password'))
        .validations('minLength:5'),
      amis('input_password')
        .name('confirm_password')
        .label(this.ctx.admin.t('confirm_password'))
        .validations('equalsField:new_password'),
      amis('input_image')
        .name('avatar')
        .label(this.ctx.admin.t('avatar'))
        .crop({ aspectRatio: 1 })
        .cropQuality(0.5)
        .maxSize(2048000)
        .receiver(this.ctx.admin.api('store')),
    ]
  }

  protected actions() {
    return [
      amis('button')
        .icon('user')
        .label(this.ctx.admin.t('profile'))
        .iconClassName('mr-2')
        .dialog(
          amis('dialog')
            .closeOnEsc(true)
            .title(this.ctx.admin.t('profile'))
            .body(
              amis('form')
                .data(this.ctx.admin.userinfo)
                .api(this.ctx.admin.api('update'))
                .reload('window')
                .body(this.forms())
            )
        ),
      amis('button')
        .icon('sign-out')
        .label(this.ctx.admin.t('logout'))
        .iconClassName('mr-2')
        .actionType('ajax')
        .api(
          this.ctx.admin.api(
            'delete',
            this.ctx.admin.url('auth_home.destroy', { params: { id: '1' } })
          )
        )
        .reload('window'),
    ]
  }

  protected custom() {
    return amis('form')
      .body([
        amis('select')
          .id('setting-lang')
          .name('lang')
          .label(this.ctx.admin.t('language'))
          .options(this.ctx.admin.config.languages),
        amis('select')
          .id('setting-theme')
          .name('theme')
          .label(this.ctx.admin.t('theme'))
          .options(['cxd', 'ang', 'dark']),
        amis('input_switch')
          .id('setting-darkness')
          .name('darkness')
          .label(this.ctx.admin.t('darkness'))
          .description(this.ctx.admin.t('dark_mode_at_night')),
      ])
      .onEvent('submit', [
        amis('event').actionType('custom').action('script', 'ease.settings(event.data)'),
      ])
  }

  protected notification() {
    return amis('dialog')
      .data([{ message: 'Welcome to EaseAdmin', path: '/admin/auth/user' }])
      .title(this.ctx.admin.t('notification'))
      .closeOnEsc(true)
      .actions([])
      .body(
        amis('list').listItem(
          amis('list_item')
            .body(this.fields())
            .actions([
              amis('button')
                .label(this.ctx.admin.t('show'))
                .actionType('link')
                .url('${path}')
                .level('link')
                .close(true),
            ])
        )
      )
  }

  protected header(): any {
    return amis('flex')
      .className('w-full')
      .justify('flex-end')
      .alignItems('center')
      .items([
        amis('button')
          .icon('refresh')
          .permission(this.showRefreshButton)
          .className('text-current text-lg')
          .onClick('ease.refresh()'),
        amis('button')
          .icon('arrows-alt')
          .permission(this.showFullscreenButton)
          .className('text-current text-lg ml-2')
          .onClick('ease.fullscreen()'),
        amis('button')
          .icon('cog')
          .permission(this.showCustomButton)
          .className('text-current text-lg ml-2')
          .dialog(
            amis('dialog').closeOnEsc(true).title(this.ctx.admin.t('custom')).body(this.custom())
          ),
        amis('divider').direction('vertical').className('ml-3'),

        amis('button')
          .icon('bell')
          .permission(this.showNotificationButton)
          .className('text-current text-lg ml-3')
          .dialog(this.notification())
          .badge(amis('badge').text(this.notificationBadge).mode('text').position('top-right')),

        amis('dropdown_button')
          .hideCaret(true)
          .level('link')
          .btnClassName('avatar-sm text-current text-lg')
          .align('right')
          .icon(this.ctx.admin.userinfo.avatar, '')
          .buttons(this.actions()),
      ])
  }

  protected builder() {
    return amis('app')
      .id('app')
      .api(this.ctx.admin.api('paginate'))
      .brandName(this.ctx.admin.config.client.brand)
      .logo(this.ctx.admin.config.client.logo)
      .header(this.header())
  }

  protected render(options: Record<string, any> = {}) {
    options.inject = `
      <style>.avatar-sm img{width:2rem;height:2rem;border-radius:100%;overflow:hidden;margin:0 !important;}</style>
    `
    return super.render(options)
  }

  async index() {
    if (this.ctx.admin.isApiAction('schema')) {
      return this.ok(this.dashboard().toJSON())
    }

    return await super.index()
  }
}
