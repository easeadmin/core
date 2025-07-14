import { amis, render } from '#amis/amis'
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

  /**
   * all menus
   */
  private async pages() {
    let menus = await this.ctx.admin.getMenus()
    let jsons = menus.map((item) => {
      let menu = amis('app_item')
        .label(item.name)
        .visible(item.visible)
        .icon(item.icon)
        .attr('id', item.id)
        .attr('parentId', item.parentId)
      if (item.slug) {
        menu.url(item.slug).schemaApi(this.ctx.admin.api(item.slug, 'schema'))
      }
      return menu.toJSON()
    })
    let trees = this.ctx.admin.makeTrees(jsons)
    return trees
  }

  /**
   * edit profile
   */
  protected editor(): any {
    return amis('form')
      .api(this.ctx.admin.api('#0', 'ajax', 'put'))
      .reload('window')
      .body([
        amis('input_text')
          .name('nickname')
          .label(this.ctx.admin.t('nickname'))
          .value(this.ctx.admin.userinfo?.nickname),
        amis('input_password')
          .name('old_password')
          .label(this.ctx.admin.t('old_password'))
          .validations('minLength:5'),
        amis('input_password')
          .name('new_password')
          .label(this.ctx.admin.t('new_password'))
          .validations('minLength:5'),
        amis('input_password')
          .label(this.ctx.admin.t('password_confirm'))
          .validations('equalsField:${new_password}'),
        amis('input_image')
          .name('avatar')
          .label(this.ctx.admin.t('avatar'))
          .value(this.ctx.admin.userinfo?.avatar)
          .receiver(this.ctx.admin.api('', 'ajax', 'post')),
      ])
  }

  /**
   * header toolbar
   */
  protected headerToolbar(): any {
    return amis('flex')
      .className('w-full')
      .justify('flex-end')
      .alignItems('center')
      .items([
        amis('button')
          .icon('refresh')
          .size('sm')
          .level('link')
          .className('text-current text-lg mr-1')
          .onClick('window.location.reload()'),
        amis('button')
          .icon('arrows-alt')
          .size('sm')
          .level('link')
          .className('text-current text-lg mr-1')
          .onClick(
            'document.fullscreenElement? document.exitFullscreen() : document.body.requestFullscreen()'
          ),
        amis('button')
          .icon('bell')
          .size('sm')
          .level('link')
          .className('text-current text-lg mr-1')
          .badge(amis('badge').id('badge').mode('text').offset([-5, 5]).text('1'))
          .dialog(amis('dialog').body(amis('list'))),
        amis('divider').direction('vertical').className('ml-2 mr-2'),
        amis('dropdown_button')
          .hideCaret(true)
          .level('link')
          .btnClassName('avatar-sm text-current text-lg')
          .align('right')
          .label(this.ctx.admin.userinfo?.nickname)
          .icon(this.ctx.admin.userinfo?.avatar, '')
          .buttons([
            amis('button')
              .icon('user')
              .label(this.ctx.admin.t('profile'))
              .iconClassName('mr-2')
              .dialog(amis('dialog').title(this.ctx.admin.t('profile')).body(this.editor())),
            amis('button')
              .icon('sign-out')
              .label(this.ctx.admin.t('logout'))
              .iconClassName('mr-2')
              .actionType('ajax')
              .api(
                this.ctx.admin.api(
                  this.ctx.admin.route('auth_login.destroy', {
                    params: { id: this.ctx.admin.user.id },
                  }),
                  'ajax',
                  'delete'
                )
              )
              .reload('window'),
          ]),
      ])
  }

  /**
   * dashboard schema
   */
  protected columns(): any {
    return ['Dashboard home']
  }

  /**
   * page schema
   */
  protected schema(): any {
    return amis('page').body(this.columns())
  }

  /**
   * home screen
   */
  async index() {
    // dashboard schema render
    if (this.ctx.request.header('x-action') === 'schema') {
      let dashboard = this.schema()
      return this.success(dashboard)
    }

    // app page render
    let home = amis('app')
      .brandName(this.ctx.admin.t('brand'))
      .logo(this.ctx.admin.t('logo'))
      .header(this.headerToolbar())
      .pages(await this.pages())
    let css =
      '<style>.avatar-sm img{width:2rem;height:2rem;border-radius:100%;overflow:hidden;margin-right:0.5rem;margin-right:10px !important}</style>'
    return render(home.toJSON(), {
      title: this.ctx.admin.t('title'),
      inject: css,
      props: { context: this.ctx.admin.config.client },
    })
  }

  /**
   * updload file
   */
  async store() {
    const file = this.ctx.request.file('file', {
      size: this.ctx.admin.config.upload.maxsize,
      extnames: this.ctx.admin.config.upload.extnames,
    })
    if (!file) {
      return this.error(this.ctx.admin.t('file_missing'), 1)
    }

    let name = `${Date.now()}.${file.extname}`
    let path = `/uploads/user_${this.ctx.admin.user?.username}`
    let url = `${path}/${name}`
    if ('moveToDisk' in file) {
      await (file as any).moveToDisk(name, this.ctx.admin.config.upload.driver)
      url = file.meta.url
    } else {
      await file.move(app.publicPath(path), { name: name })
    }
    return this.success({ value: url }, this.ctx.admin.t('upload_success'))
  }

  async edit() {
    return this.index()
  }

  async create() {
    return this.index()
  }

  async destroy() {
    return this.error('missing request')
  }
}
