import Schema from './schema.js'

/**
 * TableView
 * @docs https://baidu.github.io/amis/zh-CN/components/table-view
 */
export default class TableView extends Schema<TableView> {
  protected json: Record<string, any> = { type: 'table-view' }

  width(width: number | string) {
    this.json['width'] = width
    return this
  }

  padding(padding: number | string) {
    this.json['padding'] = padding
    return this
  }

  border(border: boolean) {
    this.json['border'] = border
    return this
  }

  borderColor(borderColor: string) {
    this.json['borderColor'] = borderColor
    return this
  }

  trs(trs: object[]) {
    this.json['trs'] = trs
    return this
  }
}
