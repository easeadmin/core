import Api from './api.js'
import FormItem from './form_item.js'

/**
 * ListSelect
 * @docs https://baidu.github.io/amis/zh-CN/components/form/list-select
 */
export default class ListSelect extends FormItem {
  protected json: Record<string, any> = { type: 'list-select' }

  options(options: object[] | string[]) {
    this.json['options'] = options
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

  labelField(labelField: string) {
    this.json['labelField'] = labelField
    return this
  }

  valueField(valueField: string) {
    this.json['valueField'] = valueField
    return this
  }

  joinValues(joinValues: boolean) {
    this.json['joinValues'] = joinValues
    return this
  }

  extractValue(extractValue: boolean) {
    this.json['extractValue'] = extractValue
    return this
  }

  listClassName(listClassName: string) {
    this.json['listClassName'] = listClassName
    return this
  }
}
