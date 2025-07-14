import { amis, render } from '#amis/amis'
import { HttpContext } from '@adonisjs/core/http'
import UserRepository from '#base/repositories/user_repository'
import Resource from '#extends/resource'
import app from '@adonisjs/core/services/app'
import svgCaptcha from 'svg-captcha'
const { inject } = await app.import('@adonisjs/core')

@inject()
export default class UserController extends Resource {
  protected repository = new UserRepository()
  constructor(protected ctx: HttpContext) {
    super(ctx)
    this.repository.setModel(this.ctx.admin.model('User'))
  }

  protected forms() {
    return [
      amis('input_text')
        .name('username')
        .label(false)
        .required(true)
        .placeholder(this.ctx.admin.t('login_username'))
        .validations('minLength:5')
        .addOn({ type: 'text', position: 'left', icon: 'fa fa-user' }),
      amis('input_password')
        .name('password')
        .label(false)
        .required(true)
        .placeholder(this.ctx.admin.t('login_password'))
        .validations('minLength:5')
        .addOn({ type: 'text', position: 'left', icon: 'fa fa-lock' }),
      amis('flex')
        .alignItems('start')
        .justify('space-between')
        .items([
          amis('input_text')
            .name('captcha')
            .label(false)
            .required(true)
            .className('w-3/4')
            .placeholder(this.ctx.admin.t('login_captcha'))
            .addOn({ type: 'text', position: 'left', icon: 'fa fa-pen' }),
          amis('image')
            .width(100)
            .height(32)
            .imageMode('original')
            .className('login-captcha')
            .src(this.ctx.admin.route('auth_login.create'))
            .onEvent('click', [
              amis('event')
                .actionType('custom')
                .action(
                  'script',
                  'ease.refreshImage(document.querySelector(".login-captcha img"))'
                ),
            ]),
        ]),
      amis('checkbox')
        .name('remember')
        .trueValue(true)
        .option(this.ctx.admin.t('login_remember_me')),
    ]
  }

  protected creator() {
    return amis('form')
      .submitText(this.ctx.admin.t('login_now'))
      .panelClassName('login-form')
      .style({ maxWidth: '360pt' })
      .redirect(this.ctx.admin.route('auth_home.index'))
      .api(this.ctx.admin.api('', 'ajax', 'post'))
      .title([
        amis('flex')
          .justify('center')
          .items([
            amis('image')
              .id('logo')
              .width(50)
              .height(50)
              .imageMode('original')
              .innerClassName('no-border')
              .src(this.ctx.admin.t('logo', undefined, '/ease/images/logo.png')),
          ]),
        amis('container')
          .className('text-center text-xl font-bold mt-2')
          .body(this.ctx.admin.t('login_subtitle', undefined, 'Welcome back!')),
      ])
      .body(this.forms())
  }

  protected schema() {
    return amis('page')
      .css({
        '.login-form button[type="submit"]': {
          margin: '0 !important',
          width: '100% !important',
        },
      })
      .cssVars({
        '--borderWidth': '0',
        '--Page-main-bg': 'none',
        '--Form-item-mobile-gap': '1rem',
        '--Panel-borderRadius': '10pt',
        '--Panel-heading-bottom-border-style': 'none',
        '--Panel-footer-top-border-style': 'none',
        '--Panel-marginBottom': 'none',
        '--Panel-headingPadding': '2rem',
        '--Panel-bodyPadding': '0 2rem 2rem 2rem',
        '--Panel-footerPadding': '2rem',
        '--Panel-heading-bg-color': 'none',
      })
      .body([
        amis('hbox')
          .id('login-hbox')
          .valign('middle')
          .align('center')
          .style({ height: '100%' })
          .columns([this.creator()]),
      ])
  }

  async index() {
    return render(this.schema(), {
      title: this.ctx.admin.t('login_title'),
      props: { context: this.ctx.admin.config.client },
    })
  }

  async create() {
    const ctx: any = this.ctx
    const svg = svgCaptcha.create({
      noise: 2,
      height: 40,
      color: true,
      fontSize: 60,
      ignoreChars: '0o1il',
    })
    ctx.session.put('captcha', svg.text)
    ctx.response.type('.svg')
    return svg.data
  }

  async store() {
    let captcha = this.ctx.request.input('captcha').toLowerCase()
    let session = (this.ctx as any).session.get('captcha').toLowerCase()
    if (captcha !== session) {
      return this.error(this.ctx.admin.t('captcha_is_incorrect'), 1)
    }
    try {
      const input = this.ctx.request.only(['username', 'password', 'remember'])
      let model: any = this.repository.getModel()
      const user = await model.verifyCredentials(input.username, input.password)
      await (this.ctx as any).auth.use(this.ctx.admin.asname).login(user, !!input.remember)
      return this.success(user)
    } catch (e) {
      return this.error(this.ctx.admin.t('login_failed'), 2)
    }
  }

  async update() {
    const input = this.ctx.request.only(['avatar', 'nickname', 'old_password', 'new_password'])
    const update: Record<string, string> = { nickname: input.nickname, avatar: input.avatar }
    if (input.old_password && input.new_password) {
      if (input.new_password.length < 5) {
        return this.error(this.ctx.admin.t('new_password_too_short'), 1)
      } else {
        let oldSuccess = await this.ctx.admin.user.verifyPassword(input.old_password)
        if (oldSuccess) {
          update.password = input.new_password
        } else {
          return this.error(this.ctx.admin.t('old_password_is_incorrect'), 2)
        }
      }
    }
    let result = this.repository.update([this.ctx.admin.user.id], update)
    return this.success(result, this.ctx.admin.t('edit_success'))
  }

  async destroy() {
    await (this.ctx as any).auth.use(this.ctx.admin.asname).logout()
    return this.success(
      { redirect: this.ctx.admin.route('auth_login.index') },
      this.ctx.admin.t('logout_success')
    )
  }
}
