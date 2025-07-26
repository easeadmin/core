import FormItem from './form_item.js'
import Api from './api.js'

/**
 * Radios
 * @docs https://baidu.github.io/amis/zh-CN/components/form/radios
 */
export default class Radios extends FormItem {
  protected json: Record<string, any> = { type: 'radios' }

  options(options: object[] | string[]) {
    this.json['options'] = options
    return this
  }

  source(source: string | Record<string, any> | Api) {
    this.json['source'] = source
    return this
  }

  labelField(labelField: string) {
    this.json['labelField'] = labelField
    return this
  }

  valueField(valueField: string) {
    this.json['valueField'] = valueField
    return this
  }

  columnsCount(columnsCount: number) {
    this.json['columnsCount'] = columnsCount
    return this
  }

  selectFirst(selectFirst: boolean) {
    this.json['selectFirst'] = selectFirst
    return this
  }
}
