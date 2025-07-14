The `Resource` controller implements complete CRUD methods in `Resource Controller` and constructs a fully functional CRUD table for you.

# Resource Routes
| Method      | Uri                | Method     | Description                          | Route           |
| :---------- | :----------------- | :--------- | :----------------------------------- | :-------------- |
| index()     | /resource          | GET        | List page construction & pagination data acquisition & page rendering | resource.index   |
| create()    | /resource          | GET        | Create page construction             | resource.create  |
| store()     | /resource          | POST       | Create data                          | resource.store   |
| show()      | /resource/:id      | GET        | Detail page construction & data acquisition | resource.show    |
| edit()      | /resource/:id      | GET        | Edit page construction               | resource.edit    |
| update()    | /resource/:id      | PUT        | Update data                          | resource.update  |
| destroy()   | /resource/:id      | DELETE     | Delete data                          | resource.destroy |

# Page Construction Methods
The controller needs to implement the following methods to build pages
```typescript
@inject()
export default abstract class Resource {
  protected abstract repository: Repository
  constructor(protected ctx: HttpContext) {}

  // Build table fields
  protected fields() {
    return [
        amis('column_item').name('id').label('ID')
    ]
  }

  // Build form fields, this form is a public form used by create, edit, and detail pages. If your form fields are different, it is recommended to implement creator, editor, and detail methods separately
  protected forms(isEdit: boolean): any {
    return [
        amis('input_text').name('id').label('ID').disabled(isEdit).permission(isEdit)
    ]
  }

  // Build filter form fields
  protected filters() {
    return [amis('input_text').name('id').label('ID').filter('eq')]
  }

  // Detail form
  protected detail(){
    return amis('form').initApi(this.ctx.admin.api('${id}')).body(this.forms(true)).static(true)
  }

  // Create form
  protected creator(): any {
    return amis('form')
      .api(this.ctx.admin.api('', 'ajax', 'post'))
      .body(this.forms(false))
  }

  // Edit form
  protected editor() {
    return amis('form')
      .api(this.ctx.admin.api('${id}', 'ajax', 'put'))
      .body(this.forms(true))
  }
}
```

# Custom Page Construction Methods
The above methods provide default CRUD page construction for the `Resource` controller. You can customize page construction methods as needed.
```typescript
export default abstract class Resource {
  // Custom action buttons
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

  // Custom bulk action buttons
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

  // Custom top toolbar
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

  // Custom table fields, custom action button style
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

  // Custom filter form
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

  // Custom page construction
  protected schema() {
    return amis('page').body(
      amis('crud')
        .api(this.ctx.admin.api())
        .syncLocation(false)
        .filterTogglable(true)
        .filterDefaultVisible(false)
        // .defaultParams({ orderBy: 'id', orderDir: 'desc' }) // Set default sorting
        .footerToolbar(['statistics', 'switch-per-page', 'pagination'])
        .bulkActions(this.bulkActions())
        .headerToolbar(this.headerToolbar())
        .filter(this.filter())
        .columns(this.columns())
    )
  }
}
```