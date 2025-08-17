import FormItem from './form_item.js'

/**
 * InputMonth
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-month
 */
export default class InputMonth extends FormItem {
  protected json: Record<string, any> = { type: 'input-month' }

  value(value: string) {
    this.json['value'] = value
    return this
  }

  valueFormat(valueFormat: string) {
    this.json['valueFormat'] = valueFormat
    return this
  }

  displayFormat(displayFormat: string) {
    this.json['displayFormat'] = displayFormat
    return this
  }

  clearable(clearable: boolean) {
    this.json['clearable'] = clearable
    return this
  }

  popOverContainerSelector(popOverContainerSelector: string) {
    this.json['popOverContainerSelector'] = popOverContainerSelector
    return this
  }
}
