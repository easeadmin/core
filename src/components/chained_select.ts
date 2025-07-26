import Api from './api.js'
import FormItem from './form_item.js'

/**
 * ChainedSelect
 * @docs https://baidu.github.io/amis/zh-CN/components/form/chained-select
 */
export default class ChainedSelect extends FormItem {
  protected json: Record<string, any> = { type: 'chained-select' }

  options(options: object[] | string[]) {
    this.json['options'] = options
    return this
  }

  source(source: string | Record<string, any> | Api) {
    this.json['source'] = source
    return this
  }

  autoComplete(autoComplete: string | Record<string, any> | Api) {
    this.json['autoComplete'] = autoComplete
    return this
  }

  delimiter(delimiter: string) {
    this.json['delimiter'] = delimiter
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
}
