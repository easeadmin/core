import FormItem from './form_item.js'

/**
 * InputDate
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-date
 */
export default class InputDate extends FormItem {
  protected json: Record<string, any> = { type: 'input-date' }

  valueFormat(valueFormat: string) {
    this.json['valueFormat'] = valueFormat
    return this
  }

  displayFormat(displayFormat: string) {
    this.json['displayFormat'] = displayFormat
    return this
  }

  closeOnSelect(closeOnSelect: boolean) {
    this.json['closeOnSelect'] = closeOnSelect
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

  embed(embed: boolean) {
    this.json['embed'] = embed
    return this
  }

  disabledDate(disabledDate: string) {
    this.json['disabledDate'] = disabledDate
    return this
  }

  popOverContainerSelector(popOverContainerSelector: string) {
    this.json['popOverContainerSelector'] = popOverContainerSelector
    return this
  }
}
