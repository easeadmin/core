import Api from './api.js'
import FormItem from './form_item.js'

/**
 * MatrixCheckboxes
 * @docs https://baidu.github.io/amis/zh-CN/components/form/imatrix-checkboxes
 */
export default class MatrixCheckboxes extends FormItem {
  protected json: Record<string, any> = { type: 'imatrix-checkboxes' }

  columns(columns: object[]) {
    this.json['columns'] = columns
    return this
  }

  rows(rows: object[]) {
    this.json['rows'] = rows
    return this
  }

  rowLabel(rowLabel: string) {
    this.json['rowLabel'] = rowLabel
    return this
  }

  source(source: string | Record<string, any> | Api) {
    this.json['source'] = source
    return this
  }

  multiple(multiple: boolean) {
    this.json['multiple'] = multiple
    return this
  }

  singleSelectMode(singleSelectMode: boolean) {
    this.json['singleSelectMode'] = singleSelectMode
    return this
  }

  textAlign(textAlign: string) {
    this.json['textAlign'] = textAlign
    return this
  }

  yCheckAll(yCheckAll: boolean) {
    this.json['yCheckAll'] = yCheckAll
    return this
  }

  xCheckAll(xCheckAll: boolean) {
    this.json['xCheckAll'] = xCheckAll
    return this
  }
}
