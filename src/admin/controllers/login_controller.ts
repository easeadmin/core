import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import LoginRepository from '../repositories/login_repository.js'
import Controller from '../../controllers/controller.js'
import amis from '../../builder/amis.js'

@inject()
export default class LoginController extends Controller {
  constructor(
    protected ctx: HttpContext,
    protected repository: LoginRepository
  ) {
    super(ctx)
  }

  protected builder() {
    const client = this.ctx.admin.config.client
    const title = [
      amis('flex')
        .justify('center')
        .items([
          amis('image')
            .width(50)
            .height(50)
            .imageMode('original')
            .innerClassName('no-border')
            .src(client.logo),
        ]),
      amis('container')
        .className('text-center text-xl font-bold mt-2')
        .body(this.ctx.admin.t('welcome_back')),
    ]
    const form = amis('form')
      .api(this.ctx.admin.api('store'))
      .submitText(this.ctx.admin.t('login'))
      .panelClassName('login-form')
      .style({ maxWidth: '360pt' })
      .redirect(this.ctx.admin.url('auth_home.index'))
      .api(this.ctx.admin.api('store'))
      .title(title)
      .body([
        amis('input_text')
          .name('username')
          .label(false)
          .required(true)
          .placeholder(this.ctx.admin.t('username'))
          .validations('minLength:5')
          .addOn({ type: 'text', position: 'left', icon: 'fa fa-user' }),
        amis('input_password')
          .name('password')
          .label(false)
          .required(true)
          .placeholder(this.ctx.admin.t('password'))
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
              .placeholder(this.ctx.admin.t('captcha'))
              .addOn({ type: 'text', position: 'left', icon: 'fa fa-pen' }),
            amis('image')
              .width(100)
              .height(32)
              .imageMode('original')
              .className('login-captcha')
              .src(this.ctx.admin.url('auth_login.show', { params: { id: 1 } }))
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
          .value(client.login_default_remember)
          .option(this.ctx.admin.t('remember_me')),
      ])
    const page = amis('page')
      .css({
        '.login-form button[type="submit"]': {
          margin: '0 !important',
          width: '100% !important',
        },
      })
      .style({ height: '100%' })
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
          .columns([form]),
      ])

    if (client.login_side_align !== 'center') {
      let bg = amis('container').className('login-side')
      let hbox = page.find('login-hbox')
      let to = client.login_side_align === 'left' ? 'unshift' : 'push'
      hbox.attr('columns', bg, to)
      page
        .attr(
          'cssVars',
          {
            '--Panel-shadow': 'none',
            '--Page-body-padding': '0',
            '--Panel-bg-color': 'none',
            '--Panel-top-border-style': 'none',
            '--Panel-bottom-border-style': 'none',
            '--Panel-left-border-style': 'none',
            '--Panel-right-border-style': 'none',
          },
          'merge'
        )
        .attr(
          'css',
          {
            '.login-side': {
              'height': '100%',
              'background-image': `url(${client.login_side_image}) !important`,
              'background-size': 'cover !important',
              'background-position': 'center !important',
              'background-repeat': 'no-repeat !important',
            },
            '.login-form': {
              margin: '0 20pt !important',
            },
          },
          'merge'
        )
    }

    return page
  }

  async show(): Promise<any> {
    return await this.repository.show()
  }

  async store(): Promise<any> {
    return await this.repository.store(this.ctx.request.body())
  }
}
