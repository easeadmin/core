import FormItem from './form_item.js'

/**
 * InputDatetimeRange
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-datetime-range
 */
export default class InputDatetimeRange extends FormItem {
  protected json: Record<string, any> = { type: 'input-datetime-range' }

  valueFormat(valueFormat: string) {
    this.json['valueFormat'] = valueFormat
    return this
  }

  displayFormat(displayFormat: string) {
    this.json['displayFormat'] = displayFormat
    return this
  }

  shortcuts(shortcuts: string | object) {
    this.json['shortcuts'] = shortcuts
    return this
  }

  minDate(minDate: string) {
    this.json['minDate'] = minDate
    return this
  }

  maxDate(maxDate: string) {
    this.json['maxDate'] = maxDate
    return this
  }

  utc(utc: boolean) {
    this.json['utc'] = utc
    return this
  }

  clearable(clearable: boolean) {
    this.json['clearable'] = clearable
    return this
  }

  animation(animation: boolean) {
    this.json['animation'] = animation
    return this
  }

  extraName(extraName: string[]) {
    this.json['extraName'] = extraName
    return this
  }

  popOverContainerSelector(popOverContainerSelector: string) {
    this.json['popOverContainerSelector'] = popOverContainerSelector
    return this
  }
}
