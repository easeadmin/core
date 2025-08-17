import FormItem from './form_item.js'

/**
 * InputDateRange
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-date-range
 */
export default class InputDateRange extends FormItem {
  protected json: Record<string, any> = { type: 'input-date-range' }
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

  popOverContainerSelector(popOverContainerSelector: string) {
    this.json['popOverContainerSelector'] = popOverContainerSelector
    return this
  }

  minDuration(minDuration: string) {
    this.json['minDuration'] = minDuration
    return this
  }

  maxDuration(maxDuration: string) {
    this.json['maxDuration'] = maxDuration
    return this
  }

  embed(embed: boolean) {
    this.json['embed'] = embed
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

  transform(transform: string) {
    this.json['transform'] = transform
    return this
  }
}
