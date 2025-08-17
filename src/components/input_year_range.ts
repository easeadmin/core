import InputDate from './input_date.js'

/**
 * InputYearRange
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-year-range
 */
export default class InputYearRange extends InputDate {
  protected json: Record<string, any> = { type: 'input-year-range' }

  valueFormat(valueFormat: string) {
    this.json['valueFormat'] = valueFormat
    return this
  }

  displayFormat(displayFormat: string) {
    this.json['displayFormat'] = displayFormat
    return this
  }

  placeholder(placeholder: string) {
    this.json['placeholder'] = placeholder
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

  minDuration(minDuration: string) {
    this.json['minDuration'] = minDuration
    return this
  }

  maxDuration(maxDuration: string) {
    this.json['maxDuration'] = maxDuration
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

  animation(animation: boolean) {
    this.json['animation'] = animation
    return this
  }

  popOverContainerSelector(popOverContainerSelector: string) {
    this.json['popOverContainerSelector'] = popOverContainerSelector
    return this
  }
}
