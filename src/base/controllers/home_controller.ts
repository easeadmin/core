import { amis, render } from '#amis/amis'
import { HttpContext } from '@adonisjs/core/http'
import UserRepository from '#base/repositories/user_repository'
import Resource from '#extends/resource'
import app from '@adonisjs/core/services/app'
const { inject } = await app.import('@adonisjs/core')

const echartPie = {
  tooltip: {
    trigger: 'item',
  },
  legend: {
    top: '5%',
    left: 'center',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2,
      },
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' },
      ],
    },
  ],
}

const echartBarStack = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      stack: 'a',
      name: 'a',
    },
    {
      data: [10, 46, 64, '-', 0, '-', 0],
      type: 'bar',
      stack: 'a',
      name: 'b',
    },
    {
      data: [30, '-', 0, 20, 10, '-', 0],
      type: 'bar',
      stack: 'a',
      name: 'c',
    },
    {
      data: [30, '-', 0, 20, 10, '-', 0],
      type: 'bar',
      stack: 'b',
      name: 'd',
    },
    {
      data: [10, 20, 150, 0, '-', 50, 10],
      type: 'bar',
      stack: 'b',
      name: 'e',
    },
  ],
}

const echartStackArea = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985',
      },
    },
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
  ],
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      label: {
        show: true,
        position: 'top',
      },
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
      data: [820, 932, 901, 934, 1290, 1330, 1320],
    },
  ],
}

@inject()
export default class UserController extends Resource {
  protected repository = new UserRepository()
  constructor(protected ctx: HttpContext) {
    super(ctx)
    this.repository.setModel(this.ctx.admin.model('User'))
  }

  /**
   * all menus list
   */
  protected fields() {
    return [
      amis('app_item')
        .label(this.ctx.admin.t('main'))
        .children([
          amis('app_item')
            .label(this.ctx.admin.t('dashboard'))
            .url('auth_dashboard')
            .isDefaultPage(true)
            .icon('dashboard')
            .schemaApi(this.ctx.admin.api(this.ctx.admin.route('auth_home.index'), 'schema')),
          amis('app_item')
            .label(this.ctx.admin.t('setting'))
            .icon('cog')
            .children([
              amis('app_item')
                .label(this.ctx.admin.t('user'))
                .url('auth_user.index')
                .schemaApi(this.ctx.admin.api(this.ctx.admin.route('auth_user.index'), 'schema')),
              amis('app_item')
                .label(this.ctx.admin.t('role'))
                .url('auth_role.index')
                .schemaApi(this.ctx.admin.api(this.ctx.admin.route('auth_role.index'), 'schema')),
              amis('app_item')
                .label(this.ctx.admin.t('menu'))
                .url('auth_menu.index')
                .schemaApi(this.ctx.admin.api(this.ctx.admin.route('auth_menu.index'), 'schema')),
              amis('app_item')
                .label(this.ctx.admin.t('permission'))
                .url('auth_permission.index')
                .schemaApi(
                  this.ctx.admin.api(this.ctx.admin.route('auth_permission.index'), 'schema')
                ),
            ]),
        ]),
    ]
  }

  protected forms() {
    return [
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
        .receiver(this.ctx.admin.api(this.ctx.admin.route('auth_home.store'), 'ajax', 'post')),
    ]
  }

  /**
   * edit profile
   */
  protected editor() {
    return amis('form')
      .attr('reload', 'window')
      .api(
        this.ctx.admin.api(
          this.ctx.admin.route('auth_login.update', { params: { id: this.ctx.admin.user.id } }),
          'ajax',
          'put'
        )
      )
      .body(this.forms())
  }

  /**
   * header toolbar
   */
  protected headerToolbar() {
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

  protected cardCount(options: {
    title: string
    tooltip: string
    icon: string
    count: number
    percent: number
    direction: 'up' | 'down'
  }) {
    let trend = options.direction === 'up' ? '↗' : '↘'
    let color = options.direction === 'up' ? 'success' : 'danger'
    return amis('card').body([
      amis('flex')
        .className('mb-2')
        .justify('space-between')
        .alignItems('center')
        .items([
          amis('wrapper')
            .size('none')
            .body([
              amis('icon').icon(options.icon).className('mr-2'),
              amis('tpl').tpl(options.title),
            ]),
          amis('remark').content(options.tooltip).placement('left').shape('circle'),
        ]),
      amis('flex')
        .justify('start')
        .alignItems('center')
        .items([
          amis('number').value(options.count).className('text-2xl mr-4'),
          amis('number')
            .value(options.percent)
            .percent(true)
            .prefix(trend)
            .className(`text-sm label label-${color}`),
        ]),
    ])
  }

  protected cardChart(options: { title: string; tooltip: string; icon: string; config: object }) {
    return amis('card').body([
      amis('flex')
        .className('mb-2')
        .justify('space-between')
        .alignItems('center')
        .items([
          amis('wrapper')
            .size('none')
            .body([
              amis('icon').icon(options.icon).className('mr-2'),
              amis('tpl').tpl(options.title),
            ]),
          amis('remark').content(options.tooltip).placement('left').shape('circle'),
        ]),
      amis('chart').config(options.config),
    ])
  }

  protected cardCustomBody(options: {
    title: string
    tooltip: string
    body: object
    icon: string
  }) {
    return amis('card').body([
      amis('flex')
        .className('mb-2')
        .justify('space-between')
        .alignItems('center')
        .items([
          amis('wrapper')
            .size('none')
            .body([
              amis('icon').icon(options.icon).className('mr-2'),
              amis('tpl').tpl(options.title),
            ]),
          amis('remark').content(options.tooltip).placement('left').shape('circle'),
        ]),
      options.body,
    ])
  }

  /**
   * dashboard schema
   */
  protected async detail() {
    return amis('page').body([
      amis('grid').columns([
        amis('grid_item')
          .md(4)
          .body(
            this.cardCount({
              title: 'Total Views',
              tooltip: 'Page view count',
              icon: 'eye',
              count: 1000,
              percent: 10,
              direction: 'up',
            })
          ),
        amis('grid_item')
          .md(4)
          .body(
            this.cardCount({
              title: 'Total Revenue',
              tooltip: 'Page revenue count',
              icon: 'btc',
              count: 888,
              percent: 8,
              direction: 'down',
            })
          ),
        amis('grid_item')
          .md(4)
          .body(
            this.cardCount({
              title: 'Bounce Rate',
              tooltip: 'Bounce rate count',
              icon: 'ban',
              count: 366,
              percent: 20,
              direction: 'up',
            })
          ),
      ]),
      amis('grid').columns([
        amis('grid_item')
          .md(7)
          .body(
            this.cardChart({
              title: 'Sales Overview',
              tooltip: 'Sales count',
              icon: 'line-chart',
              config: echartStackArea,
            })
          ),
        amis('grid_item')
          .md(5)
          .body(
            this.cardChart({
              title: 'Total Subscribe',
              tooltip: 'Subscribe count',
              icon: 'line-chart',
              config: echartBarStack,
            })
          ),
      ]),
      amis('grid').columns([
        amis('grid_item')
          .md(5)
          .body(
            this.cardChart({
              title: 'Sales ',
              tooltip: 'Selas count',
              icon: 'pie-chart',
              config: echartPie,
            })
          ),
        amis('grid_item')
          .md(7)
          .body(
            this.cardCustomBody({
              title: 'Tasks',
              tooltip: 'Your Tasks',
              icon: 'tasks',
              body: amis('tasks').items([
                amis('task_item').label('Task 1').key('key1').status(1),
                amis('task_item').label('Task 1').key('key1').status(5),
                amis('task_item').label('Task 1').key('key1').status(3),
                amis('task_item').label('Task 1').key('key1').status(4),
              ]),
            })
          ),
      ]),
    ])
  }

  protected async pages() {
    // let menus = this.ctx.admin.getMenus()
    return []
  }

  /**
   * page schema
   */
  protected async schema() {
    let fields = this.fields()
    let pages = fields.concat(await this.pages())
    return amis('app')
      .brandName(this.ctx.admin.t('brand'))
      .logo(this.ctx.admin.t('logo'))
      .pages(pages)
      .header(this.headerToolbar())
  }

  /**
   * home screen
   */
  async index() {
    // dashboard schema render
    if (this.ctx.request.header('x-action') === 'schema') {
      let dashboard = await this.detail()
      return this.success(dashboard)
    }

    // app page render
    let css =
      '<style>.avatar-sm img{width:2rem;height:2rem;border-radius:100%;overflow:hidden;margin-right:0.5rem;margin-right:10px !important}</style>'
    let schema = await this.schema()
    return render(schema, { title: this.ctx.admin.t('title'), inject: css })
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
