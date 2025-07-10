import FormItem from './form_item.js'

/**
 * InputTime
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-time
 */
export default class InputTime extends FormItem {
  protected json: Record<string, any> = { type: 'input-time' }

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

  timeConstraints(timeConstraints: object) {
    this.json['timeConstraints'] = timeConstraints
    return this
  }

  popOverContainerSelector(popOverContainerSelector: string) {
    this.json['popOverContainerSelector'] = popOverContainerSelector
    return this
  }
}
