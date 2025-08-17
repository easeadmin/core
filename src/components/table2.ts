import Schema from './schema.js'
import Table from './table.js'

/**
 * Table2
 * @docs https://baidu.github.io/amis/zh-CN/components/table
 */
export default class Table2 extends Table {
  protected json: Record<string, any> = { type: 'table2' }

  sticky(sticky: boolean) {
    this.json['sticky'] = sticky
    return this
  }

  footer(footer: object | string) {
    this.json['footer'] = footer
    return this
  }

  loading(loading: boolean) {
    this.json['loading'] = loading
    return this
  }

  rowSelection(rowSelection: RowSelection) {
    this.json['rowSelection'] = rowSelection
    return this
  }

  rowClassNameExpr(rowClassNameExpr: string) {
    this.json['rowClassNameExpr'] = rowClassNameExpr
    return this
  }

  expandable(expandable: Expandable) {
    this.json['expandable'] = expandable
    return this
  }

  lineHeight(lineHeight: 'large' | 'middle') {
    this.json['lineHeight'] = lineHeight
    return this
  }

  footerClassName(footerClassName: string) {
    this.json['footerClassName'] = footerClassName
    return this
  }

  toolbarClassName(toolbarClassName: string) {
    this.json['toolbarClassName'] = toolbarClassName
    return this
  }
}

export class RowSelection extends Schema<RowSelection> {
  type(type: 'checkbox' | 'radio') {
    this.json['type'] = type
    return this
  }

  fixed(fixed: boolean) {
    this.json['fixed'] = fixed
    return this
  }

  keyField(keyField: string) {
    this.json['keyField'] = keyField
    return this
  }

  disableOn(disableOn: string) {
    this.json['disableOn'] = disableOn
    return this
  }

  selections(selections: { key: string; text: string }[]) {
    this.json['selections'] = selections
    return this
  }

  selectedRowKeys(selectedRowKeys: any[]) {
    this.json['selectedRowKeys'] = selectedRowKeys
    return this
  }

  selectedRowKeysExpression(selectedRowKeysExpression: string) {
    this.json['selectedRowKeysExpression'] = selectedRowKeysExpression
    return this
  }

  columnWidth(columnWidth: number) {
    this.json['columnWidth'] = columnWidth
    return this
  }

  rowClick(rowClick: boolean) {
    this.json['rowClick'] = rowClick
    return this
  }

  rowClickIgControl(rowClickIgControl: boolean) {
    this.json['rowClickIgControl'] = rowClickIgControl
    return this
  }
}

export class Expandable extends Schema<Expandable> {
  expandableOn(expandableOn: string) {
    this.json['expandableOn'] = expandableOn
    return this
  }

  keyField(keyField: string) {
    this.json['keyField'] = keyField
    return this
  }

  disableOn(disableOn: string) {
    this.json['disableOn'] = disableOn
    return this
  }

  selections(selections: { key: string; text: string }[]) {
    this.json['selections'] = selections
    return this
  }

  selectedRowKeys(selectedRowKeys: any[]) {
    this.json['selectedRowKeys'] = selectedRowKeys
    return this
  }

  selectedRowKeysExpr(selectedRowKeysExpr: string) {
    this.json['selectedRowKeysExpr'] = selectedRowKeysExpr
    return this
  }

  columnWidth(columnWidth: number) {
    this.json['columnWidth'] = columnWidth
    return this
  }
}
