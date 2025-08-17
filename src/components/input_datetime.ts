import FormItem from './form_item.js'

/**
 * InputDatetime
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-datetime
 */
export default class InputDatetime extends FormItem {
  protected json: Record<string, any> = { type: 'input-datetime' }

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

  embed(embed: boolean) {
    this.json['embed'] = embed
    return this
  }

  timeConstraints(timeConstraints: object) {
    this.json['timeConstraints'] = timeConstraints
    return this
  }

  isEndDate(isEndDate: boolean) {
    this.json['isEndDate'] = isEndDate
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
