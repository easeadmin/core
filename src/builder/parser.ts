import * as components from '#core/src/builder/index'

export default function parser(json: any, type?: string): string {
  if (!type) {
    type = (json.type ?? '').replaceAll('-', '_')
  }
  let result = ''
  const mapping: Record<string, any> = {
    app: { pages: 'app_item' },
    breadcrumb: { items: 'breadcrumb_item' },
    calendar: { schedules: 'schedule_item' },
    carousel: { options: 'carousel_item' },
    crud: {
      messages: 'message_item',
      filterTogglable: 'filter_toggle_item',
      column: 'column_item',
      filterable: 'quick_filter_config',
      quickEdit: 'quick_edit_config',
    },
    grid: { options: 'grid_nav_option_item' },
    input_image: { limit: 'input_image_limit' },
    table: { column: 'table_column_item' },
    talbe2: { rowSelection: 'row_selection', expandable: 'table2_expandable' },
    list: { listItem: 'list_item' },
    tasks: { items: 'task_item' },
    timeline: { items: 'timeline_item' },
    toast: { items: 'toast_item' },
    wizard: { steps: 'step_item' },
  }
  const keyType = type as keyof typeof components
  if (type && components[keyType]) {
    const amis = new components[keyType]()
    result = `amis("${type}")`
    for (let key in json) {
      if (key === 'type') continue
      const subType = mapping[type] && mapping[type][key] ? mapping[type][key] : null
      if (key in amis) {
        if (key === 'onEvent') {
          for (let event in json[key]) {
            result += `.onEvent("${event}",[${json[key][event]['actions'].map((item: any) => parser(item, 'event')).join(',')}])`
          }
        } else if (Array.isArray(json[key])) {
          result += `.${key}([${json[key].map((item: any) => parser(item, subType)).join(',')}])`
        } else if (typeof json[key] === 'object') {
          result += `.${key}(${parser(json[key], key === 'badge' ? 'badge' : subType)})`
        } else {
          result += `.${key}(${parser(json[key])})`
        }
      } else {
        result += `.attr("${key}",${parser(json[key])})`
      }
    }
  } else {
    result = JSON.stringify(json)
  }
  return result
}
