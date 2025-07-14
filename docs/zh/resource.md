控制器 `Resource` 实现了 `Resource Controller` 中完整的 CRUD 方法，并且为你构造了一个功能完善的 CRUD 表格。

# Resource 路由
|     方法      |    Uri    |    Method    |    功能描述    |    路由    |
| :---------- | :----------------- | :--------------: | :--------------: | :--------------: |
| index() | /resource | GET | 列表页面构建 & 分页数据获取 & 页面渲染 | resource.index |
| create() | /resource | GET | 新增页面构建 | resource.create |
| store() | /resource | POST  | 新增数据 | resource.store |
| show() | /resource/:id | GET  | 详情页面构建 & 数据获取 | resource.show |
| edit() | /resource/:id | GET  | 编辑页面构建 | resource.edit |
| update() | /resource/:id | PUT  | 更新数据 | resource.update |
| destroy() | /resource/:id | DELETE  | 删除数据 | resource.destroy |

# 页面构建方法
控制器需要实现以下方法来构建页面
```typescript
@inject()
export default abstract class Resource {
  protected abstract repository: Repository
  constructor(protected ctx: HttpContext) {}

  // 构建表格字段
  protected fields() {
    return [
        amis('column_item').name('id').label('ID')
    ]
  }

  // 构建表单字段，该表单为公共表单，供新增、编辑、详情页面使用，如果你各表单字段不同，建议单独实现 creator、editor、detail 方法
  protected forms(isEdit: boolean): any {
    return [
        amis('input_text').name('id').label('ID').disabled(isEdit).permission(isEdit)
    ]
  }

  // 构建筛选表单字段
  protected filters() {
    return [amis('input_text').name('id').label('ID').filter('eq')]
  }

  // 详情表单
  protected detail(){
    return amis('form').initApi(this.ctx.admin.api('${id}')).body(this.forms(true)).static(true)
  }

  // 新增表单
  protected creator(): any {
    return amis('form')
      .api(this.ctx.admin.api('', 'ajax', 'post'))
      .body(this.forms(false))
  }

  // 编辑表单
  protected editor() {
    return amis('form')
      .api(this.ctx.admin.api('${id}', 'ajax', 'put'))
      .body(this.forms(true))
  }
}
```

# 自定义页面构建方法
以上方法为控制器 `Resource` 提供了默认的 CRUD 页面构建，你可以根据需要自定义页面构建方法。
```typescript
export default abstract class Resource {
  // 自定义操作按钮
  protected actions(): any {
    return [
      amis('action')
        .label(this.ctx.admin.t('show'))
        .dialog(amis('dialog').title(this.ctx.admin.t('show')).body(this.detail())),
      amis('action')
        .label(this.ctx.admin.t('edit'))
        .dialog(amis('dialog').title(this.ctx.admin.t('edit')).body(this.editor())),
      amis('action')
        .label(this.ctx.admin.t('delete'))
        .actionType('ajax')
        .api(this.ctx.admin.api('${id}', 'ajax', 'delete'))
        .confirmText(this.ctx.admin.t('are_you_sure_delete')),
    ]
  }

  // 自定义批量操作按钮
  protected bulkActions(): any {
    return [
      amis('action')
        .actionType('ajax')
        .api(this.ctx.admin.api('${ids}', 'ajax', 'delete'))
        .label(this.ctx.admin.t('bulk_delete'))
        .level('danger')
        .confirmText(this.ctx.admin.t('are_you_sure_delete')),
    ]
  }

  // 自定义顶部工具栏
  protected headerToolbar(): any {
    return [
      amis('schema').type('filter-toggler'),
      amis('schema').type('bulkActions'),
      amis('button')
        .label(this.ctx.admin.t('create'))
        .dialog(amis('dialog').title(this.ctx.admin.t('create')).body(this.creator()))
        .align('right')
        .level('primary'),
    ]
  }

  // 自定义表格字段，自定义操作按钮样式
  protected columns(): any {
    return [
      ...this.fields(),
      amis('column_item')
        .type('operation')
        .align('right')
        .width('50')
        .label(this.ctx.admin.t('operation'))
        .buttons([
          amis('dropdown_button')
            .icon('ellipsis-h')
            .level('link')
            .hideCaret(true)
            .buttons(this.actions()),
        ]),
    ]
  }

  // 自定义筛选表单
  protected filter(): any {
    return amis('form')
      .body(this.filters())
      .actions([
        amis('action').actionType('reset').label(this.ctx.admin.t('reset')),
        amis('action')
          .actionType('submit')
          .label(this.ctx.admin.t('filter'))
          .icon('search')
          .active(true),
      ])
  }

  // 自定义页面构建
  protected schema() {
    return amis('page').body(
      amis('crud')
        .api(this.ctx.admin.api())
        .syncLocation(false)
        .filterTogglable(true)
        .filterDefaultVisible(false)
        // .defaultParams({ orderBy: 'id', orderDir: 'desc' }) // 设置默认排序
        .footerToolbar(['statistics', 'switch-per-page', 'pagination'])
        .bulkActions(this.bulkActions())
        .headerToolbar(this.headerToolbar())
        .filter(this.filter())
        .columns(this.columns())
    )
  }
}
```